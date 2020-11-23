import renderer from 'react-test-renderer';
import Navbar from './Navbar';

it('should render correctly', () => {
    const component = renderer.create(<Navbar/>).toJSON();

    expect(component).toMatchSnapshot();
});