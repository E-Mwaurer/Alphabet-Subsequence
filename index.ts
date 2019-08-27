// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Alphabet Subsequence</h1>`;
function alphabetSubsequence(s: string): boolean {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if(alphabets.indexOf(arr[i]) < (alphabets.indexOf(arr[i])+1)){
          console.log(arr[i]);
    }
  }
}

console.log(alphabetSubsequence('zab'))
/* console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz')) */
