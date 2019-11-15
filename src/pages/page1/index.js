import React,{ useState } from 'react';
import { observer } from 'mobx-react';

function Page1() {
    // // 有任务与没有任何模板
    // const haveTasks = liData.map(li => (
    //     <li key={li.title}>
    //         {
    //             li.title
    //         }
    //     </li>
    // ));
    // const noTasks = <li>目前没有刺杀任务！</li>
    // // 判断是否有任务
    // function ifTasks() {
    //     if (liData.length <= 0) {
    //         return noTasks;
    //     } else {
    //         return haveTasks;
    //     }
    // };
    return (
        <div className="page1">
            <p>刺杀小队任务列表</p>
            <input type="text" placeholder=">请输入任务" /><button>添加任务</button>
            <ul className="ulWrap">
                {/* {ifTasks()} */}
            </ul>
        </div>
    )
}

export default Page1;