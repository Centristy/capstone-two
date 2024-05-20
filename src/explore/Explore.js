import React, { useContext, useState, useEffect } from "react";

    
import Dropdown from 'react-dropdown';

import "./Explore.css"

import UserContext from "../auth/UserContext";

import ExploreLogo from "../static/explore-logo.png"
import VioletApi from "../api/api";
import SongCardList from "../songs/SongCardList";
import GenerateButton from "../common/GenerateButton";



function Explore() {

const {currentUser} = useContext(UserContext)

const [searchSongs, setSearchSongs] = useState(null);

const [id, setId] = useState(0)




// Function to search songs and load them

async function search(q) {

let search = await VioletApi.getSongs(q);
console.log(search)
setSearchSongs(search);
}

// For future q will be generated via soundlink api 

let q = ["billie eilish", "eminem", "benson boone", "mariah carrey", "beyonce"]

let rand = Math.floor(Math.random() * 5)


async function search(query) {

    let search = await VioletApi.getSongs(query);
    console.log(search)
    setSearchSongs(search);
    }


const options = []
const ids = []



for (let i = 0; i < currentUser.playlists.length; i++){
    options.push(currentUser.playlists[i].title)
    ids.push(currentUser.playlists[i].id)
    
}





    function handleSelection(){
        setTimeout(function(){

            let currValue = document.getElementsByClassName("is-selected")[0].innerText

            if (currValue){

                for (let j = 0 ; j < options.length; j++){

                    if (currValue == options[j]){

                        setId(ids[j])

                        console.log(id, "This is the playlist id")

                    }

                }

            }

            

        }, 500)

    

    rand = Math.floor(Math.random() * 5)


    }

return(
    <div className="explore-page">
    <h1>Explore Page</h1>

        <div className="dropdown menu">

        <p className="information"> Welcome to Violet Explore. Here, we try to guess what songs you like based on your preferences. Give it a try, and listen to something new. Selecting one of your playlists allows for you to easily add our song choices! Every song you love improves our algorithm </p>
        <Dropdown  id = "drop-down" className="drop-down" options={options}  onChange={handleSelection} placeholder="Select an option" />
        <GenerateButton className="generate" searchFor={search}  query={q[rand]}/>
        </div>

        {searchSongs 
            ? (
                <div className="song-list ml-3">

                <SongCardList songs={searchSongs.songs} added={false} playlist_id={id} limit={4}/>
    
                </div>
            ) : (
                <></>
            )}

        <img className="explore-logo" src={ExploreLogo}></img>

    </div>
)
}

export default Explore;