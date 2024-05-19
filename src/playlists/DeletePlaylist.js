
import React, {useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom";
import VioletApi from "../api/api";
import Alert from "../common/Alert";

import "./DeletePlaylist.css"



function DeletePlaylist(){



    let {id} = useParams()

    let result = null

    useEffect(function deletelaylistandSongs() {
        async function deleteList() {
    
            result = await VioletApi.deletePlaylist(id)
        }
        deleteList()
    });

    console.log(result)

    

    return(
        <>
        <p className="delete">Deleted Playlist </p>
        <Link to="/"> Return Home </Link>
        </>

    )



}


export default DeletePlaylist;
