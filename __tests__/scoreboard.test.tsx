import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Notification } from "../src/components";

describe("Notification", () => {
  it("Should render without crash", async () => {
    render(<Notification>Value: Win</Notification>);

    expect(screen.getByText(/^Value:/)).toHaveTextContent("Win");
  });
});
