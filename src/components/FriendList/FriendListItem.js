import style from "./FriendListItem.module.css"

const FriendListItem = ({ friends }) => (
    <>
        {friends.map(({ id, name, avatar, isOnline }) => (
            <li className={style.item} key={id}>
                <span className={isOnline ? style.userOnline : style.userOffline}></span>
                <img className={style.avatar} src={avatar} alt="" width="100" />
                <p className={style.name}>{name}</p>
            </li>
        ))}
    </>
)

export default FriendListItem
