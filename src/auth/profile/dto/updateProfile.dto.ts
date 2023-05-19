import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateProfileDto {
    @IsNotEmpty()
    readonly firstName: string;
    @IsNotEmpty()
    readonly lastName: string;
    readonly adress: string;
    @IsNotEmpty()
    readonly userId: number;
}