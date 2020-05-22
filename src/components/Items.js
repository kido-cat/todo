import React, { Component } from 'react';
import '../style/Items.css' 
 
class Items extends Component{
	constructor(props){
		super(props);
		// this.state = {
		// 	dataRender: this.props.data
		// }
	}
	render(){
		// var {dataRender} = this.state;
		return <div className="Items">{this.props.data}</div>
	}
}


export default Items