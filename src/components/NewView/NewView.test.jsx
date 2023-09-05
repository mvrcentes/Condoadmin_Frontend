import React from "react";
import { render, screen } from "@testing-library/react";
import { NewView } from "./NewView";

describe("NewView component", () => {

  test("Renderiza correctamente el componente NewView", () => {
    render(<NewView />);
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });

  test("Muestra un mensaje de carga mientras se carga el anuncio", () => {
    render(<NewView />);
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });

});
