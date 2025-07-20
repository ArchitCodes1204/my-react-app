import React, { createContext, useContext, useState } from 'react';

const BudgetContext = React.createContext();

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};

export const BudgetProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    { id: '1', name: 'Food & Groceries', budget: 15000, spent: 8500, color: '#3B82F6' },
    { id: '2', name: 'Transportation', budget: 8000, spent: 6200, color: '#10B981' },
    { id: '3', name: 'Entertainment', budget: 5000, spent: 6500, color: '#F59E0B' },
    { id: '4', name: 'Utilities & Bills', budget: 12000, spent: 11200, color: '#EF4444' },
    { id: '5', name: 'Healthcare', budget: 7000, spent: 3200, color: '#8B5CF6' },
  ]);

  const [expenses, setExpenses] = useState([
    { id: '1', categoryId: '1', amount: 450, description: 'Grocery shopping at Big Bazaar', date: '2024-01-15' },
    { id: '2', categoryId: '2', amount: 280, description: 'Petrol refill', date: '2024-01-14' },
    { id: '3', categoryId: '3', amount: 800, description: 'Movie tickets at PVR', date: '2024-01-13' },
    { id: '4', categoryId: '4', amount: 2500, description: 'Electricity bill', date: '2024-01-12' },
    { id: '5', categoryId: '5', amount: 1200, description: 'Doctor consultation', date: '2024-01-11' },
  ]);

  const [reminders, setReminders] = useState([]);

  const addCategory = (category) => {
    const newCategory = {
      ...category,
      id: Date.now().toString(),
      spent: 0,
    };
    setCategories(prev => [...prev, newCategory]);
  };

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(),
    };
    setExpenses(prev => [...prev, newExpense]);

    setCategories(prev => prev.map(cat =>
      cat.id === expense.categoryId
        ? { ...cat, spent: cat.spent + expense.amount }
        : cat
    ));
  };

  const addReminder = (reminder) => {
    const newReminder = {
      ...reminder,
      id: Date.now().toString(),
    };
    setReminders(prev => [...prev, newReminder]);
  };

  const deleteCategory = (id) => {
    setCategories(prev => prev.filter(cat => cat.id !== id));
    setExpenses(prev => prev.filter(exp => exp.categoryId !== id));
  };

  const deleteExpense = (id) => {
    const expense = expenses.find(exp => exp.id === id);
    if (expense) {
      setCategories(prev => prev.map(cat =>
        cat.id === expense.categoryId
          ? { ...cat, spent: Math.max(0, cat.spent - expense.amount) }
          : cat
      ));
    }
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  const deleteReminder = (id) => {
    setReminders(prev => prev.filter(rem => rem.id !== id));
  };

  const getAlertsCount = () => {
    return categories.filter(cat => cat.spent > cat.budget).length;
  };
  const getTotalBudget = () =>
    categories.reduce((total, cat) => total + cat.budget, 0);
  
  const getTotalSpent = () =>
    categories.reduce((total, cat) => total + cat.spent, 0);
  
  const getCategoryTotal = (categoryId) => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat ? cat.spent : 0;
  };
  

  return (
<BudgetContext.Provider value={{
  categories,
  expenses,
  reminders,
  addCategory,
  addExpense,
  addReminder,
  deleteCategory,
  deleteExpense,
  deleteReminder,
  getAlertsCount,
  getTotalBudget,
  getTotalSpent,
  getCategoryTotal,
}}>
  {children}
</BudgetContext.Provider>

  );
};
