import { render, screen } from '@testing-library/react';

import ProfileCard from '../Components/profileView/ProfileCard';
import mockData from './graduate-user-test.json';

describe(`Profile card tests`, () => {
    it(`should render profile cards`, () => {

        render(<ProfileCard gradProps2={mockData.graduateUser} />);

        const title = screen.getByRole(`heading`);

        expect(title).toBeInTheDocument();
    })

    it(`should render the right information`, () => {

        render(<ProfileCard gradProps2={mockData.User[0]} />)

        const gradDegree = screen.getByText(`Degree in ${mockData.gradUser[0].degree.degreeSubject}`)

        expect(gradDegree.textContent).toContain(mockData.gradUser[0].degree.degreeSubject)
    })
})