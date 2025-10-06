import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, trim: true, minlength: 3 })
  name: string;

  @Prop({ required: false, trim: true })
  gender?: string;

  @Prop({ required: true, min: 1, max: 120 })
  age: number;

  @Prop({ required: true, trim: true, lowercase: true, unique: true })
  email: string;

  @Prop({ required: true, trim: true })
  city: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
