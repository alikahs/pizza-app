// -- objek jadi json --

// let mahasiswa = {
// 	nama : "Amanda Shakila",
// 	nrp : "173040063",
// 	email : "amanda_173040063@mail.unpas.ac.id"
// }

// console.log(JSON.stringify(mahasiswa));

// -- json ke objek --

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
// 	if(xhr.readyState == 4 && xhr.status == 200) {
// 		let mahasiswa = JSON.parse(this.responseText);
// 		console.log(mahasiswa);
// 	}
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

// -- pake jquery --

$.getJSON('coba.json', function (data) {
	console.log(data);
});