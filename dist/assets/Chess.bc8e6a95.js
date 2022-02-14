import{_ as y}from"./index.8a0dd418.js";import{o as l,c,b as v,t as T,F as g,l as p,n as x,g as b,e as _}from"./vendor.0b7e7022.js";class k{constructor(i,s){this.org=i,this.final=s,this.piece=i.piece,this.xo=i.loc[1],this.xf=s.loc[1],this.xd=this.xf-this.xo,this.yo=i.loc[0],this.yf=s.loc[0],this.yd=this.yf-this.yo}getMovementRules(){if(this.org.player==this.final.player)return console.log("same player piece"),this.valid=!1;switch(this.piece){case"knight":this.knightMovement();break;case"rook":this.rookMovement();break;case"bishop":this.bishopMovement();break;case"queen":this.queenMovement();break;case"king":this.kingMovement();break;case"pawn":this.pawnMovement();break;default:return console.log("Somethinga wenta wronga"),this.valid=!1}return this.valid}invalid(){return console.log("invalid move"),this.valid=!1}knightMovement(){if(Math.abs(this.xd)+Math.abs(this.yd)==3&&Math.abs(Math.abs(this.xd)-Math.abs(this.yd))==1)return this.valid=!0;this.invalid()}bishopMovement(){if(Math.abs(this.xd)==Math.abs(this.yd))return this.valid=!0;this.invalid()}rookMovement(){if(this.xd==0&&this.yd!=0||this.yd==0&&this.xd!=0)return this.valid=!0;this.invalid()}queenMovement(){if(this.bishopMovement()||this.rookMovement())return this.valid=!0;this.invalid()}kingMovement(){if((Math.abs(this.xd)==1||Math.abs(this.yd)==1)&&(this.bishopMovement()||this.rookMovement()))return this.valid=!0;this.invalid()}pawnMovement(){if(this.org.player=="b"&&(this.yd==1&&this.xd==0||this.yo==2&&this.yd==2)||this.org.player=="w"&&(this.yd==-1&&this.xd==0||this.yo==7&&this.yd==-2))return this.valid=!0;this.invalid()}}class M{constructor(){self=this,this.pieceLocation=[{}],this.totalTiles=this.buildBoard(),this.selectedTile=65,this.currentTurn="w",this.turnTex="The turn is white"}setPieceLoc(i){return this.pieceLocation=i,self}changeTurn(){if(this.currentTurn=="w")return this.currentTurn="b",this.turnTex="The turn is black",this;if(this.currentTurn=="b")return this.currentTurn="w",this.turnTex="The turn is white",this;console.log("Turn has error")}buildBoard(){return this.totalTiles=[...Array(9).keys()],self.totalTiles.shift(),this.totalTiles}getIndex(i,s){var t=(i-1)*8+s-1;return t}getPiece(i,s,t){var e=self.getIndex(i,s);if(t[e]!=null){console.log(t[e]);var a="https://chessapp.s3.us-west-2.amazonaws.com/"+t[e].player+t[e].piece+".png";return a}console.log("page loading")}selected(i,s,t){var e=self.getIndex(i,s);if(this.selectedTile!=65&&self.isValid(this.selectedTile,t,e)){var a=this.selectedTile;const n=d=>new Promise(u=>setTimeout(u,d));(async()=>{self.animatePiece(this.selectedTile,e),await n(750),this.selectedTile=a,document.getElementById("img"+this.selectedTile).style.transform=null,t[e].piece=t[this.selectedTile].piece,t[e].player=t[this.selectedTile].player,t[this.selectedTile].piece="none",t[this.selectedTile].player=""})(),self.changeTurn();return}if(t[e].piece!="none")return this.selectedTile=e,this.selectedTile}isValid(i,s,t){return i!=null&&t!=i&&new k(s[i],s[t]).getMovementRules()==!0&&s[i].player==this.currentTurn&&(s[i].piece=="knight"||self.checkPath(s[i],s[t])==!0)}animatePiece(i,s){var t=document.getElementById("tile"+s).getBoundingClientRect(),e=document.getElementById("img"+i);e.style.transform="translateY("+(t.y-e.getBoundingClientRect().y+1)+"px)",e.style.transform+="translateX("+(t.x-e.getBoundingClientRect().x+2.5)+"px)"}checkPath(i,s){for(var t=i.loc[0],e=i.loc[1],a=t-s.loc[0]>0,n=!0,r=s.loc[1]-e>0,d=t-s.loc[0]==0,u=s.loc[1]-e==0,f=!0;!(t==s.loc[0]&&e==s.loc[1]);){var m=self.getIndex(t,e);if(a==!0&&!d&&t--,a==!1&&!d&&t++,r==!0&&!u&&e++,r==!1&&!u&&e--,this.pieceLocation[m].piece!="none"&&f==!1)return console.log("piece is in the way"),n=!1;f=!1}return n}}const w=async()=>await(await fetch("https://www.maxelliotmills.com/board")).json();var o=new M;const B={data(){return{pieceLocation:o.pieceLocation,totalTiles:o.totalTiles,selectedTile:o.selectedTile,turnText:o.turnText,getIndex:o.getIndex.bind({}),getPiece:o.getPiece.bind({}),selected:o.selected.bind({})}},mounted(){w().then(h=>{o.setPieceLoc(h),this.pieceLocation=o.pieceLocation})}},I={class:"boardBorder"},L={class:"board"},P=["id","onClick"],C=["src","id"];function F(h,i,s,t,e,a){return l(),c("div",null,[v("h2",null,T(e.turnText),1),v("div",I,[v("table",L,[(l(!0),c(g,null,p(e.totalTiles,n=>(l(),c("tr",{key:n,class:"row"},[(l(!0),c(g,null,p(e.totalTiles,r=>(l(),c("td",{key:r,id:"tile"+e.getIndex(n,r),onClick:d=>e.selectedTile=e.selected(n,r,e.pieceLocation,e.selectedTile),class:"column"},[v("div",{class:x({active:e.getIndex(n,r)==e.selectedTile})},[e.pieceLocation[e.getIndex(n,r)]?(l(),c("img",{key:0,src:e.getPiece(n,r,e.pieceLocation),id:"img"+e.getIndex(n,r)},null,8,C)):b("",!0)],2)],8,P))),128))]))),128))])])])}var R=y(B,[["render",F]]);const V={class:"chess"},j={setup(h){return(i,s)=>(l(),c("div",V,[_(R)]))}};export{j as default};