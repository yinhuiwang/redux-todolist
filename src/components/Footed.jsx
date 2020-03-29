import React, { Component } from 'react'
import store from './../store'
import { getUpdateAllTodosFlagAction, getDeleteTodosByFlagAction } from './../store/actionCreators';

export default class Footed extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        // 订阅store的改变
        store.subscribe(this._handleStoreChange);
    }

    render() {
        const {todos, flagCount} = this.state;

        return (
            <div>
                <span >全选：<input type="checkbox" checked={todos.length && flagCount === todos.length } onChange={ e=>this._updateAllTodosFlag(e) } /></span>
                <span >说明信息：{flagCount} / {todos.length}</span>
                <button type="button" onClick={ ()=>store.dispatch(getDeleteTodosByFlagAction()) }>清除已完成的任务</button>
            </div>
        );
    }

    _updateAllTodosFlag = (event)=>{
        store.dispatch(getUpdateAllTodosFlagAction(event.target.checked));
    };

    _handleStoreChange = ()=>{
        // 修改state、刷新界面
        this.setState(store.getState());
    }
}