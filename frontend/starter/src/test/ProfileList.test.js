import { render, screen } from '@testing-library/react';

import ProfileList from '../Components/profileView/ProfileList';
import mockData from './graduate-user-test.json';

describe(`Profile list tests`, () => {
    // xit(`should render profile lists`, () => {

    //     render(<ProfileList gradProps1={mockData.graduateUser} />);

    //     const title = screen.getByRole(`heading`);

    //     expect(title).toBeInTheDocument();

    // })

    it(`should render David's details`, () => {

        render(<ProfileList gradProps1={mockData.graduateUser[0]} />)

        const gradName = screen.getByText(`Name: ${mockData.graduateUser[0].firstName} ${mockData.graduateUser[0].lastName}`)

        expect(gradName.textContent).toContain(mockData.graduateUser[0].firstName)
    })

});
