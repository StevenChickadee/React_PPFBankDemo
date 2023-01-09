//Formats date into DD.MM.YYYY
export function formatDate(date) {
    //If theres time in string, gets only YYYY-MM-DD
    if (date.indexOf('T') >= 0) {
        date = date.split("T")[0]
    }
    //Formats date
    return date.split("-")[2] + "." + date.split("-")[1] + "." + date.split("-")[0]
}

//Formats otherAccountNumber property to XXXXXX-XXXXXXXXXX format for URL parsing compatibility. Can be solved in back-end
export function formatOtherAccountNumbers(accounts) {

    //Iterate through every element in accounts array
    accounts.forEach(account => {

        //If it has whitespace, split it and add "-"
        if (account.identification.otherAccountNumber.indexOf(' ') >= 0) {

            const splittedOtherAccountNumbers = account.identification.otherAccountNumber.split(" ")
            account.identification.otherAccountNumber = splittedOtherAccountNumbers[0] + "-" + splittedOtherAccountNumbers[1]
        }
    })
}

//Rounds and formats value to have white-spaces for better readability
export function formatValue(value, round) {
    //Rounds to integer and formats to X XXX XXX, if Round flag is true or value is already integer
    if (round || value.toString().indexOf('.') < 0) {
        return Math.round(value).toLocaleString() + ",-"
    } else { //Else formats to X XXX XXX.XXX
        return value.toLocaleString() + value.toString().split('.')[1] + ",-"
    }
}