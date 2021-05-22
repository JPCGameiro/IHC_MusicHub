import { Component, HostListener} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicHub';

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   beforeAll( async ()  => {
  //     await browser.get('#/page-url');
  //     await browser.waitForAngular();
  //     });
  //   const offset = window.pageYOffset;
  //   console.log(offset);
  //   if (offset > 416){
  //     await  main = document.querySelector("main");
  //     const newdiv = document.createElement("div");
  //     newdiv.innerHTML = "<div class=\"icon-border\"><img class=\"mensagix-icon-dynamic\" src=\"../../assets/chat_icon-icons.com_67748.svg\" alt=\"mensagix\"></div>";
  //     newdiv.classList.add("icon-border");

  //     console.log(main)
  //     console.log(newdiv)
  //     main.appendChild(newdiv);
      
  //     document.getElementsByTagName("app-menssenger")[0]
      
  //   }
  // }

}
