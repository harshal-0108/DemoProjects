import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useEmployees = () => {
  return useQuery({
    queryKey: ["employees"],

    queryFn: async () => {
      const response = await api.get("/users");

      return response.data;
    },
  });
};