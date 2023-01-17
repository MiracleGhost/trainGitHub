import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { NotificationPage } from "../components/molecules/notificationPage/notificationPage";

test("renders Notification Page without crashing", async () => {
  render(<NotificationPage />);
  expect(screen.getByTestId("alarm-form")).toBeInTheDocument();
});
