import { combineReducers } from 'redux';


const songsReducer= () =>{
	return [
		{title: '5 Seconds of Summer' , duration:'4:04'},
		{title: 'Lose Yourself' , duration:'2:30'},
		{title: 'All Star', duration:'3:15'},
		{title: 'I want it that way', duration:'1:45'}
	];
};


const selectedSongReducer = (selectedSong=null, action) =>{
	if(action.type ==='SONG_SELECTED'){
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});