//Imports
//CSS
import "./AccountDetail.css"

//Libraries
import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'

//Components & Pages
import TransactionList from '../../components/AccountDetailPage/TransactionsList/TransactionsList'
import Balance from '../../components/AccountDetailPage/Balance/Balance'
import EntityCount from "../../components/EntityCount/EntityCount";

//Services
import { API_fetchAccountBalance, API_fetchAccountTransactions } from '../../services/API_endpoint'

function AccountDetail() {

  //Hooks
  //Gets account object from Location State passed from Navigate. Delete after singular Account fetch on back-end is done.
  const location = useLocation()
  const account = location.state

  //Queries
  //TO-DO Fetch 1 account with OtherAccountNumber from URL Params. If it doesn't exist, navigate to 404Page. Option to fetch singular Account needs to be done on back-end
  //Creates Query with Account Balance data. If there's no fresh data, fetches from API_endpoint service.
  const accountBalanceQuery = useQuery(
    ['accountBalance', account.identification.otherAccountNumber],
    API_fetchAccountBalance,
    //TO-DO staleTime: 60000
    { staleTime: 10000000000 }
  )
  //Creates Query with Account Transactions data. If there's no fresh data, fetches from API_endpoint service.
  const accountTransactionsQuery = useQuery(
    ['accountTransactions', account.identification.otherAccountNumber],
    API_fetchAccountTransactions,
    //TO-DO staleTime: 60000
    { staleTime: 10000000000 }
  )

  //Service handle
  if (accountBalanceQuery.isLoading || accountTransactionsQuery.isLoading) {
    return <div>Loading...</div>
  }
  if (accountBalanceQuery.isError) {
    console.log('Balance error: ' + accountBalanceQuery.error)
    return <div>Oops, something went wrong...</div>
  }
  if (accountTransactionsQuery.isError) {
    console.log('Transactions error: ' + accountTransactionsQuery.error)
    return <div>Oops, something went wrong...</div>
  }

  
  return (
    <div className='accountDetailWrapper'>
      <Link className="link" to="/">Zpět na přehled</Link>
      <h1>Transparentní účet {account.name}</h1>
      <h2>{account.identification.otherAccountNumber}/{account.servicer.bankCode}</h2>
      <Balance balance={accountBalanceQuery.data} />
      <EntityCount list={accountTransactionsQuery.data} />
      <TransactionList transactions={accountTransactionsQuery.data} />
    </div>
  )
}

export default AccountDetail