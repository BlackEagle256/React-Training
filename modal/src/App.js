import Modal from "./modal/Modal";

function App() {
  return (
    <div style={{backgroundColor:"darkgray", height:"100vh"}}>
      <Modal>
      <p>Are You Sure You Want To Delete This Object?</p>
        <ul className='cd-buttons'>
            <li className='yes' style={{backgroundColor:"red"}}><a href="#0">Yes</a></li>
            <li><a href="#0">No</a></li>
        </ul>
      </Modal>
    </div>
  );
}

export default App;
