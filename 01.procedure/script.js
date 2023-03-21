function greeting(name) {
  console.log("hello", name);
}
const nama = greeting("rahel");
console.log(nama);

function lulusKedokteran(nilaiIPA, nilaiIPS, nilaiMTK, nilaiBahasa) {
  const lulusKedokteran = nilaiIPA > 70 && nilaiIPS > 70 && nilaiMTK > 70 && nilaiBahasa > 70;
  console.log("Lulus Kedokteran : ", lulusKedokteran);
}

lulusKedokteran(80, 70, 90, 85);
lulusKedokteran(90, 90, 90, 90);

function lulusInformatika(nilaiIPA, nilaiMTK, nilaiBahasa) {
  const lulusInformatika = nilaiIPA > 70 && nilaiMTK > 70 && nilaiBahasa > 70;
  console.log("Lulus Informatika : ", lulusInformatika);
}

lulusInformatika(80, 90, 85);
lulusInformatika(90, 90, 90);
