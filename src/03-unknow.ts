let unknowVar: unknown;

unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

// unknowVar.doSomething()

if(typeof unknowVar === 'string'){
    unknowVar.toLowerCase()
}

const parse = (str: string): unknown => {
    return JSON.parse(str)
}