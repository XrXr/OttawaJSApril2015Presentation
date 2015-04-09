function Bar () {
    this.privateVar = 100;
    this.getPrivate = function () {
        return this.privateVar;
    };
}

function Foo () {
    this.privateVar = 100;
    this.getPrivate = () => {
        return this.privateVar;
    };
}

let bad = (new Bar()).getPrivate;
let good = (new Foo()).getPrivate;

console.log(bad());
console.log(good());
console.log(good.call(null));

function Bar () {
    let that = this;
    this.info = 100;
    xhr.get("/data/here", function (data) {
        that.info = data;
    });
}

function Qux () {
    this.info = 100;
    xhr.get("/data/here", data => {
        this.info = data;
    });
}