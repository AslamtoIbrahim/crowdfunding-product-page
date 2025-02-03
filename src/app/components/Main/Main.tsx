import BackProject from "./BackProject";
import BackStatics from "./BackStatics";
import DialogBack from "./Dialog/DialogBack";
import Project from "./Project/Project";


function Main(){
    return (
       <main className="w-full h-full bg-background flex flex-col gap-4 items-center justify-center mt-[15.125rem] md:mt-[19.3125rem]">
        <BackProject />
        <BackStatics />
        <Project />
        <DialogBack />
       </main>
    );
}

export default Main;