import { usePathname, useRouter } from "next/navigation";

const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  return { router, pathname };
};

export { useNavigation };
