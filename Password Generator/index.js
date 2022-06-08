// ==== AVAILABLE CHARACTERS ====
let characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// ==== GENERATE A RANDOM CHARACTER ====
function char() {
   let chars = characters[Math.floor(Math.random() * characters.length)]
   return chars
}

// ==== GENERATES 4 RANDOM PASSWORDS ====
function fourWords() {
   clear()
   // ==== 1st Password ====
   let word = [char(), char(), char(), char(), char(), char(), char()]
   
   for (i = 0; i < word.length; i++) {
   let wordEl = document.querySelector("#word")
   wordEl.textContent += word[i]
   }
   // ==== 2nd Password ====
   let word1 = [char(), char(), char(), char(), char(), char(), char()]   
   for (i = 0; i < word1.length; i++) {
   let word1El = document.querySelector("#word1")
   word1El.textContent += word1[i]
   }
   // ==== 3rd Password ====
   let word2 = [char(), char(), char(), char(), char(), char(), char()]   
   for (i = 0; i < word2.length; i++) {
   let word2El = document.querySelector("#word2")
   word2El.textContent += word2[i]
   }
   // ==== 4th Password ====
   let word3 = [char(), char(), char(), char(), char(), char(), char()]   
   for (i = 0; i < word3.length; i++) {
   let word3El = document.querySelector("#word3")
   word3El.textContent += word3[i]   
   }   
}

// ==== CLEARS PREVIOUS PASSWORDS ====
function clear() {
   let wordEl = document.querySelector("#word")
   wordEl.textContent = ""
   let word1El = document.querySelector("#word1")
   word1El.textContent = ""
   let word2El = document.querySelector("#word2")
   word2El.textContent = ""
   let word3El = document.querySelector("#word3")
   word3El.textContent = ""
}
