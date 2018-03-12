let obj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

var objclone = Object.assign({}, obj);
console.log('obj 1: ', obj);
console.log('objclone 1: ', objclone);

obj.c.age = 45;
console.log('obj 2: ', obj);
console.log('objclone 2: ', objclone);

objclone.c.age = 46;
console.log('obj 3:', obj);           // 45 - This also changes
console.log('objclone 3: ', objclone); // 45
