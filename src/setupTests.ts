import { vi } from 'vitest'
import '@testing-library/jest-dom'

vi.mock('./assets/react.svg', () => ({
  default: 'react.svg',
}))

vi.mock('./assets/vite.svg', () => ({
  default: 'vite.svg',
}))

vi.mock('./assets/hero.png', () => ({
  default: 'hero.png',
}))