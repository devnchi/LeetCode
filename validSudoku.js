/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/

var isValidSudoku = function(board) {
    this._bit = 0;
    function isValid(num){
        var tmp = Math.pow(2, num - 1);
        if((this._bit & tmp) !== 0){
            return false;
        }else{
            this._bit = this._bit | tmp;
            return true;
        }
    }
    
    var i = 0, j = 0, m = 0, n =0, cell = 0;
    //row
    for(i = 0; i < 9; i++){
        for(j = 0; j < 9; j++){
            cell = parseInt(board[i][j]);
            if(!isValid(cell)){
                return false;
            }
        }
        this._bit = 0;
    }
    //column
    for(i = 0; i < 9; i++){
        for(j = 0; j < 9; j++){
            cell = parseInt(board[j][i]);
            if(!isValid(cell)){
                return false;
            }
        }
        this._bit = 0;
    }
    //square
    for(i = 0; i <= 6; i+=3){
        for(j = 0; j <=6 ; j+=3){
            for(m = 0; m < 3; m++){
                for(n = 0; n < 3; n++){
                    cell = parseInt(board[m + i][n + j]);
                    if(!isValid(cell)){
                        return false;
                    }
                }
            }
            this._bit = 0;
        }
    }
    return true;
};




var isValidSudoku = function(board) {
    if (!board || board.length !== 9 || board[0].length !== 9) return false;

    for (var i = 0; i < board.length; i++) {
        var row = {};
        var col = {};
        var grid = {};
        for (var j = 0; j < board.length; j++) {
            if (board[i][j] !== '.' && !(board[i][j] in row)) {
                row[board[i][j]] = true;
            } else if (board[i][j] !== '.' && (board[i][j] in row)) {
                return false;
            }

            if (board[j][i] !== '.' && !(board[j][i] in col)) {
                col[board[j][i]] = true;
            } else if (board[j][i] !== '.' && (board[j][i] in col)) {
                return false;
            }

            var rowIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            var colIndex = 3 * (i % 3) + (j % 3);
            if (board[rowIndex][colIndex] !== '.' && !(board[rowIndex][colIndex] in grid)) {
                grid[board[rowIndex][colIndex]] = true;
            } else if (board[rowIndex][colIndex] !== '.' && (board[rowIndex][colIndex] in grid)) {
                return false;
            }
        }
    }

    return true;
};
