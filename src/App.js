import './App.css'
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import EmployeeInfo from './Components/EmployeeInfo.js';
import EmployeeExpense from './Components/EmployeeExpense.js';
import ironMan from './Components/Images/ironMan.jpg';
import thor from './Components/Images/thor.jpg';
import cap from './Components/Images/cap.jpg';
const { Header, Sider, Content } = Layout;

class App extends React.Component{
  state = {
    collapsed: false,
    employeeData : [
        [
            ironMan,
            'Iron Man',
            '303571179413',
            'Software Engineer',
            'Currently on leave to Japan',
            [
                {
                    Title : 'Flight to Japan',
                    Expense : 'HKD 4500',
                    Date : '29 June 2019',
                    Details : 'Flight number : SQ 123',
                    id : '830184019'
                },
                {
                    Title : '5 days 4 night hotel in Osaka',
                    Expense : 'HKD 4500',
                    Date : '29 June 2019',
                    Details : 'Grand Osaka Hotel',
                    id : '480923840'
                },
                {
                    Title : 'Eating at sushi restaurant with client',
                    Expense : 'HKD 4500',
                    Date : '29 June 2019',
                    Details : 'Sushi Master Restaurant',
                    id : '384023984'
                },
                {
                    Title : 'Eating at sushi restaurant with client',
                    Expense : 'HKD 4500',
                    Date : '29 June 2019',
                    Details : 'Flight number : SQ 123',
                    id : '384023984'
                },
                {
                    Title : 'Eating at sushi restaurant with client',
                    Expense : 'HKD 4500',
                    Date : '29 June 2019',
                    Details : 'Flight number : SQ 123',
                    id : '384023984'
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
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render(){
    return (
      <Layout >
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>See employees</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{ marginLeft: 24 }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
              display : 'grid',
              gridTemplateColumns : '40% 60%',
            }}
          >
            <EmployeeInfo employeeData={this.state.employeeData}/>
            <EmployeeExpense employeeData={this.state.employeeData}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
