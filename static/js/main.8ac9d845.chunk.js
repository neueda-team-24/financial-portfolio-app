(this["webpackJsonpfinancial-portfolio-app"]=this["webpackJsonpfinancial-portfolio-app"]||[]).push([[0],{124:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(9),s=n.n(o),r=(n(97),n.p,n(98),n(58)),i=n.n(r),l=n(81),j=n(68),u=n(69),b=n(29),p=n(30),h=n(33),d=n(32),f=n(6),m=n(169),x=n(160),O=n(127),g=n(174),v=n(3),C=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(b.a)(this,n),e.call(this,t)}return Object(p.a)(n,[{key:"render",value:function(){var t=this.props.card,e=t.image_url,n=t.name,c=t.cost,a=t.price,o=a-c,s=o>=0;return Object(v.jsxs)(x.a,{item:!0,xs:10,sm:6,md:3,children:[Object(v.jsx)("img",{src:e,alt:"Pokemon Card of "+n}),Object(v.jsx)(O.a,{variant:"h6",style:{color:"beige"},children:Object(v.jsx)("b",{children:n})}),Object(v.jsx)(g.a,{title:"Current Price (Profit / Loss)",children:Object(v.jsxs)(O.a,{variant:"subtitle1",style:{color:"beige"},children:["$",a.toFixed(2)," ",Object(v.jsxs)(O.a,{display:"inline",variant:"subtitle1",className:s?this.props.classes.profitable:this.props.classes.loss,children:["(",s?"+":"-","$",Math.abs(o).toFixed(2),")"]})]})})]})}}]),n}(c.PureComponent),k=Object(f.a)((function(t){return{profitable:{color:"#80D878"},loss:{color:"#EC5858"}}}))(C),D=n(75),y=n.n(D),S=n(25),I=n(166),N=n(167),w=n(168),E=n(82),F=n(164),L=n(171),T=n(77),B=n.n(T),H=n(175),P=n(78),_=n.n(P),A=n(79),M=n.n(A),z=n(80),$=n.n(z),G=n(76),U=n.n(G),J=n(165),R=n(163),W=Object(R.a)((function(t){return{menuIconStyle:{padding:"8px"},buttonIconColorDefault:{color:"#DCDCDC"},buttonIconColorSpecial:{color:"#1B1D25"},hoverEffectDefault:Object(S.a)({},t.breakpoints.down("lg"),{"&:hover":{backgroundColor:"#333333"}}),hoverEffectSpecial:Object(S.a)({},t.breakpoints.down("lg"),{"&:hover":{backgroundColor:"#DDDDDD"}}),linkStyle:{color:"#000000DE",textDecoration:"none"},menuItemsIconStyle:{paddingRight:"10px",paddingLeft:"0",fontSize:"16px"}}}));function V(t){var e=a.a.useState(null),n=Object(E.a)(e,2),o=n[0],s=n[1],r=W(),i=function(){s(null)};return Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(F.a,{className:t.isHome?"".concat(r.hoverEffectDefault," ").concat(r.menuIconStyle):"".concat(r.hoverEffectSpecial," ").concat(r.menuIconStyle),"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(t){s(t.currentTarget)},children:Boolean(o)?Object(v.jsx)(U.a,{className:t.isHome?"".concat(r.buttonIconColorDefault):"".concat(r.buttonIconColorSpecial)}):Object(v.jsx)(B.a,{className:t.isHome?"".concat(r.buttonIconColorDefault):"".concat(r.buttonIconColorSpecial)})}),Object(v.jsxs)(L.a,{elevation:"2",id:"menu-appbar",getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:i,children:[Object(v.jsx)(J.a,{className:r.linkStyle,to:"/work",children:Object(v.jsxs)(H.a,{onClick:i,children:[Object(v.jsx)(_.a,{className:r.menuItemsIconStyle}),"Work"]})}),Object(v.jsx)(J.a,{className:r.linkStyle,to:"/projects",children:Object(v.jsxs)(H.a,{onClick:i,children:[Object(v.jsx)(M.a,{className:r.menuItemsIconStyle}),"Projects"]})}),Object(v.jsx)(J.a,{onClick:t.scrollToContact,className:r.linkStyle,children:Object(v.jsxs)(H.a,{onClick:i,children:[Object(v.jsx)($.a,{className:r.menuItemsIconStyle}),"Contact"]})})]})]})}var Y=n(172),q=n(170),K=n.p+"static/media/pokemonLogo.a6e9300c.png",Q=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this.props.classes;return Object(v.jsx)(I.a,{className:this.props.isHome?"".concat(t.navBarDefault):"".concat(t.navBarSpecial),elevation:0,position:"sticky",children:Object(v.jsx)(N.a,{children:Object(v.jsxs)(x.a,{container:!0,justify:"space-around",alignItems:"center",children:[Object(v.jsxs)(x.a,{container:!0,alignItems:"center",xs:"10",sm:"3",children:[Object(v.jsx)(x.a,{item:!0,xs:4,justify:"flex-end",children:Object(v.jsx)("img",{src:K,alt:"logo",height:"60px",width:"90px",className:t.logoStyle})}),Object(v.jsx)(x.a,{container:!0,xs:8,justify:"flex-start",alignContent:"flex-start",style:{margin:0,padding:0},children:Object(v.jsx)(O.a,{variant:"h5",children:"Pok\xe9mon Card Trading"})})]}),Object(v.jsxs)(x.a,{container:!0,justify:"flex-end",direction:"row",xs:"2",sm:"9",children:[Object(v.jsxs)(Y.a,{smDown:!0,children:[Object(v.jsx)(J.a,{className:this.props.isHome?"".concat(t.buttonLinkDefault):"".concat(t.buttonLinkSpecial),href:"https://www.ebay.com.sg/b/Pokemon-TCG/2536/bn_7117595258",children:Object(v.jsx)(w.a,{className:this.props.isHome?"".concat(t.hoverEffectDefault," ").concat(t.button):"".concat(t.hoverEffectSpecial," ").concat(t.button),color:"inherit",children:Object(v.jsx)(O.a,{variant:"body1",children:"Marketplace"})})}),Object(v.jsx)(J.a,{className:this.props.isHome?"".concat(t.buttonLinkDefault):"".concat(t.buttonLinkSpecial),href:"https://pokemontcg.guru/",children:Object(v.jsx)(w.a,{className:this.props.isHome?"".concat(t.hoverEffectDefault," ").concat(t.button):"".concat(t.hoverEffectSpecial," ").concat(t.button),color:"inherit",children:Object(v.jsx)(O.a,{variant:"body1",children:"Explore"})})}),Object(v.jsx)(J.a,{className:this.props.isHome?"".concat(t.buttonLinkDefault):"".concat(t.buttonLinkSpecial),onClick:this.props.scrollToContact,children:Object(v.jsx)(w.a,{className:this.props.isHome?"".concat(t.hoverEffectDefault," ").concat(t.button):"".concat(t.hoverEffectSpecial," ").concat(t.button),color:"inherit",children:Object(v.jsx)(O.a,{variant:"body1",children:"Logout"})})})]}),Object(v.jsx)(Y.a,{mdUp:!0,children:Object(v.jsx)(q.a,{align:"right",children:Object(v.jsx)(V,{isHome:this.props.isHome})})})]})]})})})}}]),n}(c.PureComponent),X=Object(f.a)((function(t){return{navBarDefault:{background:"#1B1D25",color:"#FCFCFC"},navBarSpecial:{background:"#FCFCFC",color:"#1B1D25"},button:{width:"85%",marginTop:"4px",marginLeft:"20px"},hoverEffectDefault:Object(S.a)({},t.breakpoints.up("lg"),{"&:hover":{backgroundColor:"#333333"}}),hoverEffectSpecial:Object(S.a)({},t.breakpoints.up("lg"),{"&:hover":{backgroundColor:"#DDDDDD"}}),logoStyle:{paddingLeft:"30px",marginBottom:"3px",marginTop:"3px"},buttonLinkDefault:{color:"#FCFCFC",textDecoration:"none"},buttonLinkSpecial:{color:"#1B1D25",textDecoration:"none"}}}))(Q),Z=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(b.a)(this,n),(c=e.call(this,t)).fetchData=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://vn6t1iuloj.execute-api.ap-southeast-1.amazonaws.com/appData",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Content-Type":"application/json"}}).then((function(t){var e=t.data,n=e.user,a=e.cards;c.setState({user:Object(j.a)({},n),cards:Object(l.a)(a)})})).catch((function(t){console.log(t)}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)}))),c.componentDidMount=function(){c.fetchData()},c.state={user:null,cards:null},c}return Object(p.a)(n,[{key:"render",value:function(){if(!this.state.cards||!this.state.user)return Object(v.jsx)(m.a,{style:{marginTop:"45vh",marginBottom:"50vh"}});var t=this.state.user.total_profit_loss>=0;return Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(X,{isHome:!0,scrollToContact:this.handleScrollToContact}),Object(v.jsxs)(x.a,{container:!0,direction:"row",spacing:5,justify:"space-evenly",alignItems:"center",xs:12,className:this.props.classes.gridContainer,children:[Object(v.jsx)(x.a,{xs:12,style:{padding:"30px"},children:Object(v.jsx)(O.a,{variant:"h4",style:{color:"white"},children:Object(v.jsx)("b",{children:"Your Collection"})})}),Object(v.jsxs)(x.a,{xs:12,children:[Object(v.jsxs)(O.a,{variant:"h6",style:{color:"beige"},children:["Total Asset Value: $",this.state.user.total_asset_value.toFixed(2)," "]}),Object(v.jsxs)(O.a,{variant:"h6",style:{color:"beige"},children:["Unrealised Gains / Losses:"," ",Object(v.jsx)(g.a,{title:"Unrealised Gains / Losses",children:Object(v.jsxs)(O.a,{display:"inline",variant:"h6",className:t?this.props.classes.profitable:this.props.classes.loss,children:[t?"+":"-","$",Math.abs(this.state.user.total_profit_loss).toFixed(2)]})})]})]}),Object(v.jsx)(x.a,{xs:12,style:{paddingBottom:"40px"},children:Object(v.jsxs)(O.a,{variant:"h6",style:{color:"beige"},children:["Total Number of Cards: ",this.state.cards.length]})}),this.state.cards.map((function(t,e){return Object(v.jsx)(k,{card:t},e)}))]})]})}}]),n}(c.PureComponent),tt=Object(f.a)((function(t){return{gridContainer:{maxWidth:"100%",paddingLeft:"2%",paddingTop:"2%",paddingBottom:"5%"},profitable:{color:"#80D878"},loss:{color:"#EC5858"}}}))(Z);var et=function(){return Object(v.jsx)("div",{className:"App",style:{backgroundImage:"url(https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(v.jsx)(tt,{})})},nt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,177)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),o(t),s(t)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(et,{})}),document.getElementById("root")),nt()},97:function(t,e,n){},98:function(t,e,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.8ac9d845.chunk.js.map