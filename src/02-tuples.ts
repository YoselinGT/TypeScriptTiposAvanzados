const proces: (number | string)[] = [1,2,3,4,5,'qw']

proces.push(1)
proces.push("1")

let usertupla: [string, number, boolean];

usertupla = ['nico',12,true]
const [username,age] = usertupla;
console.log(username,age)
