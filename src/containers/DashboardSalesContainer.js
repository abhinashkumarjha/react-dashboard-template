import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import DatePicker from './../components/DatePicker';
import TotalSales from './../components/TotalSales';
import OverView from './../components/OverView';
import Performance from './../components/Performance';
import Customers from './../components/Customers';
import Promotions from './../components/Promotions';
import UniqueCustomerAdded from './../components/UniqueCustomerAdded';
import { connect } from 'react-redux';


class DashboardSalesContainer extends Component {
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
              <TotalSales totalSalesData={this.props.dashboardData.totalSalesData}/>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card.Group centered>
          <Card>
            <Card.Content>
              <Card.Header> Performance </Card.Header>
              <Card.Description>
                <Performance Tabledata={this.props.dashboardData.performanceData}/>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> Customers </Card.Header>
              <Card.Description>
                <Customers donutChartData={this.props.dashboardData.donutChartData}/>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <Card.Group centered>
          <Card>
            <Card.Content>
              <Card.Header>Promotions</Card.Header>
              <Card.Description>
                <Promotions promotionData={this.props.dashboardData.promotionData}/>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Unique Customer Added </Card.Header>
              <Card.Description>
                <UniqueCustomerAdded uniqueCustomerAdded={this.props.dashboardData.uniqueCustomerAdded}/>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    dashboardData:state.dashboard
  };
}

export default connect(mapStateToProps)(DashboardSalesContainer);
