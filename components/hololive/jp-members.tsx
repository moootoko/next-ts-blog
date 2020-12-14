import { Row } from 'react-bootstrap';
import MemberLink from './memberlink';

const HoloJPMembers = () => (
  <>
    <h2 className="text-muted">0期生</h2>
    <hr />
    <Row className="mb-5">
      <MemberLink memberName={{ en: 'TokinoSora', ja: 'ときのそら' }} />
      <MemberLink memberName={{ en: 'Robocosan', ja: 'ロボ子さん' }} />
      <MemberLink memberName={{ en: 'SakuraMiko', ja: 'さくらみこ' }} />
      <MemberLink memberName={{ en: 'HoshimachiSuisei', ja: '星街すいせい' }} />
    </Row>
    <h2 className="text-muted">1期生</h2>
    <hr />
    <Row className="mb-5">
      <MemberLink memberName={{ en: 'YozoraMel', ja: '夜空メル' }} />
      <MemberLink memberName={{ en: 'AkiRosenthal', ja: 'アキ・ローゼンタール' }} />
      <MemberLink memberName={{ en: 'AkaiHaato', ja: '赤井はあと' }} />
      <MemberLink memberName={{ en: 'ShirokamiFubuki', ja: '白上フブキ（兼ゲーマーズ）' }} />
      <MemberLink memberName={{ en: 'NatsuiroMatsuri', ja: '夏色まつり' }} />
    </Row>
    <h2 className="text-muted">2期生</h2>
    <hr />
    <Row className="mb-5">
      <MemberLink memberName={{ en: 'MinatoAqua', ja: '湊あくあ' }} />
      <MemberLink memberName={{ en: 'MurasakiShion', ja: '紫咲シオン' }} />
      <MemberLink memberName={{ en: 'NakiriAyame', ja: '百鬼あやめ' }} />
      <MemberLink memberName={{ en: 'YuzukiChoco', ja: '癒月ちょこ' }} />
      <MemberLink memberName={{ en: 'OozoraSubaru', ja: '大空スバル' }} />
    </Row>
    <h2 className="text-muted">ゲーマーズ</h2>
    <hr />
    <Row className="mb-5">
      <MemberLink memberName={{ en: 'OokamiMio', ja: '大神ミオ' }} />
      <MemberLink memberName={{ en: 'NekomataOkayu', ja: '猫又おかゆ' }} />
      <MemberLink memberName={{ en: 'InugamiKorone', ja: '戌神ころね' }} />
    </Row>
    <h2 className="text-muted">3期生</h2>
    <hr />
    <Row className="mb-5">
      <MemberLink memberName={{ en: 'UsadaPekora', ja: '兎田ぺこら' }} />
      <MemberLink memberName={{ en: 'UruhaRushia', ja: '潤羽るしあ' }} />
      <MemberLink memberName={{ en: 'ShiranuiFlare', ja: '不知火フレア' }} />
      <MemberLink memberName={{ en: 'ShiroganeNoel', ja: '白銀ノエル' }} />
      <MemberLink memberName={{ en: 'HoushouMarine', ja: '宝鐘マリン' }} />
    </Row>
    <h2 className="text-muted">4期生</h2>
    <hr />
    <Row className="mb-5">
      <MemberLink memberName={{ en: 'AmaneKanata', ja: '天音かなた' }} />
      <MemberLink memberName={{ en: 'KiryuCoco', ja: '桐生ココ' }} />
      <MemberLink memberName={{ en: 'TsunomakiWatame', ja: '角巻わため' }} />
      <MemberLink memberName={{ en: 'TokoyamiTowa', ja: '常闇トワ' }} />
      <MemberLink memberName={{ en: 'HimemoriLuna', ja: '姫森ルーナ' }} />
    </Row>
    <h2 className="text-muted">5期生</h2>
    <hr />
    <Row className="mb-5">
      <MemberLink memberName={{ en: 'YukihanaLamy', ja: '雪花ラミィ' }} />
      <MemberLink memberName={{ en: 'MomosuzuNene', ja: '桃鈴ねね' }} />
      <MemberLink memberName={{ en: 'ShishiroBotan', ja: '獅白ぼたん' }} />
      <MemberLink memberName={{ en: 'OmaruPolka', ja: '尾丸ポルカ' }} />
    </Row>
  </>
);

export default HoloJPMembers;