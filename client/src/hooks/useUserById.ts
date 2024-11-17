import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../services/apiUsers";

function useUserById(id: string) {
    const { data: user, isPending: loadingUser } = useQuery<any>({
        queryKey: ['user', id],
        queryFn: () => getUserById(id),

    });
    return { user, loadingUser }
}

export default useUserById
