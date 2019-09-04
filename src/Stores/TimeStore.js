import {observable, action} from "mobx";

class TimeStore{
    static instance = null;
    static getInstance(){
        if(TimeStore.instance == null)
            TimeStore.instance = new TimeStore();
        return TimeStore.instance;
    }

    @observable current_time = null;
    @action getTime = async () => this.current_time = await new Date();
}

export default TimeStore.getInstance();