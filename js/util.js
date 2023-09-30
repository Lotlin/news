export const getDateFirmated = data => {
  const date = data.publishedAt.split('T')[0];
  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[2];
  const formatedDate = `${day}/${month}/${year}`;

  return formatedDate;
};

export const getTimeFormated = data => {
  const time = data.publishedAt.split('T')[1];
  const hours = time.split(':')[0];
  const minutes = time.split(':')[0];
  const formatedTime = `${hours}:${minutes}`;

  return formatedTime;
};
