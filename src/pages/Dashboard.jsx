import React, { useState } from 'react';
<<<<<<< HEAD
import { Plus, TrendingUp, AlertCircle, Calendar, Trash2 } from 'lucide-react';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import { useBudget } from '../context/BudgetContext';
import CategoryModal from '../components/CategoryModal';
import ExpenseModal from '../components/ExpenseModal';
import ReminderModal from '../components/ReminderModal';

const Dashboard = () => {
  const { categories, expenses, reminders, deleteExpense, deleteReminder } = useBudget();
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);

  const totalBudget = categories.reduce((sum, cat) => sum + cat.budget, 0);
  const totalSpent = categories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalRemaining = totalBudget - totalSpent;

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#F97316'];

  const pieData = categories.map((cat, index) => ({
    name: cat.name,
    value: cat.spent,
    color: COLORS[index % COLORS.length],
  }));

  const barData = categories.map((cat) => ({
    name: cat.name.split(' ')[0],
    budget: cat.budget,
    spent: cat.spent,
    remaining: cat.budget - cat.spent,
  }));

  const getRecentExpenses = () =>
    expenses
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
=======
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
>>>>>>> origin/main

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Budget Dashboard</h1>
          <p className="text-gray-600">Track your expenses and manage your budget effectively</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Budget */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold text-gray-900">₹{totalBudget.toLocaleString('en-IN')}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Total Spent */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">₹{totalSpent.toLocaleString('en-IN')}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>

          {/* Remaining */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Remaining</p>
                <p className={`text-2xl font-bold ${totalRemaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ₹{Math.abs(totalRemaining).toLocaleString('en-IN')}
                </p>
              </div>
              <div className={`p-3 rounded-full ${totalRemaining >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                <TrendingUp className={`h-6 w-6 ${totalRemaining >= 0 ? 'text-green-600' : 'text-red-600'}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setShowCategoryModal(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="h-5 w-5" />
            <span>Add Category</span>
          </button>
          <button
            onClick={() => setShowExpenseModal(true)}
            className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            <Plus className="h-5 w-5" />
            <span>Add Expense</span>
          </button>
          <button
            onClick={() => setShowReminderModal(true)}
            className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            <Calendar className="h-5 w-5" />
            <span>Set Reminder</span>
          </button>
        </div>

        {/* Budget & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Budget Categories */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-6">Budget Categories</h2>
            <div className="space-y-4">
              {categories.map((cat) => {
                const percent = (cat.spent / cat.budget) * 100;
                const isOver = cat.spent > cat.budget;
                return (
                  <div key={cat.id}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{cat.name}</span>
                      <span className={`text-sm ${isOver ? 'text-red-600' : 'text-gray-600'}`}>
                        ₹{cat.spent.toLocaleString('en-IN')} / ₹{cat.budget.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${isOver ? 'bg-red-500' : 'bg-blue-500'}`}
                        style={{ width: `${Math.min(percent, 100)}%` }}
                      />
                    </div>
                    {isOver && (
                      <p className="text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        ₹{(cat.spent - cat.budget).toLocaleString('en-IN')} over budget
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-6">Spending Overview</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={100}>
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => [`₹${v}`, 'Spent']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-6">Budget vs Spending</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="budget" fill="#3B82F6" name="Budget" />
                <Bar dataKey="spent" fill="#EF4444" name="Spent" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expenses & Reminders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Expenses */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-6">Recent Expenses</h2>
            <div className="space-y-4">
              {getRecentExpenses().map((e) => {
                const cat = categories.find((c) => c.id === e.categoryId);
                return (
                  <div key={e.id} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                    <div>
                      <p className="font-medium">{e.description}</p>
                      <p className="text-sm text-gray-600">{cat?.name} • {e.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">₹{e.amount.toLocaleString('en-IN')}</span>
                      <button onClick={() => deleteExpense(e.id)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reminders */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-6">Upcoming Reminders</h2>
            <div className="space-y-4">
              {reminders.length > 0 ? (
                reminders.map((r) => {
                  const cat = categories.find((c) => c.id === r.categoryId);
                  return (
                    <div key={r.id} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                      <div>
                        <p className="font-medium">{r.description}</p>
                        <p className="text-sm text-gray-600">
                          {cat?.name} • {r.frequency} • ₹{r.amount}
                        </p>
                      </div>
                      <button onClick={() => deleteReminder(r.id)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500 text-center py-6">No reminders yet</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showCategoryModal && <CategoryModal onClose={() => setShowCategoryModal(false)} />}
      {showExpenseModal && <ExpenseModal onClose={() => setShowExpenseModal(false)} />}
      {showReminderModal && <ReminderModal onClose={() => setShowReminderModal(false)} />}
=======
        {/* Content Here */}
        {/* You can now continue building the JSX-based dashboard */}
      </div>
>>>>>>> origin/main
    </div>
  );
};

export default Dashboard;
