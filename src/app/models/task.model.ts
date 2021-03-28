export class Task {
  public Title: string;
  public Priority: '1' | '2' | '3';
  public Description: string;

  public constructor(title: string, priority: '1' | '2' | '3', description: string) {
    this.Title = title;
    this.Priority = priority;
    this.Description = description;
  }
}