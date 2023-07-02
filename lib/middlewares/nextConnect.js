import connect from 'next-connect'
import databaseMiddleware from './mongoose'

export default function databaseHandler() {
  return connect().use(databaseMiddleware)
}
