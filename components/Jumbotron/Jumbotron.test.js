import renderer from 'react-test-renderer';
import Jumbotron from './Jumbotron';

it('should render correctly', () => {
    const component = renderer.create(<Jumbotron/>).toJSON();

    expect(component).toMatchSnapshot();
});