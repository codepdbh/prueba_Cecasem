import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getFocos = async (filters = {}) => {
    try {
        const params = {};
        if (filters.departamento) params.departamento = filters.departamento;
        if (filters.riesgo) params.riesgo = filters.riesgo;

        const response = await axios.get(`${API_URL}/focos`, { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching focos:", error);
        throw error;
    }
};
