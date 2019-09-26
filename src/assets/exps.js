const sendDataExps = () => {
  exps.map(item => {
    axios.post('/exp.json?auth=' + props.token, item)
    .then(response => {
    console.log(response);   
  })
  .catch(error => {
    console.log(error); 
  })
  })
}

export const exps = [
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 17,
    "totalPrice": 283,
    "price": 16.65
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 22,
    "totalPrice": 583,
    "price": 26.50
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "бузковий",
    "quantity": 20,
    "totalPrice": 424,
    "price": 21.20
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "бузковий",
    "quantity": 32,
    "totalPrice": 761,
    "price": 23.78
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 25,
    "totalPrice": 537.5,
    "price": 21.50
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 30,
    "totalPrice": 993,
    "price": 33.10
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 29,
    "totalPrice": 638.5,
    "price": 22.02
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 34,
    "totalPrice": 1415,
    "price": 41.62
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 29,
    "totalPrice": 638.5,
    "price": 22.02
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 34,
    "totalPrice": 1415,
    "price": 41.62
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "синій",
    "quantity": 22,
    "totalPrice": 529.8,
    "price": 24.08
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "синій",
    "quantity": 24,
    "totalPrice": 1220,
    "price": 50.83
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk weekly planner A4",
    "color": "сірий",
    "quantity": 4,
    "totalPrice": 31,
    "price": 7.75
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Desk weekly planner A4",
    "color": "сірий",
    "quantity": 2,
    "totalPrice": 270,
    "price": 135.00
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk weekly planner A4",
    "color": "блакитний",
    "quantity": 4,
    "totalPrice": 31,
    "price": 7.75
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Desk weekly planner A4",
    "color": "блакитний",
    "quantity": 2,
    "totalPrice": 270,
    "price": 135.00
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk weekly planner A4",
    "color": "м'ятний",
    "quantity": 6,
    "totalPrice": 31,
    "price": 5.17
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Desk weekly planner A4",
    "color": "м'ятний",
    "quantity": 2,
    "totalPrice": 270,
    "price": 135.00
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 14,
    "totalPrice": 235,
    "price": 16.79
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "бузковий",
    "quantity": 20,
    "totalPrice": 277,
    "price": 13.85
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 18,
    "totalPrice": 245,
    "price": 13.61
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "бузковий",
    "quantity": 20,
    "totalPrice": 57.71,
    "price": 2.89
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 14,
    "totalPrice": 57.71,
    "price": 4.12
  },
  {
    "time": "2019-02-01",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 18,
    "totalPrice": 72.6,
    "price": 4.03
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "To do list А6",
    "color": "блакитний",
    "quantity": 30,
    "totalPrice": 638,
    "price": 21.27
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "To do list А6",
    "color": "рожевий",
    "quantity": 30,
    "totalPrice": 638,
    "price": 21.27
  },
  {
    "time": "2019-02-01",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 30,
    "totalPrice": 639,
    "price": 21.30
  },
  {
    "time": "2019-03-01",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 100,
    "totalPrice": 47,
    "price": 0.47
  },
  {
    "time": "2019-03-01",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 100,
    "totalPrice": 47,
    "price": 0.47
  },
  {
    "time": "2019-03-01",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 100,
    "totalPrice": 82,
    "price": 0.01
  },
  {
    "time": "2019-03-01",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "н/з",
    "quantity": 48,
    "totalPrice": 144,
    "price": 3.00
  },
  {
    "time": "2019-03-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "бузковий",
    "quantity": 9,
    "totalPrice": 209,
    "price": 23.22
  },
  {
    "time": "2019-03-01",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "бузковий",
    "quantity": 8,
    "totalPrice": 375,
    "price": 46.88
  },
  {
    "time": "2019-03-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "блакитний",
    "quantity": 9,
    "totalPrice": 209,
    "price": 23.22
  },
  {
    "time": "2019-03-01",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "блакитний",
    "quantity": 9,
    "totalPrice": 417,
    "price": 46.33
  },
  {
    "time": "2019-03-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "рожевий",
    "quantity": 8,
    "totalPrice": 164,
    "price": 20.50
  },
  {
    "time": "2019-03-01",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "рожевий",
    "quantity": 9,
    "totalPrice": 389,
    "price": 43.22
  },
  {
    "time": "2019-03-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 15,
    "totalPrice": 285.3,
    "price": 19.02
  },
  {
    "time": "2019-03-01",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 15,
    "totalPrice": 672,
    "price": 44.80
  },
  {
    "time": "2019-03-10",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 200,
    "totalPrice": 120,
    "price": 0.60
  },
  {
    "time": "2019-03-10",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 218,
    "totalPrice": 93,
    "price": 0.43
  },
  {
    "time": "2019-03-17",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 200,
    "totalPrice": 125,
    "price": 0.63
  },
  {
    "time": "2019-03-17",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 200,
    "totalPrice": 220,
    "price": 1.10
  },
  {
    "time": "2019-03-18",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 140,
    "totalPrice": 45,
    "price": 0.32
  },
  {
    "time": "2019-03-29",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "чорний",
    "quantity": 20,
    "totalPrice": 405,
    "price": 20.25
  },
  {
    "time": "2019-03-29",
    "type": "Товар",
    "name": "Shopping list",
    "color": "жовтий",
    "quantity": 20,
    "totalPrice": 0,
    "price": 0.00
  },
  {
    "time": "2019-03-29",
    "type": "Товар",
    "name": "Shopping list",
    "color": "чорний",
    "quantity": 32,
    "totalPrice": 292,
    "price": 9.13
  },
  {
    "time": "2019-04-02",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 100,
    "totalPrice": 80,
    "price": 0.80
  },
  {
    "time": "2019-04-02",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 100,
    "totalPrice": 19,
    "price": 0.19
  },
  {
    "time": "2019-04-02",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 200,
    "totalPrice": 130,
    "price": 0.65
  },
  {
    "time": "2019-04-09",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "чорний",
    "quantity": 16,
    "totalPrice": 330,
    "price": 20.63
  },
  {
    "time": "2019-04-09",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 147,
    "totalPrice": 59,
    "price": 0.40
  },
  {
    "time": "2019-04-09",
    "type": "Витрата",
    "name": "Вивіска",
    "color": "н/з",
    "totalPrice": 200,
    "price": 0.00
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 10,
    "totalPrice": 395,
    "price": 39.50
  },
  {
    "time": "2019-05-16",
    "type": "Витрата",
    "name": "Штамп",
    "color": "н/з",
    "totalPrice": 340,
    "price": 0.00
  },
  {
    "time": "2019-05-16",
    "type": "Витрата",
    "name": "Штемпельна подушка",
    "color": "н/з",
    "totalPrice": 100,
    "price": 0.00
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 100,
    "totalPrice": 43,
    "price": 0.43
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А5",
    "color": "н/з",
    "quantity": 100,
    "totalPrice": 73,
    "price": 0.73
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 200,
    "totalPrice": 100,
    "price": 0.50
  },
  {
    "time": "2019-05-16",
    "type": "Витрата",
    "name": "Фотофон",
    "color": "н/з",
    "totalPrice": 550,
    "price": 0.00
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "To do list А6",
    "color": "чорний",
    "quantity": 15,
    "totalPrice": 428,
    "price": 28.53
  },
  {
    "time": "2019-06-23",
    "type": "Витрата",
    "name": "Тканина (чорна)",
    "color": "н/з",
    "totalPrice": 120,
    "price": 0.00
  },
  {
    "time": "2019-06-25",
    "type": "Витрата",
    "name": "Сертифікати 6х4шт (24 шт)",
    "color": "н/з",
    "totalPrice": 133,
    "price": 0.00
  },
  {
    "time": "2019-06-26",
    "type": "Витрата",
    "name": "Реклама інстаграм (2 дні по 3$)",
    "color": "н/з",
    "totalPrice": 157,
    "price": 0.00
  },
  {
    "time": "2019-08-31",
    "type": "Товар",
    "name": "To do list А6",
    "color": "чорний",
    "quantity": 10,
    "totalPrice": 300,
    "price": 30.00
  },
  {
    "time": "2019-08-31",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 10,
    "totalPrice": 402,
    "price": 40.20
  },
  {
    "time": "2019-08-31",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "чорний",
    "quantity": 4,
    "totalPrice": 120,
    "price": 30.00
  },
  {
    "time": "2019-08-31",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 5,
    "totalPrice": 150,
    "price": 30.00
  },
  {
    "time": "2019-09-07",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 10,
    "totalPrice": 450,
    "price": 45.00
  },
  {
    "time": "2019-09-17",
    "type": "Товар",
    "name": "Planner Notebook",
    "color": "м'ятний",
    "quantity": 3,
    "totalPrice": 160,
    "price": 53.33
  },
  {
    "time": "2019-09-17",
    "type": "Товар",
    "name": "Planner Notebook",
    "color": "рожевий",
    "quantity": 3,
    "totalPrice": 160,
    "price": 53.33
  },
  {
    "time": "2019-09-17",
    "type": "Супутній товар",
    "name": "Стікер - календар - Planner Notebook",
    "color": "рожевий",
    "quantity": 4,
    "totalPrice": 35,
    "price": 8.75
  },
  {
    "time": "2019-09-17",
    "type": "Супутній товар",
    "name": "Стікер - календар - Planner Notebook",
    "color": "м'ятний",
    "quantity": 3,
    "totalPrice": 26,
    "price": 8.67
  },
  {
    "time": "2019-09-17",
    "type": "Товар",
    "name": "Planner Notebook",
    "color": "м'ятний",
    "quantity": 10,
    "totalPrice": 523,
    "price": 52.30
  },
  {
    "time": "2019-09-17",
    "type": "Супутній товар",
    "name": "Стікер - календар - Planner Notebook",
    "color": "м'ятний",
    "quantity": 12,
    "totalPrice": 86,
    "price": 7.17
  },
  {
    "time": "2019-09-17",
    "type": "Витрата",
    "name": "Фон 2 шт ",
    "color": "н/з",
    "totalPrice": 30,
    "price": 0.00
  }
 ]