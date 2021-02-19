
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    const identity = x => x;
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }

    const is_client = typeof window !== 'undefined';
    let now = is_client
        ? () => window.performance.now()
        : () => Date.now();
    let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

    const tasks = new Set();
    function run_tasks(now) {
        tasks.forEach(task => {
            if (!task.c(now)) {
                tasks.delete(task);
                task.f();
            }
        });
        if (tasks.size !== 0)
            raf(run_tasks);
    }
    /**
     * Creates a new task that runs on each raf frame
     * until it returns a falsy value or is aborted
     */
    function loop(callback) {
        let task;
        if (tasks.size === 0)
            raf(run_tasks);
        return {
            promise: new Promise(fulfill => {
                tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
                tasks.delete(task);
            }
        };
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    const active_docs = new Set();
    let active = 0;
    // https://github.com/darkskyapp/string-hash/blob/master/index.js
    function hash(str) {
        let hash = 5381;
        let i = str.length;
        while (i--)
            hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
        return hash >>> 0;
    }
    function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
        const step = 16.666 / duration;
        let keyframes = '{\n';
        for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
        }
        const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
        const name = `__svelte_${hash(rule)}_${uid}`;
        const doc = node.ownerDocument;
        active_docs.add(doc);
        const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
        const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});
        if (!current_rules[name]) {
            current_rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
        }
        const animation = node.style.animation || '';
        node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
        active += 1;
        return name;
    }
    function delete_rule(node, name) {
        const previous = (node.style.animation || '').split(', ');
        const next = previous.filter(name
            ? anim => anim.indexOf(name) < 0 // remove specific animation
            : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
        );
        const deleted = previous.length - next.length;
        if (deleted) {
            node.style.animation = next.join(', ');
            active -= deleted;
            if (!active)
                clear_rules();
        }
    }
    function clear_rules() {
        raf(() => {
            if (active)
                return;
            active_docs.forEach(doc => {
                const stylesheet = doc.__svelte_stylesheet;
                let i = stylesheet.cssRules.length;
                while (i--)
                    stylesheet.deleteRule(i);
                doc.__svelte_rules = {};
            });
            active_docs.clear();
        });
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }

    let promise;
    function wait() {
        if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
                promise = null;
            });
        }
        return promise;
    }
    function dispatch(node, direction, kind) {
        node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    const null_transition = { duration: 0 };
    function create_in_transition(node, fn, params) {
        let config = fn(node, params);
        let running = false;
        let animation_name;
        let task;
        let uid = 0;
        function cleanup() {
            if (animation_name)
                delete_rule(node, animation_name);
        }
        function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
            if (css)
                animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
            tick(0, 1);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            if (task)
                task.abort();
            running = true;
            add_render_callback(() => dispatch(node, true, 'start'));
            task = loop(now => {
                if (running) {
                    if (now >= end_time) {
                        tick(1, 0);
                        dispatch(node, true, 'end');
                        cleanup();
                        return running = false;
                    }
                    if (now >= start_time) {
                        const t = easing((now - start_time) / duration);
                        tick(t, 1 - t);
                    }
                }
                return running;
            });
        }
        let started = false;
        return {
            start() {
                if (started)
                    return;
                delete_rule(node);
                if (is_function(config)) {
                    config = config();
                    wait().then(go);
                }
                else {
                    go();
                }
            },
            invalidate() {
                started = false;
            },
            end() {
                if (running) {
                    cleanup();
                    running = false;
                }
            }
        };
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.32.3' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src\components\Aside.svelte generated by Svelte v3.32.3 */

    const { window: window_1 } = globals;
    const file = "src\\components\\Aside.svelte";

    function create_fragment(ctx) {
    	let div3;
    	let img0;
    	let img0_src_value;
    	let t0;
    	let h2;
    	let t2;
    	let div1;
    	let div0;
    	let a0;
    	let img1;
    	let img1_src_value;
    	let t3;
    	let t4;
    	let a1;
    	let img2;
    	let img2_src_value;
    	let t5;
    	let t6;
    	let a2;
    	let img3;
    	let img3_src_value;
    	let t7;
    	let t8;
    	let a3;
    	let img4;
    	let img4_src_value;
    	let span;
    	let t10;
    	let div2;
    	let a4;
    	let img5;
    	let img5_src_value;
    	let t11;
    	let mounted;
    	let dispose;
    	add_render_callback(/*onwindowresize*/ ctx[1]);

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			img0 = element("img");
    			t0 = space();
    			h2 = element("h2");
    			h2.textContent = "Antoine Renciot";
    			t2 = space();
    			div1 = element("div");
    			div0 = element("div");
    			a0 = element("a");
    			img1 = element("img");
    			t3 = text("@rimuruu");
    			t4 = space();
    			a1 = element("a");
    			img2 = element("img");
    			t5 = text("Ketto");
    			t6 = space();
    			a2 = element("a");
    			img3 = element("img");
    			t7 = text("Ketto");
    			t8 = space();
    			a3 = element("a");
    			img4 = element("img");
    			span = element("span");
    			span.textContent = "ketto_sy";
    			t10 = space();
    			div2 = element("div");
    			a4 = element("a");
    			img5 = element("img");
    			t11 = text("antoine.renciot@gmail.com");
    			attr_dev(img0, "class", "pic svelte-l72ovz");
    			if (img0.src !== (img0_src_value = "/img/pic.png")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "pic");
    			add_location(img0, file, 82, 0, 1491);
    			attr_dev(h2, "class", "text-center mt-5");
    			add_location(h2, file, 83, 0, 1539);
    			attr_dev(img1, "class", "mr-2 mt-1 logo svelte-l72ovz");
    			if (img1.src !== (img1_src_value = "img/git.svg")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "github");
    			attr_dev(img1, "height", "20px");
    			attr_dev(img1, "width", "20px");
    			add_location(img1, file, 86, 72, 1732);
    			attr_dev(a0, "href", "https://github.com/Rimuruu");
    			attr_dev(a0, "class", "margin-auto text-secondary svelte-l72ovz");
    			add_location(a0, file, 86, 0, 1660);
    			attr_dev(img2, "class", "mr-2 mt-1 logo svelte-l72ovz");
    			if (img2.src !== (img2_src_value = "img/steam.svg")) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "alt", "steam");
    			attr_dev(img2, "height", "20px");
    			attr_dev(img2, "width", "20px");
    			add_location(img2, file, 92, 93, 1953);
    			attr_dev(a1, "href", "https://steamcommunity.com/id/MekakushiDainana/");
    			attr_dev(a1, "class", "margin-auto text-secondary svelte-l72ovz");
    			add_location(a1, file, 92, 0, 1860);
    			attr_dev(img3, "class", "mr-2 mt-1 logo svelte-l72ovz");
    			if (img3.src !== (img3_src_value = "img/osu.svg")) attr_dev(img3, "src", img3_src_value);
    			attr_dev(img3, "alt", "osu");
    			attr_dev(img3, "height", "20px");
    			attr_dev(img3, "width", "20px");
    			add_location(img3, file, 98, 78, 2157);
    			attr_dev(a2, "href", "https://osu.ppy.sh/users/3186421");
    			attr_dev(a2, "class", "margin-auto text-secondary svelte-l72ovz");
    			add_location(a2, file, 98, 0, 2079);
    			attr_dev(img4, "class", "mr-2 mt-1 logo svelte-l72ovz");
    			if (img4.src !== (img4_src_value = "img/mal.png")) attr_dev(img4, "src", img4_src_value);
    			attr_dev(img4, "alt", "mal");
    			attr_dev(img4, "height", "20px");
    			attr_dev(img4, "width", "20px");
    			add_location(img4, file, 104, 88, 2367);
    			add_location(span, file, 110, 5, 2481);
    			attr_dev(a3, "href", "https://myanimelist.net/animelist/ketto_sy");
    			attr_dev(a3, "class", "margin-auto text-secondary svelte-l72ovz");
    			add_location(a3, file, 104, 0, 2279);
    			attr_dev(div0, "class", "d-flex flex-column text  svelte-l72ovz");
    			add_location(div0, file, 85, 0, 1620);
    			attr_dev(div1, "class", "container my-3");
    			add_location(div1, file, 84, 0, 1590);
    			attr_dev(img5, "class", "mr-1 mt-1 logo svelte-l72ovz");
    			if (img5.src !== (img5_src_value = "img/mail.svg")) attr_dev(img5, "src", img5_src_value);
    			attr_dev(img5, "alt", "un triangle aux trois côtés égaux");
    			attr_dev(img5, "height", "20px");
    			attr_dev(img5, "width", "20px");
    			add_location(img5, file, 116, 79, 2658);
    			attr_dev(a4, "href", "mailto:antoine.renciot@gmail.com");
    			attr_dev(a4, "class", "text-muted my-5 text-italic");
    			add_location(a4, file, 116, 0, 2579);
    			attr_dev(div2, "class", "d-flex flex-column text text-center svelte-l72ovz");
    			add_location(div2, file, 115, 0, 2528);
    			attr_dev(div3, "id", "style-1");
    			attr_dev(div3, "class", "container-fluid aside h-100 min-vh-100 rounded-right m-0 text-light overflow-auto svelte-l72ovz");
    			add_location(div3, file, 80, 0, 1378);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, img0);
    			append_dev(div3, t0);
    			append_dev(div3, h2);
    			append_dev(div3, t2);
    			append_dev(div3, div1);
    			append_dev(div1, div0);
    			append_dev(div0, a0);
    			append_dev(a0, img1);
    			append_dev(a0, t3);
    			append_dev(div0, t4);
    			append_dev(div0, a1);
    			append_dev(a1, img2);
    			append_dev(a1, t5);
    			append_dev(div0, t6);
    			append_dev(div0, a2);
    			append_dev(a2, img3);
    			append_dev(a2, t7);
    			append_dev(div0, t8);
    			append_dev(div0, a3);
    			append_dev(a3, img4);
    			append_dev(a3, span);
    			append_dev(div3, t10);
    			append_dev(div3, div2);
    			append_dev(div2, a4);
    			append_dev(a4, img5);
    			append_dev(a4, t11);

    			if (!mounted) {
    				dispose = listen_dev(window_1, "resize", /*onwindowresize*/ ctx[1]);
    				mounted = true;
    			}
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Aside", slots, []);
    	let window;
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Aside> was created with unknown prop '${key}'`);
    	});

    	function onwindowresize() {
    		$$invalidate(0, window = window_1.innerWidth);
    	}

    	$$self.$capture_state = () => ({ window });

    	$$self.$inject_state = $$props => {
    		if ("window" in $$props) $$invalidate(0, window = $$props.window);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [window, onwindowresize];
    }

    class Aside extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Aside",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    function cubicOut(t) {
        const f = t - 1.0;
        return f * f * f + 1.0;
    }

    function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
        const o = +getComputedStyle(node).opacity;
        return {
            delay,
            duration,
            easing,
            css: t => `opacity: ${t * o}`
        };
    }
    function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
        const style = getComputedStyle(node);
        const target_opacity = +style.opacity;
        const transform = style.transform === 'none' ? '' : style.transform;
        const od = target_opacity * (1 - opacity);
        return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
        };
    }

    /* src\pages\History.svelte generated by Svelte v3.32.3 */
    const file$1 = "src\\pages\\History.svelte";

    function create_fragment$1(ctx) {
    	let h20;
    	let t1;
    	let h50;
    	let t3;
    	let p0;
    	let t5;
    	let h21;
    	let t7;
    	let h51;
    	let t9;
    	let p1;
    	let t11;
    	let h52;
    	let t13;
    	let p2;
    	let t15;
    	let h53;
    	let t17;
    	let p3;
    	let t19;
    	let h54;
    	let t21;
    	let p4;
    	let t22;
    	let br;
    	let t23;

    	const block = {
    		c: function create() {
    			h20 = element("h2");
    			h20.textContent = "Expérience";
    			t1 = space();
    			h50 = element("h5");
    			h50.textContent = "INSEAD | 2020 – Stage Développeur web";
    			t3 = space();
    			p0 = element("p");
    			p0.textContent = "Transposition de Flash à Javascript d'une application de gestion d'entreprise à but éducatif.";
    			t5 = space();
    			h21 = element("h2");
    			h21.textContent = "Formation";
    			t7 = space();
    			h51 = element("h5");
    			h51.textContent = "Licence Informatique";
    			t9 = space();
    			p1 = element("p");
    			p1.textContent = "Université de Paris-Saclay";
    			t11 = space();
    			h52 = element("h5");
    			h52.textContent = "2ème année DUT informatique en programme d'échange";
    			t13 = space();
    			p2 = element("p");
    			p2.textContent = "Université du Québec à Chicoutimi";
    			t15 = space();
    			h53 = element("h5");
    			h53.textContent = "1ère année DUT Informatique";
    			t17 = space();
    			p3 = element("p");
    			p3.textContent = "IUT de Sénart-Fontainebleau, Lieusaint";
    			t19 = space();
    			h54 = element("h5");
    			h54.textContent = "Baccalauréat scientifique";
    			t21 = space();
    			p4 = element("p");
    			t22 = text("Lycée de Montegron ");
    			br = element("br");
    			t23 = text("Option sciences de la vie et de la terre, Spécialité informatique et sciences du numérique.");
    			add_location(h20, file$1, 6, 0, 84);
    			attr_dev(h50, "class", "ml-5 text-light");
    			add_location(h50, file$1, 7, 0, 106);
    			attr_dev(p0, "class", "ml-5 text-italic text-muted");
    			add_location(p0, file$1, 8, 4, 183);
    			add_location(h21, file$1, 10, 0, 323);
    			attr_dev(h51, "class", "ml-5 text-light");
    			add_location(h51, file$1, 11, 0, 344);
    			attr_dev(p1, "class", "ml-5 text-italic text-muted");
    			add_location(p1, file$1, 12, 4, 403);
    			attr_dev(h52, "class", "ml-5 text-light");
    			add_location(h52, file$1, 13, 0, 475);
    			attr_dev(p2, "class", "ml-5 text-italic text-muted");
    			add_location(p2, file$1, 14, 4, 564);
    			attr_dev(h53, "class", "ml-5 text-light");
    			add_location(h53, file$1, 15, 0, 643);
    			attr_dev(p3, "class", "ml-5 text-italic text-muted");
    			add_location(p3, file$1, 16, 4, 709);
    			attr_dev(h54, "class", "ml-5 text-light");
    			add_location(h54, file$1, 17, 0, 792);
    			add_location(br, file$1, 18, 62, 914);
    			attr_dev(p4, "class", "ml-5 text-italic text-muted");
    			add_location(p4, file$1, 18, 4, 856);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h20, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h50, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, h21, anchor);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, h51, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, p1, anchor);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, h52, anchor);
    			insert_dev(target, t13, anchor);
    			insert_dev(target, p2, anchor);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, h53, anchor);
    			insert_dev(target, t17, anchor);
    			insert_dev(target, p3, anchor);
    			insert_dev(target, t19, anchor);
    			insert_dev(target, h54, anchor);
    			insert_dev(target, t21, anchor);
    			insert_dev(target, p4, anchor);
    			append_dev(p4, t22);
    			append_dev(p4, br);
    			append_dev(p4, t23);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h20);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h50);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(h21);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(h51);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(h52);
    			if (detaching) detach_dev(t13);
    			if (detaching) detach_dev(p2);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(h53);
    			if (detaching) detach_dev(t17);
    			if (detaching) detach_dev(p3);
    			if (detaching) detach_dev(t19);
    			if (detaching) detach_dev(h54);
    			if (detaching) detach_dev(t21);
    			if (detaching) detach_dev(p4);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("History", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<History> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class History extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "History",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src\game\Tetris.svelte generated by Svelte v3.32.3 */
    const file$2 = "src\\game\\Tetris.svelte";

    function create_fragment$2(ctx) {
    	let div2;
    	let div0;
    	let canvas_1;
    	let t0;
    	let div1;
    	let h1;
    	let t1;
    	let a;
    	let t3;
    	let h2;
    	let t4;
    	let br0;
    	let t5;
    	let br1;
    	let t6;
    	let br2;
    	let t7;
    	let br3;
    	let t8;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			canvas_1 = element("canvas");
    			t0 = space();
    			div1 = element("div");
    			h1 = element("h1");
    			t1 = text("Score :");
    			a = element("a");
    			a.textContent = "0";
    			t3 = space();
    			h2 = element("h2");
    			t4 = text("Controle:");
    			br0 = element("br");
    			t5 = text(" Z=ROTATE");
    			br1 = element("br");
    			t6 = text(" S=DOWN");
    			br2 = element("br");
    			t7 = text(" Q=LEFT");
    			br3 = element("br");
    			t8 = text(" D=RIGHT");
    			attr_dev(canvas_1, "id", "frame");
    			attr_dev(canvas_1, "width", "400");
    			attr_dev(canvas_1, "height", "800");
    			add_location(canvas_1, file$2, 449, 3, 7192);
    			attr_dev(div0, "id", "tetris");
    			add_location(div0, file$2, 447, 2, 7166);
    			attr_dev(a, "id", "score");
    			add_location(a, file$2, 454, 38, 7340);
    			attr_dev(h1, "class", "text-dark");
    			add_location(h1, file$2, 454, 9, 7311);
    			add_location(br0, file$2, 455, 46, 7435);
    			add_location(br1, file$2, 455, 59, 7448);
    			add_location(br2, file$2, 455, 70, 7459);
    			add_location(br3, file$2, 455, 81, 7470);
    			attr_dev(h2, "class", "text-dark");
    			attr_dev(h2, "id", "tetrist");
    			add_location(h2, file$2, 455, 2, 7391);
    			attr_dev(div1, "id", "help");
    			attr_dev(div1, "class", "svelte-mlsbvo");
    			add_location(div1, file$2, 453, 2, 7285);
    			attr_dev(div2, "class", "d-flex d-inline-block");
    			attr_dev(div2, "id", "wrap");
    			add_location(div2, file$2, 445, 1, 7115);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div0, canvas_1);
    			/*canvas_1_binding*/ ctx[2](canvas_1);
    			append_dev(div2, t0);
    			append_dev(div2, div1);
    			append_dev(div1, h1);
    			append_dev(h1, t1);
    			append_dev(h1, a);
    			/*a_binding*/ ctx[3](a);
    			append_dev(div1, t3);
    			append_dev(div1, h2);
    			append_dev(h2, t4);
    			append_dev(h2, br0);
    			append_dev(h2, t5);
    			append_dev(h2, br1);
    			append_dev(h2, t6);
    			append_dev(h2, br2);
    			append_dev(h2, t7);
    			append_dev(h2, br3);
    			append_dev(h2, t8);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			/*canvas_1_binding*/ ctx[2](null);
    			/*a_binding*/ ctx[3](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const HRB = 40;
    const COL = 10;
    const ROW = 20;
    const SK = "#2f1a4a";
    const TKS = "#8361b0";

    function getRandomInt(min, max) {
    	min = Math.ceil(min);
    	max = Math.floor(max);
    	return Math.floor(Math.random() * (max - min)) + min;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Tetris", slots, []);

    	const I = [
    		[[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    		[[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    		[[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]],
    		[[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]
    	];

    	const J = [
    		[[1, 0, 0], [1, 1, 1], [0, 0, 0]],
    		[[0, 1, 1], [0, 1, 0], [0, 1, 0]],
    		[[0, 0, 0], [1, 1, 1], [0, 0, 1]],
    		[[0, 1, 0], [0, 1, 0], [1, 1, 0]]
    	];

    	const L = [
    		[[0, 0, 1], [1, 1, 1], [0, 0, 0]],
    		[[0, 1, 0], [0, 1, 0], [0, 1, 1]],
    		[[0, 0, 0], [1, 1, 1], [1, 0, 0]],
    		[[1, 1, 0], [0, 1, 0], [0, 1, 0]]
    	];

    	const O = [[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]];

    	const S = [
    		[[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    		[[0, 1, 0], [0, 1, 1], [0, 0, 1]],
    		[[0, 0, 0], [0, 1, 1], [1, 1, 0]],
    		[[1, 0, 0], [1, 1, 0], [0, 1, 0]]
    	];

    	const T = [
    		[[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    		[[0, 1, 0], [0, 1, 1], [0, 1, 0]],
    		[[0, 0, 0], [1, 1, 1], [0, 1, 0]],
    		[[0, 1, 0], [1, 1, 0], [0, 1, 0]]
    	];

    	const Z = [
    		[[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    		[[0, 0, 1], [0, 1, 1], [0, 1, 0]],
    		[[0, 0, 0], [1, 1, 0], [0, 1, 1]],
    		[[0, 1, 0], [1, 1, 0], [1, 0, 0]]
    	];

    	const PIECES = [
    		[Z, "red"],
    		[S, "green"],
    		[T, "yellow"],
    		[O, "blue"],
    		[L, "purple"],
    		[I, "cyan"],
    		[J, "orange"]
    	];

    	var canvas;
    	var scoring;
    	var context;
    	var torei = [];
    	let r;
    	let c;
    	let y;

    	for (r = 0; r < ROW; r++) {
    		torei[r] = [];

    		for (c = 0; c < COL; c++) {
    			torei[r][c] = SK;
    		}
    	}

    	function drawHRB(x, y, color) {
    		context.fillStyle = color;
    		context.fillRect(x * HRB, y * HRB, HRB, HRB);
    		context.strokeStyle = TKS;
    		context.strokeRect(x * HRB, y * HRB, HRB, HRB);
    	}

    	function drawBoard() {
    		for (r = 0; r < ROW; r++) {
    			for (c = 0; c < COL; c++) {
    				drawHRB(c, r, torei[r][c]);
    			}
    		}
    	}

    	function randomPiece() {
    		let random = PIECES[getRandomInt(0, 7)];
    		return new Piece(random[0], random[1]);
    	}

    	let p = randomPiece();
    	let score = 0;

    	function Piece(tetro, color) {
    		this.tetro = tetro;
    		this.color = color;
    		this.state = 0;
    		this.activeTetro = this.tetro[this.state];
    		this.x = 3;
    		this.y = -2;
    	}

    	Piece.prototype.draw = function (color) {
    		for (r = 0; r < this.activeTetro.length; r++) {
    			for (c = 0; c < this.activeTetro.length; c++) {
    				if (this.activeTetro[r][c]) {
    					drawHRB(this.x + c, this.y + r, color);
    				}
    			}
    		}
    	};

    	Piece.prototype.in = function () {
    		this.draw(this.color);
    	};

    	Piece.prototype.out = function () {
    		this.draw(SK);
    	};

    	Piece.prototype.moveDown = function () {
    		if (!this.collision(0, 1, this.activeTetro)) {
    			this.out();
    			this.y++;
    			this.in();
    		} else {
    			this.lock();
    			p = randomPiece();
    		}
    	};

    	Piece.prototype.moveRight = function () {
    		if (!this.collision(1, 0, this.activeTetro)) {
    			this.out();
    			this.x++;
    			this.in();
    		}
    	};

    	Piece.prototype.moveLeft = function () {
    		if (!this.collision(-1, 0, this.activeTetro)) {
    			this.out();
    			this.x--;
    			this.in();
    		}
    	};

    	Piece.prototype.rotate = function () {
    		let nextPattern = this.tetro[(this.state + 1) % this.tetro.length];
    		let kick = 0;

    		if (this.collision(0, 0, nextPattern)) {
    			if (this.x > COL / 2) {
    				kick = -1;
    			} else {
    				kick = 1;
    			}
    		}

    		if (!this.collision(kick, 0, nextPattern)) {
    			this.out();
    			this.x += kick;
    			this.state = (this.state + 1) % this.tetro.length;
    			this.activeTetro = this.tetro[this.state];
    			this.in();
    		}
    	};

    	Piece.prototype.lock = function () {
    		for (r = 0; r < this.activeTetro.length; r++) {
    			for (c = 0; c < this.activeTetro.length; c++) {
    				// we skip the vacant squares
    				if (!this.activeTetro[r][c]) {
    					continue;
    				}

    				if (this.y + r < 0) {
    					alert("Game Over");
    					gameOver = true;
    					reset();
    					break;
    				}

    				torei[this.y + r][this.x + c] = this.color;
    			}
    		}

    		// remove full rows
    		for (r = 0; r < ROW; r++) {
    			let isRowFull = true;

    			for (c = 0; c < COL; c++) {
    				isRowFull = isRowFull && torei[r][c] != SK;
    			}

    			if (isRowFull) {
    				for (y = r; y > 1; y--) {
    					for (c = 0; c < COL; c++) {
    						torei[y][c] = torei[y - 1][c];
    					}
    				}

    				for (c = 0; c < COL; c++) {
    					torei[0][c] = SK;
    				}

    				score += 10;
    			}
    		}

    		drawBoard();
    		$$invalidate(1, scoring.innerHTML = " " + score + " ", scoring);
    	};

    	Piece.prototype.collision = function (x, y, tetro) {
    		for (r = 0; r < tetro.length; r++) {
    			for (c = 0; c < tetro.length; c++) {
    				if (!tetro[r][c]) {
    					continue;
    				}

    				let newX = this.x + c + x;
    				let newY = this.y + r + y;

    				if (newX < 0 || newX >= COL || newY >= ROW) {
    					return true;
    				}

    				if (newY <= 0) {
    					continue;
    				}

    				if (torei[newY][newX] != SK) {
    					return true;
    				}
    			}
    		}

    		return false;
    	};

    	document.addEventListener("keydown", CONTROL);

    	function CONTROL(event) {
    		if (event.keyCode == 81) {
    			p.moveLeft();
    		} else if (event.keyCode == 90) {
    			p.rotate();
    		} else if (event.keyCode == 68) {
    			p.moveRight();
    		} else if (event.keyCode == 83) {
    			p.moveDown();
    		}
    	}

    	let dropStart = Date.now();
    	let gameOver = false;

    	function drop() {
    		let now = Date.now();
    		let delta = now - dropStart;

    		if (delta > 1000) {
    			p.moveDown();
    			dropStart = Date.now();
    		}

    		if (!gameOver) {
    			requestAnimationFrame(drop);
    		}
    	}

    	function reset() {
    		for (r = 0; r < ROW; r++) {
    			torei[r] = [];

    			for (c = 0; c < COL; c++) {
    				torei[r][c] = SK;
    			}

    			p = randomPiece();
    			gameOver = false;
    			score = 0;
    			$$invalidate(1, scoring.innerHTML = " " + score + " ", scoring);
    		}
    	}

    	onMount(() => {
    		context = canvas.getContext("2d");
    		drawBoard();
    		drop();
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tetris> was created with unknown prop '${key}'`);
    	});

    	function canvas_1_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			canvas = $$value;
    			$$invalidate(0, canvas);
    		});
    	}

    	function a_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			scoring = $$value;
    			$$invalidate(1, scoring);
    		});
    	}

    	$$self.$capture_state = () => ({
    		onMount,
    		I,
    		J,
    		L,
    		O,
    		S,
    		T,
    		Z,
    		HRB,
    		COL,
    		ROW,
    		SK,
    		TKS,
    		PIECES,
    		canvas,
    		scoring,
    		context,
    		torei,
    		r,
    		c,
    		y,
    		getRandomInt,
    		drawHRB,
    		drawBoard,
    		randomPiece,
    		p,
    		score,
    		Piece,
    		CONTROL,
    		dropStart,
    		gameOver,
    		drop,
    		reset
    	});

    	$$self.$inject_state = $$props => {
    		if ("canvas" in $$props) $$invalidate(0, canvas = $$props.canvas);
    		if ("scoring" in $$props) $$invalidate(1, scoring = $$props.scoring);
    		if ("context" in $$props) context = $$props.context;
    		if ("torei" in $$props) torei = $$props.torei;
    		if ("r" in $$props) r = $$props.r;
    		if ("c" in $$props) c = $$props.c;
    		if ("y" in $$props) y = $$props.y;
    		if ("p" in $$props) p = $$props.p;
    		if ("score" in $$props) score = $$props.score;
    		if ("dropStart" in $$props) dropStart = $$props.dropStart;
    		if ("gameOver" in $$props) gameOver = $$props.gameOver;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [canvas, scoring, canvas_1_binding, a_binding];
    }

    class Tetris extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tetris",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    /* src\components\Cadre.svelte generated by Svelte v3.32.3 */
    const file$3 = "src\\components\\Cadre.svelte";

    // (49:0) {:else}
    function create_else_block(ctx) {
    	let button;
    	let img;
    	let img_src_value;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			img = element("img");
    			if (img.src !== (img_src_value = "img/play-button.svg")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "link");
    			attr_dev(img, "height", "50px");
    			attr_dev(img, "width", "50px");
    			add_location(img, file$3, 50, 0, 1185);
    			attr_dev(button, "class", "play svelte-1v4ejb2");
    			add_location(button, file$3, 49, 0, 1128);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, img);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler*/ ctx[5], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(49:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (43:0) {#if link !="tetris"}
    function create_if_block_1(ctx) {
    	let a;
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			img = element("img");
    			if (img.src !== (img_src_value = "img/link.svg")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "link");
    			attr_dev(img, "height", "50px");
    			attr_dev(img, "width", "50px");
    			add_location(img, file$3, 43, 15, 1027);
    			attr_dev(a, "href", /*link*/ ctx[3]);
    			add_location(a, file$3, 43, 0, 1012);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, img);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*link*/ 8) {
    				attr_dev(a, "href", /*link*/ ctx[3]);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(43:0) {#if link !=\\\"tetris\\\"}",
    		ctx
    	});

    	return block;
    }

    // (60:0) {#if isOpen}
    function create_if_block(ctx) {
    	let div1;
    	let div0;
    	let button;
    	let t1;
    	let tetris;
    	let current;
    	let mounted;
    	let dispose;
    	tetris = new Tetris({ $$inline: true });

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			button = element("button");
    			button.textContent = "X";
    			t1 = space();
    			create_component(tetris.$$.fragment);
    			attr_dev(button, "class", "bg-danger float-right");
    			add_location(button, file$3, 68, 0, 1402);
    			attr_dev(div0, "class", "modal-content-c svelte-1v4ejb2");
    			add_location(div0, file$3, 67, 0, 1371);
    			attr_dev(div1, "class", "modal-c svelte-1v4ejb2");
    			add_location(div1, file$3, 65, 0, 1346);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, button);
    			append_dev(div0, t1);
    			mount_component(tetris, div0, null);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler_1*/ ctx[6], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tetris.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tetris.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_component(tetris);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(60:0) {#if isOpen}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let div;
    	let h2;
    	let t0;
    	let t1;
    	let p;
    	let t2;
    	let br;
    	let t3;
    	let t4;
    	let t5;
    	let if_block1_anchor;
    	let current;

    	function select_block_type(ctx, dirty) {
    		if (/*link*/ ctx[3] != "tetris") return create_if_block_1;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block0 = current_block_type(ctx);
    	let if_block1 = /*isOpen*/ ctx[4] && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			t0 = text(/*title*/ ctx[0]);
    			t1 = space();
    			p = element("p");
    			t2 = text(/*info*/ ctx[1]);
    			br = element("br");
    			t3 = text(/*description*/ ctx[2]);
    			t4 = space();
    			if_block0.c();
    			t5 = space();
    			if (if_block1) if_block1.c();
    			if_block1_anchor = empty();
    			add_location(h2, file$3, 40, 0, 920);
    			add_location(br, file$3, 41, 28, 966);
    			attr_dev(p, "class", "text-light");
    			add_location(p, file$3, 41, 0, 938);
    			attr_dev(div, "class", "text-center border rounded p-5");
    			add_location(div, file$3, 39, 0, 874);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(h2, t0);
    			append_dev(div, t1);
    			append_dev(div, p);
    			append_dev(p, t2);
    			append_dev(p, br);
    			append_dev(p, t3);
    			append_dev(div, t4);
    			if_block0.m(div, null);
    			insert_dev(target, t5, anchor);
    			if (if_block1) if_block1.m(target, anchor);
    			insert_dev(target, if_block1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*title*/ 1) set_data_dev(t0, /*title*/ ctx[0]);
    			if (!current || dirty & /*info*/ 2) set_data_dev(t2, /*info*/ ctx[1]);
    			if (!current || dirty & /*description*/ 4) set_data_dev(t3, /*description*/ ctx[2]);

    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
    				if_block0.p(ctx, dirty);
    			} else {
    				if_block0.d(1);
    				if_block0 = current_block_type(ctx);

    				if (if_block0) {
    					if_block0.c();
    					if_block0.m(div, null);
    				}
    			}

    			if (/*isOpen*/ ctx[4]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);

    					if (dirty & /*isOpen*/ 16) {
    						transition_in(if_block1, 1);
    					}
    				} else {
    					if_block1 = create_if_block(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if_block0.d();
    			if (detaching) detach_dev(t5);
    			if (if_block1) if_block1.d(detaching);
    			if (detaching) detach_dev(if_block1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Cadre", slots, []);
    	let { title } = $$props;
    	let { info } = $$props;
    	let { description } = $$props;
    	let { link } = $$props;
    	let isOpen = false;
    	const writable_props = ["title", "info", "description", "link"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Cadre> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => {
    		$$invalidate(4, isOpen = !isOpen);
    	};

    	const click_handler_1 = () => {
    		$$invalidate(4, isOpen = !isOpen);
    	};

    	$$self.$$set = $$props => {
    		if ("title" in $$props) $$invalidate(0, title = $$props.title);
    		if ("info" in $$props) $$invalidate(1, info = $$props.info);
    		if ("description" in $$props) $$invalidate(2, description = $$props.description);
    		if ("link" in $$props) $$invalidate(3, link = $$props.link);
    	};

    	$$self.$capture_state = () => ({
    		Tetris,
    		title,
    		info,
    		description,
    		link,
    		isOpen
    	});

    	$$self.$inject_state = $$props => {
    		if ("title" in $$props) $$invalidate(0, title = $$props.title);
    		if ("info" in $$props) $$invalidate(1, info = $$props.info);
    		if ("description" in $$props) $$invalidate(2, description = $$props.description);
    		if ("link" in $$props) $$invalidate(3, link = $$props.link);
    		if ("isOpen" in $$props) $$invalidate(4, isOpen = $$props.isOpen);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [title, info, description, link, isOpen, click_handler, click_handler_1];
    }

    class Cadre extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
    			title: 0,
    			info: 1,
    			description: 2,
    			link: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cadre",
    			options,
    			id: create_fragment$3.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*title*/ ctx[0] === undefined && !("title" in props)) {
    			console.warn("<Cadre> was created without expected prop 'title'");
    		}

    		if (/*info*/ ctx[1] === undefined && !("info" in props)) {
    			console.warn("<Cadre> was created without expected prop 'info'");
    		}

    		if (/*description*/ ctx[2] === undefined && !("description" in props)) {
    			console.warn("<Cadre> was created without expected prop 'description'");
    		}

    		if (/*link*/ ctx[3] === undefined && !("link" in props)) {
    			console.warn("<Cadre> was created without expected prop 'link'");
    		}
    	}

    	get title() {
    		throw new Error("<Cadre>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<Cadre>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get info() {
    		throw new Error("<Cadre>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set info(value) {
    		throw new Error("<Cadre>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get description() {
    		throw new Error("<Cadre>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set description(value) {
    		throw new Error("<Cadre>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get link() {
    		throw new Error("<Cadre>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set link(value) {
    		throw new Error("<Cadre>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var Memorie = {
    	title: "Memorie",
    	info: "2017 || Python",
    	description: "Projet de baccalauréat",
    	link: "https://github.com/Rimuruu/Memorie",
    	background: ""
    };
    var Snake = {
    	title: "Snake",
    	info: "2018 || C",
    	description: "Projet de DUT Informatique 1ère année",
    	link: "https://github.com/Rimuruu/Snake",
    	background: ""
    };
    var IceWalker = {
    	title: "IceWalker",
    	info: "2018 || Java Processing",
    	description: "Projet personnel ",
    	link: "https://github.com/Rimuruu/Icewalker",
    	background: ""
    };
    var Pokemon = {
    	title: "Pokemon Website",
    	info: "2019 || Javascript PHP",
    	description: "Projet de DUT Informatique 1ère année",
    	link: "https://github.com/Rimuruu/Pokemon",
    	background: ""
    };
    var Go = {
    	title: "Jeu de Go",
    	info: "2019 || Java",
    	description: "Projet de DUT Informatique 1ère année",
    	link: "https://github.com/Rimuruu/Jeu-de-Go",
    	background: ""
    };
    var Tetris$1 = {
    	title: "Tetris",
    	info: "2019 || Javascript",
    	description: "Projet personnel",
    	link: "tetris",
    	background: ""
    };
    var Pitayaplay = {
    	title: "Pitayaplay",
    	info: "2020 || Javascript",
    	description: "Projet de DUT Informatique 2e année",
    	link: "https://github.com/Rimuruu/team2_pitayaplay_web",
    	background: ""
    };
    var Spreadsheet = {
    	title: "Svelte Spreadsheet-lite",
    	info: "2020 || Javascript",
    	description: "Projet Personnel",
    	link: "https://github.com/Rimuruu/svelte-spreadsheet-lite",
    	background: ""
    };
    var Minesweeper = {
    	title: "Minesweeper",
    	info: "2020 || C++ SDL",
    	description: "Projet Personnel",
    	link: "./file/Minesweeper.rar",
    	background: ""
    };
    var Real = {
    	Memorie: Memorie,
    	Snake: Snake,
    	IceWalker: IceWalker,
    	Pokemon: Pokemon,
    	Go: Go,
    	Tetris: Tetris$1,
    	Pitayaplay: Pitayaplay,
    	Spreadsheet: Spreadsheet,
    	Minesweeper: Minesweeper
    };

    /* src\pages\Realisation.svelte generated by Svelte v3.32.3 */

    const { Object: Object_1, console: console_1 } = globals;
    const file$4 = "src\\pages\\Realisation.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[0] = list[i][0];
    	child_ctx[1] = list[i][1];
    	return child_ctx;
    }

    // (14:0) {#each Object.entries(Real) as [cle, valeur]}
    function create_each_block(ctx) {
    	let cadre;
    	let current;

    	cadre = new Cadre({
    			props: {
    				title: /*valeur*/ ctx[1].title,
    				link: /*valeur*/ ctx[1].link,
    				info: /*valeur*/ ctx[1].info,
    				description: /*valeur*/ ctx[1].description,
    				background: /*valeur*/ ctx[1].background
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(cadre.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(cadre, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(cadre.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(cadre.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(cadre, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(14:0) {#each Object.entries(Real) as [cle, valeur]}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let div;
    	let current;
    	let each_value = Object.entries(Real);
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "class", "grid-r svelte-9sef4");
    			add_location(div, file$4, 12, 0, 222);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*Object, Real*/ 0) {
    				each_value = Object.entries(Real);
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Realisation", slots, []);
    	console.log(Real);
    	const writable_props = [];

    	Object_1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Realisation> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Cadre, Real });
    	return [];
    }

    class Realisation extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Realisation",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    /* src\components\Main.svelte generated by Svelte v3.32.3 */

    const { console: console_1$1 } = globals;
    const file$5 = "src\\components\\Main.svelte";

    // (103:0) {#if isOpen}
    function create_if_block$1(ctx) {
    	let div2;
    	let div0;
    	let button0;
    	let t1;
    	let button1;
    	let t3;
    	let div1;
    	let current_block_type_index;
    	let if_block;
    	let div2_intro;
    	let current;
    	let mounted;
    	let dispose;
    	const if_block_creators = [create_if_block_1$1, create_if_block_2];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*category*/ ctx[3] == "history") return 0;
    		if (/*category*/ ctx[3] == "real") return 1;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			button0 = element("button");
    			button0.textContent = "History Log";
    			t1 = space();
    			button1 = element("button");
    			button1.textContent = "Realisation";
    			t3 = space();
    			div1 = element("div");
    			if (if_block) if_block.c();
    			attr_dev(button0, "type", "button");
    			attr_dev(button0, "class", "btn btn-secondary active svelte-92d3nm");
    			add_location(button0, file$5, 105, 2, 2371);
    			attr_dev(button1, "type", "button");
    			attr_dev(button1, "class", "btn btn-secondary svelte-92d3nm");
    			add_location(button1, file$5, 106, 2, 2483);
    			attr_dev(div0, "class", "p-1 btn-group w-100 group-b svelte-92d3nm");
    			attr_dev(div0, "role", "group");
    			attr_dev(div0, "aria-label", "Basic example");
    			add_location(div0, file$5, 104, 0, 2284);
    			attr_dev(div1, "class", "container-fluid overflow-auto p-5");
    			add_location(div1, file$5, 108, 0, 2594);
    			attr_dev(div2, "class", "d-flex flex-column overflow-hidden");
    			add_location(div2, file$5, 103, 0, 2185);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div0, button0);
    			/*button0_binding*/ ctx[10](button0);
    			append_dev(div0, t1);
    			append_dev(div0, button1);
    			/*button1_binding*/ ctx[11](button1);
    			append_dev(div2, t3);
    			append_dev(div2, div1);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(div1, null);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(button0, "click", /*changeH*/ ctx[7], false, false, false),
    					listen_dev(button1, "click", /*changeR*/ ctx[8], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
    				if (if_block) {
    					group_outros();

    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block = if_blocks[current_block_type_index];

    					if (!if_block) {
    						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block.c();
    					}

    					transition_in(if_block, 1);
    					if_block.m(div1, null);
    				} else {
    					if_block = null;
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);

    			if (!div2_intro) {
    				add_render_callback(() => {
    					div2_intro = create_in_transition(div2, fade, { y: 200, duration: 1000, delay: 500 });
    					div2_intro.start();
    				});
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			/*button0_binding*/ ctx[10](null);
    			/*button1_binding*/ ctx[11](null);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d();
    			}

    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(103:0) {#if isOpen}",
    		ctx
    	});

    	return block;
    }

    // (112:29) 
    function create_if_block_2(ctx) {
    	let realisation;
    	let current;
    	realisation = new Realisation({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(realisation.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(realisation, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(realisation.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(realisation.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(realisation, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(112:29) ",
    		ctx
    	});

    	return block;
    }

    // (110:0) {#if category == "history"}
    function create_if_block_1$1(ctx) {
    	let history;
    	let current;
    	history = new History({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(history.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(history, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(history.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(history.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(history, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(110:0) {#if category == \\\"history\\\"}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let div1;
    	let button;
    	let img;
    	let img_src_value;
    	let t;
    	let div0;
    	let current;
    	let mounted;
    	let dispose;
    	add_render_callback(/*onwindowresize*/ ctx[9]);
    	let if_block = /*isOpen*/ ctx[2] && create_if_block$1(ctx);

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			button = element("button");
    			img = element("img");
    			t = space();
    			div0 = element("div");
    			if (if_block) if_block.c();
    			attr_dev(img, "class", "logo ");
    			if (img.src !== (img_src_value = "img/menu.svg")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "un triangle aux trois côtés égaux");
    			attr_dev(img, "height", "20px");
    			attr_dev(img, "width", "20px");
    			add_location(img, file$5, 93, 52, 1961);
    			attr_dev(button, "class", "bg-very-dark open svelte-92d3nm");
    			add_location(button, file$5, 93, 0, 1909);
    			attr_dev(div0, "class", " article d-flex flex-column svelte-92d3nm");
    			add_location(div0, file$5, 101, 0, 2110);
    			attr_dev(div1, "class", "rounded-left p-0 rounded-lg bg-very-dark main h-100 min-vh-100 text-light w-90 d-flex flex-row svelte-92d3nm");
    			add_location(div1, file$5, 91, 0, 1796);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, button);
    			append_dev(button, img);
    			append_dev(div1, t);
    			append_dev(div1, div0);
    			if (if_block) if_block.m(div0, null);
    			/*div0_binding*/ ctx[12](div0);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(window, "resize", /*onwindowresize*/ ctx[9]),
    					listen_dev(button, "click", /*change*/ ctx[6], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*isOpen*/ ctx[2]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);

    					if (dirty & /*isOpen*/ 4) {
    						transition_in(if_block, 1);
    					}
    				} else {
    					if_block = create_if_block$1(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(div0, null);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			if (if_block) if_block.d();
    			/*div0_binding*/ ctx[12](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Main", slots, []);
    	let main;
    	let container;
    	let isOpen = false;
    	let category = "history";
    	let h, r;

    	function change() {
    		$$invalidate(3, category = "history");

    		if (isOpen) {
    			$$invalidate(0, main.style.width = "0px", main);
    			$$invalidate(2, isOpen = false);
    		} else {
    			console.log(container - 450 + "px");
    			$$invalidate(0, main.style.width = container - 450 + "px", main);
    			$$invalidate(2, isOpen = true);
    		}
    	}

    	function changeH() {
    		$$invalidate(3, category = "history");
    		r.classList.remove("active");
    		h.classList.add("active");
    	}

    	function changeR() {
    		$$invalidate(3, category = "real");
    		h.classList.remove("active");
    		r.classList.add("active");
    	}

    	onMount(() => {
    		change();
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<Main> was created with unknown prop '${key}'`);
    	});

    	function onwindowresize() {
    		$$invalidate(1, container = window.innerWidth);
    	}

    	function button0_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			h = $$value;
    			$$invalidate(4, h);
    		});
    	}

    	function button1_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			r = $$value;
    			$$invalidate(5, r);
    		});
    	}

    	function div0_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			main = $$value;
    			$$invalidate(0, main);
    		});
    	}

    	$$self.$capture_state = () => ({
    		fade,
    		History,
    		Realisation,
    		onMount,
    		main,
    		container,
    		isOpen,
    		category,
    		h,
    		r,
    		change,
    		changeH,
    		changeR
    	});

    	$$self.$inject_state = $$props => {
    		if ("main" in $$props) $$invalidate(0, main = $$props.main);
    		if ("container" in $$props) $$invalidate(1, container = $$props.container);
    		if ("isOpen" in $$props) $$invalidate(2, isOpen = $$props.isOpen);
    		if ("category" in $$props) $$invalidate(3, category = $$props.category);
    		if ("h" in $$props) $$invalidate(4, h = $$props.h);
    		if ("r" in $$props) $$invalidate(5, r = $$props.r);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		main,
    		container,
    		isOpen,
    		category,
    		h,
    		r,
    		change,
    		changeH,
    		changeR,
    		onwindowresize,
    		button0_binding,
    		button1_binding,
    		div0_binding
    	];
    }

    class Main extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Main",
    			options,
    			id: create_fragment$5.name
    		});
    	}
    }

    const subscriber_queue = [];
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = [];
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (let i = 0; i < subscribers.length; i += 1) {
                        const s = subscribers[i];
                        s[1]();
                        subscriber_queue.push(s, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.push(subscriber);
            if (subscribers.length === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                const index = subscribers.indexOf(subscriber);
                if (index !== -1) {
                    subscribers.splice(index, 1);
                }
                if (subscribers.length === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }

    function is_date(obj) {
        return Object.prototype.toString.call(obj) === '[object Date]';
    }

    function get_interpolator(a, b) {
        if (a === b || a !== a)
            return () => a;
        const type = typeof a;
        if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
            throw new Error('Cannot interpolate values of different type');
        }
        if (Array.isArray(a)) {
            const arr = b.map((bi, i) => {
                return get_interpolator(a[i], bi);
            });
            return t => arr.map(fn => fn(t));
        }
        if (type === 'object') {
            if (!a || !b)
                throw new Error('Object cannot be null');
            if (is_date(a) && is_date(b)) {
                a = a.getTime();
                b = b.getTime();
                const delta = b - a;
                return t => new Date(a + t * delta);
            }
            const keys = Object.keys(b);
            const interpolators = {};
            keys.forEach(key => {
                interpolators[key] = get_interpolator(a[key], b[key]);
            });
            return t => {
                const result = {};
                keys.forEach(key => {
                    result[key] = interpolators[key](t);
                });
                return result;
            };
        }
        if (type === 'number') {
            const delta = b - a;
            return t => a + t * delta;
        }
        throw new Error(`Cannot interpolate ${type} values`);
    }
    function tweened(value, defaults = {}) {
        const store = writable(value);
        let task;
        let target_value = value;
        function set(new_value, opts) {
            if (value == null) {
                store.set(value = new_value);
                return Promise.resolve();
            }
            target_value = new_value;
            let previous_task = task;
            let started = false;
            let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
            if (duration === 0) {
                if (previous_task) {
                    previous_task.abort();
                    previous_task = null;
                }
                store.set(value = target_value);
                return Promise.resolve();
            }
            const start = now() + delay;
            let fn;
            task = loop(now => {
                if (now < start)
                    return true;
                if (!started) {
                    fn = interpolate(value, new_value);
                    if (typeof duration === 'function')
                        duration = duration(value, new_value);
                    started = true;
                }
                if (previous_task) {
                    previous_task.abort();
                    previous_task = null;
                }
                const elapsed = now - start;
                if (elapsed > duration) {
                    store.set(value = new_value);
                    return false;
                }
                // @ts-ignore
                store.set(value = fn(easing(elapsed / duration)));
                return true;
            });
            return task.promise;
        }
        return {
            set,
            update: (fn, opts) => set(fn(target_value, value), opts),
            subscribe: store.subscribe
        };
    }

    /* src\components\AnimatedBG.svelte generated by Svelte v3.32.3 */

    const file$6 = "src\\components\\AnimatedBG.svelte";

    function create_fragment$6(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "img p-0 shadow-p animatedBG svelte-sx5wrw");
    			add_location(div, file$6, 29, 0, 515);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("AnimatedBG", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<AnimatedBG> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class AnimatedBG extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AnimatedBG",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    /* src\Rimuruu.svelte generated by Svelte v3.32.3 */
    const file$7 = "src\\Rimuruu.svelte";

    function create_fragment$7(ctx) {
    	let div1;
    	let aside;
    	let t0;
    	let div0;
    	let main;
    	let t1;
    	let animatedbg;
    	let current;
    	aside = new Aside({ $$inline: true });
    	main = new Main({ $$inline: true });
    	animatedbg = new AnimatedBG({ $$inline: true });

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			create_component(aside.$$.fragment);
    			t0 = space();
    			div0 = element("div");
    			create_component(main.$$.fragment);
    			t1 = space();
    			create_component(animatedbg.$$.fragment);
    			attr_dev(div0, "class", "container-fluid w-90 row-reverse mw-100 w-100 p-0 svelte-9jbqj3");
    			add_location(div0, file$7, 21, 0, 554);
    			attr_dev(div1, "class", "container-fluid d-flex p-0 h-100 w-100 mw-100 min-vh-100");
    			add_location(div1, file$7, 19, 0, 465);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			mount_component(aside, div1, null);
    			append_dev(div1, t0);
    			append_dev(div1, div0);
    			mount_component(main, div0, null);
    			insert_dev(target, t1, anchor);
    			mount_component(animatedbg, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(aside.$$.fragment, local);
    			transition_in(main.$$.fragment, local);
    			transition_in(animatedbg.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(aside.$$.fragment, local);
    			transition_out(main.$$.fragment, local);
    			transition_out(animatedbg.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_component(aside);
    			destroy_component(main);
    			if (detaching) detach_dev(t1);
    			destroy_component(animatedbg, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Rimuruu", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Rimuruu> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Aside, Main, fly, tweened, AnimatedBG });
    	return [];
    }

    class Rimuruu extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Rimuruu",
    			options,
    			id: create_fragment$7.name
    		});
    	}
    }

    /* src\App.svelte generated by Svelte v3.32.3 */

    function create_fragment$8(ctx) {
    	let rimuruu;
    	let current;
    	rimuruu = new Rimuruu({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(rimuruu.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(rimuruu, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(rimuruu.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(rimuruu.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(rimuruu, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Rimuruu });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$8.name
    		});
    	}
    }

    var app = new App({
    	target: document.body
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
