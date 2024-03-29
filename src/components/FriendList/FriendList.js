import FriendListItem from "./FriendListItem"
import PropTypes from "prop-types"
import style from "./FriendListItem.module.css"

const FriendList = ({ friends }) => (
    <ul className={style.friend_list}>
        <FriendListItem friends={friends} />
    </ul>
)

export default FriendList

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
}
