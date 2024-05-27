import { useDocumentTitle } from "@/hooks";
import { FC } from "react";

interface WalletProps {
  title: string;
}
const Wallet: FC<WalletProps> = ({title}) => {

  useDocumentTitle(title);

  return (
    <div className='grid grid-cols-10 gap-3'>
      <h3>Wallet views</h3>
    </div>
  )
}

export default Wallet;