import Contact from "../Contact/Contact";
const ContactList = ({ users, setUsers, filteredUsers }) => {
  return (
    <div>
      <Contact
        users={users}
        setUsers={setUsers}
        filteredUsers={filteredUsers}
      />
    </div>
  );
};

export default ContactList;
