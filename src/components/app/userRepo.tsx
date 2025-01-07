/* eslint-disable import/no-unresolved */
import { getRequest } from "@/utils/axios/service";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback } from "react";

const UserRepository = () => {
  const fetchUserRepo = useCallback(async () => {
    const data = await getRequest("user-repo");
    return data;
  }, []);

  const { data, error, isLoading } = useQuery({
    queryKey: ["user-repo"],
    queryFn: fetchUserRepo,
  });

  return (
    <div className="w-[25%] bg-gray-900 p-4">
      <h2 className="text-lg font-bold mb-4">Your Repositories</h2>
      <ul>
        {/* {data ? (
          data?.map((repo: any, index: string) => (
            <li
              key={index}
              className="p-2 mb-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer"
            >
              {repo}
            </li>
          ))
        ) : ( */}
        <div className="p2 font-playRight">No Repository Found</div>
        {/* )} */}
      </ul>
    </div>
  );
};

export default UserRepository;
