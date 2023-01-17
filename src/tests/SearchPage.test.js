import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import { SearchPage } from "../components/molecules/searchPage/searchPage";
import { FetchAPIData } from "../components/helpers/fetchData/Fetch";

test("Test Data from DB API", async () => {
  const { getByTestId } = render(<FetchAPIData />);
  await waitFor(() =>
    expect(screen.getByTestId("fetch-data-station")).toBeInTheDocument(), {timeout:3000}
  );
  expect(screen.getByTestId("fetch-data-station")).toBeInTheDocument();
  expect(screen.getByTestId("fetch-data-station")[0]).toBeInTheDocument();
});

test("Search Station Form should be visible", async () => {
  const { getByTestId } = render(<SearchPage />);
  expect(screen.getByTestId("search-station-form")).toBeInTheDocument();
});
