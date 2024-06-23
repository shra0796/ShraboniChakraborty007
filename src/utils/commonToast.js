import {Toast} from 'native-base';
import {colorSet, mainColor} from './Color';

export const toastr = {
  showToast: (message, duration = 5000, toastFor) => {
    Toast.show({
      description: message,
      duration,
      placement: 'top',
      textStyle: {textAlign: 'center'},
      style: {backgroundColor: colorSet.primarycolor},
    });
  },
};

export const   toasterr = {
  showToast: (message, duration = 5000, toastFor) => {
    Toast.show({
      description: message,
      duration,
      placement: 'top',
      textStyle: {textAlign: 'center'},
      style: {backgroundColor:"#ff0000"}
    });
  },
};
