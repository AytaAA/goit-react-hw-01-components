import PropTypes from "prop-types"
import style from "./TransactionHistory.module.css"

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={style.transaction_history}>
            <thead className={style.table_head}>
                <tr>
                    <th className={style.label}>Type</th>
                    <th className={style.label}>Amount</th>
                    <th className={style.label}>Currency</th>
                </tr>
            </thead>

            <tbody className={style.table_body}>
                {transactions.map(({ id, type, amount, currency }) => (
                    <tr className={style.table_item} key={id}>
                        <td className={style.item_name}>{type}</td>
                        <td className={style.item}>{amount}</td>
                        <td className={style.item}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
}

export default TransactionHistory
