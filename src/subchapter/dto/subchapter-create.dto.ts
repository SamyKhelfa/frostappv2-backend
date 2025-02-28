import { ApiProperty } from '@nestjs/swagger';

export class SubChapterCreateDTO {
  @ApiProperty({
    description: 'title of the subchapter',
    example: 'Cold shower : Go to the bathrooms',
  })
  title: string;

  @ApiProperty({
    description: 'Description of subchapter',
    example: 'In this subchapter we will see how to start cold shower',
  })
  description: string;

  @ApiProperty({
    description: 'Video of subchapter',
    example: 'Video of how taking cold shower',
  })
  video: string;

  @ApiProperty({
    description: 'Position of subchapter in the chapter',
    example: 1,
  })
  position: number;

  @ApiProperty({
    description: 'Status of subchapter',
    example: true,
  })
  status: boolean;

  @ApiProperty({
    description: 'Active status of subchapter',
    example: true,
  })
  active: boolean;

  @ApiProperty({
    description: 'ID of the chapter this subchapter belongs to',
    example: 1,
  })
  chapterId: number;

  @ApiProperty({
    description: 'The duration of the video',
    example: 1,
  })
  duration: number;
}
