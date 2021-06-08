import './App.css';
import images from './data'
import Header from './Header'
import ImageList from './ImageList'

function App() {
  return (
    <div className="App">
      <Header />
      <ImageList data={images} />
    </div>
  );
}

export default App;
