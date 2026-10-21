import { describe, expect, it } from 'vitest';
import type { Guest } from '../types';
import { buildGuestIndex, searchGuests } from './searchGuests';

const guests: Guest[] = [
  {
    tableNumber: '1',
    firstName: 'Digna',
    lastName: 'Patel',
    contactInfo: '',
    description: '',
  },
  {
    tableNumber: '2',
    firstName: 'Jay',
    lastName: 'Smith',
    contactInfo: '',
    description: '',
  },
  {
    tableNumber: '3',
    firstName: 'Rhea',
    lastName: 'Adiga',
    contactInfo: '',
    description: '',
  },
];

describe('searchGuests', () => {
  it('finds Digna when a character is omitted from the query', () => {
    const results = searchGuests('Dina', buildGuestIndex(guests));

    expect(results.some(({ guest }) => guest.firstName === 'Digna')).toBe(true);
  });

  it('finds Jay when a character is repeated in the query', () => {
    const results = searchGuests('Jayy', buildGuestIndex(guests));

    expect(results.some(({ guest }) => guest.firstName === 'Jay')).toBe(true);
  });

  it('ranks a Digna prefix match above a name containing the query', () => {
    const results = searchGuests('Dig', buildGuestIndex(guests));

    expect(results.map(({ guest }) => guest.firstName)).toEqual(['Digna', 'Rhea']);
  });
});
