class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n == 1) return 1;
        if(n == 2) return 2;
        let step = [1,2];
        for(let i = 3; i <= n; i++) {
            let temp = step[1];
            step[1] = step[0] + step[1];
            step[0] = temp;
        }
        return step[1];
    }
}
