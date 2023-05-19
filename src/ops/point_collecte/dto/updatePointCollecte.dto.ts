import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdatePointCollecteDto {
    readonly name: string;
    @IsNotEmpty()
    readonly localiteId: number;
}