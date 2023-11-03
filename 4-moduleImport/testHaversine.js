import haversine from 'haversine'

const calgaryCoords = {
    latitude: 51.04999,
    longitude: -114.066666
  } 
  
  const moosejawCoords = {
    latitude: 50.393333,
    longitude: -105.551941
  }

  console.log(haversine(calgaryCoords, moosejawCoords), 'km from Calgary to MooseJaw');