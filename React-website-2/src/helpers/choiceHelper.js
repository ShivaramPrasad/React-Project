const choiceHelper = {
    addChoice: (choices, newChoiceName) => [
        ...choices,
        {
            id: Math.floor((Math.random() * 10000) + 1),
            name: newChoiceName,
            chosen: 0,
            perc: 0
        }
    ],

    updateChoice: (choices, updatedChoiceId, updatedChosen) =>
    choices.map(t => t.id !== updatedChoiceId ? t : 
        {
            ...t,
            chosen: updatedChosen //Si alguien contesta sumamos uno al chosen   
        },
    ),

    calcPer: (choices, total) => 
    choices.map(t => 1 !== 1 ? t ://we want to go in everythim
        {
            ...t,
            perc: Math.round(t.chosen*100/total)
        },
    )
};

export default choiceHelper;