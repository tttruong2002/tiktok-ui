import styles from './Header.module.scss';
import bind from '~/utils/bind';

const cx = bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}></div>
    </header>
  );
}

export default Header;
