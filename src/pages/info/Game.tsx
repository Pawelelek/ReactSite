import { FunctionComponent } from "react";
import Counter from "../defaultPage/components/Counter";
import Counter2 from "../defaultPage/components/Counter2";
import Copyright from "../defaultPage/components/Copyright";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "../defaultPage/design.css";
import "./Game.css"

const Game = () => {
  const {user} = useTypedSelector((store: any) => store.UserReducer);
  return (
    <div className="root">
      {(user.role === "User" || user.role === "Admin") ? (
        <Counter2 />
      ) : (
        <Counter />
      )}
        <main className="promotion">
            <section className="frame-parent">
                <div>
                    <p className="g1">Компанія Go1Bet зобов'язується підтримувати принципи відповідальної гри та сприяти створенню безпечного середовища для всіх користувачів платформи. 
                    Ми розуміємо, що азартні ігри можуть бути формою розваги, але також визнаємо потенційні ризики, пов'язані з азартною залежністю. Тому Go1Bet прагне забезпечити, щоб користувачі насолоджувались грою з відповідальністю та усвідомленням можливих наслідків.</p>
                </div>
                <div className="custom-info-game-text">
                    <h2 className="ab1">Наші зобов'язання щодо відповідальної гри</h2>
                    <p>Go1Bet прагне:</p>
                    <p>• Забезпечити безпечний та відповідальний доступ до азартних ігор.</p>
                    <p>• Захищати неповнолітніх від доступу до азартних ігор.</p>
                    <p>• Надавати інформацію про можливі ризики азартних ігор та шляхи отримання допомоги при виникненні проблем з гральною залежністю.</p>
                    
                    <h2 className="ab2">Попередження неповнолітніх</h2>
                    <p>Go1Bet суворо дотримується правил щодо запобігання доступу до азартних ігор неповнолітніх. 
                    Реєстрація та участь у грі дозволяється лише особам, які досягли віку, визначеного законодавством їхньої країни для участі в азартних іграх. 
                    Ми проводимо перевірки віку та вживаємо відповідних заходів для захисту неповнолітніх від участі в іграх.</p>
                
                    <h2 className="ab3">Ознаки проблемної гри</h2>
                    <p>Go1Bet нагадує користувачам про ознаки проблемної гри та радить звертати увагу на наступне:</p>
                    <p>• Постійне збільшення суми ставок для досягнення задоволення від гри.</p>
                    <p>• Відчуття занепокоєння або дратівливості при спробах припинити або скоротити участь у грі.</p>
                    <p>• Витрати на гру перевищують фінансові можливості.</p>
                    <p>• Проблеми в особистому або професійному житті через азартні ігри.</p>


                    <h2 className="ab4">Відповідальна гра – це ваш вибір</h2>
                    <p>Go1Bet закликає всіх користувачів грати відповідально, не перевищувати своїх фінансових можливостей і пам'ятати, що азартні ігри повинні бути формою розваги, а не способом заробітку. 
                    Ми створюємо умови, щоб ваша гра була безпечною, контрольованою та відповідальною.</p>
                </div>
                <Copyright />
                <div className="back-to-top">
                    <div className="back-to-top-container">
                    <div className="back-to-top-content">
                        <div className="div">21+</div>
                    </div>
                    <div className="brand-name">
                        <div className="gobet">2024 GO1BET</div>
                    </div>
                    </div>
                </div>
            </section>
      </main>
    </div>
  );
};

export default Game;