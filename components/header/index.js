import classNames from 'classnames';
import User from 'components/user';
import Link from 'next/link';

function Header({ children, className, user, side, ganteRef }) {
  if (side === 'left') {
    return (
      <div className="z-20 text-[#333] fixed top-0 bottom-0 left-0 w-[60px] bg-white">
        <Link href="/">
          <div className="bg-[url(/logo.png)] cursor-pointer bg-white w-[60px] bg-cover h-[60px]"></div>
        </Link>
        <div className="flex flex-col items-center h-full select-none">
          <ul className="flex mt-2 flex-col text-[12px] text-center">
            <li className="cursor-pointer h-[24px]" onClick={() => ganteRef?.current?.gotoToday()}>回到今天</li>
            <li className="cursor-pointer h-[24px]" onClick={() => ganteRef?.current?.zoomIn()}>缩小</li>
            <li className="cursor-pointer h-[24px]" onClick={() => ganteRef?.current?.zoomOut()}>放大</li>
          </ul>
          <div className="mt-auto mb-20">
            <User user={user} />
            { children }
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="z-10  text-[#f0f0f0] left-0 absolute right-0 pr-2 pt-2">
      <div className="flex items-center">
        <ul className="flex ml-10">
          <li>首页</li>
        </ul>
        <div className="ml-auto">
          <User user={user} />
          { children }
        </div>
      </div>
    </div>
  );
}

export default Header;