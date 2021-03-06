import {authHost} from './index'

export const createplayList = async(name) =>{
  const {data} = await authHost.post('api/playList',name)
  return data
}

export const takeplayLists = async() =>{
  const {data} = await authHost.get('api/playList')
  return data
}

export const takeplayTrackLists = async(id) =>{
  const {data} = await authHost.get('api/playListTrack/'+id)
  return data
}
export const AddlayTrackLists = async(id,nameTrack,img,idTrack,namePlayList) =>{
  const {data} = await authHost.post('api/playListTrack',{id,nameTrack,img,idTrack,namePlayList})
  return data
}
export const DeleteTrackLists = async(playListId,trackId) =>{
  const {data} = await authHost.delete('api/playListTrack/', {data: {
    playListId: playListId,
    trackId:trackId
  }})
  return data
}
export const createPlaylist = async(playList) =>{
  const {data} = await authHost.post('api/playList', playList)
  return data
}
export const takeInputplayListLists = async(text) =>{
  const {data} = await authHost.post('/api/playList/search',{text})
  return data
}
export const changeNamePlayList = async(id,name) => {
  console.log(name)
  const {data} = await authHost.put('/api/playList/changeName',{id,name})
  return data
}
export const takeNamePlayList = async(id) => {
  const {data} = await authHost.get('/api/playList/playListName/'+id)
  return data
}
export const DeletePlayLists = async(id) =>{
  const {data} = await authHost.delete('api/playList/'+id)
  return data
}