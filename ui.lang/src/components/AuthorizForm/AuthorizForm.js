
import style from './AuthorizForm.module.css';


const AuthorizForm = () => {
    return (
        <main className={style['authForm']}>
        <h1>Sign In</h1>
        <div className={style['form']}>
            <p>Email</p> 
            <input placeholder='email' type="email"/>
            <p>Password</p>
            <input placeholder='password' type="password"/>
        <div className={style['signIn-btn']}> <p>Sign In</p></div>
        </div>
    </main>
    )

}

export default AuthorizForm;