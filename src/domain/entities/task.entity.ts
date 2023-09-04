@Entity()
export class Task {
  @Column()
  title: string;

  @Column()
  isCompleted: boolean;
}
