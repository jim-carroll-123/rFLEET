import Weight from './Weight'

import mongoose from 'mongoose'

const packageSchema = new mongoose.Schema({
  package_code: {
    type: String,
    required: true
  },
  weight: {
    type: Weight,
    required: true
  }
})

const Package = mongoose.model('Package', packageSchema)

export default Package
