let obj = {
    id:123,
    name:"Nikhil",
    branch:"CSE",
    info:function() {
        return "Welcome Mr./MS." + this.name + "your branch is" + this.branch ;
    },
};
console.log(obj.info());