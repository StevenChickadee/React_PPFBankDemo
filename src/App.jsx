//IMPORTS
//CSS
import './App.css';

//Libraries
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

//Components & Pages
import Header from './components/Header/Header'
import Accounts from './pages/Accounts/Accounts'
import AccountDetail from './pages/AccountDetail/AccountDetail'
import PageNotFound from './pages/PageNotFound/PageNotFound'

const queryClient = new QueryClient()

function App() {

  //JSX
  return (
    <div className="appWrapper">
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className="bodyWrapper">
          <Routes>
            <Route path="/" element={<Accounts />} />
            <Route path="/:otherAccountNumber" element={<AccountDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
