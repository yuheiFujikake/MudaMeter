import { db, Category, Expense } from '@/db/db';

// 初期カテゴリ定義
const initialCategories: Category[] = [
  { name: '食費', type: '消費' },
  { name: '外食', type: '浪費' },
  { name: '書籍', type: '投資' },
  { name: 'カフェ', type: '浪費' },
  { name: '自己研鑽', type: '投資' },
];

// ダミー支出データ定義
const dummyExpenses: Expense[] = [
  { amount: 500, date: '2025-05-01', category: '食費', type: '消費', memo: '昼ごはん' },
  { amount: 1200, date: '2025-05-02', category: '外食', type: '浪費', memo: '居酒屋' },
  { amount: 1800, date: '2025-05-03', category: '書籍', type: '投資', memo: 'ビジネス書' },
  { amount: 450, date: '2025-05-04', category: 'カフェ', type: '浪費', memo: 'スタバ' },
  { amount: 3000, date: '2025-05-05', category: '自己研鑽', type: '投資', memo: 'オンライン講座' },
];

export const seedInitialData = async () => {
  const categoryCount = await db.categories.count();
  const expenseCount = await db.expenses.count();

  // カテゴリが未登録なら登録
  if (categoryCount === 0) {
    await db.categories.bulkAdd(initialCategories);
    console.log('✅ 初期カテゴリを登録しました');
  }

  // 支出データが未登録なら登録
  if (expenseCount === 0) {
    await db.expenses.bulkAdd(dummyExpenses);
    console.log('✅ ダミー支出データを登録しました');
  }
};
