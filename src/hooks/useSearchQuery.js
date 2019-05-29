import { useQuery } from 'react-apollo-hooks';
import { searchQuery } from 'queries/search';

export const useSearchQuery = props => useQuery(searchQuery, {
  variables: { searchString: props.q },
  pollInterval: props.pollInterval || 0,
});
