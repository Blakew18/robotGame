import axios from 'axios';

export const sendRootStoreToAPI = async(data:any) =>{
  try {
    await axios.post(
      'http://localhost:3001/persistData/', data
    )
  } catch (err) {
    console.log(err)
  }
}

export const getRootStoreData = async () => {
  try{
  const store = await axios.get(
    'http://localhost:3001/rootStoreData/'
  )
  return store.data
  } catch(err){
    console.log(err)
  }

}