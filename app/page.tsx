'use client';
import styles from './page.module.css';
import { ExpenseProvider } from '@/contexts/ExpenseContext';
import { ExpenseList } from '@/components/ExpenseList';

export default function Home() {
  return (
    <div className={styles.page}>
      <ExpenseProvider>
        <ExpenseList />
      </ExpenseProvider>
    </div>
  );
}
