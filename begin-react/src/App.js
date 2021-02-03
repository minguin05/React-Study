import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App() {
  const name = 'react';
  const style = {
    background: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem' 
  }

  // Fragment - 이름 없는 태그, 브라우저 상에서 별도의 엘리먼트로 나타나지 않음 
  
  return (
    <> 
      <Hello /> 
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
