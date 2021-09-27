import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRiverInformation } from '../services/river';

export default function RiverInformation({ name }) {
  const [riverInformation, setRiverInformation] = useState({});

  useEffect(() => {
    getRiverInformation(name)
      .then(data =>
        setRiverInformation(data)
      );
  }, [name])

  // if you forget the name, not identifying explicit dependencies
  // useEffect(() => {
  //   getRiverInformation()
  //   .then(data =>
  //     setRiverInformation(data)
  //   );
  // }, [])


  return (
    <div>
      <h2>River Information</h2>
      <ul>
        <li>Continent: {riverInformation?.continent}</li>
        <li>Length: {riverInformation?.length}</li>
        <li>Outflow: {riverInformation?.outflow}</li>
      </ul>
    </div>
  )
}

RiverInformation.propTypes = {
  name: PropTypes.string.isRequired
}