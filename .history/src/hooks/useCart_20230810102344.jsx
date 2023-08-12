import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { addCartData, getCartData } from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

export default function useCart() {
  const { user } = useContext(UserContext);

  const queryClient = useQueryClient();

  // query에서 데이터를 받아옴
  const cartProduct = useQuery(
    ['cart', user.uid],
    () => getCartData(user.uid),
    {
      enabled: !!user.uid,
    }
  );

  // mutate 정의
  const addtoCart = useMutation(
    ({ uid, cart }) => {
      addCartData(uid, cart);
    },
    {
      // 카트에 성공적으로 추가되면
      // [cart] 키를 가진 캐시 데이터를 새로고침
      onSuccess: () => {
        console.log('invalidate 됨');
        queryClient.invalidateQueries(['cart']);
      },
    }
  );

  return { cartProduct, addtoCart };
}
