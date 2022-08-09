import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  const category = [
    'Element',
    'Form',
    'Marketing',
    'Grid',
    'List',
    'Navigation',
    'Modal',
    'Social',
    'Complex',
    'Page',
    'Other',
  ];
  const icons = [
    'bi-cursor',
    'bi-check2-square',
    'bi-file-image',
    'bi-grid',
    'bi-list',
    'bi-card-list',
    'bi-images',
    'bi-chat-dots',
    'bi-calendar-event',
    'bi-file-break',
    'bi-app',
  ];
  const singleTemplate = [
    'AllTemplates',
    'Profile',
    'Landing',
    'Form',
    'Portfolio',
    'Sanctioned',
  ];
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: 280, backgroundColor: '#202020', color: '#fff' }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Front Work</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="" className="nav-link active" aria-current="page">
            <i className="bi bi-bricks"></i>
            <span style={{ paddingLeft: 10 }}>All</span>
          </Link>
        </li>
        {category.map((item, index) => {
          return (
            <li>
              <Link
                to={`./categorywise/${item}`}
                className="nav-link text-white"
              >
                <i className={`bi ${icons[index]}`}></i>
                <span style={{ paddingLeft: 10 }}>{item}</span>
              </Link>
            </li>
          );
        })}
        <li className="text-bg-dark">
          <hr
            className="dropdown-divider"
            style={{ color: 'white', backgroundColor: 'red' }}
          />
          --------------------------------------
        </li>
        {singleTemplate.map((item, index) => {
          return (
            <li>
              <Link to={`./templates/${item}`} className="nav-link text-white">
                <i className={`bi ${icons[index]}`}></i>
                <span style={{ paddingLeft: 10 }}>{item}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
