import Polyglot from 'node-polyglot';
//import english from './en.json';
import vietnamese from './vi.json';

const instance = new Polyglot({phrases: vietnamese});

export default instance;
