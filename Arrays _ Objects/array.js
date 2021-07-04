let array = [2, 4, 25, 64, 8, 5]

array.push(6);
console.log(array);


let array1 = [2, 4, 25, 64, 8, 5]

array1.unshift(6);
console.log(array1);

function insertLastNumber(userName){
    array.length = array.length+1;
    array[array.length-1] = userName;
}

insertLastNumber('custumMember')
console.log(array);

function insertFirstNumber(password){
    // array1.length = array1.length+1;
    array1[array.length-8] = password;
}

insertFirstNumber("First")
console.log(array1);


function insertNewValue(addValue){
    array.length =array.length+1;
    for(let i=array.length-1; i>0; i-- ){
        array[i]= array[i];
        console.log(array[i]);
    }
}