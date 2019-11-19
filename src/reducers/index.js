import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Smells like teen spirit", duration: "4.05" },
    { title: "Paranoid Android", duration: "5.10" },
    { title: "Desecration smile", duration: "3.50" },
    { title: "Under the bridge", duration: "4.20" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
