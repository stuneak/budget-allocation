import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserDataSchema = new Schema({
  budget: {
    type: String,
    required: true,
    default: null
  },
  categories: {
    type: Array
  },
  shoppingList: {
    type: Array
  }
});

export default mongoose.model('UserData', UserDataSchema);
