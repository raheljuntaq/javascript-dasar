function lulusKedokteran(nilaiIPA, nilaiIPS, nilaiMTK, nilaiBahasa) {
  const lulus = nilaiIPA > 70 && nilaiIPS > 70 && nilaiMTK > 70 && nilaiBahasa > 70;
  return lulus;
}

const nilaiIPAJohn = 90,
  nilaiIPSJohn = 50,
  nilaiMTKJohn = 99,
  nilaiBahasaJohn = 80;

const nilaiIPAJane = 90,
  nilaiIPSJane = 90,
  nilaiMTKJane = 90,
  nilaiBahasaJane = 90;

const lulusKedokteranJohn = lulusKedokteran(nilaiIPAJohn, nilaiIPSJohn, nilaiMTKJohn, nilaiBahasaJohn);

const lulusKedokteranJane = lulusKedokteran(nilaiIPAJane, nilaiIPSJane, nilaiMTKJane, nilaiBahasaJane);

console.log("John Lulus = ", lulusKedokteranJohn);
console.log("Jane Lulus = ", lulusKedokteranJane);
