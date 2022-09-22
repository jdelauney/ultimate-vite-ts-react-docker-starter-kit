import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '~/App/router/routes';

const Navbar: FC = (): ReactElement => {
  return (
    <div className='navigation navigation--fixed md:navigation-toggle'>
      <nav aria-label='menu principal'>
        <input type='checkbox' id='nav-toggle' name='nav-toggle' aria-hidden={'true'}></input>
        <Link to={ROUTES.HOME} aria-label='back to home'>
          <span className={'sr-only'}>Back to home</span>
          <span className='navbar-title'>
            <b>BRAND</b>
          </span>
        </Link>
        <div id='main-menu' className='navbar__menu flex--center'>
          <ul>
            <li>
              <Link to={ROUTES.HOME} aria-label='back to home'>
                Accueil
              </Link>
            </li>
          </ul>
        </div>
        <label htmlFor='nav-toggle' className='navbar__toggler' aria-controls='navbar-menu' aria-label='Ouvre ou ferme le menu principal'>
          <span className='navbar__toggler__icon'>&nbsp;</span>
          <span className='sr-only'>Ouvre ou ferme le menu principal</span>
        </label>
      </nav>
    </div>
  );
};

export { Navbar };
