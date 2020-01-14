import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Link } from 'react-router-dom'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css'

function Header() {
    const auth = useContext(AuthContext)
    return (
        <header>
            <div className='container'>
                <div className='div'>
                    <h1>ComentaKi</h1>
                    <p>
                        <Link to='/UserInfo'>Perfil</Link>
                        <button onClick={auth.signout}>Sair!</button>
                    </p>

                </div>
            </div>
        </header>
    )
}
export default Header