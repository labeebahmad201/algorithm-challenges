const KEYBOARD = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
};

function dfs(digits, level, path, res) {
    if(level === digits.length) {
        if(path.length > 0) res.push(path.join('')); // makes sure empty string doesnt get pushed
        return;
    }

    const nextNumber = digits.charAt(level); // As level corresponds to character that's why we want to read by level 
    for(const letter of KEYBOARD[nextNumber]) {
        path.push(letter);
        dfs(digits, level + 1, path, res);
        path.pop();
    }
}

function letterCombinations(digits: string): string[] {
    const res = [];
    dfs(digits, 0, [], res);
    return res;
};