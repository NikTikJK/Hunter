import React, { useState } from 'react';
import data from './data.json';
import { FixedSizeList as List } from 'react-window';
import Card from './Card';
import './App.css';

function App() {
  const [curUser, setCurUser] = useState({
    name: '',
    department: '',
    company: '',
    jobTitle: ''
  });

  const handleCardClick = (item) => {
    setCurUser({
      name: item.name,
      department: item.department,
      company: item.company,
      jobTitle: item.jobTitle
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const Row = ({ index, style }) => {
    const item = data[index];
    return (
      <div style={style}>
        <Card
          name={item.name}
          onClick={() => handleCardClick(item)}
        />
      </div>
    );
  };

  return (
    <div className="App">
      <List
        height={600}
        itemCount={data.length}
        itemSize={120}
        width={300}
        className="cards-container"
      >
        {Row}
      </List>
      <div className='entry-card'>
        <input
          type="text"
          name='name'
          disabled
          value={curUser.name}
          className='name'
        /><br />
        <label htmlFor="department">department</label>
        <input
          type="text"
          name='department'
          value={curUser.department}
          onChange={handleChange}
        /><br />
        <label htmlFor="company">company</label>
        <input
          type="text"
          name='company'
          value={curUser.company}
          onChange={handleChange}
        /><br />
        <label htmlFor="jobTitle">jobTitle</label>
        <input
          type="text"
          name='jobTitle'
          value={curUser.jobTitle}
          onChange={handleChange}
        />
        <button onClick={() => {
          console.log("save");

        }}>Save</button>
      </div>
    </div>
  );
}

export default App;