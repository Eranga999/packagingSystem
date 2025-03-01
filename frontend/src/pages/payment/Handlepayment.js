import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from '../../compoments/Payment/ExpenseForm';
import ExpenseList from '../../compoments/Payment/ExpenseList';
import Sidebar from '../../compoments/Payment/Sidebar';



function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get('http://localhost:8070/expenses/all');
      setExpenses(res.data);
    } catch (error) {
      console.error('Error fetching expenses', error);
    }
  };

  const handleExpenseAdded = () => {
    fetchExpenses(); // Refresh the expense list after adding a new expense
  };

  useEffect(() => {
    fetchExpenses(); // Fetch expenses on component mount
  }, []);

  return (
    <div style={styles.app}>
          <div style={styles.layout}>
          <div style={styles.backgroundImage} />
        <div style={styles.sidebar}> {/* Sidebar height set here */}
          <Sidebar />
        </div>
        <div style={styles.mainContent}>
          <h2 style={styles.title}>Manage Your Expenses</h2>
          <div style={styles.container}>
            <ExpenseForm onExpenseAdded={handleExpenseAdded} />
            <ExpenseList expenses={expenses} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center',
    backgroundImage: `url(${require('../../images/Paymentdashboard.jpg')})`, // Add the background image
    backgroundSize: 'cover', // Make sure it covers the entire area
    backgroundPosition: 'center', // Center the background image
    minHeight: '100vh',
    fontFamily: "'Roboto', sans-serif",
    padding: '20px',
  },
  sidebar: {
    width: '250px', 
    height: '100vh', 
    position: 'sticky', 
    top: 0, 
    overflowY: 'auto',
    backgroundColor: '#fff', 
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '0px',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${require('../../images/Paymentdashboard.jpg')})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    filter: 'blur(8px)',
    zIndex: -1, 
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', 
  },
};

export default App;



