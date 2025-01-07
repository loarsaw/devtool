/* eslint-disable import/no-unresolved */
import { getRequest, postRequest } from "@/utils/axios/service";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [githubUrl, setGithubUrl] = useState<string>("");
  const navigate = useNavigate();
  // const { setRepoURL } = userRepoStore();
  const fetchUserFeed = useCallback(async () => {
    const data = await getRequest("user-feed");
    return data;
  }, []);

  const { data, error, isLoading } = useQuery({
    queryKey: ["user-feed"],
    queryFn: fetchUserFeed,
  });

  function submit() {
    if (githubUrl.trim()) {
      // setRepoURL(githubUrl);
      navigate("/editor");
    } else {
      console.warn("Please enter a valid GitHub URL");
    }
  }

  return (
    <div className="w-[70%] p-6">
      {/* <h2 className="text-lg font-bold mb-4">Activity Feed</h2>
      <div className="space-y-4">
        {dummyFeed.map((activity, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded hover:bg-gray-700"
          >
            {activity}
          </div>
        ))}
      </div> */}
      {/* GitHub URL Input */}
      <div className="mt-8 flex flex-row items-center space-x-2 justify-center">
        <input
          value={githubUrl}
          type="text"
          onChange={(e) => setGithubUrl(e.target.value)}
          placeholder="Enter GitHub URL here"
          className="w-full p-3  text-black rounded-md focus:outline-none"
        />
        <button
          onClick={submit}
          className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-green-400 hover:scale-105 transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Feed;
