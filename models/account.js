import { Schema, model, models } from 'mongoose';
import schema from './accountSchema'
const Account = new Schema(schema)

export default (models.Account || model('Account', Account));