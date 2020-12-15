import Link from 'next/link';
import Image from 'next/image';

type Props = {
  memberName: {
    ja: string,
    en: string
  }
};

const [width, height] = [150, 150];

const Portrait = ({memberName}: Props) => (
  <>
    <Link href="/hololive/[membername]" as={`/hololive/${memberName.en}`}>
      <div className="p-3">
        <Image src={`/hololive/portraits/${memberName.en.toLowerCase()}.jpg`} width={width} height={height} className="d-inline-block" />
        <div className="text-name d-flex justify-content-center">{memberName.ja}</div>
      </div>
    </Link>
    <style jsx>{`
      .text-name {
        font-size: 0.8rem;
        line-break: lose;
        width: ${width}px;
      }
    `}</style>
  </>
);

export default Portrait;