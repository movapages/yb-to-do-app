import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainArea from './components/MainArea';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  return (
    <div className="h-full flex flex-col">
      <Header/>
      <MainArea>
        <TodoInput/>
        <TodoList/>
      </MainArea>
      <Footer/>
    </div>
  );
};

export default App;
