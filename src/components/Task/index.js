import React, { Component } from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Task.css';

export default class Task extends Component {
    render() {
        return (
            <ul className="task_list">
                {this.props.tasks.map((task, index) => {
                    return (
                        <li key={index} className="task_item">
                            {task}
                            <span className="task_handles">
                                <FaEdit className="handle_edit" onClick={e => this.props.handleEdit(e, index)} />
                                <FaWindowClose onClick={e => this.props.handleDelete(e, index) } className="handle_delete" />
                            </span>
                        </li>
                    );
                })}
            </ul>
        );
    }
}