import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>No song has been selected</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        {song.title}
        <br />
        {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
