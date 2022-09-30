import mongoose from 'mongoose'

(function () {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('connected'))
    .catch(() => console.log('fail'))
})()


