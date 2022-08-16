import { render, screen } from '@testing-library/react';
import YourProfile from '../Components/profileView/YourProfile';

jest.mock('../Components/profileView/ProfileList', () => () => {
    return <span data-testid="testList">Profile list for testing</span>
});

jest.mock('../Components/profileView/ProfileCard', () => () => {
    return <span data-testid="testCard">Profile card for testing</span>
});

const testLists = [{ _id: 1 }, { _id: 2 }, { _id: 3 }];
const testCards = [{ _id: 4 }, { _id: 5 }, { _id: 6 }];

describe(`YourProfile tests`, () => {
    it(`should render the right amount of profile lists`, () => {

        render(<YourProfile graduates={testLists} />);

        const numOfLists = screen.getAllByTestId(`testList`).length;

        expect(numOfLists).toBe(testLists.length);
    })

    it(`should render the right amount of profile cards`, () => {

        render(<YourProfile graduates={testCards} />);

        const numOfCards = screen.getAllByTestId(`testCard`).length;

        expect(numOfCards).toBe(testCards.length);
    })
});

