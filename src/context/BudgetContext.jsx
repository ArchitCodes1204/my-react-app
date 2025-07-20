import React, { createContext, useContext, useState, useEffect } from 'react';

const BudgetContext = createContext(undefined);

export function BudgetProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [reminders, setReminders] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCategories = localStorage.getItem('budget-categories');
    const savedExpenses = localStorage.getItem('budget-expenses');
    const savedReminders = localStorage.getItem('budget-reminders');

    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    } else {
      // Initialize with default categories
      const defaultCategories = [
        { id: '1', name: 'Food & Dining', budget: 500, color: '#EF4444', icon: 'UtensilsCrossed' },
        { id: '2', name: 'Transportation', budget: 300, color: '#3B82F6', icon: 'Car' },
        { id: '3', name: 'Entertainment', budget: 200, color: '#8B5CF6', icon: 'Gamepad2' },
        { id: '4', name: 'Utilities', budget: 400, color: '#10B981', icon: 'Zap' },
      ];
      setCategories(defaultCategories);
    }

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }

    if (savedReminders) {
      setReminders(JSON.parse(savedReminders));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('budget-categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('budget-expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('budget-reminders', JSON.stringify(reminders));
  }, [reminders]);

  const addCategory = (category) => {
    const newCategory = { ...category, id: Date.now().toString() };
    setCategories((prev) => [...prev, newCategory]);
  };

  const updateCategory = (id, updates) => {
    setCategories((prev) => prev.map((cat) => (cat.id === id ? { ...cat, ...updates } : cat)));
  };

  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
    setExpenses((prev) => prev.filter((exp) => exp.categoryId !== id));
    setReminders((prev) => prev.filter((rem) => rem.categoryId !== id));
  };

  const addExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now().toString() };
    setExpenses((prev) => [...prev, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const addReminder = (reminder) => {
    const newReminder = { ...reminder, id: Date.now().toString() };
    setReminders((prev) => [...prev, newReminder]);
  };

  const deleteReminder = (id) => {
    setReminders((prev) => prev.filter((rem) => rem.id !== id));
  };

  const getCategoryExpenses = (categoryId) => {
    return expenses.filter((expense) => expense.categoryId === categoryId);
  };

  const getCategoryTotal = (categoryId) => {
    return expenses
      .filter((expense) => expense.categoryId === categoryId)
      .reduce((total, expense) => total + expense.amount, 0);
  };

  const getTotalBudget = () => {
    return categories.reduce((total, category) => total + category.budget, 0);
  };

  const getTotalSpent = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <BudgetContext.Provider
      value={{
        categories,
        expenses,
        reminders,
        addCategory,
        updateCategory,
        deleteCategory,
        addExpense,
        deleteExpense,
        addReminder,
        deleteReminder,
        getCategoryExpenses,
        getCategoryTotal,
        getTotalBudget,
        getTotalSpent,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const context = useContext(BudgetContext);
  if (context === undefined) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
}
