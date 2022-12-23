import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChordsList } from ".";
import { useParams } from "react-router-dom";
import { fetchSingleKey, selectSingleKey } from "../features/singleKey/singleKeySlice";



const SingleKey = () => {


  const { keyId } = useParams();

  const singleKey = useSelector(selectSingleKey);
  const { chords, name } = singleKey

  console.log("single key: ", singleKey)
  console.log("single key chords: ", chords)

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchSingleKey(keyId));
  }, [dispatch])

  return (
    <div id='single-key' className='column'>
      <div id='single-key-detail' className='row'>
        <div className='column mr1'>
          <h1>Key: {name}</h1>
        </div>
      </div>
      <hr />
        {chords && chords.length? <ChordsList chords={chords} /> : 'no chords here'}
    </div>
  )
}

export default SingleKey
