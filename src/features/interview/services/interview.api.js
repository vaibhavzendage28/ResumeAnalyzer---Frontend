import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

/**
 * Generates an interview report based on the provided job description, resume file, and self-description.
 */
const generateInterviewReport = async ({ jobDescription, resumeFile, selfDescription }) => {
    try {
        const formData = new FormData();
        formData.append('jobDescription', jobDescription);
        formData.append('selfDescription', selfDescription);
        formData.append('resume', resumeFile);

        const response = await api.post('/api/interview', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response.data;

    } catch (error) {
        console.error("Error generating interview report:", error);
        throw error;
    }
}

/** Retrieves an interview report by its ID.
 */
const getInterviewReportById = async (reportId) => {
    try {
        const response = await api.get(`/api/interview/report/${reportId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching interview report:", error);
        throw error;
    }
}

/** Retrieves all interview reports for a specific user by their user ID.
 */
const getAllReportsByUserId = async () => {
    try {
        const response = await api.get(`/api/interview/reports`);
        return response.data;
    } catch (error) {
        console.error("Error fetching interview reports:", error);
        throw error;
    }
}

export { generateInterviewReport, getInterviewReportById, getAllReportsByUserId };