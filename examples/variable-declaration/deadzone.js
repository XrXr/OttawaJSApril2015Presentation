let foo = "hi!";
function bar () {
    console.log(foo);
    console.log("world");
    let foo = "hello!";
}
bar();