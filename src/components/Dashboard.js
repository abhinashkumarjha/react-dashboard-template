import React, { Component } from 'react';
import { Container ,Sidebar, Segment, Menu, Image, Icon, Header } from 'semantic-ui-react';
import DashboardSalesContainer from './../containers/DashboardSalesContainer';
import { Route, Link } from 'react-router-dom';
import { Operation, Vendor, Accounting  } from './pages';


class Dashboard extends Component {

  render() {
    return (
        <Sidebar.Pushable as={Segment}>
        <div className="sidebar-container">
          <Sidebar as={Menu} animation='slide out' width='thin' visible={true} icon='labeled' vertical inverted>
            <Menu.Item name='sales' active={true}>
              <Link to="/sales">
                <Icon name='sales' /> Sales
              </Link>
            </Menu.Item>
            <Menu.Item name='operations'>
              <Link to="/operations">
                <Icon name='operations' />Operation
              </Link>
            </Menu.Item>
            <Menu.Item name='vendor'>
              <Link to="/vendor">
                <Icon name='camera' />Vendor
              </Link>
            </Menu.Item>
            <Menu.Item name='accounting'>
              <Link to="/accounting">
                <Icon name='camera' />Accounting
              </Link>
            </Menu.Item>
          </Sidebar>
          </div>
          <Sidebar.Pusher>
            <Segment basic>
            <Route path='/sales' component={DashboardSalesContainer}></Route>
            <Route path='/operations' component={Operation}></Route>
            <Route path='/vendor' component={Vendor}></Route>
            <Route path='/accounting' component={Accounting}></Route>
            <Route path='/' component={DashboardSalesContainer}></Route>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
  }
}

export default Dashboard
