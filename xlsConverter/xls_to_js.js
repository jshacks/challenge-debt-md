const xlsx = require('xlsx');
const fs = require('fs');



exports.print = function printData(data) {
	console.log(data.doc_name)
	console.log(data.sold)
	console.log(data.total)
}

exports.convert = function( fileName , callback = undefined) {
	const filePath = `${__dirname}/xls_files/` + fileName + ".xlsx";
	var workbook = xlsx.readFile(filePath);

	var sheet = workbook.Sheets[workbook.SheetNames[0]]

	const startNumber = 7
	const numberLetter = "E"

	var let_name = "A"
	var let_val = "E"

	var data = {
		doc_name: workbook.SheetNames[0],
		sold : Array(),
		subtotal_bilateral : 0,
		subtotal_multilateral : 0,
		total: 0
	}
	var currentType = "bilateral"
	for ( var nr = startNumber; sheet[let_name+nr]  ; nr++ ) {
		var name = String( sheet[ let_name + nr ].v).trim()
		var value =  parseFloat( String( sheet[ let_val + nr ].v).replace(",","") )
		switch (name.toLowerCase()) {
			case "sub-total bilateral":
			currentType = "multilateral"
			data.subtotal_bilateral = value
			break
			case "sub-total multilateral":
			data.subtotal_multilateral = value
			break
			case "total datorie externa:":
			data.total = value
			break
			default:
			data.sold.push({
				"name": name, 
				"value": value,
				"type": currentType
			})
		}
	}

	// fs.writeFile("./"+data.doc_name + '.json', JSON.stringify(data, null, 2) , 'utf-8');
	if (callback !== undefined) {
		callback(data)
	}
	return data
}




