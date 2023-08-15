import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import {
  addCartData,
  deleteCartData,
  getCartData,
} from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

export default function useCart() {
  const { uid } = useContext(UserContext);

  const queryClient = useQueryClient();

  // query에서 데이터를 받아옴
  const cartProduct = useQuery(
    // uid가 없을 경우 undefined가 할당된다. 이것
    ['cart', user.uid || ''],
    () => getCartData(user.uid),
    {
      enabled: !!user.uid, // uid가 존재할 때까지 즉 true가 될 때까지 query가 실행되지 않음
    }
  );
  console.log(user);
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

  const addOrUpdateItem = useMutation(
    (product) => {
      addCartData(user.uid, product);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cart', user.uid);
      },
    }
  );

  const removeItem = useMutation(
    (product) => {
      deleteCartData(user.uid, product);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cart', user.uid);
      },
    }
  );
  return { cartProduct, addtoCart, addOrUpdateItem, removeItem };
}
