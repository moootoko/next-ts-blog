import { Row } from 'react-bootstrap';
import Portrait from './portrait';

export const HoloJPMembers = () => (
  <>
    <h2 className="text-muted">0期生</h2>
    <hr />
    <Row className="mb-5">
      <Portrait memberName={{ en: 'TokinoSora', ja: 'ときのそら' }} />
      <Portrait memberName={{ en: 'Robocosan', ja: 'ロボ子さん' }} />
      <Portrait memberName={{ en: 'SakuraMiko', ja: 'さくらみこ' }} />
      <Portrait memberName={{ en: 'HoshimachiSuisei', ja: '星街すいせい' }} />
    </Row>
    <h2 className="text-muted">1期生</h2>
    <hr />
    <Row className="mb-5">
      <Portrait memberName={{ en: 'YozoraMel', ja: '夜空メル' }} />
      <Portrait memberName={{ en: 'AkiRosenthal', ja: 'アキ・ローゼンタール' }} />
      <Portrait memberName={{ en: 'AkaiHaato', ja: '赤井はあと' }} />
      <Portrait memberName={{ en: 'ShirokamiFubuki', ja: '白上フブキ（兼ゲーマーズ）' }} />
      <Portrait memberName={{ en: 'NatsuiroMatsuri', ja: '夏色まつり' }} />
    </Row>
    <h2 className="text-muted">2期生</h2>
    <hr />
    <Row className="mb-5">
      <Portrait memberName={{ en: 'MinatoAqua', ja: '湊あくあ' }} />
      <Portrait memberName={{ en: 'MurasakiShion', ja: '紫咲シオン' }} />
      <Portrait memberName={{ en: 'NakiriAyame', ja: '百鬼あやめ' }} />
      <Portrait memberName={{ en: 'YuzukiChoco', ja: '癒月ちょこ' }} />
      <Portrait memberName={{ en: 'OozoraSubaru', ja: '大空スバル' }} />
    </Row>
    <h2 className="text-muted">ゲーマーズ</h2>
    <hr />
    <Row className="mb-5">
      <Portrait memberName={{ en: 'OokamiMio', ja: '大神ミオ' }} />
      <Portrait memberName={{ en: 'NekomataOkayu', ja: '猫又おかゆ' }} />
      <Portrait memberName={{ en: 'InugamiKorone', ja: '戌神ころね' }} />
    </Row>
    <h2 className="text-muted">3期生</h2>
    <hr />
    <Row className="mb-5">
      <Portrait memberName={{ en: 'UsadaPekora', ja: '兎田ぺこら' }} />
      <Portrait memberName={{ en: 'UruhaRushia', ja: '潤羽るしあ' }} />
      <Portrait memberName={{ en: 'ShiranuiFlare', ja: '不知火フレア' }} />
      <Portrait memberName={{ en: 'ShiroganeNoel', ja: '白銀ノエル' }} />
      <Portrait memberName={{ en: 'HoushouMarine', ja: '宝鐘マリン' }} />
    </Row>
    <h2 className="text-muted">4期生</h2>
    <hr />
    <Row className="mb-5">
      <Portrait memberName={{ en: 'AmaneKanata', ja: '天音かなた' }} />
      <Portrait memberName={{ en: 'KiryuCoco', ja: '桐生ココ' }} />
      <Portrait memberName={{ en: 'TsunomakiWatame', ja: '角巻わため' }} />
      <Portrait memberName={{ en: 'TokoyamiTowa', ja: '常闇トワ' }} />
      <Portrait memberName={{ en: 'HimemoriLuna', ja: '姫森ルーナ' }} />
    </Row>
    <h2 className="text-muted">5期生</h2>
    <hr />
    <Row className="mb-5">
      <Portrait memberName={{ en: 'YukihanaLamy', ja: '雪花ラミィ' }} />
      <Portrait memberName={{ en: 'MomosuzuNene', ja: '桃鈴ねね' }} />
      <Portrait memberName={{ en: 'ShishiroBotan', ja: '獅白ぼたん' }} />
      <Portrait memberName={{ en: 'OmaruPolka', ja: '尾丸ポルカ' }} />
    </Row>
  </>
);

export const HoloENMembers = () => (
  <>
    <h2 className="text-muted">1期生</h2>
    <hr />
    <Row className="mb-5">
      <Portrait memberName={{ en: 'MoriCalliope', ja: '森カリオペ' }} />
      <Portrait memberName={{ en: 'TakanashiKiara', ja: '小鳥遊キアラ' }} />
      <Portrait memberName={{ en: 'NinomaeInanis', ja: '一伊那尓栖' }} />
      <Portrait memberName={{ en: 'GawrGura', ja: 'がうるぐら' }} />
      <Portrait memberName={{ en: 'WatsonAmelia', ja: 'ワトソン・アメリア' }} />
    </Row>
  </>
);

export const HoloIDMembers = () => (
  <>
    <h2 className="text-muted">1期生</h2>
    <hr />
    <Row className="mb-5">
      <Portrait memberName={{ en: 'MoriCalliope', ja: '森カリオペ' }} />
      <Portrait memberName={{ en: 'TakanashiKiara', ja: '小鳥遊キアラ' }} />
      <Portrait memberName={{ en: 'WatsonAmelia', ja: 'ワトソン・アメリア' }} />
    </Row>
    <h2 className="text-muted">2期生</h2>
    <hr />
    <Row className="mb-5">
      <Portrait memberName={{ en: 'MoriCalliope', ja: '森カリオペ' }} />
      <Portrait memberName={{ en: 'TakanashiKiara', ja: '小鳥遊キアラ' }} />
      <Portrait memberName={{ en: 'WatsonAmelia', ja: 'ワトソン・アメリア' }} />
    </Row>
  </>
);