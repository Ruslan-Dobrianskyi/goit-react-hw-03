import Contact from "../Contact/Contact";
const ContactList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Contact user={user} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
