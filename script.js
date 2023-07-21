
// problem:- 1

const inputStr = 'abcadeecfb';
const outputStr = removeDuplicates(inputStr);
 function removeDuplicates(str) {
  let results = '';
  let charcters = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!charcters[char]) {
      results += char;
      charcters[char] = true;
    }
  }

  return results;
}
console.log(outputStr);

// problem:- 2

function countAlphabets(str) {
  const alphaCount = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/[a-zA-Z]/.test(char)) {
      if (alphaCount.has(char)) {
        alphaCount.set(char, alphaCount.get(char) + 1);
      } else {
        alphaCount.set(char, 1);
      }
    }
  }

  for (const [char, count] of alphaCount) {
    console.log(`${char}=${count}`);
  }
}

const str1 = "abcadeecfb";
countAlphabets(str1);