import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
      // default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
      // voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
      // necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
      // nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
      // dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
      // vitae voluptate sequi repellat!`,
    },
  }
  // {
  //   timestamps: true,
  // }
);

export const Book = mongoose.model('books', bookSchema);
