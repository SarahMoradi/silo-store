import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <header className={styles.main_navigation}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName={styles.active_link} exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
export default Navigation