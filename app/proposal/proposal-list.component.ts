import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(1, 'Kevin Burke Experiment',
    'http://portfolio.conor.com', 'Ruby on Rails', 150, 120, 15,
    'conor@seespotgo.com');
  proposalTwo: Proposal = new Proposal(2, 'Haulr',
    'http://portfolio.conor.com', 'Ruby on Rails', 150, 120, 15,
    'conor@seespotgo.com');
  proposalThree: Proposal = new Proposal(3, 'Haulr Experiment',
    'http://portfolio.conor.com', 'Ruby on Rails', 150, 120, 15,
    'conor@seespotgo.com');

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
  ]
}
