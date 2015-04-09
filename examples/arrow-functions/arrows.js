const foo = () => "hello world";

const bar = () => {
    let a = 100;
    let b = [];
    b.push(100);
    return b;
};

const l = [100, 200, 300, 500];
l.reduce((acc, x) => x + acc);  // sum the array

l.reduce(function (acc, x) {
    return acc + x;
});