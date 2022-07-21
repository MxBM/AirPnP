export const updateNotification = (
  updater: (updateType: { text: any; type: string }) => void,
  text: string,
  type = 'error'
) => {
  updater({ text, type });
  setTimeout(() => {
    updater({ text: '', type: '' });
  }, 2500);
};
