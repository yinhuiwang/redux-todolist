import React, {Component} from 'react';
import PropTypes from 'prop-types';

import store from './../store';
import { getDelTodoAction, getCheckedTodoAction } from './../store/actionCreators';

export default class Item extends Component{
    constructor(props){
        super(props);
        this.state = { isShowDelBtn: 'none' }
    }

    /* 定义props属性类型 */
    static propTypes = {
        todo: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    };

    render() {
        const { todo, index } = this.props;
        const { isShowDelBtn } = this.state;
        return (
        <li onMouseOver={()=> this._showBtn(true)}
            onMouseOut={()=> this._showBtn(false)}>
            <input type="checkbox" onChange={ ()=>{ store.dispatch(getCheckedTodoAction(index, !todo.flag)) } } checked={ todo.flag }/>
            <label >{todo.title}</label>
            <button type="button"
                onClick={ index=>store.dispatch(getDelTodoAction(index)) }
                style={{display: isShowDelBtn}}>删除</button>
        </li>
        );
    }

    _showBtn(flag){
        this.setState( {isShowDelBtn: flag ? 'initial' : 'none'} );
    }
}
