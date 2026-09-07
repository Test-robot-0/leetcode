function addBinary(a: string, b: string): string {
    const result: string[] = [];
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0 || carry !== 0) {
        let sum = carry;

        if (i >= 0) {
            sum += a.charCodeAt(i) - 48;
            i--;
        }

        if (j >= 0) {
            sum += b.charCodeAt(j) - 48;
            j--;
        }

        result.push((sum % 2).toString());
        carry = Math.floor(sum / 2);
    }

    return result.reverse().join('');
}