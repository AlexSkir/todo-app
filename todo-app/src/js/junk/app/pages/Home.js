import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../PageLayout';
import SEO from '../../common/SEO';
import TodoList from '../../todos/TodoList';
import TodoInput from '../../todos/TodoInput';

const Home = ({ location: { pathname } }) => {
  if (pathname !== '/') {
    return null;
  }
  return (
    <PageLayout title="Home">
      <>
        <SEO
          title="Awesome website!"
          description="SEO tags with React Helmet."
          name="Awesome Company name."
          type="article"
        />
        <h3 className="h3-demo">Home page</h3>
        <main>
          <section className="medium-container">
            <h2>Todos</h2>
            <div className="todoapp">
              <TodoInput />
              <TodoList />
            </div>
          </section>
        </main>
      </>
    </PageLayout>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
