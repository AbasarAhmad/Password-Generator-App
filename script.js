let rangee = document.getElementById("rangee");
let rangeeValue = document.getElementById("rangeeValue");

// Range ka jo content hai usko rangeeValue mai show karne ka code
rangeeValue.textContent = rangee.value;
rangee.addEventListener('input', () => {
     rangeeValue.textContent = rangee.value; 
})

let passBox = document.getElementById("passBox");
let copyIcon = document.getElementById("copyIcon");
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let strength = document.getElementById("strength");

// Function to update range value based on checkbox selections
function updateRangeValue() {
  let checkboxes = [lowerCase, upperCase, numbers, symbols]; // An array containing references to all checkbox elements
  let checkedCount = checkboxes.reduce((count, checkbox) => {
    // Using the reduce function to count the number of checked checkboxes
    return checkbox.checked ? count + 1 : count; // Increment the count if the checkbox is checked
  }, 0); // Initial value of count is 0
  rangee.value = checkedCount > 0 ? checkedCount : 1; // Update the range value to the number of checked checkboxes if it's greater than 0, otherwise set it to 1
  rangeeValue.textContent = rangee.value; // Update the text content of the range value display

  // Update strength box color
  updateStrengthColor(checkedCount);
}

// Function to update strength box color based on checkedCount
function updateStrengthColor(checkedCount) {
    if (checkedCount === 1 || checkedCount === 2) {
        strength.style.backgroundColor = "#FF5733"; // If 1 or 2 checkboxes are checked, set strength box color to red
    } else if (checkedCount === 3) {
        strength.style.backgroundColor = "#FFC300"; // If 3 checkboxes are checked, set strength box color to pink
    } else {
        strength.style.backgroundColor = "green"; // Otherwise, set strength box color to green
    }
}
// Add event listeners to checkboxes
lowerCase.addEventListener('change', updateRangeValue); // When the lowerCase checkbox is changed, call the updateRangeValue function
upperCase.addEventListener('change', updateRangeValue); // Similarly for upperCase
numbers.addEventListener('change', updateRangeValue); // Similarly for numbers
symbols.addEventListener('change', updateRangeValue); // Similarly for symbols


genBtn.addEventListener('click', () => {
      passBox.value = generatePassword();
})

let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*<>?[]{}()";
function generatePassword() {
      let genPassword = "";
      let allChars = "";

      allChars += lowerCase.checked ? lowerchars : "";
      allChars += upperCase.checked ? upperchars : "";
      allChars += numbers.checked ? allnumbers : "";
      allChars += symbols.checked ? allsymbols : "";

      if (allChars == "" || allChars.length == 0) {
            return genPassword;
      }
      let i = 1;
      while (i <= rangee.value) {
            // matlab jitna range rahega utna taq randomaly allChars nam ki string se lega
            // allChars string vo string hai, jis jis box mai check kiye huva hai uska sara string
            // allChars mai aa gyi hai
            genPassword += allChars.charAt(Math.random() * allChars.length);
            i++;
      }
      return genPassword;
}
copyIcon.addEventListener('click', () => {
      if (passBox.value != "" || passBox.value.length>= 1) {
            navigator.clipboard.writeText(passBox.value);
            copyIcon.innerText = "check";
            copyIcon.title = "Password Copied";
            setTimeout(() => {
                  copyIcon.innerHTML = "content_copy";
                  copyIcon.title = "";
            },3000)
      }
      
});
// vJV5IR67ulmPutPs;