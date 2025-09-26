function addBinary(a: string, b: string): string {
    let i = a.length - 1;
    let j = b.length -1;
    let ans = [];  
    let ansIndex = ans.length - 1;
    let sum = 0;
    let carry = 0;

    while (i >= 0 || j >= 0 || carry > 0) {
        sum = carry;
        
        if(i >= 0) {
            sum += Number(a[i]);
            i--;
        }

        if(j >= 0) {
            sum += Number(b[j]);
            j--;
        }

        carry = Math.floor(sum / 2);
        ans.push(sum % 2);
    }

    return ans.reverse().join('');
};
