import React, { lazy, Suspense } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './index.module.scss';
import cx from 'classnames';
import { IsInViewProvider } from '@/hooks/viewportListener';
import MainForm from '@/components/Forms/MainForm';
import { useTranslation } from 'next-i18next';
import { Trans as Translate } from 'next-i18next';
import { scrollToSection } from '@/utilities';

// Lazy load ModalForm
const ModalForm = lazy(() => import('@/components/Forms/ModalForm'));

function Design2({ showFloatingButton }) {
  const { t } = useTranslation('amazonTruckAccident');
  const [openForm, setOpenForm] = React.useState(false);

  function toggleForm() {
    setOpenForm(!openForm);
  }

  return (
    <>
      <section className={cx(styles.section, styles.header)}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col lg={6} xs={12}>
              <IsInViewProvider>
                <h1 dangerouslySetInnerHTML={{ __html: t('title') }} />
              </IsInViewProvider>

              <IsInViewProvider>
                <p className={cx(styles.subheader, 'mt-4')}>
                  <Translate>{t('subtitle')}</Translate>
                </p>
              </IsInViewProvider>
            </Col>
            <Col lg={5} xs={12}>
              <div className="d-md-block d-none">
                <MainForm isLandingPage />
              </div>
              <Button
                className={cx(
                  styles.floatingButton,
                  { [styles.showFloatingButton]: showFloatingButton },
                  'd-md-none d-block'
                )}
                onClick={toggleForm}
              >
                <span className="text-capitalize">Start your free case review</span>
              </Button>

              <Suspense fallback={null}>
                {openForm && <ModalForm show={openForm} setShow={setOpenForm} isLandingPage />}
              </Suspense>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className={cx(styles['about-section'], 'text-center py-5')}>
        <Container className={styles.container}>
          <Row className="gx-4 gx-lg-5 justify-content-center">
            <Col lg={8} xs={12}>
              <h2 className="text-white mb-4">
                <Translate>{t('compensation_message')}</Translate>
              </h2>
              <p className="text-white">
                <Translate>{t('urgent_cases.intro')}</Translate>{' '}
                <a onClick={() => scrollToSection('faq')}>
                  <Translate>{t('read_more')}</Translate>
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Design2;
