// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Alphabet Subsequence</h1>`;
function alphabetSubsequence(s: string): boolean {
  const charsArray = [];
  s.split('').forEach((char: string) => {
    charsArray.push(char.charCodeAt(0));
  });
  if (new Set(charsArray).size !== charsArray.length) {
    return false;
  }

  for (let j = 0; j < charsArray.length; j++) {
    if (charsArray[j] >= charsArray[j + 1]) {
      return false;
    }
  }
  return true;
}

console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
