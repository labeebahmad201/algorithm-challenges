function validateSubsequence(array, sequence) {

    let mainArr = array;
    let subSequence = sequence;

    let subSequenceIdx = 0;
    let mainIdx = 0;

    while (mainIdx < mainArr.length) {
        if (mainArr[mainIdx] == subSequence[subSequenceIdx]) {
            subSequenceIdx++;
        }
        mainIdx++;
    }

    if (subSequence.length == subSequenceIdx) {
        return true;
    }
    return false;
}

console.clear();
let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let i;
i = validateSubsequence(arr, [1, 6, -1, 10]);
console.log('UC 1', i);

arr = [];
i = validateSubsequence(arr, [1, 6, -1, 10]);
console.log('UC 2', i);

arr = [1, 2];
i = validateSubsequence(arr, [1, 6, -1, 10]);
console.log('UC 3', i);
