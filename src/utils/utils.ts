export default function getMinAndMaxDeliveryDates() {
  return {
    currentDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ).getTime(),
    maxDeliveryDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate()
    ).getTime(),
  };
}
