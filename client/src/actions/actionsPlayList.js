export const increaseTimesPlayed = (id) => {
  return {
      type:"INC_TIMES_PLAYED",
      payload: id
  };
};
export const setCurrentPlaying = (curr_music) => {
  return {
      type: "SET_CURR_PLAYING",
      payload: curr_music
  };
}
export const setBannerOpen = (isOpen) => {
  return {
      type:"SET_BANNER_OPEN",
      payload:isOpen
  };
};
