import './App.css';
import Map from './components/Map.js';

function App() {
  return (
    <div className="flex ">
      <div className="w-1/3">
        Geo Materials Mapper
        <h2>Legend</h2>
      </div>

      <div className="w-full">
        <Map />
      </div>
    </div>
  );
}

export default App;
