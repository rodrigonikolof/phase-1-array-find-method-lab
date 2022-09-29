// code your solution here



// const record = [
//     { year: "2018", result: "N/A"},
//     { year: "2017", result: "N/A"},
//     { year: "2016", result: "N/A"},
//     { year: "2015", result: "W"}]



function superbowlWin(record) {
    let yearWon = record.find(year => year.result === 'W');
     return yearWon? yearWon.year : undefined; 
}



// console.log(superbowlWin(record));
