import CarCrashImage from '@images/landing/car-accident/hero.webp';
import { getLastMonthYear } from '@/utilities';

const staticExpertise = [
  {
    title: 'Car Crash Lawyer',
    slug: 'car-accident',
    description:
      'Injured in a car crash? Mendez & Sanchez APC fights for maximum compensation after auto accidents in California and Nevada. Free consultation available.',
    content: `
      <h1>What to Do Immediately After a Car Accident in California or Nevada</h1>
      <p><strong>After a car crash</strong>, your actions can greatly impact your physical recovery and legal rights. First, seek medical attention—even if you feel fine, internal injuries may take time to appear. Call the police and get a formal report. Document the scene by taking photos, collecting witness info, and noting road and weather conditions. These steps create a solid foundation for your personal injury claim.</p>

      <p>If your car was totaled or you got injured in the crash, it's important to seek legal advice promptly to protect your rights and maximize your compensation.</p>

      <h2>Why You Should Speak to a Car Accident Lawyer Before the Insurance Company</h2>
      <p>Insurance companies are not on your side. Their goal is to pay out as little as possible—and they’re trained to get you to settle fast. At Mendez & Sanchez APC, our car crash attorneys protect your rights from day one. We handle all communication with insurers, investigate your claim thoroughly, and fight for the full compensation you deserve for medical bills, lost wages, vehicle damage, pain and suffering, and long-term care if needed.</p>

      <div style='margin-top: 2rem; margin-bottom: 2rem; padding: 1.5rem; background: #f8f9fa; border-left: 5px solid #d71a20;'>
        <h2>🚨 Recent Settlement(${getLastMonthYear()}): $1.2 Million</h2>
        <p>We recently secured <strong>$1.2 million</strong> for a client injured in a multi-car freeway collision in Los Angeles. The insurance company initially offered $150,000. After aggressive litigation and expert testimony, we fought—and won—eight times that amount.</p>
      </div>

      <h2>Common Causes of Car Accidents in California</h2>
      <p>Whether you're dealing with a simple fender-bender or a catastrophic injury, you need a legal team that understands how to build a case and get results.</p>
      <p>California roadways see thousands of collisions every year. Our personal injury law firm has handled cases involving:</p>
      <ul class="mb-3">
        <li>Rear-end collisions</li>
        <li>Distracted or texting drivers</li>
        <li>DUI and drug-impaired accidents</li>
        <li>Hit-and-runs</li>
        <li>Highway and freeway pileups</li>
        <li>Uber, Lyft, and rideshare accidents</li>
      </ul>
      
      <h2>How Mendez & Sanchez APC Builds Strong Car Accident Cases</h2>
      <p>This thorough, results-driven approach has helped us recover millions for clients across California and Nevada.</p>
      <p>We don’t just file paperwork—we take aggressive steps to build leverage against the insurance company. Our team:</p>
      <ul class="mb-3">
        <li>Collects police reports, video footage, and scene evidence</li>
        <li>Interviews witnesses and brings in accident reconstruction experts</li>
        <li>Works directly with medical providers to document your injuries</li>
        <li>Prepares every case for trial, even if we aim to settle</li>
      </ul>

      <h2>FAQ: Car Accident Lawyers in California</h2>
      <ul class="mb-3">
        <li><strong>When should I contact a lawyer after a car crash?</strong> As soon as possible. Early legal advice helps preserve evidence and avoid costly mistakes.</li>
        <li><strong>How much does a car accident lawyer cost?</strong> We work on a contingency fee—meaning you pay nothing unless we win your case.</li>
        <li><strong>Can I still recover damages if I was partly at fault?</strong> Yes. California follows comparative fault laws. You may still receive compensation even if you're partially responsible.</li>
        <li><strong>What if the other driver doesn't have insurance?</strong> We can help you file an uninsured/underinsured motorist claim through your own policy.</li>
      </ul>
      `,
    date: '08/05/2025',
    keywords: [
      'car accident lawyer',
      'car crash attorney',
      'auto accident legal help',
      'insurance claim lawyer',
      'injury compensation California',
      'personal injury law firm',
      'Los Angeles car accident lawyer',
      'free legal consultation car crash',
      'Mendez & Sanchez APC',
      'Nevada auto accident attorney'
    ],
    articleSection: 'Car Accident',
    mainImage: {
      src: CarCrashImage.src,
      alt: 'Car crash legal help in California'
    }
  }
];

export default staticExpertise;
