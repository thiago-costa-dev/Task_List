import React, { Component } from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Task.css';

export default class Task extends Component {
    render() {
        return (
            <li className="task_item">
                {this.props.task}
                <span className="task_handles">
                    <FaEdit className="handle_edit" onClick={e => this.props.handleEdit(e, this.props.index)} />
                    <FaWindowClose onClick={e => this.props.handleDelete(e, this.props.index) } className="handle_delete" />
                </span>
            </li>
        );
    }
}