import { FunctionComponent } from "react";
import Counter from "../defaultPage/components/Counter";
import Counter2 from "../defaultPage/components/Counter2";
import Copyright from "../defaultPage/components/Copyright";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "../defaultPage/design.css";
import "./FAQ.css"

const Questions = () => {
  const {user} = useTypedSelector((store) => store.UserReducer);
  return (
    <div className="root">
      {(user.role === "User" || user.role === "Admin") ? (
        <Counter2 />
      ) : (
        <Counter />
      )}
        <main className="promotion">
            <section className="frame-parent">
                <div className="custom-info-faq-text">
                    <h2 className="ab1">Скільки триває виведення коштів з Go1Bet?</h2>
                    <p>Тривалість процесу виведення коштів буде залежати від вашого банку. Як правило, надходження коштів відбувається в межах доби, 
                    максимальний термін в залежності від банку може становити до 10-ти днів.</p>
                    
                    <h2 className="ab2">Які бонуси доступні для нових користувачів?</h2>
                    <p>Нові користувачі можуть отримати вітальний бонус після першого поповнення рахунку. Бонус може включати додаткові кошти на ставки або безкоштовні ставки (free bets). 
                    Деталі вітального бонусу можна переглянути на сторінці акцій.</p>
                
                    <h2 className="ab3">Як стати гравцем Go1Bet? </h2>
                    <p>Щоб стати клієнтом порталу, достатньо створити обліковий запис. Процедура складається з кількох основних етапів, вам потрібно: Відкрити офіційний сайт онлайн.
                    Натиснути кнопку «Реєстрація». Вказати адресу електронної пошти та придумати надійний пароль. Підтвердити реєстрацію.</p>

                
                    <h2 className="ab4">Як вивести кошти з Go1Bet?</h2>
                    <p>Зайшовши в особистий кабінет, перейдіть в розділ «Виведення коштів» та вкажіть номер картки українського банку
                    Далі введіть суму, яку плануєте отримати, після чого натисніть кнопку «Вивести».</p>

                    <h2 className="ab5">Що таке вейджер і як він працює?</h2>
                    <p>Вейджер — це умова відігравання бонусу, яка вимагає зробити ставки на певну суму до того, як бонусні кошти можна буде вивести.</p>

                    <h2 className="ab6">Що робити, якщо я забув пароль?</h2>
                    <p>Якщо ви забули свій пароль, натисніть на посилання "Забули пароль?" на сторінці входу. Далі покроково дотримуйтеся інструцій, вказаних на сторінці.</p>

                    <h2 className="ab7">Як зв'язатися зі службою підтримки?</h2>
                    <p>Якщо у вас виникли питання або потрібна допомога, ви можете звернутися до нашої служби підтримки за допомогою eлектронної пошти support@go1bet.com;</p>
                    
                    <h2 className="ab8">Чи можна скасувати зроблену ставку?</h2>
                    <p>Після підтвердження ставки її не можна скасувати або змінити. Тому перед тим, як підтвердити ставку, переконайтеся, що всі дані введені правильно.</p>
                
                    <h2 className="ab9">Чи можуть неповнолітні грати на Go1Bet?</h2>
                    <p>Ні. Go1Bet суворо дотримується правил захисту неповнолітніх і не дозволяє реєстрацію або участь в азартних іграх особам, 
                    які не досягли повноліття відповідно до законодавства їхньої країни.</p>
                </div>
                <div>
                    <p className="g1">Ми прагнемо забезпечити комфортну гру для наших користувачів. Якщо у вас виникли додаткові питання, не соромтеся звертатися до нашої служби підтримки.</p>
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

export default Questions;