import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Store} from "@ngrx/store";
import {verifyChallengeSignatureRequest} from "../actions/attestation.actions";
import {AttestationState} from "../reducers/attestation.reducer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.css']
})
export class AttestationComponent implements OnInit {
  public verificationSuccess: Observable<boolean>
  public dataForAttestation: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{attestation: AttestationState}>
  ) {
    this.verificationSuccess = this.store.select(state => {
      return state.attestation.verificationSuccess
    })
    this.dataForAttestation = ""
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.store.dispatch(verifyChallengeSignatureRequest({
          challenge: params["challenge"],
          signature: params["signature"],
          userAddress: params["address"],
          token: params["token"]
        })
      )
    });
  }

  attestate() {

  }
}
