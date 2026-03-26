import { use, useContext, useEffect } from "react";
import {
  generateInterviewReport,
  getInterviewReportById,
  getAllReportsByUserId,
} from "../services/interview.api.js";
import { InterviewContext } from "../context/InterviewProvider.jsx";
import { useParams } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth.js";

const useInterview = () => {
  try {
    const { interviewId } = useParams();

    const { loading, setLoading, report, setReport, reports, setReports } =
      useContext(InterviewContext);

    const generateReport = async ({
      resumeFile,
      jobDescription,
      selfDescription,
    }) => {
      setLoading(true);
      let result;
      try {
        result = await generateInterviewReport({
          resumeFile,
          jobDescription,
          selfDescription,
        });
        setReport(result.interviewReport);
        setLoading(false);
      } catch (error) {
        console.error("Error generating interview report:", error);
      } finally {
        setLoading(false);
      }
      return result.interviewReport;
    };

    const fetchReportById = async (reportId) => {
      setLoading(true);
      let result;
      try {
        result = await getInterviewReportById(reportId);
        setReport(result.interviewReport);
      } catch (error) {
        console.error("Error fetching interview report:", error);
      } finally {
        setLoading(false);
      }
      return result.interviewReport;
    };

    const fetchAllReports = async () => {
      setLoading(true);
      let result;
      try {
        result = await getAllReportsByUserId();
        setReports(result.interviewReports);
      } catch (error) {
        console.error("Error fetching interview reports:", error);
      } finally {
        setLoading(false);
      }
      return result.interviewReports;
    };

    useEffect(() => {
      if (interviewId) {
        fetchReportById(interviewId);
      } else {
        fetchAllReports();
      }
    }, [interviewId]);

    return {
      loading,
      report,
      reports,
      generateReport,
      fetchReportById,
      fetchAllReports,
    };
  } catch (error) {
    console.error("Error in useInterview hook:", error);
    throw error;
  }
};

export { useInterview };
