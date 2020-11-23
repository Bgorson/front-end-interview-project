import renderer from 'react-test-renderer';
import Loading from './Loading';

it('should render correctly', () => {
    const component = renderer.create(<Loading/>).toJSON();

    expect(component).toMatchSnapshot();
});