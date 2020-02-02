import React from 'react';


const MainPageItems = ({label, department, id, score, onDeleted, onEdit}) => {
    return(
        
    <tr>
        <td scope="row">
            {label}
        </td>
        <td>
            {department}
        </td>
        <td>
            {score}
        </td>
        <td>
            <button 
            type="button" 
            className="btn btn-outline-success btn-sm"
            onClick={onEdit}
            >
                <i className="fa fa-pencil"/>
            </button>
            <span> </span>
            <button type="button" 
            className="btn btn-outline-danger btn-sm"
            onClick={onDeleted}>
                <i className="fa fa-trash-o"/>
            </button> 
        </td>
    </tr>
       
    );
};

export default MainPageItems
