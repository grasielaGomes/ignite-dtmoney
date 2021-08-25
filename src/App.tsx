import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard/dashboard";
import { Header } from "./components/Header/header";
import { NewTransactionModal } from './components/NewTransactionModal/new-transaction-modal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionsContexts';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}
