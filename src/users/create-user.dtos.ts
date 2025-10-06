import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  IsInt,
  Min,
  Max,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  @MinLength(3, {
    message: 'Name is too short. Minimum length is $constraint1 characters',
  })
  name: string;

  @IsString({ message: 'Gender must be a string' })
  @IsOptional() // ✅ This exists in 0.3.2
  gender?: string;

  @IsNotEmpty({ message: 'Age is required' })
  @IsInt({ message: 'Age must be an integer number' })
  @Min(1, { message: 'Age must be at least 1' })
  @Max(120, { message: 'Age must not be more than 120' })
  age: number;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City is required' })
  city: string;
}
