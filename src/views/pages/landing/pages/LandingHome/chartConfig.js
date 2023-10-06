export const dataConfig = (labels, backgroundColor, data, label = '') => ({
  labels,
  datasets: [
    {
      label,
      backgroundColor,
      data,
    },
  ],
});

export const options = {
  responsive: true,
  maintainAspectRatio: false,
};
