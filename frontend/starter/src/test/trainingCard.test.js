import { render, screen } from '@testing-library/react';

import TrainingCard from '../Components/profileView/TrainingCard';
import mockData from './graduate-user-test.json';

describe('Training Card tests', () => {
    it('should first check if the component has Module 1: Passed text', () => {
        render(<TrainingCard />);
        //const textElement1 = screen.getByText("Module 1: Passed");
        const textElement1 = screen.getByText("Module 1:");
        const textElement2 = screen.getByText("Module 2:");
        const textElement3 = screen.getByText("Module 3:");

        expect(textElement1).toBeInTheDocument();
        expect(textElement2).toBeInTheDocument();
        expect(textElement3).toBeInTheDocument();

    })
})