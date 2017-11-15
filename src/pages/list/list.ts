import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { DamageAssessment } from '../../models/damgeAssessment';
import { DamageAssessments } from '../../providers/providers';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  currentDamageAssessments: DamageAssessment [];

  constructor(public navCtrl: NavController, public damageAssessments: DamageAssessments, public modalCtrl: ModalController) {
    this.currentDamageAssessments = this.damageAssessments.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
   // this.currentDamageAssessments = this.damageAssessments.query();
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addDamageAssessment() {
    let addModal = this.modalCtrl.create('DamageAssessmentCreatePage');
    addModal.onDidDismiss(damageAssessment => {
      if (damageAssessment) {
        this.damageAssessments.add(damageAssessment);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteDamageAssessment(damageAssessment) {
    this.damageAssessments.delete(damageAssessment);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openDamageAssessment(damageAssessment: DamageAssessment) {
    // this.navCtrl.push('ItemDetailPage', {
    //   damageAssessment: damageAssessment
    // });
  }
}
