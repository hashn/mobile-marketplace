import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Listing_DAS } from 'src/app/services/listing.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

	user;
	listings;

	constructor(private Router:Router, private Listings_DAS:Listing_DAS, private AuthenticationService:AuthenticationService) {
		this.AuthenticationService.get_user().subscribe(user => {
			this.user = user
			this.Listings_DAS.get_listings().subscribe(Response => { this.listings = Response })
		})
	}

	ngOnInit() {
	}

}
