"use client";
import {useState}  from "react";
import BackPledge from "./BackPledge";
import CloseDialog from "./CloseDialog";

type props = {
  closeClick?: () => void;
  onClickContinue?: () => void;
};
function DialogBack({ closeClick, onClickContinue}: props) {
  const [isClose, setIsClose] = useState(false);
  const [selectedPledge, setselectedPledge] = useState<string| null>(null);
  const handPledgeSelected = (title: string) =>{
    setselectedPledge(title);
  }
  const handleClose = () => {
    if (closeClick) {
      closeClick();
    }
    setIsClose(!isClose);
  };
  return (
    <div>
      <div onClick={handleClose} className={`fixed inset-0 bg-black/35 ${isClose && `hidden`}`}></div>
      <div className="absolute top-[7.5rem] w-[min(100%-4rem,60rem)] md:top-[11.5rem]  left-1/2 -translate-x-1/2 font-commissioner">
        <div className="bg-white px-[2.9375rem] shadow-md pt-[3.5rem] pb-[2.4375rem]  md:pt-[3.875rem] md:pb-[2.875rem] rounded-md  flex flex-col gap-[2.25rem]">
          <section>
            <div className=" flex justify-between items-center md:items-start mb-3 ">
              <h1 className="text-base md:text-lg font-extrabold">
                Back this project
              </h1>
              <CloseDialog handleClick={handleClose} />
            </div>
            <p className="text-dark-gray">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
          </section>
          <section className="flex flex-col gap-[2.25rem] ">
            <BackPledge
              groupName="group"
              title="Pledge with no reward"
              description="Choose to support us without a reward if you simply believe in our project. As a backer, 
              you will be signed up to receive product updates via email."
              onselect={handPledgeSelected}
              selected={selectedPledge === "Pledge with no reward"}
              onlick={onClickContinue}
            />
            <BackPledge
              groupName="group"
              title="Bamboo Stand"
              price={25}
              description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list."
              amount={101}
              onselect={handPledgeSelected}
              selected={selectedPledge === "Bamboo Stand"}
              onlick={onClickContinue}
            />
            <BackPledge
              groupName="group"
              title="Black Edition Stand"
              price={75}
              description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
              member list. Shipping is included."
              amount={64}
              onselect={handPledgeSelected}
              selected={selectedPledge === "Black Edition Stand"}
              onlick={onClickContinue}
            />
            <BackPledge
              groupName="group"
              title="Mahogany Special Edition"
              price={200}
              description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
              member list. Shipping is included."
              amount={0}
              onselect={handPledgeSelected}
              selected={selectedPledge === "Mahogany Special Edition"}
              disabled={true}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default DialogBack;
