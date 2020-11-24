import {cleanup, fireEvent, render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import GridItem from './GridItems';

afterEach(cleanup);
const fullData= {id:100, name:'Testing Wines', products:[{
    id:1,
    title: 'foo', 
    assets: [{'url':'https://d3lbhvavid9616.cloudfront.net/assets/products/54767/1599850348070.jpg'}]
},{
    id:2,
    title: 'bar',
    assets: [{'url':'https://d3lbhvavid9616.cloudfront.net/assets/products/54767/1599850348070.jpg'}]}

]};
const missingData= {id:100, name:'No Product Wines', products:[]};

it('View more will disappear when reaching max items', () => {
    const {queryByText} = render(
        <GridItem item= {fullData} amountToView= {1}/>,
    );
    expect(queryByText(/No Items are currently available at this time/i)).toBe(null);
    expect(queryByText(/View More Products/i)).toBeTruthy();

    fireEvent.click(queryByText(/View More Products/i));

    expect(queryByText(/View More Products/i)).toBe(null);
});
it('should render an empty state if no items available', () => {
    const {queryByText} = render(
        <GridItem item= {missingData} amountToView= {1}/>,
    );
    expect(queryByText(/No Items are currently available at this time/i)).toBeTruthy();
    
});
it('should render correctly', () => {
    const component = renderer.create(<GridItem item= {fullData} amountToView= {1}/>).toJSON();

    expect(component).toMatchSnapshot();
});