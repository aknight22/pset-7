function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  //needs work
  else {
    firstElementa = a[0];
    firstElementb = b[0];
    lastElementa = a[a.length - 1];
    lastElementb = b[b.length - 1];
    if (firstElementa === firstElementb) {
      return true;
    }
    else if (lastElementa === lastElementb) {
      return true;
    }
    else {
      return false;
    }
  }
}

function endsMeet(values, n) {
  let empty = [];
  let arr = [];
  if (!values || values.length < n || n < 0) {
    return arr;
  }
  for (i = 0; i < n; i++) {
    arr.push(values[i]);
  }
  for (z = values.length - n; z < values.length; z++) {
    arr.push(values[z])
  }
  if (n === 0) {
    return empty;
  }
  return arr
}

function difference(numbers) {

  if (!numbers || numbers.length < 1 || numbers.some(isNaN)) {
    return undefined;
  }
  else {
    if (numbers.length === 1) {
      return 0;
    }
    else {
      maxNumber = Number(Math.max.apply(null, numbers));
      minNumber = Number(Math.min.apply(null, numbers));
    }
    return maxNumber - minNumber;
  }
}

function max(number) {
  if (!number || number.length < 3 || number.length % 2 === 0 || number.some(isNaN)) {
    return undefined;
  }
  else {
    first = number[0];
    last = number[number.length - 1];
    middle = number[(number.length - 1) / 2];

    return Math.max(first, last, middle);
  }
}

function middle(values) {
  let array = []
  if (!values || values.length < 3 || values.length % 2 == 0) {
    return [];
  }
  let index = (values.length/2)-1 + 0.5
  let two_middle = values[index]
  let one_middle = values[index - 1]
  let three_middle = values[index + 1]
  array.push(one_middle);
  array.push(two_middle);
  array.push(three_middle);
  return array;
}

function increasing(numbers) {
  let tmp = numbers;
  if (!tmp || tmp.length < 3) {
    return false;
  }
  if (tmp.some(isNaN)) {
    return false;
  }
  for (i = 0; i < tmp.length; i++) {
    if (tmp[i] % 1 != 0) {
      return false;
    }
  }
  let counter = 0
  let one_last = -1
  for (x = 0; x < tmp.length; x++) {
    if (tmp[x] == one_last + 1) {
      one_last = tmp[x]
      if (tmp[x+1] == one_last + 1) {
        return true
        counter = 1
        break;
      }
      else {
      one_last = -1
    }
      }
    else {
      one_last = tmp[x]
    }
  }
  if (counter == 0) {
    return false;
  }
}

function everywhere(values, x) {
  let flag = 1;
  if (!values || values.length < 1 || x === undefined) {
    return false;
  }
  else {

    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] === x) {
        flag = 0;
      }
      else if (values[i - 1] === x || values[i + 1] === x) {
        flag = 0;
      }
      else {
        flag = 1;
        return false;
      }
    }
  }
  if (flag === 0) {
    return true;
  }

}

function consecutive(numbers) {
  let flag = 0;
  if (!numbers || numbers.length < 3 || numbers.some(isNaN) || numbers.some(Number.isInteger) === false) {
    return false;
  }
  else {

    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0 && numbers[i + 2] % 2 === 0) {
        flag = 1;
        break;
      }
      else if (numbers[i] % 2 !== 0 && numbers[i + 1] % 2 !== 0 && numbers[i + 2] % 2 !== 0) {
        flag = 1;
        break;
      }
      else {

      }
    }
    if (flag === 1) {
      return true;
    }
    else {
      return false;
    }
  }
}

function balance(numbers) {
  if (!numbers || numbers.length < 2 || numbers.some(isNaN) || numbers.some(Number.isInteger) === false) {
    return false;
  }
  else {
    let flag = 0;

    for (let i = 0; i < numbers.length; i++) {
      splitLeft = i;
      splitRight = i + 1;
      let sumLeft = 0;
      let sumRight = 0;
      for (let j = 0; j <= splitLeft; j++) {
        sumLeft = sumLeft + numbers[j];

      }
      for (let k = i + 1; k <= numbers.length - 1; k++) {
        sumRight = sumRight + numbers[k];

      }
      if (sumLeft === sumRight) {
        flag = 1;
        return true;
      }
    }
    if (flag !== 1) {
      return false;
    }
  }
  console.log("test");
}

function clumps(values) {
  let clumpCount = 0;
  if (!values) {
    return -1;
  }
  else {
     for (let i = 0; i < values.length - 1; i++) {
      if (values[i - 1] === values[i]) {

      }
      else if (values[i] === values[i + 1]) {
        clumpCount++;
      }
    }
    return clumpCount;
  }
}
module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
