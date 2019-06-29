import React,{Component} from "react";
import { List, Typography } from 'antd';
import Element from './Element.js';
import ironMan from './Images/ironMan.jpg';
import thor from './Images/thor.jpg';
import cap from './Images/cap.jpg';
import { Tabs } from 'antd';
import { Empty } from 'antd';

const { TabPane } = Tabs;
const employeeData = [
    [
        ironMan,
        'Iron Man',
        '303571179413',
        'Software Engineer',
        'Currently on leave to Japan',
        [
            {
                Title : 'Eating at sushi restaurant with client',
                Expense : 'HKD 4500',
                Date : '29 June 2019',
                Details : {
                    '2 Salmon Mentai' : 'HKD 542',
                    '1 Tuna Roll' : 'HKD 220',
                    '2 Special Japanese Sake' : 'HKD 900',
                    '2 Oriental Mango Dessert' : 'HKD 150'
                },
                id : '384023984'
            },
            {
                Title : 'Flight to Japan',
                Expense : 'HKD 4500',
                Date : '29 June 2019',
                Details : {
                    '2 Salmon Mentai' : 'JPY 1380.3',
                    '1 Tuna Roll' : 'JPY 670.5',
                    '2 Special Japanese Sake' : 'JPY 15702',
                    '2 Oriental Mango Dessert' : 'JPY 834.7'
                },
                id : '830184019'
            },
            {
                Title : '5 days 4 night hotel in Osaka',
                Expense : 'HKD 4500',
                Date : '29 June 2019',
                Details : {
                    '2 Salmon Mentai' : 'JPY 1380.3',
                    '1 Tuna Roll' : 'JPY 670.5',
                    '2 Special Japanese Sake' : 'JPY 15702',
                    '2 Oriental Mango Dessert' : 'JPY 834.7'
                },
                id : '2138503453'
            }

        ]
    ],
    [
        cap,
        'Captain America',
        '303571172138',
        'UI Design',
        'Currently on leave to New York',
    ],
    [
        thor,
        'Thor',
        '303571174323',
        'Market Analyst',
        'Doesn\'t have any trip',
    ]
]

function callback(key) {
    console.log(key);
}


class TripList extends React.Component{
    render(){
        return (
            <div style={{width:"500px"}}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Previous Trips" key="1">
                        <Empty/>
                    </TabPane>
                    <TabPane tab="Current Trip" key="2">
                        <div style={{borderLeft : '0.1px solid white',paddingLeft : '40px'}}>
                            <h3 className="Expense" style={{ margin: '16px 0',fontWeight : 'bold' }}>Expense</h3>
                            <div className = "expenseList" style = {{height:'auto',borderRadius:'15px',display:'grid',backgroundColor : '#8BDCE8'}}>
                                {employeeData[0][employeeData[0].length-1].map((element)=>(
                                    <Element key={element.id} item={element}/>
                                ))}
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Upcoming Trips" key="3">
                        <Empty/>
                    </TabPane>
                </Tabs>
            </div>

        );
    }
}
export default TripList;
