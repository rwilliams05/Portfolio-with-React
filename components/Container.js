import React, { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import NavTabs from './NavTabs';
import ContactForm from './components/ContactForm';
import '../src.app.css';

export default function PageContainer() {
  
  const [currentPage, setCurrentPage] = useState('About');
 
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }

    return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
    
  );
}




