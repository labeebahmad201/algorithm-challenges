function addStrings(num1: string, num2: string): string {
    let num1I = num1.length - 1;
    let num2I = num2.length - 1;    
    let carry = 0;

    const result = [];

    while (num1I >= 0 || num2I >= 0 || carry > 0) { 
        const ans = carry + parseInt(num1[num1I] || '0') + parseInt(num2[num2I] || '0');
        carry = Math.floor( ans / 10);
        const digit = ans % 10;
        result.push(digit); 

        num1I--;
        num2I--;
    }

    return result.reverse().join('');
};