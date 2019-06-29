import React from 'react';
import { Card, Icon, List, Button } from 'antd';

const { Meta } = Card;
const ButtonGroup = Button.Group;


class EmployeeInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employeeIndex : 0
        };
    }


    buttonPrevious = () =>{
        if(this.state.employeeIndex === 0 )
            {return;}
        else {
            this.setState({employeeIndex : this.state.employeeIndex - 1})
        }
    }

    buttonNext = () =>{
        if(this.state.employeeIndex === (this.props.employeeData.length-1) )
            {return;}
        else {
            this.setState({employeeIndex : this.state.employeeIndex+1})
        }
    }

    render(){
        return (
            <Card
            style={{textAlign : 'center', width: 350, backgroundColor : '#649cfa',borderRadius : '15px'}}
            cover={
              <img
                alt="example"
                src={this.props.employeeData[this.state.employeeIndex][0]}
                style={{width: 200, height : 200, borderRadius: '50%',margin: '5% 75px',border:'2px solid #636570'}}
              />
            }

              >
                <List
                  size="small"
                  bordered
                  dataSource={this.props.employeeData[this.state.employeeIndex].slice(1,5)}
                  renderItem={item => <List.Item>{item}</List.Item>}
                  style={{border : '2px solid #00163b',fontSize : '18px',color : '#000'}}
                />
                <ButtonGroup style={{marginTop : '20px'}}>
                  <Button type="primary" onClick={this.buttonPrevious}>
                    <Icon type="left" />
                  </Button>
                  <Button type="primary" onClick={this.buttonNext}>
                    <Icon type="right" />
                  </Button>
                </ButtonGroup>
          </Card>
        )
    }
}

export default EmployeeInfo;
