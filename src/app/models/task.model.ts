export class Task {
  public static Contador = 0;

  public Title: string;
  public Priority: '1' | '2' | '3';
  public Description: string;
  public id: number;

  public constructor(title: string, priority: '1' | '2' | '3', description: string) {
    this.id = Task.Contador;
    Task.Contador += 1;

    this.Title = title;
    this.Priority = priority;
    this.Description = description;
  }
}