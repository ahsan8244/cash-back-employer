import React,{Component} from 'react';
import './Element.css';

class Element extends Component{

    constructor(){
        super();
        this.state = {
            isExpanded : false,
            isClosed : true
        }
    }

    Expanded = () => {
        this.setState(
            {
                isExpanded : true,
                isClosed : false
            }
        )
    }

    Closed = () => {
        this.setState(
            {
                isExpanded:false,
                isClosed : true
            }
        )
    }

    render(){
        const isExpanded = this.state.isExpanded;
        if(!isExpanded){
            return(
                <div className="Element" style={{display : 'grid',gridTemplateColumns : '80% 20%'}}>
                    <p style={{ margin : '10px',fontWeight:'bold',fontSize : '16px'}}>{this.props.item.Title}</p>
                    <input type="submit" value="Expand" onClick={this.Expanded} className="Expand"/>
                </div>
            );
        }
        else {
            return(
                <div className="Container" style={{display:'grid',gridTemplateRows:'20% 80%'}}>
                    <p style={{ margin : '10px',fontWeight:'bold',fontSize : '16px'}}>{this.props.item.Title}</p>
                    <div style={{justifySelf:'center',display : 'grid', gridTemplateRows:'repeat(4,1fr)',width : '80%', borderRadius : '15px', border : '1px solid #000',backgroundColor :'#656c78'}}>
                        <p style={pStyle}>Expense : {this.props.item.Expense}</p>
                        <p style={pStyle}>Date : {this.props.item.Date}</p>
                        <p style={pStyle}>Details : {this.props.item.Details}</p>
                        <div className="Element" style={{display : 'grid',gridTemplateColumns : '80% 20%',gridRow : '4/5'}}>
                            <p style={pStyle}>ID : {this.props.item.id}</p>
                            <input type="submit" value="Close" onClick={this.Closed} className="Close"/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const pStyle = {
    margin : '10px'
}

export default Element;

/*
(<div className="Element" style={{display : 'grid',gridTemplateColumns : '80% 20%'}}>
            <p style={{ margin : '10px'}}>{this.props.item.Title}</p>
            <input type="submit" value="Expand" onClick={this.Expanded}/>
          </div>)
          */
