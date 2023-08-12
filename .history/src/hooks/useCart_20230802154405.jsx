import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { addCartData, getCartData } from '../firebase/Firebase-Auth';

export default function useCart() {
  // "장바구니 추가" 버튼을 클릭 시 with mutate
  const queryClient = useQueryClient();

  // mutate 정의
  const addtoCart = useMutation(
    () => {
      addCartData(user.uid, cart);
    },
    {
      // 카트에 성공적으로 추가되면
      // [cart] 키를 가진 캐시 데이터를 새로고침
      onSuccess: () => {
        queryClient.invalidateQueries(['cart']);
      },
    }
  );

  // query에서 데이터를 받아옴
  const cartProduct = useQuery(['cart'], () => getCartData(user.uid), {
    staleTime: 1000 * 60,
  });

  return { cartProduct, addtoCart };
}
