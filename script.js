function startConverter() {
  const binInput = document.getElementById("bin-input").value.trim();
  const decPH = document.getElementById("decimal-placeholder");

  decPH.textContent = "";

  if (!/^[01]+$/.test(binInput)) {
    decPH.textContent = "masukkan 0 & 1 saja!";
    return;
  }

  let decimal = 0;

  let digits = Array.from(binInput).reverse();

  digits.forEach((num, index) => {
    if (num === '1') {
      decimal += Math.pow(2, index);
    }
  });

  decPH.textContent = decimal;

  return decimal;
}
