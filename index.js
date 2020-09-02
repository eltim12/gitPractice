function cariHarga(string, string1) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var price = 2000
  var huruf1 = string
  var huruf2 = string1
  for (let j = 0; j < rute.length; j++) {
    if (huruf1 === rute[j]) {
      var naikDari = rute[j]
      var indexNaikDari = rute.indexOf(rute[j])
    }
    if (huruf2 === rute[j]) {
      var tujuan = rute[j]
      var indexTujuan = rute.indexOf(rute[j])
    }
  }
  return (indexTujuan-indexNaikDari)*price
}

function naikAngkot(arrPenumpang) {
  var tampungHasilArr = []
  for (let i = 0; i < arrPenumpang.length; i++) {
    var tampungHasilObj = {}
    tampungHasilObj.penumpang = ''
    tampungHasilObj.naikDari = ''
    tampungHasilObj.tujuan = ''
    tampungHasilObj.bayar = 0
    tampungHasilObj.penumpang = arrPenumpang[i][0]
    tampungHasilObj.naikDari = arrPenumpang[i][1]
    tampungHasilObj.tujuan = arrPenumpang[i][2]
    tampungHasilObj.bayar = cariHarga(arrPenumpang[i][1], arrPenumpang[i][2])   
    tampungHasilArr.push(tampungHasilObj)
  }
  return tampungHasilArr
}

// //TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
[ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]