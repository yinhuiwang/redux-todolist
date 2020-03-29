import React, { Component } from 'react'

export default class FromSK extends Component{
    constructor(props){
        super(props);
        this.state = { name: '', hobby: 'mv', select: 'vue', checkedAll: false, checkedValue: ['yhWang'], radio: 'man', email: '',
            error: {nameError: '', emailError: ''}
        }
    };

    render(){
        let { name, hobby, select, checkedAll, radio, email, error } = this.state;
        return (
            <div>
                <form action="" onSubmit={ e=>this.formSubmit(e) }>
                    <p>
                        <label htmlFor="nameId">姓名：</label>
                        <input value={name} name="name" id ="nameId" onChange={ e=>this.fromChangeCommon('name', e) } onBlur={ e=>this.fromErrorCommon('name') }/>
                        {error.nameError ? <span>{error.nameError}</span> : null}
                    </p>
                    <p>
                        <label htmlFor="emailId">邮箱</label>
                        <input id="emailId" name="email" value={email} onChange={ e=>this.fromChangeCommon('email', e) } onBlur={ e=>this.fromErrorCommon('email') }/>
                        {error.emailError ? <span>{error.emailError}</span> : null}
                    </p>
                    <p>
                        <label htmlFor="hobbyId">爱好：</label>
                        <textarea value={hobby} name="hobby" id ="hobbyId" onChange={  e=>this.fromChangeCommon('hobby', e) } />
                    </p>
                    <p>
                        <label htmlFor="hobbyId">下拉框选择：</label>
                        <select value={select} onChange={ e=>this.fromChangeCommon('select', e) }>
                            <option value="">请选择...</option>
                            <option value="react">reactJs</option>
                            <option value="vue">vueJs</option>
                        </select>
                    </p>
                    <p>
                        <label>
                            是否全选：<input type="checkbox" checked={checkedAll} onChange={ e=>this.fromChangeCommon('checkedAll', e, 'checked') }/>
                        </label>
                    </p>
                    <p>
                        <label>王银辉：<input type="checkbox" name="checkbox" onChange={ e=>this.checkboxChecked(e) } value="yhWang" defaultChecked={true}/></label>
                        <label>蔡丽槟：<input type="checkbox" name="checkbox" onChange={ e=>this.checkboxChecked(e) } value="lbCai"/></label>
                        <label>谭香妮：<input type="checkbox" name="checkbox" onChange={ e=>this.checkboxChecked(e) } value="xnTan"/></label>
                    </p>
                    <p>
                        <label>
                            男：<input type="radio" name="radio" value='man' checked={ radio === 'man' } onChange={ e => this.fromChangeCommon('radio', e) } />
                        </label>
                        <label>
                            女：<input type="radio" name="radio" value="woman" checked={ radio === 'woman' } onChange={ e => this.fromChangeCommon('radio', e) } />
                        </label>
                    </p>
                    <button type="submit">提交</button>
                    <button type="reset">重置</button>
                </form>
            </div>
        )
    };
    fromErrorCommon(field){
        const {name, email, error} = this.state;
        // 当field为空时，可以校验name
        if(!field || field === 'name'){
            name ? error.nameError = null : error.nameError = '请输入姓名';
        }
        if(!field || field === 'email'){
            let rex = /^[-\w]+@[-\w]+(\.[-\w]+)+$/;
            rex.test(email) ? error.nameError = null : error.emailError = '请输入符合正确的邮箱号';
        }
        this.setState({error});

        // 迭代判断error是否存在值，如果存在则校验未通过。
        for (let errorKey in error){
            if(error[errorKey]){
                return false;
            }
        }
        return true;
    };
    fromChangeCommon(field, event, valueFiled) {
        // ES6以后的写法
        this.setState(  { [field]: event.target[valueFiled || 'value'] }  );
    };
    checkboxChecked(event){
        let checkedValue = this.state.checkedValue,
            value = event.target.value,
            checked = event.target.checked;
        checked ? checkedValue.unshift(value) : checkedValue.splice(checkedValue.indexOf(value), 1);
        this.setState({checkedValue: checkedValue})
    }
    formSubmit(event){
        event.preventDefault(); // 阻止表单的默认行为（点击submit按钮时，自动触发form表单提交，刷新页面）
        // 提交表单时校验数据
        if(!this.fromErrorCommon()){
            return false;
        }
        console.log("数据填写正确，提交表单数据至服务器！", this.state);
    }
    showData(){
        console.info(this.state);
    }


}