"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5495],{65495:function(e,t,i){i.r(t),i.d(t,{W3mAllWalletsView:function(){return th},W3mConnectingWcBasicView:function(){return eE},W3mDownloadsView:function(){return tb}});var o=i(31133),r=i(19848),n=i(53357),l=i(5688),a=i(17766),s=i(36801),c=i(72537);i(96277);var d=i(32801),h=i(44649),p=i(35652),u=i(29562),w=i(31929),b=i(86777);i(97928);var g=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let m=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=p.ConnectorController.state.connectors,this.count=a.ApiController.state.count,this.filteredCount=a.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=a.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(p.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),a.ApiController.subscribeKey("count",e=>this.count=e),a.ApiController.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),a.ApiController.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=l.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!n.j.isMobile())return null;let i=a.ApiController.state.featured.length,r=this.count+i,s=this.filteredCount>0?this.filteredCount:r<10?r:10*Math.floor(r/10),c=`${s}`;this.filteredCount>0?c=`${this.filteredCount}`:s<r&&(c=`${s}+`);let p=u.ConnectionController.hasAnyConnection(h.b.CONNECTOR_ID.WALLET_CONNECT);return(0,o.dy)`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,d.o)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${p}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){w.X.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),b.RouterController.push("AllWallets",{redirectView:b.RouterController.state.data?.redirectView})}};g([(0,r.Cb)()],m.prototype,"tabIdx",void 0),g([(0,r.SB)()],m.prototype,"connectors",void 0),g([(0,r.SB)()],m.prototype,"count",void 0),g([(0,r.SB)()],m.prototype,"filteredCount",void 0),g([(0,r.SB)()],m.prototype,"isFetchingRecommendedWallets",void 0),m=g([(0,c.Mo)("w3m-all-wallets-widget")],m);var f=i(22472),y=i(63043),v=i(54090),C=i(46773),$=(0,c.iv)`
  :host {
    margin-top: ${({spacing:e})=>e["1"]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1)
      ${({spacing:e})=>e["2"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`,x=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let k=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.connectors=p.ConnectorController.state.connectors,this.recommended=a.ApiController.state.recommended,this.featured=a.ApiController.state.featured,this.explorerWallets=a.ApiController.state.explorerWallets,this.connections=u.ConnectionController.state.connections,this.connectorImages=f.W.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(p.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),u.ConnectionController.subscribeKey("connections",e=>this.connections=e),f.W.subscribeKey("connectorImages",e=>this.connectorImages=e),a.ApiController.subscribeKey("recommended",e=>this.recommended=e),a.ApiController.subscribeKey("featured",e=>this.featured=e),a.ApiController.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e?.length?e:a.ApiController.state.explorerWallets}),a.ApiController.subscribeKey("explorerWallets",e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),n.j.isTelegram()&&n.j.isIos()&&(this.loadingTelegram=!u.ConnectionController.state.wcUri,this.unsubscribe.push(u.ConnectionController.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(e,t){return e.map(e=>{if("MULTI_CHAIN"===e.type&&e.connectors){let i=e.connectors.map(e=>e.id),o=e.connectors.map(e=>e.name),r=e.connectors.map(e=>e.info?.rdns),n=t?.find(e=>i.includes(e.id)||o.includes(e.name)||e.rdns&&(r.includes(e.rdns)||i.includes(e.rdns)));return e.explorerWallet=n??e.explorerWallet,e}let i=t?.find(t=>t.id===e.id||t.rdns===e.info?.rdns||t.name===e.name);return e.explorerWallet=i??e.explorerWallet,e})}processConnectorsByType(e,t=!0){let i=C.C.sortConnectorsByExplorerWallet([...e]);return t?i.filter(C.C.showConnector):i}connectorListTemplate(){let e=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),t=C.C.getConnectorsByType(e,this.recommended,this.featured),i=this.processConnectorsByType(t.announced.filter(e=>"walletConnect"!==e.id)),o=this.processConnectorsByType(t.injected),r=this.processConnectorsByType(t.multiChain.filter(e=>"WalletConnect"!==e.name),!1),l=t.custom,a=t.recent,s=this.processConnectorsByType(t.external.filter(e=>e.id!==h.b.CONNECTOR_ID.COINBASE_SDK)),c=t.recommended,d=t.featured,p=C.C.getConnectorTypeOrder({custom:l,recent:a,announced:i,injected:o,multiChain:r,recommended:c,featured:d,external:s}),u=this.connectors.find(e=>"walletConnect"===e.id),w=n.j.isMobile(),b=[];for(let e of p)switch(e){case"walletConnect":!w&&u&&b.push({kind:"connector",subtype:"walletConnect",connector:u});break;case"recent":C.C.getFilteredRecentWallets().forEach(e=>b.push({kind:"wallet",subtype:"recent",wallet:e}));break;case"injected":r.forEach(e=>b.push({kind:"connector",subtype:"multiChain",connector:e})),i.forEach(e=>b.push({kind:"connector",subtype:"announced",connector:e})),o.forEach(e=>b.push({kind:"connector",subtype:"injected",connector:e}));break;case"featured":d.forEach(e=>b.push({kind:"wallet",subtype:"featured",wallet:e}));break;case"custom":C.C.getFilteredCustomWallets(l??[]).forEach(e=>b.push({kind:"wallet",subtype:"custom",wallet:e}));break;case"external":s.forEach(e=>b.push({kind:"connector",subtype:"external",connector:e}));break;case"recommended":C.C.getCappedRecommendedWallets(c).forEach(e=>b.push({kind:"wallet",subtype:"recommended",wallet:e}));break;default:console.warn(`Unknown connector type: ${e}`)}return b.map((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t))}renderConnector(e,t){let i,r;let n=e.connector,l=y.f.getConnectorImage(n)||this.connectorImages[n?.imageId??""],a=(this.connections.get(n.chain)??[]).some(e=>v.g.isLowerCaseMatch(e.connectorId,n.id));"multiChain"===e.subtype?(i="multichain",r="info"):"walletConnect"===e.subtype?(i="qr code",r="accent"):"injected"===e.subtype||"announced"===e.subtype?(i=a?"connected":"installed",r=a?"info":"success"):(i=void 0,r=void 0);let s=u.ConnectionController.hasAnyConnection(h.b.CONNECTOR_ID.WALLET_CONNECT),c=("walletConnect"===e.subtype||"external"===e.subtype)&&s;return(0,o.dy)`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.o)(l)}
        .installed=${!0}
        name=${n.name??"Unknown"}
        .tagVariant=${r}
        tagLabel=${(0,d.o)(i)}
        data-testid=${`wallet-selector-${n.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,d.o)(this.tabIdx)}
        ?disabled=${c}
        rdnsId=${(0,d.o)(n.explorerWallet?.rdns||void 0)}
        walletRank=${(0,d.o)(n.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){let t=b.RouterController.state.data?.redirectView;if("walletConnect"===e.subtype){p.ConnectorController.setActiveConnector(e.connector),n.j.isMobile()?b.RouterController.push("AllWallets"):b.RouterController.push("ConnectingWalletConnect",{redirectView:t});return}if("multiChain"===e.subtype){p.ConnectorController.setActiveConnector(e.connector),b.RouterController.push("ConnectingMultiChain",{redirectView:t});return}if("injected"===e.subtype){p.ConnectorController.setActiveConnector(e.connector),b.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet});return}if("announced"===e.subtype){if("walletConnect"===e.connector.id){n.j.isMobile()?b.RouterController.push("AllWallets"):b.RouterController.push("ConnectingWalletConnect",{redirectView:t});return}b.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet});return}b.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:t})}renderWallet(e,t){let i=e.wallet,r=y.f.getWalletImage(i),n=u.ConnectionController.hasAnyConnection(h.b.CONNECTOR_ID.WALLET_CONNECT),l=this.loadingTelegram,a="recent"===e.subtype?"recent":void 0,s="recent"===e.subtype?"info":void 0;return(0,o.dy)`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.o)(r)}
        name=${i.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${i.id}`}
        tabIdx=${(0,d.o)(this.tabIdx)}
        ?loading=${l}
        ?disabled=${n}
        rdnsId=${(0,d.o)(i.rdns||void 0)}
        walletRank=${(0,d.o)(i.order)}
        tagLabel=${(0,d.o)(a)}
        .tagVariant=${s}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){let t=b.RouterController.state.data?.redirectView;if("featured"===e.subtype){p.ConnectorController.selectWalletConnector(e.wallet);return}if("recent"===e.subtype){if(this.loadingTelegram)return;p.ConnectorController.selectWalletConnector(e.wallet);return}if("custom"===e.subtype){if(this.loadingTelegram)return;b.RouterController.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t});return}if(this.loadingTelegram)return;let i=p.ConnectorController.getConnector({id:e.wallet.id,rdns:e.wallet.rdns});i?b.RouterController.push("ConnectingExternal",{connector:i,redirectView:t}):b.RouterController.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}};k.styles=$,x([(0,r.Cb)({type:Number})],k.prototype,"tabIdx",void 0),x([(0,r.SB)()],k.prototype,"connectors",void 0),x([(0,r.SB)()],k.prototype,"recommended",void 0),x([(0,r.SB)()],k.prototype,"featured",void 0),x([(0,r.SB)()],k.prototype,"explorerWallets",void 0),x([(0,r.SB)()],k.prototype,"connections",void 0),x([(0,r.SB)()],k.prototype,"connectorImages",void 0),x([(0,r.SB)()],k.prototype,"loadingTelegram",void 0),k=x([(0,c.Mo)("w3m-connector-list")],k);var R=i(42935),S=i(95221),E=i(66909),T=i(49425),j=i(59388),O=i(31182),I=i(84249),P=i(57116);i(23344),i(21264);var W=i(11131),A=(0,W.iv)`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`,B=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let L={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},_={lg:"md",md:"sm",sm:"sm"},z=class extends o.oi{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return(0,o.dy)`
      <button data-active=${this.active}>
        ${this.icon?(0,o.dy)`<wui-icon size=${_[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${L[this.size]}> ${this.label} </wui-text>
      </button>
    `}};z.styles=[I.ET,I.ZM,A],B([(0,r.Cb)()],z.prototype,"icon",void 0),B([(0,r.Cb)()],z.prototype,"size",void 0),B([(0,r.Cb)()],z.prototype,"label",void 0),B([(0,r.Cb)({type:Boolean})],z.prototype,"active",void 0),z=B([(0,P.M)("wui-tab-item")],z);var D=(0,W.iv)`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`,M=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let N=class extends o.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{let i=t===this.activeTab;return(0,o.dy)`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${i}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};N.styles=[I.ET,I.ZM,D],M([(0,r.Cb)({type:Array})],N.prototype,"tabs",void 0),M([(0,r.Cb)()],N.prototype,"onTabChange",void 0),M([(0,r.Cb)()],N.prototype,"size",void 0),M([(0,r.SB)()],N.prototype,"activeTab",void 0),N=M([(0,P.M)("wui-tabs")],N);var U=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let q=class extends o.oi{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return(0,o.dy)`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};U([(0,r.Cb)({type:Array})],q.prototype,"platforms",void 0),U([(0,r.Cb)()],q.prototype,"onSelectPlatfrom",void 0),q=U([(0,c.Mo)("w3m-connecting-header")],q);var F=i(52005);i(97585),i(4594),i(1736),i(51437);var H=(0,W.iv)`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,V=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let K=class extends o.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return(0,o.dy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};K.styles=[I.ET,H],V([(0,r.Cb)({type:Number})],K.prototype,"radius",void 0),K=V([(0,P.M)("wui-loading-thumbnail")],K),i(44732),i(43465),i(5680),i(98629);var X=(0,W.iv)`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`,G=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Q=class extends o.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return(0,o.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Q.styles=[I.ET,I.ZM,X],G([(0,r.Cb)({type:Boolean})],Q.prototype,"disabled",void 0),G([(0,r.Cb)()],Q.prototype,"label",void 0),G([(0,r.Cb)()],Q.prototype,"buttonLabel",void 0),Q=G([(0,P.M)("wui-cta-button")],Q);var Y=(0,c.iv)`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e["5"]} ${({spacing:e})=>e["5"]};
  }
`,Z=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let J=class extends o.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:i,chrome_store:r,homepage:l}=this.wallet,a=n.j.isMobile(),s=n.j.isIos(),d=n.j.isAndroid(),h=[t,i,l,r].filter(Boolean).length>1,p=c.Hg.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return h&&!a?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${()=>b.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&l?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&d?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&n.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.j.openHref(this.wallet.homepage,"_blank")}};J.styles=[Y],Z([(0,r.Cb)({type:Object})],J.prototype,"wallet",void 0),J=Z([(0,c.Mo)("w3m-mobile-download-links")],J);var ee=(0,c.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`,et=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};class ei extends o.oi{constructor(){super(),this.wallet=b.RouterController.state.data?.wallet,this.connector=b.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=y.f.getConnectorImage(this.connector)??y.f.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=u.ConnectionController.state.wcUri,this.error=u.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(u.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),u.ConnectionController.subscribeKey("wcError",e=>this.error=e)),(n.j.isTelegram()||n.j.isSafari())&&n.j.isIos()&&u.ConnectionController.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),u.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),(0,o.dy)`
      <wui-flex
        data-error=${(0,d.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,d.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?(0,o.dy)`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?(0,o.dy)`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){u.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=F.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,o.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(n.j.copyToClopboard(this.uri),E.SnackController.showSuccess("Link copied"))}catch{E.SnackController.showError("Failed to copy")}}}ei.styles=ee,et([(0,r.SB)()],ei.prototype,"isRetrying",void 0),et([(0,r.SB)()],ei.prototype,"uri",void 0),et([(0,r.SB)()],ei.prototype,"error",void 0),et([(0,r.SB)()],ei.prototype,"ready",void 0),et([(0,r.SB)()],ei.prototype,"showRetry",void 0),et([(0,r.SB)()],ei.prototype,"label",void 0),et([(0,r.SB)()],ei.prototype,"secondaryBtnLabel",void 0),et([(0,r.SB)()],ei.prototype,"secondaryLabel",void 0),et([(0,r.SB)()],ei.prototype,"isLoading",void 0),et([(0,r.Cb)({type:Boolean})],ei.prototype,"isMobile",void 0),et([(0,r.Cb)()],ei.prototype,"onRetry",void 0);let eo=class extends ei{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:b.RouterController.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=p.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(t)await u.ConnectionController.connectExternal(t,t.chain);else throw Error("w3m-connecting-wc-browser: No connector found");T.I.close(),w.X.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:b.RouterController.state.view,walletRank:this.wallet?.order}})}catch(e){e instanceof j.g&&e.originalName===R.jD.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?w.X.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):w.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};eo=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l}([(0,c.Mo)("w3m-connecting-wc-browser")],eo);let er=class extends ei{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:b.RouterController.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=n.j.formatNativeUrl(e,this.uri);u.ConnectionController.setWcLinking({name:t,href:o}),u.ConnectionController.setRecentWallet(this.wallet),n.j.openHref(i,"_blank")}catch{this.error=!0}}};er=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l}([(0,c.Mo)("w3m-connecting-wc-desktop")],er);var en=i(59712),el=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let ea=class extends ei{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=l.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:r,href:l}=n.j.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=r,this.target=n.j.isIframe()?"_top":"_self",u.ConnectionController.setWcLinking({name:i,href:l}),u.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?n.j.openHref(this.redirectUniversalLink,this.target):n.j.openHref(this.redirectDeeplink,this.target)}catch(e){w.X.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=en.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(u.ConnectionController.subscribeKey("wcUri",()=>{this.onHandleURI()})),w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:b.RouterController.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){u.ConnectionController.setWcError(!1),this.onConnect?.()}};el([(0,r.SB)()],ea.prototype,"redirectDeeplink",void 0),el([(0,r.SB)()],ea.prototype,"redirectUniversalLink",void 0),el([(0,r.SB)()],ea.prototype,"target",void 0),el([(0,r.SB)()],ea.prototype,"preferUniversalLinks",void 0),el([(0,r.SB)()],ea.prototype,"isLoading",void 0),ea=el([(0,c.Mo)("w3m-connecting-wc-mobile")],ea),i(23805);var es=i(35819);function ec(e,t,i){return e!==t&&(e-t<0?t-e:e-t)<=i+.1}let ed={generate({uri:e,size:t,logoSize:i,padding:r=8,dotColor:n="var(--apkt-colors-black)"}){let l=[],a=function(e,t){let i=Array.prototype.slice.call(es.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((e,t,i)=>(i%o==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),s=(t-2*r)/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:e,y:t})=>{let i=(a.length-7)*s*e+r,d=(a.length-7)*s*t+r;for(let e=0;e<c.length;e+=1){let t=s*(7-2*e);l.push((0,o.YP)`
            <rect
              fill=${2===e?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===e?t-10:t}
              rx= ${0===e?(t-10)*.45:.45*t}
              ry= ${0===e?(t-10)*.45:.45*t}
              stroke=${n}
              stroke-width=${0===e?10:0}
              height=${0===e?t-10:t}
              x= ${0===e?d+s*e+5:d+s*e}
              y= ${0===e?i+s*e+5:i+s*e}
            />
          `)}});let d=Math.floor((i+25)/s),h=a.length/2-d/2,p=a.length/2+d/2-1,u=[];a.forEach((e,t)=>{e.forEach((e,i)=>{!a[t][i]||t<7&&i<7||t>a.length-8&&i<7||t<7&&i>a.length-8||t>h&&t<p&&i>h&&i<p||u.push([t*s+s/2+r,i*s+s/2+r])})});let w={};return u.forEach(([e,t])=>{w[e]?w[e]?.push(t):w[e]=[t]}),Object.entries(w).map(([e,t])=>{let i=t.filter(e=>t.every(t=>!ec(e,t,s)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{l.push((0,o.YP)`<circle cx=${e} cy=${t} fill=${n} r=${s/2.5} />`)})}),Object.entries(w).filter(([e,t])=>t.length>1).map(([e,t])=>{let i=t.filter(e=>t.some(t=>ec(e,t,s)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let i=[];for(let e of t){let t=i.find(t=>t.some(t=>ec(e,t,s)));t?t.push(e):i.push([e])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{l.push((0,o.YP)`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${n}
                stroke-width=${s/1.25}
                stroke-linecap="round"
              />
            `)})}),l}};var eh=(0,W.iv)`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`,ep=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let eu=class extends o.oi{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),(0,o.dy)`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return(0,o.YP)`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${ed.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,o.dy)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,o.dy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};eu.styles=[I.ET,eh],ep([(0,r.Cb)()],eu.prototype,"uri",void 0),ep([(0,r.Cb)({type:Number})],eu.prototype,"size",void 0),ep([(0,r.Cb)()],eu.prototype,"theme",void 0),ep([(0,r.Cb)()],eu.prototype,"imageSrc",void 0),ep([(0,r.Cb)()],eu.prototype,"alt",void 0),ep([(0,r.Cb)({type:Boolean})],eu.prototype,"arenaClear",void 0),ep([(0,r.Cb)({type:Boolean})],eu.prototype,"farcaster",void 0),eu=ep([(0,P.M)("wui-qr-code")],eu);var ew=(0,W.iv)`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,eb=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let eg=class extends o.oi{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",(0,o.dy)`<slot></slot>`}};eg.styles=[ew],eb([(0,r.Cb)()],eg.prototype,"width",void 0),eb([(0,r.Cb)()],eg.prototype,"height",void 0),eb([(0,r.Cb)()],eg.prototype,"variant",void 0),eb([(0,r.Cb)({type:Boolean})],eg.prototype,"rounded",void 0),eg=eb([(0,P.M)("wui-shimmer")],eg),i(63957);var em=(0,c.iv)`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,ef=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let ey=class extends ei{constructor(){super(),this.basic=!1}firstUpdated(){this.basic||w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:b.RouterController.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e())}render(){return this.onRenderProxy(),(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.wallet?this.wallet.name:void 0;return u.ConnectionController.setWcLinking(void 0),u.ConnectionController.setRecentWallet(this.wallet),(0,o.dy)` <wui-qr-code
      theme=${F.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,d.o)(y.f.getWalletImage(this.wallet))}
      color=${(0,d.o)(F.ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,d.o)(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,o.dy)`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};ey.styles=em,ef([(0,r.Cb)({type:Boolean})],ey.prototype,"basic",void 0),ey=ef([(0,c.Mo)("w3m-connecting-wc-qrcode")],ey);let ev=class extends o.oi{constructor(){if(super(),this.wallet=b.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:b.RouterController.state.view}})}render(){return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,d.o)(y.f.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ev=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l}([(0,c.Mo)("w3m-connecting-wc-unsupported")],ev);var eC=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let e$=class extends ei{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=en.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(u.ConnectionController.subscribeKey("wcUri",()=>{this.updateLoadingState()})),w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:b.RouterController.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=n.j.formatUniversalUrl(e,this.uri);u.ConnectionController.setWcLinking({name:t,href:o}),u.ConnectionController.setRecentWallet(this.wallet),n.j.openHref(i,"_blank")}catch{this.error=!0}}};eC([(0,r.SB)()],e$.prototype,"isLoading",void 0),e$=eC([(0,c.Mo)("w3m-connecting-wc-web")],e$);var ex=(0,c.iv)`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`,ek=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let eR=class extends o.oi{constructor(){super(),this.wallet=b.RouterController.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!l.OptionsController.state.siwx,this.remoteFeatures=l.OptionsController.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(l.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.OptionsController.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),(0,o.dy)`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?(0,o.dy)`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!l.OptionsController.state.manualWCControl||e))try{let{wcPairingExpiry:t,status:i}=u.ConnectionController.state,{redirectView:o}=b.RouterController.state.data??{};if(e||l.OptionsController.state.enableEmbedded||n.j.isPairingExpired(t)||"connecting"===i){let e=u.ConnectionController.getConnections(S.R.state.activeChain),t=this.remoteFeatures?.multiWallet,i=e.length>0;await u.ConnectionController.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(i&&t?(b.RouterController.replace("ProfileWallets"),E.SnackController.showSuccess("New Wallet Added")):o?b.RouterController.replace(o):T.I.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!l.OptionsController.state.enableNetworkSwitch&&S.R.state.activeChain){S.R.setActiveCaipNetwork(O.f.getUnsupportedNetwork(`${S.R.state.activeChain}:${S.R.state.activeCaipNetwork?.id}`)),S.R.showUnsupportedChainUI();return}e instanceof j.g&&e.originalName===R.jD.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?w.X.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):w.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),u.ConnectionController.setWcError(!0),E.SnackController.showError(e.message??"Connection error"),u.ConnectionController.resetWcConnection(),b.RouterController.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:r}=this.wallet,a=o?.map(({injected_id:e})=>e).filter(Boolean),s=[...r?[r]:a??[]],c=!l.OptionsController.state.isUniversalProvider&&s.length,d=u.ConnectionController.checkInstalled(s),h=c&&d,p=t&&!n.j.isMobile();h&&!S.R.state.noAdapters&&this.platforms.push("browser"),e&&this.platforms.push(n.j.isMobile()?"mobile":"qrcode"),i&&this.platforms.push("web"),p&&this.platforms.push("desktop"),h||!c||S.R.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,o.dy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return(0,o.dy)`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return(0,o.dy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return(0,o.dy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,o.dy)`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return(0,o.dy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,o.dy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};eR.styles=ex,ek([(0,r.SB)()],eR.prototype,"platform",void 0),ek([(0,r.SB)()],eR.prototype,"platforms",void 0),ek([(0,r.SB)()],eR.prototype,"isSiwxEnabled",void 0),ek([(0,r.SB)()],eR.prototype,"remoteFeatures",void 0),ek([(0,r.Cb)({type:Boolean})],eR.prototype,"displayBranding",void 0),ek([(0,r.Cb)({type:Boolean})],eR.prototype,"basic",void 0),eR=ek([(0,c.Mo)("w3m-connecting-wc-view")],eR);var eS=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let eE=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.isMobile=n.j.isMobile(),this.remoteFeatures=l.OptionsController.state.remoteFeatures,this.unsubscribe.push(l.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){let{featured:e,recommended:t}=a.ApiController.state,{customWallets:i}=l.OptionsController.state,r=s.M.getRecentWallets(),n=e.length||t.length||i?.length||r.length;return(0,o.dy)`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?(0,o.dy)`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return(0,o.dy)`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?(0,o.dy)` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};eS([(0,r.SB)()],eE.prototype,"isMobile",void 0),eS([(0,r.SB)()],eE.prototype,"remoteFeatures",void 0),eE=eS([(0,c.Mo)("w3m-connecting-wc-basic-view")],eE);var eT=i(81997);let{I:ej}=eT._$LH,eO=e=>void 0===e.strings;var eI=i(42216);let eP=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),eP(e,t);return!0},eW=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},eA=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),e_(t)}};function eB(e){void 0!==this._$AN?(eW(this),this._$AM=e,eA(this)):this._$AM=e}function eL(e,t=!1,i=0){let o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(t){if(Array.isArray(o))for(let e=i;e<o.length;e++)eP(o[e],!1),eW(o[e]);else null!=o&&(eP(o,!1),eW(o))}else eP(this,e)}}let e_=e=>{e.type==eI.pX.CHILD&&(e._$AP??=eL,e._$AQ??=eB)};class ez extends eI.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),eA(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(eP(this,e),eW(this))}setValue(e){if(eO(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let eD=()=>new eM;class eM{}let eN=new WeakMap,eU=(0,eI.XM)(class extends ez{render(e){return eT.Ld}update(e,[t]){let i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),eT.Ld}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=eN.get(t);void 0===i&&(i=new WeakMap,eN.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?eN.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var eq=(0,W.iv)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`,eF=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let eH=class extends o.oi{constructor(){super(...arguments),this.inputElementRef=eD(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return(0,o.dy)`
      <label data-size=${this.size}>
        <input
          ${eU(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};eH.styles=[I.ET,I.ZM,eq],eF([(0,r.Cb)({type:Boolean})],eH.prototype,"checked",void 0),eF([(0,r.Cb)({type:Boolean})],eH.prototype,"disabled",void 0),eF([(0,r.Cb)()],eH.prototype,"size",void 0),eH=eF([(0,P.M)("wui-toggle")],eH);var eV=(0,W.iv)`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["3"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,eK=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let eX=class extends o.oi{constructor(){super(...arguments),this.checked=!1}render(){return(0,o.dy)`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};eX.styles=[I.ET,I.ZM,eV],eK([(0,r.Cb)({type:Boolean})],eX.prototype,"checked",void 0),eX=eK([(0,P.M)("wui-certified-switch")],eX);var eG=(0,W.iv)`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,eQ=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let eY=class extends o.oi{constructor(){super(...arguments),this.inputElementRef=eD(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return(0,o.dy)` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${eU(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,d.o)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?(0,o.dy)`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?(0,o.dy)`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?(0,o.dy)`<wui-icon name="spinner" size="md"></wui-icon>`:(0,o.dy)`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?(0,o.dy)`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?(0,o.dy)`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};eY.styles=[I.ET,I.ZM,eG],eQ([(0,r.Cb)()],eY.prototype,"icon",void 0),eQ([(0,r.Cb)({type:Boolean})],eY.prototype,"disabled",void 0),eQ([(0,r.Cb)({type:Boolean})],eY.prototype,"loading",void 0),eQ([(0,r.Cb)()],eY.prototype,"placeholder",void 0),eQ([(0,r.Cb)()],eY.prototype,"type",void 0),eQ([(0,r.Cb)()],eY.prototype,"value",void 0),eQ([(0,r.Cb)()],eY.prototype,"errorText",void 0),eQ([(0,r.Cb)()],eY.prototype,"warningText",void 0),eQ([(0,r.Cb)()],eY.prototype,"onSubmit",void 0),eQ([(0,r.Cb)()],eY.prototype,"size",void 0),eQ([(0,r.Cb)({attribute:!1})],eY.prototype,"onKeyDown",void 0),eY=eQ([(0,P.M)("wui-input-text")],eY);var eZ=(0,W.iv)`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`,eJ=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let e0=class extends o.oi{constructor(){super(...arguments),this.inputComponentRef=eD(),this.inputValue=""}render(){return(0,o.dy)`
      <wui-input-text
        ${eU(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?(0,o.dy)`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};e0.styles=[I.ET,eZ],eJ([(0,r.Cb)()],e0.prototype,"inputValue",void 0),e0=eJ([(0,P.M)("wui-search-bar")],e0);let e3=(0,o.YP)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var e1=(0,W.iv)`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,e2=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let e5=class extends o.oi{constructor(){super(...arguments),this.type="wallet"}render(){return(0,o.dy)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?(0,o.dy)` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${e3}`:(0,o.dy)`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};e5.styles=[I.ET,I.ZM,e1],e2([(0,r.Cb)()],e5.prototype,"type",void 0),e5=e2([(0,P.M)("wui-card-select-loader")],e5);var e4=i(3874),e6=(0,o.iv)`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,e9=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let e7=class extends o.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&e4.H.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e4.H.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e4.H.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e4.H.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e4.H.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e4.H.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e4.H.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e4.H.getSpacingStyles(this.margin,3)};
    `,(0,o.dy)`<slot></slot>`}};e7.styles=[I.ET,e6],e9([(0,r.Cb)()],e7.prototype,"gridTemplateRows",void 0),e9([(0,r.Cb)()],e7.prototype,"gridTemplateColumns",void 0),e9([(0,r.Cb)()],e7.prototype,"justifyItems",void 0),e9([(0,r.Cb)()],e7.prototype,"alignItems",void 0),e9([(0,r.Cb)()],e7.prototype,"justifyContent",void 0),e9([(0,r.Cb)()],e7.prototype,"alignContent",void 0),e9([(0,r.Cb)()],e7.prototype,"columnGap",void 0),e9([(0,r.Cb)()],e7.prototype,"rowGap",void 0),e9([(0,r.Cb)()],e7.prototype,"gap",void 0),e9([(0,r.Cb)()],e7.prototype,"padding",void 0),e9([(0,r.Cb)()],e7.prototype,"margin",void 0),e7=e9([(0,P.M)("wui-grid")],e7);var e8=i(70768),te=(0,c.iv)`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["3"]} ${({spacing:e})=>e["0"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e["4"]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,tt=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let ti=class extends o.oi{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type==="certified";return(0,o.dy)`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,d.o)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?(0,o.dy)`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?(0,o.dy)`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,d.o)(this.imageSrc)}
        name=${(0,d.o)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return(0,o.dy)`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=y.f.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await y.f.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,w.X.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:b.RouterController.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};ti.styles=te,tt([(0,r.SB)()],ti.prototype,"visible",void 0),tt([(0,r.SB)()],ti.prototype,"imageSrc",void 0),tt([(0,r.SB)()],ti.prototype,"imageLoading",void 0),tt([(0,r.SB)()],ti.prototype,"isImpressed",void 0),tt([(0,r.Cb)()],ti.prototype,"explorerId",void 0),tt([(0,r.Cb)()],ti.prototype,"walletQuery",void 0),tt([(0,r.Cb)()],ti.prototype,"certified",void 0),tt([(0,r.Cb)()],ti.prototype,"displayIndex",void 0),tt([(0,r.Cb)({type:Object})],ti.prototype,"wallet",void 0),ti=tt([(0,c.Mo)("w3m-all-wallets-list-item")],ti);var to=(0,c.iv)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e["4"]};
    padding-bottom: ${({spacing:e})=>e["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,tr=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let tn="local-paginator",tl=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!a.ApiController.state.wallets.length,this.wallets=a.ApiController.state.wallets,this.recommended=a.ApiController.state.recommended,this.featured=a.ApiController.state.featured,this.filteredWallets=a.ApiController.state.filteredWallets,this.mobileFullScreen=l.OptionsController.state.enableMobileFullScreen,this.unsubscribe.push(a.ApiController.subscribeKey("wallets",e=>this.wallets=e),a.ApiController.subscribeKey("recommended",e=>this.recommended=e),a.ApiController.subscribeKey("featured",e=>this.featured=e),a.ApiController.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),(0,o.dy)`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector("wui-grid");e&&(await a.ApiController.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>(0,o.dy)`
        <wui-card-select-loader type="wallet" id=${(0,d.o)(t)}></wui-card-select-loader>
      `)}getWallets(){let e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);let t=n.j.uniqueBy(e,"id"),i=e8.J.markWalletsAsInstalled(t);return e8.J.markWalletsWithDisplayIndex(i)}walletsTemplate(){return this.getWallets().map((e,t)=>(0,o.dy)`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:i,count:o,mobileFilteredOutWalletsLength:r}=a.ApiController.state,n=window.innerWidth<352?3:4,l=e.length+t.length,s=Math.ceil(l/n)*n-l+n;return(s-=e.length?i.length%n:0,0===o&&i.length>0)?null:0===o||[...i,...e,...t].length<o-(r??0)?this.shimmerTemplate(s,tn):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${tn}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:i}=a.ApiController.state;i.length<t&&a.ApiController.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){p.ConnectorController.selectWalletConnector(e)}};tl.styles=to,tr([(0,r.SB)()],tl.prototype,"loading",void 0),tr([(0,r.SB)()],tl.prototype,"wallets",void 0),tr([(0,r.SB)()],tl.prototype,"recommended",void 0),tr([(0,r.SB)()],tl.prototype,"featured",void 0),tr([(0,r.SB)()],tl.prototype,"filteredWallets",void 0),tr([(0,r.SB)()],tl.prototype,"badge",void 0),tr([(0,r.SB)()],tl.prototype,"mobileFullScreen",void 0),tl=tr([(0,c.Mo)("w3m-all-wallets-list")],tl),i(21793);var ta=(0,o.iv)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,ts=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let tc=class extends o.oi{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=l.OptionsController.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?(0,o.dy)`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await a.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=a.ApiController.state,t=e8.J.markWalletsAsInstalled(e);return e.length?(0,o.dy)`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${t.map((e,t)=>(0,o.dy)`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:(0,o.dy)`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){p.ConnectorController.selectWalletConnector(e)}};tc.styles=ta,ts([(0,r.SB)()],tc.prototype,"loading",void 0),ts([(0,r.SB)()],tc.prototype,"mobileFullScreen",void 0),ts([(0,r.Cb)()],tc.prototype,"query",void 0),ts([(0,r.Cb)()],tc.prototype,"badge",void 0),tc=ts([(0,c.Mo)("w3m-all-wallets-search")],tc);var td=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let th=class extends o.oi{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=n.j.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return(0,o.dy)`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?(0,o.dy)`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:(0,o.dy)`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",E.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return n.j.isMobile()?(0,o.dy)`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){b.RouterController.push("ConnectingWalletConnect")}};td([(0,r.SB)()],th.prototype,"search",void 0),td([(0,r.SB)()],th.prototype,"badge",void 0),th=td([(0,c.Mo)("w3m-all-wallets-view")],th);var tp=(0,W.iv)`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,tu=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let tw=class extends o.oi{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",(0,o.dy)`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,d.o)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?(0,o.dy)`<wui-image
        icon=${this.icon}
        iconColor=${(0,d.o)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:(0,o.dy)`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?(0,o.dy)`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:(0,o.dy)`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};tw.styles=[I.ET,I.ZM,tp],tu([(0,r.Cb)()],tw.prototype,"imageSrc",void 0),tu([(0,r.Cb)()],tw.prototype,"icon",void 0),tu([(0,r.Cb)()],tw.prototype,"iconColor",void 0),tu([(0,r.Cb)({type:Boolean})],tw.prototype,"loading",void 0),tu([(0,r.Cb)()],tw.prototype,"tabIdx",void 0),tu([(0,r.Cb)({type:Boolean})],tw.prototype,"disabled",void 0),tu([(0,r.Cb)({type:Boolean})],tw.prototype,"rightIcon",void 0),tu([(0,r.Cb)({type:Boolean})],tw.prototype,"rounded",void 0),tu([(0,r.Cb)({type:Boolean})],tw.prototype,"fullSize",void 0),tw=tu([(0,P.M)("wui-list-item")],tw);let tb=class extends o.oi{constructor(){super(...arguments),this.wallet=b.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return(0,o.dy)`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?(0,o.dy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?(0,o.dy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?(0,o.dy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?(0,o.dy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(w.X.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),n.j.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};tb=function(e,t,i,o){var r,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(n<3?r(l):n>3?r(t,i,l):r(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l}([(0,c.Mo)("w3m-downloads-view")],tb)}}]);