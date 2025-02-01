import About from "./About";
import Pledge from "./Pledge";
import UnavailablePledge from "./UnavailablePledge";

function Project() {
  return (
    <div className="bg-white w-[min(100%-4rem,60rem)]  px-[2.9375rem] shadow-md pt-[3.5rem] pb-[2.4375rem]  md:pt-[3.875rem] md:pb-[2.875rem] rounded-md  flex flex-col gap-[2.25rem] md:[2.5rem]">
      <About />
      <Pledge
        title="Bamboo Stand"
        price={25}
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list."
        amount={101}
      />
      <Pledge
        title="Black Edition Stand"
        price={75}
        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                      member list. Shipping is included."
        amount={64}
      />
      <UnavailablePledge
        title="Mahogany Special Edition"
        price={200}
        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                      to our Backer member list. Shipping is included."
        amount={0}
      />
    </div>
  );
}

export default Project;
