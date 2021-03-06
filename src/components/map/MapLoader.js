import { useEffect, useState, useRef, useMemo, useCallback, useContext, Suspense } from 'react';
import * as React from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup
} from 'react-leaflet'
import { L, marker, LatLngExpression, tooltip, icon, Icon } from 'leaflet'
//import places from '../../response_1655493817203.json'


import axios from 'axios'
import LocationModal from './LocationModal';
import Button from '@mui/material/Button';
import { Modal, Box } from '@mui/material';
import Slider from '../Slider/Slider'
import { SliderPositionContext } from '../../App';








function MapLoader2(props) {


  useEffect(() => {
    getLocation()

  }, [])



  const [center, setCenter] = useState({ lat: 37.09, lng: -95.71 })
  const [locations, setLocations] = useState({ results: [] })


  const { pos } = useContext(SliderPositionContext)


  const containerStyle = {
    width: '95vw', height: '70vh'
  };

  function useAxiopoicall() {
    let key = "p0HbJr63a4YIthe7AH4iq05DKpndv0Qy"
    let poitemp = `https://api.tomtom.com/search/2/poiSearch/restaurant.json?limit=100&lat=${center.lat}&lon=${center.lng}&radius=${useContext(SliderPositionContext)}&view=Unified&relatedPois=off&key=p0HbJr63a4YIthe7AH4iq05DKpndv0Qy`
    let nearBytemp = `https://api.tomtom.com/search/2/nearbySearch/.json?lat=${center.lat}&lon=${center.lng}&limit=50&radius=${pos}&categorySet=7315&view=Unified&relatedPois=off&key=${key}`
    //console.log(``);

    axios.get(`${nearBytemp}`)
      .then((response) => {
        console.log(nearBytemp);

        setLocations(response.data)
        console.log(response.data.summary.geoBias);

      }).catch((error) => {
        console.log(error);

      })
  }

  function getLocation() {

    console.log(navigator.geolocation)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);


    } else {
      console.log("The Browser Does not Support Geolocation");
    }
  }

  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "  " + "Longitude: " + position.coords.longitude + "******");
    setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })



  }

  function showError(error) {
    if (error.PERMISSION_DENIED) {
      <div>"The User have denied the request for Geolocation."</div>;
    }
  }

  function MyPosition() {
    const map = useMap()
    map.setView(center, 15)

    useAxiopoicall()
    MarkerMaker()
    return null;
  }



  function MarkerMaker() {

    var map = useMap()



    {
      locations.results.forEach(place => {

        let locationDetials = `${place.poi.name},
          ${place.poi.phone},
          ${place.address.freeformAddress}`
        // console.log(locationDetials);


        let newMark = new marker([place.position.lat, place.position.lon], { icon: locIcon })
          .bindTooltip(place.poi.name, { permanent: false })
          .bindPopup(locationDetials)
          .addTo(map)
        //console.log([place.position.lat, place.position.lon])
      }

      )


    }
  }

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(true)
    const [pos, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
            setCenter(marker.getLatLng())
            MyPosition()

          }
          console.log(pos);
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={pos}
        icon={userIcon}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span>
        </Popup>
      </Marker>
    )
  }

  const locIcon = icon({
    iconUrl: require("../../locationpincur.png"),
    iconSize: [29, 52],
    iconAnchor: [15, 20],
    opacity: [.5]



  });

  const userIcon = icon({
    iconUrl: require("../../pers.png"),
    iconSize: [38, 38],
    iconAnchor: [15, 20],
    popupAnchor: [-3, -76],
    tooltipAnchor: [45, 100]


  });


  const [toggleModal, setToggleModal] = useState(false)
  //const 

  const displayLocationModal = () => {

    if (locations.results.length > 0) {
      return (
        <div className='justify-center'>

          <LocationModal toggleModal={toggleModal} setToggleModal={setToggleModal} locations={locations} />

        </div>



      )
    }

  }




  return (


    <>
      <div className='modal-btn'>
        <button onClick={() => setToggleModal(true)}>Let's Pick!!</button>
      </div>
      <MapContainer center={center} zoom={10} style={containerStyle} scrollWheelZoom={true}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <MyPosition />
        <MarkerMaker />

        <DraggableMarker
        >

        </DraggableMarker>






      </MapContainer>
      <div>
        <div className='center'>

          <Slider />
        </div>
      </div>
      <div>
        {displayLocationModal()}
      </div>


    </>

  )
}

export default MapLoader2 