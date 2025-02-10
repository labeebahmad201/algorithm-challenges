/***
 * Intuition: 
 * We need a data structure that supports removal at the end such as stack. 
 * That way when we come accross a digit & we need to remove closest string, we can pop it from the stack.
 * 
 * "abc12"
 * 
 */

function clearDigits(s: string): string {
    const stack = [];
    for(let i =0; i < s.length; i++){
        let ele = parseInt(s[i]);
        if(isNaN(ele)) { // which means it is a string
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }

    return stack.join('');
};