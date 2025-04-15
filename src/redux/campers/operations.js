import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const fetchCampers = createAsyncThunk(
  '/campers/fetchAll',
  fetchCampersBaseFunc
);
export const fetchCampersLoadMore = createAsyncThunk(
  '/campers/fetchLoadMore',
  fetchCampersBaseFunc
);
async function fetchCampersBaseFunc({ page, limit, filters }, thunkAPI) {
  try {
    const { equipment, ...filtersOther } = filters;
    const equipmentObj = equipment.reduce((obj, value) => {
      obj[value] = true;
      return obj;
    }, {});
    const params = {
      page,
      limit,
      ...filtersOther,
      ...equipmentObj,
    };
    const response = await axios.get('/campers', { params });
    return response.data;
  } catch (e) {
    return (
      thunkAPI.rejectWithValue(e.message) &&
      toast.error('Something went wrong :( Try to reload your page.')
    );
  }
}

export const fetchCampersById = createAsyncThunk(
  '/campers/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return (
        thunkAPI.rejectWithValue(e.message) &&
        toast.error('Something went wrong :( Try to reload your page.')
      );
    }
  }
);
