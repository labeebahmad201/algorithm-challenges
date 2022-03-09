function moveElementToEnd(array, toMove) {
  // Write your code here.
	let s = 0; // start
	let e = array.length - 1; // end
	while(s < e){
		if(array[s] == toMove){
			if(array[e] == toMove){
				e -= 1;
				while(array[e] === toMove && s < e){ e -= 1;}
				let tmp = array[e];
				array[e] = array[s];
				array[s] = tmp;
			}else{
				let tmp = array[e];				
				array[e] = array[s];
				array[s] = tmp;
				e -= 1;
			}
		}
		s++;
	}
	
	return array;
}

let arr = [2, 1, 2, 2, 2, 3, 4, 2];
toMove = 2;
let r= moveElementToEnd(arr, toMove);
console.log('r = ', r);

arr = [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12];
toMove = 5;
r = moveElementToEnd(arr, toMove);
console.log('r = ', r);

arr = [2, 4, 2, 5, 6, 2, 2];
toMove = 2;

r = moveElementToEnd(arr, toMove);
console.log('r = ', r);

arr = [2, 1, 2, 2, 2, 3, 4, 2];
toMove = 2;
r = moveElementToEnd(arr, toMove);
console.log('r = ', r);


