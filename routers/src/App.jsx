import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Sobre from './components/sobre/Sobre';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Notfound from './components/404/Notfound';
import Produto from './components/Produto/Produto';
import ProdutoDescricao from "./components/Produto/ProdutoDescricao";
import ProdutoAvaliacao from "./components/Produto/ProdutoAvaliacao";
import ProdutoCustomizado from "./components/Produto/ProdutoCustomizado";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />}>
          <Route path="/" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
