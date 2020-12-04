import react,{useState} from 'react'
import axios from 'axios'

export const useRequestData = (url) => {
	const [data,setData] = useState({})
	axios.get(url)
	.then((res) => {
		setData(res.data)
	})
	.catch((err) => {console.log(err)})
	
	return data
}

