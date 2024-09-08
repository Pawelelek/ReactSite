import React from 'react';
import './index.css';
import ErrorContent from '../notFound/ErrorContent';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Counter from "../defaultPage/components/Counter";
import Counter2 from "../defaultPage/components/Counter2";

const Page404: React.FC = () => {
  const {user} = useTypedSelector((store) => store.UserReducer);
  return (
    <div>
      {(user.role === "User" || user.role === "Admin") ? (
        <Counter2 />
      ) : (
        <Counter />
      )}
    <div className="page404">
      <main className="mainContent">
        <ErrorContent />
      </main>
    </div>
    </div>
  );
};

export default Page404;