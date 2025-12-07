import { showMessage } from 'react-native-flash-message';

type FlashMessageType = 'success' | 'danger' | 'warning' | 'info';

export const AlertShow = (
  message: string,
  type: FlashMessageType = 'success'
): void => {
  showMessage({
    message,
    type,
    backgroundColor:
      type === 'success'
        ? '#1ABC9C'
        : type === 'danger'
        ? '#D9435E'
        : type === 'warning'
        ? '#dbbc67'
        : '#17a2b8',
  });
};
