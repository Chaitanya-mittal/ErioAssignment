import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../services/apiUsers";
import toast from "react-hot-toast";

function useDeleteUser() {
    const queryClient = useQueryClient();
    const { mutate: deleteUserFunc, isPending: isDeleting } = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });

            toast.success("User Deleted Successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });
    return { deleteUserFunc, isDeleting }
}

export default useDeleteUser
