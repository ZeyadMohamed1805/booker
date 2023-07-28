import { useQueryClient, useMutation } from "react-query";
import client from "./client";
import { useAuthReservationType } from "./types";
import { useRouter } from "next/navigation";

const useAuth: useAuthReservationType = ( key: string, endpoint: string ) => {
    const queryClient = useQueryClient();
    const { push } = useRouter();

    const { mutate, isLoading } = useMutation(body => (
        client.post(`${endpoint}`, body).then(response => response.data)
    ), { 
        onSuccess: ( data ) => { 
            queryClient.invalidateQueries(key);
            if ( key === "signup" ) push( "/signin" )
            else { 
                localStorage.setItem("booker_user", JSON.stringify(data));
                push("/home");
            }
        },
        onError: ( error: any ) => { alert( error?.response?.data ) }
    })

    return { mutate, isLoading }
}

export default useAuth;