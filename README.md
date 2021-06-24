# UserManagementReact

## Generate the database

dotnet ef database update -s UserManagementReact -p UserManagementReact.Services


### Target project and startup project
The commands refer to a project and a startup project.
	• The project is also known as the target project because it's where the commands add or remove files. By default, the project in the current directory is the target project. You can specify a different project as target project by using the --project option.
	• The startup project is the one that the tools build and run. The tools have to execute application code at design time to get information about the project, such as the database connection string and the configuration of the model. By default, the project in the current directory is the startup project. You can specify a different project as startup project by using the --startup-project option.

From <https://docs.microsoft.com/en-us/ef/core/cli/dotnet#installing-the-tools> 



## User Secrets

From <https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-5.0&tabs=windows#secret-manager> 

### Enable secret storage

To use user secrets, run the following command in the project directory (UserManagementReact/UserManagementReact ):

dotnet user-secrets init


### Set a secret

dotnet user-secrets set "DefaultConnection" "server=localhost;user=root;password=mysql;database=UserManagementReact"
dotnet user-secrets set "ServerVersion" "8.0.25"
