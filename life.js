(function () {
  
  self.Life = function (seed) {
    this.seed   = seed;
    this.height = this.seed.length;
    this.width  = this.seed[0].length;
    this.board = cloneArray(seed);
    this.prevBoard = [];
  }
 
  Life.prototype = {
   next: function () {
    this.prevBoard = cloneArray(this.board);
    
    for (var x = 0, l = this.height; x < l; x++) {
      for (var y = 0, len = this.width; y < len; y ++) {
        var neighbors = this.aliveNeighbors(this.prevBoard,x,y);
        var alive = !!this.board[y][x];
        if (alive) {
          if (neighbors < 2 || neighbors > 3) {
           this.board[y][x] = 0;
          }
        }else{
          if (neighbors == 3) {
            this.board[y][x] = 1;
          }
        }
      }
    }
   },
   aliveNeighbors:function (array,x,y) {
    var prevRow = array[y-1] || []
    var nextRow = array[y+1] || []

    return [
    prevRow[x-1],prevRow[x],prevRow[x+1],
    array[y][x-1],array[y][x+1],
    nextRow[x-1],nextRow[x],nextRow[x+1],
    ].reduce(function (prev,curr) {
      return prev + +!!curr;
    },0);
   },
   toString: function () {
     return this.board.map(function (row) {
       return row.join(' ')
     }).join('\n');
   }
  }

//Helpers
//clone 2D arrays
function cloneArray(array) {
  return array.slice().map(function (row) {
    return row.slice();
  });
}


}());
var game = new Life([
  [0,0,0,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,0,0,0],
]);

console.log(game + '')
game.next();
console.log(game + '')

game.next();
console.log(game + '')


function matrix( rows, cols, defaultValue){

  var arr = [];
  
 // Creates all lines:
  for(var i=0; i < rows; i++){

    // Creates an empty line
    arr.push([]);

    // Adds cols to the empty line:
    arr[i].push( new Array(cols));

    for(var j=0; j < cols; j++){
      // Initializes:
      arr[i][j] = defaultValue;
    }
  }

  return arr;
}
