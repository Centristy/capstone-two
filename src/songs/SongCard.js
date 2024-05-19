import React, { useContext, useState, useEffect } from "react";
import "./SongCard.css";
import { faCircleInfo, faSquareMinus, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VioletApi from "../api/api";


/** Show information about playlist - songs and has playablilty.
 * Song card can add song / remove song from a playlist
 */

function SongCard({ id, title, artist, album, url, added, playlist_id }) {

 

  const [playing, setPlaying] = useState(false)

  // Time format for duration 134 --> 1:34

  function timeformat(text){

    let timetext = text.split('')[0] + ":" + text.split('')[1] + text.split('')[2]

    return timetext
  }

  function toggle(){

    if (playing){
      setPlaying(false)
    }
    else (setPlaying(true))

  }

  async function addNewSong(){
    let data = {

      title: title,
      artist: artist,
      album: album,
      url: url,
      playlist_id: parseInt(playlist_id)

    }
    try{
    let res = await VioletApi.addSong(data)
    window.location.reload();
    } catch(e){

      console.log(e)

    }

  }

  async function removeSong(){
    try{
      let result = await VioletApi.removeSong(id)
      window.location.reload();
    }catch(e){
      console.log(e)
    }
  }



  return (
      <div className="SongCard card">
        <div className="card-body">
          <h6 className="card-title">{title} <button className="play-circle" onClick={toggle}><FontAwesomeIcon icon={faCircleInfo}/></button> {added ? <button onClick={removeSong}><FontAwesomeIcon className="delete-icon" icon={faSquareMinus}/></button> : <button onClick={addNewSong}><FontAwesomeIcon className="add-icon" icon={faSquarePlus}/></button>}</h6>

          <audio controls id="player" name="media"><source src={url} type="audio/mpeg"/></audio>
          {playing ?
            <p><small>Artist: {artist} &nbsp; &nbsp; Album: {album || null}</small></p>: null
          }

        </div>
      </div>
  );
}




export default SongCard;
