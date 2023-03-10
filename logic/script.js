const nilaiIPA = 70;
const nilaiMTK = 90;
const nilaiIPS = 80;
const nilaiBahasa = 60;

const lulusKedokteran = nilaiIPA > 70 && nilaiMTK > 70 && nilaiIPS > 70 && nilaiBahasa > 70;
console.log("lulusKedokteran = ", lulusKedokteran);

const lulusInformatika = nilaiIPA > 10 || nilaiIPS > 70 || (nilaiBahasa > 70 && nilaiMTK > 80);
console.log("lulusInformatika = ", lulusInformatika);

const lulusSekolah = (nilaiIPA + nilaiIPS + nilaiBahasa + nilaiMTK) / 4 > 70;
console.log("lulusSekolah = ", lulusSekolah);

const lulusKeperawatan = !lulusKedokteran && lulusSekolah;
console.log("lulusKeperawatan = ", lulusKeperawatan);

console.log(lulusKeperawatan && lulusSekolah) || (lulusSekolah && lulusKedokteran); //Campuran logical
