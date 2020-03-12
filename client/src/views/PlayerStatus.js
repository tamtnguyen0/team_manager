import React, { useEffect, useState } from 'react'
import {Link} from '@reach/router'
import axios from 'axios'

const PlayerStatus = props => {
    const [players, setState] = useState([])
    const [clicked, setClicked] = useState(false)
    const {id} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setState(res.data))
            .catch(err => console.log(err))
    }, [clicked])

    const onClickHandler = (e, player) => {
        let temp = {...player};
        temp['status']['game' + id] = e.target.value;
        axios.put('http://localhost:8000/api/players/' + player._id + '/update', temp)
            .then(() => setClicked(!clicked))
            .catch(err => console.log(err));
    }

    return (
        <div className='m-3 p-2' style={{border: '2px solid black'}}>
            <h1>Player Status - Game {id}</h1>

            <Link className='h3' to='/status/game/1'>Game 1</Link> <span className='h3'> | </span>
            <Link className='h3' to='/status/game/2'>Game 2</Link> <span className='h3'> | </span>
            <Link className='h3' to='/status/game/3'>Game 3</Link>

            <table className='table mt-4'>
                <thead>
                    <tr>
                        <th className='text-left' >Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players && players.map((player, i) => (
                        <tr key={i}>
                            <td className='text-left'>{player.name}</td>
                            <td className='pl-5'>
                                <button style={{border: '1px solid black',
                                                margin: '0px 5px',
                                                padding: '0px 15px',
                                                boxShadow: '1px 1px black',
                                                backgroundColor: player['status']['game'+id] === 'Playing' ? 'green' : 'ghostwhite',
                                                color: player['status']['game'+id] === 'Playing' ? 'white' : 'black'
                                            }}
                                        onClick={(e) => onClickHandler(e, player)}
                                        value='Playing'
                                >Playing</button>

                                <button style={{border: '1px solid black',
                                                margin: '0px 5px',
                                                padding: '0px 15px',
                                                boxShadow: '1px 1px black',
                                                backgroundColor: player['status']['game'+id] === 'Not Playing' ? 'red' : 'ghostwhite',
                                                color: player['status']['game'+id] === 'Not Playing' ? 'white' : 'black'
                                            }}
                                        onClick={(e) => onClickHandler(e, player)}
                                        value='Not Playing'
                                >Not Playing</button>

                                <button style={{border: '1px solid black',
                                                margin: '0px 5px',
                                                padding: '0px 15px',
                                                boxShadow: '1px 1px black',
                                                backgroundColor: player['status']['game'+id] === 'Undecided' ? 'yellow' : 'ghostwhite',
                                            }}
                                        onClick={(e) => onClickHandler(e, player)}
                                        value='Undecided'
                                >Undecided</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerStatus;