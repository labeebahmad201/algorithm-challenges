class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let arr = [];
        for (let i = 0; i < strs.length; i++) {
            arr.push(`{${strs[i].length}}${strs[i]}`);
        }
        return arr.join(''); // Efficient single-pass concatenation
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            if (str[i] === '{') {

                let closingIndex = str.indexOf('}', i);
                let strLength = parseInt(str.substring(i + 1, closingIndex), 10); // Extract length
                i = closingIndex + 1; // Move to start of the actual string

                result.push(str.substring(i, i + strLength)); // Extract the string
                i += strLength; // Move `i` to the next `{` or end of string
            }
        }
        return result;
    }
}

