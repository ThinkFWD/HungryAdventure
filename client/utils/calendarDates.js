module.exports = {
  getDays: (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const result = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return result;
  },
};
