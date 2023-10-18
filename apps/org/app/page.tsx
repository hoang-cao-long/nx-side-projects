'use client';

import styles from './page.module.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';

export default async function Index() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className={styles.pages}>
        {i18n.t('welcome.message')}
      </div>
    </I18nextProvider>
  );
}
