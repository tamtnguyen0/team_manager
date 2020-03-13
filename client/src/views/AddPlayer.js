import React, {useState} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'

const AddPlayer = () => {
    const [input, setInput] = useState({name: '', pref_pos: ''})
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/create', {...input})
            .then(() => navigate('/players/list'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    return (
        <div className='m-3 p-2' style={{border: '2px solid black'}}>
            <div className='container text-left mb-1'>
                <Link to='/players/list' className='h3'>List</Link> <span className='h3'> | </span>
                <Link to='/players/add' className='h3'>Add Player</Link>
            </div>

            <div className='mt-2 p-3'>
                <h3 className='text-left'>Add Player</h3>

                {errors && errors.map((error, i) => (
                    <p className='text-left' key={i} style={{color: 'red'}}>{error}</p>
                ))}

                {input.name.length === 1 ? <p className='text-left' style={{color: 'red'}}>Name must be at least 2 characters long</p> : null}

                <form onSubmit={onSubmitHandler}>
                    <input type="text"
                           className='form-control'
                           onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                           name='name'
                           placeholder='Player Name'
                    />
                    <input type="text"
                           className="form-control mt-2"
                           onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                           name='pref_pos'
                           placeholder='Preferred Position (optional)'
                    />
                    {input.name.length < 2 
                        ? <button type='submit' className="btn btn-primary mt-2" disabled>Add</button> 
                        : <button type='submit' className="btn btn-primary mt-2">Add</button>
                    }

                </form>

            </div>
        </div>
    )
}

export default AddPlayer;