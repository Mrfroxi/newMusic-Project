import {authHost} from './index'
export const takeusers = async() =>{
  const {data} = await authHost.get('api/user')
  return data
}
export const deleteusers = async(id) =>{
  const {data} = await authHost.delete('api/user/'+id )
  return data
}