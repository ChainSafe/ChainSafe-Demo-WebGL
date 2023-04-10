import{a1 as c,X as A,Y as d,$ as f,aU as g,aX as I,aN as w,ac as b,ai as m}from"./index-fa6c9ea4.js";var _=function(r){c(n,r);function n(t,i){return r.call(this)||this}return n.prototype.schedule=function(t,i){return this},n}(A),l={setInterval:function(r,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];var e=l.delegate;return e!=null&&e.setInterval?e.setInterval.apply(e,d([r,n],f(t))):setInterval.apply(void 0,d([r,n],f(t)))},clearInterval:function(r){var n=l.delegate;return((n==null?void 0:n.clearInterval)||clearInterval)(r)},delegate:void 0},S=function(r){c(n,r);function n(t,i){var e=r.call(this,t,i)||this;return e.scheduler=t,e.work=i,e.pending=!1,e}return n.prototype.schedule=function(t,i){var e;if(i===void 0&&(i=0),this.closed)return this;this.state=t;var s=this.id,a=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(a,s,i)),this.pending=!0,this.delay=i,this.id=(e=this.id)!==null&&e!==void 0?e:this.requestAsyncId(a,this.id,i),this},n.prototype.requestAsyncId=function(t,i,e){return e===void 0&&(e=0),l.setInterval(t.flush.bind(t,this),e)},n.prototype.recycleAsyncId=function(t,i,e){if(e===void 0&&(e=0),e!=null&&this.delay===e&&this.pending===!1)return i;i!=null&&l.clearInterval(i)},n.prototype.execute=function(t,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(t,i);if(e)return e;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,i){var e=!1,s;try{this.work(t)}catch(a){e=!0,s=a||new Error("Scheduled action threw falsy error")}if(e)return this.unsubscribe(),s},n.prototype.unsubscribe=function(){if(!this.closed){var t=this,i=t.id,e=t.scheduler,s=e.actions;this.work=this.state=this.scheduler=null,this.pending=!1,g(s,this),i!=null&&(this.id=this.recycleAsyncId(e,i,null)),this.delay=null,r.prototype.unsubscribe.call(this)}},n}(_),v=function(){function r(n,t){t===void 0&&(t=r.now),this.schedulerActionCtor=n,this.now=t}return r.prototype.schedule=function(n,t,i){return t===void 0&&(t=0),new this.schedulerActionCtor(this,n).schedule(i,t)},r.now=I.now,r}(),x=function(r){c(n,r);function n(t,i){i===void 0&&(i=v.now);var e=r.call(this,t,i)||this;return e.actions=[],e._active=!1,e}return n.prototype.flush=function(t){var i=this.actions;if(this._active){i.push(t);return}var e;this._active=!0;do if(e=t.execute(t.state,t.delay))break;while(t=i.shift());if(this._active=!1,e){for(;t=i.shift();)t.unsubscribe();throw e}},n}(v),p=new x(S),T=p;function q(r,n){return n===void 0&&(n=p),w(function(t,i){var e=null,s=null,a=null,o=function(){if(e){e.unsubscribe(),e=null;var u=s;s=null,i.next(u)}};function y(){var u=a+r,h=n.now();if(h<u){e=this.schedule(void 0,u-h),i.add(e);return}o()}t.subscribe(b(i,function(u){s=u,a=n.now(),e||(e=n.schedule(y,r),i.add(e))},function(){o(),i.complete()},void 0,function(){s=e=null}))})}function C(r){return m(function(n,t){return r<=t})}export{S as A,v as S,x as a,T as b,p as c,q as d,C as s};
