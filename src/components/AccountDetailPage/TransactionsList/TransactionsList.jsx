//Imports
//CSS
import './TransactionsList.css'

//Libraries
import React from 'react'

//Components & Pages
import TransactionEntity from '../TransactionEntity/TransactionEntity'

function TransactionsList({ transactions }) {
  return (
    <table className='transactionsListTable'>
      <thead>
        <tr>
          <th>Datum</th>
          <th>
            <p>Název účtu</p>
            <p>Poznámka</p>
          </th>
          <th>
            <p>Valuta</p>
            <p>Typ</p></th>
          <th>
            <p>VS</p>
            <p>SS</p>
          </th>
          <th>Částka</th>
        </tr>
      </thead>
      <tbody>

        {transactions.map(transaction => (
          <TransactionEntity key={transaction.id} transaction={transaction} />
        ))}

      </tbody>
    </table>
  )
}

export default TransactionsList