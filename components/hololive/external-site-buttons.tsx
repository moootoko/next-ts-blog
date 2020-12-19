import Link from 'next/link';
import { Card } from 'react-bootstrap';
import { Twemoji } from 'react-emoji-render';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

type Props = {
  id: string,
  name: string
}

export const TwitterButton = ({ id, name }: Props) => (
  <>
    <Link href={'https://twitter.com/' + id}>
      <a target="_blank" rel="noopener noreferrer">
        <Card>
          <div className="d-flex">
            <div className="d-flex align-items-center px-2">
              <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: 'rgb(0, 172, 237)' }} />
            </div>
            <div className="p-2">
              <div className="channel-name"><Twemoji svg text={name} /></div>
              <div className="channel-id">{id}</div>
            </div>
          </div>
        </Card>
      </a>
    </Link>
    <style jsx>{`
      .channel-name {
        font-weight: bold;
      }
      .channel-id {
        font-size: 0.7rem;
      }
    `}</style>
  </>
);

export const YoutubeButton = ({ id, name }: Props) => (
  <>
    <Link href={'https://www.youtube.com/channel/' + id}>
      <a target="_blank" rel="noopener noreferrer">
        <Card>
          <div className="d-flex">
            <div className="d-flex align-items-center px-2">
              <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: 'rgb(255, 0, 0)' }} />
            </div>
            <div className="p-2">
              <div className="channel-name">{name}</div>
              <div className="channel-id">{id}</div>
            </div>
          </div>
        </Card>
      </a>
    </Link>
    <style jsx>{`
      .channel-name {
        font-weight: bold;
      }
      .channel-id {
        font-size: 0.7rem;
      }
    `}</style>
  </>
);