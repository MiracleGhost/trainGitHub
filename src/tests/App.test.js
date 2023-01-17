import { render, screen, getByTestId } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";

test("Click on Map Link in Nav and get the Content", async () => {
  render(<App />);
  await userEvent.click(screen.getByText("Karte"));
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Mit der Karte kannst du nach nach einer Station suchen. Klicke auf einen Bahnhof."
  );
});

test("Navigation works properly ", async () => {
  const { getByTestId } = render(<App />);
  await userEvent.click(screen.getByTestId("home-link"));
  expect(screen.getByTestId("home-content")).toBeInTheDocument();

  await userEvent.click(screen.getByTestId("map-link"));
  expect(screen.getByTestId("map-content")).toBeInTheDocument();

  await userEvent.click(screen.getByTestId("search-link"));
  expect(screen.getByTestId("search-content")).toBeInTheDocument();

  await userEvent.click(screen.getByTestId("alarm-link"));
  expect(screen.getByTestId("alarm-content")).toBeInTheDocument();
});
