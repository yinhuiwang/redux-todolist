import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item'
import store from './../store'

export default class ContentList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        // 订阅store的改变
        store.subscribe(this._handleStoreChange);
    }

    render() {
        const {todos} = this.state;
        return (
            <ul>
                { todos.map( (value, index)=> (
                    <Item key={index} todo={value} index={index} />
                ) ) }
            </ul>
        );
    }

    _handleStoreChange = ()=>{
        // 修改state、刷新界面
        this.setState(store.getState());
    }
}