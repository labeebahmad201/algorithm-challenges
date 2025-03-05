function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    function generate(startIndex: number, path: number[], used: Map<any, boolean>) {
        if (startIndex === nums.length) {
            result.push([...path]); // common mistake: pushing path here as reference, this means array
            // references are pushed and then elements are removed from references.
            return;
        }

        for(const num of nums) {
            if(used.get(num)) { // if already used then skip
                continue;
            }
            path.push(num);
            used.set(num, true); // additional state.
            generate(startIndex + 1, path, used);
            path.pop();
            used.set(num, false); // additional state.
        }
    }

    generate(0, [], new Map());
    return result;
};