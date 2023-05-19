import { IsNotEmpty } from "class-validator";

export class CreatePointCollecteDto {
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly localiteId: number;
}