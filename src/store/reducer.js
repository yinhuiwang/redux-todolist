import { DEL_TODO, ADD_TODO, CHECKED_TODO, UPDATE_ALL_TODOS_FLAG, DELETE_TODOS_BY_FLAG } from './actionTypes'

const defaultState = {
    todos: [
        {title: '学习react', flag: false},
        {title: '写案例', flag: false},
        {title: '综合复习', flag: false},
        {title: 'xx', flag: false}
    ],
    flagCount: 0
};

export default (store = defaultState, action)=>{
    const newStore = Object.assign({}, store);
    // 删除一条todo
    if(action.type === DEL_TODO){
        let flagCount = 0;
        // 删除对应数据
        newStore.todos.splice(action.todoId, 1);
        // 处理选中
        newStore.todos.forEach((item)=>{
            if(item.flag){
                flagCount++;
            }
        });
        newStore.flagCount = flagCount;
        return newStore     // 返回newStore
    }else if(action.type === ADD_TODO){
        newStore.todos.unshift(action.todo);
        return newStore
    }else if(action.type === CHECKED_TODO){
        // 获取数据
        let flagCount = 0;
        // 根据index修改flag
        newStore.todos[action.todoId].flag = action.flag;
        // 处理选中
        newStore.todos.forEach((item)=>{
            if(item.flag){
                flagCount++;
            }
        });
        newStore.flagCount = flagCount;
        return newStore     // 返回newStore
    }else if(action.type === UPDATE_ALL_TODOS_FLAG){
        let flagCount = 0;
        newStore.todos.forEach((value)=>{
            value.flag = action.flag;
        });
        // 处理选中
        newStore.todos.forEach((item)=>{
            if(item.flag){
                flagCount++;
            }
        });
        newStore.flagCount = flagCount;
        return newStore     // 返回newStore
    }else if(action.type === DELETE_TODOS_BY_FLAG){
        let flagCount = 0;
        // 获取todo.flag为true的内容，填充this.state
        newStore.todos = newStore.todos.filter(value =>{
            return !value.flag
        });
        // 处理选中
        newStore.todos.forEach((item)=>{
            if(item.flag){
                flagCount++;
            }
        });
        newStore.flagCount = flagCount;
        return newStore     // 返回newStore
    }

    return store;
}