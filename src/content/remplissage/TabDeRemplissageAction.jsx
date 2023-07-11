import axios from 'axios';

const Rempli_API_URL = "http://localhost:8000/Remplis";

class TabDeRemplissageAction {

    getRempli(){
        return axios.get(Rempli_API_URL);
    }
    getRempliById(rempliId){
        return axios.get(Rempli_API_URL+ '/' + rempliId);
    }

    ajoutRempli(rempli){
        return axios.post(Rempli_API_URL, rempli);
    }

    modifierRempli(rempli, rempliId){
        return axios.put(Rempli_API_URL + '/' + rempliId, rempli);
    }

    supprimerRempli(rempliId){
        return axios.delete(Rempli_API_URL + '/' + rempliId);
    }
}

export default new TabDeRemplissageAction()