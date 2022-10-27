
import style from './StartPage.module.css';
import Header from '../../components/Header/Header';
import GirlStart from '../../components/GirlStart/GirlStart';
import Descripton from '../../components/Description/Description';

const StartPage = () => {
    return (
        <div className={style['start-page']}>
         <Header></Header>
         <GirlStart></GirlStart>
         <Descripton></Descripton>
        </div>
    );
};

export default StartPage;