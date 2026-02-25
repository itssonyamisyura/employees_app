import { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term}) //установка локального состояния
        this.props.onUpdateSearch(term) // приходит из компонента в app
    }

   render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Search employee..."
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;