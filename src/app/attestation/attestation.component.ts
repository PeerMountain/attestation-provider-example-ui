import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Store} from "@ngrx/store";
import {sendDataForAttestationRequest, verifyChallengeSignatureRequest} from "../actions/attestation.actions";
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
  private challenge?: string
  private userAddress?: string
  private signature?: string
  private token?: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{ attestation: AttestationState }>
  ) {
    this.verificationSuccess = this.store.select(state => {
      return state.attestation.verificationSuccess
    })
    this.dataForAttestation = ""
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.challenge = params["challenge"]
      this.userAddress = params["address"]
      this.signature = params["signature"]
      this.token = params["token"]
      this.store.dispatch(verifyChallengeSignatureRequest({
          challenge: params["challenge"],
          signature: params["signature"],
          userAddress: params["address"],
          token: params["token"]
        })
      )
    });
    this.store.select(state => state.attestation.redirectUrl).subscribe(url => {
      if (!!url) {
        window.location.href = url
      }
    })
  }

  attestate() {
    this.store.dispatch(sendDataForAttestationRequest({
      attestationData: this.dataForAttestation,
      userAddress: this.userAddress!!,
      challenge: this.challenge!!,
      signature: this.signature!!,
      token: this.token!!,
    }))
  }
}
