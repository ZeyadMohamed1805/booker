import { useState, useEffect } from "react";

const useUser = () => {
    const [ user, setUser ] = useState<any>({});
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const stringifieduser = localStorage.getItem("booker_user");
        stringifieduser && setUser(JSON.parse(stringifieduser));
        setLoading(false);
    }, []);

    return { user, loading }
}

export default useUser;