import { FunctionComponent } from "react";
import Counter from "../defaultPage/components/Counter";
import Counter2 from "../defaultPage/components/Counter2";
import Copyright from "../defaultPage/components/Copyright";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "../defaultPage/design.css";
import "./Contacts.css"

const Contacts = () => {
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
                    <p className="g1">Команда Go1Bet завжди готова допомогти вам з будь-якими питаннями або проблемами, що можуть виникнути під час користування нашою платформою. 
                    Ми прагнемо забезпечити високий рівень обслуговування та надавати вам швидку й ефективну підтримку.</p>
                </div>
                <div className="custom-info-contacts-text">
                    <h2 className="ab1">Як ви можете зв'язатися з нами:</h2>
                    <p>• <b>Електронна пошта</b></p>
                    <p>Ви також можете написати нам на електронну пошту: support@go1bet.com. Ми відповідаємо на всі запити протягом 24 годин.</p>
                    <p>• <b>Підтримка в соціальних мережах</b></p>
                    <p>Ви також можете зв'язатися з нами через наші офіційні акаунти в соціальних мережах. Ми намагаємося відповідати на повідомлення та запити протягом кількох годин.</p>
                    
                    <h2 className="ab2">Графік роботи служби підтримки</h2>
                    <p>Наша служба підтримки працює цілодобово, щоб ви могли отримати допомогу у будь-який час дня чи ночі.</p>
                
                    <h2 className="ab3">Поширені питання (FAQ)</h2>
                    <p>Перш ніж звертатися до служби підтримки, ми рекомендуємо відвідати розділ [Поширені питання (FAQ)], де ви можете знайти відповіді на найчастіші питання, 
                    пов'язані з реєстрацією, поповненням рахунку, бонусами та іншими аспектами користування платформою.</p>
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

export default Contacts;