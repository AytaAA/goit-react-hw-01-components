import styles from "./Profile.module.css"

const Profile = ({
    data: {
        name,
        tag,
        location,
        avatar,
        stats: { followers, likes, views },
    },
}) => (
    <div className={styles.container}>
        <div className={styles.description}>
            <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.stats_item}>
                <span className={styles.label}>Followers </span>
                <span className={styles.quantity}>1000</span>
            </li>
            <li className={styles.stats_item}>
                <span className={styles.label}>Views </span>
                <span className={styles.quantity}>2000</span>
            </li>
            <li className={styles.stats_item}>
                <span className={styles.label}>Likes </span>
                <span className={styles.quantity}>3000</span>
            </li>
        </ul>
    </div>
)

export default Profile

// Profile.propTypes = {
//         PropTypes.arrayOf({
//             name: PropTypes.string.isRequired,
//             tag: PropTypes.string.isRequired,
//             location: PropTypes.string.isRequired,
//             avatar: PropTypes.string.isRequired,
//             followers: PropTypes.number.isRequired,
//             views: PropTypes.number.isRequired,
//             likes: PropTypes.number.isRequired,
//         }).isRequired
//     ).isRequired,
// }
