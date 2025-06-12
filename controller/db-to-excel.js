import User from "../model/user.model.js";
import Task from "../model/task.model.js";
import ExcelJS from 'exceljs';


const db_to_excel=async(req,res)=>{
try{
  const User_data=await User.query();
  const Task_data= await Task.query();
//   res.send(Task_data);
//   return;
  const workbook = new ExcelJS.Workbook();


   const userSheet = workbook.addWorksheet("Users");

     userSheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Name", key: "name", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Mobile", key: "mobile", width: 15 },
    ]

     User_data.map(obj => userSheet.addRow(obj));
//   res.status(200).send(Task_data);

  const taskSheet = workbook.addWorksheet("Tasks");
    taskSheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Title", key: "title", width: 30 },
      { header: "Description", key: "description", width: 50 },
      { header: "Status", key: "status", width: 15 },
      { header: "User Id", key: "userId", width: 15 },
    ]

      Task_data.map(obj => {
      taskSheet.addRow({
        id: obj.id,
        title: obj.title,
        description: obj.description,
        status: obj.isPending ? "Completed" : "Pending",
        userId: obj.userId,
      });
    });

      res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=users_tasks.xlsx"
    );

     await workbook.xlsx.write(res);
    res.end();
}
  catch (err) {
    console.error("excel error", err);
    res.status(500).send("Failed to export Excel file");
  }

} 

export default db_to_excel;