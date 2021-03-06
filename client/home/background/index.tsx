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
}

export default class Background extends React.Component<IProps, IState> {
  readonly state = {
    loaded: false,
  };

  img: HTMLImageElement;

  componentDidMount() {
    const { src, blurSrc } = this.props;
    if (!src || !blurSrc) {
      return;
    }
    this.addImageListener(src);
  }

  componentWillUnmount() {
    this.clearImageListener();
  }

  clearImageListener = () => {
    this.img && this.img.removeEventListener('load', this.setLoaded);
    this.img && this.img.removeEventListener('error', this.logError);
    this.img = null;
  };

  addImageListener = (src: string) => {
    this.clearImageListener();
    this.img = new Image();
    this.img.addEventListener('load', this.setLoaded);
    this.img.addEventListener('error', this.logError);
    this.img.src = src;
  };

  setLoaded = () => {
    this.setState({
      loaded: true,
    });
  };

  logError = e => {
    console.error(e);
  };

  UNSAFE_componentWillReceiveProps({ blurSrc, src }: IProps) {
    if (blurSrc && src && src !== this.props.src) {
      this.addImageListener(src);
    }
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
    const backgroundImageStyle = backgroundImage ? `url(${backgroundImage})` : undefined;
    return (
      <div className={wrapperClsName}>
        <div
          className={clsName}
          style={{
            ...style,
            backgroundImage: backgroundImageStyle,
          }}
        />
        {this.props.children}
      </div>
    );
  }
}
