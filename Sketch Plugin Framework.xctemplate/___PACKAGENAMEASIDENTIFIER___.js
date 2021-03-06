/*
// To load this framework, replace the onRun method in your script.cocoscript

@import '___PACKAGENAMEASIDENTIFIER___.framework/___PACKAGENAMEASIDENTIFIER___.js'

var onRun = function(context) {
   var obj = ___PACKAGENAMEASIDENTIFIER___.alloc().init()
   var uppercase = obj.uppercaseString("hello world")

   log(uppercase);
   context.document.showMessage(uppercase);
}
*/

var ___PACKAGENAMEASIDENTIFIER____FrameworkPath = ___PACKAGENAMEASIDENTIFIER____FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent();
var ___PACKAGENAMEASIDENTIFIER____Log = ___PACKAGENAMEASIDENTIFIER____Log || log;
(function() {
 var mocha = Mocha.sharedRuntime();
 var frameworkName = "___PACKAGENAMEASIDENTIFIER___";
 var directory = ___PACKAGENAMEASIDENTIFIER____FrameworkPath;
 if (mocha.valueForKey(frameworkName)) {
___PACKAGENAMEASIDENTIFIER____Log("😎 loadFramework: `" + frameworkName + "` already loaded.");
 return true;
 } else if ([mocha loadFrameworkWithName:frameworkName inDirectory:directory]) {
 ___PACKAGENAMEASIDENTIFIER____Log("✅ loadFramework: `" + frameworkName + "` success!");
 mocha.setValue_forKey_(true, frameworkName);
 return true;
 } else {
 ___PACKAGENAMEASIDENTIFIER____Log("❌ loadFramework: `" + frameworkName + "` failed!: " + directory + ". Please define ___PACKAGENAMEASIDENTIFIER____FrameworkPath if you're trying to @import in a custom plugin");
 return false;
 }
 })();
