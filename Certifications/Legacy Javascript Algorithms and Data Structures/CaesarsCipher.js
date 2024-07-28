function rot13(str) {
  return str.split('').map(char => {
    if(/[A-Z]/.test(char)){
      const charCode = char.charCodeAt(0);
      const shiftedCode = charCode + 13;
      return String.fromCharCode(shiftedCode > 90 ? shiftedCode - 26 : shiftedCode);
    }
    return char;
  }).join('');
}

rot13("SERR PBQR PNZC");