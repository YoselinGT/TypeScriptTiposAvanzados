const withoutEnd = () => {
    while(true) {
        console.log("nunca para de aprender");
    }
}
const fail = (message: string) => {
    throw new Error(message)
}

const example = (input: unknown) => {
    if (typeof input === 'string'){
        'Es un string '
    } else if(Array.isArray(input)){
        return 'Es un array'
    }

    return fail('Not match')
}

console.log(example('Hola'));
console.log(example([1,2,3,4]));
console.log(example(123));
console.log(example('Hola despues del fail'));