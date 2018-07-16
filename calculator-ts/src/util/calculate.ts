
const doCalc = (num1: number, num2: number, operator: string): number => {
    switch (operator) {
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        default:
            throw new Error(`Invalid operator: ${operator}`);
    }
};


const calculate = (value: string): string => {
    let parts = value.trim().split(' ');
    if (parts.length === 1) {
        return String(parts[0]);
    }
    else if (parts.length % 2 === 0) {
        throw new Error('Invalid input');
    }

    while (parts.length >= 3) {
        const start = 0;

        const num1 = Number(parts[start]);
        const num2 = Number(parts[start + 2]);
        if (num1 === Number.NaN || num2 === Number.NaN) {
            throw new Error('Invalid input');
        }

        const result = doCalc(num1, num2, parts[start + 1]);

        parts = [String(result), ...parts.slice(3)];
    }

    return '' + parts[0];
};

export default calculate;