import PropTypes from "prop-types"
import style from "./Statistics.module.css"

const Statistics = ({ stats, title }) => {
    return (
        <section className={style.statistics}>
            <div className={style.container}>
                {title && <h2 className={style.title}>{title}</h2>}
                <ul className={style.stat_list}>
                    {stats.map(({ id, label, percentage }) => (
                        <li className={style.item} key={id}>
                            <span className={style.label}>{label} </span>
                            <span className={style.percentage}>{percentage}% </span>
                        </li>
                    ))}
                </ul>{" "}
            </div>
        </section>
    )
}

export default Statistics

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
}
