function generateParenthesis(n: number): string[] {
    
    const result = [];
    
    function dfs(startIndex: number, path: string[], openCount: number, closeCount: number) {
        if(startIndex === 2 * n) {
            result.push(path.join(''));
            return; 
        }

        for(const letter of ['(', ')']) {
            // checks if open count is more than what we should have then it skips that iteration
            if (letter === '(' && openCount >= n) continue;
            if (letter === ')' && closeCount >= openCount) continue;

                path.push(letter);
                // startIndex + 1 represents how many character we have collected so far and it stays the same for a level whether we add
                // ( or ) 
                if (letter == '(')
                    dfs(startIndex + 1, path, openCount + 1, closeCount);
                else
                    dfs(startIndex + 1, path, openCount, closeCount + 1);
                path.pop();

        }
    }
    dfs(0, [], 0, 0);

    return result;
};