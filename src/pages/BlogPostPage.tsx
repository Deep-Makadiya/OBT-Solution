import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const BlogPostPage = () => {
  const { id } = useParams();

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = {
    'cloud-migration-strategies': {
      title: 'Cloud Migration Strategies for Enterprise Applications',
      excerpt: 'Discover the most effective strategies for migrating enterprise applications to the cloud while minimizing risk and maximizing ROI.',
      content: `
        <p class="mb-4">Cloud migration has become a strategic priority for enterprises looking to modernize their infrastructure, reduce costs, and increase agility. However, migrating complex enterprise applications to the cloud presents unique challenges that require careful planning and execution.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding the Migration Landscape</h2>
        <p class="mb-4">Before embarking on a cloud migration journey, it's essential to understand the different migration strategies available and which one is most appropriate for your specific applications and business needs.</p>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">The 6 R's of Cloud Migration</h3>
        <ol class="list-decimal ml-6 mb-6 space-y-2">
          <li><strong>Rehost (Lift and Shift):</strong> Moving applications to the cloud without making any changes. This approach is quick but may not fully leverage cloud capabilities.</li>
          <li><strong>Replatform (Lift and Optimize):</strong> Making minor adjustments to applications to take advantage of cloud features while maintaining the core architecture.</li>
          <li><strong>Refactor/Re-architect:</strong> Redesigning applications to be cloud-native, fully leveraging cloud capabilities for maximum benefit.</li>
          <li><strong>Repurchase:</strong> Moving to a different product, typically by switching to a SaaS solution that provides similar functionality.</li>
          <li><strong>Retire:</strong> Eliminating applications that are no longer needed or valuable to the business.</li>
          <li><strong>Retain:</strong> Keeping certain applications on-premises due to regulatory requirements, latency concerns, or other business reasons.</li>
        </ol>
        
        <p class="mb-4">The choice of migration strategy should be based on a thorough assessment of each application's complexity, business criticality, and technical requirements.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Considerations for Successful Migrations</h2>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Comprehensive Assessment and Planning</h3>
        <p class="mb-4">Start with a detailed inventory of your applications, their dependencies, and infrastructure requirements. This assessment should include:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Application performance characteristics</li>
          <li>Integration points with other systems</li>
          <li>Data storage and transfer needs</li>
          <li>Security and compliance requirements</li>
          <li>Current pain points and opportunities for improvement</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Prioritizing Applications for Migration</h3>
        <p class="mb-4">Not all applications should be migrated simultaneously. Consider creating a phased approach based on:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Business criticality and impact</li>
          <li>Technical complexity</li>
          <li>Potential for quick wins</li>
          <li>Dependencies between applications</li>
          <li>Seasonal business cycles and peak periods</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Addressing Security and Compliance</h3>
        <p class="mb-4">Security considerations should be integrated throughout the migration process, not added as an afterthought. Key security aspects include:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Data encryption in transit and at rest</li>
          <li>Identity and access management</li>
          <li>Network security and segmentation</li>
          <li>Compliance with relevant regulations (GDPR, HIPAA, etc.)</li>
          <li>Security monitoring and incident response</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation Best Practices</h2>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Building a Cloud Center of Excellence</h3>
        <p class="mb-4">Establish a cross-functional team with cloud expertise to guide the migration process, develop standards, and share best practices across the organization.</p>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Leveraging Automation</h3>
        <p class="mb-4">Automate as much of the migration process as possible to reduce errors, improve consistency, and accelerate the timeline. This includes:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Infrastructure as Code (IaC) for environment provisioning</li>
          <li>Automated testing to validate application functionality</li>
          <li>CI/CD pipelines for deployment</li>
          <li>Monitoring and alert systems</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Thorough Testing</h3>
        <p class="mb-4">Implement comprehensive testing at each stage of the migration to identify and address issues early:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Functional testing to ensure application features work as expected</li>
          <li>Performance testing to validate response times and scalability</li>
          <li>Security testing to identify vulnerabilities</li>
          <li>Integration testing to verify connections with other systems</li>
          <li>User acceptance testing to confirm business requirements are met</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Post-Migration Optimization</h2>
        <p class="mb-4">The cloud migration journey doesn't end once applications are moved. Continuous optimization is essential to maximize the benefits of cloud adoption:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Implement cost management tools and practices</li>
          <li>Regularly review performance metrics and make adjustments</li>
          <li>Leverage cloud-native services to enhance functionality</li>
          <li>Update disaster recovery and business continuity plans</li>
          <li>Provide ongoing training for staff on cloud technologies</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
        <p class="mb-4">Successful cloud migration of enterprise applications requires a strategic approach that balances technical considerations with business objectives. By carefully assessing your applications, choosing the right migration strategy, and following implementation best practices, you can minimize risk and maximize the benefits of cloud adoption.</p>
        
        <p class="mb-4">Remember that cloud migration is not just a technical initiative but a business transformation. Involving stakeholders from across the organization, providing adequate training, and communicating effectively throughout the process are key to success.</p>
      `,
      author: 'Neil Johnson',
      authorTitle: 'CTO at Highmark Finance',
      authorBio: 'Neil has over 15 years of experience in IT infrastructure and cloud solutions. He has helped numerous enterprise clients successfully migrate their applications to the cloud.',
      date: 'May 15, 2023',
      category: 'cloud-solutions',
      categoryName: 'Cloud Solutions',

    },
    'data-analytics-healthcare': {
      title: 'How Data Analytics is Transforming Healthcare Delivery',
      excerpt: 'Explore how healthcare providers are leveraging data analytics to improve patient outcomes, optimize operations, and reduce costs.',
      content: `
        <p class="mb-4">The healthcare industry is experiencing a profound transformation driven by the power of data analytics. With the explosion of digital health data from electronic health records (EHRs), wearable devices, medical imaging, and genomic sequencing, healthcare providers now have unprecedented opportunities to extract meaningful insights that can revolutionize patient care.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Data Revolution in Healthcare</h2>
        <p class="mb-4">Healthcare organizations are increasingly turning to data analytics to address some of their most pressing challenges, from improving clinical outcomes to controlling costs. This shift represents a fundamental change in how healthcare is delivered, moving from intuition-based to evidence-based decision making.</p>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">The Growth of Healthcare Data</h3>
        <p class="mb-4">The volume of healthcare data is growing at an astonishing rate. Consider these statistics:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>The average hospital produces 50 petabytes of data annually</li>
          <li>Medical imaging accounts for more than 90% of all healthcare data</li>
          <li>The number of connected wearable devices worldwide is expected to exceed 1.1 billion by 2025</li>
          <li>A single human genome contains approximately 100 gigabytes of data</li>
        </ul>
        
        <p class="mb-4">This data explosion has created both opportunities and challenges for healthcare providers. While there's immense potential for extracting valuable insights, organizations must implement robust data management and analytics strategies to harness this potential effectively.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Transformative Applications of Healthcare Analytics</h2>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Improving Patient Outcomes</h3>
        <p class="mb-4">Data analytics is empowering healthcare providers to deliver more personalized and effective care:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Predictive Analytics for Early Intervention:</strong> By analyzing patterns in patient data, healthcare providers can identify individuals at risk for specific conditions and intervene before symptoms appear.</li>
          <li><strong>Personalized Treatment Plans:</strong> Analytics tools can help physicians tailor treatments based on a patient's unique genetic makeup, medical history, and lifestyle factors.</li>
          <li><strong>Remote Patient Monitoring:</strong> Data from wearable devices allows for continuous monitoring of patients' vital signs and early detection of potential issues.</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Enhancing Operational Efficiency</h3>
        <p class="mb-4">Healthcare organizations are using analytics to streamline operations and reduce costs:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Resource Allocation:</strong> Predictive models help hospitals forecast patient admissions and staff accordingly, ensuring optimal resource utilization.</li>
          <li><strong>Supply Chain Management:</strong> Analytics tools enable more accurate inventory forecasting, reducing waste and ensuring critical supplies are always available.</li>
          <li><strong>Process Optimization:</strong> By analyzing workflow data, hospitals can identify bottlenecks and implement more efficient processes.</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Advancing Public Health Initiatives</h3>
        <p class="mb-4">Data analytics plays a crucial role in addressing population health challenges:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Disease Surveillance:</strong> Analytics tools can detect unusual patterns in health data that might indicate an emerging outbreak.</li>
          <li><strong>Health Equity Analysis:</strong> Data analysis helps identify disparities in healthcare access and outcomes across different demographic groups.</li>
          <li><strong>Policy Evaluation:</strong> Analytics provides valuable insights into the effectiveness of public health interventions and policies.</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Case Studies: Analytics in Action</h2>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Reducing Hospital Readmissions</h3>
        <p class="mb-4">A large healthcare system implemented a predictive analytics model that analyzed patient data including demographics, medical history, medication adherence, and social determinants of health to identify patients at high risk for readmission. By deploying targeted interventions for these patients, including enhanced discharge planning, medication reconciliation, and follow-up care, the system achieved a 25% reduction in 30-day readmissions.</p>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Optimizing Emergency Department Operations</h3>
        <p class="mb-4">A busy urban hospital used data analytics to address emergency department overcrowding. By analyzing historical patient flow data, the hospital developed a predictive model that forecasted ED visit volumes with 85% accuracy. This allowed them to optimize staffing levels, resulting in a 20% reduction in wait times and a 15% increase in patient satisfaction scores.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Challenges and Considerations</h2>
        <p class="mb-4">Despite its tremendous potential, implementing healthcare analytics comes with several challenges:</p>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Data Quality and Integration</h3>
        <p class="mb-4">Healthcare data often resides in disparate systems and formats, making integration challenging. Additionally, issues with data quality, including missing values, inconsistencies, and errors, can undermine the reliability of analytical insights.</p>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Privacy and Security</h3>
        <p class="mb-4">Healthcare organizations must navigate complex privacy regulations like HIPAA while leveraging data for analytics. Implementing robust security measures is essential to protect sensitive patient information.</p>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Organizational Adoption</h3>
        <p class="mb-4">Successfully implementing analytics requires not just technological solutions but also cultural change. Healthcare organizations must foster a data-driven culture and provide training to ensure staff can effectively use analytical tools and insights.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Future of Healthcare Analytics</h2>
        <p class="mb-4">As technology continues to evolve, we can expect several emerging trends to shape the future of healthcare analytics:</p>
        
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Artificial Intelligence and Machine Learning:</strong> These technologies will enable more sophisticated analytical capabilities, from image recognition in radiology to natural language processing for clinical documentation.</li>
          <li><strong>Real-time Analytics:</strong> The ability to analyze data in real-time will enable more immediate decision-making at the point of care.</li>
          <li><strong>Interoperability:</strong> Improved data sharing between healthcare systems will enhance the comprehensiveness and value of analytics.</li>
          <li><strong>Patient-Generated Data:</strong> Analytics will increasingly incorporate data from patient wearables and home monitoring devices, providing a more holistic view of patient health.</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
        <p class="mb-4">Data analytics is fundamentally transforming healthcare delivery, enabling more personalized, efficient, and effective care. As healthcare organizations continue to mature in their analytical capabilities, we can expect to see even greater innovations that benefit patients, providers, and the healthcare system as a whole.</p>
        
        <p class="mb-4">To fully realize the potential of healthcare analytics, organizations must invest in robust data management practices, address privacy and security concerns, and foster a culture that embraces data-driven decision making. Those that do so successfully will be well-positioned to thrive in the increasingly complex and competitive healthcare landscape.</p>
      `,
      author: 'Michael Chen',
      authorTitle: 'Healthcare Data Scientist',
      authorBio: 'Michael has spent the last decade working at the intersection of healthcare and data science. He specializes in developing analytical solutions that improve patient outcomes and operational efficiency.',
      date: 'April 28, 2023',
      category: 'data-analytics',
      categoryName: 'Data Analytics',

    },
    'cybersecurity-threats-2023': {
      title: 'Top Cybersecurity Threats to Watch in 2023',
      excerpt: 'Stay ahead of the curve with our comprehensive analysis of emerging cybersecurity threats and how to protect your business.',
      content: `
        <p class="mb-4">As digital transformation accelerates across industries, the cybersecurity landscape continues to evolve with increasingly sophisticated threats. Organizations must stay vigilant and adapt their security strategies to address these emerging challenges. This article examines the top cybersecurity threats to watch in 2023 and provides practical strategies to mitigate these risks.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Evolving Threat Landscape</h2>
        <p class="mb-4">The past few years have seen significant changes in how cyber attacks are executed, who they target, and their potential impact. Several factors are driving these changes:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Increased digitization across industries</li>
          <li>Remote and hybrid work models becoming permanent</li>
          <li>Growing sophistication of attack techniques</li>
          <li>Geopolitical tensions influencing cyber warfare</li>
          <li>Expansion of attack surfaces through IoT and cloud adoption</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Top Cybersecurity Threats in 2023</h2>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Ransomware Evolution</h3>
        <p class="mb-4">Ransomware attacks continue to pose a significant threat, but they're evolving in concerning ways:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Triple Extortion:</strong> Beyond encrypting data and threatening to leak it, attackers are now adding a third layer of extortion by targeting an organization's customers, partners, or other related entities.</li>
          <li><strong>Ransomware as a Service (RaaS):</strong> Criminal groups are offering ransomware capabilities to less technical attackers, expanding the threat landscape.</li>
          <li><strong>Critical Infrastructure Targeting:</strong> Attacks are increasingly focused on essential services like healthcare, energy, and transportation, creating potential public safety risks.</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Supply Chain Vulnerabilities</h3>
        <p class="mb-4">After high-profile incidents like the SolarWinds attack, supply chain security has become a major concern:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Software Supply Chain Attacks:</strong> Malicious code inserted into legitimate software updates can compromise thousands of organizations simultaneously.</li>
          <li><strong>Third-Party Risk:</strong> Vulnerabilities in vendor systems and services can provide access to multiple organizations' networks.</li>
          <li><strong>Open Source Vulnerabilities:</strong> Security flaws in widely-used open source components can affect countless applications and systems.</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Advanced Persistent Threats (APTs)</h3>
        <p class="mb-4">State-sponsored and sophisticated threat actors are deploying increasingly stealthy and persistent attacks:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Zero-Day Exploitation:</strong> Attackers are leveraging previously unknown vulnerabilities before patches are available.</li>
          <li><strong>Living Off the Land (LotL):</strong> Threat actors are using legitimate system tools and features to avoid detection.</li>
          <li><strong>AI-Enhanced Attacks:</strong> Machine learning is being employed to develop more effective and adaptable attack techniques.</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">4. Cloud Security Challenges</h3>
        <p class="mb-4">As organizations continue migrating to the cloud, new security challenges emerge:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Misconfiguration:</strong> Improperly configured cloud resources remain one of the leading causes of data breaches.</li>
          <li><strong>Identity and Access Management:</strong> Managing authentication and authorization across hybrid environments creates new security challenges.</li>
          <li><strong>Multi-Cloud Complexity:</strong> Organizations using multiple cloud providers face increased difficulty in maintaining consistent security controls.</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">5. IoT Vulnerabilities</h3>
        <p class="mb-4">The proliferation of Internet of Things devices introduces new attack vectors:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Insecure Default Configurations:</strong> Many IoT devices ship with weak or default credentials and unnecessary services enabled.</li>
          <li><strong>Limited Update Capabilities:</strong> Some devices lack effective mechanisms for security updates and patches.</li>
          <li><strong>Botnet Recruitment:</strong> Vulnerable devices can be hijacked for DDoS attacks and other malicious purposes.</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategic Approaches to Cybersecurity in 2023</h2>
        <p class="mb-4">To address these evolving threats, organizations should consider the following strategic approaches:</p>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">1. Zero Trust Architecture</h3>
        <p class="mb-4">The Zero Trust model operates on the principle of "never trust, always verify." Key components include:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Verifying identity for all users, devices, and services</li>
          <li>Implementing least privilege access controls</li>
          <li>Microsegmentation of networks</li>
          <li>Continuous monitoring and validation</li>
          <li>Encrypting data in transit and at rest</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">2. Security Automation and XDR</h3>
        <p class="mb-4">As threats become more sophisticated, manual security processes are increasingly inadequate:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Extended Detection and Response (XDR):</strong> Integrates data from multiple security layers for improved threat detection and response.</li>
          <li><strong>Security Orchestration, Automation, and Response (SOAR):</strong> Automates routine security tasks and orchestrates response workflows.</li>
          <li><strong>AI and Machine Learning:</strong> Leverages pattern recognition to identify anomalies and potential threats.</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">3. Comprehensive Supply Chain Security</h3>
        <p class="mb-4">Organizations need to implement rigorous measures to address supply chain risks:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Conducting thorough vendor risk assessments</li>
          <li>Implementing software composition analysis</li>
          <li>Verifying code integrity through digital signatures</li>
          <li>Establishing secure development practices</li>
          <li>Monitoring third-party access to systems and data</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">4. Cloud Security Posture Management</h3>
        <p class="mb-4">To address cloud-specific security challenges, organizations should:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Implement automated cloud configuration monitoring</li>
          <li>Establish consistent security policies across cloud environments</li>
          <li>Use cloud-native security tools and services</li>
          <li>Conduct regular cloud security assessments</li>
          <li>Implement robust data protection measures</li>
        </ul>
        
        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">5. Human-Centric Security</h3>
        <p class="mb-4">Despite technological advances, the human element remains crucial:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Providing regular, engaging security awareness training</li>
          <li>Implementing phishing simulation programs</li>
          <li>Fostering a security-aware culture</li>
          <li>Designing security controls with user experience in mind</li>
          <li>Supporting security champions within departments</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Building Organizational Resilience</h2>
        <p class="mb-4">Beyond specific security controls, organizations need to build overall cyber resilience:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Incident Response Planning:</strong> Develop and regularly test comprehensive incident response plans.</li>
          <li><strong>Business Continuity:</strong> Ensure critical operations can continue during and after a security incident.</li>
          <li><strong>Cyber Insurance:</strong> Consider appropriate coverage as part of a comprehensive risk management strategy.</li>
          <li><strong>Security Governance:</strong> Establish clear roles, responsibilities, and accountability for cybersecurity.</li>
          <li><strong>Threat Intelligence:</strong> Leverage external threat intelligence to anticipate and prepare for emerging threats.</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
        <p class="mb-4">As we navigate 2023, the cybersecurity landscape continues to present new challenges. Organizations must adapt their security strategies to address evolving threats while maintaining operational efficiency. By implementing a comprehensive, layered approach to security that combines technological solutions with human-centered practices, businesses can significantly reduce their risk exposure.</p>
        
        <p class="mb-4">Remember that cybersecurity is not a destination but a continuous journey. Regular assessment, adaptation, and improvement of security measures are essential to staying ahead of threats in an ever-changing digital landscape.</p>
      `,
      author: 'Emily Rodriguez',
      authorTitle: 'Chief Information Security Officer',
      authorBio: 'Emily has over 20 years of experience in cybersecurity and is a Certified Information Systems Security Professional (CISSP). She specializes in developing comprehensive security strategies for enterprise organizations.',
      date: 'March 12, 2023',
      category: 'cybersecurity',
      categoryName: 'Cybersecurity',

    }
  };

  const post = id ? blogPosts[id as keyof typeof blogPosts] : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog - OBT SOlution LLC`;
    } else {
      document.title = 'Blog Post - OBT Solution LLC';
    }
    window.scrollTo(0, 0);
  }, [post, id]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
        <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/blog"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center text-sm text-blue-300 font-medium mb-4">
              <Tag className="h-4 w-4 mr-1" />
              {post.categoryName}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center text-blue-100 mb-4">
              <div className="flex items-center mr-6 mb-2 sm:mb-0">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={contentRef} className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />



            {/* Share Links */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between">

              <Link
                to="/blog"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(blogPosts)
                .map(([key, p]) => ({ ...p, id: key }))
                .filter(p => p.id !== id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Link to={`/blog/${relatedPost.id}`} className="block">

                    </Link>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-blue-600 font-medium mb-2">
                        <Tag className="h-4 w-4 mr-1" />
                        {relatedPost.categoryName}
                      </div>
                      <Link to={`/blog/${relatedPost.id}`} className="block">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedPost.id}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;