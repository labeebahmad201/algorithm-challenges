function generateParenthesis(n: number): string[] {
    function build(n: number, path: string[], open: number, close: number, result: string[]) {
        if (n === open && n === close) {
            result.push(path.join(''));
            return;
        }

        if(open < n) {
            build(n, [...path, '('], open + 1, close, result);
        } 
        
        if (open > close) {
            build(n, [...path, ')'], open, close + 1, result);
        }
    }

    const result = [];
    build(n, [], 0, 0, result);

    return result;
};