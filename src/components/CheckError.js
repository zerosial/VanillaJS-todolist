/**에러 체크 Id*/
export default function CheckIdError(id) {
  if (typeof id !== 'object') {
    throw new Error(`ID : ${typeof id}는 올바른 ID 타입이 아닙니다.`);
  }
}
