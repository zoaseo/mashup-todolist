import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlcok = styled.div`
    padding:48px 32px 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;
const TodoHead = () => {
    // context를 사용하여 state값을 반환함
    const todos = useTodoState();
    // todos배열 항목 중 done값이 false인 항목만 새 배열로 반환해서
    // undoneTasks에 담음
    const undoneTasks = todos.filter(todo => !todo.done);
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const dayname = today.toLocaleDateString('ko-KR', { weekday: 'long'});
    return (
        <TodoHeadBlcok>
            <h1>{dateString}</h1>
            <div className='day'>{dayname}</div>
            <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlcok>
    );
};

export default TodoHead;