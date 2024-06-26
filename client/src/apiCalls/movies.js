import { axiosInstance } from ".";

//Create
export const AddMovie = async (payload) => {
    try{
        // console.log('test1');
        const response = await axiosInstance.post('/api/movie/add-movie', payload);
        // console.log('test2');
        return response.data
    } catch(err) {
        return err;
    }
}


//Read
export const GetAllMovies = async () => {
    try{
        const response = await axiosInstance.get('/api/movie/get-all-movies')
        return response.data;
    } catch (err) {
        return err;
    }
}


//Update
export const UpdateMovie = async (payload) => {
    try{
        const response = await axiosInstance.put('/api/movie/update-movie', payload);
        return response.data;
    } catch (err) {
        return err;
    }
}


//Delete
export const DeleteMovie = async (movieId) => {
    try{
        const response = await axiosInstance.delete(`/api/movie/delete-movie?movieId=${movieId}`);
        return response.data;
    } catch (err) {
        return err;
    }
}