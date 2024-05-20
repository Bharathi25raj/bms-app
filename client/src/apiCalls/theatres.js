import { axiosInstance } from ".";

//Add Theatres
export const AddTheatre = async (payload) => {
    try{
        const response = await axiosInstance.post('/api/theatre/add-theatre', payload);
        return response.data
    } catch (err) {
        return err;
    }
}


//GetAllTheatres
export const GetAllTheatres = async () => {
    try{
        const response = await axiosInstance.get('/api/theatre/get-all-theatres');
        return response.data;
    } catch(err) {
        return err;
    }
}


//GetAllTheatresByOwner
export const GetAllTheatresByOwner = async (payload) => {
    try{
        const response = await axiosInstance.post('/api/theatre/get-all-theatres-by-owner', payload);
        return response.data;
    } catch (err) {
        return err;
    }
}


//UpdateTheatre
export const UpdateTheatre = async (payload) => {
    try{
        const response = await axiosInstance.put('/api/theatre/update-theatre', payload)
        return response.data;
    } catch (err) {
        return err;
    }
}


//DeleteTheatre
export const DeleteTheatre = async (theatreId) => {
    try{
        const response = await axiosInstance.delete(`/api/theatre/delete-theatre?theatreId=${theatreId}`);
        return response.data;
    } catch(err){
        return err;
    }
}