import React from 'react';
import './style.css';
import Sidebar from './components/sidebar';
import Main from './components/Main';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HowItWorks from './pages/static/HowItWorks';
import ProductDetail from './pages/ProductDetail';
import Upload from './pages/Upload';
import Dashboard from './pages/dashboard/Dashboard';
import Projects from './pages/projects/Projects';
import MarketPlace from './pages/marketplace/MarketPlace';
import CategoryWise from './components/CategoryWise';
export default function App() {
  const ProductList = [
    {
      id: 1,
      title: 'Product 1',
      techStack: ['grid', 'javascript', 'es6'],
      productImage: 'https://picsum.photos/200/300',
      demoURL: 'https://picsum.photos/200/300',
      price: '1000',
    },
    {
      id: 2,
      title: 'Product 2',
      techStack: ['reactjs', 'list', 'es6'],
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
    {
      id: 6,
      title: 'Product 3',
      techStack: ['reactjs', 'javascript', 'es6'],
      productImage: 'https://picsum.photos/seed/picsum/200/300',
      demoURL: 'https://picsum.photos/seed/picsum/200/300',
      price: '2000',
    },
    {
      id: 4,
      title: 'Product 3',
      techStack: ['reactjs', 'javascript', 'es6'],
      productImage: 'https://picsum.photos/seed/picsum/200/300',
      demoURL: 'https://picsum.photos/seed/picsum/200/300',
      price: '2000',
    },
    {
      id: 5,
      title: 'Product 3',
      techStack: ['reactjs', 'javascript', 'es6'],
      productImage: 'https://picsum.photos/seed/picsum/200/300',
      demoURL: 'https://picsum.photos/seed/picsum/200/300',
      price: '2000',
    },
  ];
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <div style={{ flex: 1, display: 'flex' }}>
        <Sidebar />

        <div>
          <div style={{ flex: 1 }}>
            <Header />
          </div>
          <Routes>
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route
              path="/productdetail/:id"
              element={<ProductDetail ProductList={ProductList} />}
            />
            <Route
              path="categorywise/:id"
              element={<CategoryWise ProductList={ProductList} />}
            />
            <Route path="/upload" element={<Upload />} />
            <Route path="" element={<Main ProductList={ProductList} />} exact />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/marketplace"
              element={<MarketPlace ProductList={ProductList} />}
              exact
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
