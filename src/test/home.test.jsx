import { queryByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import Home from "../pages/Home";

describe('home', () => {
  test('If home component is render', () => {
    render(<Home/>, {wrapper: BrowserRouter})
    expect(screen.queryByText('Home')).toBeDefined();
  })
})
