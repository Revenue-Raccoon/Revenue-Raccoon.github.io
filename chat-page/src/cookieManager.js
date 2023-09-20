import socket from './socketConfig';


// Function to set a cookie in localStorage with an expiration timestamp
export function setCookie(cookie, expirationTimestamp) {
    const cookieData = {
      value: cookie,
      expiration: expirationTimestamp,
    };
    localStorage.setItem('user_cookie', JSON.stringify(cookieData));
  }
  
  // Function to remove a cookie from localStorage
  export function removeCookie() {
    localStorage.removeItem('user_cookie');
  }
  
  // Function to get the user's cookie and check if it has expired
  export function getUserCookie() {
    const cookieData = localStorage.getItem('user_cookie');
    if (cookieData) {
      const parsedData = JSON.parse(cookieData);
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (parsedData.expiration >= currentTimestamp) {
        return parsedData.value;
      } else {
        removeCookie(); // Remove the expired cookie
      }
    }
    return null; // Cookie is missing or expired
  }
  
  // Function to check if a user is logged in
  export function isLoggedIn() {
    return !!getUserCookie();
  }
  

// Function to get the user's ID from a cookie by communicating with the backend
export function getUserIdFromCookie(cookie) {
  return new Promise((resolve, reject) => {
    socket.emit('get_id_from_coockie', { cookie: cookie });

    socket.on('get_id', (data) => {
      const user_id = data.id;
      resolve(user_id);
    });

    socket.on('get_id_error', (errorData) => {
      const errorMessage = errorData.error_message;
      reject(new Error(errorMessage));
    });
  });
}
