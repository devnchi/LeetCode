/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]
*/

var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    var sells = [0];
    var buys = [-prices[0]];

    for (var i = 1; i < prices.length; i++) {
        var delta = prices[i] - prices[i - 1];
        sells[i] = Math.max(buys[i - 1] + prices[i], sells[i - 1] + delta);
        if (i > 1) {
            buys[i] = Math.max(sells[i - 2] - prices[i], buys[i - 1] - delta);
        } else {
            buys[i] = Math.max(-prices[i], buys[i - 1] - delta);
        }
    }

    return Math.max.apply(null, sells);
};
