import { useQuery } from 'react-apollo-hooks';
import { userQuery } from 'queries/user';

export const useUserQuery = () => useQuery(userQuery);
