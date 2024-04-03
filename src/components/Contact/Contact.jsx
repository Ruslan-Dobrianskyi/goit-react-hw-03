import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Contact = ({ user, onDelete }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <FaUser /> {user.name}
        <FaPhoneAlt />
        {user.number}
        <button className={s.button} onClick={() => onDelete(user.id)}>
          <MdDeleteForever style={{ width: "30px", height: "30px" }} />
        </button>
      </li>
    </ul>
  );
};

export default Contact;

//  <ul className={s.list}>
//         {users.map((user) => (
//           <FaUser /> {user.name}
//         <FaPhoneAlt />
//         {user.number}
//         <button className={s.button} onClick={() => onDelete(user.id)}>
//           <MdDeleteForever style={{ width: "30px", height: "30px" }} />
//         </button
//         ))}
//       </ul>
