import style from './Landing.module.css'
import {FaAlignJustify, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
export default function Landing(){
  return(
    <div className={style.content}>
     <div className={style.imgPancakes}>
 <div className={style.contentIcons}>
 <div className={style.contentMenuHamb}> 
       <FaAlignJustify className={style.icon}/>
     </div>
     <div className={style.contentIconRedes}>
     <FaInstagram className={style.icon}/>
      <FaFacebook className={style.icon}/>
      <FaTwitter className={style.icon}/>
     </div>
 </div>
     </div>
     <div className={style.data}>
       <nav>
         <ul>
           <li className={style.li}>Title1</li>
           <li className={style.li}>Title2</li>
           <li className={style.li}>Title3</li>
           <li className={style.li}>Title4</li>
         </ul>
       </nav>
      <div className={style.contentTitleSapm}> 
        <h1 className={style.title}>Pancakes Lover</h1>
      <div className={style.spam}>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor impedit est amet voluptate cumque. Mollitia ab suscipit officiis, iusto dolores labore magni esse dolorem asperiores adipisci dolor non, sint exercitationem. Saepe num</p>
      </div>
       <button className={style.boton}>Lorem</button></div>
     </div>
     <div>
     <img className={style.imgData2} src="https://image.shutterstock.com/image-photo/classic-american-pancakes-fresh-berry-260nw-1554177182.jpg" alt="" />
     <img className={style.imgData2} src="https://us.123rf.com/450wm/aliasemma/aliasemma1910/aliasemma191000011/133864031-panqueques-con-bayas-heladas-y-fondo-oscuro.jpg?ver=6" alt="" />
     <img className={style.imgData2} src="https://image.shutterstock.com/image-photo/delicious-pancakes-fresh-blueberries-syrup-260nw-1500830738.jpg" alt="" />
     <img className={style.imgData2} src="https://img.freepik.com/foto-gratis/vista-superior-panqueques-desayuno-plato-miel-arandanos_23-2148417347.jpg?w=360" alt="" />
     <img className={style.imgData2} src="https://us.123rf.com/450wm/yuliadavidovich/yuliadavidovich2005/yuliadavidovich200500085/147910734-tortitas-con-ar%C3%A1ndanos-frescos-y-miel-para-el-desayuno-horizontal.jpg?ver=6" alt="" />
     
     </div>
    </div>
  )
}