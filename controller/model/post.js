import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const post = mongoose.model('post', PostSchema);

export default post;
