import styles from './Sidebar.module.scss';
import bind from '~/utils/bind';

const cx = bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h2>Sidebar</h2>;
    </aside>
  );
}

export default Sidebar;
