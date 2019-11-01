// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

exports.NumberOfComplects = functions.database
  .ref("/balance")
  .onWrite(async (change, context) => {
    const expData = change.after._data.exp;
    const incData = change.after._data.inc;
    const complectData = change.after._data.complects;

    const tableExpWares = {};
    const tableExpSubWares = {};
    const expTable = {};
    if (expData) {
      // Iterating through expences
      Object.keys(expData).map((expKey, index) => {
        //Checking if is a ware
        if (expData[expKey].type === "Товар") {
          //Checking if ware is in a table
          if (tableExpWares.hasOwnProperty(expData[expKey].name)) {
            let isColor = false;
            //Checking if ware color in a table
            for (
              let i = 0;
              i < tableExpWares[expData[expKey].name].length;
              i++
            ) {
              //Adding to table if ware color is present
              if (
                expData[expKey].color ===
                tableExpWares[expData[expKey].name][i].color
              ) {
                tableExpWares[expData[expKey].name][i].quantity +=
                  expData[expKey].quantity;
                isColor = true;
              }
            }
            //Adding to table if ware color is new
            if (!isColor) {
              const ware = {};
              ware.color = expData[expKey].color;
              ware.quantity = expData[expKey].quantity;
              tableExpWares[expData[expKey].name].push(ware);
            }
          }
          //Adding to table if ware is new
          else {
            tableExpWares[expData[expKey].name] = [];
            const ware = {};
            ware.color = expData[expKey].color;
            ware.quantity = expData[expKey].quantity;
            tableExpWares[expData[expKey].name].push(ware);
          }
        }

        //Checking if is a subware
        if (expData[expKey].type === "Супутній товар") {
          //Checking if ware is in a table
          if (tableExpSubWares.hasOwnProperty(expData[expKey].name)) {
            let isColor = false;
            //Checking if ware color in a table
            for (
              let i = 0;
              i < tableExpSubWares[expData[expKey].name].length;
              i++
            ) {
              //Adding to table if ware color is present
              if (
                expData[expKey].color ===
                tableExpSubWares[expData[expKey].name][i].color
              ) {
                tableExpSubWares[expData[expKey].name][i].quantity +=
                  expData[expKey].quantity;
                isColor = true;
              }
            }
            //Adding to table if ware color is new
            if (!isColor) {
              const ware = {};
              ware.color = expData[expKey].color;
              ware.quantity = expData[expKey].quantity;
              tableExpSubWares[expData[expKey].name].push(ware);
            }
          }
          //Adding to table if ware is new
          else {
            tableExpSubWares[expData[expKey].name] = [];
            const ware = {};
            ware.color = expData[expKey].color;
            ware.quantity = expData[expKey].quantity;
            tableExpSubWares[expData[expKey].name].push(ware);
          }
        }
      });
      expTable.ware = tableExpWares;
      expTable.subware = tableExpSubWares;
    }

    const tableIncWares = {};
    const tableIncSubWares = {};
    const incTable = {};
    //Check if incData received
    if (incData) {
      //Iteration through income instances
      Object.keys(incData).map((incKey, index) => {
        //Maping each income item
        Object.keys(incData[incKey].income).map((incItemChanged, incIndex) => {
          const incItem = incData[incKey].income[incItemChanged];
          //Creating object to push into income arrays
          const item = { type: incItem.type };
          item[incItem.name] = {
            color: incItem.color,
            quantity: incItem.quantity
          };
          //Checking if object is ware
          if (item.type === "Товар") {
            //Checking if ware already exists
            if (tableIncWares[incData[incKey].income[incIndex].name]) {
              let isColor = false;
              //Iterating through color of each ware
              for (
                let i = 0;
                i < tableIncWares[incData[incKey].income[incIndex].name].length;
                i++
              ) {
                //Checking if color exists
                if (
                  tableIncWares[incData[incKey].income[incIndex].name][i]
                    .color === item[incItem.name].color
                ) {
                  //Amending item if color exist
                  tableIncWares[incData[incKey].income[incIndex].name][
                    i
                  ].quantity += item[incItem.name].quantity;
                  isColor = true;
                }
              }
              //Adding array item if no such color
              if (!isColor) {
                tableIncWares[incData[incKey].income[incIndex].name].push(
                  item[incItem.name]
                );
              }
              //Adding object if no such ware
            } else {
              tableIncWares[incData[incKey].income[incIndex].name] = [];
              tableIncWares[incData[incKey].income[incIndex].name].push(
                item[incItem.name]
              );
            }
          } else if (item.type === "Супутній товар") {
            if (tableIncSubWares[incData[incKey].income[incIndex].name]) {
              let isColor = false;
              for (
                let i = 0;
                i <
                tableIncSubWares[incData[incKey].income[incIndex].name].length;
                i++
              ) {
                if (
                  tableIncSubWares[incData[incKey].income[incIndex].name][i]
                    .color === item[incItem.name].color
                ) {
                  tableIncSubWares[incData[incKey].income[incIndex].name][
                    i
                  ].quantity += item[incItem.name].quantity;
                  isColor = true;
                }
              }
              if (!isColor) {
                tableIncSubWares[incData[incKey].income[incIndex].name].push(
                  item[incItem.name]
                );
              }
            } else {
              tableIncSubWares[incData[incKey].income[incIndex].name] = [];
              tableIncSubWares[incData[incKey].income[incIndex].name].push(
                item[incItem.name]
              );
            }
          }
        });
      });
      incTable.ware = tableIncWares;
      incTable.subware = tableIncSubWares;
    }

    const complectTable = [];
    Object.keys(complectData).map(complectKey => {
      const complect = {};
      complect.name = complectData[complectKey].name;
      complect.colors = [];

      Object.keys(expTable.ware).map(expKey => {
        if (expKey === complect.name) {
          expTable.ware[expKey].map((expColor, index) => {
            complect.colors.push(expColor);
            complect.colors[index].items = complectData[complectKey].complect;
          });
        }
      });

      complect.colors.map(coloredComplect => {
        Object.keys(coloredComplect.items).map(coloredItem => {
          expTable.subware[coloredComplect.items[coloredItem].name].map(
            coloredExp => {
              if (coloredComplect.color === coloredExp.color) {
                coloredComplect.items[coloredItem].quantity =
                  coloredExp.quantity;
              } else if (coloredExp.color === "н/з") {
                coloredComplect.items[coloredItem].quantity =
                  coloredExp.quantity;
              }
            }
          );
        });

        //Income part

        Object.keys(incTable.ware).map(incKey => {
          if (incKey === complect.name) {
            incTable.ware[incKey].map(coloredInc => {
              if (coloredInc.color === coloredComplect.color) {
                coloredComplect.quantity -= coloredInc.quantity;
              }
            });
          }
        });

        Object.keys(coloredComplect.items).map(coloredItem => {
          incTable.subware[coloredComplect.items[coloredItem].name].map(
            coloredInc => {
              if (coloredComplect.color === coloredInc.color) {
                coloredComplect.items[coloredItem].quantity -=
                  coloredInc.quantity;
              } else if (coloredInc.color === "н/з") {
                coloredComplect.items[coloredItem].quantity -=
                  coloredInc.quantity;
              }
            }
          );
        });
      });

      complectTable.push(complect);
    });

    complectTable.map(complect => {
      complect.colors.map(coloredComplect => {
        //Min quantity
        coloredComplect.minQuantity = 9999;
        Object.keys(coloredComplect.items).map(item => {
          if (
            coloredComplect.items[item].quantity < coloredComplect.minQuantity
          ) {
            coloredComplect.minQuantity = coloredComplect.items[item].quantity;
          }
        });
        if (coloredComplect.quantity < coloredComplect.minQuantity) {
          coloredComplect.minQuantity = coloredComplect.quantity;
        }
      });
    });

    admin
      .database()
      .ref("/availableComplects")
      .set(complectTable);
  });
