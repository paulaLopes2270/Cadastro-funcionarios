import axios from "axios";

export const api = axios.create({
  baseURL: "https://630e6c6837925634187d2d6d.mockapi.io/api/v1",
});

export const getEmployee = async () => {
  try {
    const response = await api.get("/employee");
    // console.log(response);
    return response;
  } catch (err) {
    console.log("error!");
    console.log(err);
  }
};

export const postEmployee = async (employee) => {
  try {
    const response = await api.post("/employee", employee);
    return response;
  } catch (err) {
    console.log("error!");
    console.log(err);
  }
};

export const deleteEmployee = async (employeeId) => {
  try {
    const response = await api.delete(`/employee/${employeeId}`);
    return response;
  } catch (err) {
    console.log("error!");
    console.log(err);
  }
};

export const putEmployee = async (employeeTargetId, employee) => {
  try {
    const response = await api.put(`/employee/${employeeTargetId}`, employee);
    return response;
  } catch (err) {
    console.log("error!");
    console.log(err);
  }
};
