import React, { Component } from 'react'
import { Card, Icon,  Image } from 'semantic-ui-react'
import DatePicker from './DatePicker'
import TotalSales from './TotalSales'
import OverView from './OverView'
import Performance from './Performance'
import Customers from './Customers'
import Promotions from './Promotions'
import UniqueCustomerAdded from './UniqueCustomerAdded'

class DashboardContainer extends Component {

  render(){
    return(
      <div className="card-container">
        <Card>
          <Card.Content>
            <DatePicker/>
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <OverView />
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
          <Card.Header><h4>Total Sales</h4></Card.Header>
            <Card.Description>
              <TotalSales />
            </Card.Description>
          </Card.Content>
        </Card>
        <Card.Group centered>
          <Card>
            <Card.Content>
              <Card.Header> Performance </Card.Header>
              <Card.Description>
                <Performance />
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> Customers </Card.Header>
              <Card.Description>
                <Customers />
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <Card.Group centered>
          <Card>
            <Card.Content>
              <Card.Header>Promotions</Card.Header>
              <Card.Description>
                <Promotions />
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Header>Unique Customer Added </Card.Header>
            <Card.Content>
              <Card.Description>
                <UniqueCustomerAdded />
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }

}

export default DashboardContainer
