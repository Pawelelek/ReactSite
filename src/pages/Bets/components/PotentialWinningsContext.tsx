import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PotentialWinningsContextProps {
  potentialWinnings: string;
  setPotentialWinnings: (value: string) => void;
}

const PotentialWinningsContext = createContext<PotentialWinningsContextProps | undefined>(undefined);

export const PotentialWinningsProvider = ({ children }: { children: ReactNode }) => {
  const [potentialWinnings, setPotentialWinnings] = useState('0');

  return (
    <PotentialWinningsContext.Provider value={{ potentialWinnings, setPotentialWinnings }}>
      {children}
    </PotentialWinningsContext.Provider>
  );
};

export const usePotentialWinnings = () => {
  const context = useContext(PotentialWinningsContext);
  if (!context) {
    throw new Error('usePotentialWinnings must be used within a PotentialWinningsProvider');
  }
  return context;
};
