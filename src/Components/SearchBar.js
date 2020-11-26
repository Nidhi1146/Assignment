import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	}

	handleChange = (e) => {
		this.setState({value: e.target.value});
	}

	handleOnClick = (e) => {
		e.preventDefault();
		if (this.state.value.trim()) {
			this.props.getCity(this.state.value);
			this.setState({value:''});
		}
	}
	
  render() {
    return (
      <div className='SearchBar shadow'>
        <input type='text' value={this.state.value} onChange={(e)=>{this.handleChange(e)}} placeholder='Searh for City....' />
        <button onClick={(e)=>{this.handleOnClick(e)}}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
