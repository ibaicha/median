import { IsNotEmpty } from "class-validator";

export class CreateOpDto {
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly typeOpId: number;
    @IsNotEmpty()
    readonly pointCollecteId: number;
}