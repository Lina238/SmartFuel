import React, { Component } from 'react'
import { Button } from 'antd';
import TabDeSuiviAction from './TabDeSuiviAction';



class TabDeSuivi extends Component {
    constructor(props) {
        super(props)

        this.state = {
                suivis: []
        }
       this.ajoutSuivi = this.ajoutSuivi.bind(this);
        this.modifierSuivi = this.modifierSuivi .bind(this);
        this.supprimerSuivi = this.supprimerSuivi.bind(this);
    }
    componentDidMount(){
        TabDeSuiviAction.getSuivi().then((res) => {
            this.setState({ suivis: res.data});
        });
    }
    
    ajoutSuivi(){
        this.props.history.push('/ajoutSuivi');
    }

    modifierSuivi(id){
        this.props.history.push(`/ajoutSuivi/${id}`);
    }

    supprimerSuivi(id){
        TabDeSuiviAction.supprimerSuivi(id).then( res => {
            this.setState({suivis: this.state.suivis.filter(suivi => suivi.id !== id)});
        });
    }


   


    render() {
        return (
        <div style={{ margin: '20px' }}>   

          <Button type="primary" onClick={this.ajoutSuivi} style={{   marginBottom: 20, }} >
           Nouveau Suivi
          </Button>
          <br></br>
          <div style={{ height: '400px', overflow: 'auto' }}>
            <table className = "table table-striped table-bordered rounded"  style={{ fontFamily: 'Poppins, sans-serif',borderRadius: '4px 2px 4px',
            fontSize: '14px', width:"150vh", border:'2px solid #ffffff' }}> 
           <thead style ={{backgroundColor :'#A0A0A0' }} >
              <tr style={ { borderRadius: '4px 2px 4px'}} >
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'  }}> Nom Distributeur</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Compteur actuel</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Compteur finale</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'}}> Quantité actuelle</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Espace libre</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Utilisateur</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Date de création</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Date de modification</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Montant Actuel</th>
                 <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Opérations</th>
                </tr>
          </thead>
          <tbody  >
               
                {  this.state.suivis.map(
                          suivi=> 
                 <tr key={suivi.id}>
                                            
                 <td >  {suivi.nom} </td>
                 <td >  {suivi.compteur_actuel} </td>
                 <td >  {suivi.compteur_final} </td>
                 <td >  {suivi.quantite} </td>
                 <td >  {suivi.quantite} </td> /**that needs espace libre */
                 <td >  {suivi.user_opperation} </td>
                 <td >  {suivi.date_de_creation} </td>
                 <td >  {suivi.date_de_modification} </td>
                 <td >  {suivi.montant_actuel} </td>  /** this need montant_actuel */
               
                <td >
                <Button type="primary" onClick={ () => this.modifierSuivi(suivi.id)} style={{  backgroundColor :"#FFA500" ,margin:"0px 8px 0px 0px",fontWeight :"600" }} >Modifier</Button>
                <Button type="primary" onClick={ () => this.supprimerSuivi(suivi.id)} style={{   backgroundColor :"#FF0000",margin:"0px 0px 0px 8px",fontWeight :"600" }} >Supprimer   </Button>                                  
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

export default TabDeSuivi;
