let arr = [1, 2, 3, 4,];

let output = arr.reduce((res, cur) => {
    return res + cur;
})

console.log(output);


//To print the larjest number 

let num = [5, 6, 2, 1, 101, 3];

const larjestnum = num.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
});

console.log(larjestnum);