import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import usersData from "./assets/users.json";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState(usersData);
  const [searchStr, setSearchStr] = useState("");

  const handleSearch = (searchStr) => {
    setSearchStr(searchStr);
  };

  const filteredUsers = () => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchStr={searchStr} onChangeSearch={handleSearch} />
      <ContactList
        users={filteredUsers()}
        setUsers={setUsers}
        filteredUsers={filteredUsers}
      />
    </div>
  );
};

export default App;
