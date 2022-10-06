import { Route, Link } from "react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import MainHeader from "./componets/MainHeader";
import ProductDetail from "./pages/ProductDetail";

import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        //@6
        {/* <Routes> */}
        <Switch>
          <Route path="/" exact>
            //@6
            {/* דחוף את הראוט החדש לראוט הנוכחי */}
            {/*<Route path="/" element={<Navigate to="/welcome"/>}*/}
            {/* מחליף את הדף הנוכחי בדף חדש */}
            {/*<Route path="/" element={<Navigate replace to="/welcome"/>}*/}
            {/* פמנה ישירות לדף אחר מהדף הראשי */}
            <Redirect to="/welcome" />
            //
          </Route>
          //@6
          {/* <Route path="/welcome" element={<Welcome />}> */}
          <Route path="/welcome">
            <Welcome />
          </Route>
          //@6
          {/*יריץ רק ראוט אחד   <Route path="/products"> */}
          {/* ואם נרצה את הדרך הישנה שאראוטים עובדים במקביל נכתוב כך
         < Route path="/products/*"> */}
          <Route path="/products" exact>
            <Products />
          </Route>
          //
          {/* ראוט דינמי של שניתן להכניס אליו כל ערך ונמשוך אותו דרך יוז פרמס ונציג אותו */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          {/* כאשר אף דף לא עובד נרצה להציג הודעה דף לא נימצא */}
          <Route path="*">
            <h1>Pag not found</h1>
          </Route>
        </Switch>
        //@6
        {/* השינוי שיכול העיצוב על הלינק ברגע שעובד הפונקציה מקבלת אובייקט מובנה שיש בו מאפיין שאומר אם הלינק בפעולה ואם כן תפעיל את העיצוב */}
        <NavLink className={(navData) => (navData.isActiv ? classes.active : "")} to="/products/p3">
          Product 3
        </NavLink>
        //
        //@6
        {/* בשביל שראוט מקונן יעבוד צריך להתוף  אותו ב  */}
        <Routes>
          <Route path='/productId' element={<p>hhh</p>}/>
        </Routes>
        {/* אבל לפני צריך בראוט הראשי שלו להוסיף כובית שאז בעצם הראוט המקונן יתבסף ובגלל שהתפנו את הראוט המקונן אז הוא יפעיל רק את הראוש המקונן */}
        <Route path="/products/*" element={<Welcome />}></Route>
        {/* אפשר גם להגיד את הראוט המקונן כך  */}
        <Route path="/products/*" element={<Welcome />}>
        <Route path='/productId' element={<p>hhh</p>}/>
        </Route>
      {/* ושנירצה לשיופיע הרואט המקונן בקומפוננט במקום מסוים נתכתוב מילה שמורה ששם יופיע */}
      <Outlet/>
      //
      //@6
      {/* כאשר עושים בקשה אפיאי ונרצה שבסוף הבקשה או החישוב יעבור לרואט אחר מקונן מבלי לחיצה נכתןב את הפונקציה ולאן נירצה לתעבור */}
const navigte =useNavigate()
navigte('/welcome')
{/* ושנרצה לא לדחוף לראוט נוסף בשרשרת אלא לראוט חדש נכתוב את שם הראוט ופונקציה שאומרת שהראוט קיים
*/}
const navigte =useNavigate()
navigte('/welcome',{replace:true})
{/* ניתן גם לקדם לראוט הבאה או לחזור לראוט קדום  */}
navigte(1)
//
      </main>
    </div>
  );
}

export default App;
