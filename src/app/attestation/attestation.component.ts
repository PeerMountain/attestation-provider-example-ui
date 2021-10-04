import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Store} from "@ngrx/store";
import {sendDataForAttestationRequest, verifyChallengeSignatureRequest} from "../actions/attestation.actions";
import {AttestationState} from "../reducers/attestation.reducer";
import {combineLatest, Observable} from "rxjs";

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.css']
})
export class AttestationComponent implements OnInit {
  public verificationSuccess: Observable<boolean>
  public dataForAttestation: string
  private challenge?: string
  private nftType?: number
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
      this.nftType = params["nftType"]
      this.store.dispatch(verifyChallengeSignatureRequest({
          challenge: params["challenge"],
          signature: params["signature"],
          userAddress: params["address"],
          token: params["token"],
          nftType: params["nftType"],
        })
      )
    });

    combineLatest([
      this.store.select(state => state.attestation.redirectUrl),
      this.store.select(state => state.attestation.initialParams),
    ]).subscribe(tuple => {
      if (!!tuple[0] && !!tuple[1]) {
        console.log(tuple[0]?.entity.signature)
        // window.location.href = `${tuple[0]?.url}?`
        //   .concat(`signature=${tuple[0]?.entity.signature}`)
        //   .concat(`&nftType=${tuple[1]?.nftType}`)
        //   .concat(`&hashKeyArray=${tuple[0]?.entity.hashKeyArray}`)
        //   .concat(`&hashedData=${tuple[0]?.entity.hashedData}`)
        //   .concat(`&tokenUri=${tuple[0]?.entity.tokenUri}`)
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
      nftType: this.nftType!!,
    }))
  }
}
