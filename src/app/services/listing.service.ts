import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})

export class Listing_DAS {

	constructor(private db:AngularFirestore) {}

	get_listings() {
		return this.db.collection<any>('listings').valueChanges()
	}
}
