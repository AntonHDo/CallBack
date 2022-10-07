/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

function suffixCipher(sentence, cipher) {
  // Your code here
  let words = sentence.split(" ")

  for (let i = 0; i < words.length; i++) {
    let currWord = words[i];
    // console.log(currWord)

    for (let key in cipher) {
      console.log(key)
      if (currWord.endsWith(key)) {  // endsWith string method, sees if currWord's ending is the same as the strings of key
        //                               in this case, its quietly.endsWith(ly) is true, but quietly.endsWith(ize) = false, so
        // console.log(currWord.endsWith(key))
        words[i] = cipher[key](currWord); //   quietly passes the if statements condition, so  words[i] = cipher[key](currWord)
        //                                                                                     iterated 0th word(quietly) = function cipher1 (quietly) =  quietlee
      }
    }
  }
  return words.join(" ")
}

let cipher1 = {
  ly: function (word) {
    return word.slice(0, -1) + 'ee';
  },
  ize: function (word) {
    return word + 'r';
  }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch (e) {
  return null;
}
