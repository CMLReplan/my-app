export const fetchAPI = (date) => {
  const day = date.getDate();

  // Return different times for odd/even days for demo
  if (day % 2 === 0) {
    return ['17:00', '18:30', '19:30', '21:00'];
  } else {
    return ['16:00', '17:30', '19:00', '20:30', '22:00'];
  }
};

export const submitAPI = (formData) => {
  return true;
};
