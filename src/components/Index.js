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
                        <img src="https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80" alt="flower" width="100px"/>
                    </div>
                    <div className="index-b2">
                    <img src="gs://hanbitstudio-90651.appspot.com/index/index_1.jpeg" alt="flower" />

                    </div>
                    <div className="index-b3">
                        b3
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Index;