import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import './App.css';
import Task from './components/Task/index';
import Form from './components/Form/index';

export default class App extends Component {
    state = { 
        newTask: "",
        tasks: [],
        editing: {
            isEditing: false,
            index: 0
        }
    }

    handleInput = (e) => {
        let { newTask } = this.state;
        newTask = e.target.value;

        this.setState({ newTask });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {tasks} = this.state;
        let {newTask} = this.state;
        newTask = newTask.trim();

        if (tasks.indexOf(newTask) !== -1 || newTask === "") return;

        if (this.state.editing.isEditing) {
            tasks[this.state.editing.index] = newTask;
            this.setState({
                tasks,
                newTask: "",
                editing: { isEditing: false }
            });

            return;
        }

        this.setState({ 
            tasks: [...tasks, newTask],
            newTask: ""
        });
    }

    handleEdit = (e, index) => {
        this.setState({  
            newTask: this.state.tasks[index], 
            editing: { isEditing: true, index } 
        });
    }

    handleDelete = (e, index) => {
        const { tasks } = this.state;
        tasks.splice(index, 1);

        this.setState({ tasks });
    }

    render = () => {
        return (
            <main className="main_container">
                <h1 className="main_title">Tasks List</h1>
                
                <Form 
                    handleInput = {this.handleInput}
                    handleSubmit = {this.handleSubmit}
                    newTask = {this.state.newTask}
                />

                <Task 
                    tasks = {this.state.tasks}
                    handleEdit = {this.handleEdit}
                    handleDelete = {this.handleDelete}
                />
            </main>
        );
    }
}