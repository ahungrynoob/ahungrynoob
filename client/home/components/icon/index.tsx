import React from 'react';
import cx from 'classnames';

interface IICONProps {
  name: string;
}

const ICON: React.FunctionComponent<IICONProps> = ({ name }) => {
  const className = cx(
    {
      [`icon-${name}`]: true,
    },
    'iconfont',
  );
  return <i className={className} />;
};

export default ICON;
