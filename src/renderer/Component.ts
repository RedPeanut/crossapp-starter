export class Component {
  private id: string;
  constructor(id: string) {
    this.id = id;
  }
  getId(): string { return this.id; }
}