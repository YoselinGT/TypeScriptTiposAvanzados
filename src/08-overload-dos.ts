
export function parseStr(input: string):string[];
export function parseStr(input: string[]):string;
export function parseStr(input: number):boolean;


export function parseStr(input: unknown):unknown {
    if(Array.isArray(input)){
        return input.join('');
    } else if(typeof input === 'string'){
        return input.split('')
    } else if(typeof input === 'number'){
        return true;
    }
}

const r1 = parseStr("Yoselin");

r1.forEach(item => console.log(item))


const r2 = parseStr(["Y","o","s","e","l","i","n"]);
console.log(r2.toUpperCase())



const r3 = parseStr(2);
console.log(r3)

