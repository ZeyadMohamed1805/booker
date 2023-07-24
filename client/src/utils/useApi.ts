import { useQuery } from "react-query";
import axios from "axios";
import { useApiType } from "./types";

const useApi: useApiType = ( key, endpoint )  => {
    const { isLoading, error, data } = useQuery(key, () => (
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`).then(response => response.data)
    ));

    return { isLoading, error, data }
}

export default useApi;