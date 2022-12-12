import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom';

export default async function useRouteException({signed, token}){

	if(signed){
		const expires_date = jwt_decode(token).exp
		const now = (Date.now() / 1000).toFixed(0)
		if( now >= expires_date ){
			window.localStorage.clear()
			return <Redirect to='/'/>
		}
	}

} 