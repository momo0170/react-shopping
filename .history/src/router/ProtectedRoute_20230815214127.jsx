import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  // 로그인한 사용자가 있는지 확인
  // 그 사용자가 어드민 권한이 있는지 확인
  // requireAdmin이 true인 경우에는 로그인도 되어 있어야 하고, 어드민 권한도 가지고 있어야한다.
  // 조건이 맞으면 전달된 children을 보여줌
  // 맞지 않으면 / 로 이동
  const { user } = useContext(UserContext);
  console.log(user.isAdmin, requireAdmin);
  // 사용자가 없거나, requireAdmin이 ture지만 사용자가 어드민 권한이 없는 경우
  if (!user || (!!requireAdmin && !user.isAdmin)) {
    // replace를 ture로 설정하면 이동할 주소로 이동한 후에 뒤로가기가 안된다.
    // 즉, 히스토리 스택에 저장되지 않는 것이다.
    // 홈으로 이동하되 히스토리 스택에 저장되지 않도록 한다.
    return <Navigate to="/" replace />;
  }

  return children;
}
