const xls = require("./xls_to_js")
const creditor = require("./../models/creditor.js")
const debt = require("./../models/debt.js")


const fileNames = ["SOLD_Creditori_1466400279", "Sold_Creditori_30_06_2016", "Sold_Creditori_31_07_2016", "Sold_Creditori_31.08.2016"]

convert_file(0)

function convert_file(file_number){
	xls.convert( fileNames[file_number],  function(data){    insertData(data, function(){
		file_number++
		if (file_number < fileNames.length) {
			convert_file(file_number)
		}
	}) }  )
}


function insertData(data, callback) {
	const date = dateFromString(data.doc_name)
	var counter = 0
	const size = data.sold.length

	for (var i = data.sold.length - 1; i >= 0; i--) {
		debt.new( data.sold[i], date, function(obj){
			counter++
			if (counter == size) { callback() }
		} )
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