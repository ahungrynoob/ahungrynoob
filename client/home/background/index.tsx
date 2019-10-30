import React, { CSSProperties } from 'react';
import classNames from 'classnames/bind';
import styles from './index.m.less';

const cx = classNames.bind(styles);

interface IProps {
  src: string;
  blurSrc: string;
  style?: CSSProperties;
  wrapperClassName?: string;
  className?: string;
}

interface IState {
  loaded: boolean;
  error: boolean;
}

export default class Background extends React.Component<IProps, IState> {
  readonly state = {
    loaded: false,
    error: false,
  };

  img: HTMLImageElement;

  componentDidMount() {
    const { src } = this.props;
    this.img = new Image();
    this.img.addEventListener('load', this.setLoaded);
    this.img.addEventListener('error', this.setError);
    this.img.src = src;
  }

  componentWillUnmount() {
    this.img && this.img.removeEventListener('load', this.setLoaded);
    this.img && this.img.removeEventListener('error', this.setError);
    this.img = null;
  }

  setLoaded = () => {
    this.setState({
      loaded: true,
    });
  }

  setError = (e) => {
    console.error(e);
    this.setState({
      error: true,
    });
  }

  public render() {
    const { loaded } = this.state;
    const { blurSrc, src, style, className, wrapperClassName } = this.props;
    const clsName = cx(
      {
        bg: true,
        blur: !loaded,
      },
      className,
    );
    const wrapperClsName = cx('bgWrapper', wrapperClassName);
    const backgroundImage = loaded ? src : blurSrc;
    return (
      <div className={wrapperClsName}>
        <div
          className={clsName}
          style={{
            ...style,
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        {this.props.children}
      </div>
    );
  }
}
