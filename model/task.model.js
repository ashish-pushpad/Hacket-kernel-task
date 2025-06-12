import {Model} from 'objection';


class Task extends Model{
  static get tableName(){
     return 'task'
  }


   static get jsonSchema() {
    return{
        type:"object",
        required:['title','userId','description','isPending'],
         properties: {
          id: { type: 'integer' },
          userId:{type:'integer'},
          title:{type:"string"},
          description:{type:'string'},
          isPending:{type:"boolean"}
         }
    }
   }

}

export default Task;