import { render, screen } from '@testing-library/react';

import TrainingList from '../Components/profileView/TrainingList';
import mockData from './graduate-user-test.json';

describe(`Training list tests`, () => {
    it(`should render training list`, () => {

        render(<TrainingList trainingProp={mockData.graduateUser} />);

        const trainingList1 = screen.getByRole(`heading`);

        expect(trainingList1).toBeInTheDocument();

    })
    xit(`should render 7 cards`, () => {
        render(<ProfileList gradProps1={mockData.graduateUser} />);

        const gradList = screen.getAllByRole(`heading`);

        expect(gradList.length).toBe(mockData.graduateUser.length)
    })
    it(`should render cohort training details`, () => {

        render(<TrainingList trainingProp={mockData.graduateUser[0]} />)

        const trainingList1 = screen.getByText(`Cohort: ${mockData.graduateUser[0].cohort}`)

        expect(trainingList1.textContent).toContain(mockData.graduateUser[0].cohort)
    })

});
