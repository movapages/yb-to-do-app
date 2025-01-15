import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainArea from './components/MainArea';

const App: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <MainArea>
        <p>To-do list will go here...</p>
      </MainArea>
      <Footer />
    </div>
  );
};

export default App;

