import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User_DAS } from 'src/app/services/user.service';

import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

	user;
	user_form: FormGroup;

	// FORM PROPS
	name: string;
	email: string;
	phone: string;

	constructor(
		private Router:Router,
		private AthenticationService:AuthenticationService,
		public User_DAS:User_DAS,
		public util:UtilService,
		private formBuilder:FormBuilder)
	{

		this.AthenticationService.get_user()
		.subscribe(user => {
			this.user = user;
		})

		let details = JSON.parse(localStorage.getItem('user'))
		this.user_form = new FormGroup({
			name: new FormControl(details.displayName),
			email: new FormControl(details.email),
			phone: new FormControl(details.phoneNumber)
		})

	}

	ngOnInit() {}

	onSubmit() {
		this.AthenticationService.set_user({
			displayName: this.user_form.value.name,
			email: this.user_form.value.email,
			phoneNumber: this.user_form.value.phone
		})
		this.util.toast("Profile updated", "success", "bottom")
	}
}