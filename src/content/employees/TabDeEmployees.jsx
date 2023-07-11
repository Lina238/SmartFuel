import React, { Component } from 'react'
import { Button } from 'antd';
import TabDeEmployeesAction from './TabDeEmployeesAction';



class TabDeEmployees extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
       this.ajoutEmployee = this.ajoutEmployee.bind(this);
        this.modifierEmployee = this.modifierEmployee.bind(this);
        this.supprimerEmployee = this.supprimerEmployee.bind(this);
    }
    componentDidMount(){
          TabDeEmployeesAction.getEmployee().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    
    ajoutEmployee(){
        this.props.history.push('/ajoutEmployee/ajout');
    }

    modifierEmployee(id){
        this.props.history.push(`/ajoutEmployee/${id}`);
    }

    supprimerEmployee(id){
      TabDeEmployeesAction.supprimerEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }


   


    render() {
        return (
        <div style={{ margin: '20px' }}>   

          <Button type="primary" onClick={this.ajoutEmployee} style={{   marginBottom: 20, }} >
           Nouveau Employée
          </Button>
          <br></br>
          <div style={{ height: '400px', overflow: 'auto' }}>
            <table className = "table table-striped table-bordered rounded"  style={{ fontFamily: 'Poppins, sans-serif',borderRadius: '4px 2px 4px',
            fontSize: '14px', width:"150vh", border:'2px solid #ffffff' }}> 
           <thead style ={{backgroundColor :'#A0A0A0' }} >
              <tr style={ { borderRadius: '4px 2px 4px'}} >
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'  }}> Code Utilisateur</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Nom employée</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Prénom employée</th>
                <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'}}> N° Téléphone</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Rôle </th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Son chef</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Opérations</th>
                </tr>
          </thead>
          <tbody  >
               
                {  this.state.employees.map(
                          employee=> 
                 <tr key={employee.id}>
                                            
                 <td >  {employee.id} </td>
                 <td >  {employee.nom} </td>
                 <td >  {employee.prenom} </td>
                 <td >  {employee.ntel} </td>
                 <td >  {employee.role} </td>
                 <td >  {employee.chef} </td>
               
                <td >
                <Button type="primary" onClick={ () => this.modifierEmployee(employee.id)} style={{  backgroundColor :"#FFA500" ,margin:"0px 8px 0px 0px",fontWeight :"600" }} >Modifier</Button>
                <Button type="primary" onClick={ () => this.supprimerEmployee(employee.id)} style={{   backgroundColor :"#FF0000",margin:"0px 0px 0px 8px",fontWeight :"600" }} >Supprimer   </Button>                                  
                 </td>
                 </tr>
                 
                                       
                               )}   
                                
                            </tbody>
                        </table>

                 </div>
           
            </div>
        )
    }
}

export default TabDeEmployees;
