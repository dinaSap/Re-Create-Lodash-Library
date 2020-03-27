const _ = {
  clamp(num, lowerBound, upperBound) {
    let lower = Math.max(num, lowerBound);
    let upper = Math.min(num, upperBound)
    if (num < lower) {
      return lower;
    } else if( num > upper) {
      return upper;
    } else {
      return num;
    }
  },
  inRange (num, startValue, endValue) {
    if (!endValue) {
      endValue = startValue;
      startValue = 0;
    } ;
    if (startValue > endValue) {
      let tempNum = endValue;
      endValue = startValue;
      startValue = tempNum;
    }
    const isInRange = (startValue <= num && num < endValue);
    return isInRange;
  },
  words(str) {
    const words = str.split(' ');
    return words;
  },
  pad(str, len) {
    if (len <= str.length) {
      return str;
    }
    const startPaddingLength = Math.floor((len - str.length)/2);
    const endPaddingLength = len - str.length - startPaddingLength;
    const paddedString =' '.repeat(startPaddingLength)+str+' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(obj, key) {
    const hasValue = obj.hasOwnProperty(key);
    return hasValue;
  },
  invert(obj) {
    const invertedObj = {};
  for (let key in obj) {
    let originalValue = obj.key;
    invertedObj.originalValue = key;
  }
    return invertedObj;
  },
  findKey(obj, predicate) {
    for (let key in obj){
      let value = obj.key;
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return key;
      }
    }
    return undefined;
  },
  drop(arr, n) {
    if(!n) { n = 1;}
    const droppedArray = arr.slice(n);
    return droppedArray;
  },
  dropWhile(arr, predicate) {
    const dropNumber = arr.findIndex((element, index) => {return !predicate(element, index, arr)});
    const droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },
  chunk(arr, size) {
    if(!size){size = 1};
    let arrayChunks = [];
    for (let i = 0; i < arr.length; i+= size){
      let arrayChunk = arr.slice(i,i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
    }
};


