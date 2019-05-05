import React, { useState } from 'react';

import { colors } from '../../styles';

import Course from './Course';
import { Container } from './styles';

function Courses() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Todos', color: 'dark' },
    { id: 2, title: 'COMEX', color: 'secondary' },
    { id: 3, title: 'AGRO', color: 'success' },
    { id: 4, title: 'GA', color: 'sandy' },
    { id: 5, title: 'GPI', color: 'primary' },
    { id: 6, title: 'ADS', color: 'danger' },
  ]);

  return (
    <Container>
      {
        courses.map((course, index) => (
          <Course
            key={course.id}
            even={index}
            title={course.title}
            color={course.color}
          />
        ))
      }
    </Container>
  );
}

export default Courses;
