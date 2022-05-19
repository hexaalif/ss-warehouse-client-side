import { useEffect, useState } from "react"

const useManage = () => {
    const [manage, setManages] = useState([]);

    useEffect(() =>{
        fetch('manage.json')
        .then(res => res.json())
        .then(data => setManages(data))
    },[])

    return [manage, setManages]
}

export default useManage;