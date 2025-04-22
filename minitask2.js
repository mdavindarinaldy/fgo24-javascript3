// 20 Built-in Method

// 1.) array.sort()

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Output: Array ["Dec", "Feb", "Jan", "March"]

const array = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array);
// Output: Array [1, 100000, 21, 30, 4]

// Penjelasan: sort() dalam array berfungsi untuk mengurutkan elemen yang ada dalam array dan 
// mereferensikannya kembali ke array yang sama (dengan kondisi yang sudah terurut). Urutan yang 
// digunakan secara default adalah ascending (dari nilai yang paling bawah ke atas). Pada contoh 
// penggunaan diatas, ketika mengurutkan array of string maka yang dilihat adalah unicode dari 
// masing-masing huruf/abjadnya, hal ini mengapa 'Dec' menjadi urutan pertama.
// Pada contoh kedua, karena parameter dalam sort tidak diisi, maka number dalam array akan dikonversikan
// menjadi string yang kemudian diurutkan berdasarkan UTF-16 code, sehingga 100000 menjadi urutan kedua

// 2.) array.toSorted()

const months1 = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths1 = months1.toSorted();
console.log(sortedMonths1); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months1); // ['Mar', 'Jan', 'Feb', 'Dec']

// Penjelasan: toSorted() melakukan fungsi yang sama dengan sort() hanya saja tidak mereferensikan
// hasil array yang sudah diurutkan ke dalam array yang sama. toSorted() mengembalikan array baru yang
// sudah diurutkan dengan urutan default yaitu ascending

// 3.) array.reverse()

const array1 = ["one", "two", "three"];
console.log(array1); // Array ["one", "two", "three"]
console.log(array1.reverse()); // Array ["three", "two", "one"]
console.log(array1); // Array ["three", "two", "one"] // Array original berubah

// Penjelasan: reverse() dalam array berfungsi untuk membalikkan urutan dalam array (reverse: elemen pertama 
// dalam array menjadi elemen terakhir dan elemen terakhir menjadi pertama) dan kemudian mereferensikannya 
// ke array yang sama.  

// 4.) array.toReversed()

const array2 = ["one", "two", "three"];
console.log(array2); // Array ["one", "two", "three"]
console.log(array2.toReversed()); // Array ["three", "two", "one"]
console.log(array2); // Array ["one", "two", "three"] // Array original tidak berubah

// Penjelasan: toReversed() memiliki fungsi yang sama dengan reverse() hanya saja tidak mereferensikannya ke array
// yang sama sehingga array original tidak berubah. toReversed() mengembalikan array baru dengan elemen yang sudah 
// dibalik 

// 5.) array.map()

const array3 = [1, 4, 9, 16];
const map1 = array3.map((x) => x * 2);
console.log(map1); // output: Array [2, 8, 18, 32]

// Penjelasan: map() dalam array mengembalikan array baru yang sudah diproses dengan suatu function callback yang dipanggil 
// pada setiap elemennya

// 6.) array.pop()

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop()); // mengembalikan elemen terakhir (elemen yang dibuang dari array) output: "tomato"
console.log(plants); // output Array ["broccoli", "cauliflower", "cabbage", "kale"]

// Penjeleasan: pop() memiliki fungsi untuk menghapus elemen terakhir dari array dan mengembalikan elemen itu.
// pop() mengubah length dari array itu sendiri.

// 7.) array.slice()

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2)); //  Output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); //  Output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); //  Output: Array ["bison", "camel", "duck", "elephant"]

// Penjelasan: slice() dalam array berfungsi untuk mengambil sebagian elemen dari array dengan parameter
// 'start' dan 'end'. Dimana 'start' dan 'end' merepresentasikan index dalam array tersebut. Namun elemen
// 'end' tidak termasuk ke dalam pengambilan elemen -> dapat dilihat pada contoh kedua 'end' bernilai 4 namun
// elemen ke-4 yaitu 'elephant' tidak ikut diambil. Jika 'start' dan 'end' bernilai negatif maka akan dihitung
// dari elemen belakang dalam array

// 8.) array.splice()

const months2 = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // Inserts at index 1
console.log(months2); // Output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May"); // Replaces 1 element at index 4
console.log(months2); // Output: Array ["Jan", "Feb", "March", "April", "May"]

// Penjelasan: splice() digunakan untuk merubah konten dari suatu elemen dalam array dengan cara
// menghapus atau mengganti elemen yang ada atau memasukkan elemen baru. Perubahan ini bersifat
// mereferensikan array original

// 9.) array.toSpliced()

const months3 = ["Jan", "Mar", "Apr", "May"];

const months4 = months3.toSpliced(1, 0, "Feb"); // Inserting an element at index 1
console.log(months4); // ["Jan", "Feb", "Mar", "Apr", "May"]

const months5 = months3.toSpliced(2, 2); // Deleting two elements starting from index 2
console.log(months5); // ["Jan", "Feb", "May"]

// Penjelasan: toSpliced() memiliki fungsi yang sama dengan splice() hanya saja tidak mereferensikan
// array original, sehingga toSpliced() mengembalikan array baru yang sudah dirubah.

// 10.) array.find()

const array4 = [5, 12, 8, 130, 44];
const found = array4.find((element) => element > 10);

console.log(found); // Output: 12

// Penjelasan: find() adalah method dalam array yang mengembalikan nilai elemen yang pertama kali ditemukannya
// dengan kondisi yang memenuhi atau sesuai dengan testing function. Jika tidak ada elemen yang memenuhi atau 
// sesuai dengan kondisi / testing function, maka find() akan mengembalikan undefined


// 11.) String.split()

const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words[3]); // Output: "fox"

const chars = str.split("");
console.log(chars[8]); // Output: "k"

const strCopy = str.split();
console.log(strCopy); // Output: Array ["The quick brown fox jumps over the lazy dog."]

// Penjelasan: split() berfungsi untuk memisahkan suatu string dan membaginya berdasarkan separator yang
// diberikan ke dalam array. Sehingga, split() mengembalikan nilai berupa array. Pada contoh pertama, separator
// yg digunakan adalah spasi, sehingga isi arraynya adalah masing-masing kata dalam kalimat. Sedangkan
// contoh kedua mengembalikan array dengan masing-masing elemennya berupa huruf dari kalimat. Contoh ketiga
// mengembalikan array dengan 1 elemen.

// 12.) String.replace()

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my")); // Output: "I think my dog is cuter than your dog!"

// Penjelasan: replace(pattern, replacement) dalam string mengembalikan string baru yang sebagian atau keseluruhannya 
// diganti oleh parameter replacement. Pattern dapat berupa string atau RegExp, sedangkan replacement dapat berupa string
// atau fungsi. Jika pattern merupakan string, maka hanya kemunculan pertama saja yang akan digantikan.
// Karena replace() mengembalikan string baru maka original stringnya tidak berubah

// 13.) String.concat()

const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2)); // Output: "Hello World"
console.log(str2.concat(", ", str1)); // Output: "World, Hello"

// Penjelasan: concat() dalam string berfungsi untuk menggabungkan string. concat() mengembalikan nilai string baru.
// Ketika terdapat argumen yang dilakukan concat() bukan bertipe data string, maka argumen tersebut akan diconvert menjadi
// sebuah string terlebih dahulu sebelum dilakukan digabung.

// 14.) String.at()

const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`); // Output: "An index of 5 returns the character u"

index = -4;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`); // Output: "An index of -4 returns the character d"

// Penjelasan: at() dalam string mengembalikan nilai string baru yang berisikan satu karakter UTF-16 code yang berindeks spesifik 
// (ditentukan dalam parameter). Metode ini memungkinkan menggunakan parameter yang bernilai positif ataupun negatif. Jika indeks
// bernilai negatif, maka perhitungan indeks tersebut dimulai dari karakter paling akhir dalam string tersebut

// 15.) String.substring()

const str3 = "Mozilla";

console.log(str3.substring(1, 3)); // Output: "oz"
console.log(str3.substring(2)); // Output: "zilla"

// Penjelasan: substring(indexStart, indexEnd) mengembalikan nilai string dari indexStart hingga indexEnd (indexEnd-nya itu sendiri 
// tidak termasuk). Jika indexEnd tidak diberikan, maka mengembalikan nilai string dari indexStart hingga akhir dari string.

// 16.) String.toLowerCase()

const sentence1 = "The quick brown fox jumps over the lazy dog.";

console.log(sentence1.toLowerCase()); // Output: "the quick brown fox jumps over the lazy dog."

// Penjelasan: toLowerCase() mengembalikan string baru yang telah dikonversikan ke dalam lower case. Namun, method ini tidak akan
// merubah konten dari string original

// 17.) String.toUpperCase()

const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase()); // Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

// Penjelasan: toUpperCase() mengembalikan string baru yang telah dikonversikan ke dalam upper case. Namun, method ini tidak akan
// merubah konten dari string original

// 18.) String.endsWith()

const str4 = "Cats are the best!";

console.log(str4.endsWith("best!")); // Output: true
console.log(str4.endsWith("best", 17)); // Output: true

// Penjelasan: endsWith(searchString, endPosition) berfungsi untuk memeriksa apakah suatu string diakhiri oleh parameter searchString
// endsWith() mengembalikan nilai boolean yaitu true atau false sesuai dengan parameter. endPosition merupakan posisi/lokasi/indeks
// akhir mana yang akan diperiksa, parameter ini bernilai default sepanjang length dari string.

// 19.) String.startsWith()

const str5 = "Saturday night plans";

console.log(str5.startsWith("Sat")); // Output: true
console.log(str5.startsWith("Sat", 3)); // Output: false

// Penjelasan: startsWith() memiliki fungsi yang mirip seperti endsWith() hanya saja kali ini memeriksa bagian awal pada string.
// mengembalikan nilai boolean. 

// 20.) String.repeat()

const mood = "Happy! ";
console.log(`I feel ${mood.repeat(3)}`); // Output: "I feel Happy! Happy! Happy! "

// Penjelasan: repeat(count) dalam string mengembalikan string baru yang berisikan seberapa banyak (parameter count) yang dijabarkan
// sebelumnya. Menghasilkan copies dari string sejumlah parameter count yang telah diconcatenated.

// 5 Built-in Function

// 1.) parseInt()

console.log(parseInt("123")); // 123 (default base-10)
console.log(parseInt("123", 10)); // 123 (explicitly specify base-10)
console.log(parseInt("   123 ")); // 123 (whitespace is ignored)
console.log(parseInt("077")); // 77 (leading zeros are ignored)
console.log(parseInt("1.9")); // 1 (decimal part is truncated)
console.log(parseInt("ff", 16)); // 255 (lower-case hexadecimal)
console.log(parseInt("0xFF", 16)); // 255 (upper-case hexadecimal with "0x" prefix)
console.log(parseInt("xyz")); // NaN (input can't be converted to an integer)

// Penjelasan : parseInt(string, radix) adalah fungsi untuk mengubah string menjadi integer/number. Parameter string diisi oleh string yang
// akan diubah menjadi number, sedangkan parameter radix merepresentasikan basis di sistem numeral matematikal. Nilai default radix adalah 10
// (decimal), 16 = hexadecimal. Spasi, angka 0 didepan akan diabaikan. Bilangan desimal akan dibulatkan kebawah.

// 2.) isNaN()

function milliseconds(x) {
    if (isNaN(x)) {
      return "Not a Number!";
    }
    return x * 1000;
  }
  
console.log(milliseconds("100F")); // Output: "Not a Number!"
console.log(milliseconds("0.0314E+2")); // Output: 3140

// Penjelasan : isNaN(value) adalah fungsi untuk mengecek apakah parameter value merupakan NaN (Not a Number) atau bukan. isNaN() awalnya akan
// mengkonversikan value tersebut menjadi number terlebih dahulu jika dibutuhkan. Akan mengembalikan nilai true jika value yang diberikan berupa 
// NaN walaupun setelah dikonversikan menjadi number.

// 3.) encodeURI()

const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri);
console.log(encoded); // Output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

// Penjelasan : encodeURI() merupakan fungsi untuk encode (membuat sandi) dari URI (Uniform Resource Identifier) dengan cara mengganti setiap
// instance dari suatu karakter dengan satu, dua, tiga, atau empat escape sequences yang merepresentasikan UTF-8 dari karakter yang diencode.
// Mengembalikan nilai string.

// 4.) decodeURI()

try {
    console.log(decodeURI(encoded)); // Output: "https://mozilla.org/?x=шеллы"
  } catch (e) { // Catches a malformed URI
    console.error(e);
  }

// Penjelasan : decodeURI() merupakan fungsi yang meng-decode URI yang sebelumnya telah di-encode. Mengembalikan nilai string. 

// 5.) isFinite()

function div(x) {
    if (isFinite(1000 / x)) {
      return "Number is NOT Infinity.";
    }
    return "Number is Infinity!";
  }
  
console.log(div(0)); // Output: "Number is Infinity!""
console.log(div(1)); // Output: "Number is NOT Infinity."

// Penjelasan : isFinite(value) merupakan fungsi yang mengecek apakah parameter value bersifat terhingga atau finite. isFinite()
// akan mengkonversikan value menjadi number terlebih dahulu jika diperlukan. Akan mengembalikan nilai boolean, true jika value
// finite, false jika value NaN, infinity (bilangan tak terhingga, baik yang negatif maupun positif)


