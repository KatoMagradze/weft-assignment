import { apiClient } from "./apiClient";
import { useQuery } from "react-query";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getUsers = () => {
  return apiClient.get<IUser[]>("users").then((resp) => resp.data);
};

export const useGetUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return {
    users,
    isLoading,
    refetch,
    isRefetching,
  };
};
