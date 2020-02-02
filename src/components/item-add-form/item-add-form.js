import React, {Component} from 'react';

export default class ItemAddForm extends Component{

    render(){
        return(
            <div className="container">
            <button 
            type="button" 
            className="btn btn-outline-primary"
            onClick={() => this.props.onItemAdded(prompt("Enter the name").toString(),prompt("Department?").toString(),prompt("and Score").toString())}>
                <i className="fa fa-plus" aria-hidden="true"></i>
                <span>     </span>
                <i className="fa fa-user" aria-hidden="true"></i>
            </button>
            </div>
        )
    }
}
