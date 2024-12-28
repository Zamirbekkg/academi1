import './students.scss';
import student1 from './img/student1.jpg';
import student2 from './img/student2.jpg';
import Filter from '../filter/filter';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ActivStudents = () => {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const activeStudents = [
    { name: 'Юсуф Абдурахманов', img: student1, alt: 'Сделала все что могла и не смогла к чему мы очень благодарны, спасибо большое, будьте счастливы' },
    { name: 'Мира Эсенова', img: student2, alt: 'Сделала все что могла и не смогла к чему мы очень благодарны, спасибо большое, будьте счастливы' },
    { name: 'Ясин Якубов', img: student1, alt: 'Сделала все что могла и не смогла к чему мы очень благодарны, спасибо большое, будьте счастливы' },
    { name: 'Алсу Гунеш', img: student2, alt: 'Сделала все что могла и не смогла к чему мы очень благодарны, спасибо большое, будьте счастливы' },
  ];

  const champions = [
    { name: 'Юсуф Абдурахманов', img: student1, alt: 'Сделала все что могла и не смогла к чему мы очень благодарны, спасибо большое, будьте счастливы' },
    { name: 'Мира Эсенова', img: student2, alt: 'Сделала все что могла и не смогла к чему мы очень благодарны, спасибо большое, будьте счастливы' },
    { name: 'Юсуф Абдурахманов', img: student1, alt: 'Сделала все что могла и не смогла к чему мы очень благодарны, спасибо большое, будьте счастливы' },
    { name: 'Алсу Гунеш', img: student2, alt: 'Сделала все что могла и не смогла к чему мы очень благодарны, спасибо большое, будьте счастливы' },
  ];

  const handleDetailsClick = () => {
    navigate('/Achievement'); 
  };

  const filteredActiveStudents = activeStudents.filter((student) =>
    student.name.toLowerCase().includes(filter.toLowerCase())
  );
  const filteredChampions = champions.filter((student) =>
    student.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="students-container">
      <Filter className="filter" filter={filter} setFilter={setFilter} />

      <section className="students-section">
        <h2 className="section-title">АКТИВНЫЕ СТУДЕНТЫ</h2>
        <div className="students-grid">
          {filteredActiveStudents.map((student, index) => (
            <div className="student-card" key={index}>
              <img src={student.img} alt={student.name} />
              <h3>{student.name}</h3>
              <p>{student.alt}</p>
              <button onClick={handleDetailsClick}>Подробнее</button>
            </div>
          ))}
        </div>
      </section>

      <section className="students-section">
        <h2 className="section-title">ЧЕМПИОНЫ АКАДЕМИИ</h2>
        <div className="students-grid">
          {filteredChampions.map((student, index) => (
            <div className="student-card" key={index}>
              <img src={student.img} alt={student.name} />
              <h3>{student.name}</h3>
              <p>{student.alt}</p>
              <button onClick={handleDetailsClick}>Подробнее</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ActivStudents;
