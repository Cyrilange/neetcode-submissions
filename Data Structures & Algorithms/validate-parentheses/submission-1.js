class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for(let i = 0; i < s.length; i++) {
            let char = s[i];
            if(char == "(" || char == "[" || char == "{") {
                stack.push(char);
            } else {
                let end = stack.pop();
                   if( (char == ")" && end != "(")  || 
            (char == "]" && end != "[") ||
            (char == "}" && end != "{")  ) {
                return false;
            }
            }
         

        }
        return stack.length === 0;
    }
}
