import classNames from 'classnames';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <h2>hi</h2>
        </header>
    );
}

export default Header;
