/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

var spiralOrder = function(matrix) {
    if(matrix.length == 0)return []
    
    var rs = 0,                         //rowStart
        re = matrix[0].length - 1,      //rowEnd    
        cs = 0,                         //colStart  
        ce = matrix.length - 1,         //colEnd
        i, j,               
        res = [];
        
    while(rs <= re && cs <= ce){
        for(j = rs; j <= re; j++ ){
            res.push(matrix[cs][j]);
        }
        cs++;
        //right
        
        for(i = cs; i <= ce; i++ ){
            res.push(matrix[i][re]);
        }
        re--;
        //down
        
        if(rs <= re && cs <= ce){
            for(j = j - 2; j >= rs ; j-- ){
                res.push(matrix[ce][j]);
            }
            ce--;
        }
        //left
        
        if(cs <= ce && rs <= re ){
            for(i = i - 2; i >= cs ; i-- ){
                res.push(matrix[i][rs]);
            }
            rs++;
        }
        //up

    }
    //while
    
    return res
};
