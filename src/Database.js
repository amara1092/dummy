import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "Reactoffline.db";
const database_version = "1.0";
const database_displayname = "SQLite React Offline Database";
const database_size = 200000;

export default class Database {
    initDB() {
        let db;
        return new Promise((resolve) => {
          console.log("Plugin integrity check ...");
          SQLite.echoTest()
            .then(() => {
              console.log("Integrity check passed ...");
              console.log("Opening database ...");
              SQLite.openDatabase(
                database_name,
                database_version,
                database_displayname,
                database_size
              )
                .then(DB => {
                  db = DB;
                  console.log("Database OPEN");
                  db.executeSql('SELECT 1 FROM Timesheet LIMIT 1').then(() => {
                      console.log("Database is ready ... executing query ...");
                  }).catch((error) =>{
                      console.log("Received error: ", error);
                      console.log("Database not yet ready ... populating data");
                      db.transaction((tx) => {
                          tx.executeSql('CREATE TABLE IF NOT EXISTS Timesheet (id_timesheet, user_id, eow, projNum, comment, arrivalTime, departTime, totalHrs, siteID, isTravel, timeInserted)');
                      }).then(() => {
                          console.log("Table created successfully");
                      }).catch(error => {
                          console.log(error);
                      });
                  });
                  resolve(db);
                })
                .catch(error => {
                  console.log(error);
                });
            })
            .catch(error => {
              console.log("echoTest failed - plugin not functional");
            });
          });
          
      };
      
      closeDatabase(db) {
        if (db) {
          console.log("Closing DB");
          db.close()
            .then(status => {
              console.log("Database CLOSED");
            })
            .catch(error => {
              this.errorCB(error);
            });
        } else {
          console.log("Database was not OPENED");
        }
      };

      listTimesheet() {
        return new Promise((resolve) => {
          const timesheets = [];
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('SELECT t.id_timesheet, t.user_id, t.eow, t.date, t.projNum, t.comment, t.arrivalTime, t.departTime, t.totalHrs, t.siteID, t.isTravel, t.timeInserted FROM Timesheet t', []).then(([tx,results]) => {
                console.log("Query completed");
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  console.log(`ProjectNum: ${row.projNum}, Site details: ${row.siteID}, Start: ${row.arrivalTime}, Finish: ${row.departTime}, Description: ${row.comment}`)
                  const { projNum, siteID, arrivalTime, departTime, totalHrs, isTravel, comment } = row;
                  timesheets.push({
                    projNum,
                    user_id,
                    siteID,
                    arrivalTime,
                    departTime,
                    comment

                  });
                }
                console.log(timesheets);
                resolve(timesheets);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      timesheetByProjectNumber(id) {
        console.log(id);
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('SELECT * FROM Timesheet WHERE projNum = ?', [id]).then(([tx,results]) => {
                console.log(results);
                if(results.rows.length > 0) {
                  let row = results.rows.item(0);
                  resolve(row);
                }
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      addTimesheet(timesheet) {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('INSERT INTO Timesheet VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [timesheet.id_timesheet, timesheet.user_id, timesheet.eow, timesheet.date, timesheet.projNum, timesheet.comment, timesheet.arrivalTime, timesheet.departTime, timesheet.totalHrs, timesheet.siteID, timesheet.isTravel, timesheet.timeInserted]).then(([tx, results]) => {
                resolve(results);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }
    
      updateProduct(id, timesheet) {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('UPDATE Timesheet SET id_timesheet = ?, user_id = ?, eow = ?, date = ?, projNum = ?, comment = ?, arrivalTime = ?, departTime = ?, totalHrs = ?, siteID = ?, isTravel = ?, timeInserted = ? WHERE id_timesheet = ?', [timesheet.id_timesheet, timesheet.user_id, timesheet.eow, timesheet.date, timesheet.projNum, timesheet.comment, timesheet.arrivalTime, timesheet.departTime, timesheet.totalHrs, timesheet.siteID, timesheet.isTravel, timesheet.timeInserted, id]).then(([tx, results]) => {
                resolve(results);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }
    
      deleteProduct(id) {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('DELETE FROM Timesheet WHERE id_timesheet = ?', [id]).then(([tx, results]) => {
                console.log(results);
                resolve(results);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }
    }
