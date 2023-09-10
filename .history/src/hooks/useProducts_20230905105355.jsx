// useQuery를 사용할 때 읽어오는 부분과 업데이트하는 부분의 코드가 따로 존재한다.
// 그렇게 되면 이 부분을 일일이 찾아야 하므로 귀찮다.
// 그래서 리액트 훅으로 만들어서 사용하는 것이 편하다.

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { writeData, getData, removeData } from '../firebase/Firebase-Auth';

export default function useProducts() {
  const queryClient = useQueryClient();

  // query에서 데이터를 받아옴
  const productsQuery = useQuery(['products'], getData); // 1분 뒤에 stale로 표기됨

  // mutation 정의
  const addProduct = useMutation(
    ({ product, url }) => {
      console.log(product);
      writeData(product, url); // 제품 등록
    },
    {
      // 성공적으로 제품이 등록되면
      // [products] 키를 가진 캐시 데이터 새로고침
      onSuccess: () => {
        console.log('mutate 성공적');
        queryClient.invalidateQueries(['products']);
      },
    }
  );

  const deleteProduct = useMutation(
    (id) => {
      removeData(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['products']);
      },
    }
  );
  return { productsQuery, addProduct, deleteProduct };
}

// 이렇게 한 곳에서 동일한 key로 데이터를 읽어 오는 것과 업데이트 하는 것이 같이 있어서 invalidate 해야할지 말아야 할지
// 관리하기 편해진다.
