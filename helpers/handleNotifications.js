import axios from "axios";

export const handleNotifications = (userData, userId) => {
  const expirationDate = parseDate(userData.expiracionFecha);
  const today = new Date();
  const notificationDate = new Date(
    expirationDate.getTime() - 7 * 24 * 60 * 60 * 1000
  );

  if (today >= notificationDate && today < expirationDate) {
    axios.post(`https://app.nativenotify.com/api/indie/notification`, {
      subID: `${userId}`,
      appId: 21557,
      appToken: "78MYwmeZ0dWuMHfDobD7oM",
      title: "Aviso de expiración",
      message: `Te quedan ${calculateTimeLeft(expirationDate)}`,
    });

    return {
      id: userData.id,
      ...userData, // Add calculated time left
    };
  }

  return {
    id: userData.id,
    ...userData, // Add calculated time left
  };
};

const calculateTimeLeft = (expirationDate) => {
  const today = new Date();
  const timeDifference = expirationDate.getTime() - today.getTime();

  // Calculate days, hours, minutes (adjust as needed)
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );

  // Format the time left string for display
  let timeLeftString = "";
  if (daysLeft > 0) {
    timeLeftString += `${daysLeft} day(s)`;
  }
  if (hoursLeft > 0) {
    if (timeLeftString.length > 0) {
      timeLeftString += ", ";
    }
    timeLeftString += `${hoursLeft} hour(s)`;
  }
  if (minutesLeft > 0) {
    if (timeLeftString.length > 0) {
      timeLeftString += ", ";
    }
    timeLeftString += `${minutesLeft} minute(s)`;
  }

  return timeLeftString || "Expired"; // Return "Expired" if time difference is negative
};

const parseDate = (dateString) => {
  const year = parseInt(dateString.substring(4));
  const month = parseInt(dateString.substring(2, 4)) - 1; // Months are zero-indexed
  const day = parseInt(dateString.substring(0, 2));
  return new Date(year, month, day);
};
