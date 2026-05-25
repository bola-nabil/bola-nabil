import {render, screen} from "@testing-library/react";
import NotFound from "./NotFound";

test("tesing notfound page", () => {
    render(<NotFound />);

    expect(screen.getByText("404 - Not Found"))
        .toBeInTheDocument();
});