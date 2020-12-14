import { Row } from 'react-bootstrap';
import MemberLink from './memberlink';

const HoloENMembers = () => (
<>
    <h2 className="text-muted">1期生</h2>
    <hr />
    <Row className="mb-5">
      <MemberLink memberName={{ en: 'MoriCalliope', ja: '森カリオペ' }} />
      <MemberLink memberName={{ en: 'TakanashiKiara', ja: '小鳥遊キアラ' }} />
      <MemberLink memberName={{ en: 'NinomaeInanis', ja: '一伊那尓栖' }} />
      <MemberLink memberName={{ en: 'GawrGura', ja: 'がうるぐら' }} />
      <MemberLink memberName={{ en: 'WatsonAmelia', ja: 'ワトソン・アメリア' }} />
    </Row>
  </>
);

export default HoloENMembers;