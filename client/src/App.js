import './App.css';
import Map from './components/Map.js';

function App() {
  return (
    <div className="flex ">
      <div className="w-44 ">
        Geo Materials Mapper
      </div>
      <div className="w-full">
        <Map />
      </div>
    </div>
  );
}

export default App;
