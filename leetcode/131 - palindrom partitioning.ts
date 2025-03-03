function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1; // common mistake is using s.length, this should always point to the last index.
    while(left < right) {
        if(s[left] !== s[right]) return false;

        left++;
        right--;
    }

    return true;
}

function dfs(s: string, index: number, path: string[], result: string[][]) {
    if(s.length === index) { // when base case is hit index will be lastIndexOfS + 1 = index;
        result.push([...path])
        return;
    }

    for(let i = index + 1; i < s.length + 1; i++) { // 0  -> n-1 + 1
        const subStr = s.substring(index, i); 
        //  did s.length + 1 to make sure loop runs upto s.length and that way
        // substring method would be able to capture n-1 index. if we were running the 
        // loop upto n then that would not have been possible. It would have cause n-1 error and we would have lost
        // the last character.

        // interchangable u can use, i <= s.length as i < s.length + 1 both serve the same purpose.

        if(isPalindrome(subStr)) {
            path.push(subStr);
            dfs(s, i, path, result);
            path.pop();
        }

    }

}

function partition(s: string): string[][] {
    const result: string[][] = [];

    dfs(s, 0, [], result);
    return result;
};