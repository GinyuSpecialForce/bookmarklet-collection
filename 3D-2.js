javascript:if(!window.ThreeDit){ThreeDit=function(a,b){function G(a){p=a.clientX+g.scrollLeft;q=a.clientY+g.scrollTop}function F(){var a=g.scrollLeft-t;var b=g.scrollTop-u;p=v=g.scrollLeft+r;q=w=g.scrollTop+s;n+=a;o+=b;x=v+l.clientLeft-e.pageXOffset;y=w+l.clientTop-e.pageYOffset;t=g.scrollLeft;u=g.scrollTop}function E(){r=e.innerWidth/2;s=e.innerHeight/2;p=v=g.scrollLeft+r;q=w=g.scrollTop+s;x=v+l.clientLeft-e.pageXOffset;y=w+l.clientTop-e.pageYOffset}function D(){n+=(p-n)*.05;o+=(q-o)*.05;var a=(n-v)/r*5;var b=-(o-w)/s*5;for(var e=0;e<d.length;e++){var f=d[e].node;var g=f;var h=0;var k=0;var l=d[e].z;f.style[i]=x-h+"px "+(y-k)+"px";f.style[j]="rotateY("+a+"deg) rotateX("+b+"deg)translate3d(0px,0px, "+l*c.zDepth+"px)"}}function C(){var a;for(var b=0;b<d.length;b++){d[b].node.style[j]="none"}delete d;d=[];A(g,0);d.push({node:g,z:0});d.sort(function h(a,b){return a.z-b.z});var c=0;var e=[c];d[0].z=c;for(var b=1;b<d.length;b++){e.push(c=d[b].z==d[b-1].z?c:c+1)}var%20f=e[e.length-1];for(var%20b=0;b%3Cd.length;b++){d[b].z=e[b]/f}}function%20B(a){c.perspective=a;k[h+%22Perspective%22]=c.perspective+%22px%22}function%20A(a,b,e){if(d.length%3E=c.maxElems-1)return;if(!e&&a.tagName==%22DIV%22&&a.childNodes.length%3E0){d.push({node:a,z:b})}for(var%20f=0;f%3Ca.childNodes.length;f++){A(a.childNodes[f],b+1,a.childNodes.length%3C2)}}function%20z(a){f=a;g=f.body;h=%22webkitTransform%22in%20g.style?%22webkit%22:%22MozTransform%22in%20g.style?%22Moz%22:null;i=h+%22TransformOrigin%22;j=h+%22Transform%22;l=f.documentElement;k=l.style;m=e.getComputedStyle;t=g.scrollLeft;u=g.scrollTop;k[h+%22Perspective%22]=c.perspective+%22px%22;k.backgroundImage=m(g).getPropertyValue(%22background-image%22);k.backgroundColor=m(g).getPropertyValue(%22background-color%22);C();if(!c.initialized){E();n=p;o=q;e.addEventListener(%22resize%22,E);e.addEventListener(%22scroll%22,F);f.addEventListener(%22mousemove%22,G);setInterval(D,1e3/60)}c.initialized=true}var%20c={zDepth:300,maxElems:100,perspective:500,initialized:false};var%20d=[];var%20e=a;var%20f=b;var%20g;var%20h;var%20i;var%20j;var%20k;var%20l;var%20m;var%20n;var%20o;var%20p;var%20q;var%20r;var%20s;var%20t;var%20u;var%20v;var%20w;var%20x;var%20y;c.init=z;c.recollectElems=C;c.render=D;c.changePerspective=B;return%20c}(window,document);ThreeDit.init(document);}else{ThreeDit.recollectElems();}
