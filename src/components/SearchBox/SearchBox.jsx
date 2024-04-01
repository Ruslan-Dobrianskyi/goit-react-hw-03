const SearchBox = ({ searchStr, onChangeSearch }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        placeholder="Search user"
        value={searchStr}
        onChange={(e) => onChangeSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
