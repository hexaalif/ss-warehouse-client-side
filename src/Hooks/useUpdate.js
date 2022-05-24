import { useEffect, useState } from "react"

const useUpdate = () =>{
    const [update, setUpdate] = useState([])

    useEffect(() =>{
        const url = `https://secure-plains-24139.herokuapp.com/update`
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdate(data))
    }, [])
    return [update]
}

export default useUpdate;