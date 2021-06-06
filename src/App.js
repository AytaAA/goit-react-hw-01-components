import data from "./data/statistical-data.json"
import transactions from "./data/transaction.json"
import userData from "./data/user.json"
import friends from "./data/friends.json"

//components
import FriendList from "./components/FriendList/FriendList"
import Statistics from "./components/Statistics/Statistics"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
import Profile from "./components/Profile/Profile"

function App() {
    return (
        <div className="App">
            <Profile data={userData} />
            <Statistics title="Upload stats" stats={data} />
            <FriendList friends={friends} />
            <TransactionHistory transactions={transactions} />
        </div>
    )
}

export default App
