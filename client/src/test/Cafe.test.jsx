import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Cafe from "../components/home/Cafes";
import CafeBlock from "../components/home/CafeBlock";

global.fetch = jest.fn();

describe("Cafe Component", () => {
  const mockCafes = [
    {
      id: 1,
      name: "The Coffee Bean",
      hours: "7 AM - 9 PM",
      address: "123 Main St.",
      description: "Cozy cafe with great coffee.",
      priceRange: "$",
      imageUrl: "cafe1.jpg",
    },
    {
      id: 2,
      name: "Java House",
      hours: "8 AM - 10 PM",
      address: "456 Elm St.",
      description: "Modern cafe with a variety of drinks.",
      priceRange: "$$",
      imageUrl: "cafe2.jpg",
    },
  ];

  test("renders error message when fetch fails", async () => {
    fetch.mockRejectedValueOnce(new Error("API error"));

    render(<Cafe />);

    await waitFor(() => {
      expect(screen.getByText("Error: API error")).toBeInTheDocument();
    });
  });
});

