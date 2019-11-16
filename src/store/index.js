import { observable, action,toJS } from 'mobx';

class MobxAppState {
    @observable id = 0;
    @observable tasks = [];
    @observable inputName = '';

    @action.bound
    inputTask(e){
        console.log('正在输入...');
        this.inputName = e.target.value;
    };
    @action.bound
    addTask(){
        if (this.inputName === '') {
            return;
        }
        this.tasks.push({id:this.id++,title:this.inputName});
        console.log('添加一个刺杀任务！');
    };
    @action.bound
    deleteTask(index){
        this.tasks.splice(index,1);
        console.log('删除一个刺杀任务！');
    };
};

const store = new MobxAppState();

export default store;