import React from 'react';
import './TransactionHistory.css'; // Для стилів

interface Transaction {
  id: string;
  value: string;
  description: string;
  moneyState: string;
  balanceId: string,
  transactionType: string,
  dateCreated: string
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <div className="table-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Сумма</th>
            <th>Опис</th>
            <th>СтанБалансу</th>
            <th>Id Балансу</th>
            <th>Тип Транзакції</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
                <td>{transaction.value}</td>
                <td>{transaction.description}</td>
                <td>{transaction.moneyState}</td>
                <td>{transaction.balanceId}</td>
                <td>{transaction.transactionType}</td>
                <td>{transaction.dateCreated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;