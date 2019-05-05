import React, { useState } from 'react';

import Course from './Course';
import { Container } from './styles';

function Courses({ type }) {
  const [helpCourses, setHelpCourses] = useState([
    { id: 1, title: 'Todos', color: 'dark' },
    { id: 2, title: 'COMEX', color: 'secondary' },
    { id: 3, title: 'AGRO', color: 'success' },
    { id: 4, title: 'GA', color: 'sandy' },
    { id: 5, title: 'GPI', color: 'primary' },
    { id: 6, title: 'ADS', color: 'danger' },
  ]);

  const [askCourses, setAskCourses] = useState([
    { id: 2, title: 'COMEX', color: 'secondary' },
    { id: 3, title: 'AGRO', color: 'success' },
    { id: 4, title: 'GA', color: 'sandy' },
    { id: 5, title: 'GPI', color: 'primary' },
    { id: 6, title: 'ADS', color: 'danger' },
    { id: 7, title: 'Outros', color: 'dark' },
  ]);

  function renderCourse(course) {
    return (
      <Course
        key={course.id}
        title={course.title}
        color={course.color}
      />
    );
  }

  return (
    <Container>
      {
        type === 'help' && helpCourses.map(course => renderCourse(course))
      }

      {
        type === 'ask' && askCourses.map(course => renderCourse(course))
      }
    </Container>
  );
}

export default Courses;
