/**
 * Created by xjljinlong on 2017/2/21.
 */
module.exports = function (content, file, settings) {

    //settings.files.forEach(function (fil) {

        //if (fil.reg.test(file.subpath)){

            fis.util.map(settings.rule,function (key,str) {
                var reg, arr = key.split('|');
                reg = new RegExp(arr[0], arr[1]);
                content = content.replace(reg,str);
            });
        //}
    //})
    return content ;
}