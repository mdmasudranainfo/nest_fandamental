import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class CreateUserDto {
  @IsInt({ message: 'ID must be an integer number' })
  @Min(1, { message: 'ID must be greater than 0' })
  id: number;

  @IsString({ message: 'Name must be a string' })
  @MinLength(3, {
    message: 'Name is too short. Minimum length is $constraint1 characters',
  })
  name: string;

  @IsString({ message: 'Gender must be a string' })
  @IsOptional() // ✅ This exists in 0.3.2
  gender?: string;

  @IsInt({ message: 'Age must be an integer number' })
  @Min(1, { message: 'Age must be at least 1' })
  @Max(120, { message: 'Age must not be more than 120' })
  age: number;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;
}
