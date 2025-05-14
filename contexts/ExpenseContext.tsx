'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Expense } from '@/db/db';
import { ExpenseRepository } from '@/db/expenseRepository';
import { seedInitialData } from '@/db/seed';

interface ExpenseContextType {
  expenses: Expense[];
  refresh: () => void;
  addExpense: (exp: Expense) => void;
  updateExpense: (id: number, update: Partial<Expense>) => void;
  deleteExpense: (id: number) => void;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const refresh = async () => {
    const data = await ExpenseRepository.getAll();
    setExpenses(data);
  };

  const addExpense = async (exp: Expense) => {
    await ExpenseRepository.add(exp);
    refresh();
  };

  const updateExpense = async (id: number, update: Partial<Expense>) => {
    await ExpenseRepository.update(id, update);
    refresh();
  };

  const deleteExpense = async (id: number) => {
    await ExpenseRepository.remove(id);
    refresh();
  };

  useEffect(() => {
    const initialize = async () => {
      await seedInitialData();
      await refresh();
    };
    initialize();
  }, []);

  return <ExpenseContext.Provider value={{ expenses, refresh, addExpense, updateExpense, deleteExpense }}>{children}</ExpenseContext.Provider>;
};

export const useExpenseContext = (): ExpenseContextType => {
  const ctx = useContext(ExpenseContext);
  if (!ctx) throw new Error('useExpenseContext must be used within ExpenseProvider');
  return ctx;
};
