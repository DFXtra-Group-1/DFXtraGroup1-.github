import { render, screen } from '@testing-library/react';

import ProfileCard from '../Components/profileView/ProfileCard';
import mockData from './graduate-user-test.json';

describe(`Profile card tests`, () => {
    it(`should render profile cards`, () => {

        render(<ProfileCard gradProps2={mockData.graduateUser[1]} />);

        const title = screen.getByText(`Personal Story Summary`);

        expect(title).toBeInTheDocument();
    });


    it(`should render the right information`, () => {

        render(<ProfileCard gradProps2={mockData.graduateUser[0]} />)

        const gradDegree = screen.getByText(`Degree in ${mockData.graduateUser[0].degrees[0].degreeSubject} from ${mockData.graduateUser[0].degrees[0].toDate}`);

        expect(gradDegree.textContent).toContain(mockData.graduateUser[0].degrees[0].degreeSubject);
    })
})