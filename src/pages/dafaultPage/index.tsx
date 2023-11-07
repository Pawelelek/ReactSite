import UserInformation from "../../components/userInformation";
import React, { useState } from 'react';

const DefaultPage = () => {
  //return <iframe  style={{ width: '800px', height: '250px', border: '0', overflow: 'hidden' }} scrolling="no" src="https://loader.to/api/card/?url=https://youtu.be/45YC9E1FNlM?si=vvy5Jx1R5Sj7zYgm&adUrl=https://myAdurl.com"></iframe> //<UserInformation />; 
  //const [youtubeLink, setYoutubeLink] = useState('');
  const [mp3Url, setMp3Url] = useState('');

  const handleConvertToMp3 = () => {
    // Отримайте посилання з YouTube, яке ввів користувач
    const youtubeLinkInput = document.getElementById('youtubeLink') as HTMLInputElement;
    const youtubeLink = youtubeLinkInput.value;

    // Відправте це посилання на сторонній сервіс для конвертації в MP3
    // Тут ви повинні використовувати свій власний URL або API для конвертації

    // Наприклад, якщо у вас є URL до сервісу конвертації MP3, відправте запит на цей сервіс
    // і отримайте MP3 посилання як відповідь
    const mp3Url = `https://loader.to/api/card/?url=${youtubeLink}`;

    // Встановіть mp3Url в стан компонента
    setMp3Url(mp3Url);
  };

  return (
    // <div>
    //   <input
    //     type="text"
    //     id="youtubeLink"
    //     placeholder="Вставте посилання з YouTube"
    //   />
    //   <button onClick={handleConvertToMp3}>Завантажити як MP3</button>
    //   <iframe
    //     style={{ width: '800px', height: '250px', border: '0', overflow: 'hidden' }}
    //     scrolling="no"
    //     src={mp3Url}
    //   ></iframe>
    // </div>
    <div style={{ textAlign: 'center' }}>
    <input
      type="text"
      id="youtubeLink"
      style={{ width: '400px', padding: '10px', fontSize: '16px' }}
      placeholder="Вставте посилання з YouTube"
    />
    <br />
    <br />
    <button
      onClick={handleConvertToMp3}
      style={{
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      Завантажити відео
    </button>
    <br />
    <br />
    <iframe
      style={{ width: '800px', height: '280px', border: '0', overflow: 'hidden' }}
      scrolling="no"
      src={mp3Url}
    ></iframe>
  </div>
  );
};

export default DefaultPage;
