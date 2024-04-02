import Contact from "../Contact/Contact";
const ContactList = ({ users, setUsers, filteredUsers, onDelete }) => {
  return (
    <div>
      <Contact
        users={users}
        setUsers={setUsers}
        filteredUsers={filteredUsers}
        onDelete={onDelete}
      />
    </div>
  );
};

export default ContactList;
