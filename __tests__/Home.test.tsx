import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("has the word 'Docs' in the document", () => {
  render(<Home />);
  const heading = screen.getByText("Docs");
  expect(heading).toBeInTheDocument();
});
