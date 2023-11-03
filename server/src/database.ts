import mongoose from 'mongoose'

void (async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://admin1234:admin1234@fakestore.uorw27o.mongodb.net/fakeStore?retryWrites=true&w=majority')
    console.log('Database connection established', db.connection.name)
  } catch (error) {
  }
})()
