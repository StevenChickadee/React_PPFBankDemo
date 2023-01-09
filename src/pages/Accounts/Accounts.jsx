//Imports
//CSS
import "./Accounts.css"

//Libraries
import React from 'react'
import { useQuery } from 'react-query'

//Components & Pages
import AccountsList from '../../components/AccountsPage/AccountsList/AccountsList'
import EntityCount from "../../components/EntityCount/EntityCount"

//Services
import { API_fetchAccounts } from '../../services/API_endpoint'
import { formatOtherAccountNumbers } from '../../services/Formaters'

function Accounts() {

  //Hooks
  //Creates Query with Accounts data. If there's no fresh data, fetches from API_endpoint service.
  const accountsQuery = useQuery(
    ['accounts'],
    API_fetchAccounts,
    //TO-DO staleTime: 60000
    { staleTime: 10000000000 }
  )
  //Service handle
  if (accountsQuery.isLoading) {
    return <div>Loading...</div>
  }
  if (accountsQuery.isError) {
    console.log('Error: ' + accountsQuery.error)
    return <div>Oops, something went wrong...</div>
  }
  if (accountsQuery.isSuccess) {
    formatOtherAccountNumbers(accountsQuery.data)
  }

  return (
    <div className='accountsWrapper'>
      <h2>Transparentní účty</h2>
      <EntityCount list={accountsQuery.data} />
      <AccountsList accounts={accountsQuery.data} />
    </div>
  )
}

export default Accounts