import About from "./About";
import Pledge from "./Pledge";

function Project() {
  return (
    <div className="bg-white w-[min(100%-4rem,60rem)]  px-[2.9375rem] shadow-md pt-[3.5rem] pb-[2.4375rem]  md:pt-[3.875rem] md:pb-[2.875rem] rounded-md  flex flex-col">
      <About />
      <Pledge
        title="Bamboo Stand"
        price={25}
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list."
        amount={101}
      />
    </div>
  );
}

export default Project;
