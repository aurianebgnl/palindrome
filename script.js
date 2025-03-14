let dateInput = "11/02/2011"; // DD/MM/YYYY format

// passer la date au format YYYY/DD/MM et vérifier si la date est valide
function isDateValid(dateStr) {
    let dateArray = dateStr.split("/");
    let newDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
    console.log(newDate); // 2019/05/15 (YYYY/MM/DD)

    let dateObj = new Date(newDate);
    console.log(dateObj); // 2019-05-15T00:00:00.000Z

    return !isNaN(dateObj);
}

// function formatDate(dateInput){
//     let ddmmyyDate
//     if (isDateValid(dateInput) === true){
//         console.log(`valid dateInput : ${dateInput}`)
//         let dateObj = new Date(dateInput);
//         console.log(dateObj)

//         let day = dateObj.getDate();
//         day = day < 10 ? "0" + day : day;
//         console.log(day)
//         let month = dateObj.getMonth() + 1;
//         month = month < 10 ? "0" + month : month;
//         const year = dateObj.getFullYear();

//         ddmmyyDate = `${day}/${month}/${year}`;
//         console.log(`resultDate : ${ddmmyyDate}`);  // 15/05/2019
        
//     } else {
//         console.log("Format de date non valide")
//     }
//     return ddmmyyDate
// }

// dateString = formatDate(dateInput)
// console.log(dateString)

function isPalindrome(date){
    let dateArray = date
        .split("/")
        .join('')
    // let newDate = `${dateArray[0]}${dateArray[1]}${dateArray[2]}`;
    console.log(dateArray)
    const reversedDate = dateArray
        .split('')
        .reverse()
        .join('')
    console.log(reversedDate)
    console.log(dateArray.toUpperCase() === reversedDate.toUpperCase())
    
    return dateArray.toUpperCase() === reversedDate.toUpperCase()
}

function checkDate(date){
    let result

    console.log(date)
    console.log
    if (isDateValid(date) === true){
       result =  isPalindrome(date)
    } else {
        result = console.log("Format de date non valide")
    }
    return result
}


// isPalindrome(dateInput)
// isPalindrome("11/02/2011") // true
// isPalindrome("03/04/2001") // false

checkDate(dateInput)
checkDate("11/02/2011") // true
checkDate("03/04/2001") // false
checkDate("03/32/2001") // invalid date

