import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/apiUsers"; // Adjust the import path as necessary
import { useSearchParams } from "react-router-dom";
export function useUsers() {
    const [searchParams] = useSearchParams();
    const currPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1;



    const { data: { users, count } = { users: [], count: 0 }, isPending: loadingUsers } = useQuery<any>({
        queryKey: ["users", currPage],
        queryFn: getUsers,
    });
    return { users, count, loadingUsers };
}