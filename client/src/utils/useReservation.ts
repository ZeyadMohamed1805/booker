import { useQueryClient, useMutation } from "react-query";
import client from "./client";
import useUser from "./useUser";
import { useRouter } from "next/navigation";
import { useAuthReservationType } from "./types";

const useReservation: useAuthReservationType = ( key: string, endpoint: string ) => {
    const queryClient = useQueryClient();
    const { user } = useUser();
    const { push } = useRouter();

    const { isLoading, mutate } = useMutation(body => (
        client.put(`${endpoint}`, body).then(response => response.data)
    ), { 
        onSuccess: ( data ) => { 
            queryClient.invalidateQueries( key );
            localStorage.setItem("booker_user", JSON.stringify({ token: user.token, user: data }));
            push("/success");
        },
        onError: ( error: any ) => {
            alert( error?.response?.data );
            push("/signin");
        }
    })

    return { mutate, isLoading }
}

export default useReservation;