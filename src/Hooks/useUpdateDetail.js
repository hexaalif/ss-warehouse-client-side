import { useEffect, useState } from "react"

const useUpdateDetail = (updateId) =>{
    const [update, setUpdate] = useState({})

    useEffect(() =>{
        const url = `http://localhost:5000/update/${updateId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdate(data))
    }, [updateId])
    return [update]
}

export default useUpdateDetail;