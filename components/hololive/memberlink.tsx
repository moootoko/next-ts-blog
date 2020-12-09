import Link from 'next/link';

type Props = {
  memberName: {
    ja: string,
    en: string
  }
};

const MemberLink = (props: Props) => (
  <>
    <Link href="/hololive/[membername]" as={`/hololive/${props.memberName.en}`}>
      <div className="image-text m-3">
        <div className="image1">
          <img src={`/hololive/${props.memberName.en.toLowerCase()}.png`} className="d-inline-block" />
        </div>
        <div className="text1 d-flex justify-content-center">
          {props.memberName.ja}
        </div>
      </div>
    </Link>
    <style jsx>{`
      .image-text {
        position: relative;
        border-radius: .5rem;
      }
      .text1 {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.9);
        font-size: 0.8rem;
      }
    `}</style>
  </>
);

export default MemberLink;