

const HRB = 40;
const COL = 10;
const ROW = 20;
const SK = "#2f1a4a";
const  TKS = "#8361b0";
const PIECES = [
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];
var canvas = document.getElementById("frame");
var scoring = document.getElementById("score");
var context  = canvas.getContext("2d");
var torei = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

for( r = 0; r <ROW; r++){
    torei[r] = [];
    for(c = 0; c < COL; c++){
        torei[r][c] = SK;
    }
}

function drawHRB(x,y,color){
	context.fillStyle = color;
	context.fillRect(x*HRB,y*HRB,HRB,HRB)
	context.strokeStyle = TKS;
	context.strokeRect(x*HRB,y*HRB,HRB,HRB)
	
}

function drawBoard(){
	for (r = 0; r < ROW; r++) {
		for (c = 0; c < COL; c++) {
			drawHRB(c,r,torei[r][c]);
		}	
	}
} 
drawBoard();
function randomPiece(){
	let random = PIECES[getRandomInt(0,7)];
	return new Piece(random[0],random[1])

}


let p = randomPiece();
let score = 0;


function Piece(tetro,color){
	this.tetro = tetro;
	this.color = color;
	this.state = 0;
	this.activeTetro = this.tetro[this.state];
	this.x = 3;
	this.y = -2;
}

Piece.prototype.draw = function(color){
	for (r = 0; r < this.activeTetro.length; r++) {
		for (c = 0; c < this.activeTetro.length; c++) {
			if (this.activeTetro[r][c]) {
				drawHRB(this.x+c,this.y+r,color);
			}
		}	
	}
}

Piece.prototype.in = function(){
	this.draw(this.color);
}

Piece.prototype.out = function (){
	this.draw(SK);
}

Piece.prototype.moveDown = function(){
	if(!this.collision(0,1,this.activeTetro)){
		this.out();
		this.y++;
		this.in();
	}else{
       
        this.lock();
        p = randomPiece();
    }
	
}

Piece.prototype.moveRight = function(){
    if(!this.collision(1,0,this.activeTetro)){
       this.out();
		this.x++;
		this.in();
    }
}


Piece.prototype.moveLeft = function(){
    if(!this.collision(-1,0,this.activeTetro)){
        this.out();
		this.x--;
		this.in();
    }
}

Piece.prototype.rotate = function(){
    let nextPattern = this.tetro[(this.state + 1)%this.tetro.length];
    let kick = 0;
    
    if(this.collision(0,0,nextPattern)){
        if(this.x > COL/2){
         
            kick = -1; 
        }else{
        
            kick = 1; 
        }
    }
    
    if(!this.collision(kick,0,nextPattern)){
        this.out();
        this.x += kick;
        this.state = (this.state + 1)%this.tetro.length; 
        this.activeTetro = this.tetro[this.state];
        this.in();
    }
}

Piece.prototype.lock = function(){
    for( r = 0; r < this.activeTetro.length; r++){
        for(c = 0; c < this.activeTetro.length; c++){
            // we skip the vacant squares
            if( !this.activeTetro[r][c]){
                continue;
            }
 
            if(this.y + r < 0){
                alert("Game Over");
                
                gameOver = true;
                reset();
                break;
                
            }

            torei[this.y+r][this.x+c] = this.color;
        }
    }
    // remove full rows
    for(r = 0; r < ROW; r++){
        let isRowFull = true;
        for( c = 0; c < COL; c++){
            isRowFull = isRowFull && (torei[r][c] != SK);
        }
        console.log(isRowFull);
        if(isRowFull){
        
            for( y = r; y > 1; y--){
                for( c = 0; c < COL; c++){
                    torei[y][c] = torei[y-1][c];
                }
            }
          
            for( c = 0; c < COL; c++){
                torei[0][c] = SK;
            }
       
            score += 10;
          
        }
    }
 
    drawBoard();
    
   
    scoring.innerHTML = " "+score+" ";
}


Piece.prototype.collision = function(x,y,tetro){
    for( r = 0; r < tetro.length; r++){
        for(c = 0; c < tetro.length; c++){
          
            if(!tetro[r][c]){
                continue;
            }
       
            let newX = this.x + c + x;
            let newY = this.y + r + y;
            
     
            if(newX < 0 || newX >= COL || newY >= ROW){
                return true;
            }
            
            if(newY <= 0){
                continue;
            }
           
            if( torei[newY][newX] != SK){
                return true;
            }
        }
    }
    return false;
}

document.addEventListener("keydown",CONTROL);

function CONTROL(event){
   
    if(event.keyCode == 81){
        p.moveLeft();
     
    }else if(event.keyCode == 90){
       p.rotate();
      
    }else if(event.keyCode == 68){
        p.moveRight();

    }else if(event.keyCode == 83){
        p.moveDown();
    }
}

let dropStart = Date.now();
let gameOver = false;

function drop(){
    let now = Date.now();
    let delta = now - dropStart;
    if(delta > 1000){
        p.moveDown();
        dropStart = Date.now();
    }
    if( !gameOver){
        requestAnimationFrame(drop);
    }
   
}

function reset(){
    
    for( r = 0; r <ROW; r++){
    torei[r] = [];
    for(c = 0; c < COL; c++){
        torei[r][c] = SK;
    }
    p = randomPiece();
    gameOver = false;
    score = 0;
    scoring.innerHTML = " "+score+" ";
 
    }
}


drop();


