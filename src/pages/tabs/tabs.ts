import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root :any = HomePage;
  tab2Root :any = ProfilePage;
  constructor(){}
}
