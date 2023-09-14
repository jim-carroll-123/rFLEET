// TODO: integrate passport.js

// import md5 from 'md5';
// import mongodbErrorHandler from 'mongoose-mongodb-errors';
import mongoose, { Document, Model } from 'mongoose';

import passportLocalMongoose from 'passport-local-mongoose';

// import validator from 'validator';

export interface UserDocument extends Document {
  username: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      // required: "Please enter a name!"
    },
    // email: {
    //   type: String,
    //   unique: true,
    //   lowercase: true,
    //   trim: true,
    //   required: true,
    //   // validate: [validator.isEmail, 'Invalid Email address'],
    //   // required: "Please enter an email address!"
    // },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

 userSchema.plugin(passportLocalMongoose);
//  userSchema.plugin(mongodbErrorHandler);

const User = mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);

export default User as Model<UserDocument>;

