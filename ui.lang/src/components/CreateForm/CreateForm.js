
import style from './CreateForm.module.css';


const CreateForm = () => {
    return (
        <main className={style['crtForm']}>
        <h1>Create an account</h1>
        <div className={style['form']}>
            <p>Full Name</p>
            <input placeholder='fullName'/>
            <p>Email</p>
            <input placeholder='email' type="email"/>
            <p>Password</p>
            <input placeholder='password' type="password"/>
            <p>Confirm Password</p>
            <input placeholder='confirmpassword' type="password"/>
        <div className={style['create-btn']}> <p>Create an account</p></div>
        </div>
        <div className={style['question']}>
            <p className={style['question-txt']}>Already have account?</p>
            <p className={style['question-link']}>Sign In</p> 
        </div>
    </main>
    )

}

export default CreateForm;