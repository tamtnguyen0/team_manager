import React, {useState, useEffect} from 'react'
import {Link} from '@reach/router'
import axios from "axios"
import DeleteButton from '../components/DeleteButton'

const ShowPlayers = () => {
    const [players, setPlayers] = useState([])

    const getPlayers = () => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPlayers();
    }, [])

    return(
        <div className='m-3 p-2' style={{border: '2px solid black'}}>
            <div className='container text-left mb-1'>
                <Link to='/players/list' className='h3'>List</Link> <span className='h3'> | </span>
                <Link to='/players/add' className='h3'>Add Player</Link>
            </div>
            <table className='table mt-4'>
                <thead>
                    <tr className='text-left'>
                        <th>Player</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players && players.map((player, i) => (
                        <tr className='text-left' key={i}>
                            <td>{player.name}</td>
                            <td>{player.pref_pos ? player.pref_pos : ''}</td>
                            <td><DeleteButton id={player._id} callback={getPlayers}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowPlayers;