import SortSearchIcon from "@/app/components/icons/sortSearchIcon";
import BBCLogo from "@/app/components/icons/logo";
import Button from "@/app/components/ui/button";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center px-4 py-3">
          <SortSearchIcon  />
          <BBCLogo className="w-40" />
          <div className="flex gap-5">
            <Button className="bg-black text-white">Register</Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>
    </>
  );
}
