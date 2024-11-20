import { useEffect } from "react";
import ProfileCard from "./ProfileCard";

const ProfilePageLayout = () => {
    useEffect(() => {
        document.title = "Discount Pro - Profile"
      },[])

    return (
        <div className="winter-snow py-24">
            <main>
                <ProfileCard></ProfileCard>
            </main>
        </div>
    );
};

export default ProfilePageLayout;