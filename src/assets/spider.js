const tables = document.querySelectorAll('table.flightInfoItem');
const json = [];
[].filter.call(tables, (table) => table.querySelector('.quantity') ? true : false);
[].forEach.call(tables, (table) => {
  const info = {
    flight: table.querySelector('.flight-info div p').innerText,
    start_time: '',
    end_time: '',
    price: table.querySelector('.price-num').innerText.replace('往返含税￥',''),
  }
  const times = table.querySelectorAll('.time-info')
  times.forEach((time, index) => {
    switch (index) {
      case 0:
        info.start_time = time.innerText
        break
      case 1:
        info.end_time = time.innerText
        break
    }
  })
  json.push(info)
})

copy(json)
