import app from './src/app'
import './src/database'

const PORT = process.env.PORT ?? 3001

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT)
})
