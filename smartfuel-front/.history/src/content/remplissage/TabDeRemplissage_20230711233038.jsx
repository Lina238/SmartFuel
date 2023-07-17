import React, { Component } from 'react'
import { Button } from 'antd';
import TabDeRemplissageAction from './TabDeRemplissageAction';



class TabDeRemplissage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                remplis: []
        }
       this.ajoutRempli = this.ajoutRempli.bind(this);
        this.modifierRempli = this.modifierRempli.bind(this);
        this.supprimerRempli = this.supprimerRempli.bind(this);
    }
    componentDidMount(){
        TabDeRemplissageAction.getRempli().then((res) => {
            this.setState({ remplis: res.data});
        });
    }
    
    ajoutRempli(){
        this.props.history.push('/ajoutRempli/ajout');
    }

    modifierRempli(id){
        this.props.history.push(`/ajoutRempli/${id}`);
    }

    supprimerRempli(id){
        TabDeRemplissageAction.supprimerRempli(id).then( res => {
            this.setState({remplis: this.state.remplis.filter(rempli => rempli.id !== id)});
        });
    }


   


    render() {
        return (
        <div style={{ margin: '20px' }}>   

          <Button type="primary" onClick={this.ajoutRempli} style={{   marginBottom: 20, }} >
           Nouveau Remplissage
          </Button>
          <br></br>
          <div style={{ height: '400px', overflow: 'auto' }}>
            <table className = "table table-striped table-bordered rounded"  style={{ fontFamily: 'Poppins, sans-serif',borderRadius: '4px 2px 4px',
            fontSize: '14px', width:"150vh", border:'2px solid #ffffff' }}> 
           <thead style ={{backgroundColor :'#A0A0A0' }} >
              <tr style={ { borderRadius: '4px 2px 4px'}} >
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'  }}> Nom Distributeur</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Quantité de remplissage</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Unité de mésure</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'}}> Date de création</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Date de modification</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Prix d'achats</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Opérations</th>
                </tr>
          </thead>
          <tbody  >
               
                {  this.state.remplis.map(
                          rempli=> 
                 <tr key={rempli.id}>
                                            
                 <td >  {rempli.nom} </td>
                 <td >  {rempli.quantite} </td>
                 <td >  {rempli.unite_de_mesure} </td>
                 <td >  {rempli.date_de_creation} </td>
                 <td >  {rempli.date_de_modification} </td>
                 <td >  {rempli.prix_dachat} </td>
               
                <td >
                <Button type="primary" onClick={ () => this.modifierRempli(rempli.id)} style={{  backgroundColor :"#FFA500" ,margin:"0px 8px 0px 0px",fontWeight :"600" }} >Modifier</Button>
                <Button type="primary" onClick={ () => this.supprimerRempli(rempli.id)} style={{   backgroundColor :"#FF0000",margin:"0px 0px 0px 8px",fontWeight :"600" }} >Supprimer   </Button>                                  
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

export default TabDeRemplissage;
