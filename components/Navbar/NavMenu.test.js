
import renderer from 'react-test-renderer';
import NavMenu from './NavMenu';

it('should render correctly', () => {
    const component = renderer.create(<NavMenu/>).toJSON();

    expect(component).toMatchSnapshot();
});