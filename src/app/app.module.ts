import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SiderBarComponent } from './sider-bar/sider-bar.component';
import { ContentPartComponent } from './content-part/content-part.component';
import { GithubDataService } from './github-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { FooterbarComponent } from './footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SiderBarComponent,
    ContentPartComponent,
    FooterbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [GithubDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
