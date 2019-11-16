import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import store from '../../store';

function LiComponent(props) {
    const { tasks,deleteTask } = props;
    // 有刺杀任务
    const haveTasks = tasks.map((li, index) => (
        <li key={li.id}>
            <span>
                {
                    li.title
                }
            </span>
            <button onClick={() => deleteTask(index)}>删除</button>
        </li>
    ));
    // 没有刺杀任务
    const noTasks = <li>目前没有刺杀任务！</li>;
    // 判断是否有刺杀任务
    function ifTasks() {
        if (tasks.length <= 0) {
            return noTasks;
        } else {
            return haveTasks;
        }
    };
    return (
        <ul className="ulWrap">
            {ifTasks()}
        </ul>
    )
};

const UlComponent = observer(({ store }) => {
    // console.log(store)
    const { inputTask, addTask, tasks, deleteTask } = store;
    return (
        <div className="page1">
            <p>刺杀小队任务列表</p>
            <input
                type="text"
                placeholder=">请输入任务"
                onChange={(e) => inputTask(e)}
            />
            <button 
                onClick={() => addTask()}
            >
                添加任务
            </button>
            <LiComponent
                tasks={toJS(tasks)}
                deleteTask={deleteTask}
            />
        </div>
    );
});

function Page1() {
    return (
        <UlComponent store={store} />
    )
};

export default Page1;