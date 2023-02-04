/*:
 * @target MZ
 * @plugindesc プラグインのタイトル
 * @author 作者の名前
 *
 * @help プラグインの詳細な使い方
 * 
 * @command test
 * @text コマンド名
 * @desc コマンドの説明
 *
 * @arg value1
 * @type number
 * @text 引数1の名前
 * @desc 引数の説明
 * 
 * @arg value2
 * @type number
 * @text 引数2の名
 * @desc 引数の説明
 */

(() => {
    const pluginName = "SomePlugin";

    PluginManager.registerCommand(pluginName, "test", args => {
        somtMethod(args);
    });

    function somtMethod(args) {
        $gameVariables.setValue(args.value1, args.value2);
    };

})();
