// TODO: integrate passport.js

// import md5 from 'md5';
// import mongodbErrorHandler from 'mongoose-mongodb-errors';
import mongoose from 'mongoose';

// import passportLocalMongoose from 'passport-local-mongoose';

// import validator from 'validator';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      // required: "Please enter a name!"
    },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
    // email: {
    //   type: String,
    //   unique: true,
    //   lowercase: true,
    //   trim: true,
    //   required: true,
    //   // validate: [validator.isEmail, 'Invalid Email address'],
    //   // required: "Please enter an email address!"
    // },
  },
  { timestamps: true }
);

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
  }
});

//  userSchema.plugin(passportLocalMongoose);
//  userSchema.plugin(mongodbErrorHandler);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

