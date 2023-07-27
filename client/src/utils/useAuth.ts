import { useQueryClient, useMutation } from "react-query";
import client from "./client";
import { useAuthType } from "./types";

const useAuth: useAuthType = ( key: string, endpoint: string ) => {
    const queryClient = useQueryClient();

    const { isLoading, mutate, error, data } = useMutation(body => (
        client.post(`${endpoint}`, body).then(response => response.data)
    ), { onSuccess: () => queryClient.invalidateQueries(key) })

    return { isLoading, mutate, data, error }
}

export default useAuth;