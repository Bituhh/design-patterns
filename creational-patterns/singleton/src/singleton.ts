export class Singleton {
  public readonly id: string = crypto.randomUUID();

  private static instance: Singleton;

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  constructor() {
    if (Singleton.instance) {
      throw new Error('Use Singleton.getInstance()');
    }
  }
}
