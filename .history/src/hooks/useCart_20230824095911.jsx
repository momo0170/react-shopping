import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import {
  addCartData,
  deleteCartData,
  getCartData,
} from '../firebase/Firebase-Auth';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import uuid4 from 'uuid4';

export default function useCart() {
  const { uid } = useContext(UserContext);

  const queryClient = useQueryClient();
  const uniqueID = uuid4();
  // query에서 데이터를 받아옴
  const cartProduct = useQuery(
    // uid가 없을 경우 undefined가 할당된다. 이것
    ['cart', uid || ''],
    () => getCartData(uid),
    {
      enabled: !!uid, // uid가 존재할 때까지 즉 true가 될 때까지 query가 실행되지 않음
    }
  );

  // mutate 정의
  const addtoCart = useMutation(
    ({ uid, cart }) => {
      addCartData(uid, cart, uniqueID);
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
      addCartData(uid, product);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cart', uid);
      },
    }
  );

  const removeItem = useMutation(
    (uniqueID) => {
      deleteCartData(uid, uniqueID);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cart', uid);
      },
    }
  );
  return { cartProduct, addtoCart, addOrUpdateItem, removeItem };
}
