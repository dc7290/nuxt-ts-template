const fastify = require('fastify')
const { data } = require('./initialUsers')

const server = fastify()
server.register(require('fastify-cors'), { origin: true })

server.get('/', async (request, reply) => {
  setTimeout(() => {
    reply.status(200).send(data)
  }, 500)
})

server.get('/users', async (request, reply) => {
  const limit = request.query.limit || 10
  const offset = request.query.offset || 0

  const returnUsers = data.slice(offset, limit)

  setTimeout(() => {
    reply.status(200).send(returnUsers)
  }, 500)
})

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
