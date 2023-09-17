function parseStr(input: string | string[]):string | string[] {
    if(Array.isArray(input)){
        return input.join();
    } else {
        return input.split('')
    }
}

console.log(parseStr("Yoselin"));
console.log(parseStr(["Y","o","s","e","l","i","n"]));