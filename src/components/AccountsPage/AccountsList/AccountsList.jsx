//Imports
//CSS
import './AccountsList.css'

//Libraries
import React from 'react'

//Components
import AccountEntity from '../AccountEntity/AccountEntity'

function AccountsList({ accounts }) {
  return (
    <table className='accountsListTable'>
      <thead>
        <tr>
          <th>Název účtu</th>
          <th>Číslo účtu</th>
        </tr>
      </thead>
      <tbody>

        {accounts.map(account => (
          <AccountEntity key={account.id} account={account} />
        ))}

      </tbody>
    </table>
  )
}

export default AccountsList