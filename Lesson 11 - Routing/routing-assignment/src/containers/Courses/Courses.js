import React, { Component } from 'react';

import './Courses.css';
import { Link, Route } from 'react-router-dom';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    };

    render () {
        const coursesElems = this.state.courses.map(course => (
            <Link key={course.id}
                  to={{
                      pathname: `${this.props.match.url}/${course.id}`,
                      search: `?title=${course.title}`
                  }}>
                <article className="Course">{course.title}</article>
            </Link>
        ));

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {coursesElems}
                </section>
                <Route path={`${this.props.match.url}/:id`} component={Course} />
            </div>
        );
    }
}

export default Courses;