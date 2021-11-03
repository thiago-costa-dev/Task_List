import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="form" action="#">
                <input onInput={this.props.handleInput} type="text" className="task_input" value={this.props.newTask} />
                <button type="submit" className="submit_button"><FaPlus /></button>
            </form>
        );
    }
}