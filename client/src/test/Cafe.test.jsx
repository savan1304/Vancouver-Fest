import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Cafe from "../components/home/Cafe";

jest.mock("@auth0/auth0-react");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Home Component Tests", () => {
  const mockLoginWithRedirect = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: false,
      loginWithRedirect: mockLoginWithRedirect,
    });
    useNavigate.mockReturnValue(mockNavigate);
  });

  test("renders without crashing", () => {
    render(<Cafe />);
    expect(screen.getByText("Food Items")).toBeInTheDocument();
  });

  test("displays Login button when not authenticated", () => {
    render(<Cafe />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("displays logout when authenticated", () => {
    useAuth0.mockReturnValueOnce({
      isAuthenticated: true,
      loginWithRedirect: mockLoginWithRedirect,
    });
    render(<Cafe />);
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });


  test("Enter App button triggers navigation", () => {
    useAuth0.mockReturnValueOnce({
      isAuthenticated: true,
      loginWithRedirect: mockLoginWithRedirect,
    });
    render(<Cafe />);
    fireEvent.click(screen.getByText("Festivals"));
    expect(mockNavigate).toHaveBeenCalledWith("/Festivals");
  });

});
