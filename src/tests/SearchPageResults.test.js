import '@testing-library/jest-dom/extend-expect'
import { render, waitFor, fireEvent, waitForElementToBeRemoved, queryByText } from '@testing-library/react';
import {screen} from '@testing-library/dom'
import { AlarmResults } from '../components/molecules/nav/alarmResults/alarmResults';

test('Resuls page render properly', async () => {
	const { getByTestId } = render(<AlarmResults />);
	await waitFor(() => {
		expect(screen.getByTestId('alarm-result-page')).toBeInTheDocument();
	  })
});

test('Remove last alarm from list and check if its available or not', async () => {
	const { getByTestId } = render(<AlarmResults />);
	fireEvent.click(screen.getByTestId('remove_line_result_three'));
	expect(screen.queryByText('Bahnhof Friedrichsstraße Test 3')).not.toBeInTheDocument();

});



