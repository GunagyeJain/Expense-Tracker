import React from 'react'
import './styles/Dashboard.css'
import AddTransactionCard from '../components/Cards/AddTransactionCard'
import InfoCard from '../components/Cards/InfoCard'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <InfoCard />
    </div>
  )
}

export default Dashboard
