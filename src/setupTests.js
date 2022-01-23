import { configure } from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// configure({ adapter: new EnzymeAdapter() });
configure({ adapter: new Adapter() });