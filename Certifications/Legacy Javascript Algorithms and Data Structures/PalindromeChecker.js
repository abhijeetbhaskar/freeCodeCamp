function palindrome(str) {
  const newStr = str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  const revStr = newStr.split('').reverse().join('');
  return newStr === revStr;
}

palindrome("eye");