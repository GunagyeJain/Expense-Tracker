import "./styles/Dashboard.css";
import AddTransactionCard from "../components/cards/AddTransactionCard";
import InfoCard from "../components/Cards/InfoCard";
import BudgetOverviewCard from "../components/cards/BudgetOverviewCard";
import TransactionHistoryCard from "../components/cards/TransactionHistoryCard";

//importing icons
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { PiCurrencyInr } from "react-icons/pi";

const Dashboard = () => {
  return (
    <>
      <div className="heading">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-container">
        <div className="info-section">
          <InfoCard
            title="Total Balance"
            icon={<MdOutlineAccountBalanceWallet />}
            value="1000"
            isExpense={false}
          />
          <InfoCard
            title="Expense"
            icon={<AiOutlineFall />}
            value="100"
            isExpense={true}
          />
          <InfoCard
            title="Income"
            icon={<AiOutlineRise />}
            value="1100"
            isExpense={false}
          />
          <InfoCard
            title="Daily Average Expense"
            icon={<PiCurrencyInr />}
            value="200"
            isExpense={false}
          />
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
