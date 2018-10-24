import { Component, OnInit } from '@angular/core';
import {GithubDataService} from '../github-data.service'
import { Category } from '../Category';
import { isNgTemplate, IfStmt, analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { groupBy, filter } from 'rxjs/operators';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { element } from '@angular/core/src/render3/instructions';
import { Observable } from 'rxjs';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MarkdownModule } from 'ngx-markdown';
import {Base64} from 'js-base64';

@Component({
  selector: 'app-sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrls: ['./sider-bar.component.css'],
})
export class SiderBarComponent implements OnInit {

  public Categories: any[];
  public Files:any[];

  userFilter: any = { parent: "Core Concepts" };
 
  setCategoryValue(categoryName) { this.userFilter.parent = categoryName; }
  
  constructor(private githubDataService:GithubDataService,filterPipe: FilterPipeModule) {

  }

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.Categories = [];
    this.Files=[];
    this.githubDataService.getCategories().subscribe(data => {
      console.log(data);
      data.tree.forEach(element => {
          let toArray =  element.path.split("/");
          let parent;
          let category=toArray[toArray.length-1];
          if(toArray.length==1)
          {
             parent="None";
          }
          else
          {
            parent=toArray[toArray.length-2];
          }
          let shortName=category.replace(/\s/g, "");
          shortName=shortName.replace(".md","");
          let c=new Category(element.path,category,shortName,parent,element.mode,element.type,element.sha,element.url,[],false,-1,"");         
          this.Categories.push(c);
      });
      console.log(this.Categories);
      this.Files=this.Categories.filter(element=>element.type=="blob");
      this.setFilesContent(this.Files);
      console.log(this.Files);
      this.Categories.forEach(element => {
        if(element.parent=="None")
        {   
            let level=0;
            element.level=level;    
            this.setSubCategories(this.Categories,element,level);
        }
      });
      this.Categories=this.Categories.filter(element=>element.parent=="None");
      console.log(this.Categories);
    });
    
  }

  setFilesContent(files:any[])
  {
     files.forEach(element=>{
      this.githubDataService.getFileContent(element.path).subscribe(data => {
        element.content=Base64.decode(data["content"]);
      });
     });
  }
  setSubCategories(categories:any[],e:any,level:number)
  {
    level++;
    e.level=level;
    let subs:any[]=[];
    subs=categories.filter(element=>element.parent==e.name && element.type=="tree");
    if(e.type=="tree")
    {
      e.subCategory=subs;
      //if there is one tree sub category for this category, it has sub category.
      //let trees=subs.filter(element=>element.type=="tree");
      if(subs.length>0)
      {
        e.hasSubcategory=true;
      }
      subs.forEach(element=>{
         this.setSubCategories(categories,element,level); 
      });
    }
  }

}
