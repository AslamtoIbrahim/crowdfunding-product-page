import BackProject from "./BackProject";
import BackStatics from "./BackStatics";
import Project from "./Project/Project";


function Main(){
    return (
       <main className="w-full h-full bg-background flex flex-col gap-4 items-center justify-center mt-[15.125rem] md:mt-[19.3125rem]">
        <BackProject />
        <BackStatics />
        <Project />
       </main>
    );
}

export default Main;