import request from 'browser-request'

export function getBigDebt () {
  return new Promise((resolve, reject) => {
    // http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=3&appid=e04b30b1e12c331a401c7669d7ab0afe
    request('http://debtmd.ihub.space/api/v1/debt/total', function (er, response, body) {
      if (er) {
        reject(er)
      }
      let list = JSON.parse(body)
      resolve(list)
    })
  })
}

export function getIncrementService () {
  return new Promise((resolve, reject) => {
    request('http://debtmd.ihub.space/api/v1/debt/get_increment/', function (er, response, body) {
      if (er) {
        reject(er)
      }
      let obj = JSON.parse(body)
      resolve(obj.increment)
    })
  })
}

export function getBigDebtPerMonth () {
  return new Promise((resolve, reject) => {
    request('http://debtmd.ihub.space/api/v1/debt/total_per_month', function (er, response, body) {
      if (er) {
        reject(er)
      }
      let list = JSON.parse(body)
      resolve(list)
    })
  })
}

export function getSmallDebts () {
  return new Promise((resolve, reject) => {
    request('http://debtmd.ihub.space/api/v1/debt/creditor/', function (er, response, body) {
      if (er) {
        reject(er)
      }
      let list = JSON.parse(body)
      resolve(list)
    })

    // setTimeout(() => {
    //   resolve([
    //     {
    //       'name': 'JICA',
    //       'value': 50629340.2996734,
    //       'type': 'bilateral'
    //     },
    //     {
    //       'name': 'CCC (SUA)',
    //       'value': 23496255.84,
    //       'type': 'bilateral'
    //     },
    //     {
    //       'name': 'UniCredit',
    //       'value': 19161264.389068797,
    //       'type': 'bilateral'
    //     },
    //     {
    //       'name': 'Guvernul SUA',
    //       'value': 14818575.21,
    //       'type': 'bilateral'
    //     },
    //     {
    //       'name': 'Turk Eximbank',
    //       'value': 2777776.68,
    //       'type': 'bilateral'
    //     },
    //     {
    //       'name': 'Guvernul Rusiei',
    //       'value': 51819010.62,
    //       'type': 'bilateral'
    //     },
    //     {
    //       'name': 'Banca germana KfW',
    //       'value': 7166536.65185543,
    //       'type': 'bilateral'
    //     },
    //     {
    //       'name': 'Guvernul Japoniei',
    //       'value': 8800844.53785939,
    //       'type': 'bilateral'
    //     },
    //     {
    //       'name': 'Guvernul Romaniei',
    //       'value': 3357142.87,
    //       'type': 'bilateral'
    //     },
    //     {
    //       'name': 'Guvernul Germaniei',
    //       'value': 12568868.504354,
    //       'type': 'bilateral'
    //     },
    //     {
    //       'name': 'BEI',
    //       'value': 148134899.661435,
    //       'type': 'multilateral'
    //     },
    //     {
    //       'name': 'CEB',
    //       'value': 27032236.2538657,
    //       'type': 'multilateral'
    //     },
    //     {
    //       'name': 'IDA',
    //       'value': 556482380.37746,
    //       'type': 'multilateral'
    //     },
    //     {
    //       'name': 'IMF',
    //       'value': 282168452.684584,
    //       'type': 'multilateral'
    //     },
    //     {
    //       'name': 'EBRD',
    //       'value': 58350685.336108506,
    //       'type': 'multilateral'
    //     },
    //     {
    //       'name': 'IBRD',
    //       'value': 26801029.94,
    //       'type': 'multilateral'
    //     },
    //     {
    //       'name': 'IFAD',
    //       'value': 62613546.492261,
    //       'type': 'multilateral'
    //     }
    //   ])
    // }, 150)
  })
}
