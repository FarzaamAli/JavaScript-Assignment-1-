//Question 2
function findVal(key,arr,x=0){
    var y=x++;
    var arr2=arr.slice(x);
    if(arr[0]===key && arr.length != 0){
        return true;
    }else if(arr.length===0){return false;}
    return findVal(key,arr2,y++);
}



var arr = [12,61,36,59,81,20,50];
console.log(findVal(12,arr));