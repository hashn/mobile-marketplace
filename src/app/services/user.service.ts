import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take, mergeAll, zipAll } from 'rxjs/operators';
import { computeMsgId } from '@angular/compiler';

@Injectable({
	providedIn: 'root'
})
export class User_DAS {

	constructor(private db:AngularFirestore) {}

	add_listing(listing) {
		return this.db.collection<any>('listings').add({
			title: listing.title,
			user_id: listing.user_id,
			description: listing.description,
			price: listing.price,
			photo_url: listing.photo_url
		})
	}

	get_user(){
		return localStorage.getItem('user')
	}

	// get_user_listing(user_id) {
	// 	return this.db.collection<any>('listings', ref => ref.where('user_id', '==', user_id)).valueChanges()
	// }

	// addListing(userId, listing) {
	// 	 return this.afs.collection<any>(`user_listings/${userId}/listings`).add(listing);
	// }

	// getListings(userId){
	// 	return this.afs.collection<any>(`userListings/${userId}/listings`).valueChanges();
	// }
}
