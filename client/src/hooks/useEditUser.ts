import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser } from "../services/apiUsers";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useEditUser() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: editUserFunc, isPending: isEditing } = useMutation({
        mutationFn: editUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            navigate("/");
            toast.success("User Edited Successfully");
        }
        ,
        onError: (error) => {
            toast.error(error.message);
        }
    });
    return { editUserFunc, isEditing }
}

export default useEditUser
