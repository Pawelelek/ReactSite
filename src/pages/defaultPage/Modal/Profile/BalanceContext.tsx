import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import { http } from '../../../../http';
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

interface Balance {
  money: number;
  id: string;
}

interface BalanceContextProps {
  balanceRef: React.MutableRefObject<Balance>;
  refreshBalance: () => void;
}

const BalanceContext = createContext<BalanceContextProps | undefined>(undefined);

export const BalanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useTypedSelector((store: any) => store.UserReducer);
  const [balance, setBalance] = useState<Balance>({ money: 0, id: '' });
  const balanceRef = useRef(balance);

  const getBalanceByUserId = () => {
    if (user?.Id) {
      http.get(`api/Balance/getByUserId?userId=${user.Id}`).then((res: any) => {
        const data = res.data.payload[0];
        setBalance(data);
        balanceRef.current = data; 
      });
    }
  };

  useEffect(() => {
    getBalanceByUserId();
  }, [user.Id]);

  return (
    <BalanceContext.Provider value={{ balanceRef, refreshBalance: getBalanceByUserId }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error('useBalance must be used within a BalanceProvider');
  }
  return context;
};
