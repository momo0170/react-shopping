// useQuery를 사용할 때 읽어오는 부분과 업데이트하는 부분의 코드가 따로 존재한다.
// 그렇게 되면 이 부분을 일일이 찾아야 하므로 귀찮다.
// 그래서 리액트 훅으로 만들어서 사용하는 것이 편하다.

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

export default function userProducts() {
  const queryClient = useQueryClient();

  const getProducts = useQuery(['products'], getData, { staleTime: 1000 * 60 }); // 1분 뒤에 stale로 표기됨
}
