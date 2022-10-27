
import style from './Description.module.css';


const Descripton = () => {
    return (
        <div className={style['description']}>
            <div className={style['description-txt']}>
                <p>There are many languages spoken by people in the world,
                    and each one is beautiful in its own way. However, language
                    barriers sometimes prevent people from expressing their thoughts
                    and communicating correctly.</p>
                    <p>...languages is an application that will help you determine 
                        which language the word you are looking for belongs to.</p>
                    <p>The difference in languages is no longer a barrier to communication!</p>
            </div>
            <div className={style['start-btn']}> </div>
        </div>
    )

}

export default Descripton;