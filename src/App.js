import './css/App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';
import inputs from './inputs.json';

function App() {
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    body: '',
  });

  const openModal = (title, body) => {
    setModal({
      isOpen: true,
      title: title,
      body: body,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      title: '',
      body: '',
    });
  };

  return (
    <div className="App">
      <h1>Modal</h1>
      <div class="container">
        <button onClick={() => openModal('Welcome', inputs.module1)}>
          Modal 1
        </button>
        <button onClick={() => openModal('Are you sure?', inputs.module2)}>
          Modal 2
        </button>
        <button id="modal-3">Modal 3</button>
        <button id="modal-4">Modal 4</button>
        <button id="modal-5">Modal 5</button>
      </div>
      {modal.isOpen && (
        <Modal title={modal.title} body={modal.body} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
