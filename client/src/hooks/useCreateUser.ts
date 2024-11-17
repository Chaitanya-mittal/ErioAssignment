import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createUser } from "../services/apiUsers"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";

function useCreateUser() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: createUserFunc, isPending: isCreating } = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            navigate("/");
            toast.success("User Created Successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    return { createUserFunc, isCreating }
}

export default useCreateUser
