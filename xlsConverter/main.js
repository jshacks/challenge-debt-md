const xls = require("./xls_to_js")
const creditor = require("./../models/creditor.js")
const fileName = "SOLD_Creditori_1466400279"

xls.convert( fileName,  function(data){    insertData(data) }  )


function insertData(data) {
	creditor.getCount(function(count){
		var lastIndex = count

		for (var sold in data.sold) {
			creditor.getCreditorID(sold.name, function (obj) {
				if (obj == null){
					creditor.new(sold, lastIndex)
					lastIndex++
					console.log(lastIndex)
				}
			})
		}
	})
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