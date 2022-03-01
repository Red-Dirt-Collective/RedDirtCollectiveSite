import { Badge } from 'antd'
import React from 'react'
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import styled from 'styled-components';
import { useRouteData } from 'react-static'


const CalendarSection = styled.div`
margin:24px;
margin-top:48px;
`;

export default () => {

  let [value,setValue] = React.useState(moment('2017-01-25'));
  let [selectedValue,setSelectedValue] = React.useState(moment(Date.now()));
  let {calendar} = useRouteData();
  let RDCCal = Object.values(calendar).filter(e => e.type === 'VEVENT').map(e => ({date: moment(e.start, 'YYYYMMDDTHHmmssZ'), summary:e.summary }));

  let onSelect = value => {
    setValue(value)
    setSelectedValue(value)  
  };

  let onPanelChange = value => {
    console.log('wtf', value)
    setValue(value)
  };

  function getListData(value){
      return RDCCal.filter(e => e.date.isSame(value,'day') );
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    console.log({listData});
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.summary}>
            <Badge status={'warning'} text={item.summary} />
          </li>
        ))}
      </ul>
    );
  }

  return (
      <>
        <CalendarSection>
        <h2>Event Calendar</h2>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar dateCellRender={dateCellRender} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
        </CalendarSection>
      </>
    );
  }
