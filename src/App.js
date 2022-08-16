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
      demoURL: 'single-page-profile.netlify.app',
      price: '20000',
    },
    {
      id: 4,
      title: 'Signup Form',
      techStack: ['reactjs', 'javascript', 'es6', 'signup', 'form', 'template'],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/cdc715539f77418797d07cf221a19c8d/88b33f4c',
      demoURL: 'https://incomparable-valkyrie-32ebe5.netlify.app/',
      price: '2000',
    },
    {
      id: 5,
      title: 'Single Page - Coming Soon',
      techStack: ['reactjs', 'javascript', 'es6', 'comingsoon', 'form'],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/562411a6ada163c627d13e5c13f3b95b/0089625e',
      demoURL: 'https://react-comingsoon.netlify.app/',
      price: '20000',
    },
    {
      id: 6,
      title: 'Single Page - Coming Soon  Bootstrap',
      techStack: ['bootstrap', 'javascript', 'es6', 'comingsoon', 'form'],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/df771b795425de358edb54117a59070b/c359c603',
      demoURL: 'https://bootstrap-5-comingsoon.netlify.app',
      price: '20000',
    },
    {
      id: 7,
      title: 'Single Page - Coming Soon White',
      techStack: ['reactjs', 'javascript', 'es6', 'comingsoon', 'form'],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/601e42d0ac1dbeca180facbd02d5bfd2/e7de2907',
      demoURL: 'https://react-comingsoon-white.netlify.app',
      price: '20000',
    },
    {
      id: 8,
      title: 'Single Page - Coming Soon White',
      techStack: ['reactjs', 'javascript', 'es6', 'comingsoon', 'form'],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/d2f4a8b77ab16171ccc7e5433844b2dd/1c8d16d9',
      demoURL: 'https://react-comingsoon-white.netlify.app',
      price: '20000',
    },
    {
      id: 9,
      title: 'Sectioned Screen',
      techStack: [
        'reactjs',
        'javascript',
        'es6',
        'comingsoon',
        'sectioned',
        'portfolio',
        'template',
      ],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/d5df16ae4a6980f7394ff7f559346f62/2318c976',
      demoURL: 'https://react-sectioned.netlify.app',
      price: '20000',
    },
    {
      id: 10,
      title: 'React Pagination Screen',
      techStack: [
        'reactjs',
        'javascript',
        'es6',
        'comingsoon',
        'sectioned',
        'portfolio',
        'template',
      ],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/d5df16ae4a6980f7394ff7f559346f62/2318c976',
      demoURL: 'https://react-sectioned.netlify.app',
      price: '20000',
    },
    {
      id: 10,
      title: 'HUBL Hubli Fish Marketplace',
      techStack: [
        'reactjs',
        'javascript',
        'es6',
        'comingsoon',
        'sectioned',
        'portfolio',
        'template',
      ],
      productImage:
        'https://dl.airtable.com/.attachmentThumbnails/7304a061e4c6e378b6f192b3e36376de/8bfaa1bb',
      demoURL: 'https://hubli-nonveg.netlify.app',
      price: '30000',
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
