import React from 'react'
import axios from "axios"

const DeleteButton = props => {
    const onClickHandler = () => {
        if(window.confirm('Are you sure you want to delete this player?')) {
            axios.delete('http://localhost:8000/api/players/' + props.id + '/delete')
            .then(() => props.callback())
            .catch(err => console.log(err))
        }
    }

    return(
        <button onClick={onClickHandler} className='btn-danger'>Delete</button>
    )
}

export default DeleteButton;