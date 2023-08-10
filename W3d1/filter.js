let a1 = [12,13,14,15,45,6,64,34,21];
let a2 = a1.filter((x) => {
        if (x % 2 == 0) return true;
        else return false;
    }
);
console.log(a2);

