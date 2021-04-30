import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';


import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();

     
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (  
        <>
        
        <div className="task-details-container">
             <h2 className="title-details">{params.taskTitle}</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iste delectus? Pariatur enim qui quia odit cum. Quas quae, facilis autem necessitatibus distinctio sunt quibusdam dolorum aspernatur iusto saepe magnam.</p>
        </div>
        <div className="back-button-container" onClick={handleBackButtonClick}>
            <Button>Voltar</Button>
        </div>
        </>
    );
}
 
export default TaskDetails;