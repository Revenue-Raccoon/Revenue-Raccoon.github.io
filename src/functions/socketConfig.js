import io from 'socket.io-client';

const socket = io('https://revenue-raccoon.github.io/');  // Replace with your server's URL

export default socket;