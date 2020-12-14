import Link from 'next/link';
import Image from 'next/image';

type Props = {
  memberName: {
    ja: string,
    en: string
  }
};

const Portrait = ({memberName}: Props) => (
  <>
    <Link href="/hololive/[membername]" as={`/hololive/${memberName.en}`}>
      <div className="image-text m-3">
        <Image src={`/hololive/${memberName.en.toLowerCase()}.jpg`} width={180} height={180} quality={100} className="d-inline-block" />
        <div className="text1 d-flex justify-content-center">
          {memberName.ja}
        </div>
      </div>
    </Link>
    <style jsx>{`
      .image-text {
        position: relative;
        border-radius: .5rem;
      }
      .text1 {
        font-size: 0.8rem;
      }
    `}</style>
  </>
);

export default Portrait;