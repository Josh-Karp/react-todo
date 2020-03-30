import React from 'react';

import InputForm from '../../components/InputForm.js';
import List from '../../components/List';
import Header from '../../components/Header.js';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            pendingItem: ''
        };
    }

    handleItemInput = e => {
        this.setState(
            { pendingItem: e.target.value }
        );
    };

    newItemSubmitHandler = e => {
        e.preventDefault();
        this.setState({
            list: [
                {
                    name: this.state.pendingItem,
                },
                ...this.state.list
            ],
            pendingItem: ""
        });
    };

    handleRemove = index => {
        const newState = this.state.list.filter(item =>
            this.state.list.indexOf(item) !== index
        );

        this.setState({
            list: newState
        });
    };

    render() {
        return (
            <main className="toDoList">
                <div className="wrapper">
                    <Header />
                    <InputForm
                        className="input"
                        type="text"
                        newItemSubmitHandler={this.newItemSubmitHandler}
                        handleItemInput={this.handleItemInput}
                        pendingItem={this.state.pendingItem}
                        placeholder="Add an item"
                    />

                    <List
                        list={this.state.list}
                        handleRemove={this.handleRemove}
                    />
                </div>
            </main>
        );
    }
}

export default ToDoList;