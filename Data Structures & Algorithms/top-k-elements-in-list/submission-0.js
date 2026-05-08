class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */


    topKFrequent(nums, k) {
         let frq = {};
        for(let n of nums) {
            frq[n]  = (frq[n] || 0) + 1;
        }
        let buck = Array.from({length: nums.length + 1}, () => []);
        for(let num in frq) {
            buck[frq[num]].push(Number(num));
        }
        let result = [];
        for(let i = buck.length - 1; i >= 0 && result.length < k; i--) {
            result.push(...buck[i]);
        }
        return result;
    }
}
