// import React from 'react';
import React,{useState} from 'react';
import './Box.css'


    const Box = ({ title }) => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');
  const [editingName, setEditingName] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddName = () => {
    if (newName.trim() !== '') {
      if (editingName !== null) {
        // If editing, update the name
        const updatedNames = names.map((name, index) => (index === editingName ? newName : name));
        setNames(updatedNames);
        setEditingName(null);
      } else {
        // If adding, add a new name
        setNames([...names, newName]);
      }
      setNewName('');
      setModalVisible(false);
    }
  };

  const handleEditName = (index) => {
    setNewName(names[index]);
    setEditingName(index);
    setModalVisible(true);
  };

  const handleDeleteName = (index) => {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
  };

  return (
    <>
    <div className="box">
      <h2>{title}</h2>
      <button onClick={() => setModalVisible(true)}>Create</button>
      {names.map((name, index) => (
        <div key={index} className="card">
          <span>{name}</span>
          <div>
            <button onClick={() => handleEditName(index)}>Edit</button>
            <button onClick={() => handleDeleteName(index)}>Delete</button>
          </div>
        </div>
      ))}
      {modalVisible && (
        <div className="modal">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter name"
          />
          <div>
            <button onClick={handleAddName}>{editingName !== null ? 'Save' : 'Add'}</button>
            <button onClick={() => { setNewName(''); setModalVisible(false); }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  

    
    </>
  )
}

export default Box