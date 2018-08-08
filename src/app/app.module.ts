import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; //Import declaration

// Third Party Component
import { AgmCoreModule } from '@agm/core';

// Our other components
import { AppComponent } from './app.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MySignupFormComponent,
    QuoteItemComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDUeQXCyJDlhOtCB8JwWAk8zCxpjk6k-jo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
