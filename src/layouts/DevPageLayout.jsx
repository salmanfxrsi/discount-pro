import { useEffect } from "react";
import DeveloperProfile from "../components/DevPageComponents/DeveloperProfile";

const DevPageLayout = () => {
    useEffect(() => {
        document.title = "Discount Pro - Developer"
      },[])

    return (
        <div className="py-24 winter-snow">
            <DeveloperProfile></DeveloperProfile>
        </div>
    );
};

export default DevPageLayout;