import React, { useState } from 'react';
import {
  Plus, TrendingUp, TrendingDown, AlertTriangle,
  Calendar, X, Trash2
} from 'lucide-react';
import { useBudget } from '../context/BudgetContext';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  CategoryScale, LinearScale, BarElement, Title
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import * as LucideIcons from 'lucide-react';

ChartJS.register(
  ArcElement, Tooltip, Legend,
  CategoryScale, LinearScale, BarElement, Title
);

export default function Dashboard() {
  const {
    categories, expenses, reminders,
    addCategory, addExpense, addReminder,
    deleteExpense, deleteReminder,
    getCategoryTotal, getTotalBudget, getTotalSpent
  } = useBudget();

  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: '', budget: 0, color: '#3B82F6', icon: 'DollarSign'
  });
  const [newExpense, setNewExpense] = useState({
    categoryId: '', amount: 0, description: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [newReminder, setNewReminder] = useState({
    categoryId: '', amount: 0, description: '', frequency: 'monthly',
    nextDate: new Date().toISOString().split('T')[0]
  });

  const totalBudget = getTotalBudget();
  const totalSpent = getTotalSpent();
  const remainingBudget = totalBudget - totalSpent;

  const handleAddCategory = (e) => {
    e.preventDefault();
    addCategory(newCategory);
    setNewCategory({ name: '', budget: 0, color: '#3B82F6', icon: 'DollarSign' });
    setShowCategoryModal(false);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    addExpense(newExpense);
    setNewExpense({ categoryId: '', amount: 0, description: '', date: new Date().toISOString().split('T')[0] });
    setShowExpenseModal(false);
  };

  const handleAddReminder = (e) => {
    e.preventDefault();
    addReminder(newReminder);
    setNewReminder({ categoryId: '', amount: 0, description: '', frequency: 'monthly', nextDate: new Date().toISOString().split('T')[0] });
    setShowReminderModal(false);
  };

  const getIconComponent = (iconName) => {
    const IconComponent = LucideIcons[iconName] || LucideIcons.DollarSign;
    return IconComponent;
  };

  const pieChartData = {
    labels: categories.map(cat => cat.name),
    datasets: [{
      data: categories.map(cat => getCategoryTotal(cat.id)),
      backgroundColor: categories.map(cat => cat.color),
      borderWidth: 2,
      borderColor: '#fff'
    }]
  };

  const barChartData = {
    labels: categories.map(cat => cat.name),
    datasets: [
      {
        label: 'Budget',
        data: categories.map(cat => cat.budget),
        backgroundColor: '#E5E7EB',
        borderColor: '#9CA3AF',
        borderWidth: 1
      },
      {
        label: 'Spent',
        data: categories.map(cat => getCategoryTotal(cat.id)),
        backgroundColor: categories.map(cat => cat.color),
        borderColor: categories.map(cat => cat.color),
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: {
        display: true,
        text: 'Budget vs Spending Comparison'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Here */}
        {/* You can now continue building the JSX-based dashboard */}
      </div>
    </div>
  );
}
