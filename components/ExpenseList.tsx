import React from 'react';
import { useExpenses } from '@/hooks/useExpenses';

export const ExpenseList = () => {
  const { expenses, deleteExpense } = useExpenses();

  return (
    <div>
      <h2>支出一覧</h2>
      <ul>
        {expenses.map((e) => (
          <li key={e.id}>
            {e.date} - {e.category} - ¥{e.amount}
            <button onClick={() => deleteExpense(e.id!)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
