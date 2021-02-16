// class Trie {
//   constructor() {
//     this.root = {};
//   }
//   insert(word, idx) {
//     let node = this.root;
//     // console.log("word->", word)
//     for (let char of word) {
//       char = char.toLowerCase();
//       if (!node[char]) {
//         node[char] = {};
//         node[char].index = [idx];
//       }
//       node[char].index.push(idx);
//       node = node[char];
//     }
//   }

//   search(str) {
//     console.log("search str=>", str);
//     let node = this.root;

//     for (let i = 0; i < str.length; i++) {
//       let char = str[i].toLowerCase();
//       if (!node[char]) {
//         console.log("none");
//         break;
//       } else {
//         if (i === str.length - 1) {
//           return node[char].index;
//         }
//       }
//       node = node[char];
//     }
//     return [];
//   }
// }

// export default function filterBy(data, searchTerm, keys) {
//   let trie = new Trie();
//   for (let i = 0; i < data.length; i++) {
//     let obj = data[i];
//     for (let key in obj) {
//       if (keys.includes(key)) {
//         const arr = obj[key].split(" ");
//         for (let word of arr) {
//           trie.insert(word, i);
//         }
//       }
//     }
//   }
//   const ind = trie.search(searchTerm);
//   let result = {};
//   let output = [];
//   if (ind.length) {
//     for (let id of ind) {
//       if (!result[id]) {
//         result[id] = true;
//         output.push(data[id]);
//       }
//     }
//     console.log("length of output array->", output.length);
//     return output;
//   } else return [];
// }

class Trie {
  constructor() {
    this.root = {};
  }
  insert(word, idx) {
    let node = this.root;
    // console.log("word->", word)
    // console.log("idx->", idx)
    for (let char of word) {
      char = char.toLowerCase();
      // console.log("CHAR->", char)
      if (!node[char]) {
        node[char] = {};
        node[char].index = [idx];
      }
      node[char].index.push(idx);
      node = node[char];
    }

    // if(!node.index){
    //   node.index = []
    // } node.index.push(idx)
    // node.isWord = true
  }

  search(str) {
    console.log("search str=>", str);
    let node = this.root;

    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      //  console.log("node=>", node)
      //  console.log("char", char)
      if (!node[char]) {
        console.log("none");
        break;
      } else {
        // console.log(node[char].index)
        if (i === str.length - 1) {
          // console.log(node[char].index);
          return node[char].index;
        }
      }
      node = node[char];
    }
    return [];
  }
}

export default function filterBy(data, searchTerm, keys) {
  let trie = new Trie();
  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    for (let key in obj) {
      if (keys.includes(key)) {
        // console.log("key->", key)
        // console.log("value->", obj[key])
        // console.log("i->", i)
        const arr = obj[key].split(" ");
        for (let word of arr) {
          trie.insert(word, i);
        }
      }
    }
  }
  const ind = trie.search(searchTerm);
  // console.log(ind)
  let result = {};
  let output = [];
  if (ind.length) {
    for (let id of ind) {
      if (!result[id]) {
        result[id] = true;
        output.push(data[id]);
      }
    }
    console.log("length of output array->", output.length);
    return output;
  } else return [];
}
