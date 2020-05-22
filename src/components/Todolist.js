import React, { Component } from 'react';
import '../style/Todolist.css' 
import dotIcon from '../img/dot.svg'
import wifiIcon from '../img/wifi.svg'
import iconPin from '../img/pin.svg'
import iconList from '../img/list.svg'
import Items from './Items'
import imgEmptyData from '../img/empty1.png' 

 

class Todolist extends Component{
	constructor(){
		super();
		this.showInput = this.showInput.bind(this);
		this.hideInput = this.hideInput.bind(this);
		this.addItem = this.addItem.bind(this);
		this.state = {
			isInput: false,
			clickAdd: false,
			dataItem: []
		}

	}
	hideInput(){
		this.setState({
			isInput: false
		})
	}
	showInput(){
		this.setState({
			isInput: true,
			clickAdd: false
		})
	}
	addItem(){
		var input_add = document.getElementById('input_add');
		this.state.dataItem.push(input_add.value);
		this.setState({
			isInput: false,
			clickAdd: true,
			dataItem: this.state.dataItem
		});
	}
	render(){
		var input_add = document.getElementById('input_add');
		const {isInput} = this.state;
		const {clickAdd} = this.state;
		{/*render nothing data*/}
		
			{/*render new item*/}
		if(clickAdd){
			console.log('click add', this.state)
			return(<div className="Todolist">
			<div className="header-todo">
				<span className="header-left">
					<img src={dotIcon} alt="IconDot"/>
					<img src={dotIcon} alt="IconDot"/>
					<img src={dotIcon} alt="IconDot"/>
					<img src={dotIcon} alt="IconDot"/>
					<img src={dotIcon} alt="IconDot"/>
					<img src={wifiIcon} alt="IconDot"/>
				</span>
				<div className="header-mid">
					9:41 AM
				</div>
				<div className="header-right">
					<div className="percent-pin">100%</div>
					<div className="iconPin">
							<img src={iconPin} />
					</div>
				</div>
			</div>
			<div className="Daily-list container">
				<div className="iconList">
					<img src= {iconList} />
				</div>
				<div className="title-daily">dailist</div>
			</div> 
			<div className="upcomming container">
				{
					this.state.dataItem.map(item => {
						return <Items data={item} />	
					})
				}
			</div>
			<div className="finished">

			</div>
		 <div className="wrapper_add">
			<button onClick={this.showInput} className="btn_add">+</button>
		  </div>    
	</div>
			)
			
		}
		{/*click btn +*/}
		if(isInput){	
			console.log('click +', 	this.state)
			return (
			<div className="Todolist">
				<div className="header-todo">
					<span className="header-left">
						<img src={dotIcon} alt="IconDot"/>
						<img src={dotIcon} alt="IconDot"/>
						<img src={dotIcon} alt="IconDot"/>
						<img src={dotIcon} alt="IconDot"/>
						<img src={dotIcon} alt="IconDot"/>
						<img src={wifiIcon} alt="IconDot"/>
					</span>
					<div className="header-mid">
						9:41 AM
					</div>
					<div className="header-right">
						<div className="percent-pin">100%</div>
						<div className="iconPin">
								<img src={iconPin} />
						</div>
					</div>
				</div>
				<div className="Daily-list container">
					<div className="iconList">
						<img src= {iconList} />
					</div>
					<div className="title-daily">dailist</div>
				</div> 
 
				<div className="upcomming container">
				{
					this.state.dataItem.map(item => {
						return <Items data={item} />	
					})
				}
				</div>

				<div className="finished">

				</div>
			<div className="overlay"></div>
             <div className="wrapper_add">
                <button onClick={this.showInput} className="btn_add">+</button>
              </div>
              <div className="modal_input_add">
	              <div className="wrapper_input_add">
	              	<input id="input_add" className="input_add_item" type='text' />
	              	<button id="btn_addItem" onClick={this.addItem} className="btn_add_item">Add</button>  
	              	<button onClick={this.hideInput} className="btn_close_item">X</button>  
	              </div>
              </div>
			</div>
			)
		}

 
		 console.log('start rendẻr',this.state)
		return (
			<div className="Todolist">
				<div className="header-todo">
					<span className="header-left">
						<img src={dotIcon} alt="IconDot"/>
						<img src={dotIcon} alt="IconDot"/>
						<img src={dotIcon} alt="IconDot"/>
						<img src={dotIcon} alt="IconDot"/>
						<img src={dotIcon} alt="IconDot"/>
						<img src={wifiIcon} alt="IconDot"/>
					</span>
					<div className="header-mid">
						9:41 AM
					</div>
					<div className="header-right">
						<div className="percent-pin">100%</div>
						<div className="iconPin">
								<img src={iconPin} />
						</div>
					</div>
				</div>
				<div className="Daily-list container">
					<div className="iconList">
						<img src= {iconList} />
					</div>
					<div className="title-daily">dailist</div>
				</div> 
 
				<div className="upcomming container">
					<img src={imgEmptyData}alt="????"/>
				</div>

				<div className="finished">

				</div>
				
             <div className="wrapper_add">
                <button onClick={this.showInput} className="btn_add">+</button>
              </div>    
		</div>
		)
	}
}


export default Todolist 