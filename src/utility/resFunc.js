const response = (res, statusCode, status, data, token) => {
  return res.status(statusCode).json({
    status: status,
    results: data.length,
    data: data,
    token: token,
  });
};

module.exports = response;
