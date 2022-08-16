import { render, screen } from '@testing-library/react';

import ProfileList from '../Components/profileView/ProfileList';
import mockData from './graduate-user-test.json';

describe(`Profile card tests`, () => {
    it(`should render profile cards`, () => {

        render(<ProfileList gradProps1={mockData.graduateUser} />);

        const gradName = screen.getByRole(`heading`);

        expect(gradName).toBeInTheDocument();

    })
    xit(`should render 7 cards`, () => {
        render(<ProfileList gradProps1={mockData.graduateUser} />);

        const gradList = screen.getAllByRole(`heading`);

        expect(gradList.length).toBe(mockData.graduateUser.length)
    })
    it(`should render bobs details`, () => {

        render(<ProfileList gradProps1={mockData.graduateUser[0]} />)

        const gradName = screen.getByText(`Name: ${mockData.graduateUser[0].firstName} ${mockData.graduateUser[0].lastName}`)

        expect(gradName.textContent).toContain(mockData.graduateUser[0].firstName)
    })

});
