import '../style/App.css';
import { galleryStorage } from "../firebase/config.js";

function Index() {

    return (
        <div className="index">
            <div className="index-a">
                <div className="index-a-container">
                    <div className="index-a-text">
                        <div className="index-title">
                            <h1>Wedding Photography</h1>
                        </div>
                        <div className="index-description">
                            <p>We capture your special moments in their truest form, encapsulating each fleeting moment that passes by. The photographs we are left with are reminders of the emotions of that blip in time.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="index-b">
                <div className="index-b-container">
                    <div className="index-b1">
                        <img src="https://firebasestorage.googleapis.com/v0/b/hanbitstudio-90651.appspot.com/o/index%2Findex_1.jpeg?alt=media&token=ab6ecfc8-d380-4a99-9911-fd62fced1a94" width="30%"/>
                    </div>
                    <div className="index-b2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/hanbitstudio-90651.appspot.com/o/index%2Findex_2.jpeg?alt=media&token=7a7f5c4b-e9cd-4a56-8871-5b6c6ee3188a" width="30%"/>
                    </div>
                    <div className="index-b3">
                        <img src="https://firebasestorage.googleapis.com/v0/b/hanbitstudio-90651.appspot.com/o/index%2Findex_3.jpeg?alt=media&token=d44748ca-2777-40f0-aad6-d11d7df84339" width="30%"/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Index;