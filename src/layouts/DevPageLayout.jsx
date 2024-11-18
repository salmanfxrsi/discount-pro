import { useEffect } from "react";
import DeveloperProfile from "../components/DevPageComponents/DeveloperProfile";

const DevPageLayout = () => {
    useEffect(() => {
        document.title = "Discount Pro - Developer"
      },[])

    return (
        <div>
            <DeveloperProfile></DeveloperProfile>
        </div>
    );
};

export default DevPageLayout;