import Footer from "./Footer";
import Cookies from 'js-cookie';
function Thanks() {
    return (
<>


<main className="main">

{/* Hero Section */}
<section id="hero" className="hero section dark-background">

  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-12 order-2 order-lg-1 d-flex flex-column justify-content-center">
<center>
<h1>
        Thank you {Cookies.get('username')}
</h1>
    </center>
  
        </div>
        </div>
        </div>
        </section>
        </main>
<Footer/>
</>
    );
}



export default Thanks;