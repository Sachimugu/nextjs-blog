
import useSWR from "swr";

const baseURL = "http://localhost:3000/";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Swr(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}