export class Category{
  public path:any;   
  public name:any;
  public shortName:any;
  public parent:any;
  public mode:any;
  public type:any;
  public sha:any;
  public url:any;
  public subCategory:any;
  public hasSubcategory:boolean=false;
  public level:number=-1;
  public content:any;
  constructor(path,category,shortName,parent,mode,type,sha,url,subCategory,hasSubcategory,level,content)
  {
      this.path=path;
      this.name=category;
      this.shortName=shortName;
      this.parent=parent;
      this.mode=mode;
      this.type=type;
      this.sha=sha;
      this.url=url;
      this.subCategory=subCategory;
      this.hasSubcategory=hasSubcategory;
      this.level=level;
      this.content=content;
  }
}
