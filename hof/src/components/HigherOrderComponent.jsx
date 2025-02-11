import React, { Component } from "react";

class HigherOrderComponent extends Component{
    //PROGRESSION 1
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }
    //PROGRESSION 2
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) =>(
            <React.Fragment key = {item.id}>
                <li className = "list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree */}
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type:{item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };  
    
    // display all based on usertype

    renderItems2 = (type) =>  {
        const data = this.state.userData;
        const mapRows = data.filter((item) => {
            return item.user_type === type;
        })
        .map((item) => {
            return <React.Fragment key ={item.id}>
                <li className = "list-elements">
                    <span>ID : {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type : {item.user_type}</span>
                </li>
            </React.Fragment>
        })
        return mapRows;
    }
    
    // PROGRESSION 4
    //display data starting with letter J
    renderItems3 = () => {
        const data = this.state.userData;
        const mapRows = data.filter((item) =>{
            return item.name.startsWith("J")
        })
        .map((item) =>{
            return <React.Fragment key ={item.id}>
            <li className = "list-elements">
                <span>ID : {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type : {item.user_type}</span>
            </li>
        </React.Fragment>
        })
        return mapRows;
    }
    // PROGRESSION 5
    //display data based on age
    renderItemsAge = () => {
        const data = this.state.userData;
        const mapRows = data.filter((item)=>{
            return item.age >28 && item.age<=50;
        })
        .map((item) => {
            return <React.Fragment key = {item.id}>
                <li className="list-elemenets">
                    <span>ID : {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        })
        return mapRows
    }
    //PROGRESSION 6
    //display total experince of the designers
    renderItemsExp = () =>{
        const data = this.state.userData;
        const mapRows = data.filter((item) =>{
            return item.user_type === 'Designer'
        })
        .reduce((a,b) => {
            return a.years + b.years;
        })
        return <React.Fragment>
            <li className="list-elements">
                <span>{mapRows}</span>
            </li>
        </React.Fragment>
    }
    render(){
        return(
            //insted of a parent div we can also use React.Fragment
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderItems()}</ul>
                </div>
                <h1>Display based on type</h1>
                <div className="display-box">
                    <ul>{this.renderItems2('Designer')}</ul>
                </div>
                <h1>Filter all data starting with J</h1>
                <div className="display-box">
                    <ul>{this.renderItems3()}</ul>
                </div>
                <h1>Filter data based on age greater than 28 and less than or equal to 50</h1>
                <div className="display-box">
                    <ul>{this.renderItemsAge()}</ul>
                </div>
                <h1>Find total years of the designers</h1>
                <div className="display-box">
                    <ul>{this.renderItemsExp()}</ul>
                </div>
            </React.Fragment>
        )
    };
}
export default HigherOrderComponent;