/**
 *
 * The DamageAssessments service manages creating instances of DamageAssessment, so go ahead and rename
 * that something that fits your app as well.
 */
export class DamageAssessment {
    
      constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
          this[f] = fields[f];
        }
      }
    
    }
    