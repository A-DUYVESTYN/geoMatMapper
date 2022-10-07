import { MapContainer, TileLayer } from 'react-leaflet'


const Map = (props) => {

  return (
    <>
      <div>Geo Materials Mapper</div>
      <div id="map">
        <MapContainer center={[43.6532, -79.3832]} zoom={12} >

          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /></MapContainer>
      </div>
    </>
  )
}

export default Map