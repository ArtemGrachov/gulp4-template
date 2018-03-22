console.log("ddd.js");
function ddd() {
    const test = () => {
        console.log("test");
        console.log(this);
    };
    test();
    return test;
}
ddd();
