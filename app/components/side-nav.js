import NavLinks from '@/app/components/nav-links';

export default function SideNav() {
  return (
    <div className="flex w-full sm:w-[300px] h-[0px] sm:h-full flex-col px-3 py-24 md:px-2 bg-blue-500">
      <div className="sm:py-3"></div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
      </div>
    </div>
  );
}
