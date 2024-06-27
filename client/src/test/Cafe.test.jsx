import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Cafe from "../components/home/Cafe"; // Adjust path as needed
import CafeBlock from "../components/home/CafeBlock"; // Adjust path

// Mock fetch API globally
global.fetch = jest.fn();

describe("Cafe Component", () => {
  // Sample cafe data
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

//   test("renders cafes from API correctly", async () => {
//     // Mock successful fetch response
//     fetch.mockResolvedValueOnce({
//       ok: true,
//       json: async () => mockCafes,
//     });

//     render(<Cafe />);

//     // Wait for cafes to load
//     await waitFor(() => {
//         mockCafes.forEach(cafe => {
//           // Use a regex with the 'i' flag for case-insensitive matching
//           expect(screen.getByText(cafe.name)).toBeInTheDocument(); 
//           expect(screen.getByText(cafe.hours)).toBeInTheDocument();
//           expect(screen.getByText(cafe.address)).toBeInTheDocument();
//         });
//       });
//     });

  test("renders error message when fetch fails", async () => {
    // Mock failed fetch response
    fetch.mockRejectedValueOnce(new Error("API error"));

    render(<Cafe />);

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText("Error: API error")).toBeInTheDocument();
    });
  });
});

