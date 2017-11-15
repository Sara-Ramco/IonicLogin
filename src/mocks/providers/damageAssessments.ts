import { Injectable } from '@angular/core';

import { DamageAssessment } from '../../models/damgeAssessment';

@Injectable()
export class DamageAssessments {
  damageAssessments: DamageAssessment[] = [];

  defaultDamageAssessment: any = {
    "id": "Dent/121017/AMS",
    "registration": "123456",
    "description": "I am so blue I'm greener than purple",
    "type": "A380"
  };


  constructor() {
    let damageAssessments = [
      {
        "id": "Dent/121017/AMS",
        "registration": "123456",
        "description": "I stepped on a Corn Flake, now I'm a Cereal Killer",
        "type": "A380",
      },
      {
        "id": "Dent/121018/AMS",
        "registration": "123450",
        "description": "Llamas eat sexy paper clips",
        "type": "B787",
      },
      {
        "id": "Dent/121019/AMS",
        "registration": "123455",
        "description": "Banana error.", 
        "type": "B737",
      },
      {
        "id": "Dent/121020/AMS",
        "registration": "123459",
        "description": "On a scale from one to ten what is your favourite colour of the alphabet", 
        "type": "A330",
      },
      {
        "id": "Dent/121021/AMS",
        "registration": "123457",
        "description": "On a scale from one to ten what is your favourite colour of the alphabet",    
        "type": "A333",
      },
      {
        "id": "Dent/121022/AMS",
        "registration": "123480",
        "description": "Everyday a grape licks a friendly cow", 
        "type": "A350",
      },
      {
        "id": "Dent/121023/AMS",
        "registration": "123490",
        "description": "The sparkly lamp ate a pillow then punched Larry", 
        "type": "A320",
      }
    ];

    for (let damgeAssessment of damageAssessments) {
      this.damageAssessments.push(new DamageAssessment(damgeAssessment));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.damageAssessments;
    }

    return this.damageAssessments.filter((damgeAssessment) => {
      for (let key in params) {
        let field = damgeAssessment[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return damgeAssessment;
        } else if (field == params[key]) {
          return damgeAssessment;
        }
      }
      return null;
    });
  }

  add(damgeAssessment: DamageAssessment) {
    this.damageAssessments.push(damgeAssessment);
  }

  delete(damgeAssessment: DamageAssessment) {
    this.damageAssessments.splice(this.damageAssessments.indexOf(damgeAssessment), 1);
  }
}