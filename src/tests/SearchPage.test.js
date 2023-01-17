import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {SearchPage} from '../components/molecules/searchPage/searchPage';
import {FetchAPIData} from '../components/helpers/fetchData/Fetch';


test('Test Data from DB API', async () => {
	const { getByTestId } = render(<FetchAPIData />);
	await waitFor(() => expect(screen.getByTestId('fetch-data-station')).toBeInTheDocument());
	expect(screen.getByTestId('fetch-data-station')).toBeInTheDocument();
	expect(screen.getByTestId('fetch-data-station')[0]).toBeInTheDocument();
});

test('Search Station Form should be visible', async () => {
	const { getByTestId } = render(<SearchPage />);
	expect(screen.getByTestId('search-station-form')).toBeInTheDocument();
});

