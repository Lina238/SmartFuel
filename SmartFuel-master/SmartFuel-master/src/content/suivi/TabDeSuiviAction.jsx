import axios from 'axios';

const Suivi_API_URL = "http://localhost:8000/Suivis";

class TabDeSuiviAction {

    getSuivi(){
        return axios.get(Suivi_API_URL);
    }
    getSuiviById(suiviId){
        return axios.get(Suivi_API_URL+ '/' + suiviId);
    }

    ajoutSuivi(suivi){
        return axios.post(Suivi_API_URL, suivi);
    }

    modifierSuivi(suivi, suiviId){
        return axios.put(Suivi_API_URL + '/' + suiviId, suivi);
    }

    supprimerSuivi(suiviId){
        return axios.delete(Suivi_API_URL + '/' + suiviId);
    }
}

export default new TabDeSuiviAction()