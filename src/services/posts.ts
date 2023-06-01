import { apiClient } from "./apiClient";
import { useQuery } from "react-query";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = (id?: string) => {
  return apiClient
    .get<IPost[]>("posts", {
      params: {
        userId: id,
      },
    })
    .then((resp) => resp.data);
};

export const useGetPosts = (id?: string) => {
  const {
    data: posts,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPosts(id),
  });
  return {
    posts,
    isLoading,
    refetch,
    isRefetching,
  };
};
