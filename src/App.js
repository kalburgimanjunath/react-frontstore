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
import Templates from './pages/templates/Templates';
import CategoryWise from './components/CategoryWise';
export default function App() {
  const ProductList = [
    {
      id: 1,
      title: 'Profile Card',
      techStack: ['profile', 'javascript', 'template', 'portfolio'],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/311489f518773bc8248ccb31c4c2d457/01e79636',
      demoURL: 'https://picsum.photos/200/300',
      price: '100000',
    },
    {
      id: 2,
      title: 'FrontStore',
      techStack: ['reactjs', 'list', 'form'],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/132abfab02ce8d4ba376c784bc36e2be/c456fc93',
      demoURL: 'https://grand-naiad-a82b21.netlify.app/',
      price: '200000',
    },
    {
      id: 3,
      title: 'Movid Cards',
      techStack: ['reactjs', 'javascript', 'es6', 'Movies', 'Card'],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/88b6f399263151ae98a9832c5eebbb00/a9ffee6c',
      demoURL: 'https://picsum.photos/seed/picsum/200/300',
      price: '40000',
    },
    {
      id: 6,
      title: 'Single Page - Profile',
      techStack: ['reactjs', 'javascript', 'es6', 'profile', 'template'],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/70d9138a29252eeaee02415122ab8054/a010e990',
      demoURL: 'https://picsum.photos/seed/picsum/200/300',
      price: '20000',
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
              path="/templates/:id"
              element={<Templates ProductList={ProductList} />}
            />
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
