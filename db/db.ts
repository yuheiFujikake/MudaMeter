import Dexie, { Table } from 'dexie';

export interface Expense {
  id?: number;
  amount: number;
  date: string; // ISO format
  category: string;
  type: '消費' | '浪費' | '投資';
  memo?: string;
  feeling?: string;
}

export interface Category {
  id?: number;
  name: string;
  type: '消費' | '浪費' | '投資';
}

class MudaMeterDB extends Dexie {
  expenses!: Table<Expense, number>;
  categories!: Table<Category, number>;

  constructor() {
    super('MudaMeterDB');
    this.version(1).stores({
      expenses: '++id, date, category, type',
      categories: '++id, name, type',
    });
  }
}

export const db = new MudaMeterDB();
