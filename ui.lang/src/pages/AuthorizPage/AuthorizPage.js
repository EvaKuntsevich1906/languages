
import style from './AuthorizPage.module.css';
import Header from '../../components/Header/Header';
import GirlWithPlanet from '../../components/GirlWithPlanet/GirlWithPlanet';
import AuthorizForm from '../../components/AuthorizForm/AuthorizForm';
const AuthorizPage = () => {
    return (
        <div className={style['authoriz-page']}>
            <Header></Header>
            <main>
                <AuthorizForm></AuthorizForm>
                <div className={style['image']}><GirlWithPlanet></GirlWithPlanet></div>
            </main>

        </div>
    );
};

export default AuthorizPage;