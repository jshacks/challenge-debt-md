const xls = require("./xls_to_js")
const creditor = require("./../models/creditor.js")
const debt = require("./../models/debt.js")


const fileNames = ["SOLD_Creditori_1466400279", "Sold_Creditori_30_06_2016", "Sold_Creditori_31_07_2016"]
for (var i = fileNames.length - 1; i >= 0; i--) {
	xls.convert( fileNames[i],  function(data){    insertData(data) }  )
}


function insertData(data) {
	var date = dateFromString(data.doc_name)
	for (var i = data.sold.length - 1; i >= 0; i--) {
		debt.new( data.sold[i], date )
	}
}

function dateFromString(str) {
	var arr = str.split(".")
	if (arr.length == 3) {
		return new Date(arr[2]+"-"+arr[1]+"-"+arr[0])
	}
	return null
}


module.exports.convert = function(){
	for (var fileName in fileNames){
		xls.convert( fileName,  function(data){    insertData(data) }  )
	}
}

// var data = {
// 	doc_name: workbook.SheetNames[0],
// 	sold : Array({
//      "id ": 0
// 		"name": name, 
// 		"value": value, 
// 		"type": currentType
// 	}),
// 	subtotal_bilateral : 0,
// 	subtotal_multilateral : 0,
// 	total: 0
// }