import axios from 'axios';
import { Post } from '../types';

const axiosInstance = axios.create({baseURL: 'http://localhost:3001'})

export async function getPosts({pageParam = 1}) {
    return (await axiosInstance.get<{data: Post[]}>(`/posts?_page=${pageParam}&_per_page=7`)).data
}
