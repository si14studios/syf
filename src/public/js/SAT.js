/* SAT.js - Version 0.5.0 - Copyright 2012 - 2015 - Jim Riecken <jimr@jimr.ca> - released under the MIT License. https://github.com/jriecken/sat-js */
function x(){function c(a,e){this.x=a||0;this.y=e||0}function A(a,e){this.pos=a||new c;this.r=e||0}function m(a,e){this.pos=a||new c;this.angle=0;this.offset=new c;this.m(e||[])}function r(a,e,b){this.pos=a||new c;this.w=e||0;this.h=b||0}function w(){this.b=this.a=null;this.overlapN=new c;this.overlapV=new c;this.clear()}function B(a,e,b){for(var f=Number.MAX_VALUE,c=-Number.MAX_VALUE,k=a.length,h=0;h<k;h++){var d=a[h].d(e);d<f&&(f=d);d>c&&(c=d)}b[0]=f;b[1]=c}function C(a,e,b,f,c,k){var h=t.pop(),
d=t.pop();a=g.pop().c(e).sub(a);e=a.d(c);B(b,c,h);B(f,c,d);d[0]+=e;d[1]+=e;if(h[0]>d[1]||d[0]>h[1])return g.push(a),t.push(h),t.push(d),!0;k&&(b=0,h[0]<d[0]?(k.aInB=!1,h[1]<d[1]?(b=h[1]-d[0],k.bInA=!1):(b=h[1]-d[0],f=d[1]-h[0],b=b<f?b:-f)):(k.bInA=!1,h[1]>d[1]?(b=h[0]-d[1],k.aInB=!1):(b=h[1]-d[0],f=d[1]-h[0],b=b<f?b:-f)),f=Math.abs(b),f<k.overlap&&(k.overlap=f,k.overlapN.c(c),0>b&&k.overlapN.reverse()));g.push(a);t.push(h);t.push(d);return!1}function y(a,e){var b=a.e(),c=e.d(a);return 0>c?-1:c>b?
1:0}function D(a,e,b){for(var c=g.pop().c(e.pos).sub(a.pos),l=e.r,k=l*l,h=a.calcPoints,d=h.length,v=g.pop(),q=g.pop(),n=0;n<d;n++){var m=n===d-1?0:n+1,t=0===n?d-1:n-1,r=0,u=null;v.c(a.edges[n]);q.c(c).sub(h[n]);b&&q.e()>k&&(b.aInB=!1);var p=y(v,q);if(-1===p){v.c(a.edges[t]);m=g.pop().c(c).sub(h[t]);p=y(v,m);if(1===p){p=q.g();if(p>l)return g.push(c),g.push(v),g.push(q),g.push(m),!1;b&&(b.bInA=!1,u=q.normalize(),r=l-p)}g.push(m)}else if(1===p){if(v.c(a.edges[m]),q.c(c).sub(h[m]),p=y(v,q),-1===p){p=
q.g();if(p>l)return g.push(c),g.push(v),g.push(q),!1;b&&(b.bInA=!1,u=q.normalize(),r=l-p)}}else{m=v.j().normalize();p=q.d(m);t=Math.abs(p);if(0<p&&t>l)return g.push(c),g.push(m),g.push(q),!1;b&&(u=m,r=l-p,0<=p||r<2*l)&&(b.bInA=!1)}u&&b&&Math.abs(r)<Math.abs(b.overlap)&&(b.overlap=r,b.overlapN.c(u))}b&&(b.a=a,b.b=e,b.overlapV.c(b.overlapN).scale(b.overlap));g.push(c);g.push(v);g.push(q);return!0}function E(a,e,b){for(var c=a.calcPoints,l=c.length,k=e.calcPoints,h=k.length,d=0;d<l;d++)if(C(a.pos,e.pos,
c,k,a.normals[d],b))return!1;for(d=0;d<h;d++)if(C(a.pos,e.pos,c,k,e.normals[d],b))return!1;b&&(b.a=a,b.b=e,b.overlapV.c(b.overlapN).scale(b.overlap));return!0}var n={};n.Vector=c;n.V=c;c.prototype.copy=c.prototype.c=function(a){this.x=a.x;this.y=a.y;return this};c.prototype.clone=c.prototype.clone=function(){return new c(this.x,this.y)};c.prototype.perp=c.prototype.j=function(){var a=this.x;this.x=this.y;this.y=-a;return this};c.prototype.rotate=c.prototype.rotate=function(a){var e=this.x,b=this.y;
this.x=e*Math.cos(a)-b*Math.sin(a);this.y=e*Math.sin(a)+b*Math.cos(a);return this};c.prototype.reverse=c.prototype.reverse=function(){this.x=-this.x;this.y=-this.y;return this};c.prototype.normalize=c.prototype.normalize=function(){var a=this.g();0<a&&(this.x/=a,this.y/=a);return this};c.prototype.add=c.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};c.prototype.sub=c.prototype.sub=function(a){this.x-=a.x;this.y-=a.y;return this};c.prototype.scale=c.prototype.scale=function(a,e){this.x*=
a;this.y*=e||a;return this};c.prototype.project=c.prototype.k=function(a){var e=this.d(a)/a.e();this.x=e*a.x;this.y=e*a.y;return this};c.prototype.projectN=c.prototype.l=function(a){var e=this.d(a);this.x=e*a.x;this.y=e*a.y;return this};c.prototype.reflect=function(a){var e=this.x,b=this.y;this.k(a).scale(2);this.x-=e;this.y-=b;return this};c.prototype.reflectN=function(a){var e=this.x,b=this.y;this.l(a).scale(2);this.x-=e;this.y-=b;return this};c.prototype.dot=c.prototype.d=function(a){return this.x*
a.x+this.y*a.y};c.prototype.len2=c.prototype.e=function(){return this.d(this)};c.prototype.len=c.prototype.g=function(){return Math.sqrt(this.e())};n.Circle=A;A.prototype.getAABB=function(){var a=this.r,e=this.pos.clone().sub(new c(a,a));return(new r(e,2*a,2*a)).i()};n.Polygon=m;m.prototype.setPoints=m.prototype.m=function(a){if(!this.points||this.points.length!==a.length){var e,b=this.calcPoints=[],f=this.edges=[],l=this.normals=[];for(e=0;e<a.length;e++)b.push(new c),f.push(new c),l.push(new c)}this.points=
a;this.f();return this};m.prototype.setAngle=function(a){this.angle=a;this.f();return this};m.prototype.setOffset=function(a){this.offset=a;this.f();return this};m.prototype.rotate=m.prototype.rotate=function(a){for(var e=this.points,b=e.length,c=0;c<b;c++)e[c].rotate(a);this.f();return this};m.prototype.translate=m.prototype.translate=function(a,c){for(var b=this.points,f=b.length,l=0;l<f;l++)b[l].x+=a,b[l].y+=c;this.f();return this};m.prototype.f=function(){var a=this.calcPoints,c=this.edges,b=
this.normals,f=this.points,l=this.offset,k=this.angle,h=f.length,d;for(d=0;d<h;d++){var g=a[d].c(f[d]);g.x+=l.x;g.y+=l.y;0!==k&&g.rotate(k)}for(d=0;d<h;d++)f=a[d],f=c[d].c(d<h-1?a[d+1]:a[0]).sub(f),b[d].c(f).j().normalize()};m.prototype.getAABB=function(){for(var a=this.calcPoints,e=a.length,b=a[0].x,f=a[0].y,g=a[0].x,k=a[0].y,h=1;h<e;h++){var d=a[h];d.x<b?b=d.x:d.x>g&&(g=d.x);d.y<f?f=d.y:d.y>k&&(k=d.y)}return(new r(this.pos.clone().add(new c(b,f)),g-b,k-f)).i()};n.Box=r;r.prototype.toPolygon=r.prototype.i=
function(){var a=this.pos,e=this.w,b=this.h;return new m(new c(a.x,a.y),[new c,new c(e,0),new c(e,b),new c(0,b)])};n.Response=w;w.prototype.clear=w.prototype.clear=function(){this.bInA=this.aInB=!0;this.overlap=Number.MAX_VALUE;return this};for(var g=[],u=0;10>u;u++)g.push(new c);for(var t=[],u=0;5>u;u++)t.push([]);var z=new w,F=(new r(new c,1,1)).i();n.pointInCircle=function(a,c){var b=g.pop().c(a).sub(c.pos),f=c.r*c.r,l=b.e();g.push(b);return l<=f};n.pointInPolygon=function(a,c){F.pos.c(a);z.clear();
var b=E(F,c,z);b&&(b=z.aInB);return b};n.testCircleCircle=function(a,c,b){var f=g.pop().c(c.pos).sub(a.pos),l=a.r+c.r,k=f.e();if(k>l*l)return g.push(f),!1;b&&(k=Math.sqrt(k),b.a=a,b.b=c,b.overlap=l-k,b.overlapN.c(f.normalize()),b.overlapV.c(f).scale(b.overlap),b.aInB=a.r<=c.r&&k<=c.r-a.r,b.bInA=c.r<=a.r&&k<=a.r-c.r);g.push(f);return!0};n.testPolygonCircle=D;n.testCirclePolygon=function(a,c,b){if((a=D(c,a,b))&&b){c=b.a;var f=b.aInB;b.overlapN.reverse();b.overlapV.reverse();b.a=b.b;b.b=c;b.aInB=b.bInA;
b.bInA=f}return a};n.testPolygonPolygon=E;return n}"function"===typeof define&&define.amd?define(x):"object"===typeof exports?module.exports=x():this.SAT=x();