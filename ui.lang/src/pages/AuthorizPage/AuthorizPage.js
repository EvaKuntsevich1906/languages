
import style from './AuthorizPage.module.css';
import Header from '../../components/Header/Header';
import GirlWithPlanet from '../../components/GirlWithPlanet/GirlWithPlanet';

const AuthorizPage = () => {
    return (
        <div className={style['authoriz-page']}>
            <Header></Header>
            <main>
                <CreateForm></CreateForm>
                <div className={style['image']}><GirlWithPlanet></GirlWithPlanet></div>
            </main>

        </div>
    );
};

export default AuthorizPage;