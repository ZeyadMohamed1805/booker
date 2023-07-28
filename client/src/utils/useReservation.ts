import { useQueryClient, useMutation } from "react-query";
import client from "./client";
import { useAuthType } from "./types";

const useReservation: useAuthType = ( key: string, endpoint: string ) => {
    const queryClient = useQueryClient();

    const { isLoading, mutate, isError, error, data } = useMutation(body => (
        client.put(`${endpoint}`, body).then(response => response.data)
    ), { onSuccess: () => queryClient.invalidateQueries(key) })

    return { isLoading, mutate, data, isError, error }
}

export default useReservation;