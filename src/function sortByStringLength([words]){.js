function sortByStringLength([words]){
    //var i = 0, j;
    //while (i < words.length) {
    //    j = i + 1;
    //    while (j < words.length) {
    //        if (words[j] < words[i]) {
    //            var temp = words[i];
    //            words[i] = words[j];
    //            words[j] = temp;
    //        }
    //        j++;
    //    }
    //    i++;
    //}
    //Array.from(words)
    let array = [words]
    const asc = array.sort((a,b) => a.length - b.lenght);
    return asc
}
console.log(asc)

let array = ["ab", "abcdefgh", "abcd"];

array.sort((a, b) => b.length - a.length);

console.log(JSON.stringify(array, null, '\t'));