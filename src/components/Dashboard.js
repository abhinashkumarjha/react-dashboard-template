import React, { Component } from 'react';
import { Container ,Sidebar, Segment, Menu, Image, Icon, Header } from 'semantic-ui-react';
import DashboardContainer from './../containers/DashboardContainer';




class Dashboard extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div className="Container">
      <div className="ui secondary menu" id="menu">
        <a className="active item" onClick={this.toggleVisibility}><Icon name='bars' /> Menu </a>
        <a className="item" >About us</a>
        <a className="item"> Contact us</a>
      </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide out' width='thin' visible={visible} icon='labeled' vertical>
            <Menu.Item name='home'>
              <Icon name='home' /> Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <DashboardContainer />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Dashboard
