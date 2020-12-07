interface IUserProps {
  name?: string;
  age?: number;
}

type Callback = () => {};

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: IUserProps) { }

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: IUserProps): void {
    Object.assign(this.data, update);
  }

  onEvent(eventName: string, callback: Callback) { }
}
