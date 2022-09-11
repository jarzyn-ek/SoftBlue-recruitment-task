import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './core/integration/comments/comments.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services-page/services.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainWrapperComponent } from './core/components/main-wrapper/main-wrapper.component';
import { MatButtonModule } from '@angular/material/button';
import { ServicesShortComponent } from './home/services-short/services-short.component';
import { FeatureComponent } from './home/services-short/components/feature/feature.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceShortComponent } from './home/experience-short/experience-short.component';
import { BasicInfoComponent } from './core/components/basic-info/basic-info.component';
import { ExperienceComponent } from './home/experience-short/components/experience/experience.component';
import { MatCardModule } from '@angular/material/card';
import { ShowAllExperiencesComponent } from './home/experience-short/components/show-all-experiences/show-all-experiences.component';
import { ShowAllFeaturesComponent } from './home/services-short/components/show-all-features/show-all-features.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SingleCommentComponent } from './core/integration/comments/components/single-comment/single-comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowAllCommentsComponent } from './core/integration/comments/components/show-all-comments/show-all-comments.component';
import { PaginationComponent } from './core/components/pagination/pagination.component';
import { EnumeratePipe } from './core/pipes/enumerate.pipe';
import { AddCommentComponent } from './core/integration/comments/components/add-comment/add-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExperiencesPageComponent } from './experiences-page/experiences-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    HomeComponent,
    ServicesComponent,
    NavigationComponent,
    FooterComponent,
    MainWrapperComponent,
    ServicesShortComponent,
    FeatureComponent,
    ExperienceShortComponent,
    ExperienceComponent,
    BasicInfoComponent,
    ShowAllExperiencesComponent,
    ShowAllFeaturesComponent,
    SingleCommentComponent,
    ShowAllCommentsComponent,
    PaginationComponent,
    EnumeratePipe,
    AddCommentComponent,
    ExperiencesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
