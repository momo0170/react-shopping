// useQuery를 사용할 때 읽어오는 부분과 업데이트하는 부분의 코드가 따로 존재한다.
// 그렇게 되면 이 부분을 일일이 찾아야 하므로 귀찮다.
// 그래서 리액트 훅으로 만들어서 사용하는 것이 편하다.

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { addCartData, getData } from '../firebase/Firebase-Auth';

export default function userProducts() {
  const queryClient = useQueryClient();

  // query에서 데이터를 받아옴
  const getProducts = useQuery(['products'], getData, { staleTime: 1000 * 60 }); // 1분 뒤에 stale로 표기됨

  // mutation 정의
  const addProduct = useMutation(
    ({ user, cart }) => {
      addCartData(user.uid, cart); // 카트에 추가
    },
    {
      // mutate가 성공적이면
      // [products] 키를 가진 캐시 데이터 새로고침
      onSuccess: () => {
        console.log('mutate 성공적');
        queryClient.invalidateQueries(['products']);
      },
    }
  );

  return { getProducts, addCartData };
}

// 이렇게 한 곳에서 동일한 key로 데이터를 읽어 오는 것
