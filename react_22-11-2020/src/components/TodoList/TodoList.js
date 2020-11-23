import React,{ useState, useEffect } from 'react'
import { List } from 'antd';

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        setTodoList([
            {
                id: 1,
                task: "Do homework"
            },
            {
                id: 2,
                task: "Do 2"
            },
            {
                id: 3,
                task: "Do 3"
            },
            {
                id: 4,
                task: "Do 4"
            },
        ]);

    }, []);

    return (
        <div style={{display:`flex` , justifyContent: `center`}}>
            
            <List
                style={{ width: `450px`}}
                header={<div>Todo List Page</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={todoList}
                renderItem={todo => (
                    <List.Item>
                        {todo.task}
                    </List.Item>
                )}
             />
        </div>
    )
}
