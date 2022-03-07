
function findPeakIndex(arr){
    for(let i = 0; i < arr.length; i++){
        if(i - 1 < 0 ){
            if(arr[i] > arr[i+1]){
                return i;
            }
        }else if(i === arr.length - 1){
            if(arr.length == 1){
                if(arr[i]){
                    return i;
                }
            }else {
                if(arr[i-1] < arr[i]){
                    return i;
                }                
            }
        }else {
            if(arr[i] > arr[i+1] && arr[i] > arr[i-1]){
                return i;
            }            
        }
    }

    return false;
}

let arr = [1,2,1,3,5,6,4];
let r = findPeakIndex(arr);
console.log('UC 1 : ', r);

arr = [1,2];
r = findPeakIndex(arr);
console.log('UC 2 : ', r);

arr = [1,2, 3];
r = findPeakIndex(arr);
console.log('UC 3 : ', r);

