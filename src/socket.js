const socket =  require('socket.io');

const conn =  server => {
  const IO =  socket.listen(server);

  IO.on('connection', newSocket => {
      console.log(newSocket.id);
  })
}

module.exports = {conn}