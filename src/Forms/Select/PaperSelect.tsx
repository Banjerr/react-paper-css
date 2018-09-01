import React from 'react';

import css from './index.css';

type Props = {
  label: string;
  inputSize: string;
  inputID: string;
  children?: React.ReactNode;
};

class PaperSelect extends React.Component<Props> {
  public render() {
    const { label, inputSize, inputID, children } = this.props;

    if (label) {
      return (
        <div className={'form-group'}>
          <label className={inputSize} htmlFor={inputID}>
            {label}
          </label>
          <select>{children}</select>
        </div>
      );
    }

    return (
      <div className={'form-group'}>
        <select>{children}</select>
      </div>
    );
  }
}

export default PaperSelect;
