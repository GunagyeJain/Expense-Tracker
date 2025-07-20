import "./styles/Dashboard.css";
import AddTransactionCard from "../components/Cards/AddTransactionCard";
import InfoCard from "../components/Cards/InfoCard";
import BudgetOverviewCard from "../components/cards/BudgetOverviewCard";
import TransactionHistoryCard from "../components/cards/TransactionHistoryCard";

const Dashboard = () => {
  return (
    <>
      <div className="heading">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-container">
        <div className="info-section">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
        <div className="add-transaction-section">
          <AddTransactionCard />
        </div>
        <div className="transaction-history-section">
          <TransactionHistoryCard />
        </div>
        <div className="budget-overview-section">
          <BudgetOverviewCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
