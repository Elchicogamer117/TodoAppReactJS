import react from "react";
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import {faCircleCheck, faTrash} from '@fortawesome/free-solid-svg-icons';



function TodoItem(props){
    
    return(
        <li className="TodoItem">
            <button
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <FontAwesomeIcon icon={faCircleCheck} /> 
            </button>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <button
                className="Icon Icon-delete"
                onClick={props.onDeleate}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    );
}

export { TodoItem };