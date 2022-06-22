"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[274],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},42487:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={sidebar_position:4},c="Controllers",s={unversionedId:"controllers",id:"controllers",isDocsHomePage:!1,title:"Controllers",description:"Controllers Defined",source:"@site/docs/controllers.md",sourceDirName:".",slug:"/controllers",permalink:"/EasyEnemies/docs/controllers",editUrl:"https://github.com/Sleitnick/Knit/edit/master/docs/controllers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Services",permalink:"/EasyEnemies/docs/services"},next:{title:"Util",permalink:"/EasyEnemies/docs/util"}},d=[{value:"Controllers Defined",id:"controllers-defined",children:[],level:2},{value:"Creating Controllers",id:"creating-controllers",children:[],level:2},{value:"Adding Methods",id:"adding-methods",children:[],level:2},{value:"Adding Properties",id:"adding-properties",children:[],level:2},{value:"Adding Basic Behavior",id:"adding-basic-behavior",children:[],level:2},{value:"More Behavior",id:"more-behavior",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Server Communication",id:"server-communication",children:[],level:2},{value:"KnitInit and KnitStart",id:"knitinit-and-knitstart",children:[],level:2}],m={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"controllers"},"Controllers"),(0,o.kt)("h2",{id:"controllers-defined"},"Controllers Defined"),(0,o.kt)("p",null,"Controllers are singleton provider objects that serve a specific purpose on the client. For instance, a game might have a CameraController, which manages a custom in-game camera for the player."),(0,o.kt)("p",null,"A controller is essentially the client-side equivalent of a service on the server."),(0,o.kt)("p",null,"For the sake of example, we will develop a CameraController."),(0,o.kt)("h2",{id:"creating-controllers"},"Creating Controllers"),(0,o.kt)("p",null,"In its simplest form, a controller can be created like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local CameraController = Knit.CreateController { Name = "CameraController" }\n\nreturn CameraController\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Name")," field is required. The name is how code outside of your controller will find it. This name must be unique from all other controllers. It is best practice to name your variable the same as the controller (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"local CameraController")," matches ",(0,o.kt)("inlineCode",{parentName:"p"},'Name = "CameraController"'),")."),(0,o.kt)("p",null,"The last line (",(0,o.kt)("inlineCode",{parentName:"p"},"return CameraController"),") assumes this code is written in a ModuleScript, which is best practice for containing controllers."),(0,o.kt)("h2",{id:"adding-methods"},"Adding Methods"),(0,o.kt)("p",null,"Controllers are just simple tables at the end of the day. As such, it is very easy to add methods to controllers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function CameraController:LockTo(part)\n    -- TODO: Lock camera\nend\n\nfunction CameraController:Unlock()\n    -- TODO: Unlock\nend\n")),(0,o.kt)("h2",{id:"adding-properties"},"Adding Properties"),(0,o.kt)("p",null,"Again, controllers are just tables. We can simply add in properties as we want. Let's add a property to describe how far away our camera should be from the part we lock onto, and another to describe if the camera is currently locked:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"CameraController.Distance = 20\nCameraController.Locked = false\n")),(0,o.kt)("h2",{id:"adding-basic-behavior"},"Adding Basic Behavior"),(0,o.kt)("p",null,"Let's add some basic behavior to our controller. When the camera is locked, we should set the CurrentCamera's CameraType to Scriptable, and set the CFrame to the part. When unlocked, we should set the CameraType back to Custom. We will also utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"Locked")," property so other code can check if we are currently locked to a part."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function CameraController:LockTo(part)\n    local cam = workspace.CurrentCamera\n    self.Locked = true\n    cam.CameraType = Enum.CameraType.Scriptable\n    cam.CFrame = part.CFrame * CFrame.new(0, 0, self.Distance)\nend\n\nfunction CameraController:Unlock()\n    local cam = workspace.CurrentCamera\n    self.Locked = false\n    cam.CameraType = Enum.CameraType.Custom\nend\n")),(0,o.kt)("h2",{id:"more-behavior"},"More Behavior"),(0,o.kt)("p",null,"Right now, when we lock onto a part, we simply set the camera's CFrame once. But what if the part moves? We need to constantly set the camera's CFrame to properly lock onto the part. We can bind to RenderStep to do this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local RunService = game:GetService("RunService")\n\nCameraController.RenderName = "CustomCamRender"\nCameraController.Priority = Enum.RenderPriority.Camera.Value\n\nfunction CameraController:LockTo(part)\n    if (self.Locked) then return end -- Stop if already locked\n    local cam = workspace.CurrentCamera\n    self.Locked = true\n    cam.CameraType = Enum.CameraType.Scriptable\n    -- Bind to RenderStep:\n    RunService:BindToRenderStep(self.RenderName, self.Priority, function()\n        cam.CFrame = part.CFrame * CFrame.new(0, 0, self.Distance)\n    end)\nend\n\nfunction CameraController:Unlock()\n    if (not self.Locked) then return end -- Stop if already unlocked\n    local cam = workspace.CurrentCamera\n    self.Locked = false\n    cam.CameraType = Enum.CameraType.Custom\n    -- Unbind:\n    RunService:UnbindFromRenderStep(self.RenderName)\nend\n')),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"What if we want to create an event that gets fired when the camera is locked and unlocked? We can easily do this! Just create a new signal object as a property of the controller, and fire it in our ",(0,o.kt)("inlineCode",{parentName:"p"},"LockTo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Unlock")," methods. Let's created a ",(0,o.kt)("inlineCode",{parentName:"p"},"LockedChanged")," signal. It will pass ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," when locked and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," when unlocked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local Signal = require(Knit.Util.Signal)\n\nCameraController.LockedChanged = Signal.new()\n\nfunction CameraController:LockTo(part)\n    -- Other code...\n    self.LockedChanged:Fire(true)\nend\n\nfunction CameraController:Unlock()\n    -- Other code...\n    self.LockedChanged:Fire(false)\nend\n")),(0,o.kt)("p",null,"Other code could then listen in for that event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Somewhere else on the client\nlocal CameraController = Knit.GetController("CameraController")\n\nCameraController.LockedChanged:Connect(function(isLocked)\n    print(isLocked and "Camera is now locked" or "Camera was unlocked")\nend)\n')),(0,o.kt)("h2",{id:"server-communication"},"Server Communication"),(0,o.kt)("p",null,"Knit allows client code to access certain server-side service methods and events that have been explicitly exposed."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/EasyEnemies/docs/services#client-communication"},"Services: Client Communication")," section for more info."),(0,o.kt)("p",null,"An example of accessing a service on the server might look like such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'function CameraController:KnitStart()\n    local SomeService = Knit.GetService("SomeService")\n    SomeService:DoSomething()\n    SomeService.SomeEvent:Connect(function(...) end)\n    SomeService.AnotherEvent:Fire("Some data")\nend\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"No client table forces server-only mode")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," table is omitted from the service, the service will be interpreted as server-side only. This means that the client will ",(0,o.kt)("em",{parentName:"p"},"not")," be able to access the service using ",(0,o.kt)("inlineCode",{parentName:"p"},"Knit.GetService")," on the client if there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," table present."))),(0,o.kt)("h2",{id:"knitinit-and-knitstart"},"KnitInit and KnitStart"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"KnitInit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"KnitStart")," methods are optional lifecycle methods that can be added to any controller. For more info, check out the ",(0,o.kt)("a",{parentName:"p",href:"/EasyEnemies/docs/services#knitinit-and-knitstart"},"service version")," of this section (which has the same behavior) and the ",(0,o.kt)("a",{parentName:"p",href:"/EasyEnemies/docs/executionmodel"},"execution model"),"."),(0,o.kt)("p",null,"These methods can be added just like any other method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'function CameraController:KnitStart()\n    print("CameraController KnitStart called")\nend\n\nfunction CameraController:KnitInit()\n    print("CameraController KnitInit called")\nend\n')))}p.isMDXComponent=!0}}]);