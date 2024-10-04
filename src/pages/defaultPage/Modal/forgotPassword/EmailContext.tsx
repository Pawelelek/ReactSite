import React, { createContext, useContext, useState, ReactNode } from 'react';

// Створюємо інтерфейс для контексту
interface EmailContextProps {
  email: string;
  setEmail: (email: string) => void;
}

// Ініціалізація контексту з undefined
const EmailContext = createContext<EmailContextProps | undefined>(undefined);

// Хук для використання контексту
export const useEmail = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmail має використовуватися всередині EmailProvider');
  }
  return context;
};

// Провайдер контексту
interface EmailProviderProps {
  children: ReactNode;
}

export const EmailProvider: React.FC<EmailProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>(''); // Початковий email

  const value = {
    email,
    setEmail,
  };

  return (
    <EmailContext.Provider value={value}>
      {children}
    </EmailContext.Provider>
  );
};