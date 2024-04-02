import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Contact = ({ users, onDelete }) => {
  return (
    <div>
      <ul className={s.list}>
        {users.map((user) => (
          <li className={s.item} key={user.id}>
            <FaUser /> {user.name}
            <FaPhoneAlt />
            {user.number}
            <button className={s.button} onClick={() => onDelete(user.id)}>
              <MdDeleteForever style={{ width: "30px", height: "30px" }} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
