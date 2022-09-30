import { } from '../../../utils/connectMongo.js'
import Account from '../../../models/account.js'


export default async function handler(req, res) {
  res.json(req.body)
}