import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import FilterList from '../../components/FilterList';
import Footer from '../../components/Footer';
import { Formik, Form, Field } from 'formik';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
export default function MarketPlace({ ProductList }) {
  return (
    <div className="page">
      <h3>Market Place</h3>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink className="" onClick={function noRefCheck() {}}>
              Your Components
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="" onClick={function noRefCheck() {}}>
              Purchased Components
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="active" onClick={function noRefCheck() {}}>
              Marketplace
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab="3">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div>
                  <div
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignText: 'center',
                    }}
                  >
                    <div>
                      <Hero />
                    </div>
                    <div>
                      <FilterList products={ProductList} categorysearch="all" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div>
                  <div
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignText: 'center',
                    }}
                  >
                    <div>
                      <Hero />
                    </div>
                    <div>
                      <FilterList products={ProductList} categorysearch="all" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <div>
                  <div
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignText: 'center',
                    }}
                  >
                    <div>
                      <Hero />
                    </div>
                    <div>
                      <FilterList products={ProductList} categorysearch="all" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}
