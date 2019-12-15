var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/index/devCmd.wxml','./pages/index/devHistory.wxml','./pages/index/devInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/devInfo","pages/index/devHistory","pages/index/devCmd"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"position":"bottom","color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/index/devInfo","iconPath":"static/images/bar1.png","selectedIconPath":"static/images/bar1_.png","text":"设备信息"},{"pagePath":"pages/index/devCmd","iconPath":"static/images/bar2.png","selectedIconPath":"static/images/bar2_.png","text":"设备命令"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Team3","compilerVersion":"2.4.2","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/devCmd.json']={"navigationBarTitleText":"设备命令","usingComponents":{}};
__wxAppCode__['pages/index/devCmd.wxml']=$gwx('./pages/index/devCmd.wxml');

__wxAppCode__['pages/index/devHistory.json']={"navigationBarTitleText":"历史信息","enablePullDownRefresh":true,"backgroundTextStyle":"dark","usingComponents":{}};
__wxAppCode__['pages/index/devHistory.wxml']=$gwx('./pages/index/devHistory.wxml');

__wxAppCode__['pages/index/devInfo.json']={"navigationBarTitleText":"设备信息","enablePullDownRefresh":true,"backgroundTextStyle":"dark","usingComponents":{}};
__wxAppCode__['pages/index/devInfo.wxml']=$gwx('./pages/index/devInfo.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0544":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};n.default=t}).call(this,t("0de9")["default"])},"070e":function(e,n,t){"use strict";var o=t("a973"),u=t.n(o);u.a},"160b":function(e,n,t){"use strict";t.r(n);var o=t("ee1a");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("070e");var a,r,c=t("2877"),l=Object(c["a"])(o["default"],a,r,!1,null,null,null);n["default"]=l.exports},"636f":function(e,n,t){"use strict";(function(e){t("e487"),t("921b");var n=a(t("66fd")),o=a(t("160b")),u=a(t("f4e8"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default.config.productionTip=!1,n.default.prototype.globalVal=u.default,o.default.mpType="app";var l=new n.default(r({},o.default));e(l).$mount()}).call(this,t("6e42")["createApp"])},a973:function(e,n,t){},ee1a:function(e,n,t){"use strict";t.r(n);var o=t("0544"),u=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=u.a}},[["636f","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"07ca":function(t,e,i){"use strict";(function(e){t.exports={error:"",isJSON:function(t){if("string"==typeof t)try{var i=JSON.parse(t);return!("object"!=typeof i||!i)}catch(n){return console.log(e("error："+t+"!!!"+n," at my_js\\checker.js:13")),!1}},isNumber:function(t){var e=/^-?[1-9][0-9]?.?[0-9]*$/;return e.test(t)}}}).call(this,i("0de9")["default"])},"0de9":function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=n(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t}),a="";if(r.length>1){var o=r.pop();a=r.join("---COMMA---"),0===o.indexOf(" at ")?a+=o:a+="---COMMA---"+o}else a=r[0];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},2877:function(t,e,i){"use strict";function n(t,e,i,n,r,a,o,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}i.d(e,"a",function(){return n})},"2c96":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={pages:{"pages/index/devInfo":{navigationBarTitleText:"设备信息",enablePullDownRefresh:!0,backgroundTextStyle:"dark"},"pages/index/devHistory":{navigationBarTitleText:"历史信息",enablePullDownRefresh:!0,backgroundTextStyle:"dark"},"pages/index/devCmd":{navigationBarTitleText:"设备命令"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=n},"2d7a":function(t,e,i){"use strict";i.r(e);var n=i("654c"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=r.a},"323d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={appid:"__UNI__0BBFF73"};e.default=n},3563:function(t,e,i){"use strict";(function(e,i){var n={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},r=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];if(null==t)throw new TypeError("Cannot convert undefined or null to object");if(!i||i.length<=0)return t;function r(t,e){for(var i in e)t[i]=t[i]&&"[object Object]"===t[i].toString()?r(t[i],e[i]):t[i]=e[i];return t}return i.forEach(function(e){t=r(t,e)}),t},a={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var i=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!i}};function o(t,e){var i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=t.replace(i,function(t,e,i,n){return e+e+i+i+n+n}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),a=parseInt(r[1],16),o=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+a+","+o+","+s+","+e+")"}function s(t,e,i){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");i=i||10,e=e||"upper";var n=1;while(i<1)i*=10,n*=10;t="upper"===e?Math.ceil(t*n):Math.floor(t*n);while(t%i!==0)"upper"===e?t++:t--;return t/n}function l(t,e,i,n){for(var r=[],a=0;a<t.length;a++){for(var o={data:[],name:e[a],color:i[a]},s=0,l=n.length;s<l;s++)if(s<t[a])o.data.push(null);else{for(var c=0,u=0;u<t[a];u++)c+=n[s-u][1];o.data.push(+(c/t[a]).toFixed(3))}r.push(o)}return r}function c(t,e,i,n,r){var a=r.width-r.area[1]-r.area[3],o=i.eachSpacing*(r.chartData.xAxisData.xAxisPoints.length-1),s=e;return e>=0?(s=0,t.event.trigger("scrollLeft")):Math.abs(e)>=o-a&&(s=a-o,t.event.trigger("scrollRight")),s}function u(t,e,i){function n(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=n(t),e=n(e),i=n(i),e>i&&(i+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=i}function h(t,e,i){var n=t,r=i-e,a=n+(i-r-n)/Math.sqrt(2);a*=-1;var o=(i-r)*(Math.sqrt(2)-1)-(i-r-n)/Math.sqrt(2);return{transX:a,transY:o}}function f(t,e){function i(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var n=.2,r=.2,a=null,o=null,s=null,l=null;if(e<1?(a=t[0].x+(t[1].x-t[0].x)*n,o=t[0].y+(t[1].y-t[0].y)*n):(a=t[e].x+(t[e+1].x-t[e-1].x)*n,o=t[e].y+(t[e+1].y-t[e-1].y)*n),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*r,l=t[c].y-(t[c].y-t[c-1].y)*r}else s=t[e+1].x-(t[e+2].x-t[e].x)*r,l=t[e+1].y-(t[e+2].y-t[e].y)*r;return i(t,e+1)&&(l=t[e+1].y),i(t,e)&&(o=t[e].y),(o>=Math.max(t[e].y,t[e+1].y)||o<=Math.min(t[e].y,t[e+1].y))&&(o=t[e].y),(l>=Math.max(t[e].y,t[e+1].y)||l<=Math.min(t[e].y,t[e+1].y))&&(l=t[e+1].y),{ctrA:{x:a,y:o},ctrB:{x:s,y:l}}}function d(t,e,i){return{x:i.x+t,y:i.y-e}}function p(t,e){if(e)while(a.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function g(t,e,i){var n=0;return t.map(function(t){if(t.color||(t.color=i.colors[n],n=(n+1)%i.colors.length),t.index||(t.index=0),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function v(t,e){var i=0,n=e-t;return i=n>=1e4?1e3:n>=1e3?100:n>=100?10:n>=10?5:n>=1?1:n>=.1?.1:n>=.01?.01:n>=.001?.001:n>=1e-4?1e-4:n>=1e-5?1e-5:1e-6,{minRange:s(t,"lower",i),maxRange:s(e,"upper",i)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.fontSize;t=String(t);t=t.split("");for(var i=0,r=0;r<t.length;r++){var a=t[r];/[a-zA-Z]/.test(a)?i+=7:/[0-9]/.test(a)?i+=5.5:/\./.test(a)?i+=2.7:/-/.test(a)?i+=3.25:/[\u4e00-\u9fa5]/.test(a)?i+=10:/\(|\)/.test(a)?i+=3.73:/\s/.test(a)?i+=2.5:/%/.test(a)?i+=8:i+=10}return i*e/10}function x(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function m(t,e){for(var i=new Array(e),n=0;n<i.length;n++)i[n]=0;for(var r=0;r<t.length;r++)for(n=0;n<i.length;n++)i[n]+=t[r].data[n];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(i)},[])}function _(t,e,i){var n,r;return t.clientX?e.rotate?(r=e.height-t.clientX*e.pixelRatio,n=(t.pageY-i.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(n=t.clientX*e.pixelRatio,r=(t.pageY-i.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(r=e.height-t.x*e.pixelRatio,n=t.y*e.pixelRatio):(n=t.x*e.pixelRatio,r=t.y*e.pixelRatio),{x:n,y:r}}function b(t,e){for(var i=[],n=0;n<t.length;n++){var r=t[n];if(null!==r.data[e]&&"undefined"!==typeof r.data[e]&&r.show){var a={};a.color=r.color,a.type=r.type,a.style=r.style,a.pointShape=r.pointShape,a.disableLegend=r.disableLegend,a.name=r.name,a.show=r.show,a.data=r.format?r.format(r.data[e]):r.data[e],i.push(a)}}return i}function S(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function A(t){for(var e=2*Math.PI/t,i=[],n=0;n<t;n++)i.push(e*n);return i.map(function(t){return-1*t+Math.PI/2})}function w(t,e,i,n){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){var e=[];return e=n||t.data,{text:r.format?r.format(t,e[i]):t.name+": "+t.data,color:t.color}}),o=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[i]&&null!==c[i]&&o.push(c[i])}for(var u=0;u<o.length;u++){var h=o[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=o.length,{textList:a,offset:s}}function T(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){return{text:r.format?r.format(t,n[i]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});a=a.filter(function(t){if(!0!==t.disableLegend)return t});for(var o=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[i]&&null!==c[i]&&o.push(c[i])}for(var u=0;u<o.length;u++){var h=o[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=o.length,{textList:a,offset:s}}function P(t,e,i,n,r,a){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var o=a.color.upFill,s=a.color.downFill,l=[o,o,s,o],c=[],u={text:r[n],color:null};c.push(u),e.map(function(e){0==n&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[n-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[n-1][1]&&(l[2]=o),e.data[3]<t[n-1][1]&&(l[3]=s));var i={text:"开盘："+e.data[0],color:l[0]},r={text:"收盘："+e.data[1],color:l[1]},a={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(i,r,a,u)});for(var h=[],f={x:0,y:0},d=0;d<i.length;d++){var p=i[d];"undefined"!==typeof p[n]&&null!==p[n]&&h.push(p[n])}return f.x=Math.round(h[0][0].x),{textList:c,offset:f}}function k(t){for(var e=[],i=0;i<t.length;i++)1==t[i].show&&e.push(t[i]);return e}function D(t,e,i,n){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=-1,o=0,s=[],l=0;l<e[0].length;l++)s.push(e[0][l].x);return"line"!=i.type&&"area"!=i.type||"justify"!=i.xAxis.boundaryGap||(o=i.chartData.eachSpacing/2),i.categories||(o=0),C(t,i,n)&&s.forEach(function(e,i){t.x+r+o>e&&(a=i)}),a}function O(t,e,i){var n=-1;if(M(t,e.area)){for(var r=e.points,a=-1,o=0,s=r.length;o<s;o++)for(var l=r[o],c=0;c<l.length;c++){a+=1;var u=l[c]["area"];if(t.x>u[0]&&t.x<u[2]&&t.y>u[1]&&t.y<u[3]){n=a;break}}return n}return n}function M(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function C(t,e,i){return t.x<=e.width-e.area[1]+10&&t.x>=e.area[3]-10&&t.y>=e.area[0]&&t.y<=e.height-e.area[2]}function L(t,e,i){var n=2*Math.PI/i,r=-1;if(j(t,e.center,e.radius)){var a=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},o=Math.atan2(e.center.y-t.y,t.x-e.center.x);o*=-1,o<0&&(o+=2*Math.PI);var s=e.angleList.map(function(t){return t=a(-1*t),t});s.forEach(function(t,e){var i=a(t-n/2),s=a(t+n/2);s<i&&(s+=2*Math.PI),(o>=i&&o<=s||o+2*Math.PI>=i&&o+2*Math.PI<=s)&&(r=e)})}return r}function $(t,e){for(var i=-1,n=0,r=e.series.length;n<r;n++){var a=e.series[n];if(t.x>a.funnelArea[0]&&t.x<a.funnelArea[2]&&t.y>a.funnelArea[1]&&t.y<a.funnelArea[3]){i=n;break}}return i}function F(t,e){for(var i=-1,n=0,r=e.length;n<r;n++){var a=e[n];if(t.x>a.area[0]&&t.x<a.area[2]&&t.y>a.area[1]&&t.y<a.area[3]){i=n;break}}return i}function R(t,e){for(var i=-1,n=e.chartData.mapData,r=e.series,a=Nt(t.y,t.x,n.bounds,n.scale,n.xoffset,n.yoffset),o=[a.x,a.y],s=0,l=r.length;s<l;s++){var c=r[s].geometry.coordinates;if(Wt(o,c)){i=s;break}}return i}function I(t,e){var i=-1;if(j(t,e.center,e.radius)){var n=Math.atan2(e.center.y-t.y,t.x-e.center.x);n=-n;for(var r=0,a=e.series.length;r<a;r++){var o=e.series[r];if(u(n,o._start_,o._start_+2*o._proportion_*Math.PI)){i=r;break}}}return i}function j(t,e,i){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(i,2)}function E(t){var e=[],i=[];return t.forEach(function(t,n){null!==t?i.push(t):(i.length&&e.push(i),i=[])}),i.length&&e.push(i),e}function N(t,e,i,n){var r={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return n.legendData=r,r;var a=e.legend.padding,o=e.legend.margin,s=e.legend.fontSize,l=15*e.pixelRatio,c=5*e.pixelRatio,u=Math.max(e.legend.lineHeight*e.pixelRatio,s);if("top"==e.legend.position||"bottom"==e.legend.position){for(var h=[],f=0,d=[],p=[],g=0;g<t.length;g++){var v=t[g],x=l+c+y(v.name||"undefined",s)+e.legend.itemGap;f+x>e.width-e.padding[1]-e.padding[3]?(h.push(p),d.push(f-e.legend.itemGap),f=x,p=[v]):(f+=x,p.push(v))}if(p.length){h.push(p),d.push(f-e.legend.itemGap),r.widthArr=d;var m=Math.max.apply(null,d);switch(e.legend.float){case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+2*a;break;case"right":r.area.start.x=e.width-e.padding[1]-m-2*a,r.area.end.x=e.width-e.padding[1];break;default:r.area.start.x=(e.width-m)/2-a,r.area.end.x=(e.width+m)/2+a}r.area.width=m+2*a,r.area.wholeWidth=m+2*a,r.area.height=h.length*u+2*a,r.area.wholeHeight=h.length*u+2*a+2*o,r.points=h}}else{var _=t.length,b=e.height-e.padding[0]-e.padding[2]-2*o-2*a,S=Math.min(Math.floor(b/u),_);switch(r.area.height=S*u+2*a,r.area.wholeHeight=S*u+2*a,e.legend.float){case"top":r.area.start.y=e.padding[0]+o,r.area.end.y=e.padding[0]+o+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-o-r.area.height,r.area.end.y=e.height-e.padding[2]-o;break;default:r.area.start.y=(e.height-r.area.height)/2,r.area.end.y=(e.height+r.area.height)/2}for(var A=_%S===0?_/S:Math.floor(_/S+1),w=[],T=0;T<A;T++){var P=t.slice(T*S,T*S+S);w.push(P)}if(r.points=w,w.length){for(var k=0;k<w.length;k++){for(var D=w[k],O=0,M=0;M<D.length;M++){var C=l+c+y(D[M].name||"undefined",s)+e.legend.itemGap;C>O&&(O=C)}r.widthArr.push(O),r.heightArr.push(D.length*u+2*a)}for(var L=0,$=0;$<r.widthArr.length;$++)L+=r.widthArr[$];r.area.width=L-e.legend.itemGap+2*a,r.area.wholeWidth=r.area.width+a}}switch(e.legend.position){case"top":r.area.start.y=e.padding[0]+o,r.area.end.y=e.padding[0]+o+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-r.area.height-o,r.area.end.y=e.height-e.padding[2]-o;break;case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+r.area.width;break;case"right":r.area.start.x=e.width-e.padding[1]-r.area.width,r.area.end.x=e.width-e.padding[1];break}return n.legendData=r,r}function z(t,e,i,n){var r={angle:0,xAxisHeight:i.xAxisHeight},a=t.map(function(t){return y(t,e.xAxis.fontSize||i.fontSize)}),o=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&o+2*i.xAxisTextPadding>n&&(r.angle=45*Math.PI/180,r.xAxisHeight=2*i.xAxisTextPadding+o*Math.sin(r.angle)),r}function W(t,e,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,r=x(t),a=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){a.push(t)}):a.push(t[0]):a.push(t.value):a.push(t)});var o=0,s=0;if(a.length>0&&(o=Math.min.apply(this,a),s=Math.max.apply(this,a)),n>-1?("number"===typeof e.xAxis.data[n].min&&(o=Math.min(e.xAxis.data[n].min,o)),"number"===typeof e.xAxis.data[n].max&&(s=Math.max(e.xAxis.data[n].max,s))):("number"===typeof e.xAxis.min&&(o=Math.min(e.xAxis.min,o)),"number"===typeof e.xAxis.max&&(s=Math.max(e.xAxis.max,s))),o===s){var l=s||10;s+=l}for(var c=v(o,s),u=c.minRange,h=c.maxRange,f=[],d=(h-u)/e.xAxis.splitNumber,p=0;p<=e.xAxis.splitNumber;p++)f.push(u+d*p);return f}function B(t,e,i){var n={angle:0,xAxisHeight:i.xAxisHeight};n.ranges=W(t,e,i),n.rangesFormat=n.ranges.map(function(t){return t=e.xAxis.format?e.xAxis.format(t):a.toFixed(t,2),t});var r=n.ranges.map(function(t){return t=a.toFixed(t,2),t=e.xAxis.format?e.xAxis.format(Number(t)):t,t});n=Object.assign(n,tt(r,e,i));var o=n.eachSpacing,s=r.map(function(t){return y(t)}),l=Math.max.apply(this,s);return l+2*i.xAxisTextPadding>o&&(n.angle=45*Math.PI/180,n.xAxisHeight=2*i.xAxisTextPadding+l*Math.sin(n.angle)),!0===e.xAxis.disabled&&(n.xAxisHeight=0),n}function H(t,e,i,n,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=r.extra.radar||{};o.max=o.max||0;for(var s=Math.max(o.max,Math.max.apply(null,x(n))),l=[],c=function(r){var o=n[r],c={};c.color=o.color,c.legendShape=o.legendShape,c.pointShape=o.pointShape,c.data=[],o.data.forEach(function(n,r){var o={};o.angle=t[r],o.proportion=n/s,o.position=d(i*o.proportion*a*Math.cos(o.angle),i*o.proportion*a*Math.sin(o.angle),e),c.data.push(o)}),l.push(c)},u=0;u<n.length;u++)c(u);return l}function V(t,e){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=0,r=0,a=0;a<t.length;a++){var o=t[a];o.data=null===o.data?0:o.data,n+=o.data}for(var s=0;s<t.length;s++){var l=t[s];l.data=null===l.data?0:l.data,l._proportion_=0===n?1/t.length*i:l.data/n*i,l._radius_=e}for(var c=0;c<t.length;c++){var u=t[c];u._start_=r,r+=2*u._proportion_*Math.PI}return t}function q(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var n=0;n<t.length;n++)t[n].radius=t[n].data/t[0].data*e*i,t[n]._proportion_=t[n].data/t[0].data;return t.reverse()}function U(t,e,i,n){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=0,o=0,s=[],l=0;l<t.length;l++){var c=t[l];c.data=null===c.data?0:c.data,a+=c.data,s.push(c.data)}for(var u=Math.min.apply(null,s),h=Math.max.apply(null,s),f=n-i,d=0;d<t.length;d++){var p=t[d];p.data=null===p.data?0:p.data,0===a||"area"==e?(p._proportion_=p.data/a*r,p._rose_proportion_=1/t.length*r):(p._proportion_=p.data/a*r,p._rose_proportion_=p.data/a*r),p._radius_=i+f*((p.data-u)/(h-u))}for(var g=0;g<t.length;g++){var v=t[g];v._start_=o,o+=2*v._rose_proportion_*Math.PI}return t}function J(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==i&&(i=.999999);for(var n=0;n<t.length;n++){var r=t[n];r.data=null===r.data?0:r.data;var a=void 0;a="circle"==e.type?2:e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle,r._proportion_=a*r.data*i+e.startAngle,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return t}function X(t,e,i){for(var n=e-i+1,r=e,a=0;a<t.length;a++)t[a].value=null===t[a].value?0:t[a].value,t[a]._startAngle_=r,t[a]._endAngle_=n*t[a].value+e,t[a]._endAngle_>=2&&(t[a]._endAngle_=t[a]._endAngle_%2),r=t[a]._endAngle_;return t}function G(t,e,i){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<t.length;r++){var a=t[r];if(a.data=null===a.data?0:a.data,"auto"==i.pointer.color){for(var o=0;o<e.length;o++)if(a.data<=e[o].value){a.color=e[o].color;break}}else a.color=i.pointer.color;var s=i.startAngle-i.endAngle+1;a._endAngle_=s*a.data+i.startAngle,a._oldAngle_=i.oldAngle,i.oldAngle<i.endAngle&&(a._oldAngle_+=2),a.data>=i.oldData?a._proportion_=(a._endAngle_-a._oldAngle_)*n+i.oldAngle:a._proportion_=a._oldAngle_-(a._oldAngle_-a._endAngle_)*n,a._proportion_>=2&&(a._proportion_=a._proportion_%2)}return t}function K(t){t=V(t);for(var e=0,i=0;i<t.length;i++){var n=t[i],r=n.format?n.format(+n._proportion_.toFixed(2)):a.toFixed(100*n._proportion_)+"%";e=Math.max(e,y(r))}return e}function Y(t,e,i,n,r,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/i),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t.width<=0&&(t.width=1),t.x+=(n+.5-i/2)*t.width,t)})}function Q(t,e,i,n,r,a,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),n>0&&(t.width-=2*o),t)})}function Z(t,e,i,n,r,a,o){return t.map(function(t,i){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t)})}function tt(t,e,i){var n=e.width-e.area[1]-e.area[3],r=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&r>1&&"justify"==e.xAxis.boundaryGap&&(r-=1);var a=n/r,o=[],s=e.area[3],l=e.width-e.area[1];return t.forEach(function(t,e){o.push(s+e*a)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?o.push(s+t.length*a):o.push(l)),{xAxisPoints:o,startX:s,endX:l,eachSpacing:a}}function et(t,e,i,n,r,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)l.push(null);else{var u=[];t.forEach(function(t,l){var h={};h.x=n[o]+Math.round(r/2);var f=t.value||t,d=c*(f-e)/(i-e);d*=s,h.y=a.height-Math.round(d)-a.area[2],u.push(h)}),l.push(u)}}),l}function it(t,e,i,n,r,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l="center";"line"!=a.type&&"area"!=a.type||(l=a.xAxis.boundaryGap);var c=[],u=a.height-a.area[0]-a.area[2],h=a.width-a.area[1]-a.area[3];return t.forEach(function(t,o){if(null===t)c.push(null);else{var f={};f.color=t.color,f.x=n[o];var d,p,g,v=t;if("object"===typeof t&&null!==t)if(t.constructor==Array)d=[].concat(a.chartData.xAxisData.ranges),p=d.shift(),g=d.pop(),v=t[1],f.x=a.area[3]+h*(t[0]-p)/(g-p);else v=t.value;"center"==l&&(f.x+=Math.round(r/2));var y=u*(v-e)/(i-e);y*=s,f.y=a.height-Math.round(y)-a.area[2],c.push(f)}}),c}function nt(t,e,i,n,r,a,o,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],h=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)u.push(null);else{var f={};if(f.color=t.color,f.x=n[o]+Math.round(r/2),s>0){for(var d=0,p=0;p<=s;p++)d+=l[p].data[o];var g=d-t,v=h*(d-e)/(i-e),y=h*(g-e)/(i-e)}else d=t,v=h*(d-e)/(i-e),y=0;var x=y;v*=c,x*=c,f.y=a.height-Math.round(v)-a.area[2],f.y0=a.height-Math.round(x)-a.area[2],u.push(f)}}),u}function rt(t,e,i,n){var r,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;r="stack"==n?m(t,e.categories.length):x(t);var o=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){o.push(t)}):o.push(t[1]):o.push(t.value):o.push(t)});var s=0,l=0;if(o.length>0&&(s=Math.min.apply(this,o),l=Math.max.apply(this,o)),a>-1?("number"===typeof e.yAxis.data[a].min&&(s=Math.min(e.yAxis.data[a].min,s)),"number"===typeof e.yAxis.data[a].max&&(l=Math.max(e.yAxis.data[a].max,l))):("number"===typeof e.yAxis.min&&(s=Math.min(e.yAxis.min,s)),"number"===typeof e.yAxis.max&&(l=Math.max(e.yAxis.max,l))),s===l){var c=l||10;l+=c}for(var u=v(s,l),h=u.minRange,f=u.maxRange,d=[],p=(f-h)/e.yAxis.splitNumber,g=0;g<=e.yAxis.splitNumber;g++)d.push(h+p*g);return d.reverse()}function at(t,e,i){var n=r({},{type:""},e.extra.column),o=e.yAxis.data.length,s=new Array(o);if(o>0){for(var l=0;l<o;l++){s[l]=[];for(var c=0;c<t.length;c++)t[c].index==l&&s[l].push(t[c])}for(var u=new Array(o),h=new Array(o),f=new Array(o),d=function(t){var r=e.yAxis.data[t];1==e.yAxis.disabled&&(r.disabled=!0),u[t]=rt(s[t],e,i,n.type,t);var o=r.fontSize||i.fontSize;f[t]={position:r.position?r.position:"left",width:0},h[t]=u[t].map(function(e){return e=a.toFixed(e,6),e=r.format?r.format(Number(e)):e,f[t].width=Math.max(f[t].width,y(e,o)+5),e});var l=r.calibration?4*e.pixelRatio:0;f[t].width+=l+3*e.pixelRatio,!0===r.disabled&&(f[t].width=0)},p=0;p<o;p++)d(p)}else{u=new Array(1),h=new Array(1),f=new Array(1);u[0]=rt(t,e,i,n.type),f[0]={position:"left",width:0};var g=e.yAxis.fontSize||i.fontSize;h[0]=u[0].map(function(t){return t=a.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(Number(t)):t,f[0].width=Math.max(f[0].width,y(t,g)+5),t}),f[0].width+=3*e.pixelRatio,!0===e.yAxis.disabled?(f[0]={position:"left",width:0},e.yAxis.data[0]={disabled:!0}):e.yAxis.data[0]={disabled:!1,position:"left",max:e.yAxis.max,min:e.yAxis.min,format:e.yAxis.format}}return{rangesFormat:h,ranges:u,yAxisWidth:f}}function ot(t,e,i,n,r){for(var a=[].concat(i.chartData.yAxisData.ranges),o=i.height-i.area[0]-i.area[2],s=i.area[0],l=[],c=0;c<a.length;c++){var u=a[c].shift(),h=a[c].pop(),f=u-(u-h)*(t-s)/o;f=i.yAxis.data[c].format?i.yAxis.data[c].format(Number(f)):f.toFixed(0),l.push(String(f))}return l}function st(t,e){for(var i,n,r=e.height-e.area[0]-e.area[2],a=0;a<t.length;a++){t[a].yAxisIndex=t[a].yAxisIndex?t[a].yAxisIndex:0;var o=[].concat(e.chartData.yAxisData.ranges[t[a].yAxisIndex]);i=o.pop(),n=o.shift();var s=r*(t[a].value-i)/(n-i);t[a].y=e.height-Math.round(s)-e.area[2]}return t}function lt(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function ct(t,e,i,n,r){n.beginPath(),"hollow"==r.dataPointShapeType?(n.setStrokeStyle(e),n.setFillStyle(r.background),n.setLineWidth(2*r.pixelRatio)):(n.setStrokeStyle("#ffffff"),n.setFillStyle(e),n.setLineWidth(1*r.pixelRatio)),"diamond"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y),n.lineTo(t.x,t.y+4.5),n.lineTo(t.x+4.5,t.y),n.lineTo(t.x,t.y-4.5))}):"circle"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x+2.5*r.pixelRatio,t.y),n.arc(t.x,t.y,3*r.pixelRatio,0,2*Math.PI,!1))}):"rect"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x-3.5,t.y-3.5),n.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===i&&t.forEach(function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y+4.5),n.lineTo(t.x+4.5,t.y+4.5),n.lineTo(t.x,t.y-4.5))}),n.closePath(),n.fill(),n.stroke()}function ut(t,e,i,n){var r=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",s=t.subtitle.name||"",l=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,u=o?r:0,h=s?a:0,f=5;if(s){var d=y(s,a),p=n.x-d/2+(t.subtitle.offsetX||0),g=n.y+a/2+(t.subtitle.offsetY||0);o&&(g+=(u+f)/2),i.beginPath(),i.setFontSize(a),i.setFillStyle(c),i.fillText(s,p,g),i.closePath(),i.stroke()}if(o){var v=y(o,r),x=n.x-v/2+(t.title.offsetX||0),m=n.y+r/2+(t.title.offsetY||0);s&&(m-=(h+f)/2),i.beginPath(),i.setFontSize(r),i.setFillStyle(l),i.fillText(o,x,m),i.closePath(),i.stroke()}}function ht(t,e,i,n){var r=e.data;t.forEach(function(t,a){if(null!==t){n.beginPath(),n.setFontSize(e.textSize||i.fontSize),n.setFillStyle(e.textColor||"#666666");var o=r[a];"object"===typeof r[a]&&null!==r[a]&&(o=r[a].constructor==Array?r[a][1]:r[a].value);var s=e.format?e.format(o):o;n.fillText(String(s),t.x-y(s,e.textSize||i.fontSize)/2,t.y-4),n.closePath(),n.stroke()}})}function ft(t,e,i,n,r,a){e-=t.width/2+r.gaugeLabelTextMargin;for(var o=t.startAngle-t.endAngle+1,s=o/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,u=t.startAngle,h=t.startNumber,f=0;f<t.splitLine.splitNumber+1;f++){var d={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)},p=t.labelFormat?t.labelFormat(h):h;d.x+=i.x-y(p)/2,d.y+=i.y;var g=d.x,v=d.y;a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(t.labelColor||"#666666"),a.fillText(p,g,v+r.fontSize/2),a.closePath(),a.stroke(),u+=s,u>=2&&(u%=2),h+=c}}function dt(t,e,i,n,r,o){var s=n.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=d(c.x,c.y,i),h=u.x,f=u.y;a.approximatelyEqual(c.x,0)?h-=y(n.categories[l]||"")/2:c.x<0&&(h-=y(n.categories[l]||"")),o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(s.labelColor||"#666666"),o.fillText(n.categories[l]||"",h,f+r.fontSize/2),o.closePath(),o.stroke()})}function pt(t,e,i,n,r,o){for(var s=i.pieChartLinePadding,l=[],c=null,u=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):a.toFixed(100*t._proportion_.toFixed(4))+"%";t._rose_proportion_&&(t._proportion_=t._rose_proportion_);var i=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),n=t.color,r=t._radius_;return{arc:i,text:e,color:n,radius:r,textColor:t.textColor,textSize:t.textSize}}),h=0;h<u.length;h++){var f=u[h],g=Math.cos(f.arc)*(f.radius+s),v=Math.sin(f.arc)*(f.radius+s),x=Math.cos(f.arc)*f.radius,m=Math.sin(f.arc)*f.radius,_=g>=0?g+i.pieChartTextPadding:g-i.pieChartTextPadding,b=v,S=y(f.text,f.textSize||i.fontSize),A=b;c&&a.isSameXCoordinateArea(c.start,{x:_})&&(A=_>0?Math.min(b,c.start.y):g<0?Math.max(b,c.start.y):b>0?Math.max(b,c.start.y):Math.min(b,c.start.y)),_<0&&(_-=S);var w={lineStart:{x:x,y:m},lineEnd:{x:g,y:v},start:{x:_,y:A},width:S,height:i.fontSize,text:f.text,color:f.color,textColor:f.textColor,textSize:f.textSize};c=p(w,c),l.push(c)}for(var T=0;T<l.length;T++){var P=l[T],k=d(P.lineStart.x,P.lineStart.y,o),D=d(P.lineEnd.x,P.lineEnd.y,o),O=d(P.start.x,P.start.y,o);n.setLineWidth(1*e.pixelRatio),n.setFontSize(i.fontSize),n.beginPath(),n.setStrokeStyle(P.color),n.setFillStyle(P.color),n.moveTo(k.x,k.y);var M=P.start.x<0?O.x+P.width:O.x,C=P.start.x<0?O.x-5:O.x+5;n.quadraticCurveTo(D.x,D.y,M,O.y),n.moveTo(k.x,k.y),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(O.x+P.width,O.y),n.arc(M,O.y,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(P.textSize||i.fontSize),n.setFillStyle(P.textColor||"#666666"),n.fillText(P.text,C,O.y+3),n.closePath(),n.stroke(),n.closePath()}}function gt(t,e,i,n){var r=e.extra.tooltip||{};r.gridType=void 0==r.gridType?"solid":r.gridType,r.dashLength=void 0==r.dashLength?4:r.dashLength;var a=e.area[0],s=e.height-e.area[2];if("dash"==r.gridType&&n.setLineDash([r.dashLength,r.dashLength]),n.setStrokeStyle(r.gridColor||"#cccccc"),n.setLineWidth(1*e.pixelRatio),n.beginPath(),n.moveTo(t,a),n.lineTo(t,s),n.stroke(),n.setLineDash([]),r.xAxisLabel){var l=e.categories[e.tooltip.index];n.setFontSize(i.fontSize);var c=y(l,i.fontSize),u=t-.5*c,h=s;n.beginPath(),n.setFillStyle(o(r.labelBgColor||i.toolTipBackground,r.labelBgOpacity||i.toolTipOpacity)),n.setStrokeStyle(r.labelBgColor||i.toolTipBackground),n.setLineWidth(1*e.pixelRatio),n.rect(u-i.toolTipPadding,h,c+2*i.toolTipPadding,i.fontSize+2*i.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(r.labelFontColor||i.fontColor),n.fillText(String(l),u,h+i.toolTipPadding+i.fontSize),n.closePath(),n.stroke()}}function vt(t,e,i){for(var n=r({},{type:"solid",dashLength:4,data:[]},t.extra.markLine),a=t.area[3],s=t.width-t.area[1],l=st(n.data,t),c=0;c<l.length;c++){var u=r({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},l[c]);if("dash"==n.type&&i.setLineDash([n.dashLength,n.dashLength]),i.setStrokeStyle(u.lineColor),i.setLineWidth(1*t.pixelRatio),i.beginPath(),i.moveTo(a,u.y),i.lineTo(s,u.y),i.stroke(),i.setLineDash([]),u.showLabel){var h=t.yAxis.format?t.yAxis.format(Number(u.value)):u.value;i.setFontSize(e.fontSize);var f=y(h,e.fontSize),d=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,p=Math.max(t.area[3],f+2*e.toolTipPadding),g=p-d,v=d+(g-f)/2,x=u.y;i.setFillStyle(o(u.labelBgColor,u.labelBgOpacity)),i.setStrokeStyle(u.labelBgColor),i.setLineWidth(1*t.pixelRatio),i.beginPath(),i.rect(d,x-.5*e.fontSize-e.toolTipPadding,g,e.fontSize+2*e.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(e.fontSize),i.setFillStyle(u.labelFontColor),i.fillText(String(h),v,x+.5*e.fontSize),i.stroke()}}}function yt(t,e,i,n,a){var s=r({},{gridType:"solid",dashLength:4},t.extra.tooltip),l=t.area[3],c=t.width-t.area[1];if("dash"==s.gridType&&i.setLineDash([s.dashLength,s.dashLength]),i.setStrokeStyle(s.gridColor||"#cccccc"),i.setLineWidth(1*t.pixelRatio),i.beginPath(),i.moveTo(l,t.tooltip.offset.y),i.lineTo(c,t.tooltip.offset.y),i.stroke(),i.setLineDash([]),s.yAxisLabel)for(var u=ot(t.tooltip.offset.y,t.series,t,e,n),h=t.chartData.yAxisData.yAxisWidth,f=t.area[3],d=t.width-t.area[1],p=0;p<u.length;p++){i.setFontSize(e.fontSize);var g=y(u[p],e.fontSize),v=void 0,x=void 0,m=void 0;"left"==h[p].position?(v=f-h[p].width,x=Math.max(v,v+g+2*e.toolTipPadding)):(v=d,x=Math.max(v+h[p].width,v+g+2*e.toolTipPadding)),m=x-v;var _=v+(m-g)/2,b=t.tooltip.offset.y;i.beginPath(),i.setFillStyle(o(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),i.setStrokeStyle(s.labelBgColor||e.toolTipBackground),i.setLineWidth(1*t.pixelRatio),i.rect(v,b-.5*e.fontSize-e.toolTipPadding,m,e.fontSize+2*e.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(e.fontSize),i.setFillStyle(s.labelFontColor||e.fontColor),i.fillText(u[p],_,b+.5*e.fontSize),i.closePath(),i.stroke(),"left"==h[p].position?f-=h[p].width+t.yAxis.padding:d+=h[p].width+t.yAxis.padding}}function xt(t,e,i,n,a){var s=r({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),l=e.area[0],c=e.height-e.area[2];n.beginPath(),n.setFillStyle(o(s.activeBgColor,s.activeBgOpacity)),n.rect(t-a/2,l,a,c-l),n.closePath(),n.fill()}function mt(t,e,i,n,a,s,l){var c=r({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},i.extra.tooltip),u=4*i.pixelRatio,h=5*i.pixelRatio,f=8*i.pixelRatio,d=!1;"line"!=i.type&&"area"!=i.type&&"candle"!=i.type&&"mix"!=i.type||gt(i.tooltip.offset.x,i,n,a),e=r({x:0,y:0},e),e.y-=8*i.pixelRatio;var p=t.map(function(t){return y(t.text,n.fontSize)}),g=u+h+4*n.toolTipPadding+Math.max.apply(null,p),v=2*n.toolTipPadding+t.length*n.toolTipLineHeight;0!=c.showBox&&(e.x-Math.abs(i._scrollDistance_)+f+g>i.width&&(d=!0),v+e.y>i.height&&(e.y=i.height-v),a.beginPath(),a.setFillStyle(o(c.bgColor||n.toolTipBackground,c.bgOpacity||n.toolTipOpacity)),d?(a.moveTo(e.x,e.y+10*i.pixelRatio),a.lineTo(e.x-f,e.y+10*i.pixelRatio-5*i.pixelRatio),a.lineTo(e.x-f,e.y),a.lineTo(e.x-f-Math.round(g),e.y),a.lineTo(e.x-f-Math.round(g),e.y+v),a.lineTo(e.x-f,e.y+v),a.lineTo(e.x-f,e.y+10*i.pixelRatio+5*i.pixelRatio),a.lineTo(e.x,e.y+10*i.pixelRatio)):(a.moveTo(e.x,e.y+10*i.pixelRatio),a.lineTo(e.x+f,e.y+10*i.pixelRatio-5*i.pixelRatio),a.lineTo(e.x+f,e.y),a.lineTo(e.x+f+Math.round(g),e.y),a.lineTo(e.x+f+Math.round(g),e.y+v),a.lineTo(e.x+f,e.y+v),a.lineTo(e.x+f,e.y+10*i.pixelRatio+5*i.pixelRatio),a.lineTo(e.x,e.y+10*i.pixelRatio)),a.closePath(),a.fill(),t.forEach(function(t,i){if(null!==t.color){a.beginPath(),a.setFillStyle(t.color);var r=e.x+f+2*n.toolTipPadding,o=e.y+(n.toolTipLineHeight-n.fontSize)/2+n.toolTipLineHeight*i+n.toolTipPadding+1;d&&(r=e.x-g-f+2*n.toolTipPadding),a.fillRect(r,o,u,n.fontSize),a.closePath()}}),t.forEach(function(t,i){var r=e.x+f+2*n.toolTipPadding+u+h;d&&(r=e.x-g-f+2*n.toolTipPadding+ +u+h);var o=e.y+(n.toolTipLineHeight-n.fontSize)/2+n.toolTipLineHeight*i+n.toolTipPadding;a.beginPath(),a.setFontSize(n.fontSize),a.setFillStyle(c.fontColor),a.fillText(t.text,r,o+n.fontSize),a.closePath(),a.stroke()}))}function _t(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.chartData.xAxisData,s=o.xAxisPoints,l=o.eachSpacing,c=r({},{type:"group",width:l/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),u=[];n.save();var h=-2,f=s.length+2;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(n.translate(e._scrollDistance_,0),h=Math.floor(-e._scrollDistance_/l)-2,f=h+e.xAxis.itemCount+4),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&xt(e.tooltip.offset.x,e,i,n,l),t.forEach(function(r,o){var d,p,g;d=[].concat(e.chartData.yAxisData.ranges[r.index]),p=d.pop(),g=d.shift();var v=r.data;switch(c.type){case"group":var y=it(v,p,g,s,l,e,i,a),x=nt(v,p,g,s,l,e,i,o,t,a);u.push(x),y=Y(y,l,t.length,o,i,e);for(var m=0;m<y.length;m++){var _=y[m];if(null!==_&&m>h&&m<f){n.beginPath(),n.setStrokeStyle(_.color||r.color),n.setLineWidth(1),n.setFillStyle(_.color||r.color);var b=_.x-_.width/2,S=e.height-_.y-e.area[2];n.moveTo(b-1,_.y),n.lineTo(b+_.width-2,_.y),n.lineTo(b+_.width-2,e.height-e.area[2]),n.lineTo(b,e.height-e.area[2]),n.lineTo(b,_.y),n.closePath(),n.stroke(),n.fill()}}break;case"stack":y=nt(v,p,g,s,l,e,i,o,t,a);u.push(y),y=Z(y,l,t.length,o,i,e,t);for(var A=0;A<y.length;A++){var w=y[A];if(null!==w&&A>h&&A<f){n.beginPath(),n.setFillStyle(w.color||r.color);b=w.x-w.width/2+1,S=e.height-w.y-e.area[2];var T=e.height-w.y0-e.area[2];o>0&&(S-=T),n.moveTo(b,w.y),n.fillRect(b,w.y,w.width-2,S),n.closePath(),n.fill()}}break;case"meter":y=it(v,p,g,s,l,e,i,a);if(u.push(y),y=Q(y,l,t.length,o,i,e,c.meter.border),0==o)for(var P=0;P<y.length;P++){var k=y[P];if(null!==k&&P>h&&P<f){n.beginPath(),n.setFillStyle(c.meter.fillColor);b=k.x-k.width/2,S=e.height-k.y-e.area[2];n.moveTo(b,k.y),n.fillRect(b,k.y,k.width,S),n.closePath(),n.fill(),c.meter.border>0&&(n.beginPath(),n.setStrokeStyle(r.color),n.setLineWidth(c.meter.border*e.pixelRatio),n.moveTo(b+.5*c.meter.border,k.y+S),n.lineTo(b+.5*c.meter.border,k.y+.5*c.meter.border),n.lineTo(b+k.width-.5*c.meter.border,k.y+.5*c.meter.border),n.lineTo(b+k.width-.5*c.meter.border,k.y+S),n.stroke())}}else for(var D=0;D<y.length;D++){var O=y[D];if(null!==O&&D>h&&D<f){n.beginPath(),n.setFillStyle(O.color||r.color);b=O.x-O.width/2,S=e.height-O.y-e.area[2];n.moveTo(b,O.y),n.fillRect(b,O.y,O.width,S),n.closePath(),n.fill()}}break}}),!1!==e.dataLabel&&1===a&&t.forEach(function(r,o){var u,h,f;u=[].concat(e.chartData.yAxisData.ranges[r.index]),h=u.pop(),f=u.shift();var d=r.data;switch(c.type){case"group":var p=it(d,h,f,s,l,e,i,a);p=Y(p,l,t.length,o,i,e),ht(p,r,i,n);break;case"stack":p=nt(d,h,f,s,l,e,i,o,t,a);ht(p,r,i,n);break;case"meter":p=it(d,h,f,s,l,e,i,a);ht(p,r,i,n);break}}),n.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:l}}function bt(t,e,i,n,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=r({},{color:{},average:{}},i.extra.candle);s.color=r({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=r({},{show:!1,name:[],day:[],color:n.colors},s.average),i.extra.candle=s;var l=i.chartData.xAxisData,c=l.xAxisPoints,u=l.eachSpacing,h=[];a.save();var d=-2,p=c.length+2,g=0,v=i.width+u;return i._scrollDistance_&&0!==i._scrollDistance_&&!0===i.enableScroll&&(a.translate(i._scrollDistance_,0),d=Math.floor(-i._scrollDistance_/u)-2,p=d+i.xAxis.itemCount+4,g=-i._scrollDistance_-u+i.area[3],v=g+(i.xAxis.itemCount+4)*u),s.average.show&&e.forEach(function(t,e){var r,s,l;r=[].concat(i.chartData.yAxisData.ranges[t.index]),s=r.pop(),l=r.shift();for(var h=t.data,d=it(h,s,l,c,u,i,n,o),p=E(d),y=0;y<p.length;y++){var x=p[y];if(a.beginPath(),a.setStrokeStyle(t.color),a.setLineWidth(1),1===x.length)a.moveTo(x[0].x,x[0].y),a.arc(x[0].x,x[0].y,1,0,2*Math.PI);else{a.moveTo(x[0].x,x[0].y);for(var m=0,_=0;_<x.length;_++){var b=x[_];if(0==m&&b.x>g&&(a.moveTo(b.x,b.y),m=1),_>0&&b.x>g&&b.x<v){var S=f(x,_-1);a.bezierCurveTo(S.ctrA.x,S.ctrA.y,S.ctrB.x,S.ctrB.y,b.x,b.y)}}a.moveTo(x[0].x,x[0].y)}a.closePath(),a.stroke()}}),t.forEach(function(t,e){var r,l,f;r=[].concat(i.chartData.yAxisData.ranges[t.index]),l=r.pop(),f=r.shift();var g=t.data,v=et(g,l,f,c,u,i,n,o);h.push(v);for(var y=E(v),x=0;x<y[0].length;x++)if(x>d&&x<p){var m=y[0][x];a.beginPath(),g[x][1]-g[x][0]>0?(a.setStrokeStyle(s.color.upLine),a.setFillStyle(s.color.upFill),a.setLineWidth(1*i.pixelRatio),a.moveTo(m[3].x,m[3].y),a.lineTo(m[1].x,m[1].y),a.lineTo(m[1].x-u/4,m[1].y),a.lineTo(m[0].x-u/4,m[0].y),a.lineTo(m[0].x,m[0].y),a.lineTo(m[2].x,m[2].y),a.lineTo(m[0].x,m[0].y),a.lineTo(m[0].x+u/4,m[0].y),a.lineTo(m[1].x+u/4,m[1].y),a.lineTo(m[1].x,m[1].y),a.moveTo(m[3].x,m[3].y)):(a.setStrokeStyle(s.color.downLine),a.setFillStyle(s.color.downFill),a.setLineWidth(1*i.pixelRatio),a.moveTo(m[3].x,m[3].y),a.lineTo(m[0].x,m[0].y),a.lineTo(m[0].x-u/4,m[0].y),a.lineTo(m[1].x-u/4,m[1].y),a.lineTo(m[1].x,m[1].y),a.lineTo(m[2].x,m[2].y),a.lineTo(m[1].x,m[1].y),a.lineTo(m[1].x+u/4,m[1].y),a.lineTo(m[0].x+u/4,m[0].y),a.lineTo(m[0].x,m[0].y),a.moveTo(m[3].x,m[3].y)),a.closePath(),a.fill(),a.stroke()}}),a.restore(),{xAxisPoints:c,calPoints:h,eachSpacing:u}}function St(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},e.extra.area),l=e.chartData.xAxisData,c=l.xAxisPoints,u=l.eachSpacing,h=e.height-e.area[2],d=[];n.save();var p=0,g=e.width+u;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(n.translate(e._scrollDistance_,0),p=-e._scrollDistance_-u+e.area[3],g=p+(e.xAxis.itemCount+4)*u),t.forEach(function(t,r){var l,v,y;l=[].concat(e.chartData.yAxisData.ranges[t.index]),v=l.pop(),y=l.shift();var x=t.data,m=it(x,v,y,c,u,e,i,a);d.push(m);for(var _=E(m),b=0;b<_.length;b++){var S=_[b];if(n.beginPath(),n.setStrokeStyle(o(t.color,s.opacity)),s.gradient){var A=n.createLinearGradient(0,e.area[0],0,e.height-e.area[2]);A.addColorStop("0",o(t.color,s.opacity)),A.addColorStop("1.0",o("#FFFFFF",.1)),n.setFillStyle(A)}else n.setFillStyle(o(t.color,s.opacity));if(n.setLineWidth(s.width*e.pixelRatio),S.length>1){var w=S[0],T=S[S.length-1];n.moveTo(w.x,w.y);var P=0;if("curve"===s.type)for(var k=0;k<S.length;k++){var D=S[k];if(0==P&&D.x>p&&(n.moveTo(D.x,D.y),P=1),k>0&&D.x>p&&D.x<g){var O=f(S,k-1);n.bezierCurveTo(O.ctrA.x,O.ctrA.y,O.ctrB.x,O.ctrB.y,D.x,D.y)}}else for(var M=0;M<S.length;M++){var C=S[M];0==P&&C.x>p&&(n.moveTo(C.x,C.y),P=1),M>0&&C.x>p&&C.x<g&&n.lineTo(C.x,C.y)}n.lineTo(T.x,h),n.lineTo(w.x,h),n.lineTo(w.x,w.y)}else{var L=S[0];n.moveTo(L.x-u/2,L.y),n.lineTo(L.x+u/2,L.y),n.lineTo(L.x+u/2,h),n.lineTo(L.x-u/2,h),n.moveTo(L.x-u/2,L.y)}if(n.closePath(),n.fill(),s.addLine){if("dash"==t.lineType){var $=t.dashLength?t.dashLength:8;$*=e.pixelRatio,n.setLineDash([$,$])}if(n.beginPath(),n.setStrokeStyle(t.color),n.setLineWidth(s.width*e.pixelRatio),1===S.length)n.moveTo(S[0].x,S[0].y),n.arc(S[0].x,S[0].y,1,0,2*Math.PI);else{n.moveTo(S[0].x,S[0].y);var F=0;if("curve"===s.type)for(var R=0;R<S.length;R++){var I=S[R];if(0==F&&I.x>p&&(n.moveTo(I.x,I.y),F=1),R>0&&I.x>p&&I.x<g){var j=f(S,R-1);n.bezierCurveTo(j.ctrA.x,j.ctrA.y,j.ctrB.x,j.ctrB.y,I.x,I.y)}}else for(var N=0;N<S.length;N++){var z=S[N];0==F&&z.x>p&&(n.moveTo(z.x,z.y),F=1),N>0&&z.x>p&&z.x<g&&n.lineTo(z.x,z.y)}n.moveTo(S[0].x,S[0].y)}n.stroke(),n.setLineDash([])}}!1!==e.dataPointShape&&ct(m,t.color,t.pointShape,n,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,r){var o,s,l;o=[].concat(e.chartData.yAxisData.ranges[t.index]),s=o.pop(),l=o.shift();var h=t.data,f=it(h,s,l,c,u,e,i,a);ht(f,t,i,n)}),n.restore(),{xAxisPoints:c,calPoints:d,eachSpacing:u}}function At(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=r({},{type:"straight",width:2},e.extra.line);o.width*=e.pixelRatio;var s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=[];n.save();var h=0,d=e.width+c;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(n.translate(e._scrollDistance_,0),h=-e._scrollDistance_-c+e.area[3],d=h+(e.xAxis.itemCount+4)*c),t.forEach(function(t,r){var s,p,g;s=[].concat(e.chartData.yAxisData.ranges[t.index]),p=s.pop(),g=s.shift();var v=t.data,y=it(v,p,g,l,c,e,i,a);u.push(y);var x=E(y);if("dash"==t.lineType){var m=t.dashLength?t.dashLength:8;m*=e.pixelRatio,n.setLineDash([m,m])}n.beginPath(),n.setStrokeStyle(t.color),n.setLineWidth(o.width),x.forEach(function(t,e){if(1===t.length)n.moveTo(t[0].x,t[0].y),n.arc(t[0].x,t[0].y,1,0,2*Math.PI);else{n.moveTo(t[0].x,t[0].y);var i=0;if("curve"===o.type)for(var r=0;r<t.length;r++){var a=t[r];if(0==i&&a.x>h&&(n.moveTo(a.x,a.y),i=1),r>0&&a.x>h&&a.x<d){var s=f(t,r-1);n.bezierCurveTo(s.ctrA.x,s.ctrA.y,s.ctrB.x,s.ctrB.y,a.x,a.y)}}else for(var l=0;l<t.length;l++){var c=t[l];0==i&&c.x>h&&(n.moveTo(c.x,c.y),i=1),l>0&&c.x>h&&c.x<d&&n.lineTo(c.x,c.y)}n.moveTo(t[0].x,t[0].y)}}),n.stroke(),n.setLineDash([]),!1!==e.dataPointShape&&ct(y,t.color,t.pointShape,n,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,r){var o,s,u;o=[].concat(e.chartData.yAxisData.ranges[t.index]),s=o.pop(),u=o.shift();var h=t.data,f=it(h,s,u,l,c,e,i,a);ht(f,t,i,n)}),n.restore(),{xAxisPoints:l,calPoints:u,eachSpacing:c}}function wt(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.chartData.xAxisData,s=a.xAxisPoints,l=a.eachSpacing,c=e.height-e.area[2],u=[],h=0,d=0;t.forEach(function(t,e){"column"==t.type&&(d+=1)}),n.save();var p=-2,g=s.length+2,v=0,y=e.width+l;if(e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(n.translate(e._scrollDistance_,0),p=Math.floor(-e._scrollDistance_/l)-2,g=p+e.xAxis.itemCount+4,v=-e._scrollDistance_-l+e.area[3],y=v+(e.xAxis.itemCount+4)*l),t.forEach(function(t,a){var x,m,_;x=[].concat(e.chartData.yAxisData.ranges[t.index]),m=x.pop(),_=x.shift();var b=t.data,S=it(b,m,_,s,l,e,i,r);if(u.push(S),"column"==t.type){S=Y(S,l,d,h,i,e);for(var A=0;A<S.length;A++){var w=S[A];if(null!==w&&A>p&&A<g){n.beginPath(),n.setStrokeStyle(w.color||t.color),n.setLineWidth(1),n.setFillStyle(w.color||t.color);var T=w.x-w.width/2;e.height,w.y,e.area[2];n.moveTo(T,w.y),n.moveTo(T-1,w.y),n.lineTo(T+w.width-2,w.y),n.lineTo(T+w.width-2,e.height-e.area[2]),n.lineTo(T,e.height-e.area[2]),n.lineTo(T,w.y),n.closePath(),n.stroke(),n.fill(),n.closePath(),n.fill()}}h+=1}if("area"==t.type)for(var P=E(S),k=0;k<P.length;k++){var D=P[k];if(n.beginPath(),n.setStrokeStyle(t.color),n.setFillStyle(o(t.color,.2)),n.setLineWidth(2*e.pixelRatio),D.length>1){var O=D[0],M=D[D.length-1];n.moveTo(O.x,O.y);var C=0;if("curve"===t.style)for(var L=0;L<D.length;L++){var $=D[L];if(0==C&&$.x>v&&(n.moveTo($.x,$.y),C=1),L>0&&$.x>v&&$.x<y){var F=f(D,L-1);n.bezierCurveTo(F.ctrA.x,F.ctrA.y,F.ctrB.x,F.ctrB.y,$.x,$.y)}}else for(var R=0;R<D.length;R++){var I=D[R];0==C&&I.x>v&&(n.moveTo(I.x,I.y),C=1),R>0&&I.x>v&&I.x<y&&n.lineTo(I.x,I.y)}n.lineTo(M.x,c),n.lineTo(O.x,c),n.lineTo(O.x,O.y)}else{var j=D[0];n.moveTo(j.x-l/2,j.y),n.lineTo(j.x+l/2,j.y),n.lineTo(j.x+l/2,c),n.lineTo(j.x-l/2,c),n.moveTo(j.x-l/2,j.y)}n.closePath(),n.fill()}if("line"==t.type){var N=E(S);N.forEach(function(i,r){if("dash"==t.lineType){var a=t.dashLength?t.dashLength:8;a*=e.pixelRatio,n.setLineDash([a,a])}if(n.beginPath(),n.setStrokeStyle(t.color),n.setLineWidth(2*e.pixelRatio),1===i.length)n.moveTo(i[0].x,i[0].y),n.arc(i[0].x,i[0].y,1,0,2*Math.PI);else{n.moveTo(i[0].x,i[0].y);var o=0;if("curve"==t.style)for(var s=0;s<i.length;s++){var l=i[s];if(0==o&&l.x>v&&(n.moveTo(l.x,l.y),o=1),s>0&&l.x>v&&l.x<y){var c=f(i,s-1);n.bezierCurveTo(c.ctrA.x,c.ctrA.y,c.ctrB.x,c.ctrB.y,l.x,l.y)}}else for(var u=0;u<i.length;u++){var h=i[u];0==o&&h.x>v&&(n.moveTo(h.x,h.y),o=1),u>0&&h.x>v&&h.x<y&&n.lineTo(h.x,h.y)}n.moveTo(i[0].x,i[0].y)}n.stroke(),n.setLineDash([])})}"point"==t.type&&(t.addPoint=!0),1==t.addPoint&&"column"!==t.type&&ct(S,t.color,t.pointShape,n,e)}),!1!==e.dataLabel&&1===r){h=0;t.forEach(function(t,a){var o,c,u;o=[].concat(e.chartData.yAxisData.ranges[t.index]),c=o.pop(),u=o.shift();var f=t.data,p=it(f,c,u,s,l,e,i,r);"column"!==t.type?ht(p,t,i,n):(p=Y(p,l,d,h,i,e),ht(p,t,i,n),h+=1)})}return n.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:l}}function Tt(t,e,i,n,r,a){var o=t.extra.tooltip||{};o.horizentalLine&&t.tooltip&&1===n&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&yt(t,e,i,r,a),i.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&i.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===n&&mt(t.tooltip.textList,t.tooltip.offset,t,e,i,r,a),i.restore()}function Pt(t,e,i,n){var r=e.chartData.xAxisData,a=r.xAxisPoints,o=r.startX,s=r.endX,l=r.eachSpacing,c="center";"line"!=e.type&&"area"!=e.type||(c=e.xAxis.boundaryGap);var u=e.height-e.area[2],f=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var d=e.height-e.area[2]+i.xAxisHeight,p=s-o,g=l*(a.length-1),v=p*p/g,x=0;e._scrollDistance_&&(x=-e._scrollDistance_*p/g),n.beginPath(),n.setLineCap("round"),n.setLineWidth(6*e.pixelRatio),n.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),n.moveTo(o,d),n.lineTo(s,d),n.stroke(),n.closePath(),n.beginPath(),n.setLineCap("round"),n.setLineWidth(6*e.pixelRatio),n.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),n.moveTo(o+x,d),n.lineTo(o+x+v,d),n.stroke(),n.closePath(),n.setLineCap("butt")}if(n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&n.translate(e._scrollDistance_,0),!0===e.xAxis.calibration&&(n.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),n.setLineCap("butt"),n.setLineWidth(1*e.pixelRatio),a.forEach(function(t,i){i>0&&(n.beginPath(),n.moveTo(t-l/2,u),n.lineTo(t-l/2,u+3*e.pixelRatio),n.closePath(),n.stroke())})),!0!==e.xAxis.disableGrid&&(n.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),n.setLineCap("butt"),n.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&n.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),e.xAxis.gridEval=e.xAxis.gridEval||1,a.forEach(function(t,i){i%e.xAxis.gridEval==0&&(n.beginPath(),n.moveTo(t,u),n.lineTo(t,f),n.stroke())}),n.setLineDash([])),!0!==e.xAxis.disabled){var m=t.length;e.xAxis.labelCount&&(m=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,m-=1);for(var _=Math.ceil(t.length/m),b=[],S=t.length,A=0;A<S;A++)A%_!==0?b.push(""):b.push(t[A]);b[S-1]=t[S-1];var w=e.xAxis.fontSize||i.fontSize;0===i._xAxisTextAngle_?b.forEach(function(t,r){var o=-y(String(t),w)/2;"center"==c&&(o+=l/2);var s=0;e.xAxis.scrollShow&&(s=6*e.pixelRatio),n.beginPath(),n.setFontSize(w),n.setFillStyle(e.xAxis.fontColor||"#666666"),n.fillText(String(t),a[r]+o,u+w+(i.xAxisHeight-s-w)/2),n.closePath(),n.stroke()}):b.forEach(function(t,r){n.save(),n.beginPath(),n.setFontSize(w),n.setFillStyle(e.xAxis.fontColor||"#666666");var o=y(String(t),w),s=-o;"center"==c&&(s+=l/2);var f=h(a[r]+l/2,u+w/2+5,e.height),d=f.transX,p=f.transY;n.rotate(-1*i._xAxisTextAngle_),n.translate(d,p),n.fillText(String(t),a[r]+s,u+w+5),n.closePath(),n.stroke(),n.restore()})}n.restore(),e.xAxis.axisLine&&(n.beginPath(),n.setStrokeStyle(e.xAxis.axisLineColor),n.setLineWidth(1*e.pixelRatio),n.moveTo(o,e.height-e.area[2]),n.lineTo(s,e.height-e.area[2]),n.stroke())}function kt(t,e,i,n){if(!0!==e.yAxis.disableGrid){for(var r=e.height-e.area[0]-e.area[2],a=r/e.yAxis.splitNumber,o=e.area[3],s=e.chartData.xAxisData.xAxisPoints,l=e.chartData.xAxisData.eachSpacing,c=l*(s.length-1),u=o+c,h=[],f=0;f<e.yAxis.splitNumber+1;f++)h.push(e.height-e.area[2]-a*f);n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&n.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&n.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),n.setStrokeStyle(e.yAxis.gridColor),n.setLineWidth(1*e.pixelRatio),h.forEach(function(t,e){n.beginPath(),n.moveTo(o,t),n.lineTo(u,t),n.stroke()}),n.setLineDash([]),n.restore()}}function Dt(t,e,i,n){if(!0!==e.yAxis.disabled){var r=e.height-e.area[0]-e.area[2],a=r/e.yAxis.splitNumber,o=e.area[3],s=e.width-e.area[1],l=e.height-e.area[2],c=l+i.xAxisHeight;e.xAxis.scrollShow&&(c-=3*e.pixelRatio),e.xAxis.rotateLabel&&(c=e.height-e.area[2]+3),n.beginPath(),n.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&n.fillRect(0,0,o,c),1==e.enableScroll&&n.fillRect(s,0,e.width,c),n.closePath(),n.stroke();for(var u=[],h=0;h<=e.yAxis.splitNumber;h++)u.push(e.area[0]+a*h);for(var f=e.area[3],d=e.width-e.area[1],p=function(t){var r=e.yAxis.data[t];if(!0!==r.disabled){var a=e.chartData.yAxisData.rangesFormat[t],o=r.fontSize||i.fontSize,s=e.chartData.yAxisData.yAxisWidth[t];if(a.forEach(function(t,i){var a=u[i]?u[i]:l;n.beginPath(),n.setFontSize(o),n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(r.axisLineColor||"#cccccc"),n.setFillStyle(r.fontColor||"#666666"),"left"==s.position?(n.fillText(String(t),f-s.width,a+o/2),1==r.calibration&&(n.moveTo(f,a),n.lineTo(f-3*e.pixelRatio,a))):(n.fillText(String(t),d+4*e.pixelRatio,a+o/2),1==r.calibration&&(n.moveTo(d,a),n.lineTo(d+3*e.pixelRatio,a))),n.closePath(),n.stroke()}),!1!==r.axisLine&&(n.beginPath(),n.setStrokeStyle(r.axisLineColor||"#cccccc"),n.setLineWidth(1*e.pixelRatio),"left"==s.position?(n.moveTo(f,e.height-e.area[2]),n.lineTo(f,e.area[0])):(n.moveTo(d,e.height-e.area[2]),n.lineTo(d,e.area[0])),n.stroke()),e.yAxis.showTitle){var c=r.titleFontSize||i.fontSize,h=r.title;n.beginPath(),n.setFontSize(c),n.setFillStyle(r.titleFontColor||"#666666"),"left"==s.position?n.fillText(h,f-y(h,c)/2,e.area[0]-10*e.pixelRatio):n.fillText(h,d-y(h,c)/2,e.area[0]-10*e.pixelRatio),n.closePath(),n.stroke()}"left"==s.position?f-=s.width+e.yAxis.padding:d+=s.width+e.yAxis.padding}},g=0;g<e.yAxis.data.length;g++)p(g)}}function Ot(t,e,i,n,r){if(!1!==e.legend.show){var a=r.legendData,o=a.points,s=a.area,l=e.legend.padding,c=e.legend.fontSize,u=15*e.pixelRatio,h=5*e.pixelRatio,f=e.legend.itemGap,d=Math.max(e.legend.lineHeight*e.pixelRatio,c);n.beginPath(),n.setLineWidth(e.legend.borderWidth),n.setStrokeStyle(e.legend.borderColor),n.setFillStyle(e.legend.backgroundColor),n.moveTo(s.start.x,s.start.y),n.rect(s.start.x,s.start.y,s.width,s.height),n.closePath(),n.fill(),n.stroke(),o.forEach(function(t,r){var o=0,p=0;o=a.widthArr[r],p=a.heightArr[r];var g=0,v=0;"top"==e.legend.position||"bottom"==e.legend.position?(g=s.start.x+(s.width-o)/2,v=s.start.y+l+r*d):(o=0==r?0:a.widthArr[r-1],g=s.start.x+l+o,v=s.start.y+l+(s.height-p)/2),n.setFontSize(i.fontSize);for(var x=0;x<t.length;x++){var m=t[x];switch(m.area=[0,0,0,0],m.area[0]=g,m.area[1]=v,m.area[3]=v+d,n.beginPath(),n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(m.show?m.color:e.legend.hiddenColor),n.setFillStyle(m.show?m.color:e.legend.hiddenColor),m.legendShape){case"line":n.moveTo(g,v+.5*d-2*e.pixelRatio),n.fillRect(g,v+.5*d-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":n.moveTo(g+7.5*e.pixelRatio,v+.5*d-5*e.pixelRatio),n.lineTo(g+2.5*e.pixelRatio,v+.5*d+5*e.pixelRatio),n.lineTo(g+12.5*e.pixelRatio,v+.5*d+5*e.pixelRatio),n.lineTo(g+7.5*e.pixelRatio,v+.5*d-5*e.pixelRatio);break;case"diamond":n.moveTo(g+7.5*e.pixelRatio,v+.5*d-5*e.pixelRatio),n.lineTo(g+2.5*e.pixelRatio,v+.5*d),n.lineTo(g+7.5*e.pixelRatio,v+.5*d+5*e.pixelRatio),n.lineTo(g+12.5*e.pixelRatio,v+.5*d),n.lineTo(g+7.5*e.pixelRatio,v+.5*d-5*e.pixelRatio);break;case"circle":n.moveTo(g+7.5*e.pixelRatio,v+.5*d),n.arc(g+7.5*e.pixelRatio,v+.5*d,5*e.pixelRatio,0,2*Math.PI);break;case"rect":n.moveTo(g,v+.5*d-5*e.pixelRatio),n.fillRect(g,v+.5*d-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:n.moveTo(g,v+.5*d-5*e.pixelRatio),n.fillRect(g,v+.5*d-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}n.closePath(),n.fill(),n.stroke(),g+=u+h;var _=.5*d+.5*c-2;n.beginPath(),n.setFontSize(c),n.setFillStyle(m.show?e.legend.fontColor:e.legend.hiddenColor),n.fillText(m.name,g,v+_),n.closePath(),n.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(g+=y(m.name,c)+f,m.area[2]=g):(m.area[2]=g+y(m.name,c)+f,g-=u+h,v+=d)}})}}function Mt(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==i.pieChartLinePadding&&(i.pieChartLinePadding=s.activeRadius);var c=Math.min((e.width-e.area[1]-e.area[3])/2-i.pieChartLinePadding-i.pieChartTextPadding-i._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-i.pieChartLinePadding-i.pieChartTextPadding);t=V(t,c,a);var u=s.activeRadius;if(t=t.map(function(t){return t._start_+=s.offsetAngle*Math.PI/180,t}),t.forEach(function(t,i){e.tooltip&&e.tooltip.index==i&&(n.beginPath(),n.setFillStyle(o(t.color,e.extra.pie.activeOpacity||.5)),n.moveTo(l.x,l.y),n.arc(l.x,l.y,t._radius_+u,t._start_,t._start_+2*t._proportion_*Math.PI),n.closePath(),n.fill()),n.beginPath(),n.setLineWidth(s.borderWidth*e.pixelRatio),n.lineJoin="round",n.setStrokeStyle(s.borderColor),n.setFillStyle(t.color),n.moveTo(l.x,l.y),n.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),n.closePath(),n.fill(),1==s.border&&n.stroke()}),"ring"===e.type){var h=.6*c;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(h=Math.max(0,c-e.extra.pie.ringWidth)),n.beginPath(),n.setFillStyle(e.background||"#ffffff"),n.moveTo(l.x,l.y),n.arc(l.x,l.y,h,0,2*Math.PI),n.closePath(),n.fill()}if(!1!==e.dataLabel&&1===a){for(var f=!1,d=0,p=t.length;d<p;d++)if(t[d].data>0){f=!0;break}f&&pt(t,e,i,n,c,l)}return 1===a&&"ring"===e.type&&ut(e,i,n,l),{center:l,radius:c,series:t}}function Ct(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==i.pieChartLinePadding&&(i.pieChartLinePadding=s.activeRadius);var l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},c=Math.min((e.width-e.area[1]-e.area[3])/2-i.pieChartLinePadding-i.pieChartTextPadding-i._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-i.pieChartLinePadding-i.pieChartTextPadding),u=s.minRadius||.5*c;t=U(t,s.type,u,c,a);var h=s.activeRadius;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,i){e.tooltip&&e.tooltip.index==i&&(n.beginPath(),n.setFillStyle(o(t.color,s.activeOpacity||.5)),n.moveTo(l.x,l.y),n.arc(l.x,l.y,h+t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),n.closePath(),n.fill()),n.beginPath(),n.setLineWidth(s.borderWidth*e.pixelRatio),n.lineJoin="round",n.setStrokeStyle(s.borderColor),n.setFillStyle(t.color),n.moveTo(l.x,l.y),n.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),n.closePath(),n.fill(),1==s.border&&n.stroke()}),!1!==e.dataLabel&&1===a){for(var f=!1,d=0,p=t.length;d<p;d++)if(t[d].data>0){f=!0;break}f&&pt(t,e,i,n,c,l)}return{center:l,radius:c,series:t}}function Lt(t,e,i,n){var a,o,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,l=r({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio,gap:2*e.pixelRatio},e.extra.arcbar);t=J(t,l,s),a=l.center?l.center:{x:e.width/2,y:e.height/2},l.radius?o=l.radius:(o=Math.min(a.x,a.y),o-=5*e.pixelRatio,o-=l.width/2);for(var c=0;c<t.length;c++){var u=t[c];n.setLineWidth(l.width),n.setStrokeStyle(l.backgroundColor||"#E9E9E9"),n.setLineCap("round"),n.beginPath(),"default"==l.type?n.arc(a.x,a.y,o-(l.width+l.gap)*c,l.startAngle*Math.PI,l.endAngle*Math.PI,!1):n.arc(a.x,a.y,o-(l.width+l.gap)*c,0,2*Math.PI,!1),n.stroke(),n.setLineWidth(l.width),n.setStrokeStyle(u.color),n.setLineCap("round"),n.beginPath(),n.arc(a.x,a.y,o-(l.width+l.gap)*c,l.startAngle*Math.PI,u._proportion_*Math.PI,!1),n.stroke()}return ut(e,i,n,a),{center:a,radius:o,series:t}}function $t(t,e,i,n,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,l=r({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},i.extra.gauge);void 0==l.oldAngle&&(l.oldAngle=l.startAngle),void 0==l.oldData&&(l.oldData=0),t=X(t,l.startAngle,l.endAngle);var c={x:i.width/2,y:i.height/2},u=Math.min(c.x,c.y);u-=5*i.pixelRatio,u-=l.width/2;var h=u-l.width,f=0;if("progress"==l.type){var d=u-3*l.width;a.beginPath();var p=a.createLinearGradient(c.x,c.y-d,c.x,c.y+d);p.addColorStop("0",o(e[0].color,.3)),p.addColorStop("1.0",o("#FFFFFF",.1)),a.setFillStyle(p),a.arc(c.x,c.y,d,0,2*Math.PI,!1),a.fill(),a.setLineWidth(l.width),a.setStrokeStyle(o(e[0].color,.3)),a.setLineCap("round"),a.beginPath(),a.arc(c.x,c.y,h,l.startAngle*Math.PI,l.endAngle*Math.PI,!1),a.stroke(),f=l.startAngle-l.endAngle+1;l.splitLine.splitNumber;var g=f/l.splitLine.splitNumber/l.splitLine.childNumber,v=-u-.5*l.width-l.splitLine.fixRadius,y=-u-l.width-l.splitLine.fixRadius+l.splitLine.width;a.save(),a.translate(c.x,c.y),a.rotate((l.startAngle-1)*Math.PI);for(var x=l.splitLine.splitNumber*l.splitLine.childNumber+1,m=e[0].data*s,_=0;_<x;_++)a.beginPath(),m>_/x?a.setStrokeStyle(o(e[0].color,1)):a.setStrokeStyle(o(e[0].color,.3)),a.setLineWidth(3*i.pixelRatio),a.moveTo(v,0),a.lineTo(y,0),a.stroke(),a.rotate(g*Math.PI);a.restore(),e=J(e,l,s),a.setLineWidth(l.width),a.setStrokeStyle(e[0].color),a.setLineCap("round"),a.beginPath(),a.arc(c.x,c.y,h,l.startAngle*Math.PI,e[0]._proportion_*Math.PI,!1),a.stroke();var b=u-2.5*l.width;a.save(),a.translate(c.x,c.y),a.rotate((e[0]._proportion_-1)*Math.PI),a.beginPath(),a.setLineWidth(l.width/3);var S=a.createLinearGradient(0,.6*-b,0,.6*b);S.addColorStop("0",o("#FFFFFF",0)),S.addColorStop("0.5",o(e[0].color,1)),S.addColorStop("1.0",o("#FFFFFF",0)),a.setStrokeStyle(S),a.arc(0,0,b,.85*Math.PI,1.15*Math.PI,!1),a.stroke(),a.beginPath(),a.setLineWidth(1),a.setStrokeStyle(e[0].color),a.setFillStyle(e[0].color),a.moveTo(-b-l.width/3/2,-4),a.lineTo(-b-l.width/3/2-4,0),a.lineTo(-b-l.width/3/2,4),a.lineTo(-b-l.width/3/2,-4),a.stroke(),a.fill(),a.restore()}else{a.setLineWidth(l.width),a.setLineCap("butt");for(var A=0;A<t.length;A++){var w=t[A];a.beginPath(),a.setStrokeStyle(w.color),a.arc(c.x,c.y,u,w._startAngle_*Math.PI,w._endAngle_*Math.PI,!1),a.stroke()}a.save(),f=l.startAngle-l.endAngle+1;var T=f/l.splitLine.splitNumber,P=f/l.splitLine.splitNumber/l.splitLine.childNumber,k=-u-.5*l.width-l.splitLine.fixRadius,D=-u-.5*l.width-l.splitLine.fixRadius+l.splitLine.width,O=-u-.5*l.width-l.splitLine.fixRadius+l.splitLine.childWidth;a.translate(c.x,c.y),a.rotate((l.startAngle-1)*Math.PI);for(var M=0;M<l.splitLine.splitNumber+1;M++)a.beginPath(),a.setStrokeStyle(l.splitLine.color),a.setLineWidth(2*i.pixelRatio),a.moveTo(k,0),a.lineTo(D,0),a.stroke(),a.rotate(T*Math.PI);a.restore(),a.save(),a.translate(c.x,c.y),a.rotate((l.startAngle-1)*Math.PI);for(var C=0;C<l.splitLine.splitNumber*l.splitLine.childNumber+1;C++)a.beginPath(),a.setStrokeStyle(l.splitLine.color),a.setLineWidth(1*i.pixelRatio),a.moveTo(k,0),a.lineTo(O,0),a.stroke(),a.rotate(P*Math.PI);a.restore(),e=G(e,t,l,s);for(var L=0;L<e.length;L++){var $=e[L];a.save(),a.translate(c.x,c.y),a.rotate(($._proportion_-1)*Math.PI),a.beginPath(),a.setFillStyle($.color),a.moveTo(l.pointer.width,0),a.lineTo(0,-l.pointer.width/2),a.lineTo(-h,0),a.lineTo(0,l.pointer.width/2),a.lineTo(l.pointer.width,0),a.closePath(),a.fill(),a.beginPath(),a.setFillStyle("#FFFFFF"),a.arc(0,0,l.pointer.width/6,0,2*Math.PI,!1),a.fill(),a.restore()}!1!==i.dataLabel&&ft(l,u,c,i,n,a)}return ut(i,n,a,c),1===s&&"gauge"===i.type&&(i.extra.gauge.oldAngle=e[0]._proportion_,i.extra.gauge.oldData=e[0].data),{center:c,radius:u,innerRadius:h,categories:t,totalAngle:f}}function Ft(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},e.extra.radar),l=A(e.categories.length),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},u=Math.min(c.x-(S(e.categories)+i.radarLabelTextMargin),c.y-i.radarLabelTextMargin);u-=e.padding[1],n.beginPath(),n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(s.gridColor),l.forEach(function(t){var e=d(u*Math.cos(t),u*Math.sin(t),c);n.moveTo(c.x,c.y),n.lineTo(e.x,e.y)}),n.stroke(),n.closePath();for(var h=function(t){var i={};n.beginPath(),n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(s.gridColor),l.forEach(function(e,r){var a=d(u/s.gridCount*t*Math.cos(e),u/s.gridCount*t*Math.sin(e),c);0===r?(i=a,n.moveTo(a.x,a.y)):n.lineTo(a.x,a.y)}),n.lineTo(i.x,i.y),n.stroke(),n.closePath()},f=1;f<=s.gridCount;f++)h(f);var p=H(l,c,u,t,e,a);return p.forEach(function(t,i){if(n.beginPath(),n.setFillStyle(o(t.color,s.opacity)),t.data.forEach(function(t,e){0===e?n.moveTo(t.position.x,t.position.y):n.lineTo(t.position.x,t.position.y)}),n.closePath(),n.fill(),!1!==e.dataPointShape){var r=t.data.map(function(t){return t.position});ct(r,t.color,t.pointShape,n,e)}}),dt(l,u,c,e,i,n),{center:c,radius:u,angleList:l}}function Rt(t,e,i){i=0==i?1:i;for(var n=[],r=0;r<i;r++)n[r]=Math.random();return Math.floor(n.reduce(function(t,e){return t+e})/i*(e-t))+t}function It(t,e,i,n){for(var r=!1,a=0;a<e.length;a++)if(e[a].area){if(!(t[3]<e[a].area[1]||t[0]>e[a].area[2]||t[1]>e[a].area[3]||t[2]<e[a].area[0])){r=!0;break}if(t[0]<0||t[1]<0||t[2]>i||t[3]>n){r=!0;break}r=!1}return r}function jt(t){var e,i={};i.xMin=180,i.xMax=0,i.yMin=90,i.yMax=0;for(var n=0;n<t.length;n++)for(var r=t[n].geometry.coordinates,a=0;a<r.length;a++){e=r[a],1==e.length&&(e=e[0]);for(var o=0;o<e.length;o++){var s=e[o][0],l=e[o][1],c={x:s,y:l};i.xMin=i.xMin<c.x?i.xMin:c.x,i.xMax=i.xMax>c.x?i.xMax:c.x,i.yMin=i.yMin<c.y?i.yMin:c.y,i.yMax=i.yMax>c.y?i.yMax:c.y}}return i}function Et(t,e,i,n,r,a){return{x:(e-i.xMin)*n+r,y:(i.yMax-t)*n+a}}function Nt(t,e,i,n,r,a){return{x:(e-r)/n+i.xMin,y:i.yMax-(t-a)/n}}function zt(t,e,i){if(e[1]==i[1])return!1;if(e[1]>t[1]&&i[1]>t[1])return!1;if(e[1]<t[1]&&i[1]<t[1])return!1;if(e[1]==t[1]&&i[1]>t[1])return!1;if(i[1]==t[1]&&e[1]>t[1])return!1;if(e[0]<t[0]&&i[1]<t[1])return!1;var n=i[0]-(i[0]-e[0])*(i[1]-t[1])/(i[1]-e[1]);return!(n<t[0])}function Wt(t,e){for(var i=0,n=0;n<e.length;n++){var r=e[n][0];1==e.length&&(r=e[n][0]);for(var a=0;a<r.length-1;a++){var o=r[a],s=r[a+1];zt(t,o,s)&&(i+=1)}}return i%2==1}function Bt(t,e,i,n){var a,s,l=r({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),c=t,u=jt(c),h=e.width/Math.abs(u.xMax-u.xMin),f=e.height/Math.abs(u.yMax-u.yMin),d=h<f?h:f,p=e.width/2-Math.abs(u.xMax-u.xMin)/2*d,g=e.height/2-Math.abs(u.yMax-u.yMin)/2*d;n.beginPath(),n.clearRect(0,0,e.width,e.height),n.setFillStyle(e.background||"#FFFFFF"),n.rect(0,0,e.width,e.height),n.fill();for(var v=0;v<c.length;v++){n.beginPath(),n.setLineWidth(l.borderWidth*e.pixelRatio),n.setStrokeStyle(l.borderColor),n.setFillStyle(o(t[v].color,l.fillOpacity)),e.tooltip&&e.tooltip.index==v&&(n.setStrokeStyle(l.activeBorderColor),n.setFillStyle(o(l.activeFillColor,l.activeFillOpacity)));for(var x=c[v].geometry.coordinates,m=0;m<x.length;m++){a=x[m],1==a.length&&(a=a[0]);for(var _=0;_<a.length;_++)s=Et(a[_][1],a[_][0],u,d,p,g),0===_?(n.beginPath(),n.moveTo(s.x,s.y)):n.lineTo(s.x,s.y);n.fill(),1==l.border&&n.stroke()}if(1==e.dataLabel){var b=c[v].properties.centroid;if(b){s=Et(b[1],b[0],u,d,p,g);var S=c[v].textSize||i.fontSize,A=c[v].properties.name;n.beginPath(),n.setFontSize(S),n.setFillStyle(c[v].textColor||"#666666"),n.fillText(A,s.x-y(A,S)/2,s.y+S/2),n.closePath(),n.stroke()}}}e.chartData.mapData={bounds:u,scale:d,xoffset:p,yoffset:g},Tt(e,i,n,1),n.draw()}function Ht(t,e){var i=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var n=0;n<i.length;n++){var r=i[n].name,a=i[n].textSize,o=y(r,a),s=void 0,l=void 0,c=void 0,u=0;while(1){u++,s=Rt(-t.width/2,t.width/2,5)-o/2,l=Rt(-t.height/2,t.height/2,5)+a/2,c=[s-5+t.width/2,l-5-a+t.height/2,s+o+5+t.width/2,l+5+t.height/2];var h=It(c,i,t.width,t.height);if(!h)break;if(1e3==u){c=[-100,-100,-100,-100];break}}i[n].area=c}break;case"vertical":for(var f=function(){return Math.random()>.7},d=0;d<i.length;d++){var p=i[d].name,g=i[d].textSize,v=y(p,g),x=f(),m=void 0,_=void 0,b=void 0,S=void 0,A=0;while(1){A++;var w=void 0;if(x?(m=Rt(-t.width/2,t.width/2,5)-v/2,_=Rt(-t.height/2,t.height/2,5)+g/2,b=[_-5-v+t.width/2,-m-5+t.height/2,_+5+t.width/2,-m+g+5+t.height/2],S=[t.width-(t.width/2-t.height/2)-(-m+g+5+t.height/2)-5,t.height/2-t.width/2+(_-5-v+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-m+g+5+t.height/2)+g,t.height/2-t.width/2+(_-5-v+t.width/2)+v+5],w=It(S,i,t.height,t.width)):(m=Rt(-t.width/2,t.width/2,5)-v/2,_=Rt(-t.height/2,t.height/2,5)+g/2,b=[m-5+t.width/2,_-5-g+t.height/2,m+v+5+t.width/2,_+5+t.height/2],w=It(b,i,t.width,t.height)),!w)break;if(1e3==A){b=[-1e3,-1e3,-1e3,-1e3];break}}x?(i[d].area=S,i[d].areav=b):i[d].area=b,i[d].rotate=x}break}return i}function Vt(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;r({},{type:"normal",autoColors:!0},e.extra.word);n.beginPath(),n.setFillStyle(e.background||"#FFFFFF"),n.rect(0,0,e.width,e.height),n.fill(),n.save();var o=e.chartData.wordCloudData;n.translate(e.width/2,e.height/2);for(var s=0;s<o.length;s++){n.save(),o[s].rotate&&n.rotate(90*Math.PI/180);var l=o[s].name,c=o[s].textSize,u=y(l,c);n.beginPath(),n.setStrokeStyle(o[s].color),n.setFillStyle(o[s].color),n.setFontSize(c),o[s].rotate?o[s].areav[0]>0&&(e.tooltip&&e.tooltip.index==s?n.strokeText(l,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+c-e.height/2)*a):n.fillText(l,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+c-e.height/2)*a)):o[s].area[0]>0&&(e.tooltip&&e.tooltip.index==s?n.strokeText(l,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+c-e.height/2)*a):n.fillText(l,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+c-e.height/2)*a)),n.stroke(),n.restore()}n.restore()}function qt(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),l=(e.height-e.area[0]-e.area[2])/t.length,c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},u=s.activeWidth,h=Math.min((e.width-e.area[1]-e.area[3])/2-u,(e.height-e.area[0]-e.area[2])/2-u);t=q(t,h,a),n.save(),n.translate(c.x,c.y);for(var f=0;f<t.length;f++)0==f?(e.tooltip&&e.tooltip.index==f&&(n.beginPath(),n.setFillStyle(o(t[f].color,s.activeOpacity)),n.moveTo(-u,0),n.lineTo(-t[f].radius-u,-l),n.lineTo(t[f].radius+u,-l),n.lineTo(u,0),n.lineTo(-u,0),n.closePath(),n.fill()),t[f].funnelArea=[c.x-t[f].radius,c.y-l,c.x+t[f].radius,c.y],n.beginPath(),n.setLineWidth(s.borderWidth*e.pixelRatio),n.setStrokeStyle(s.borderColor),n.setFillStyle(o(t[f].color,s.fillOpacity)),n.moveTo(0,0),n.lineTo(-t[f].radius,-l),n.lineTo(t[f].radius,-l),n.lineTo(0,0),n.closePath(),n.fill(),1==s.border&&n.stroke()):(e.tooltip&&e.tooltip.index==f&&(n.beginPath(),n.setFillStyle(o(t[f].color,s.activeOpacity)),n.moveTo(0,0),n.lineTo(-t[f-1].radius-u,0),n.lineTo(-t[f].radius-u,-l),n.lineTo(t[f].radius+u,-l),n.lineTo(t[f-1].radius+u,0),n.lineTo(0,0),n.closePath(),n.fill()),t[f].funnelArea=[c.x-t[f].radius,c.y-l*(f+1),c.x+t[f].radius,c.y-l*f],n.beginPath(),n.setLineWidth(s.borderWidth*e.pixelRatio),n.setStrokeStyle(s.borderColor),n.setFillStyle(o(t[f].color,s.fillOpacity)),n.moveTo(0,0),n.lineTo(-t[f-1].radius,0),n.lineTo(-t[f].radius,-l),n.lineTo(t[f].radius,-l),n.lineTo(t[f-1].radius,0),n.lineTo(0,0),n.closePath(),n.fill(),1==s.border&&n.stroke()),n.translate(0,-l);return n.restore(),!1!==e.dataLabel&&1===a&&Ut(t,e,n,l,s.labelAlign,u,c),{center:c,radius:h,series:t}}function Ut(t,e,i,n,r,o,s){for(var l=0;l<t.length;l++){var c=t[l],u=void 0,h=void 0,f=void 0,d=void 0,p=c.format?c.format(+c._proportion_.toFixed(2)):a.toFixed(100*c._proportion_)+"%";"right"==r?(u=0==l?(c.funnelArea[2]+s.x)/2:(c.funnelArea[2]+t[l-1].funnelArea[2])/2,h=u+2*o,f=c.funnelArea[1]+n/2,d=c.textSize||e.fontSize,i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(c.color),i.setFillStyle(c.color),i.beginPath(),i.moveTo(u,f),i.lineTo(h,f),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(h,f),i.arc(h,f,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(d),i.setFillStyle(c.textColor||"#666666"),i.fillText(p,h+5,f+d/2-2),i.closePath(),i.stroke(),i.closePath()):(u=0==l?(c.funnelArea[0]+s.x)/2:(c.funnelArea[0]+t[l-1].funnelArea[0])/2,h=u-2*o,f=c.funnelArea[1]+n/2,d=c.textSize||e.fontSize,i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(c.color),i.setFillStyle(c.color),i.beginPath(),i.moveTo(u,f),i.lineTo(h,f),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(h,f),i.arc(h,f,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(d),i.setFillStyle(c.textColor||"#666666"),i.fillText(p,h-5-y(p),f+d/2-2),i.closePath(),i.stroke(),i.closePath())}}function Jt(t,e){e.draw()}var Xt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function Gt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17;function i(){return"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(t){t(null)}}var n=i(),r=null,a=function(i){if(null===i||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===r&&(r=i),i-r<t.duration){var o=(i-r)/t.duration,s=Xt[t.timing];o=s(o),t.onProcess&&t.onProcess(o),n(a,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};a=a.bind(this),n(a,e)}function Kt(t,e,i,n){var a=this,o=e.series,s=e.categories;o=g(o,e,i);var c=e.animation?e.duration:0;a.animationInstance&&a.animationInstance.stop();var u=null;if("candle"==t){var h=r({},e.extra.candle.average);h.show?(u=l(h.day,h.name,h.color,o[0].data),u=g(u,e,i),e.seriesMA=u):u=e.seriesMA?e.seriesMA=g(e.seriesMA,e,i):o}else u=o;e._series_=o=k(o),e.area=new Array(4);for(var f=0;f<4;f++)e.area[f]=e.padding[f];var d=N(u,e,i,e.chartData),p=d.area.wholeHeight,v=d.area.wholeWidth;switch(e.legend.position){case"top":e.area[0]+=p;break;case"bottom":e.area[2]+=p;break;case"left":e.area[3]+=v;break;case"right":e.area[1]+=v;break}var y={},x=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type){if(y=at(o,e,i),x=y.yAxisWidth,e.yAxis.showTitle){for(var m=0,_=0;_<e.yAxis.data.length;_++)m=Math.max(m,e.yAxis.data[_].titleFontSize?e.yAxis.data[_].titleFontSize:i.fontSize);e.area[0]+=(m+6)*e.pixelRatio}for(var b=0,S=0,A=0;A<x.length;A++)"left"==x[A].position?(e.area[3]+=S>0?x[A].width+e.yAxis.padding:x[A].width,S+=1):(e.area[1]+=b>0?x[A].width+e.yAxis.padding:x[A].width,b+=1)}else i.yAxisWidth=x;if(e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=tt(e.categories,e,i);var w=z(e.categories,e,i,e.chartData.xAxisData.eachSpacing),T=w.xAxisHeight,P=w.angle;i.xAxisHeight=T,i._xAxisTextAngle_=P,e.area[2]+=T,e.chartData.categoriesData=w}else if("line"===e.type||"area"===e.type||"points"===e.type){e.chartData.xAxisData=B(o,e,i),s=e.chartData.xAxisData.rangesFormat;var D=z(s,e,i,e.chartData.xAxisData.eachSpacing),O=D.xAxisHeight,M=D.angle;i.xAxisHeight=O,i._xAxisTextAngle_=M,e.area[2]+=O,e.chartData.categoriesData=D}else e.chartData.xAxisData={xAxisPoints:[]};if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var C=0,L=e.chartData.xAxisData.xAxisPoints,$=e.chartData.xAxisData.startX,F=e.chartData.xAxisData.endX,R=e.chartData.xAxisData.eachSpacing,I=R*(L.length-1),j=F-$;C=j-I,a.scrollOption={currentOffset:C,startTouchX:C,distance:0,lastMoveTime:0},e._scrollDistance_=C}switch("pie"!==t&&"ring"!==t&&"rose"!==t||(i._pieTextMaxLength_=!1===e.dataLabel?0:K(u)),t){case"word":var E=r({},{type:"normal",autoColors:!0},e.extra.word);1!=e.updateData&&void 0!=e.updateData||(e.chartData.wordCloudData=Ht(e,E.type)),this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),Vt(o,e,i,n,t),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"map":n.clearRect(0,0,e.width,e.height),Bt(o,e,i,n);break;case"funnel":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.funnelData=qt(o,e,i,n,t),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),kt(s,e,i,n),Pt(s,e,i,n);var r=At(o,e,i,n,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,i,n),!1!==e.enableMarkLine&&1===t&&vt(e,i,n),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t,c,a),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),kt(s,e,i,n),Pt(s,e,i,n);var r=wt(o,e,i,n,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,i,n),!1!==e.enableMarkLine&&1===t&&vt(e,i,n),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t,c,a),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),kt(s,e,i,n),Pt(s,e,i,n);var r=_t(o,e,i,n,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,i,n),!1!==e.enableMarkLine&&1===t&&vt(e,i,n),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t,c,a),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),kt(s,e,i,n),Pt(s,e,i,n);var r=St(o,e,i,n,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,i,n),!1!==e.enableMarkLine&&1===t&&vt(e,i,n),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t,c,a),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.pieData=Mt(o,e,i,n,t),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.pieData=Ct(o,e,i,n,t),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.radarData=Ft(o,e,i,n,t),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.arcbarData=Lt(o,e,i,n,t),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.gaugeData=$t(s,o,e,i,n,t),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),kt(s,e,i,n),Pt(s,e,i,n);var r=bt(o,u,e,i,n,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,i,n),!1!==e.enableMarkLine&&1===t&&vt(e,i,n),Ot(u||e.series,e,i,n,e.chartData),Tt(e,i,n,t,c,a),Jt(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break}}function Yt(){this.events={}}Gt.prototype.stop=function(){this.isStop=!0},Yt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Yt.prototype.trigger=function(){for(var t=arguments.length,i=Array(t),n=0;n<t;n++)i[n]=arguments[n];var r=i[0],a=i.slice(1);this.events[r]&&this.events[r].forEach(function(t){try{t.apply(null,a)}catch(i){console.error(e(i," at my_js\\u-charts.js:5091"))}})};var Qt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=r({},t.title),t.subtitle=r({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=r({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*t.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},t.yAxis),t.yAxis.dashLength*=t.pixelRatio,t.yAxis.padding*=t.pixelRatio,t.xAxis=r({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},t.xAxis),t.xAxis.dashLength*=t.pixelRatio,t.legend=r({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth=t.legend.borderWidth*t.pixelRatio,t.legend.itemGap=t.legend.itemGap*t.pixelRatio,t.legend.padding=t.legend.padding*t.pixelRatio,t.legend.margin=t.legend.margin*t.pixelRatio,t.extra=r({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation,t.rotate=!!t.rotate;var e=JSON.parse(JSON.stringify(n));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:n.yAxisSplit,e.rotate=t.rotate,t.rotate){var a=t.width,o=t.height;t.width=o,t.height=a}t.padding=t.padding?t.padding:e.padding;for(var s=0;s<4;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=n.yAxisWidth*t.pixelRatio,e.xAxisHeight=n.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=n.xAxisLineHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=n.titleFontSize*t.pixelRatio,e.subtitleFontSize=n.subtitleFontSize*t.pixelRatio,e.toolTipPadding=n.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=n.toolTipLineHeight*t.pixelRatio,e.columePadding=n.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=i.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new Yt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Kt.call(this,t.type,t,e,this.context)};Qt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=r({},this.opts,t),this.opts.updateData=!0;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var i=at(this.opts.series,this.opts,this.config),n=i.yAxisWidth;this.config.yAxisWidth=n;var a=0,o=tt(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,u=o.eachSpacing,h=u*(s.length-1),f=c-l;a=f-h,this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a;break}Kt.call(this,this.opts.type,this.opts,this.config,this.context)},Qt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var i=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var n=at(this.opts.series,this.opts,this.config),r=n.yAxisWidth;this.config.yAxisWidth=r;var a=0,o=tt(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,u=o.eachSpacing,h=u*i,f=c-l,d=f-u*(s.length-1);a=f/2-h,a>0&&(a=0),a<d&&(a=d),this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a,Kt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at my_js\\u-charts.js:5265"))},Qt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Qt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Qt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var i=_(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?I({x:i.x,y:i.y},this.opts.chartData.pieData):"radar"===this.opts.type?L({x:i.x,y:i.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?$({x:i.x,y:i.y},this.opts.chartData.funnelData):"map"===this.opts.type?R({x:i.x,y:i.y},this.opts):"word"===this.opts.type?F({x:i.x,y:i.y},this.opts.chartData.wordCloudData):D({x:i.x,y:i.y},this.opts.chartData.calPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Qt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var i=_(e,this.opts,t);return O({x:i.x,y:i.y},this.opts.chartData.legendData)}return-1},Qt.prototype.touchLegend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;if(i=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],i){_(i,this.opts,t);var n=this.getLegendDataIndex(t);n>=0&&(this.opts.series[n].show=!this.opts.series[n].show,this.opts.animation=!!e.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Kt.call(this,this.opts.type,this.opts,this.config,this.context))}},Qt.prototype.showToolTip=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n||console.log(e("touchError"," at my_js\\u-charts.js:5402"));var a=_(n,this.opts,t),o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var l=this.getCurrentDataIndex(t);if(l>-1){var c=b(this.opts.series,l);if(0!==c.length){var u=w(c,this.opts.chartData.calPoints,l,this.opts.categories,i),h=u.textList,f=u.offset;f.y=a.y,s.tooltip={textList:h,offset:f,option:i,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){var d=T(c,this.opts.chartData.calPoints,l,this.opts.categories,i);h=d.textList,f=d.offset;f.y=a.y,s.tooltip={textList:h,offset:f,option:i,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){u=P(this.opts.series[0].data,c,this.opts.chartData.calPoints,l,this.opts.categories,this.opts.extra.candle,i),h=u.textList,f=u.offset;f.y=a.y,s.tooltip={textList:h,offset:f,option:i,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],h=[{text:i.format?i.format(c):c.name+": "+c.data,color:c.color}],f={x:a.x,y:a.y};s.tooltip={textList:h,offset:f,option:i,index:l}}Kt.call(this,s.type,s,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],h=[{text:i.format?i.format(c):c.properties.name,color:c.color}],f={x:a.x,y:a.y};s.tooltip={textList:h,offset:f,option:i,index:l}}s.updateData=!1,Kt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){h=c.map(function(t){return{text:i.format?i.format(t):t.name+": "+t.data,color:t.color}}),f={x:a.x,y:a.y};s.tooltip={textList:h,offset:f,option:i,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}},Qt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=r({},this.opts,{_scrollDistance_:t,animation:!1});Kt.call(this,this.opts.type,e,this.config,this.context)},Qt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var i=_(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=i.x)},Qt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,i=Date.now(),n=i-this.scrollOption.lastMoveTime;if(!(n<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=i;var a=null;if(a=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],a&&!0===this.opts.enableScroll){var o,s=_(a,this.opts,t);o=s.x-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,u=c(this,l+o,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=o=u-l;var h=r({},this.opts,{_scrollDistance_:l+o,animation:!1});return Kt.call(this,h.type,h,this.config,this.context),l+o}}},Qt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,i=e.currentOffset,n=e.distance;this.scrollOption.currentOffset=i+n,this.scrollOption.distance=0}},"object"===typeof t.exports&&(t.exports=Qt)}).call(this,i("0de9")["default"],i("6e42")["default"])},"654c":function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a=s(i("3563")),o=i("07ca");function s(t){return t&&t.__esModule?t:{default:t}}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c=null,u={data:function(){return{selectedItem:1,temperature:-45,humidity:0,sound:0,light:0,history:[],cWidth:"",cHeight:"",pixelRatio:1,textarea:"",temperatures:[{name:"temperature",data:[]}],humidities:[{name:"humidity",data:[]}],lights:[{name:"light",data:[]}],sounds:[{name:"sound",data:[]}],categories:[]}},onLoad:function(){r=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.getInfo(),this.prepareData(),console.log(n(this.categories," at my_js\\devInfo.js:61")),console.log(n(this.temperatures," at my_js\\devInfo.js:62")),console.log(n(this.humidities," at my_js\\devInfo.js:63")),console.log(n(this.lights," at my_js\\devInfo.js:64")),console.log(n(this.sounds," at my_js\\devInfo.js:65")),this.drawLine("temperature")},onPullDownRefresh:function(){this.selectedItem=1,r=this,console.log(n("this is in refresh"," at my_js\\devInfo.js:71")),this.getInfo(),this.prepareData(),console.log(n(this.temperatures," at my_js\\devInfo.js:74")),console.log(n(this.humidities," at my_js\\devInfo.js:75")),console.log(n(this.lights," at my_js\\devInfo.js:76")),console.log(n(this.sounds," at my_js\\devInfo.js:77")),console.log(n(this.categories," at my_js\\devInfo.js:78")),this.drawLine("temperature")},methods:{changeItem:function(t){switch(this.selectedItem=t,t){case 1:this.drawLine("temperature");break;case 2:this.drawLine("humidity");break;case 3:this.drawLine("light");break;case 4:this.drawLine("sound");break}},gotoHistory:function(){console.log(n("jump to history"," at my_js\\devInfo.js:100")),t.navigateTo({url:"devHistory",success:function(t){},fail:function(){},complete:function(){}})},getInfo:function(){var e=this;t.showToast({title:"数据加载中......",mask:!1,duration:1e3}),t.request({url:this.globalVal.default_url.devInfo,method:"POST",data:{deviceId:this.globalVal.devId},success:function(t){if(200==t.statusCode){console.info(n(t," at my_js\\devInfo.js:122"));JSON.stringify(t.data);if(void 0==t.data.error_code){var i=t.data.services[0].data.infostring,r=JSON.parse(i);e.temperature=r.T,e.humidity=r.H,e.sound=r.S,e.light=r.L}}}})},checkHistory:function(t){var e=[];for(var i in t){var r=t[i];if(void 0!=r.data){var a=r.data.infostring;if(void 0!=a&&null!=a){r.data.infostring.T;var o=r.data.infostring.H;if(0!=o){var s=r.timestamp.toString();console.log(n("this is a timestamp"," at my_js\\devInfo.js:156")),console.log(n(s," at my_js\\devInfo.js:157"));var l=s.substr(0,4),c=s.substr(4,2),u=s.substr(6,2),h=(parseInt(s.substr(9,2))+8).toString(),f=s.substr(11,2),d=l+"年"+c+"月"+u+"日 "+h+":"+f;r.timestamp=d,e.push(r)}}}}return e},prepareData:function(){var e=this;console.log(n("preparing data"," at my_js\\devInfo.js:171")),t.request({url:this.globalVal.default_url.devHistory,method:"POST",data:{deviceId:this.globalVal.devId},success:function(t){if(200==t.statusCode&&void 0==t.data.error_code){console.log(n("成功获取历史信息"," at my_js\\devInfo.js:182")),console.log(n(t," at my_js\\devInfo.js:183")),console.log(n("初始历史"," at my_js\\devInfo.js:184")),console.log(n(t," at my_js\\devInfo.js:185"));var i=e.checkHistory(t.data.deviceDataHistoryDTOs);for(var r in e.history=i,e.temperatures[0].data=[],e.humidities[0].data=[],e.lights[0].data=[],e.sounds[0].data=[],e.categories=[],i){var a=i[r];e.temperatures[0].data.unshift(parseFloat(a.data.infostring.T)),e.humidities[0].data.unshift(parseFloat(a.data.infostring.H)),e.lights[0].data.unshift(parseFloat(a.data.infostring.L)),e.sounds[0].data.unshift(parseFloat(a.data.infostring.S)),e.categories.unshift(a.timestamp),console.log(n(a.timestamp," at my_js\\devInfo.js:200"))}e.categories=e.getCats(i)}}})},getCats:function(t){var e=[];for(var i in t){var n=t[i];e.unshift(n.timestamp)}return e},showLineA:function(t,e){var i;console.log(n("this is in showLine"," at my_js\\devInfo.js:218")),console.log(n(e," at my_js\\devInfo.js:219")),c=new a.default((i={$this:r,canvasId:t,type:"line",fontSize:11,padding:[0,0,0,0],legend:{show:!1,padding:5,lineHeight:11,margin:0},dataLabel:!0,dataPointShape:!0,background:"#FFFFFF",pixelRatio:r.pixelRatio},l(i,"dataLabel",!1),l(i,"categories",e.categories),l(i,"series",e.series),l(i,"animation",!0),l(i,"enableScroll",!0),l(i,"xAxis",{disabled:!0,type:"grid",gridType:"dash",itemCount:6,scrollShow:!0,scrollAlign:"left",scrollBackgroundColor:"#F7F7FF",scrollColor:"#DEE7F7"}),l(i,"yAxis",{disabled:!0}),l(i,"width",r.cWidth*r.pixelRatio),l(i,"height",r.cHeight*r.pixelRatio),l(i,"extra",{line:{type:"curve"}}),i))},touchLineA:function(t){c.scrollStart(t),c.touchLegend(t),c.showToolTip(t,{format:function(t,e){var i;return i="temperature"==t.name?e.substr(5)+" "+t.data+"℃":"humidity"==t.name?e.substr(5)+" "+t.data+"%":"light"==t.name?e.substr(5)+" "+t.data+"Lux":e.substr(5)+" "+t.data+"dB",i}})},drawLine:function(t){var e={categories:[],series:[]};e.categories=this.categories,e.series="temperature"==t?this.temperatures:"humidity"==t?this.humidities:"light"==t?this.lights:this.sounds,r.textarea=JSON.stringify(e),r.showLineA("canvasLineA",e)},changeData:function(){if((0,o.isJSON)(r.textarea)){var e=JSON.parse(r.textarea);c.updateData({series:e.series,categories:e.categories})}else t.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})},moveLineA:function(t){c.scroll(t)},touchEndLineA:function(t){c.scrollEnd(t),c.showToolTip(t,{format:function(t,e){var i;return i="temperature"==t.name?e.substr(5)+" "+t.data+"℃":"humidity"==t.name?e.substr(5)+" "+t.data+"%":"light"==t.name?e.substr(5)+" "+t.data+"Lux":e.substr(5)+" "+t.data+"dB",i}})}}};e.default=u}).call(this,i("6e42")["default"],i("0de9")["default"])},"66fd":function(t,e,i){"use strict";i.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var i=Object.freeze({});function n(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function a(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function h(t){return"[object RegExp]"===c.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var i=Object.create(null),n=t.split(","),r=0;r<n.length;r++)i[n[r]]=!0;return e?function(t){return i[t.toLowerCase()]}:function(t){return i[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function x(t,e){if(t.length){var i=t.indexOf(e);if(i>-1)return t.splice(i,1)}}var m=Object.prototype.hasOwnProperty;function _(t,e){return m.call(t,e)}function b(t){var e=Object.create(null);return function(i){var n=e[i];return n||(e[i]=t(i))}}var S=/-(\w)/g,A=b(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),w=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),T=/\B([A-Z])/g,P=b(function(t){return t.replace(T,"-$1").toLowerCase()});function k(t,e){function i(i){var n=arguments.length;return n?n>1?t.apply(e,arguments):t.call(e,i):t.call(e)}return i._length=t.length,i}function D(t,e){return t.bind(e)}var O=Function.prototype.bind?D:k;function M(t,e){e=e||0;var i=t.length-e,n=new Array(i);while(i--)n[i]=t[i+e];return n}function C(t,e){for(var i in e)t[i]=e[i];return t}function L(t){for(var e={},i=0;i<t.length;i++)t[i]&&C(e,t[i]);return e}function $(t,e,i){}var F=function(t,e,i){return!1},R=function(t){return t};function I(t,e){if(t===e)return!0;var i=l(t),n=l(e);if(!i||!n)return!i&&!n&&String(t)===String(e);try{var r=Array.isArray(t),a=Array.isArray(e);if(r&&a)return t.length===e.length&&t.every(function(t,i){return I(t,e[i])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||a)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every(function(i){return I(t[i],e[i])})}catch(c){return!1}}function j(t,e){for(var i=0;i<t.length;i++)if(I(t[i],e))return i;return-1}function E(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var N=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],W={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:F,isReservedAttr:F,isUnknownElement:F,getTagNamespace:$,parsePlatformTagName:R,mustUseProp:F,async:!0,_lifecycleHooks:z},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})}var q=new RegExp("[^"+B.source+".$_\\d]");function U(t){if(!q.test(t)){var e=t.split(".");return function(t){for(var i=0;i<e.length;i++){if(!t)return;t=t[e[i]]}return t}}}var J,X="__proto__"in{},G="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=K&&WXEnvironment.platform.toLowerCase(),Q=G&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Y),it=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(G)try{var nt={};Object.defineProperty(nt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,nt)}catch(er){}var rt=function(){return void 0===J&&(J=!G&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),J},at=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys);st="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=$,ut=0,ht=function(){this.id=ut++,this.subs=[]};function ft(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function dt(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){x(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,i=t.length;e<i;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var pt=function(t,e,i,n,r,a,o,s){this.tag=t,this.data=e,this.children=i,this.text=n,this.elm=r,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(pt.prototype,gt);var vt=function(t){void 0===t&&(t="");var e=new pt;return e.text=t,e.isComment=!0,e};function yt(t){return new pt(void 0,void 0,void 0,String(t))}function xt(t){var e=new pt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,_t=Object.create(mt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=mt[t];V(_t,t,function(){var i=[],n=arguments.length;while(n--)i[n]=arguments[n];var r,a=e.apply(this,i),o=this.__ob__;switch(t){case"push":case"unshift":r=i;break;case"splice":r=i.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),a})});var St=Object.getOwnPropertyNames(_t),At=!0;function wt(t){At=t}var Tt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,V(t,"__ob__",this),Array.isArray(t)?(X?t.push!==t.__proto__.push?kt(t,_t,St):Pt(t,_t):kt(t,_t,St),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function kt(t,e,i){for(var n=0,r=i.length;n<r;n++){var a=i[n];V(t,a,e[a])}}function Dt(t,e){var i;if(l(t)&&!(t instanceof pt))return _(t,"__ob__")&&t.__ob__ instanceof Tt?i=t.__ob__:At&&!rt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(i=new Tt(t)),e&&i&&i.vmCount++,i}function Ot(t,e,i,n,r){var a=new ht,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(i=t[e]);var c=!r&&Dt(i);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):i;return ht.SharedObject.target&&(a.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Lt(e))),e},set:function(e){var n=s?s.call(t):i;e===n||e!==e&&n!==n||s&&!l||(l?l.call(t,e):i=e,c=!r&&Dt(e),a.notify())}})}}function Mt(t,e,i){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,i),i;if(e in t&&!(e in Object.prototype))return t[e]=i,i;var n=t.__ob__;return t._isVue||n&&n.vmCount?i:n?(Ot(n.value,e,i),n.dep.notify(),i):(t[e]=i,i)}function Ct(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var i=t.__ob__;t._isVue||i&&i.vmCount||_(t,e)&&(delete t[e],i&&i.dep.notify())}}function Lt(t){for(var e=void 0,i=0,n=t.length;i<n;i++)e=t[i],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Lt(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)Ot(t,e[i])},Tt.prototype.observeArray=function(t){for(var e=0,i=t.length;e<i;e++)Dt(t[e])};var $t=W.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var i,n,r,a=lt?Reflect.ownKeys(e):Object.keys(e),o=0;o<a.length;o++)i=a[o],"__ob__"!==i&&(n=t[i],r=e[i],_(t,i)?n!==r&&u(n)&&u(r)&&Ft(n,r):Mt(t,i,r));return t}function Rt(t,e,i){return i?function(){var n="function"===typeof e?e.call(i,i):e,r="function"===typeof t?t.call(i,i):t;return n?Ft(n,r):r}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function It(t,e){var i=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return i?jt(i):i}function jt(t){for(var e=[],i=0;i<t.length;i++)-1===e.indexOf(t[i])&&e.push(t[i]);return e}function Et(t,e,i,n){var r=Object.create(t||null);return e?C(r,e):r}$t.data=function(t,e,i){return i?Rt(t,e,i):e&&"function"!==typeof e?t:Rt(t,e)},z.forEach(function(t){$t[t]=It}),N.forEach(function(t){$t[t+"s"]=Et}),$t.watch=function(t,e,i,n){if(t===it&&(t=void 0),e===it&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var a in C(r,t),e){var o=r[a],s=e[a];o&&!Array.isArray(o)&&(o=[o]),r[a]=o?o.concat(s):Array.isArray(s)?s:[s]}return r},$t.props=$t.methods=$t.inject=$t.computed=function(t,e,i,n){if(!t)return e;var r=Object.create(null);return C(r,t),e&&C(r,e),r},$t.provide=Rt;var Nt=function(t,e){return void 0===e?t:e};function zt(t,e){var i=t.props;if(i){var n,r,a,o={};if(Array.isArray(i)){n=i.length;while(n--)r=i[n],"string"===typeof r&&(a=A(r),o[a]={type:null})}else if(u(i))for(var s in i)r=i[s],a=A(s),o[a]=u(r)?r:{type:r};else 0;t.props=o}}function Wt(t,e){var i=t.inject;if(i){var n=t.inject={};if(Array.isArray(i))for(var r=0;r<i.length;r++)n[i[r]]={from:i[r]};else if(u(i))for(var a in i){var o=i[a];n[a]=u(o)?C({from:a},o):{from:o}}else 0}}function Bt(t){var e=t.directives;if(e)for(var i in e){var n=e[i];"function"===typeof n&&(e[i]={bind:n,update:n})}}function Ht(t,e,i){if("function"===typeof e&&(e=e.options),zt(e,i),Wt(e,i),Bt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,i)),e.mixins))for(var n=0,r=e.mixins.length;n<r;n++)t=Ht(t,e.mixins[n],i);var a,o={};for(a in t)s(a);for(a in e)_(t,a)||s(a);function s(n){var r=$t[n]||Nt;o[n]=r(t[n],e[n],i,n)}return o}function Vt(t,e,i,n){if("string"===typeof i){var r=t[e];if(_(r,i))return r[i];var a=A(i);if(_(r,a))return r[a];var o=w(a);if(_(r,o))return r[o];var s=r[i]||r[a]||r[o];return s}}function qt(t,e,i,n){var r=e[t],a=!_(i,t),o=i[t],s=Gt(Boolean,r.type);if(s>-1)if(a&&!_(r,"default"))o=!1;else if(""===o||o===P(t)){var l=Gt(String,r.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=Ut(n,r,t);var c=At;wt(!0),Dt(o),wt(c)}return o}function Ut(t,e,i){if(_(e,"default")){var n=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[i]&&void 0!==t._props[i]?t._props[i]:"function"===typeof n&&"Function"!==Jt(e.type)?n.call(t):n}}function Jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return Jt(t)===Jt(e)}function Gt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var i=0,n=e.length;i<n;i++)if(Xt(e[i],t))return i;return-1}function Kt(t,e,i){ft();try{if(e){var n=e;while(n=n.$parent){var r=n.$options.errorCaptured;if(r)for(var a=0;a<r.length;a++)try{var o=!1===r[a].call(n,t,e,i);if(o)return}catch(er){Qt(er,n,"errorCaptured hook")}}}Qt(t,e,i)}finally{dt()}}function Yt(t,e,i,n,r){var a;try{a=i?t.apply(e,i):t.call(e),a&&!a._isVue&&d(a)&&!a._handled&&(a.catch(function(t){return Kt(t,n,r+" (Promise/async)")}),a._handled=!0)}catch(er){Kt(er,n,r)}return a}function Qt(t,e,i){if(W.errorHandler)try{return W.errorHandler.call(null,t,e,i)}catch(er){er!==t&&Zt(er,null,"config.errorHandler")}Zt(t,e,i)}function Zt(t,e,i){if(!G&&!K||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ie=!1;function ne(){ie=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ot(Promise)){var re=Promise.resolve();te=function(){re.then(ne),et&&setTimeout($)}}else if(Z||"undefined"===typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&ot(setImmediate)?function(){setImmediate(ne)}:function(){setTimeout(ne,0)};else{var ae=1,oe=new MutationObserver(ne),se=document.createTextNode(String(ae));oe.observe(se,{characterData:!0}),te=function(){ae=(ae+1)%2,se.data=String(ae)}}function le(t,e){var i;if(ee.push(function(){if(t)try{t.call(e)}catch(er){Kt(er,e,"nextTick")}else i&&i(e)}),ie||(ie=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}var ce=new st;function ue(t){he(t,ce),ce.clear()}function he(t,e){var i,n,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof pt)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(r){i=t.length;while(i--)he(t[i],e)}else{n=Object.keys(t),i=n.length;while(i--)he(t[n[i]],e)}}}var fe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var i="~"===t.charAt(0);t=i?t.slice(1):t;var n="!"===t.charAt(0);return t=n?t.slice(1):t,{name:t,once:i,capture:n,passive:e}});function de(t,e){function i(){var t=arguments,n=i.fns;if(!Array.isArray(n))return Yt(n,null,arguments,e,"v-on handler");for(var r=n.slice(),a=0;a<r.length;a++)Yt(r[a],null,t,e,"v-on handler")}return i.fns=t,i}function pe(t,e,i,r,o,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=fe(l),n(c)||(n(u)?(n(c.fns)&&(c=t[l]=de(c,s)),a(h.once)&&(c=t[l]=o(h.name,c,h.capture)),i(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)n(t[l])&&(h=fe(l),r(h.name,e[l],h.capture))}function ge(t,e,i){var a=e.options.props;if(!n(a)){var o={},s=t.attrs,l=t.props;if(r(s)||r(l))for(var c in a){var u=P(c);ve(o,l,c,u,!0)||ve(o,s,c,u,!1)}return o}}function ve(t,e,i,n,a){if(r(e)){if(_(e,i))return t[i]=e[i],a||delete e[i],!0;if(_(e,n))return t[i]=e[n],a||delete e[n],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function xe(t){return s(t)?[yt(t)]:Array.isArray(t)?_e(t):void 0}function me(t){return r(t)&&r(t.text)&&o(t.isComment)}function _e(t,e){var i,o,l,c,u=[];for(i=0;i<t.length;i++)o=t[i],n(o)||"boolean"===typeof o||(l=u.length-1,c=u[l],Array.isArray(o)?o.length>0&&(o=_e(o,(e||"")+"_"+i),me(o[0])&&me(c)&&(u[l]=yt(c.text+o[0].text),o.shift()),u.push.apply(u,o)):s(o)?me(c)?u[l]=yt(c.text+o):""!==o&&u.push(yt(o)):me(o)&&me(c)?u[l]=yt(c.text+o.text):(a(t._isVList)&&r(o.tag)&&n(o.key)&&r(e)&&(o.key="__vlist"+e+"_"+i+"__"),u.push(o)));return u}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=Ae(t.$options.inject,t);e&&(wt(!1),Object.keys(e).forEach(function(i){Ot(t,i,e[i])}),wt(!0))}function Ae(t,e){if(t){for(var i=Object.create(null),n=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<n.length;r++){var a=n[r];if("__ob__"!==a){var o=t[a].from,s=e;while(s){if(s._provided&&_(s._provided,o)){i[a]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[a]){var l=t[a].default;i[a]="function"===typeof l?l.call(e):l}else 0}}return i}}function we(t,e){if(!t||!t.length)return{};for(var i={},n=0,r=t.length;n<r;n++){var a=t[n],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==e&&a.fnContext!==e||!o||null==o.slot)a.asyncMeta&&a.asyncMeta.data&&"page"===a.asyncMeta.data.slot?(i["page"]||(i["page"]=[])).push(a):(i.default||(i.default=[])).push(a);else{var s=o.slot,l=i[s]||(i[s]=[]);"template"===a.tag?l.push.apply(l,a.children||[]):l.push(a)}}for(var c in i)i[c].every(Te)&&delete i[c];return i}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t,e,n){var r,a=Object.keys(e).length>0,o=t?!!t.$stable:!a,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&n&&n!==i&&s===n.$key&&!a&&!n.$hasNormal)return n;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=ke(e,l,t[l]))}else r={};for(var c in e)c in r||(r[c]=De(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),V(r,"$stable",o),V(r,"$key",s),V(r,"$hasNormal",a),r}function ke(t,e,i){var n=function(){var t=arguments.length?i.apply(null,arguments):i({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:xe(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return i.proxy&&Object.defineProperty(t,e,{get:n,enumerable:!0,configurable:!0}),n}function De(t,e){return function(){return t[e]}}function Oe(t,e){var i,n,a,o,s;if(Array.isArray(t)||"string"===typeof t)for(i=new Array(t.length),n=0,a=t.length;n<a;n++)i[n]=e(t[n],n);else if("number"===typeof t)for(i=new Array(t),n=0;n<t;n++)i[n]=e(n+1,n);else if(l(t))if(lt&&t[Symbol.iterator]){i=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)i.push(e(u.value,i.length)),u=c.next()}else for(o=Object.keys(t),i=new Array(o.length),n=0,a=o.length;n<a;n++)s=o[n],i[n]=e(t[s],s,n);return r(i)||(i=[]),i._isVList=!0,i}function Me(t,e,i,n){var r,a=this.$scopedSlots[t];a?(i=i||{},n&&(i=C(C({},n),i)),r=a(i)||e):r=this.$slots[t]||e;var o=i&&i.slot;return o?this.$createElement("template",{slot:o},r):r}function Ce(t){return Vt(this.$options,"filters",t,!0)||R}function Le(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function $e(t,e,i,n,r){var a=W.keyCodes[e]||i;return r&&n&&!W.keyCodes[e]?Le(r,n):a?Le(a,t):n?P(n)!==e:void 0}function Fe(t,e,i,n,r){if(i)if(l(i)){var a;Array.isArray(i)&&(i=L(i));var o=function(o){if("class"===o||"style"===o||y(o))a=t;else{var s=t.attrs&&t.attrs.type;a=n||W.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=A(o),c=P(o);if(!(l in a)&&!(c in a)&&(a[o]=i[o],r)){var u=t.on||(t.on={});u["update:"+o]=function(t){i[o]=t}}};for(var s in i)o(s)}else;return t}function Re(t,e){var i=this._staticTrees||(this._staticTrees=[]),n=i[t];return n&&!e?n:(n=i[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),je(n,"__static__"+t,!1),n)}function Ie(t,e,i){return je(t,"__once__"+e+(i?"_"+i:""),!0),t}function je(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]&&"string"!==typeof t[n]&&Ee(t[n],e+"_"+n,i);else Ee(t,e,i)}function Ee(t,e,i){t.isStatic=!0,t.key=e,t.isOnce=i}function Ne(t,e){if(e)if(u(e)){var i=t.on=t.on?C({},t.on):{};for(var n in e){var r=i[n],a=e[n];i[n]=r?[].concat(r,a):a}}else;return t}function ze(t,e,i,n){e=e||{$stable:!i};for(var r=0;r<t.length;r++){var a=t[r];Array.isArray(a)?ze(a,e,i):a&&(a.proxy&&(a.fn.proxy=!0),e[a.key]=a.fn)}return n&&(e.$key=n),e}function We(t,e){for(var i=0;i<e.length;i+=2){var n=e[i];"string"===typeof n&&n&&(t[e[i]]=e[i+1])}return t}function Be(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Ie,t._n=g,t._s=p,t._l=Oe,t._t=Me,t._q=I,t._i=j,t._m=Re,t._f=Ce,t._k=$e,t._b=Fe,t._v=yt,t._e=vt,t._u=ze,t._g=Ne,t._d=We,t._p=Be}function Ve(t,e,n,r,o){var s,l=this,c=o.options;_(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=a(c._compiled),h=!u;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||i,this.injections=Ae(c.inject,r),this.slots=function(){return l.$slots||Pe(t.scopedSlots,l.$slots=we(n,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,i,n){var a=ni(s,t,e,i,n,h);return a&&!Array.isArray(a)&&(a.fnScopeId=c._scopeId,a.fnContext=r),a}:this._c=function(t,e,i,n){return ni(s,t,e,i,n,h)}}function qe(t,e,n,a,o){var s=t.options,l={},c=s.props;if(r(c))for(var u in c)l[u]=qt(u,c,e||i);else r(n.attrs)&&Je(l,n.attrs),r(n.props)&&Je(l,n.props);var h=new Ve(n,l,o,a,t),f=s.render.call(null,h._c,h);if(f instanceof pt)return Ue(f,n,h.parent,s,h);if(Array.isArray(f)){for(var d=xe(f)||[],p=new Array(d.length),g=0;g<d.length;g++)p[g]=Ue(d[g],n,h.parent,s,h);return p}}function Ue(t,e,i,n,r){var a=xt(t);return a.fnContext=i,a.fnOptions=n,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function Je(t,e){for(var i in e)t[A(i)]=e[i]}He(Ve.prototype);var Xe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var i=t;Xe.prepatch(i,i)}else{var n=t.componentInstance=Ye(t,Si);n.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var i=e.componentOptions,n=e.componentInstance=t.componentInstance;Pi(n,i.propsData,i.listeners,e,i.children)},insert:function(t){var e=t.context,i=t.componentInstance;i._isMounted||(i._isMounted=!0,Mi(i,"mounted")),t.data.keepAlive&&(e._isMounted?Bi(i):Di(i,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Oi(e,!0):e.$destroy())}},Ge=Object.keys(Xe);function Ke(t,e,i,o,s){if(!n(t)){var c=i.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(n(t.cid)&&(u=t,t=di(u,c),void 0===t))return fi(u,e,i,o,s);e=e||{},fn(t),r(e.model)&&ti(t.options,e);var h=ge(e,t,s);if(a(t.options.functional))return qe(t,h,e,i,o);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Qe(e);var p=t.options.name||s,g=new pt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,i,{Ctor:t,propsData:h,listeners:f,tag:s,children:o},u);return g}}}function Ye(t,e){var i={_isComponent:!0,_parentVnode:t,parent:e},n=t.data.inlineTemplate;return r(n)&&(i.render=n.render,i.staticRenderFns=n.staticRenderFns),new t.componentOptions.Ctor(i)}function Qe(t){for(var e=t.hook||(t.hook={}),i=0;i<Ge.length;i++){var n=Ge[i],r=e[n],a=Xe[n];r===a||r&&r._merged||(e[n]=r?Ze(a,r):a)}}function Ze(t,e){var i=function(i,n){t(i,n),e(i,n)};return i._merged=!0,i}function ti(t,e){var i=t.model&&t.model.prop||"value",n=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[i]=e.model.value;var a=e.on||(e.on={}),o=a[n],s=e.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(a[n]=[s].concat(o)):a[n]=s}var ei=1,ii=2;function ni(t,e,i,n,r,o){return(Array.isArray(i)||s(i))&&(r=n,n=i,i=void 0),a(o)&&(r=ii),ri(t,e,i,n,r)}function ri(t,e,i,n,a){if(r(i)&&r(i.__ob__))return vt();if(r(i)&&r(i.is)&&(e=i.is),!e)return vt();var o,s,l;(Array.isArray(n)&&"function"===typeof n[0]&&(i=i||{},i.scopedSlots={default:n[0]},n.length=0),a===ii?n=xe(n):a===ei&&(n=ye(n)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||W.getTagNamespace(e),o=W.isReservedTag(e)?new pt(W.parsePlatformTagName(e),i,n,void 0,void 0,t):i&&i.pre||!r(l=Vt(t.$options,"components",e))?new pt(e,i,n,void 0,void 0,t):Ke(l,i,t,n,e)):o=Ke(e,i,t,n);return Array.isArray(o)?o:r(o)?(r(s)&&ai(o,s),r(i)&&oi(i),o):vt()}function ai(t,e,i){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,i=!0),r(t.children))for(var o=0,s=t.children.length;o<s;o++){var l=t.children[o];r(l.tag)&&(n(l.ns)||a(i)&&"svg"!==l.tag)&&ai(l,e,i)}}function oi(t){l(t.style)&&ue(t.style),l(t.class)&&ue(t.class)}function si(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=we(e._renderChildren,r),t.$scopedSlots=i,t._c=function(e,i,n,r){return ni(t,e,i,n,r,!1)},t.$createElement=function(e,i,n,r){return ni(t,e,i,n,r,!0)};var a=n&&n.data;Ot(t,"$attrs",a&&a.attrs||i,null,!0),Ot(t,"$listeners",e._parentListeners||i,null,!0)}var li,ci=null;function ui(t){He(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,i=e.$options,n=i.render,r=i._parentVnode;r&&(e.$scopedSlots=Pe(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{ci=e,t=n.call(e._renderProxy,e.$createElement)}catch(er){Kt(er,e,"render"),t=e._vnode}finally{ci=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof pt||(t=vt()),t.parent=r,t}}function hi(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function fi(t,e,i,n,r){var a=vt();return a.asyncFactory=t,a.asyncMeta={data:e,context:i,children:n,tag:r},a}function di(t,e){if(a(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var i=ci;if(i&&r(t.owners)&&-1===t.owners.indexOf(i)&&t.owners.push(i),a(t.loading)&&r(t.loadingComp))return t.loadingComp;if(i&&!r(t.owners)){var o=t.owners=[i],s=!0,c=null,u=null;i.$on("hook:destroyed",function(){return x(o,i)});var h=function(t){for(var e=0,i=o.length;e<i;e++)o[e].$forceUpdate();t&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=E(function(i){t.resolved=hi(i,e),s?o.length=0:h(!0)}),p=E(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),g=t(f,p);return l(g)&&(d(g)?n(t.resolved)&&g.then(f,p):d(g.component)&&(g.component.then(f,p),r(g.error)&&(t.errorComp=hi(g.error,e)),r(g.loading)&&(t.loadingComp=hi(g.loading,e),0===g.delay?t.loading=!0:c=setTimeout(function(){c=null,n(t.resolved)&&n(t.error)&&(t.loading=!0,h(!1))},g.delay||200)),r(g.timeout)&&(u=setTimeout(function(){u=null,n(t.resolved)&&p(null)},g.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function pi(t){return t.isComment&&t.asyncFactory}function gi(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var i=t[e];if(r(i)&&(r(i.componentOptions)||pi(i)))return i}}function vi(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&_i(t,e)}function yi(t,e){li.$on(t,e)}function xi(t,e){li.$off(t,e)}function mi(t,e){var i=li;return function n(){var r=e.apply(null,arguments);null!==r&&i.$off(t,n)}}function _i(t,e,i){li=t,pe(e,i||{},yi,xi,mi,t),li=void 0}function bi(t){var e=/^hook:/;t.prototype.$on=function(t,i){var n=this;if(Array.isArray(t))for(var r=0,a=t.length;r<a;r++)n.$on(t[r],i);else(n._events[t]||(n._events[t]=[])).push(i),e.test(t)&&(n._hasHookEvent=!0);return n},t.prototype.$once=function(t,e){var i=this;function n(){i.$off(t,n),e.apply(i,arguments)}return n.fn=e,i.$on(t,n),i},t.prototype.$off=function(t,e){var i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(t)){for(var n=0,r=t.length;n<r;n++)i.$off(t[n],e);return i}var a,o=i._events[t];if(!o)return i;if(!e)return i._events[t]=null,i;var s=o.length;while(s--)if(a=o[s],a===e||a.fn===e){o.splice(s,1);break}return i},t.prototype.$emit=function(t){var e=this,i=e._events[t];if(i){i=i.length>1?M(i):i;for(var n=M(arguments,1),r='event handler for "'+t+'"',a=0,o=i.length;a<o;a++)Yt(i[a],e,n,e,r)}return e}}var Si=null;function Ai(t){var e=Si;return Si=t,function(){Si=e}}function wi(t){var e=t.$options,i=e.parent;if(i&&!e.abstract){while(i.$options.abstract&&i.$parent)i=i.$parent;i.$children.push(t)}t.$parent=i,t.$root=i?i.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ti(t){t.prototype._update=function(t,e){var i=this,n=i.$el,r=i._vnode,a=Ai(i);i._vnode=t,i.$el=r?i.__patch__(r,t):i.__patch__(i.$el,t,e,!1),a(),n&&(n.__vue__=null),i.$el&&(i.$el.__vue__=i),i.$vnode&&i.$parent&&i.$vnode===i.$parent._vnode&&(i.$parent.$el=i.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Mi(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||x(e.$children,t),t._watcher&&t._watcher.teardown();var i=t._watchers.length;while(i--)t._watchers[i].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Mi(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pi(t,e,n,r,a){var o=r.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==i&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key),c=!!(a||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=a,t.$attrs=r.data.attrs||i,t.$listeners=n||i,e&&t.$options.props){wt(!1);for(var u=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;u[d]=qt(d,p,e,t)}wt(!0),t.$options.propsData=e}n=n||i;var g=t.$options._parentListeners;t.$options._parentListeners=n,_i(t,n,g),c&&(t.$slots=we(a,r.context),t.$forceUpdate())}function ki(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Di(t,e){if(e){if(t._directInactive=!1,ki(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var i=0;i<t.$children.length;i++)Di(t.$children[i]);Mi(t,"activated")}}function Oi(t,e){if((!e||(t._directInactive=!0,!ki(t)))&&!t._inactive){t._inactive=!0;for(var i=0;i<t.$children.length;i++)Oi(t.$children[i]);Mi(t,"deactivated")}}function Mi(t,e){ft();var i=t.$options[e],n=e+" hook";if(i)for(var r=0,a=i.length;r<a;r++)Yt(i[r],t,null,t,n);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Ci=[],Li=[],$i={},Fi=!1,Ri=!1,Ii=0;function ji(){Ii=Ci.length=Li.length=0,$i={},Fi=Ri=!1}var Ei=Date.now;if(G&&!Z){var Ni=window.performance;Ni&&"function"===typeof Ni.now&&Ei()>document.createEvent("Event").timeStamp&&(Ei=function(){return Ni.now()})}function zi(){var t,e;for(Ei(),Ri=!0,Ci.sort(function(t,e){return t.id-e.id}),Ii=0;Ii<Ci.length;Ii++)t=Ci[Ii],t.before&&t.before(),e=t.id,$i[e]=null,t.run();var i=Li.slice(),n=Ci.slice();ji(),Hi(i),Wi(n),at&&W.devtools&&at.emit("flush")}function Wi(t){var e=t.length;while(e--){var i=t[e],n=i.vm;n._watcher===i&&n._isMounted&&!n._isDestroyed&&Mi(n,"updated")}}function Bi(t){t._inactive=!1,Li.push(t)}function Hi(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Di(t[e],!0)}function Vi(t){var e=t.id;if(null==$i[e]){if($i[e]=!0,Ri){var i=Ci.length-1;while(i>Ii&&Ci[i].id>t.id)i--;Ci.splice(i+1,0,t)}else Ci.push(t);Fi||(Fi=!0,le(zi))}}var qi=0,Ui=function(t,e,i,n,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync,this.before=n.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=i,this.id=++qi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=U(e),this.getter||(this.getter=$)),this.value=this.lazy?void 0:this.get()};Ui.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(er){if(!this.user)throw er;Kt(er,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),dt(),this.cleanupDeps()}return t},Ui.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ui.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},Ui.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Vi(this)},Ui.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(er){Kt(er,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Ui.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ui.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Ui.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Ji={enumerable:!0,configurable:!0,get:$,set:$};function Xi(t,e,i){Ji.get=function(){return this[e][i]},Ji.set=function(t){this[e][i]=t},Object.defineProperty(t,i,Ji)}function Gi(t){t._watchers=[];var e=t.$options;e.props&&Ki(t,e.props),e.methods&&an(t,e.methods),e.data?Yi(t):Dt(t._data={},!0),e.computed&&tn(t,e.computed),e.watch&&e.watch!==it&&on(t,e.watch)}function Ki(t,e){var i=t.$options.propsData||{},n=t._props={},r=t.$options._propKeys=[],a=!t.$parent;a||wt(!1);var o=function(a){r.push(a);var o=qt(a,e,i,t);Ot(n,a,o),a in t||Xi(t,"_props",a)};for(var s in e)o(s);wt(!0)}function Yi(t){var e=t.$options.data;e=t._data="function"===typeof e?Qi(e,t):e||{},u(e)||(e={});var i=Object.keys(e),n=t.$options.props,r=(t.$options.methods,i.length);while(r--){var a=i[r];0,n&&_(n,a)||H(a)||Xi(t,"_data",a)}Dt(e,!0)}function Qi(t,e){ft();try{return t.call(e,e)}catch(er){return Kt(er,e,"data()"),{}}finally{dt()}}var Zi={lazy:!0};function tn(t,e){var i=t._computedWatchers=Object.create(null),n=rt();for(var r in e){var a=e[r],o="function"===typeof a?a:a.get;0,n||(i[r]=new Ui(t,o||$,$,Zi)),r in t||en(t,r,a)}}function en(t,e,i){var n=!rt();"function"===typeof i?(Ji.get=n?nn(e):rn(i),Ji.set=$):(Ji.get=i.get?n&&!1!==i.cache?nn(e):rn(i.get):$,Ji.set=i.set||$),Object.defineProperty(t,e,Ji)}function nn(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function rn(t){return function(){return t.call(this,this)}}function an(t,e){t.$options.props;for(var i in e)t[i]="function"!==typeof e[i]?$:O(e[i],t)}function on(t,e){for(var i in e){var n=e[i];if(Array.isArray(n))for(var r=0;r<n.length;r++)sn(t,i,n[r]);else sn(t,i,n)}}function sn(t,e,i,n){return u(i)&&(n=i,i=i.handler),"string"===typeof i&&(i=t[i]),t.$watch(e,i,n)}function ln(t){var e={get:function(){return this._data}},i={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",i),t.prototype.$set=Mt,t.prototype.$delete=Ct,t.prototype.$watch=function(t,e,i){var n=this;if(u(e))return sn(n,t,e,i);i=i||{},i.user=!0;var r=new Ui(n,t,e,i);if(i.immediate)try{e.call(n,r.value)}catch(a){Kt(a,n,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var cn=0;function un(t){t.prototype._init=function(t){var e=this;e._uid=cn++,e._isVue=!0,t&&t._isComponent?hn(e,t):e.$options=Ht(fn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,wi(e),vi(e),si(e),Mi(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Gi(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Mi(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hn(t,e){var i=t.$options=Object.create(t.constructor.options),n=e._parentVnode;i.parent=e.parent,i._parentVnode=n;var r=n.componentOptions;i.propsData=r.propsData,i._parentListeners=r.listeners,i._renderChildren=r.children,i._componentTag=r.tag,e.render&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns)}function fn(t){var e=t.options;if(t.super){var i=fn(t.super),n=t.superOptions;if(i!==n){t.superOptions=i;var r=dn(t);r&&C(t.extendOptions,r),e=t.options=Ht(i,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function dn(t){var e,i=t.options,n=t.sealedOptions;for(var r in i)i[r]!==n[r]&&(e||(e={}),e[r]=i[r]);return e}function pn(t){this._init(t)}function gn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var i=M(arguments,1);return i.unshift(this),"function"===typeof t.install?t.install.apply(t,i):"function"===typeof t&&t.apply(null,i),e.push(t),this}}function vn(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function yn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var i=this,n=i.cid,r=t._Ctor||(t._Ctor={});if(r[n])return r[n];var a=t.name||i.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(i.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ht(i.options,t),o["super"]=i,o.options.props&&xn(o),o.options.computed&&mn(o),o.extend=i.extend,o.mixin=i.mixin,o.use=i.use,N.forEach(function(t){o[t]=i[t]}),a&&(o.options.components[a]=o),o.superOptions=i.options,o.extendOptions=t,o.sealedOptions=C({},o.options),r[n]=o,o}}function xn(t){var e=t.options.props;for(var i in e)Xi(t.prototype,"_props",i)}function mn(t){var e=t.options.computed;for(var i in e)en(t.prototype,i,e[i])}function _n(t){N.forEach(function(e){t[e]=function(t,i){return i?("component"===e&&u(i)&&(i.name=i.name||t,i=this.options._base.extend(i)),"directive"===e&&"function"===typeof i&&(i={bind:i,update:i}),this.options[e+"s"][t]=i,i):this.options[e+"s"][t]}})}function bn(t){return t&&(t.Ctor.options.name||t.tag)}function Sn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function An(t,e){var i=t.cache,n=t.keys,r=t._vnode;for(var a in i){var o=i[a];if(o){var s=bn(o.componentOptions);s&&!e(s)&&wn(i,a,n,r)}}}function wn(t,e,i,n){var r=t[e];!r||n&&r.tag===n.tag||r.componentInstance.$destroy(),t[e]=null,x(i,e)}un(pn),ln(pn),bi(pn),Ti(pn),ui(pn);var Tn=[String,RegExp,Array],Pn={name:"keep-alive",abstract:!0,props:{include:Tn,exclude:Tn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)wn(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){An(t,function(t){return Sn(e,t)})}),this.$watch("exclude",function(e){An(t,function(t){return!Sn(e,t)})})},render:function(){var t=this.$slots.default,e=gi(t),i=e&&e.componentOptions;if(i){var n=bn(i),r=this,a=r.include,o=r.exclude;if(a&&(!n||!Sn(a,n))||o&&n&&Sn(o,n))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?i.Ctor.cid+(i.tag?"::"+i.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,x(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&wn(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},kn={KeepAlive:Pn};function Dn(t){var e={get:function(){return W}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:C,mergeOptions:Ht,defineReactive:Ot},t.set=Mt,t.delete=Ct,t.nextTick=le,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),N.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,C(t.options.components,kn),gn(t),vn(t),yn(t),_n(t)}Dn(pn),Object.defineProperty(pn.prototype,"$isServer",{get:rt}),Object.defineProperty(pn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(pn,"FunctionalRenderContext",{value:Ve}),pn.version="2.6.10";var On="[object Array]",Mn="[object Object]";function Cn(t,e){var i={};return Ln(t,e),$n(t,e,"",i),i}function Ln(t,e){if(t!==e){var i=Rn(t),n=Rn(e);if(i==Mn&&n==Mn){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var a=t[r];void 0===a?t[r]=null:Ln(a,e[r])}}else i==On&&n==On&&t.length>=e.length&&e.forEach(function(e,i){Ln(t[i],e)})}}function $n(t,e,i,n){if(t!==e){var r=Rn(t),a=Rn(e);if(r==Mn)if(a!=Mn||Object.keys(t).length<Object.keys(e).length)Fn(n,i,t);else{var o=function(r){var a=t[r],o=e[r],s=Rn(a),l=Rn(o);if(s!=On&&s!=Mn)a!=e[r]&&Fn(n,(""==i?"":i+".")+r,a);else if(s==On)l!=On?Fn(n,(""==i?"":i+".")+r,a):a.length<o.length?Fn(n,(""==i?"":i+".")+r,a):a.forEach(function(t,e){$n(t,o[e],(""==i?"":i+".")+r+"["+e+"]",n)});else if(s==Mn)if(l!=Mn||Object.keys(a).length<Object.keys(o).length)Fn(n,(""==i?"":i+".")+r,a);else for(var c in a)$n(a[c],o[c],(""==i?"":i+".")+r+"."+c,n)};for(var s in t)o(s)}else r==On?a!=On?Fn(n,i,t):t.length<e.length?Fn(n,i,t):t.forEach(function(t,r){$n(t,e[r],i+"["+r+"]",n)}):Fn(n,i,t)}}function Fn(t,e,i){t[e]=i}function Rn(t){return Object.prototype.toString.call(t)}function In(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var i=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var n=0;n<i.length;n++)i[n]()}}function jn(t){return Ci.find(function(e){return t._watcher===e})}function En(t,e){if(!t.__next_tick_pending&&!jn(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(er){Kt(er,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function Nn(t){var e=Object.create(null),i=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return i.reduce(function(e,i){return e[i]=t[i],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var zn=function(t,e){var i=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var n=this.$scope,r=Object.create(null);try{r=Nn(this)}catch(s){console.error(s)}r.__webviewId__=n.data.__webviewId__;var a=Object.create(null);Object.keys(r).forEach(function(t){a[t]=n.data[t]});var o=Cn(r,a);Object.keys(o).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,n.setData(o,function(){i.__next_tick_pending=!1,In(i)})):In(this)}};function Wn(){}function Bn(t,e,i){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Wn),t.$options.render||(t.$options.render=Wn),"mp-toutiao"!==t.mpHost&&Mi(t,"beforeMount");var n=function(){t._update(t._render(),i)};return new Ui(t,n,$,{before:function(){t._isMounted&&!t._isDestroyed&&Mi(t,"beforeUpdate")}},!0),i=!1,t}function Hn(t,e){return r(t)||r(e)?Vn(t,qn(e)):""}function Vn(t,e){return t?e?t+" "+e:t:e||""}function qn(t){return Array.isArray(t)?Un(t):l(t)?Jn(t):"string"===typeof t?t:""}function Un(t){for(var e,i="",n=0,a=t.length;n<a;n++)r(e=qn(t[n]))&&""!==e&&(i&&(i+=" "),i+=e);return i}function Jn(t){var e="";for(var i in t)t[i]&&(e&&(e+=" "),e+=i);return e}var Xn=b(function(t){var e={},i=/;(?![^(]*\))/g,n=/:(.+)/;return t.split(i).forEach(function(t){if(t){var i=t.split(n);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e});function Gn(t){return Array.isArray(t)?L(t):"string"===typeof t?Xn(t):t}var Kn=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yn(t,e){var i=e.split("."),n=i[0];return 0===n.indexOf("__$n")&&(n=parseInt(n.replace("__$n",""))),1===i.length?t[n]:Yn(t[n],i.slice(1).join("."))}function Qn(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:M(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return En(this,t)},Kn.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var i=this;ft();var n,r=i.$options[t],a=t+" hook";if(r)for(var o=0,s=r.length;o<s;o++)n=Yt(r[o],i,e?[e]:null,i,a);return i._hasHookEvent&&i.$emit("hook:"+t),dt(),n},t.prototype.__set_model=function(t,e,i,n){Array.isArray(n)&&(-1!==n.indexOf("trim")&&(i=i.trim()),-1!==n.indexOf("number")&&(i=this._n(i))),t||(t=this),t[e]=i},t.prototype.__set_sync=function(t,e,i){t||(t=this),t[e]=i},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yn(e||this,t)},t.prototype.__get_class=function(t,e){return Hn(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var i=Gn(t),n=e?C(e,i):i;return Object.keys(n).map(function(t){return P(t)+":"+n[t]}).join(";")},t.prototype.__map=function(t,e){var i,n,r,a,o;if(Array.isArray(t)){for(i=new Array(t.length),n=0,r=t.length;n<r;n++)i[n]=e(t[n],n);return i}if(l(t)){for(a=Object.keys(t),i=Object.create(null),n=0,r=a.length;n<r;n++)o=a[n],i[o]=e(t[o],o,n);return i}return[]}}var Zn=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function tr(t){var e=t.extend;t.extend=function(t){t=t||{};var i=t.methods;return i&&Object.keys(i).forEach(function(e){-1!==Zn.indexOf(e)&&(t[e]=i[e],delete i[e])}),e.call(this,t)};var i=t.config.optionMergeStrategies,n=i.created;Zn.forEach(function(t){i[t]=n}),t.prototype.__lifecycle_hooks__=Zn}pn.prototype.__patch__=zn,pn.prototype.$mount=function(t,e){return Bn(this,t,e)},tr(pn),Qn(pn),e["default"]=pn}.call(this,i("c8ba"))},"672d":function(t,e,i){"use strict";i.r(e);var n=i("9372"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=r.a},"6e42":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=pe,e.createComponent=we,e.createPage=Ae,e.default=void 0;var n=r(i("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return l(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var i=[],n=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)if(i.push(o.value),e&&i.length===e)break}catch(l){r=!0,a=l}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw a}}return i}function l(t){if(Array.isArray(t))return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function u(t){return d(t)||f(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var p=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function v(t){return"function"===typeof t}function y(t){return"string"===typeof t}function x(t){return"[object Object]"===p.call(t)}function m(t,e){return g.call(t,e)}function _(){}function b(t){var e=Object.create(null);return function(i){var n=e[i];return n||(e[i]=t(i))}}var S=/-(\w)/g,A=b(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),w=["invoke","success","fail","complete","returnValue"],T={},P={};function k(t,e){var i=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return i?D(i):i}function D(t){for(var e=[],i=0;i<t.length;i++)-1===e.indexOf(t[i])&&e.push(t[i]);return e}function O(t,e){var i=t.indexOf(e);-1!==i&&t.splice(i,1)}function M(t,e){Object.keys(e).forEach(function(i){-1!==w.indexOf(i)&&v(e[i])&&(t[i]=k(t[i],e[i]))})}function C(t,e){t&&e&&Object.keys(e).forEach(function(i){-1!==w.indexOf(i)&&v(e[i])&&O(t[i],e[i])})}function L(t,e){"string"===typeof t&&x(e)?M(P[t]||(P[t]={}),e):x(t)&&M(T,t)}function $(t,e){"string"===typeof t?x(e)?C(P[t],e):delete P[t]:x(t)&&C(T,t)}function F(t){return function(e){return t(e)||e}}function R(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function I(t,e){for(var i=!1,n=0;n<t.length;n++){var r=t[n];if(i)i=Promise.then(F(r));else{var a=r(e);if(R(a)&&(i=Promise.resolve(a)),!1===a)return{then:function(){}}}}return i||{then:function(t){return t(e)}}}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(i){if(Array.isArray(t[i])){var n=e[i];e[i]=function(e){I(t[i],e).then(function(t){return v(n)&&n(t)||t})}}}),e}function E(t,e){var i=[];Array.isArray(T.returnValue)&&i.push.apply(i,u(T.returnValue));var n=P[t];return n&&Array.isArray(n.returnValue)&&i.push.apply(i,u(n.returnValue)),i.forEach(function(t){e=t(e)||e}),e}function N(t){var e=Object.create(null);Object.keys(T).forEach(function(t){"returnValue"!==t&&(e[t]=T[t].slice())});var i=P[t];return i&&Object.keys(i).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(i[t]))}),e}function z(t,e,i){for(var n=arguments.length,r=new Array(n>3?n-3:0),a=3;a<n;a++)r[a-3]=arguments[a];var o=N(t);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var s=I(o.invoke,i);return s.then(function(t){return e.apply(void 0,[j(o,t)].concat(r))})}return e.apply(void 0,[j(o,i)].concat(r))}return e.apply(void 0,[i].concat(r))}var W={returnValue:function(t){return R(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},B=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,V=/^on/;function q(t){return H.test(t)}function U(t){return B.test(t)}function J(t){return V.test(t)&&"onPush"!==t}function X(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function G(t){return!(q(t)||U(t)||J(t))}function K(t,e){return G(t)?function(){for(var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return v(i.success)||v(i.fail)||v(i.complete)?E(t,z.apply(void 0,[t,e,i].concat(r))):E(t,X(new Promise(function(n,a){z.apply(void 0,[t,e,Object.assign({},i,{success:n,fail:a})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(i){return e.resolve(t()).then(function(){return i})},function(i){return e.resolve(t()).then(function(){throw i})})})})))}:e}var Y=1e-4,Q=750,Z=!1,tt=0,et=0;function it(){var t=wx.getSystemInfoSync(),e=t.platform,i=t.pixelRatio,n=t.windowWidth;tt=n,et=i,Z="ios"===e}function nt(t,e){if(0===tt&&it(),t=Number(t),0===t)return 0;var i=t/Q*(e||tt);return i<0&&(i=-i),i=Math.floor(i+Y),0===i?1!==et&&Z?.5:1:t<0?-i:i}var rt={promiseInterceptor:W},at=Object.freeze({upx2px:nt,interceptors:rt,addInterceptor:L,removeInterceptor:$}),ot={},st=[],lt=[],ct=["success","fail","cancel","complete"];function ut(t,e,i){return function(n){return e(ft(t,n,i))}}function ht(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x(e)){var a=!0===r?e:{};for(var o in v(i)&&(i=i(e,a)||{}),e)if(m(i,o)){var s=i[o];v(s)&&(s=s(e[o],e,a)),s?y(s)?a[s]=e[o]:x(s)&&(a[s.name?s.name:o]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(o))}else-1!==ct.indexOf(o)?a[o]=ut(t,e[o],n):r||(a[o]=e[o]);return a}return v(e)&&(e=ut(t,e,n)),e}function ft(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return v(ot.returnValue)&&(e=ot.returnValue(t,e)),ht(t,e,i,{},n)}function dt(t,e){if(m(ot,t)){var i=ot[t];return i?function(e,n){var r=i;v(i)&&(r=i(e)),e=ht(t,e,r.args,r.returnValue);var a=[e];"undefined"!==typeof n&&a.push(n);var o=wx[r.name||t].apply(wx,a);return U(t)?ft(t,o,r.returnValue,q(t)):o}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var pt=Object.create(null),gt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function vt(t){return function(e){var i=e.fail,n=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};v(i)&&i(r),v(n)&&n(r)}}gt.forEach(function(t){pt[t]=vt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new n.default),t};var t}();function xt(t,e,i){return t[e].apply(t,i)}function mt(){return xt(yt(),"$on",Array.prototype.slice.call(arguments))}function _t(){return xt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return xt(yt(),"$once",Array.prototype.slice.call(arguments))}function St(){return xt(yt(),"$emit",Array.prototype.slice.call(arguments))}var At=Object.freeze({$on:mt,$off:_t,$once:bt,$emit:St});function wt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var i=t.__uniapp_mask,n="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;wt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),r=t.show,a=t.hide,o=t.close,s=function(){n.setStyle({mask:i})},l=function(){n.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return r.apply(t,i)},t.hide=function(){l();for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return a.apply(t,i)},t.close=function(){l(),e=[];for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return o.apply(t,n)}}}function Pt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Tt(e),e}var kt=Object.freeze({getSubNVueById:Pt,requireNativePlugin:wt}),Dt=Page,Ot=Component,Mt=/:/g,Ct=b(function(t){return A(t.replace(Mt,"-"))});function Lt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(i){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return e.apply(t,[Ct(i)].concat(r))}}}function $t(t,e){var i=e[t];e[t]=i?function(){Lt(this);for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i.apply(this,e)}:function(){Lt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return $t("onLoad",t),Dt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return $t("created",t),Ot(t)};var Ft=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Rt(t,e){var i=t.$mp[t.mpType];e.forEach(function(e){m(i,e)&&(t[e]=i[e])})}function It(t,e){if(!e)return!0;if(n.default.options&&Array.isArray(n.default.options[t]))return!0;if(e=e.default||e,v(e))return!!v(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(v(e[t]))return!0;var i=e.mixins;return Array.isArray(i)?!!i.find(function(e){return It(t,e)}):void 0}function jt(t,e,i){e.forEach(function(e){It(e,i)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Et(t,e){var i;return e=e.default||e,v(e)?(i=e,e=i.extendOptions):i=t.extend(e),[i,e]}function Nt(t,e){if(Array.isArray(e)&&e.length){var i=Object.create(null);e.forEach(function(t){i[t]=!0}),t.$scopedSlots=t.$slots=i}}function zt(t,e){t=(t||"").split(",");var i=t.length;1===i?e._$vueId=t[0]:2===i&&(e._$vueId=t[0],e._$vuePid=t[1])}function Wt(t,e){var i=t.data||{},n=t.methods||{};if("function"===typeof i)try{i=i.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",i)}else try{i=JSON.parse(JSON.stringify(i))}catch(r){}return x(i)||(i={}),Object.keys(n).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(i,t)||(i[t]=n[t])}),i}var Bt=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,i){this.$vm&&(this.$vm[t]=e)}}function Vt(t,e){var i=t["behaviors"],n=t["extends"],r=t["mixins"],a=t["props"];a||(t["props"]=a=[]);var o=[];return Array.isArray(i)&&i.forEach(function(t){o.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(a)?(a.push("name"),a.push("value")):(a["name"]={type:String,default:""},a["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),x(n)&&n.props&&o.push(e({properties:Ut(n.props,!0)})),Array.isArray(r)&&r.forEach(function(t){x(t)&&t.props&&o.push(e({properties:Ut(t.props,!0)}))}),o}function qt(t,e,i,n){return Array.isArray(e)&&1===e.length?e[0]:e}function Ut(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(i.vueId={type:String,value:""},i.vueSlots={type:null,value:[],observer:function(t,e){var i=Object.create(null);t.forEach(function(t){i[t]=!0}),this.setData({$slots:i})}}),Array.isArray(t)?t.forEach(function(t){i[t]={type:null,observer:Ht(t)}}):x(t)&&Object.keys(t).forEach(function(e){var n=t[e];if(x(n)){var r=n["default"];v(r)&&(r=r()),n.type=qt(e,n.type),i[e]={type:-1!==Bt.indexOf(n.type)?n.type:null,value:r,observer:Ht(e)}}else{var a=qt(e,n);i[e]={type:-1!==Bt.indexOf(a)?a:null,observer:Ht(e)}}}),i}function Jt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=_,t.preventDefault=_,t.target=t.target||{},m(t,"detail")||(t.detail={}),x(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Xt(t,e){var i=t;return e.forEach(function(e){var n=e[0],r=e[2];if(n||"undefined"!==typeof r){var a=e[1],o=e[3],s=n?t.__get_value(n,i):i;Number.isInteger(s)?i=r:a?Array.isArray(s)?i=s.find(function(e){return t.__get_value(a,e)===r}):x(s)?i=Object.keys(s).find(function(e){return t.__get_value(a,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):i=s[r],o&&(i=t.__get_value(o,i))}}),i}function Gt(t,e,i){var n={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?n["$"+r]=i:0===e.indexOf("$event.")?n["$"+r]=t.__get_value(e.replace("$event.",""),i):n["$"+r]=t.__get_value(e):n["$"+r]=t:n["$"+r]=Xt(t,e)}),n}function Kt(t){for(var e={},i=1;i<t.length;i++){var n=t[i];e[n[0]]=n[1]}return e}function Yt(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,o=!1;if(r&&(o=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!i.length))return o?[e]:e.detail.__args__||e.detail;var s=Gt(t,n,e),l=[];return i.forEach(function(t){"$event"===t?"__set_model"!==a||r?r&&!o?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Kt(t)):"string"===typeof t&&m(s,t)?l.push(s[t]):l.push(t)}),l}var Qt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Jt(t);var i=(t.currentTarget||t.target).dataset;if(!i)return console.warn("事件信息不存在");var n=i.eventOpts||i["event-opts"];if(!n)return console.warn("事件信息不存在");var r=t.type,a=[];return n.forEach(function(i){var n=i[0],o=i[1],s=n.charAt(0)===Zt;n=s?n.slice(1):n;var l=n.charAt(0)===Qt;n=l?n.slice(1):n,o&&te(r,n)&&o.forEach(function(i){var n=i[0];if(n){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var o=r[n];if(!v(o))throw new Error(" _vm.".concat(n," is not a function"));if(l){if(o.once)return;o.once=!0}a.push(o.apply(r,Yt(e.$vm,t,i[1],i[2],s,n)))}})}),"input"===r&&1===a.length&&"undefined"!==typeof a[0]?a[0]:void 0}var ie=["onShow","onHide","onError","onPageNotFound"];function ne(t,e){var i=e.mocks,r=e.initRefs;t.$options.store&&(n.default.prototype.$store=t.$options.store),n.default.prototype.mpHost="app-plus",n.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Rt(this,i)))}});var a={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return a.globalData=t.$options.globalData||{},jt(a,ie),a}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ae(t,e){var i=t.$children,n=i.find(function(t){return t.$scope._$vueId===e});if(n)return n;for(var r=i.length-1;r>=0;r--)if(n=ae(i[r],e),n)return n}function oe(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},i=e.selectAllComponents(".vue-ref");i.forEach(function(e){var i=e.dataset.ref;t[i]=e.$vm||e});var n=e.selectAllComponents(".vue-ref-in-for");return n.forEach(function(e){var i=e.dataset.ref;t[i]||(t[i]=[]),t[i].push(e.$vm||e)}),t}})}function ue(t){var e,i=t.detail||t.value,n=i.vuePid,r=i.vueOptions;n&&(e=ae(this.$vm,n)),e||(e=this.$vm),r.parent=e}function he(t){return ne(t,{mocks:re,initRefs:ce})}var fe=["onUniNViewMessage"];function de(t){var e=he(t);return jt(e,fe),e}function pe(t){return App(de(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.isPage,r=e.initRelation,o=Et(n.default,t),s=a(o,2),l=s[0],c=s[1],u={multipleSlots:!0,addGlobalClass:!0},h={options:u,data:Wt(c,n.default.prototype),behaviors:Vt(c,oe),properties:Ut(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:i.call(this)?"page":"component",mpInstance:this,propsData:t};zt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),Nt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){h.methods[t]=function(e){return this.$vm[t](e)}}),i?h:[h,l]}function ve(t){return ge(t,{isPage:se,initRelation:le})}function ye(t){var e=ve(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var xe=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var i=ye(t);return jt(i.methods,xe,t),i.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},i}function _e(t){return me(t,{isPage:se,initRelation:le})}xe.push.apply(xe,Ft);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Se(t){var e=_e(t);return jt(e.methods,be),e}function Ae(t){return Component(Se(t))}function we(t){return Component(ye(t))}st.forEach(function(t){ot[t]=!1}),lt.forEach(function(t){var e=ot[t]&&ot[t].name?ot[t].name:t;wx.canIUse(e)||(ot[t]=!1)});var Te={};Object.keys(at).forEach(function(t){Te[t]=at[t]}),Object.keys(At).forEach(function(t){Te[t]=At[t]}),Object.keys(kt).forEach(function(t){Te[t]=K(t,kt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(ot,t))&&(Te[t]=K(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Te,t.UniEmitter=At),wx.createApp=pe,wx.createPage=Ae,wx.createComponent=we;var Pe=Te,ke=Pe;e.default=ke}).call(this,i("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},"921b":function(t,e,i){"use strict";(function(t){var e=i("8189");function n(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}var h=e.version,f="https://tongji.dcloud.io/uni/stat",d="https://tongji.dcloud.io/uni/stat.gif",p=1800,g=300,v=10,y="__DC_STAT_UUID",x="__DC_UUID_VALUE";function m(){var e="";if("n"===A()){try{e=plus.runtime.getDCloudId()}catch(i){e=""}return e}try{e=t.getStorageSync(y)}catch(i){e=x}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(i){t.setStorageSync(y,x)}}return e}var _=function(t){var e=Object.keys(t),i=e.sort(),n={},r="";for(var a in i)n[i[a]]=t[i[a]],r+=i[a]+"="+t[i[a]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},b=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)},S=function(){return parseInt((new Date).getTime()/1e3)},A=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},w=function(){var e="";return"wx"!==A()&&"qq"!==A()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},T=function(){return"n"===A()?plus.runtime.version:""},P=function(){var t=A(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var i=A(),n="";return e||("wx"===i&&(n=t.getLaunchOptionsSync().scene),n)},D="First__Visit__Time",O="Last__Visit__Time",M=function(){var e=t.getStorageSync(D),i=0;return e?i=e:(i=S(),t.setStorageSync(D,i),t.removeStorageSync(O)),i},C=function(){var e=t.getStorageSync(O),i=0;return i=e||"",t.setStorageSync(O,S()),i},L="__page__residence__time",$=0,F=0,R=function(){return $=S(),"n"===A()&&t.setStorageSync(L,S()),$},I=function(){return F=S(),"n"===A()&&($=t.getStorageSync(L)),F-$},j="Total__Visit__Count",E=function(){var e=t.getStorageSync(j),i=1;return e&&(i=e,i++),t.setStorageSync(j,i),i},N=function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e},z=0,W=0,B=function(){var t=(new Date).getTime();return z=t,W=0,t},H=function(){var t=(new Date).getTime();return W=t,t},V=function(t){var e=0;if(0!==z&&(e=W-z),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var i=e>g;return{residenceTime:e,overtime:i}}if("page"===t){var n=e>p;return{residenceTime:e,overtime:n}}return{residenceTime:e}},q=function(){var t=getCurrentPages(),e=t[t.length-1],i=e.$vm;return"bd"===A()?i.$mp&&i.$mp.page.is:i.$scope&&i.$scope.route||i.$mp&&i.$mp.page.route},U=function(t){var e=getCurrentPages(),i=e[e.length-1],n=i.$vm,r=t._query,a=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===A()?n.$mp&&n.$mp.page.is+a:n.$scope&&n.$scope.route+a||n.$mp&&n.$mp.page.route+a},J=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},X=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},G=i("2c96").default,K=i("323d").default||i("323d"),Y=t.getSystemInfoSync(),Q=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:A(),mpn:w(),ak:K.appid,usv:h,v:T(),ch:P(),cn:"",pn:"",ct:"",t:S(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var t=V("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,H();var i=V();B();var n=U(this);this._sendHideRequest({urlref:n,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t=U(this),e=q();if(this._navigationBarTitle.config=G&&G.pages[e]&&G.pages[e].titleNView&&G.pages[e].titleNView.titleText||G&&G.pages[e]&&G.pages[e].navigationBarTitleText||"",this.__licationShow)return B(),this.__licationShow=!1,void(this._lastPageRoute=t);H(),this._lastPageRoute=t;var i=V("page");if(i.overtime){var n={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(n)}B()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var t=V("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=S(),this.statData.sc=k(t.scene),this.statData.fvts=M(),this.statData.lvts=C(),this.statData.tvc=E(),"n"===A()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,n=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,n=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,n=t.value,r=void 0===n?"":n,a=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:i,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:S(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;K.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,i){var n=this,r=S(),a=this._navigationBarTitle;e.ttn=a.page,e.ttpj=a.config,e.ttc=a.report;var o=this._reportingRequestData;if("n"===A()&&(o=t.getStorageSync("__UNI__STAT__DATA")||{}),o[e.lt]||(o[e.lt]=[]),o[e.lt].push(e),"n"===A()&&t.setStorageSync("__UNI__STAT__DATA",o),!(I()<v)||i){var s=this._reportingRequestData;"n"===A()&&(s=t.getStorageSync("__UNI__STAT__DATA")),R();var l=[],c=[],u=[],f=function(t){var e=s[t];e.forEach(function(e){var i=b(e);0===t?l.push(i):3===t?u.push(i):c.push(i)})};for(var d in s)f(d);l.push.apply(l,c.concat(u));var p={usv:h,t:r,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===A()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==A()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){n._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(e){var i=this;t.request({url:f,method:"POST",data:e,success:function(){},fail:function(t){++i._retry<3&&setTimeout(function(){i._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=_(N(t)).options;e.src=d+"?"+i}},{key:"sendEvent",value:function(t,e){X(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function i(){var e;return l(this,i),e=n(this,a(i).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return o(i,e),u(i,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new i),this.instance}}]),u(i,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var i=this;e?t.addInterceptor("share",{success:function(){i._share()},fail:function(){i._share()}}):i._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,R(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,J(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,J(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(i)}}]),i}(Q),tt=Z.getInstance(),et=!1,it={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function nt(){var e=i("66fd");(e.default||e).mixin(it),t.report=function(t,e){tt.sendEvent(t,e)}}nt()}).call(this,i("6e42")["default"])},9372:function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{history:[]}},onLoad:function(){this.getHistory()},onPullDownRefresh:function(){this.getHistory()},methods:{checkHistory:function(e){var i=[];for(var n in e){var r=e[n];if(void 0!=r.data){var a=r.data.infostring;if(void 0!=a&&null!=a){r.data.infostring.T;var o=r.data.infostring.H;if(0!=o){var s=r.timestamp.toString();console.log(t("this is a timestamp"," at my_js\\devHistory.js:34")),console.log(t(s," at my_js\\devHistory.js:35"));var l=s.substr(0,4),c=s.substr(4,2),u=s.substr(6,2),h=(parseInt(s.substr(9,2))+8).toString(),f=s.substr(11,2),d=l+"年"+c+"月"+u+"日 "+h+":"+f;r.timestamp=d,i.push(r)}}}}return i},getHistory:function(){var e=this;console.log(t("getHistory"," at my_js\\devHistory.js:49")),i.request({url:this.globalVal.default_url.devHistory,method:"POST",data:{deviceId:this.globalVal.devId},success:function(i){if(200==i.statusCode&&void 0==i.data.error_code){console.log(t("成功获取历史信息"," at my_js\\devHistory.js:59"));var n=e.checkHistory(i.data.deviceDataHistoryDTOs);for(var r in n){var a=n[r],o={T:a.data.infostring.T,H:a.data.infostring.H,L:a.data.infostring.L,S:a.data.infostring.S,day:a.timestamp.split(" ")[0].substr(5),time:a.timestamp.split(" ")[1]};e.history.push(o)}}}})}}};e.default=n}).call(this,i("0de9")["default"],i("6e42")["default"])},b8b4:function(t,e,i){"use strict";i.r(e);var n=i("f10f"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=r.a},c8ba:function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(n){"object"===typeof window&&(i=window)}t.exports=i},e487:function(t,e,i){},f10f:function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{minT:20.1,maxT:30.1,minH:10.1,maxH:40.1,red_light:!0,blue_light:!0,green_light:!0,autoWarn:!0,img_path:"0",cmd_str:"123321"}},methods:{refresh:function(){var t=this.red_light?100:0,e=this.green_light?10:0,i=this.blue_light?1:0;this.img_path=(t+e+i).toString()},change:function(e){var i,n=this,r=0,a="",o={cmdstring:this.cmd_str,cmdlen:this.cmd_str.length,cmdcode:r};switch(e){case 1:r=this.red_light?1:0,o.cmdcode=r,i=JSON.stringify(o),t.request({url:this.globalVal.default_url.devCmd,method:"POST",data:{deviceId:this.globalVal.devId,cmdInfo:i},success:function(e){a=n.red_light?"熄灭红灯":"点亮红灯",t.showToast({title:a+"成功!",duration:1e3,icon:"none"}),n.red_light=!n.red_light,n.refresh()},fail:function(){a=n.red_light?"熄灭红灯":"点亮红灯",t.showToast({title:a+"失败!",duration:1e3,icon:"none"})}});break;case 2:r=this.green_light?3:2,o.cmdcode=r,i=JSON.stringify(o),t.request({url:this.globalVal.default_url.devCmd,method:"POST",data:{deviceId:this.globalVal.devId,cmdInfo:i},success:function(e){a=n.green_light?"熄灭绿灯":"点亮绿灯",t.showToast({title:a+"成功!",duration:1e3,icon:"none"}),n.green_light=!n.green_light,n.refresh()},fail:function(){a=n.green_light?"熄灭绿灯":"点亮绿灯",t.showToast({title:a+"失败!",duration:1e3,icon:"none"})}});break;case 3:r=this.blue_light?5:4,o.cmdcode=r,i=JSON.stringify(o),t.request({url:this.globalVal.default_url.devCmd,method:"POST",data:{deviceId:this.globalVal.devId,cmdInfo:i},success:function(e){a=n.blue_light?"熄灭蓝灯":"点亮蓝灯",t.showToast({title:a+"成功!",duration:1e3,icon:"none"}),n.blue_light=!n.blue_light,n.refresh()},fail:function(){a=n.blue_light?"熄灭蓝灯":"点亮蓝灯",t.showToast({title:a+"失败!",duration:1e3,icon:"none"})}});break}},changeAuto:function(){var e=this,i=this.autoWarn?11:10,n={cmdstring:this.cmd_str,cmdlen:this.cmd_str.length,cmdcode:i},r=this.autoWarn?"关闭自动报警":"打开自动报警",a=JSON.stringify(n);t.request({url:this.globalVal.default_url.devCmd,method:"POST",data:{deviceId:this.globalVal.devId,cmdInfo:a},success:function(i){t.showToast({title:r+"成功!",duration:1e3,icon:"none"}),e.autoWarn=!e.autoWarn},fail:function(){t.showToast({title:r+"失败!",duration:1e3,icon:"none"})}})},submitWarn:function(){var e=12;this.cmd_str=this.minT.toString().replace(".","")+" "+this.maxT.toString().replace(".","")+" "+this.minH.toString().replace(".","")+" "+this.maxH.toString().replace(".",""),console.log(i(this.cmd_str," at my_js\\devCmd.js:170"));var n={cmdstring:this.cmd_str,cmdlen:this.cmd_str.length,cmdcode:e},r=JSON.stringify(n);t.request({url:this.globalVal.default_url.devCmd,method:"POST",data:{deviceId:this.globalVal.devId,cmdInfo:r},success:function(e){t.showToast({title:"上传警戒值成功!",icon:"none",duration:1e3})},fail:function(){t.showToast({title:"上传警戒值失败!",icon:"none",duration:1e3})}})}}};e.default=n}).call(this,i("6e42")["default"],i("0de9")["default"])},f4e8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="https://wifirelay.hanxe.com/gateway/iotgateway/ke1extend/",r="bbd9557f-a4e0-43fd-9e77-6cec9f34c998",a={devReg:n+"devreg",devInfo:n+"devinfo",devCmd:n+"devcmd",devHistory:n+"devhistory"},o={default_url:a,devId:r};e.default=o}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/index/devInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/devInfo.js';

define('pages/index/devInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/devInfo"],{"15ff":function(n,t,e){"use strict";e.r(t);var u=e("7000"),a=e("2d7a");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("7373");var c=e("2877"),f=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},"61de":function(n,t,e){},7000:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},7373:function(n,t,e){"use strict";var u=e("61de"),a=e.n(u);a.a},7899:function(n,t,e){"use strict";(function(n){e("e487"),e("921b");u(e("66fd"));var t=u(e("15ff"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["7899","common/runtime","common/vendor"]]]);
});
require('pages/index/devInfo.js');
__wxRoute = 'pages/index/devHistory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/devHistory.js';

define('pages/index/devHistory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/devHistory"],{1317:function(n,e,t){"use strict";t.r(e);var u=t("b2c6"),a=t("672d");for(var c in a)"default"!==c&&function(n){t.d(e,n,function(){return a[n]})}(c);t("2eae");var r=t("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},"2eae":function(n,e,t){"use strict";var u=t("bd6d"),a=t.n(u);a.a},af39:function(n,e,t){"use strict";(function(n){t("e487"),t("921b");u(t("66fd"));var e=u(t("1317"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},b2c6:function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return a})},bd6d:function(n,e,t){}},[["af39","common/runtime","common/vendor"]]]);
});
require('pages/index/devHistory.js');
__wxRoute = 'pages/index/devCmd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/devCmd.js';

define('pages/index/devCmd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/devCmd"],{"0006":function(n,t,e){},"0d50":function(n,t,e){"use strict";e.r(t);var u=e("f21a"),a=e("b8b4");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("8f53");var c=e("2877"),f=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},"8f53":function(n,t,e){"use strict";var u=e("0006"),a=e.n(u);a.a},b703:function(n,t,e){"use strict";(function(n){e("e487"),e("921b");u(e("66fd"));var t=u(e("0d50"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},f21a:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})}},[["b703","common/runtime","common/vendor"]]]);
});
require('pages/index/devCmd.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

