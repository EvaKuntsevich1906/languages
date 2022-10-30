
import style from './RegisterPage.module.css';
import Header from '../../components/Header/Header';
import CreateForm from '../../components/CreateForm/CreateForm';
import GirlWithPlanet from '../../components/GirlWithPlanet/GirlWithPlanet';

const RegisterPage = () => {
    return (
        <div className={style['register-page']}>
            <Header></Header>
            <main>
                <CreateForm></CreateForm>
                <div className={style['image']}><GirlWithPlanet></GirlWithPlanet></div>
            </main>

        </div>
    );
};

export default RegisterPage;