import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = ({ users, setUsers }) => {
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      <ul className={s.list}>
        {users.map((user) => (
          <li className={s.item} key={user.id}>
            <FaUser /> {user.name}
            <FaPhoneAlt />
            {user.number}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
