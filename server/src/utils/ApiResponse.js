class ApiResponse {
  constructor(status, message = "Success come under ur foot", data) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = status < 400; // if status code is less than 400 then success is "true" a boolean return
  }
}

export { ApiResponse };
