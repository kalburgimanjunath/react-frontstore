import React from 'react';
import './style.css';
import Sidebar from './components/sidebar';
import Main from './components/Main';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HowItWorks from './pages/static/HowItWorks';
import ProductDetail from './pages/ProductDetail';
export default function App() {
  const ProductList = [
    {
      id: 1,
      title: 'Product 1',
      techStack: ['reactjs', 'javascript', 'es6'],
      productImage: 'https://picsum.photos/200/300',
      demoURL: 'https://picsum.photos/200/300',
      price: '1000',
    },
    {
      id: 2,
      title: 'Product 2',
      techStack: ['reactjs', 'javascript', 'es6'],
      productImage: 'https://picsum.photos/seed/picsum/200/300',
      demoURL: 'https://picsum.photos/seed/picsum/200/300',
      price: '2000',
    },
    {
      id: 3,
      title: 'Product 3',
      techStack: ['reactjs', 'javascript', 'es6'],
      productImage: 'https://picsum.photos/seed/picsum/200/300',
      demoURL: 'https://picsum.photos/seed/picsum/200/300',
      price: '2000',
    },
  ];
  return (
    <div className="container">
      <Header />
      <div style={{ flex: 1, display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route
            path="/productdetail/:id"
            element={<ProductDetail ProductList={ProductList} />}
          />
          <Route path="" element={<Main ProductList={ProductList} />} exact />
        </Routes>
      </div>
    </div>
  );
}
