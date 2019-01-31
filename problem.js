let arr = [4, 3, 2, 1]

//array would be sort in manner
arr.sort(arr);

//console.log(arr)

let target = 1;

//let count = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] - arr[i] === target) {
            //count++;
            console.log("( "+ arr[j] +", "+arr[i]+" )")
        }
    }
}

// console.log(count);

//requirment  (2,1) (3,2) (4,3)