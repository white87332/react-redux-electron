import Result from '../class/result';

let result = new Result().getResult();

export default
{
    init: function()
    {
        this.ipcMain.on('index', function(event, arg)
        {

        });
    },
};
