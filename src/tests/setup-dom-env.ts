// TODO: Import this only in dom tests, so we can avoid the dependency hit

// This file is loaded automatically by Vitest before running tests.
// It gives us access to some handy assertions (e.g. toBeInTheDocument())
// https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { vi } from "vitest";

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
