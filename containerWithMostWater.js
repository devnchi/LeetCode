/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

var maxArea = function(height) {
    var start = 0;
    var end = height.length - 1;
    var area = 0;

    while (start < end) {
        var minHeight = Math.min(height[start], height[end]);
        area = Math.max(area, minHeight * (end - start));
        while (start < end && height[start] <= minHeight) {
            start++;
        }
        while (start < end && height[end] <= minHeight) {
            end--;
        }
    }

    return area;
};

var maxArea = function(height) {
    var water = 0;
    var i = 0, j = height.length - 1;
    while(i < j){
        var h = Math.min(height[i], height[j]);
        water = Math.max(water, (j - i) * h);
        if (height[i] < height[j])
			i++;
		else
			j--;
        
    }
    return water
};
