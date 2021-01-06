if (typeof window === 'undefined') {
  const { server } = import('./server')
  server.listen()
} else {
  const { worker } = import('./browser')
  worker.start()
}