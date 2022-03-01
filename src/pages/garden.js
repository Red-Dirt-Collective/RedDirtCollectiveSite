import { Button } from 'antd'
import React from 'react'
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import styled from 'styled-components';


const CalendarSection = styled.div`
margin:24px;
margin-top:48px;
`;

export default () => {

  let [value,setValue] = React.useState(moment('2017-01-25'));
  let [selectedValue,setSelectedValue] = React.useState(moment('2017-01-25'));
 
  let onSelect = value => {
    setValue(value)
    setSelectedValue(value)
  };

  let onPanelChange = value => {
    console.log('wtf', value)
    setValue(value)
  };

  return (
      <>
        <CalendarSection>
        <h2>Event Calendar</h2>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
        </CalendarSection>
      </>
    );
  }
