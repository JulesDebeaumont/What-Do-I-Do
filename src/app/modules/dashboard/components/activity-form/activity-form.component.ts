import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/models/activity.model';
import { ActivityService } from 'src/app/services/activity.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {

  activityId?: number;
  isEdit?: boolean;
  isLoading: boolean = false; // for get User
  isSubmitted: boolean = false; // for patch/post User
  errorMessage?: string;
  submitRedirectUrl : string = "/dashboard/activities";
  activityForm: FormGroup = this.formBuilder.group({
    'id': new FormControl(''),
    'name': new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    'duration': new FormControl('', [
      Validators.required
    ])
  });

  get name(): AbstractControl | null {
    return this.activityForm.get('name');
  }
  get duration(): AbstractControl | null {
    return this.activityForm.get('duration');
  }

  constructor(
    private router: Router,
    private activityService: ActivityService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      this.activityId = Number(this.route.snapshot.paramMap.get('id'));
      this.isEdit = true;

      this.getActivity(this.activityId);
    }
  }


  getActivity(activityId: number): void {
    this.isLoading = true;
    this.activityService.getActivity(activityId)
      .subscribe((response) => {
        this.activityForm.setValue({
          id: response.id,
          name: response.name,
          duration: response.duration
        });
        this.isLoading = false;
      }, (error) => {
        console.log(error.message);
        this.isLoading = false;
      }, () => {
        // this.isLoading = false;
      })
  }

  saveActivity(activity: Activity): void {
    this.isSubmitted = true;
    this.activityService.postActivity(activity)
      .subscribe(() => {
        this.router.navigateByUrl(this.submitRedirectUrl);
      }, (error) => {
        console.log(error.message);
        this.errorMessage = error.message;
        this.isSubmitted = false;
      }, () => {
        // this.isSubmitted = false; Not working if error ???? // TODO
      })
  }

  patchActivity(activity: Activity): void {
    this.isSubmitted = true;
    this.activityService.patchActivity(activity)
      .subscribe(() => {
        this.router.navigateByUrl(this.submitRedirectUrl);
      }, (error) => {
        console.log(error.message);
        this.errorMessage = error.message;
        this.isSubmitted = false;
      }, () => {
        // this.isSubmitted = false;
      })
  }

  onSubmit(): void {
    if (this.activityForm.valid) {
      const activityData: any = this.activityForm.getRawValue();

      activityData.owner = `/api/users/${this.auth.getUserId()}`; // thanks ApiPlatform bis 😬

      if (this.isEdit) {
        this.patchActivity(activityData as Activity);
      } else {
        delete activityData.id; // thanks ApiPlatform bisbis 😬
        this.saveActivity(activityData as Activity);
      }
    }
  }
}
