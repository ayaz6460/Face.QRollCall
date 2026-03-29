// src/hooks/useSocket.js
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

let socketInstance = null;

export const getSocket = () => {
  if (!socketInstance) {
    socketInstance = io('/', { transports: ['websocket', 'polling'] });
  }
  return socketInstance;
};

export function useSocket(room, handlers = {}) {
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  useEffect(() => {
    const socket = getSocket();

    // Join room
    if (room) {
      if (room === 'admins') {
        socket.emit('join-admins');
      }
      const [type, id] = room.split('-');
      if (type === 'teacher') socket.emit('join-teacher', id);
      else if (type === 'student') socket.emit('join-student', id);
    }

    // Attach event listeners
    const entries = Object.entries(handlersRef.current);
    entries.forEach(([event, handler]) => {
      socket.on(event, (...args) => handlersRef.current[event]?.(...args));
    });

    return () => {
      entries.forEach(([event]) => socket.off(event));
    };
  }, [room]);

  return getSocket();
}
