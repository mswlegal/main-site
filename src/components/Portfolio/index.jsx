import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './index.module.scss';
import { IsInViewProvider } from '../../hooks/viewportListener';

const Portfolio = () => {
  const items = [
    {
      title: 'Motor Vehicle Accidents',
      copy: 'The injuries sustained in pedestrian accidents can be catastrophic, and the cost of medical care and lost income can be exorbitant. To reduce their liability, the insurance company or defendant may try to coerce you into providing a recorded statement that can be used to dispute liability or your damages.',
      backgroundImage:
        'https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/43/dc/ad/d6/cb/v1_E10/E10A2PEW.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=616117bc1bd8cf2f42893ebbe86964c9bebf003bc07648e73210f27bde3d3f74'
    },
    {
      title: 'Traumatic Brain Injury',
      copy: "If you or someone you love sustained a brain injury due to another person's or company's negligence, contact our East Los Angeles Personal Injury Lawyers to discuss your case",
      backgroundImage: require('../../../public/img/portfolio/brain-injury.webp').default.src
      // backgroundImage: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/19/59/da/f3/5d/v1_E10/E109OPBG.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=ff182daeab64a5f3e1b0f6892503a8d1655c20aa94c5311eadca7cd6b88d18ce"
    },
    {
      title: 'Wrongful Death',
      copy: "The unexpected loss of a family member is always tragic, but it can be especially difficult to cope when the death was caused by other's negligence. We are here to answer your questions and help you pursue justice and compensation",
      backgroundImage:
        'https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/7a/6d/e7/e5/d9/v1_E10/E108GYGZ.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=72c1842cac042a3241790a4a1df2c6c596235e17b769840b20028a2b0b911db2'
    },
    {
      title: 'Truck Accidents',
      copy: 'Accidents that involve 18-wheelers or semi-trucks almost always have life-changing effects. If you’ve been injured in a truck crash, your injuries are likely severe. Out truck accident lawyer can help you get the compensation you need to recover.',
      backgroundImage:
        'https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/18/6a/ff/5b/af/v1_E10/E108CG9R.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=c98ac0af244c8454fcfc8a451a0158e8f49b42abcb1b15026e0059b4a92e0368'
    },
    {
      title: 'Slip and Fall',
      copy: 'A trip or slip and fall accident can result in broken bones, soft tissue damage, brain trauma, and many other devastating injuries. The California slip and fall attorney at our East Los Angeles office can help you fight for the compensation you need to pay for medical bills, lost income, and other damages you have suffered due to your injuries.',
      backgroundImage:
        'https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/c3/6c/79/50/ed/v1_E10/E1046K2P.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=25f80db119a3425ce8db25fe4c5414558b23ec796072565087a4615206d4d1f1'
    },
    {
      title: 'Train Accidents',
      copy: 'Train accidents cause hundreds of deaths and thousands of injuries every year in the United States. The vast majority of these tragedies are entirely preventable. If you or a member of your family was severely injured in a train wreck involving Amtrak, Metrolink, Caltrain, or another rail system.',
      backgroundImage:
        'https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/05/2a/67/e9/4c/v1_E10/E105GTDF.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=396402295911982563a3b4d5d17a798e34fd0c6da227fff04243eafab3528362'
    }
  ];

  return (
    <section className={styles.basic_section} id="portfolio">
      <Container fluid className={styles.portfolio}>
        <Row>
          <Col xs={12}>
            <div className={styles.title} data-text-align="center" data-color="light">
              <span>What We Do</span>
              <h3>Our Areas of Expertise</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={12}></Col>
        </Row>

        <Row className={styles.pageContent}>
          {items.map((item, index) => (
            <IsInViewProvider key={`item-${index}`}>
              <Col
                xl={3}
                md={5}
                xs={10}
                className={styles.card}
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                <div className={styles.content}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.copy}>{item.copy}</p>
                  <button className={styles.btn}>Learn More</button>
                </div>
              </Col>
            </IsInViewProvider>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
