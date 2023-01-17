import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {NotificationPage} from '../components/molecules/notificationPage/notificationPage';

import {FetchAPI} from '../components/helpers/fetchData/Fetch';

test('renders Notification Page without crashing', async () => {
	 render(<NotificationPage />);
	 expect(screen.getByTestId('alarm-form')).toBeInTheDocument();
});
