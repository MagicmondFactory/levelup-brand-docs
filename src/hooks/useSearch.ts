import { useState, useMemo } from 'react';
import { SEARCH_INDEX, SearchItem } from '../utils/constants';

export function useSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const terms = trimmed.split(/\s+/);
    return SEARCH_INDEX.filter((item: SearchItem) => {
      const haystack = `${item.title} ${item.category} ${item.keywords} ${item.snippet}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [query]);

  return {
    query,
    setQuery,
    results,
    hasResults: results.length > 0,
  };
}
