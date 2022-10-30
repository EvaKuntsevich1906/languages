
import style from './RegisterPage.module.css';
import Header from '../../components/Header/Header';
import CreateForm from '../../components/CreateForm/CreateForm';

const RegisterPage = () => {
    return (
        <div className={style['register-page']}>
            <Header></Header>
            <CreateForm></CreateForm>
        </div>
    );
};

export default RegisterPage;