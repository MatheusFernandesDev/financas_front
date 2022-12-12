import {useState, useEffect} from 'react'
import api from '../service/api'

export default async function usePermission(to){
	const [perm, setPerm] = useState(null);
	async function getPermission(){
		const {data} = await api.post('/permissions_page',{path: to})
		if(data.allowed === 'enabled'){
			return setPerm('enabled');
		}else{
			return window.location.href = 'http://localhost:3000/forbidden';
		}
	}

	useEffect(() => {
		return getPermission();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return perm;
}