/*****
<div class="_3ujpThEtqc2woOs6g2RNC2 ae-workspace-dark"><div class="html">
<p>
  Write a function that takes in an array of integers and returns the length of
  the longest peak in the array.
</p>
<p>
  A peak is defined as adjacent integers in the array that are <b>strictly</b>
  increasing until they reach a tip (the highest value in the peak), at which
  point they become <b>strictly</b> decreasing. At least three integers are required to
  form a peak.
</p>
<p>
  For example, the integers <span>1, 4, 10, 2</span> form a peak, but the
  integers <span>4, 0, 10</span> don't and neither do the integers
  <span>1, 2, 2, 0</span>. Similarly, the integers <span>1, 2, 3</span> don't
  form a peak because there aren't any strictly decreasing integers after the
  <span>3</span>.
</p>
<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">array</span> = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
</pre>
<h3>Sample Output</h3>
<pre>6 <span class="CodeEditor-promptComment">// 0, 10, 6, 5, -1, -3</span>
</pre>
</div></div>
****/
export function longestPeak(array: number[]) {
  // Write your code here.
	
	if(array.length == 0 || array.length < 3){
			return 0;
	}
	let maxLen = -1;
	let lenCurrent = 0;
	let isMountain = false;
	let i = 0;
	
	console.log('arr', array);
	let dir : 'up'|'down'|null = null;	
	
	while(i < array.length - 1){
				
		if((dir == null || dir == 'up') && array[i] < array[i+1]){
			lenCurrent++;
			isMountain = true;
			dir = 'up';
		}else if(array[i] > array[i+1]){
			if(dir == 'up' || dir == 'down'){
				lenCurrent++;
				dir = 'down';
			}
		}			

		
		if(array[i] == array[i+1]){
			lenCurrent = 0;
			isMountain = false;
			dir = null;
		}
		
		if(dir == 'down'){
			if(array[i] < array[i+1]){
				lenCurrent = 1;
				isMountain = true;
				dir = 'up';				
			}
		}
		
		if(dir == 'down' && maxLen < lenCurrent + 1){
			 maxLen = lenCurrent + 1;
		}
				
		console.log('lenCurrent', lenCurrent, isMountain, array[i], array[i+1], maxLen);		
		i++;
	}
	
	if(maxLen > -1){
		return maxLen;	
	}
		
	return 0;
}
