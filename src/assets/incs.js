const sendDataIncs = () => {
  let incToSend = {}
  incs.map(item => {
    if (item.price) {
      axios.post('/inc.json?auth=' + props.token, incToSend)
        .then(response => {
        console.log(response);   
      })
      .catch(error => {
        console.log(error); 
      })
      incToSend = {};
      incToSend.price = item.price;
      incToSend.time = item.time;
      incToSend.income = [];
      incToSend.income.push(
        {
        name: item.name,
        quantity: item.quantity,
        type: item.type,
        color: item.color
        }
      ); 
    } else {
      incToSend.income.push(
        {
        name: item.name,
        quantity: item.quantity,
        type: item.type,
        color: item.color
        }
      )      
    }
  })
}

export const incs = [
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "синій",
    "quantity": 2,
    "price": 400,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "синій",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 2,
    "price": 400,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 3,
    "price": 600,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 2,
    "price": 400,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 4,
    "price": 600,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 4,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 4,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 4,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "рожевий",
    "quantity": 1,
    "price": 150,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk weekly planner A4",
    "color": "сірий",
    "quantity": 1,
    "price": 205,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk weekly planner A4",
    "color": "сірий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "бузковий",
    "quantity": 2,
    "price": 240,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "бузковий",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "бірюзовий",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "бірюзовий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 3,
    "price": 180,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "To do list А6",
    "color": "рожевий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 2,
    "price": 140,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Shopping list",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "To do list А6",
    "color": "чорний",
    "quantity": 5,
    "price": 300,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 5,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 5,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 5,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "To do list А6",
    "color": "рожевий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Shopping list",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "чорний",
    "quantity": 5,
    "price": 600,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "чорний",
    "quantity": 5,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 5,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 5,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 5,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "рожевий",
    "quantity": 2,
    "price": 300,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "рожевий",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk weekly planner A4",
    "color": "сірий",
    "quantity": 1,
    "price": 230,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk weekly planner A4",
    "color": "сірий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Shopping list",
    "color": "чорний",
    "quantity": 2,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 1,
    "price": 150,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "бузковий",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "бузковий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "To do list А6",
    "color": "чорний",
    "quantity": 2,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "To do list А6",
    "color": "блакитний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk weekly planner A4",
    "color": "м'ятний",
    "quantity": 1,
    "price": 230,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікери - Desk weekly planner A4",
    "color": "м'ятний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Shopping list",
    "color": "чорний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "To do list А6",
    "color": "рожевий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "чорний",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 30,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 28,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "To do list А6",
    "color": "рожевий",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Shopping list",
    "color": "чорний",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 4,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 2,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "синій",
    "quantity": 3,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 2,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 2,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 6,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 5,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "бузковий",
    "quantity": 8,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "бузковий",
    "quantity": 4,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 10,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "чорний",
    "quantity": 3,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "чорний",
    "quantity": 3,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "рожевий",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "блакитний",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "блакитний",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "бузковий",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "бузковий",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "бузковий",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 2,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 2,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 4,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "To do list А6",
    "color": "блакитний",
    "quantity": 2,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "To do list А6",
    "color": "чорний",
    "quantity": 2,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Товар",
    "name": "Shopping list",
    "color": "жовтий",
    "quantity": 2,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 29,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 6,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 9,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-29",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 8,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 1,
    "price": 175,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": 100,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-05-30",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 0,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": 160,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": 96,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "бузковий",
    "quantity": 1,
    "price": 96,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "бузковий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "бузковий",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "бузковий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 48,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Товар",
    "name": "Shopping list",
    "color": "жовтий",
    "quantity": 1,
    "price": 48,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Товар",
    "name": "Desk weekly planner A4",
    "color": "блакитний",
    "quantity": 1,
    "price": 176,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікери - Desk weekly planner A4",
    "color": "блакитний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Товар",
    "name": "Desk weekly planner A4",
    "color": "м'ятний",
    "quantity": 1,
    "price": 176,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікери - Desk weekly planner A4",
    "color": "м'ятний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-19",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "синій",
    "quantity": 2,
    "price": 240,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "синій",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Товар",
    "name": "Shopping list",
    "color": "жовтий",
    "quantity": 2,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Товар",
    "name": "Shopping list",
    "color": "чорний",
    "quantity": 2,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-20",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-21",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "рожевий",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-21",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-21",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 2,
    "price": 400,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Товар",
    "name": "To do list А6",
    "color": "чорний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 250,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 1,
    "price": 70,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-23",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-25",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "чорний",
    "quantity": 1,
    "price": 100,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-25",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-25",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-25",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-25",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 2,
    "price": 240,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Пакет А5",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "чорний",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Пакет А5",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-26",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Товар",
    "name": "Desk weekly planner A4",
    "color": "блакитний",
    "quantity": 1,
    "price": 230,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Супутній товар",
    "name": "Стікери - Desk weekly planner A4",
    "color": "блакитний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Товар",
    "name": "To do list А6",
    "color": "блакитний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-06-27",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "бузковий",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "бузковий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "синій",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "синій",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Товар",
    "name": "To do list А6",
    "color": "блакитний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "синій",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "синій",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-01",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-03",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 250,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-03",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-03",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-03",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-03",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-03",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-05",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-05",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-05",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-05",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-05",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-05",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-05",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "бузковий",
    "quantity": 2,
    "price": 180,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "бузковий",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "рожевий",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "блакитний",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "блакитний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-08",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-09",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-09",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-09",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-09",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-09",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-09",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-09",
    "type": "Товар",
    "name": "To do list А6",
    "color": "рожевий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-09",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-09",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-09",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "блакитний",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "блакитний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "чорний",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-10",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Товар",
    "name": "Shopping list",
    "color": "чорний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 150,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 2,
    "price": 240,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-23",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-24",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "бузковий",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-24",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "бузковий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-24",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-24",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-24",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-24",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-24",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-24",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-24",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-28",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-28",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-28",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-28",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Товар",
    "name": "To do list А6",
    "color": "чорний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Товар",
    "name": "Shopping list",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Товар",
    "name": "Shopping list",
    "color": "чорний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-07-31",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-05",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-05",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-05",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-05",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-05",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-05",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-05",
    "type": "Товар",
    "name": "To do list А6",
    "color": "чорний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-05",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-05",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-05",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 250,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "бузковий",
    "quantity": 1,
    "price": 70,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "бузковий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 1,
    "price": 70,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Товар",
    "name": "To do list А6",
    "color": "чорний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 1,
    "price": 70,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-10",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "бузковий",
    "quantity": 1,
    "price": 70,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "бузковий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 250,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 0,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Товар",
    "name": "To do list А6",
    "color": "блакитний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Товар",
    "name": "Shopping list",
    "color": "чорний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-14",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": 90,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 45,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Товар",
    "name": "To do list А6",
    "color": "чорний",
    "quantity": 1,
    "price": 45,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "бузковий",
    "quantity": 1,
    "price": 55,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "бузковий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 1,
    "price": 55,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 1,
    "price": 55,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 1,
    "price": 70,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Товар",
    "name": "To do list А6",
    "color": "блакитний",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-20",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-22",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-22",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-22",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-22",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "бузковий",
    "quantity": 1,
    "price": 70,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "бузковий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 1,
    "price": 70,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-27",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-28",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 1,
    "price": 150,
    "FIELD7": "",
    "FIELD8": "суперпуперс"
  },
  {
    "time": "2019-08-28",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-28",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-28",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "чорний",
    "quantity": 6,
    "price": 720,
    "FIELD7": "",
    "FIELD8": "суперпуперс"
  },
  {
    "time": "2019-08-28",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "чорний",
    "quantity": 6,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-28",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 6,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-28",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 6,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-28",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": "суперпуперс"
  },
  {
    "time": "2019-08-28",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-28",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-28",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "синій",
    "quantity": 2,
    "price": 400,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "синій",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 2,
    "price": 140,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "бірюзовий",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-29",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Товар",
    "name": "Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 1,
    "price": 70,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Супутній товар",
    "name": "Підкладка - Desk weekly planner mini",
    "color": "рожевий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Супутній товар",
    "name": "Пакет 13x18 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-08-30",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-04",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-04",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-04",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-04",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-04",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-04",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-04",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Товар",
    "name": "Professional Planner A4",
    "color": "чорний",
    "quantity": 10,
    "price": 1500,
    "FIELD7": "",
    "FIELD8": "суперпуперс"
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 10,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 10,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 10,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 2,
    "price": 240,
    "FIELD7": "",
    "FIELD8": "суперпуперс"
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 2,
    "price": 240,
    "FIELD7": "",
    "FIELD8": "суперпуперс"
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "рожевий",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "синій",
    "quantity": 2,
    "price": 240,
    "FIELD7": "",
    "FIELD8": "суперпуперс"
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "синій",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-05",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-07",
    "type": "Товар",
    "name": "Shopping list",
    "color": "чорний",
    "quantity": 1,
    "price": 45,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-07",
    "type": "Супутній товар",
    "name": "Магнітна стрічка - Shopping list",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-07",
    "type": "Супутній товар",
    "name": "Пакет 8х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-07",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-07",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": "кав’ярня"
  },
  {
    "time": "2019-09-12",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "блакитний",
    "quantity": 1,
    "price": 70,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-12",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "блакитний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-12",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-12",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-12",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-12",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-12",
    "type": "Товар",
    "name": "Desk calendar А5",
    "color": "чорний",
    "quantity": 2,
    "price": 140,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-12",
    "type": "Супутній товар",
    "name": "Стікери - Desk calendar А5 ",
    "color": "чорний",
    "quantity": 2,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-12",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-12",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Товар",
    "name": "To do list А6",
    "color": "жовтий",
    "quantity": 1,
    "price": 60,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Пакет 12х15 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "синій",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "синій",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "бузковий",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "бузковий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-16",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "жовтий",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Товар",
    "name": "Desk monthly planner A4",
    "color": "синій",
    "quantity": 1,
    "price": 200,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Супутній товар",
    "name": "Стікери - Desk monthly planner A4",
    "color": "синій",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-21",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-23",
    "type": "Товар",
    "name": "Planner Notebook",
    "color": "м'ятний",
    "quantity": 3,
    "price": 540,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-23",
    "type": "Супутній товар",
    "name": "Стікер - календар - Planner Notebook",
    "color": "м'ятний",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-23",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-23",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-23",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-23",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-23",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-23",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "морська хвиля",
    "quantity": 3,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-25",
    "type": "Товар",
    "name": "Monthly planner A5",
    "color": "чорний",
    "quantity": 1,
    "price": 120,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-25",
    "type": "Супутній товар",
    "name": "Стікери - Monthly planner A5",
    "color": "чорний",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-25",
    "type": "Супутній товар",
    "name": "Пакет А4",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-25",
    "type": "Супутній товар",
    "name": "Пакет крафтовий 22х6х38 см",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-25",
    "type": "Супутній товар",
    "name": "Стікер (плівка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-25",
    "type": "Супутній товар",
    "name": "Стікер (самоклейка)",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  },
  {
    "time": "2019-09-25",
    "type": "Супутній товар",
    "name": "Візитка",
    "color": "н/з",
    "quantity": 1,
    "price": null,
    "FIELD7": "",
    "FIELD8": ""
  }
 ]