import { db, Expense } from '@/db/db';

export const ExpenseRepository = {
  add: async (expense: Expense) => db.expenses.add(expense),
  getAll: async (): Promise<Expense[]> => db.expenses.toArray(),
  update: async (id: number, updated: Partial<Expense>) => db.expenses.update(id, updated),
  remove: async (id: number) => db.expenses.delete(id),
  getByMonth: async (year: number, month: number): Promise<Expense[]> => {
    const start = new Date(year, month - 1, 1).toISOString();
    const end = new Date(year, month, 0, 23, 59, 59).toISOString();
    return db.expenses.where('date').between(start, end, true, true).toArray();
  },
};
