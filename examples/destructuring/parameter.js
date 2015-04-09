function foo ([x, y], {bar, baz}) {
    console.log(x, y, bar, baz);
}

foo([100, 12], {bar: "hello", baz: "world"});