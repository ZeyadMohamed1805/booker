import { useState, useEffect } from "react";
import { useUserType } from "./types";

const useUser: useUserType = () => {
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