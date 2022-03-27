/*****
<div class="_3ujpThEtqc2woOs6g2RNC2 ae-workspace-dark"><div class="html">
<p>
  Write a function that takes in an n x m two-dimensional array (that can be
  square-shaped when n == m) and returns a one-dimensional array of all the
  array's elements in spiral order.
</p>
<p>
  Spiral order starts at the top left corner of the two-dimensional array, goes
  to the right, and proceeds in a spiral pattern all the way until every element
  has been visited.
</p>
<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">array</span> = [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7],
]
</pre>
<h3>Sample Output</h3>
<pre>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
</pre>
</div></div>
****/
export function spiralTraverse(array: number[][]) {
  // Write your code here.
	let size: number = array.length;
	// represents size on left/right
	let sides : 'horizontal'|'vertical' = 'horizontal';
	let start = array[0][0];		
	// let horizontal
	// size - 1;
	
	let keepGoing: boolean = true;
	let i: number = 0, j: number = 0;
	console.log('array', array);
	console.log('size', size);
	let result = [];
	
		let sR = 0;
		let eR = size - 1;
		let sC = 0;
		let eC = array[0].length - 1;
	let traversedOne = false;
	let traversedTwo = false;
	let traversedThree = false;
	let traversedFour = false;
	
	while(sR <= eR && sC <= eC){
		
	traversedOne = false;
	traversedTwo = false;
	traversedThree = false;
	traversedFour = false;
		
		i = sC;
		while(i <= eC){
			traversedOne = true;
			console.log('array[sR][sC]', array[sR][i]);
			result.push(array[sR][i]);
			i++;
		}
		
		i = sR + 1;
		while(i <= eR && traversedOne){
			traversedTwo = true;
			console.log('array 1', array[i][eC]);
			result.push(array[i][eC]);			
			i++;
		}

		
		i = eC - 1;
		while(i >= sC && traversedTwo){
			traversedThree = true;			
			console.log('array 2', array[eR][i]);
			result.push(array[eR][i]);			
			i--;
		}

		
		i = eR - 1;
		while(i > sR && traversedThree){
			console.log('array 3', array[i][sC], '....');
			result.push(array[i][sC]);
			i--;
		}
		
		sR++;
		eR--;
		sC++;
		eC--;
	}
	
	if(result.length > 0){
		return result;
	}
	
  return [-1];
}
