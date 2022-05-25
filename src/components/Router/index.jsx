import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import DashBoard from '../../containers/Dashboard';
import Blockchain from '../../containers/Blockchain';
import Nodes from '../../containers/Nodes';
import Transactions from '../../containers/Transactions';
import Wallets from '../../containers/Wallets';
import NotFound from '../../containers/NotFound';

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<DashBoard />} />
      <Route exact path="/Blockchain" element={<Blockchain />} />
      <Route exact path="/Nodes" element={<Nodes />} />
      <Route exact path="/Transactions" element={<Transactions />} />
      <Route exact path="/Wallets" element={<Wallets />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

