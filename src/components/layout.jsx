import React from 'react';
import { useUser } from '/src/components/UserContext.jsx';
import { useHistory } from 'react-router-dom';

const Layout = ({ children }) => {
  // const { user } = useUser();
  // const history = useHistory()
  // console.log("work")
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
