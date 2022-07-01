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
   let word = [char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char()]
   
   for (i = 0; i < passwordLength(); i++) {
   let wordEl = document.querySelector("#word")
   wordEl.textContent += word[i]
   }
   
   // ==== 2nd Password ====
   let word1 = [char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char()]   

   for (i = 0; i < passwordLength(); i++) {
   let word1El = document.querySelector("#word1")
   word1El.textContent += word1[i]
   }

   // ==== 3rd Password ====
   let word2 = [char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char()]   

   for (i = 0; i < passwordLength(); i++) {
   let word2El = document.querySelector("#word2")
   word2El.textContent += word2[i]
   }

   // ==== 4th Password ====
   let word3 = [char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char(), char()]

   for (i = 0; i < passwordLength(); i++) {
   let word3El = document.querySelector("#word3")
   word3El.textContent += word3[i]   
   }   
}

// ==== CLEARS PREVIOUS PASSWORDS + CLIPBOARD MESSAGE ====
function clear() {
   let wordEl = document.querySelector("#word")
   wordEl.textContent = ""
   let word1El = document.querySelector("#word1")
   word1El.textContent = ""
   let word2El = document.querySelector("#word2")
   word2El.textContent = ""
   let word3El = document.querySelector("#word3")
   word3El.textContent = ""
   // copied = document.querySelector("#copy")
   // copied.textContent = ""
}

// ==== PASSWORD LENGTH ====
function passwordLength() {
   wordLength = document.querySelector("#pass-num").value
   err = document.querySelector("#error")
   if (wordLength < 4) {
      wordLength = NaN
     err.textContent = "Please enter a number between 4 - 20"     
   } else if (wordLength > 20) {
      wordLength - NaN
      err.textContent = "Please enter a number between 4 - 20"
   } else {
      err.textContent = ""
      return wordLength      
   }   
}

// ==== COPY TO CLIPBOARD ====
function clipboard() {   
   copyWord = document.querySelector("#word")
   copyWord.select()
   copyWord.setSelectionRange(0, 99999)
   navigator.clipboard.writeText(copyWord.value)
   alert ("Password has been copied to clipboard")
}

function clipboard1() {   
   copyWord = document.querySelector("#word1")
   copyWord.select()
   copyWord.setSelectionRange(0, 99999)
   navigator.clipboard.writeText(copyWord.value)   
   alert ("Password has been copied to clipboard")   
}

function clipboard2() {   
   copyWord = document.querySelector("#word2")
   copyWord.select()
   copyWord.setSelectionRange(0, 99999)
   navigator.clipboard.writeText(copyWord.value)   
   alert ("Password has been copied to clipboard")  
}

function clipboard3() {
   copyWord = document.querySelector("#word3")
   copyWord.select()
   copyWord.setSelectionRange(0, 99999)
   navigator.clipboard.writeText(copyWord.value)   
   alert ("Password has been copied to clipboard")
}