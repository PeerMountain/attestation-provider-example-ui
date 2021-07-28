import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {attestationDataRequest} from "../actions/attestation.actions";
import {AttestationState} from "../reducers/attestation.reducer";
import {Observable} from "rxjs";
import {AttestationEntity} from "../model/attestation-entity";

@Component({
  selector: 'app-token-uri-access',
  templateUrl: './token-uri-access.component.html',
  styleUrls: ['./token-uri-access.component.css']
})
export class TokenUriAccessComponent implements OnInit {
  attestationId
  attestationData: Observable<AttestationEntity | undefined>

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ attestation: AttestationState }>
  ) {
    this.attestationId = Number(this.route.snapshot.paramMap.get('attestationId'));
    this.attestationData = this.store.select(state => state.attestation.attestationData)
  }

  ngOnInit(): void {
    this.store.dispatch(attestationDataRequest({
      id: this.attestationId
    }))
  }

}
