import React, { useState, useCallback } from 'react';

// SkillList Component: Displays the list of skills and handles deletion
const SkillList = React.memo(({ skills, onDeleteSkill }) => {
  console.log("Rendering SkillList");
  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li
          key={index}
          id={`skill-number-${index}`}
          onClick={() => onDeleteSkill(skill)} // Clicking on skill name deletes it
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

// Main UseCallbackComp Component
const UseCallbackComp = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [newSkill, setNewSkill] = useState('');

  // Add Skill with useCallback
  const addSkill = useCallback(() => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills((prevSkills) => [...prevSkills, newSkill]);
    }
    setNewSkill(''); // Clear the input field
  }, [newSkill, skills]);

  // Delete Skill with useCallback
  const deleteSkill = useCallback(
    (skillToDelete) => {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
    },
    []
  );

  return (
    <div>
      <h1 id="heading">Manage Your Skills</h1>
      <input
        id="skill-input"
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Enter a skill"
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} onDeleteSkill={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;
/*
import React, { useState, useCallback } from 'react';

// SkillList Component: Displays the list of skills and handles deletion
const SkillList = React.memo(({ skills, onDeleteSkill }) => {
  console.log("Rendering SkillList");
  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li key={index} id={`skill-number-${index}`}>
          <span>{skill}</span>
          <button onClick={() => onDeleteSkill(skill)}>Delete</button>
        </li>
      ))}
    </ul>
  );
});

// Main UseCallbackComp Component
const UseCallbackComp = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [newSkill, setNewSkill] = useState('');

  // Add Skill with useCallback
  const addSkill = useCallback(() => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills((prevSkills) => [...prevSkills, newSkill]);
    }
    setNewSkill(''); // Clear the input field
  }, [newSkill, skills]);

  // Delete Skill with useCallback
  const deleteSkill = useCallback(
    (skillToDelete) => {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
    },
    []
  );

  return (
    <div>
      <h1 id="heading">Manage Your Skills</h1>
      <input
        id="skill-input"
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Enter a skill"
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} onDeleteSkill={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;
/*
import React, { useState, useCallback } from 'react';


const SkillList = React.memo(({ skills, onDeleteSkill }) => {
  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li key={index} id={`skill-number-${index}`}>
          <span>{skill}</span>
          <button onClick={() => onDeleteSkill(skill)}>Delete</button>
        </li>
      ))}
    </ul>
  );
});

const App = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [newSkill, setNewSkill] = useState('');

  
  const addSkill = useCallback(() => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills((prevSkills) => [...prevSkills, newSkill]);
    }
    setNewSkill('');
  }, [newSkill, skills]);

 
  const deleteSkill = useCallback(
    (skillToDelete) => {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
    },
    []
  );

  return (
    <div>
      <h1 id="heading">Manage Your Skills</h1>
      <input
        id="skill-input"
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Enter a skill"
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} onDeleteSkill={deleteSkill} />
    </div>
  );
};

export default App;
/*
import React, { useState, useCallback } from 'react';

// SkillList Component
const SkillList = React.memo(({ skills, onDeleteSkill }) => {
  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li key={index} id={`skill-number-${index}`}>
          {skill}
          <button onClick={() => onDeleteSkill(skill)}>Delete</button>
        </li>
      ))}
    </ul>
  );
});

const App = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [newSkill, setNewSkill] = useState('');

  // Add Skill
  const addSkill = useCallback(() => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills((prevSkills) => [...prevSkills, newSkill]);
    }
    setNewSkill('');
  }, [newSkill, skills]);

  // Delete Skill
  const deleteSkill = useCallback(
    (skillToDelete) => {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
    },
    []
  );

  return (
    <div>
      <h1 id="heading">Manage Your Skills</h1>
      <input
        id="skill-input"
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Enter a skill"
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} onDeleteSkill={deleteSkill} />
    </div>
  );
};

export default App;
/*
import React, { useState, useCallback } from 'react';

// SkillList Component
const SkillList = React.memo(({ skills, onDeleteSkill }) => {
  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li key={index} id={`skill-number-${index}`}>
          <span>{skill}</span>
          <button onClick={() => onDeleteSkill(skill)} style={{ marginLeft: '10px' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
});

const App = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [newSkill, setNewSkill] = useState('');

  // Add Skill
  const addSkill = useCallback(() => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills((prevSkills) => [...prevSkills, newSkill]);
    }
    setNewSkill('');
  }, [newSkill, skills]);

  // Delete Skill
  const deleteSkill = useCallback(
    (skillToDelete) => {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
    },
    []
  );

  return (
    <div>
      <h1 id="heading">Manage Your Skills</h1>
      <input
        id="skill-input"
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Enter a skill"
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} onDeleteSkill={deleteSkill} />
    </div>
  );
};

export default App;
/*
import React, { useState, useCallback } from 'react';

// SkillList Component
const SkillList = React.memo(({ skills, onDeleteSkill }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index} id={`skill-number-${index}`}>
          {skill}{' '}
          <button onClick={() => onDeleteSkill(skill)} style={{ marginLeft: '10px' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
});

const App = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [newSkill, setNewSkill] = useState('');

  // Add Skill
  const addSkill = useCallback(() => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills((prevSkills) => [...prevSkills, newSkill]);
    }
    setNewSkill('');
  }, [newSkill, skills]);

  // Delete Skill
  const deleteSkill = useCallback(
    (skillToDelete) => {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
    },
    []
  );

  return (
    <div>
      <h1 id="heading">Manage Your Skills</h1>
      <input
        id="skill-input"
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Enter a skill"
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} onDeleteSkill={deleteSkill} />
    </div>
  );
};

export default App;

/*

<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
*/
