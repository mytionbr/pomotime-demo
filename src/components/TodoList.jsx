import { Card, CardHeader } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';
import React from 'react'
import TasksForm from './tasksBoard/TasksForm';
import TasksTodoList from './tasksBoard/TasksTodoList';

const RootStyled = styled(Card)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    "&>*":{
        margin: '5px'
    },
    borderRadius: theme.shape.borderRadiusSm,
    boxShadow: theme.customShadows.z20,
    margin: '0 auto',
    width: theme.breakpoints.values.sm,
    border:`${theme.spacing(0.2)} solid ${grey[300]}`
    
 }));

export default function TodoList({tasks,handleChangeTask}) {
    return (
        <RootStyled>
            <CardHeader 
                title="Lista de tarefas"
                subheader='Modo livre'
            />
            <TasksForm handleAddTask={handleChangeTask}/>
             <TasksTodoList tasks={tasks} />
        </RootStyled>
    )
}
