import DonationSection from './donationSection/DonationSection';
import EmergencyContacts from './emergencyContacts/EmergencyContacts';
import Header from './header/Header';
import HeroSection from './heroSection/HeroSection';
import './home.css';
import ImpactStatistics from './impactStatistics/ImpactStatistics';
import LatestDisasters from './latestDisasters/LatestDisasters';
import VolunteerOpportunities from './volunteerOpportunities/VolunteerOpportunities';
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <LatestDisasters />
      <ImpactStatistics />
      <DonationSection />
      <VolunteerOpportunities />
      <EmergencyContacts />
    </div>
  )
}
