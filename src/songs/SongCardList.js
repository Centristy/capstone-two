import React from "react";
import SongCard from "./SongCard";

/** Show list of job cards.
 *
 * Used by both JobList and CompanyDetail to list jobs. Receives an apply
 * func prop which will be called by JobCard on apply.
 *
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 *
 */

function SongCardList({ songs, added, playlist_id }) {




  return (
      <div className="SongCardList">
        {songs.map(song => (
            <SongCard
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist.name || song.artist}
                url ={song.preview || song.url}
                album={song.album.title || song.album || 417}
                added = {added}
                playlist_id = {playlist_id}
            />
          )
        )}
      </div>
  );
}

export default SongCardList;
