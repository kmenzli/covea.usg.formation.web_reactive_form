import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomvalidationService} from "@app/services/customvalidation.service";

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

    registerForm!: FormGroup;
    submitted = false;

    constructor(
        private fb: FormBuilder,
        private customValidator: CustomvalidationService
    ) {
    }

    get registerFormControl() {
        return this.registerForm.controls;
    }

    ngOnInit() {
        this.registerForm = this.fb.group({
                name: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
                password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
                confirmPassword: ['', [Validators.required]],
            },
            {
                validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
            }
        );
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.valid) {
            alert('Form Submitted succesfully!!!\n Check the values in browser console.');
            console.table(this.registerForm.value);
        }
    }

}
