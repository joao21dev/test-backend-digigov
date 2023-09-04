export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isCompleted: boolean;
}
