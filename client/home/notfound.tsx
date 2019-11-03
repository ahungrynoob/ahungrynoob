import React, { CSSProperties } from 'react';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import notFoundUrl from '../../app/public/img/notfound.jpeg';

const NotFound: React.FunctionComponent<RouteComponentProps> = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  const { staticContext } = props;
  if (staticContext) {
    staticContext.statusCode = 404;
  }
  const style: CSSProperties = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
  };

  return (
    <div style={style}>
      <div style={{ maxWidth: '21rem', textAlign: 'center' }}>
        <img
          style={{ display: 'block', margin: '0 auto' }}
          src={notFoundUrl}
          alt="notfound"
        />
        <h1 style={{ fontSize: '2rem', textAlign: 'center', lineHeight: 1.1 }}>
          无可奉告
        </h1>
        <a
          onClick={handleClick}
          style={{
            textDecoration: 'underline',
            color: '#4A90E2',
            cursor: 'pointer',
          }}
        >
          你们也不高兴，那怎么办？
        </a>
      </div>
    </div>
  );
};

export default NotFound;
