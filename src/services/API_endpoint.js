//imports
import axios from 'axios'

//mock-up data
import ta_accounts_response from '../_mockUpData/ta-accounts-response-demo.json'
import ta_2002222222_balance_response from '../_mockUpData/ta-2002222222-balance-response.json'
import ta_2002222222_transactions_response from '../_mockUpData/ta-2002222222-transactions-response-demo.json'

//Fetches all Transparent Accounts from API endpoint
//Uncomment for real-life scenario fetching
export async function API_fetchAccounts() {
    //const response = await axios.get('/accounts') 
    //const data = response.data

    //Comment out this for real-life scenario fetching
    const data = ta_accounts_response

    return data
}

//Fetches Balance of specific Transparent Account from API endpoint
//Uncomment for real-life scenario fetching
export async function API_fetchAccountBalance(key, otherAccountNumber) {
    //const filteredOtherAccountNumber = otherAccountNumber.split("-")[1]
    //const response = await axios.get(`/accounts/${filteredOtherAccountNumber}/balance`) 
    //const data = response.data

    //Comment out this for real-life scenario fetching
    const data = ta_2002222222_balance_response

    return data
}

//Fetches List of All Transactions of specific Transparent Account from API endpoint
//Uncomment for real-life scenario fetching
export async function API_fetchAccountTransactions(key, otherAccountNumber) {
    //const filteredOtherAccountNumber = otherAccountNumber.split("-")[1]
    //const response = await axios.get(`/accounts/${filteredOtherAccountNumber}/transactions`) 
    //const data = response.data

    //Comment out this for real-life scenario fetching
    const data = ta_2002222222_transactions_response

    return data
}