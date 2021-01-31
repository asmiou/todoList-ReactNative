export const COLORS = {
    black: '#000',
    white: '#fff',
    blue: '#1450A8',
    btnBlue:'rgb(32, 137, 220)',
    darkPrimary: '#303F9F',
    shadowColorBleu: '#5F6163'
};

export const ICON = {
    circle: 'circle'
}

export const STATUS = {
    process:'En cours..',
    done:'Terminé',
    todo: 'A faire..'
}

export const getColor=(value)=>{
    if(value===STATUS.process) return 'warning';
    if(value===STATUS.done) return 'success';
    return 'primary'
}

export const getIcone=(value)=>{
    if(value===STATUS.process) return 'hourglass-half';
    if(value===STATUS.done) return 'check';
    return 'calendar'
}

export const KEYS = {
    store:"TASKLIST"
}

export const TASKKIST =[
    {
        id: 0,
        description:"",
        title: "Prendre petit dej",
        status: STATUS.done
    },
    {
        id: 1,
        description:"",
        title: "Programmation ReactNative",
        status: STATUS.done
    },
    {
        id: 2,
        description:"",
        title: "Voire 12 coup de midi",
        status: STATUS.done
    },
    {
        id: 3,
        description:"",
        title: "Repos",
        status: STATUS.done 
    },
    {
        id: 4,
        description:"",
        title: "Aller voire Faldou",
        status: STATUS.done 
    },
    {
        id: 5,
        description:"",
        title: "Reprendre le coding",
        status: STATUS.process 
    },
    {
        id: 6,
        description:"",
        title: "Regarder Slam",
        status: STATUS.todo 
    },
    {
        id: 7,
        description:"",
        title: "Dejeuner",
        status: STATUS.todo 
    }
];

