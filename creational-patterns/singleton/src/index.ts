import {Singleton} from './singleton';

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

if (singleton1 === singleton2) {
  console.log('Singleton works, both variables contain the same instance.');
}

if (singleton1.id === singleton2.id) {
  console.log('Singleton works, both variables contain the same id.');
}
