import axios from "axios";
import { useState,useEffect } from "react";
import { Game } from "../types";

const useFetchData = (url:string,param?:string) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [datas,setDatas] = useState<Game[]>([])
    const [error,setError] = useState<string>('')

    useEffect(() => {
        setLoading(true);
        axios.get(url,{
            baseURL:`https://${process.env.REACT_APP_X_RAPID_HOST}/api`,
            headers:{
                'x-rapidapi-key':process.env.REACT_APP_X_RAPID_API_KEY,
                'x-rapidapi-host': process.env.REACT_APP_X_RAPID_HOST
            },
            params:{
                id: param
            }
        })
        .then(res => setDatas(res.data))
        .then(() => setLoading(false))
        .catch(e => setError(e.message))
    }, [url,param])

    return {loading,error,datas}
}

export default useFetchData