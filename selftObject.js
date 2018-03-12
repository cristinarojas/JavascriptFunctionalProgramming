var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // bar refers to myObject
        console.log("outer func:  self.foo = " + self.foo); // bar refers to myObject
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // undefined no longer refers to myObject
            console.log("inner func:  self.foo = " + self.foo); // slef reference to the local variable self remains in scope and is accessible there.
        }());
    }
};
myObject.func();
