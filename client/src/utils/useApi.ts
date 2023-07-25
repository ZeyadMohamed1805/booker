import { useQuery } from "react-query";
import { useApiType } from "./types";
import client from "./client";

const useApi: useApiType = ( key, endpoint )  => {
    const { isLoading, error, data } = useQuery(key, () => (
        client.get(`${endpoint}`).then(response => response.data)
    ));

    return { isLoading, error, data }
}

export default useApi;