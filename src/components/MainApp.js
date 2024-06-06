import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Post from './Post';
import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../index.css';

function MainApp() {
  return (
    <div className="container-fluid">
      <Header />
      <section>
        <div className="row">
          <Sidebar />
          <main className="col-7 overflow-auto">
            <Post />
            <Post />
          </main>
          <div className="col-3">
            <UserList />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainApp;




