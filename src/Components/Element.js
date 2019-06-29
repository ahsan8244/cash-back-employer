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
                <div className="Container" style={{display:'grid',gridTemplateRows:'10% 90%'}}>
                    <p style={{ margin : '10px',fontWeight:'bold',fontSize : '16px'}}>{this.props.item.Title}</p>
                    <div style={{margin : '0 5% 0 10%' , display : 'grid', gridTemplateRows:'repeat(2,(100/9)%) auto (100/9)%',width : '85%', borderRadius : '15px', border : '1px solid #000',backgroundColor :'#656c78'}}>
                        <p style={pStyle}>Total Expense : {this.props.item.Expense}</p>
                        <p style={pStyle}>Date : {this.props.item.Date}</p>
                        <div style={{gridRow : '3/4', display : 'grid', gridTemplateRows : 'repeat(6,15%) 10%'}}>
                            <p style={pStyle}>Details : </p>
                            <div style={pStyle2}><p style={styleLeft}>2 Salmon Mentai : </p><p style={styleRight}>{this.props.item.Details['2 Salmon Mentai']}</p> </div>
                            <div style={pStyle2}><p style={styleLeft}>1 Tuna Roll : </p><p style={styleRight}>{this.props.item.Details['1 Tuna Roll']}</p></div>
                            <div style={pStyle2}><p style={styleLeft}>2 Special Japanese Sake : </p><p style={styleRight}>{this.props.item.Details['2 Special Japanese Sake']}</p></div>
                            <div style={pStyle2}><p style={styleLeftB}>2 Oriental Mango Dessert : </p><p style={styleRightB}>{this.props.item.Details['2 Oriental Mango Dessert']}</p></div>
                            <div style={pStyle2Special}><p style={styleLeft}>Grand Total : </p><p style={styleRight}>JPY 18587.5</p></div>

                        </div>
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

const pStyle2 = {
    margin : '10px',
    marginLeft : '60px',
    display : 'grid',
    gridTemplateColumns : '75% 25%'
}

const pStyle2Special = {
    margin : '10px',
    marginLeft : '60px',
    display : 'grid',
    gridTemplateColumns : '75% 25%',
    marginTop : 0,
}

const styleLeft = {
    alignSelf : 'start'
}

const styleLeftB = {
    alignSelf : 'start',
    borderBottom : '1px solid #000'
}


const styleRight = {
    alignSelf : 'end'
}

const styleRightB = {
    alignSelf : 'end',
    borderBottom : '1px solid #000'
}

export default Element;

/*
(<div className="Element" style={{display : 'grid',gridTemplateColumns : '80% 20%'}}>
            <p style={{ margin : '10px'}}>{this.props.item.Title}</p>
            <input type="submit" value="Expand" onClick={this.Expanded}/>
          </div>)
          */
