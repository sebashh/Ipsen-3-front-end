export class MockProject {
    public projectId = 1;
    public title = "Hello";
    public description = "This is a description";
    public study = 'ICT';
    public category = "noobs";
    public clientId = 1;

    public getData() {
        return {
          projectId : this.projectId,
          title : this.title,
          description : this.description,
          study : this.study,
          category : this.category,
          clientId : this.clientId
        }
      }
  }