import React, { Component } from 'react'
import { Icon, Dropdown, Header, Container } from 'semantic-ui-react'


  const options=[
     { key: 1, text: '10 days', value: 1 },
     { key: 2, text: '20 days', value: 2 },
     { key: 3, text: '30 days', value: 3 }
   ]

   const menu=[
    { key: 1, text: '2000-2001', value: 1 },
    { key: 2, text: '2001-2002', value: 2 },
    { key: 3, text: '2002-2003', value: 3 }
   ]

  const DatePicker = () =>{
    return(
      <Container>
      <Header as="h4">
          <Icon name="calendar alternate outline" />
          <Header.Content>
          <Dropdown inline defaultValue={ options[1].value } options={options}/>
          <Dropdown inline defaultValue={  menu[1].value }options={menu}/>
          </Header.Content>
      </Header>
      </Container>
    )
  }

export default DatePicker
