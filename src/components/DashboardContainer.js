import React, { Component } from 'react'
import { Card, Icon,  Image } from 'semantic-ui-react'

class DashboardContainer extends Component {

  render(){
    return(
      <div className="card-container">
        <Card>
          <Card.Content>
            <Card.Header>Top Menu</Card.Header>
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Card.Header>Lallantop menu</Card.Header>
          </Card.Content>
        </Card>
        <Card fluid>
          <Image src='http://www.robocup2016.org/media/leagues/eindhoven/albert-van-bremen/robocup-soccer-small-size_Albert-van-Breemen-2_R220X0.jpg' />
        </Card>
        <Card.Group centered>
          <Card>
            <Image src='http://www.robocup2016.org/media/leagues/eindhoven/albert-van-bremen/robocup-soccer-small-size_Albert-van-Breemen-2_R220X0.jpg' />
          </Card>
          <Card>
            <Image src='http://www.robocup2016.org/media/leagues/eindhoven/albert-van-bremen/robocup-soccer-small-size_Albert-van-Breemen-2_R220X0.jpg' />
          </Card>
        </Card.Group>
        <Card.Group centered>
          <Card>
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }

}

export default DashboardContainer
