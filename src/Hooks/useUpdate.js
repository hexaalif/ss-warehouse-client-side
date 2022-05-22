import { useEffect, useState } from "react"

const useUpdate = () =>{
    const [update, setUpdate] = useState([])

    useEffect(() =>{
        const url = `http://localhost:5000/update`
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdate(data))
    }, [])
    return [update]
}

export default useUpdate;