import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth'
import { Link } from 'react-router-dom'
import './Login.css'

const SignInUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({ email: '', passwd: '' })
    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }
    if (auth.user !== null) {
        return null
    }
    return (
        <>
            <div className='container'>
                <h3>Entre na sua conta:</h3>
            </div>
            {
                auth.signInUser.signInUserState.error !== '' &&
                <p>{auth.signInUser.signInUserState.error}</p>
            }

            <form id="login">
                <label>Email:</label><br />
                <input type="email" autoComplete="off" autoFocus value={form.email}
                    onChange={onChange('email')}
                    placeholder="Digite seu email" /><br />
                <label>Password:</label><br />
                <input type="password" autoComplete="off" value={form.password}
                    onChange={onChange('passwd')}
                    placeholder="Senha" /><br />

                <button onClick={() => {
                    auth.signInUser.signInUser(form.email, form.passwd)
                }} >Entrar</button>
                <div className='container'>ou</div>
                <Link to="/createUser">Crie uma conta</Link>
            </form>

        </>
    )
}

export default SignInUser