import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './features/notfound/notfound.component'
import { authInterceptorProviders } from './core/_helpers/auth.interceptor';
import { AuthService } from './core/_services/auth.service';
import { HttpUtilService } from './util/service/http-util.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        authInterceptorProviders,AuthService,HttpUtilService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
