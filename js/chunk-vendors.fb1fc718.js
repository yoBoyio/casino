(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,c){var n=c("b622"),r=n("toStringTag"),i={};i[r]="z",t.exports="[object z]"===String(i)},"0366":function(t,e,c){var n=c("59ed");t.exports=function(t,e,c){if(n(t),void 0===e)return t;switch(c){case 0:return function(){return t.call(e)};case 1:return function(c){return t.call(e,c)};case 2:return function(c,n){return t.call(e,c,n)};case 3:return function(c,n,r){return t.call(e,c,n,r)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,c){var n=c("fc6a"),r=c("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):r(n(t))}},"06cf":function(t,e,c){var n=c("83ab"),r=c("d1e7"),i=c("5c6c"),a=c("fc6a"),s=c("a04b"),o=c("5135"),l=c("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=n?h:function(t,e){if(t=a(t),e=s(e),l)try{return h(t,e)}catch(c){}if(o(t,e))return i(!r.f.call(t,e),t[e])}},"0829":function(t,e,c){"use strict";(function(t){c.d(e,"a",(function(){return T})),c.d(e,"b",(function(){return Ea})),c.d(e,"c",(function(){return $i})),c.d(e,"d",(function(){return ka})),c.d(e,"e",(function(){return Wi}));var n=c("5606"),r=c("ffa6"),i=c("4fc1"),a=c("1fd5"),s=c("8f6b");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}o.UNAUTHENTICATED=new o(null),o.GOOGLE_CREDENTIALS=new o("google-credentials-uid"),o.FIRST_PARTY=new o("first-party-uid"),o.MOCK_USER=new o("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new i["b"]("@firebase/firestore");function u(){return h.logLevel}function f(t,...e){if(h.logLevel<=i["a"].DEBUG){const c=e.map(d);h.debug(`Firestore (${l}): ${t}`,...c)}}function v(t,...e){if(h.logLevel<=i["a"].ERROR){const c=e.map(d);h.error(`Firestore (${l}): ${t}`,...c)}}function m(t,...e){if(h.logLevel<=i["a"].WARN){const c=e.map(d);h.warn(`Firestore (${l}): ${t}`,...c)}}function d(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw v(e),new Error(e)}function z(t,e){t||p()}function g(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(o.UNAUTHENTICATED))}shutdown(){}}class H{constructor(t){this.t=t,this.currentUser=o.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let c=this.i;const n=t=>this.i!==c?(c=this.i,e(t)):Promise.resolve();let r=new C;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new C,t.enqueueRetryable(()=>n(this.currentUser))};const i=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await n(this.currentUser)})},a=t=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>a(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?a(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new C)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(z("string"==typeof e.accessToken),new b(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return z(null===t||"string"==typeof t),new o(t)}}class L{constructor(t,e,c){this.h=t,this.l=e,this.m=c,this.type="FirstParty",this.user=o.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class w{constructor(t,e,c){this.h=t,this.l=e,this.m=c}getToken(){return Promise.resolve(new L(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(o.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(c);else for(let n=0;n<t;n++)c[n]=Math.floor(256*Math.random());return c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A.T=-1;class _{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let c="";for(;c.length<20;){const n=S(40);for(let r=0;r<n.length;++r)c.length<20&&n[r]<e&&(c+=t.charAt(n[r]%t.length))}return c}}function k(t,e){return t<e?-1:t>e?1:0}function E(t,e,c){return t.length===e.length&&t.every((t,n)=>c(t,e[n]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new M(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return T.fromMillis(Date.now())}static fromDate(t){return T.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),c=Math.floor(1e6*(t-1e3*e));return new T(e,c)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new T(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){let e=0;for(const c in t)Object.prototype.hasOwnProperty.call(t,c)&&e++;return e}function O(t,e){for(const c in t)Object.prototype.hasOwnProperty.call(t,c)&&e(c,t[c])}function N(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t,e,c){void 0===e?e=0:e>t.length&&p(),void 0===c?c=t.length-e:c>t.length-e&&p(),this.segments=t,this.offset=e,this.len=c}get length(){return this.len}isEqual(t){return 0===R.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof R?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,c=this.limit();e<c;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const c=Math.min(t.length,e.length);for(let n=0;n<c;n++){const c=t.get(n),r=e.get(n);if(c<r)return-1;if(c>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class P extends R{construct(t,e,c){return new P(t,e,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const c of t){if(c.indexOf("//")>=0)throw new M(y.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);e.push(...c.split("/").filter(t=>t.length>0))}return new P(e)}static emptyPath(){return new P([])}}const j=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class D extends R{construct(t,e,c){return new D(t,e,c)}static isValidIdentifier(t){return j.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),D.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new D(["__name__"])}static fromServerFormat(t){const e=[];let c="",n=0;const r=()=>{if(0===c.length)throw new M(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(c),c=""};let i=!1;for(;n<t.length;){const e=t[n];if("\\"===e){if(n+1===t.length)throw new M(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[n+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new M(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);c+=e,n+=2}else"`"===e?(i=!i,n++):"."!==e||i?(c+=e,n++):(r(),n++)}if(r(),i)throw new M(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new D(e)}static emptyPath(){return new D([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.fields=t,t.sort(D.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return E(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new F(e)}static fromUint8Array(t){const e=function(t){let e="";for(let c=0;c<t.length;++c)e+=String.fromCharCode(t[c]);return e}(t);return new F(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let c=0;c<t.length;c++)e[c]=t.charCodeAt(c);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}F.EMPTY_BYTE_STRING=new F("");const q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Z(t){if(z(!!t),"string"==typeof t){let e=0;const c=q.exec(t);if(z(!!c),c[1]){let t=c[1];t=(t+"000000000").substr(0,9),e=Number(t)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:$(t.seconds),nanos:$(t.nanos)}}function $(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function B(t){return"string"==typeof t?F.fromBase64String(t):F.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){var e,c;return"server_timestamp"===(null===(c=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===c?void 0:c.stringValue)}function K(t){const e=t.mapValue.fields.__previous_value__;return G(e)?K(e):e}function W(t){const e=Z(t.mapValue.fields.__local_write_time__.timestampValue);return new T(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return null==t}function Y(t){return 0===t&&1/t==-1/0}function J(t){return"number"==typeof t&&Number.isInteger(t)&&!Y(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.path=t}static fromPath(t){return new Q(P.fromString(t))}static fromName(t){return new Q(P.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===P.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return P.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Q(new P(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?G(t)?4:10:p()}function et(t,e){const c=tt(t);if(c!==tt(e))return!1;switch(c){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return W(t).isEqual(W(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const c=Z(t.timestampValue),n=Z(e.timestampValue);return c.seconds===n.seconds&&c.nanos===n.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return B(t.bytesValue).isEqual(B(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return $(t.geoPointValue.latitude)===$(e.geoPointValue.latitude)&&$(t.geoPointValue.longitude)===$(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return $(t.integerValue)===$(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const c=$(t.doubleValue),n=$(e.doubleValue);return c===n?Y(c)===Y(n):isNaN(c)&&isNaN(n)}return!1}(t,e);case 9:return E(t.arrayValue.values||[],e.arrayValue.values||[],et);case 10:return function(t,e){const c=t.mapValue.fields||{},n=e.mapValue.fields||{};if(x(c)!==x(n))return!1;for(const r in c)if(c.hasOwnProperty(r)&&(void 0===n[r]||!et(c[r],n[r])))return!1;return!0}(t,e);default:return p()}}function ct(t,e){return void 0!==(t.values||[]).find(t=>et(t,e))}function nt(t,e){const c=tt(t),n=tt(e);if(c!==n)return k(c,n);switch(c){case 0:return 0;case 1:return k(t.booleanValue,e.booleanValue);case 2:return function(t,e){const c=$(t.integerValue||t.doubleValue),n=$(e.integerValue||e.doubleValue);return c<n?-1:c>n?1:c===n?0:isNaN(c)?isNaN(n)?0:-1:1}(t,e);case 3:return rt(t.timestampValue,e.timestampValue);case 4:return rt(W(t),W(e));case 5:return k(t.stringValue,e.stringValue);case 6:return function(t,e){const c=B(t),n=B(e);return c.compareTo(n)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const c=t.split("/"),n=e.split("/");for(let r=0;r<c.length&&r<n.length;r++){const t=k(c[r],n[r]);if(0!==t)return t}return k(c.length,n.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const c=k($(t.latitude),$(e.latitude));return 0!==c?c:k($(t.longitude),$(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const c=t.values||[],n=e.values||[];for(let r=0;r<c.length&&r<n.length;++r){const t=nt(c[r],n[r]);if(t)return t}return k(c.length,n.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const c=t.fields||{},n=Object.keys(c),r=e.fields||{},i=Object.keys(r);n.sort(),i.sort();for(let a=0;a<n.length&&a<i.length;++a){const t=k(n[a],i[a]);if(0!==t)return t;const e=nt(c[n[a]],r[i[a]]);if(0!==e)return e}return k(n.length,i.length)}(t.mapValue,e.mapValue);default:throw p()}}function rt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return k(t,e);const c=Z(t),n=Z(e),r=k(c.seconds,n.seconds);return 0!==r?r:k(c.nanos,n.nanos)}function it(t){return at(t)}function at(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Z(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?B(t.bytesValue).toBase64():"referenceValue"in t?(c=t.referenceValue,Q.fromName(c).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",c=!0;for(const n of t.values||[])c?c=!1:e+=",",e+=at(n);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let c="{",n=!0;for(const r of e)n?n=!1:c+=",",c+=`${r}:${at(t.fields[r])}`;return c+"}"}(t.mapValue):p();var e,c}function st(t){return!!t&&"integerValue"in t}function ot(t){return!!t&&"arrayValue"in t}function lt(t){return!!t&&"nullValue"in t}function ht(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ut(t){return!!t&&"mapValue"in t}function ft(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return O(t.mapValue.fields,(t,c)=>e.mapValue.fields[t]=ft(c)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let c=0;c<(t.arrayValue.values||[]).length;++c)e.arrayValue.values[c]=ft(t.arrayValue.values[c]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let c=0;c<t.length-1;++c)if(e=(e.mapValue.fields||{})[t.get(c)],!ut(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ft(e)}setAll(t){let e=D.emptyPath(),c={},n=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,c,n),c={},n=[],e=r.popLast()}t?c[r.lastSegment()]=ft(t):n.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,c,n)}delete(t){const e=this.field(t.popLast());ut(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return et(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let c=0;c<t.length;++c){let n=e.mapValue.fields[t.get(c)];ut(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},e.mapValue.fields[t.get(c)]=n),e=n}return e.mapValue.fields}applyChanges(t,e,c){O(e,(e,c)=>t[e]=c);for(const n of c)delete t[n]}clone(){return new vt(ft(this.value))}}function mt(t){const e=[];return O(t.fields,(t,c)=>{const n=new D([t]);if(ut(c)){const t=mt(c.mapValue).fields;if(0===t.length)e.push(n);else for(const c of t)e.push(n.child(c))}else e.push(n)}),new U(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dt{constructor(t,e,c,n,r){this.key=t,this.documentType=e,this.version=c,this.data=n,this.documentState=r}static newInvalidDocument(t){return new dt(t,0,I.min(),vt.empty(),0)}static newFoundDocument(t,e,c){return new dt(t,1,e,c,0)}static newNoDocument(t,e){return new dt(t,2,e,vt.empty(),0)}static newUnknownDocument(t,e){return new dt(t,3,e,vt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof dt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new dt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e=null,c=[],n=[],r=null,i=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=c,this.filters=n,this.limit=r,this.startAt=i,this.endAt=a,this.A=null}}function zt(t,e=null,c=[],n=[],r=null,i=null,a=null){return new pt(t,e,c,n,r,i,a)}function gt(t){const e=g(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Vt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),X(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=It(e.startAt)),e.endAt&&(t+="|ub:",t+=It(e.endAt)),e.A=t}return e.A}function yt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${it(e.value)}`;var e}).join(", ")}]`),X(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+It(t.startAt)),t.endAt&&(e+=", endAt: "+It(t.endAt)),`Target(${e})`}function Mt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ot(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(c=t.filters[r],n=e.filters[r],c.op!==n.op||!c.field.isEqual(n.field)||!et(c.value,n.value))return!1;var c,n;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rt(t.startAt,e.startAt)&&Rt(t.endAt,e.endAt)}function Ct(t){return Q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class bt extends class{}{constructor(t,e,c){super(),this.field=t,this.op=e,this.value=c}static create(t,e,c){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,c):new Ht(t,e,c):"array-contains"===e?new St(t,c):"in"===e?new _t(t,c):"not-in"===e?new kt(t,c):"array-contains-any"===e?new Et(t,c):new bt(t,e,c)}static R(t,e,c){return"in"===e?new Lt(t,c):new wt(t,c)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(nt(e,this.value)):null!==e&&tt(this.value)===tt(e)&&this.P(nt(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return p()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Vt(t){return t.field.canonicalString()+t.op.toString()+it(t.value)}class Ht extends bt{constructor(t,e,c){super(t,e,c),this.key=Q.fromName(c.referenceValue)}matches(t){const e=Q.comparator(t.key,this.key);return this.P(e)}}class Lt extends bt{constructor(t,e){super(t,"in",e),this.keys=At("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wt extends bt{constructor(t,e){super(t,"not-in",e),this.keys=At("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function At(t,e){var c;return((null===(c=e.arrayValue)||void 0===c?void 0:c.values)||[]).map(t=>Q.fromName(t.referenceValue))}class St extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ot(e)&&ct(e.arrayValue,this.value)}}class _t extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ct(this.value.arrayValue,e)}}class kt extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ct(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ct(this.value.arrayValue,e)}}class Et extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ot(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ct(this.value.arrayValue,t))}}class Tt{constructor(t,e){this.position=t,this.before=e}}function It(t){return`${t.before?"b":"a"}:${t.position.map(t=>it(t)).join(",")}`}class xt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ot(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Nt(t,e,c){let n=0;for(let r=0;r<t.position.length;r++){const i=e[r],a=t.position[r];if(n=i.field.isKeyField()?Q.comparator(Q.fromName(a.referenceValue),c.key):nt(a,c.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return t.before?n<=0:n<0}function Rt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let c=0;c<t.position.length;c++)if(!et(t.position[c],e.position[c]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e=null,c=[],n=[],r=null,i="F",a=null,s=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=c,this.filters=n,this.limit=r,this.limitType=i,this.startAt=a,this.endAt=s,this.V=null,this.S=null,this.startAt,this.endAt}}function jt(t,e,c,n,r,i,a,s){return new Pt(t,e,c,n,r,i,a,s)}function Dt(t){return new Pt(t)}function Ut(t){return!X(t.limit)&&"F"===t.limitType}function Ft(t){return!X(t.limit)&&"L"===t.limitType}function qt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zt(t){for(const e of t.filters)if(e.v())return e.field;return null}function $t(t){return null!==t.collectionGroup}function Bt(t){const e=g(t);if(null===e.V){e.V=[];const t=Zt(e),c=qt(e);if(null!==t&&null===c)t.isKeyField()||e.V.push(new xt(t)),e.V.push(new xt(D.keyField(),"asc"));else{let t=!1;for(const c of e.explicitOrderBy)e.V.push(c),c.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new xt(D.keyField(),t))}}}return e.V}function Gt(t){const e=g(t);if(!e.S)if("F"===e.limitType)e.S=zt(e.path,e.collectionGroup,Bt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Bt(e)){const e="desc"===r.dir?"asc":"desc";t.push(new xt(r.field,e))}const c=e.endAt?new Tt(e.endAt.position,!e.endAt.before):null,n=e.startAt?new Tt(e.startAt.position,!e.startAt.before):null;e.S=zt(e.path,e.collectionGroup,t,e.filters,e.limit,c,n)}return e.S}function Kt(t,e,c){return new Pt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,c,t.startAt,t.endAt)}function Wt(t,e){return Mt(Gt(t),Gt(e))&&t.limitType===e.limitType}function Xt(t){return`${gt(Gt(t))}|lt:${t.limitType}`}function Yt(t){return`Query(target=${yt(Gt(t))}; limitType=${t.limitType})`}function Jt(t,e){return e.isFoundDocument()&&function(t,e){const c=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(c):Q.isDocumentKey(t.path)?t.path.isEqual(c):t.path.isImmediateParentOf(c)}(t,e)&&function(t,e){for(const c of t.explicitOrderBy)if(!c.field.isKeyField()&&null===e.data.field(c.field))return!1;return!0}(t,e)&&function(t,e){for(const c of t.filters)if(!c.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Nt(t.startAt,Bt(t),e))&&(!t.endAt||!Nt(t.endAt,Bt(t),e))}(t,e)}function Qt(t){return(e,c)=>{let n=!1;for(const r of Bt(t)){const t=te(r,e,c);if(0!==t)return t;n=n||r.field.isKeyField()}return 0}}function te(t,e,c){const n=t.field.isKeyField()?Q.comparator(e.key,c.key):function(t,e,c){const n=e.data.field(t),r=c.data.field(t);return null!==n&&null!==r?nt(n,r):p()}(t.field,e,c);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return p()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Y(e)?"-0":e}}function ce(t){return{integerValue:""+t}}function ne(t,e){return J(e)?ce(e):ee(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this._=void 0}}function ie(t,e,c){return t instanceof oe?function(t,e){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(c.fields.__previous_value__=e),{mapValue:c}}(c,e):t instanceof le?he(t,e):t instanceof ue?fe(t,e):function(t,e){const c=se(t,e),n=me(c)+me(t.C);return st(c)&&st(t.C)?ce(n):ee(t.N,n)}(t,e)}function ae(t,e,c){return t instanceof le?he(t,e):t instanceof ue?fe(t,e):c}function se(t,e){return t instanceof ve?st(c=e)||function(t){return!!t&&"doubleValue"in t}(c)?e:{integerValue:0}:null;var c}class oe extends re{}class le extends re{constructor(t){super(),this.elements=t}}function he(t,e){const c=de(e);for(const n of t.elements)c.some(t=>et(t,n))||c.push(n);return{arrayValue:{values:c}}}class ue extends re{constructor(t){super(),this.elements=t}}function fe(t,e){let c=de(e);for(const n of t.elements)c=c.filter(t=>!et(t,n));return{arrayValue:{values:c}}}class ve extends re{constructor(t,e){super(),this.N=t,this.C=e}}function me(t){return $(t.integerValue||t.doubleValue)}function de(t){return ot(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof le&&e instanceof le||t instanceof ue&&e instanceof ue?E(t.elements,e.elements,et):t instanceof ve&&e instanceof ve?et(t.C,e.C):t instanceof oe&&e instanceof oe}(t.transform,e.transform)}class ze{constructor(t,e){this.version=t,this.transformResults=e}}class ge{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ge}static exists(t){return new ge(void 0,t)}static updateTime(t){return new ge(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ye(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Me{}function Ce(t,e,c){t instanceof we?function(t,e,c){const n=t.value.clone(),r=_e(t.fieldTransforms,e,c.transformResults);n.setAll(r),e.convertToFoundDocument(c.version,n).setHasCommittedMutations()}(t,e,c):t instanceof Ae?function(t,e,c){if(!ye(t.precondition,e))return void e.convertToUnknownDocument(c.version);const n=_e(t.fieldTransforms,e,c.transformResults),r=e.data;r.setAll(Se(t)),r.setAll(n),e.convertToFoundDocument(c.version,r).setHasCommittedMutations()}(t,e,c):function(t,e,c){e.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,c)}function be(t,e,c){t instanceof we?function(t,e,c){if(!ye(t.precondition,e))return;const n=t.value.clone(),r=ke(t.fieldTransforms,c,e);n.setAll(r),e.convertToFoundDocument(Le(e),n).setHasLocalMutations()}(t,e,c):t instanceof Ae?function(t,e,c){if(!ye(t.precondition,e))return;const n=ke(t.fieldTransforms,c,e),r=e.data;r.setAll(Se(t)),r.setAll(n),e.convertToFoundDocument(Le(e),r).setHasLocalMutations()}(t,e,c):function(t,e){ye(t.precondition,e)&&e.convertToNoDocument(I.min())}(t,e)}function Ve(t,e){let c=null;for(const n of t.fieldTransforms){const t=e.data.field(n.field),r=se(n.transform,t||null);null!=r&&(null==c&&(c=vt.empty()),c.set(n.field,r))}return c||null}function He(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&E(t,e,(t,e)=>pe(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Le(t){return t.isFoundDocument()?t.version:I.min()}class we extends Me{constructor(t,e,c,n=[]){super(),this.key=t,this.value=e,this.precondition=c,this.fieldTransforms=n,this.type=0}}class Ae extends Me{constructor(t,e,c,n,r=[]){super(),this.key=t,this.data=e,this.fieldMask=c,this.precondition=n,this.fieldTransforms=r,this.type=1}}function Se(t){const e=new Map;return t.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){const n=t.data.field(c);e.set(c,n)}}),e}function _e(t,e,c){const n=new Map;z(t.length===c.length);for(let r=0;r<c.length;r++){const i=t[r],a=i.transform,s=e.data.field(i.field);n.set(i.field,ae(a,s,c[r]))}return n}function ke(t,e,c){const n=new Map;for(const r of t){const t=r.transform,i=c.data.field(r.field);n.set(r.field,ie(t,i,e))}return n}class Ee extends Me{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Te extends Me{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,Oe;function Ne(t){switch(t){case y.OK:return p();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0;default:return p()}}function Re(t){if(void 0===t)return v("GRPC error has no .code"),y.UNKNOWN;switch(t){case xe.OK:return y.OK;case xe.CANCELLED:return y.CANCELLED;case xe.UNKNOWN:return y.UNKNOWN;case xe.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case xe.INTERNAL:return y.INTERNAL;case xe.UNAVAILABLE:return y.UNAVAILABLE;case xe.UNAUTHENTICATED:return y.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case xe.NOT_FOUND:return y.NOT_FOUND;case xe.ALREADY_EXISTS:return y.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return y.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case xe.ABORTED:return y.ABORTED;case xe.OUT_OF_RANGE:return y.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return y.UNIMPLEMENTED;case xe.DATA_LOSS:return y.DATA_LOSS;default:return p()}}(Oe=xe||(xe={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe{constructor(t,e){this.comparator=t,this.root=e||De.EMPTY}insert(t,e){return new Pe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,De.BLACK,null,null))}remove(t){return new Pe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,De.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const c=this.comparator(t,e.key);if(0===c)return e.value;c<0?e=e.left:c>0&&(e=e.right)}return null}indexOf(t){let e=0,c=this.root;for(;!c.isEmpty();){const n=this.comparator(t,c.key);if(0===n)return e+c.left.size;n<0?c=c.left:(e+=c.left.size+1,c=c.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,c)=>(t(e,c),!1))}toString(){const t=[];return this.inorderTraversal((e,c)=>(t.push(`${e}:${c}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new je(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new je(this.root,t,this.comparator,!1)}getReverseIterator(){return new je(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new je(this.root,t,this.comparator,!0)}}class je{constructor(t,e,c,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?c(t.key,e):1,n&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class De{constructor(t,e,c,n,r){this.key=t,this.value=e,this.color=null!=c?c:De.RED,this.left=null!=n?n:De.EMPTY,this.right=null!=r?r:De.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,c,n,r){return new De(null!=t?t:this.key,null!=e?e:this.value,null!=c?c:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,c){let n=this;const r=c(t,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(t,e,c),null):0===r?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(t,e,c)),n.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let c,n=this;if(e(t,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(t,n.key)){if(n.right.isEmpty())return De.EMPTY;c=n.right.min(),n=n.copy(c.key,c.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const t=this.left.check();if(t!==this.right.check())throw p();return t+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1,De.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(t,e,c,n,r){return this}insert(t,e,c){return new De(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(t){this.comparator=t,this.data=new Pe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,c)=>(t(e),!1))}forEachInRange(t,e){const c=this.data.getIteratorFrom(t[0]);for(;c.hasNext();){const n=c.getNext();if(this.comparator(n.key,t[1])>=0)return;e(n.key)}}forEachWhile(t,e){let c;for(c=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();c.hasNext();)if(!t(c.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fe(this.data.getIterator())}getIteratorFrom(t){return new Fe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ue))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),c=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=c.getNext().key;if(0!==this.comparator(t,n))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ue(this.comparator);return e.data=t,e}}class Fe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new Pe(Q.comparator);function Ze(){return qe}const $e=new Pe(Q.comparator);function Be(){return $e}const Ge=new Pe(Q.comparator);function Ke(){return Ge}const We=new Ue(Q.comparator);function Xe(...t){let e=We;for(const c of t)e=e.add(c);return e}const Ye=new Ue(k);function Je(){return Ye}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,e,c,n,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=c,this.documentUpdates=n,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const c=new Map;return c.set(t,tc.createSynthesizedTargetChangeForCurrentChange(t,e)),new Qe(I.min(),c,Je(),Ze(),Xe())}}class tc{constructor(t,e,c,n,r){this.resumeToken=t,this.current=e,this.addedDocuments=c,this.modifiedDocuments=n,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new tc(F.EMPTY_BYTE_STRING,e,Xe(),Xe(),Xe())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,c,n){this.k=t,this.removedTargetIds=e,this.key=c,this.$=n}}class cc{constructor(t,e){this.targetId=t,this.O=e}}class nc{constructor(t,e,c=F.EMPTY_BYTE_STRING,n=null){this.state=t,this.targetIds=e,this.resumeToken=c,this.cause=n}}class rc{constructor(){this.F=0,this.M=sc(),this.L=F.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Xe(),e=Xe(),c=Xe();return this.M.forEach((n,r)=>{switch(r){case 0:t=t.add(n);break;case 2:e=e.add(n);break;case 1:c=c.add(n);break;default:p()}}),new tc(this.L,this.B,t,e,c)}G(){this.U=!1,this.M=sc()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class ic{constructor(t){this.tt=t,this.et=new Map,this.nt=Ze(),this.st=ac(),this.it=new Ue(k)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const c=this.ut(e);switch(t.state){case 0:this.ht(e)&&c.j(t.resumeToken);break;case 1:c.X(),c.q||c.G(),c.j(t.resumeToken);break;case 2:c.X(),c.q||this.removeTarget(e);break;case 3:this.ht(e)&&(c.Z(),c.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),c.j(t.resumeToken));break;default:p()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,c)=>{this.ht(c)&&e(c)})}ft(t){const e=t.targetId,c=t.O.count,n=this.dt(e);if(n){const t=n.target;if(Ct(t))if(0===c){const c=new Q(t.path);this.at(e,c,dt.newNoDocument(c,I.min()))}else z(1===c);else this.wt(e)!==c&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((c,n)=>{const r=this.dt(n);if(r){if(c.current&&Ct(r.target)){const e=new Q(r.target.path);null!==this.nt.get(e)||this.gt(n,e)||this.at(n,e,dt.newNoDocument(e,t))}c.K&&(e.set(n,c.W()),c.G())}});let c=Xe();this.st.forEach((t,e)=>{let n=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(n=!1,!1)}),n&&(c=c.add(t))});const n=new Qe(t,e,this.it,this.nt,c);return this.nt=Ze(),this.st=ac(),this.it=new Ue(k),n}ot(t,e){if(!this.ht(t))return;const c=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,c),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,c){if(!this.ht(t))return;const n=this.ut(t);this.gt(t,e)?n.H(e,1):n.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),c&&(this.nt=this.nt.insert(e,c))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new rc,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Ue(k),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new rc),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function ac(){return new Pe(Q.comparator)}function sc(){return new Pe(Q.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),lc=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class hc{constructor(t,e){this.databaseId=t,this.D=e}}function uc(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fc(t,e){return t.D?e.toBase64():e.toUint8Array()}function vc(t,e){return uc(t,e.toTimestamp())}function mc(t){return z(!!t),I.fromTimestamp(function(t){const e=Z(t);return new T(e.seconds,e.nanos)}(t))}function dc(t,e){return function(t){return new P(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function pc(t){const e=P.fromString(t);return z(Uc(e)),e}function zc(t,e){return dc(t.databaseId,e.path)}function gc(t,e){const c=pc(e);if(c.get(1)!==t.databaseId.projectId)throw new M(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+t.databaseId.projectId);if(c.get(3)!==t.databaseId.database)throw new M(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+t.databaseId.database);return new Q(bc(c))}function yc(t,e){return dc(t.databaseId,e)}function Mc(t){const e=pc(t);return 4===e.length?P.emptyPath():bc(e)}function Cc(t){return new P(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bc(t){return z(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Vc(t,e,c){return{name:zc(t,e),fields:c.value.mapValue.fields}}function Hc(t,e){let c;if("targetChange"in e){e.targetChange;const n=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:p()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.D?(z(void 0===e||"string"==typeof e),F.fromBase64String(e||"")):(z(void 0===e||e instanceof Uint8Array),F.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,s=a&&function(t){const e=void 0===t.code?y.UNKNOWN:Re(t.code);return new M(e,t.message||"")}(a);c=new nc(n,r,i,s||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=gc(t,n.document.name),i=mc(n.document.updateTime),a=new vt({mapValue:{fields:n.document.fields}}),s=dt.newFoundDocument(r,i,a),o=n.targetIds||[],l=n.removedTargetIds||[];c=new ec(o,l,s.key,s)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=gc(t,n.document),i=n.readTime?mc(n.readTime):I.min(),a=dt.newNoDocument(r,i),s=n.removedTargetIds||[];c=new ec([],s,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=gc(t,n.document),i=n.removedTargetIds||[];c=new ec([],i,r,null)}else{if(!("filter"in e))return p();{e.filter;const t=e.filter;t.targetId;const n=t.count||0,r=new Ie(n),i=t.targetId;c=new cc(i,r)}}return c}function Lc(t,e){let c;if(e instanceof we)c={update:Vc(t,e.key,e.value)};else if(e instanceof Ee)c={delete:zc(t,e.key)};else if(e instanceof Ae)c={update:Vc(t,e.key,e.data),updateMask:Dc(e.fieldMask)};else{if(!(e instanceof Te))return p();c={verify:zc(t,e.key)}}return e.fieldTransforms.length>0&&(c.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const c=e.transform;if(c instanceof oe)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof le)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ue)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ve)return{fieldPath:e.field.canonicalString(),increment:c.C};throw p()}(0,t))),e.precondition.isNone||(c.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:vc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:p()}(t,e.precondition)),c}function wc(t,e){return t&&t.length>0?(z(void 0!==e),t.map(t=>function(t,e){let c=t.updateTime?mc(t.updateTime):mc(e);return c.isEqual(I.min())&&(c=mc(e)),new ze(c,t.transformResults||[])}(t,e))):[]}function Ac(t,e){return{documents:[yc(t,e.path)]}}function Sc(t,e){const c={structuredQuery:{}},n=e.path;null!==e.collectionGroup?(c.parent=yc(t,n),c.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(c.parent=yc(t,n.popLast()),c.structuredQuery.from=[{collectionId:n.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(ht(t.value))return{unaryFilter:{field:Nc(t.field),op:"IS_NAN"}};if(lt(t.value))return{unaryFilter:{field:Nc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ht(t.value))return{unaryFilter:{field:Nc(t.field),op:"IS_NOT_NAN"}};if(lt(t.value))return{unaryFilter:{field:Nc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nc(t.field),op:Oc(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(c.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Nc(t.field),direction:xc(t.dir)}}(t))}(e.orderBy);i&&(c.structuredQuery.orderBy=i);const a=function(t,e){return t.D||X(e)?e:{value:e}}(t,e.limit);return null!==a&&(c.structuredQuery.limit=a),e.startAt&&(c.structuredQuery.startAt=Tc(e.startAt)),e.endAt&&(c.structuredQuery.endAt=Tc(e.endAt)),c}function _c(t){let e=Mc(t.parent);const c=t.structuredQuery,n=c.from?c.from.length:0;let r=null;if(n>0){z(1===n);const t=c.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];c.where&&(i=Ec(c.where));let a=[];c.orderBy&&(a=c.orderBy.map(t=>function(t){return new xt(Rc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let s=null;c.limit&&(s=function(t){let e;return e="object"==typeof t?t.value:t,X(e)?null:e}(c.limit));let o=null;c.startAt&&(o=Ic(c.startAt));let l=null;return c.endAt&&(l=Ic(c.endAt)),jt(e,r,a,i,s,"F",o,l)}function kc(t,e){const c=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return p()}}(0,e.purpose);return null==c?null:{"goog-listen-tags":c}}function Ec(t){return t?void 0!==t.unaryFilter?[jc(t)]:void 0!==t.fieldFilter?[Pc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Ec(t)).reduce((t,e)=>t.concat(e)):p():[]}function Tc(t){return{before:t.before,values:t.position}}function Ic(t){const e=!!t.before,c=t.values||[];return new Tt(c,e)}function xc(t){return oc[t]}function Oc(t){return lc[t]}function Nc(t){return{fieldPath:t.canonicalString()}}function Rc(t){return D.fromServerFormat(t.fieldPath)}function Pc(t){return bt.create(Rc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return p()}}(t.fieldFilter.op),t.fieldFilter.value)}function jc(t){switch(t.unaryFilter.op){case"IS_NAN":Rc(t.unaryFilter.field);return bt.create(n["d"],"==",{doubleValue:NaN});case"IS_NULL":Rc(t.unaryFilter.field);return bt.create(n["c"],"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":Rc(t.unaryFilter.field);return bt.create(n["g"],"!=",{doubleValue:NaN});case"IS_NOT_NULL":Rc(t.unaryFilter.field);return bt.create(n["a"],"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return p()}}function Dc(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Uc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){let e="";for(let c=0;c<t.length;c++)e.length>0&&(e=Zc(e)),e=qc(t.get(c),e);return Zc(e)}function qc(t,e){let c=e;const n=t.length;for(let r=0;r<n;r++){const e=t.charAt(r);switch(e){case"\0":c+="";break;case"":c+="";break;default:c+=e}}return c}function Zc(t){return t+""}class $c{constructor(t,e,c){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=c}}$c.store="owner",$c.key="owner";class Bc{constructor(t,e,c){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=c}}Bc.store="mutationQueues",Bc.keyPath="userId";class Gc{constructor(t,e,c,n,r){this.userId=t,this.batchId=e,this.localWriteTimeMs=c,this.baseMutations=n,this.mutations=r}}Gc.store="mutations",Gc.keyPath="batchId",Gc.userMutationsIndex="userMutationsIndex",Gc.userMutationsKeyPath=["userId","batchId"];class Kc{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Fc(e)]}static key(t,e,c){return[t,Fc(e),c]}}Kc.store="documentMutations",Kc.PLACEHOLDER=new Kc;class Wc{constructor(t,e,c,n,r,i){this.unknownDocument=t,this.noDocument=e,this.document=c,this.hasCommittedMutations=n,this.readTime=r,this.parentPath=i}}Wc.store="remoteDocuments",Wc.readTimeIndex="readTimeIndex",Wc.readTimeIndexPath="readTime",Wc.collectionReadTimeIndex="collectionReadTimeIndex",Wc.collectionReadTimeIndexPath=["parentPath","readTime"];class Xc{constructor(t){this.byteSize=t}}Xc.store="remoteDocumentGlobal",Xc.key="remoteDocumentGlobalKey";class Yc{constructor(t,e,c,n,r,i,a){this.targetId=t,this.canonicalId=e,this.readTime=c,this.resumeToken=n,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=i,this.query=a}}Yc.store="targets",Yc.keyPath="targetId",Yc.queryTargetsIndexName="queryTargetsIndex",Yc.queryTargetsKeyPath=["canonicalId","targetId"];class Jc{constructor(t,e,c){this.targetId=t,this.path=e,this.sequenceNumber=c}}Jc.store="targetDocuments",Jc.keyPath=["targetId","path"],Jc.documentTargetsIndex="documentTargetsIndex",Jc.documentTargetsKeyPath=["path","targetId"];class Qc{constructor(t,e,c,n){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=c,this.targetCount=n}}Qc.key="targetGlobalKey",Qc.store="targetGlobal";class tn{constructor(t,e){this.collectionId=t,this.parent=e}}tn.store="collectionParents",tn.keyPath=["collectionId","parent"];class en{constructor(t,e,c,n){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=c,this.inForeground=n}}en.store="clientMetadata",en.keyPath="clientId";class cn{constructor(t,e,c){this.bundleId=t,this.createTime=e,this.version=c}}cn.store="bundles",cn.keyPath="bundleId";class nn{constructor(t,e,c){this.name=t,this.readTime=e,this.bundledQuery=c}}nn.store="namedQueries",nn.keyPath="name";Bc.store,Gc.store,Kc.store,Wc.store,Yc.store,$c.store,Qc.store,Jc.store,en.store,Xc.store,tn.store,cn.store,nn.store;const rn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class an{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&p(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new sn((c,n)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(c,n)},this.catchCallback=t=>{this.wrapFailure(e,t).next(c,n)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof sn?e:sn.resolve(e)}catch(t){return sn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):sn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):sn.reject(e)}static resolve(t){return new sn((e,c)=>{e(t)})}static reject(t){return new sn((e,c)=>{c(t)})}static waitFor(t){return new sn((e,c)=>{let n=0,r=0,i=!1;t.forEach(t=>{++n,t.next(()=>{++r,i&&r===n&&e()},t=>c(t))}),i=!0,r===n&&e()})}static or(t){let e=sn.resolve(!1);for(const c of t)e=e.next(t=>t?sn.resolve(t):c());return e}static forEach(t,e){const c=[];return t.forEach((t,n)=>{c.push(e.call(this,t,n))}),this.waitFor(c)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln{constructor(t,e,c,n){this.batchId=t,this.localWriteTime=e,this.baseMutations=c,this.mutations=n}applyToRemoteDocument(t,e){const c=e.mutationResults;for(let n=0;n<this.mutations.length;n++){const e=this.mutations[n];e.key.isEqual(t.key)&&Ce(e,t,c[n])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&be(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&be(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const c=t.get(e.key),n=c;this.applyToLocalView(n),c.isValidDocument()||n.convertToNoDocument(I.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Xe())}isEqual(t){return this.batchId===t.batchId&&E(this.mutations,t.mutations,(t,e)=>He(t,e))&&E(this.baseMutations,t.baseMutations,(t,e)=>He(t,e))}}class hn{constructor(t,e,c,n){this.batch=t,this.commitVersion=e,this.mutationResults=c,this.docVersions=n}static from(t,e,c){z(t.mutations.length===c.length);let n=Ke();const r=t.mutations;for(let i=0;i<r.length;i++)n=n.insert(r[i].key,c[i].version);return new hn(t,e,c,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e,c,n,r=I.min(),i=I.min(),a=F.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=c,this.sequenceNumber=n,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(t){return new un(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this.Wt=t}}function vn(t){const e=_c({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Kt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn{constructor(){this.Gt=new dn}addToCollectionParentIndex(t,e){return this.Gt.add(e),sn.resolve()}getCollectionParents(t,e){return sn.resolve(this.Gt.getEntries(e))}}class dn{constructor(){this.index={}}add(t){const e=t.lastSegment(),c=t.popLast(),n=this.index[e]||new Ue(P.comparator),r=!n.has(c);return this.index[e]=n.add(c),r}has(t){const e=t.lastSegment(),c=t.popLast(),n=this.index[e];return n&&n.has(c)}getEntries(t){return(this.index[t]||new Ue(P.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e,c){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=c}static withCacheSize(t){return new pn(t,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(41943040,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new zn(0)}static ie(){return new zn(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gn(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==rn)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),c=this.inner[e];if(void 0!==c)for(const[n,r]of c)if(this.equalsFn(n,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const c=this.mapKeyFn(t),n=this.inner[c];if(void 0!==n){for(let c=0;c<n.length;c++)if(this.equalsFn(n[c][0],t))return void(n[c]=[t,e]);n.push([t,e])}else this.inner[c]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),c=this.inner[e];if(void 0===c)return!1;for(let n=0;n<c.length;n++)if(this.equalsFn(c[n][0],t))return 1===c.length?delete this.inner[e]:c.splice(n,1),!0;return!1}forEach(t){O(this.inner,(e,c)=>{for(const[n,r]of c)t(n,r)})}isEmpty(){return N(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.changes=new yn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:I.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:dt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const c=this.changes.get(e);return void 0!==c?sn.resolve(c.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn{constructor(t,e,c){this.He=t,this.In=e,this.Ht=c}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(c=>this.Rn(t,e,c))}Rn(t,e,c){return this.He.getEntry(t,e).next(t=>{for(const e of c)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,c)=>{for(const n of e)n.applyToLocalView(c)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,c){return function(t){return Q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):$t(e)?this.Sn(t,e,c):this.Dn(t,e,c)}Vn(t,e){return this.An(t,new Q(e)).next(t=>{let e=Be();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,c){const n=e.collectionGroup;let r=Be();return this.Ht.getCollectionParents(t,n).next(i=>sn.forEach(i,i=>{const a=function(t,e){return new Pt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(n));return this.Dn(t,a,c).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}Dn(t,e,c){let n,r;return this.He.getDocumentsMatchingQuery(t,e,c).next(c=>(n=c,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(r=e,this.Cn(t,r,n).next(t=>{n=t;for(const e of r)for(const t of e.mutations){const c=t.key;let r=n.get(c);null==r&&(r=dt.newInvalidDocument(c),n=n.insert(c,r)),be(t,r,e.localWriteTime),r.isFoundDocument()||(n=n.remove(c))}}))).next(()=>(n.forEach((t,c)=>{Jt(e,c)||(n=n.remove(t))}),n))}Cn(t,e,c){let n=Xe();for(const i of e)for(const t of i.mutations)t instanceof Ae&&null===c.get(t.key)&&(n=n.add(t.key));let r=c;return this.He.getEntries(t,n).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(r=r.insert(t,e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e,c,n){this.targetId=t,this.fromCache=e,this.Nn=c,this.xn=n}static kn(t,e){let c=Xe(),n=Xe();for(const r of e.docChanges)switch(r.type){case 0:c=c.add(r.doc.key);break;case 1:n=n.add(r.doc.key)}return new bn(t,e.fromCache,c,n)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,c,n){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||c.isEqual(I.min())?this.Fn(t,e):this.On.Pn(t,n).next(r=>{const a=this.Mn(e,r);return(Ut(e)||Ft(e))&&this.Ln(e.limitType,a,n,c)?this.Fn(t,e):(u()<=i["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",c.toString(),Yt(e)),this.On.getDocumentsMatchingQuery(t,e,c).next(t=>(a.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let c=new Ue(Qt(t));return e.forEach((e,n)=>{Jt(t,n)&&(c=c.add(n))}),c}Ln(t,e,c,n){if(c.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(n)>0)}Fn(t,e){return u()<=i["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Yt(e)),this.On.getDocumentsMatchingQuery(t,e,I.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e,c,n){this.persistence=t,this.Bn=e,this.N=n,this.Un=new Pe(k),this.qn=new yn(t=>gt(t),Mt),this.Kn=I.min(),this.In=t.getMutationQueue(c),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Cn(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function Ln(t,e,c,n){return new Hn(t,e,c,n)}async function wn(t,e){const c=g(t);let n=c.In,r=c.Qn;const i=await c.persistence.runTransaction("Handle user change","readonly",t=>{let i;return c.In.getAllMutationBatches(t).next(a=>(i=a,n=c.persistence.getMutationQueue(e),r=new Cn(c.jn,n,c.persistence.getIndexManager()),n.getAllMutationBatches(t))).next(e=>{const c=[],n=[];let a=Xe();for(const t of i){c.push(t.batchId);for(const e of t.mutations)a=a.add(e.key)}for(const t of e){n.push(t.batchId);for(const e of t.mutations)a=a.add(e.key)}return r.Pn(t,a).next(t=>({Wn:t,removedBatchIds:c,addedBatchIds:n}))})});return c.In=n,c.Qn=r,c.Bn.$n(c.Qn),i}function An(t,e){const c=g(t);return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const n=e.batch.keys(),r=c.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,c,n){const r=c.batch,i=r.keys();let a=sn.resolve();return i.forEach(t=>{a=a.next(()=>n.getEntry(e,t)).next(e=>{const i=c.docVersions.get(t);z(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,c),e.isValidDocument()&&n.addEntry(e,c.commitVersion))})}),a.next(()=>t.In.removeMutationBatch(e,r))}(c,t,e,r).next(()=>r.apply(t)).next(()=>c.In.performConsistencyCheck(t)).next(()=>c.Qn.Pn(t,n))})}function Sn(t){const e=g(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function _n(t,e){const c=g(t),n=e.snapshotVersion;let r=c.Un;return c.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=c.jn.newChangeBuffer({trackRemovals:!0});r=c.Un;const a=[];e.targetChanges.forEach((e,i)=>{const s=r.get(i);if(!s)return;a.push(c.ze.removeMatchingKeys(t,e.removedDocuments,i).next(()=>c.ze.addMatchingKeys(t,e.addedDocuments,i)));const o=e.resumeToken;if(o.approximateByteSize()>0){const l=s.withResumeToken(o,n).withSequenceNumber(t.currentSequenceNumber);r=r.insert(i,l),function(t,e,c){return z(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0)}(s,l,e)&&a.push(c.ze.updateTargetData(t,l))}});let s=Ze();if(e.documentUpdates.forEach((n,r)=>{e.resolvedLimboDocuments.has(n)&&a.push(c.persistence.referenceDelegate.updateLimboDocument(t,n))}),a.push(kn(t,i,e.documentUpdates,n,void 0).next(t=>{s=t})),!n.isEqual(I.min())){const e=c.ze.getLastRemoteSnapshotVersion(t).next(e=>c.ze.setTargetsMetadata(t,t.currentSequenceNumber,n));a.push(e)}return sn.waitFor(a).next(()=>i.apply(t)).next(()=>c.Qn.vn(t,s)).next(()=>s)}).then(t=>(c.Un=r,t))}function kn(t,e,c,n,r){let i=Xe();return c.forEach(t=>i=i.add(t)),e.getEntries(t,i).next(t=>{let i=Ze();return c.forEach((c,a)=>{const s=t.get(c),o=(null==r?void 0:r.get(c))||n;a.isNoDocument()&&a.version.isEqual(I.min())?(e.removeEntry(c,o),i=i.insert(c,a)):!s.isValidDocument()||a.version.compareTo(s.version)>0||0===a.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(a,o),i=i.insert(c,a)):f("LocalStore","Ignoring outdated watch update for ",c,". Current version:",s.version," Watch version:",a.version)}),i})}function En(t,e){const c=g(t);return c.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),c.In.getNextMutationBatchAfterBatchId(t,e)))}function Tn(t,e){const c=g(t);return c.persistence.runTransaction("Allocate target","readwrite",t=>{let n;return c.ze.getTargetData(t,e).next(r=>r?(n=r,sn.resolve(n)):c.ze.allocateTargetId(t).next(r=>(n=new un(e,r,0,t.currentSequenceNumber),c.ze.addTargetData(t,n).next(()=>n))))}).then(t=>{const n=c.Un.get(t.targetId);return(null===n||t.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(c.Un=c.Un.insert(t.targetId,t),c.qn.set(e,t.targetId)),t})}async function In(t,e,c){const n=g(t),r=n.Un.get(e),i=c?"readwrite":"readwrite-primary";try{c||await n.persistence.runTransaction("Release target",i,t=>n.persistence.referenceDelegate.removeTarget(t,r))}catch(t){if(!on(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}n.Un=n.Un.remove(e),n.qn.delete(r.target)}function xn(t,e,c){const n=g(t);let r=I.min(),i=Xe();return n.persistence.runTransaction("Execute query","readonly",t=>function(t,e,c){const n=g(t),r=n.qn.get(c);return void 0!==r?sn.resolve(n.Un.get(r)):n.ze.getTargetData(e,c)}(n,t,Gt(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,n.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>n.Bn.getDocumentsMatchingQuery(t,e,c?r:I.min(),c?i:Xe())).next(t=>({documents:t,Gn:i})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return sn.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var c;return this.Yn.set(e.id,{id:(c=e).id,version:c.version,createTime:mc(c.createTime)}),sn.resolve()}getNamedQuery(t,e){return sn.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:vn(t.bundledQuery),readTime:mc(t.readTime)}}(e)),sn.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.Zn=new Ue(Rn.ts),this.es=new Ue(Rn.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const c=new Rn(t,e);this.Zn=this.Zn.add(c),this.es=this.es.add(c)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new Rn(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new Q(new P([])),c=new Rn(e,t),n=new Rn(e,t+1),r=[];return this.es.forEachInRange([c,n],t=>{this.rs(t),r.push(t.key)}),r}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Q(new P([])),c=new Rn(e,t),n=new Rn(e,t+1);let r=Xe();return this.es.forEachInRange([c,n],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new Rn(t,0),c=this.Zn.firstAfterOrEqual(e);return null!==c&&t.isEqual(c.key)}}class Rn{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Q.comparator(t.key,e.key)||k(t.ls,e.ls)}static ns(t,e){return k(t.ls,e.ls)||Q.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Ue(Rn.ts)}checkEmpty(t){return sn.resolve(0===this.In.length)}addMutationBatch(t,e,c,n){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const i=new ln(r,e,c,n);this.In.push(i);for(const a of n)this.ds=this.ds.add(new Rn(a.key,r)),this.Ht.addToCollectionParentIndex(t,a.key.path.popLast());return sn.resolve(i)}lookupMutationBatch(t,e){return sn.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const c=e+1,n=this._s(c),r=n<0?0:n;return sn.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return sn.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return sn.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const c=new Rn(e,0),n=new Rn(e,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([c,n],t=>{const e=this.ws(t.ls);r.push(e)}),sn.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let c=new Ue(k);return e.forEach(t=>{const e=new Rn(t,0),n=new Rn(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,n],t=>{c=c.add(t.ls)})}),sn.resolve(this.gs(c))}getAllMutationBatchesAffectingQuery(t,e){const c=e.path,n=c.length+1;let r=c;Q.isDocumentKey(r)||(r=r.child(""));const i=new Rn(new Q(r),0);let a=new Ue(k);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!c.isPrefixOf(e)&&(e.length===n&&(a=a.add(t.ls)),!0)},i),sn.resolve(this.gs(a))}gs(t){const e=[];return t.forEach(t=>{const c=this.ws(t);null!==c&&e.push(c)}),e}removeMutationBatch(t,e){z(0===this.ys(e.batchId,"removed")),this.In.shift();let c=this.ds;return sn.forEach(e.mutations,n=>{const r=new Rn(n.key,e.batchId);return c=c.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,n.key)}).next(()=>{this.ds=c})}te(t){}containsKey(t,e){const c=new Rn(e,0),n=this.ds.firstAfterOrEqual(c);return sn.resolve(e.isEqual(n&&n.key))}performConsistencyCheck(t){return this.In.length,sn.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Pe(Q.comparator),this.size=0}addEntry(t,e,c){const n=e.key,r=this.docs.get(n),i=r?r.size:0,a=this.ps(e);return this.docs=this.docs.insert(n,{document:e.clone(),size:a,readTime:c}),this.size+=a-i,this.Ht.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const c=this.docs.get(e);return sn.resolve(c?c.document.clone():dt.newInvalidDocument(e))}getEntries(t,e){let c=Ze();return e.forEach(t=>{const e=this.docs.get(t);c=c.insert(t,e?e.document.clone():dt.newInvalidDocument(t))}),sn.resolve(c)}getDocumentsMatchingQuery(t,e,c){let n=Ze();const r=new Q(e.path.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r,readTime:a}}=i.getNext();if(!e.path.isPrefixOf(t.path))break;a.compareTo(c)<=0||Jt(e,r)&&(n=n.insert(r.key,r.clone()))}return sn.resolve(n)}Es(t,e){return sn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Dn(this)}getSize(t){return sn.resolve(this.size)}}class Dn extends Mn{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((c,n)=>{n.document.isValidDocument()?e.push(this.Se.addEntry(t,n.document,this.getReadTime(c))):this.Se.removeEntry(c)}),sn.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t){this.persistence=t,this.Ts=new yn(t=>gt(t),Mt),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Is=0,this.As=new Nn,this.targetCount=0,this.Rs=zn.se()}forEachTarget(t,e){return this.Ts.forEach((t,c)=>e(c)),sn.resolve()}getLastRemoteSnapshotVersion(t){return sn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return sn.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),sn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,c){return c&&(this.lastRemoteSnapshotVersion=c),e>this.Is&&(this.Is=e),sn.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new zn(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,sn.resolve()}updateTargetData(t,e){return this.ae(e),sn.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,sn.resolve()}removeTargets(t,e,c){let n=0;const r=[];return this.Ts.forEach((i,a)=>{a.sequenceNumber<=e&&null===c.get(a.targetId)&&(this.Ts.delete(i),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),n++)}),sn.waitFor(r).next(()=>n)}getTargetCount(t){return sn.resolve(this.targetCount)}getTargetData(t,e){const c=this.Ts.get(e)||null;return sn.resolve(c)}addMatchingKeys(t,e,c){return this.As.ss(e,c),sn.resolve()}removeMatchingKeys(t,e,c){this.As.os(e,c);const n=this.persistence.referenceDelegate,r=[];return n&&e.forEach(e=>{r.push(n.markPotentiallyOrphaned(t,e))}),sn.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),sn.resolve()}getMatchingKeysForTargetId(t,e){const c=this.As.hs(e);return sn.resolve(c)}containsKey(t,e){return sn.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e){this.bs={},this.Le=new A(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Un(this),this.Ht=new mn,this.He=function(t,e){return new jn(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new fn(e),this.Je=new On(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Pn(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,c){f("MemoryPersistence","Starting transaction:",t);const n=new qn(this.Le.next());return this.referenceDelegate.vs(),c(n).next(t=>this.referenceDelegate.Vs(n).next(()=>t)).toPromise().then(t=>(n.raiseOnCommittedEvent(),t))}Ss(t,e){return sn.or(Object.values(this.bs).map(c=>()=>c.containsKey(t,e)))}}class qn extends an{constructor(t){super(),this.currentSequenceNumber=t}}class Zn{constructor(t){this.persistence=t,this.Ds=new Nn,this.Cs=null}static Ns(t){return new Zn(t)}get xs(){if(this.Cs)return this.Cs;throw p()}addReference(t,e,c){return this.Ds.addReference(c,e),this.xs.delete(c.toString()),sn.resolve()}removeReference(t,e,c){return this.Ds.removeReference(c,e),this.xs.add(c.toString()),sn.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),sn.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>c.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return sn.forEach(this.xs,c=>{const n=Q.fromPath(c);return this.ks(t,n).next(t=>{t||e.removeEntry(n)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return sn.or([()=>sn.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.activeTargetIds=Je()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Bn{constructor(){this.yi=new $n,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,c){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,c){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new $n,Promise.resolve()}handleUserChange(t,e,c){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,c,n){const r=this.Bi(t,e);f("RestConnection","Sending: ",r,c);const i={};return this.Ui(i,n),this.qi(t,r,i,c).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw m("RestConnection",t+" failed with error: ",e,"url: ",r,"request:",c),e})}Ki(t,e,c,n){return this.Li(t,e,c,n)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const c in e.authHeaders)e.authHeaders.hasOwnProperty(c)&&(t[c]=e.authHeaders[c])}Bi(t,e){const c=Wn[t];return`${this.Fi}/v1/${e}:${c}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,c,n){return new Promise((r,i)=>{const a=new s["g"];a.listenOnce(s["c"].COMPLETE,()=>{try{switch(a.getLastErrorCode()){case s["a"].NO_ERROR:const e=a.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),r(e);break;case s["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),i(new M(y.DEADLINE_EXCEEDED,"Request time out"));break;case s["a"].HTTP_ERROR:const c=a.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const t=a.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(e)>=0?e:y.UNKNOWN}(t.status);i(new M(e,t.message))}else i(new M(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else i(new M(y.UNAVAILABLE,"Connection failed."));break;default:p()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const o=JSON.stringify(n);a.send(e,"POST",o,c,15)})}ji(t,e){const c=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],n=Object(s["h"])(),r=Object(s["i"])(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new s["d"]({})),this.Ui(i.initMessageHeaders,e),Object(a["p"])()||Object(a["q"])()||Object(a["l"])()||Object(a["n"])()||Object(a["s"])()||Object(a["k"])()||(i.httpHeadersOverwriteParam="$httpHeaders");const o=c.join("");f("Connection","Creating WebChannel: "+o,i);const l=n.createWebChannel(o,i);let h=!1,u=!1;const v=new Xn({vi:t=>{u?f("Connection","Not sending because WebChannel is closed:",t):(h||(f("Connection","Opening WebChannel transport."),l.open(),h=!0),f("Connection","WebChannel sending:",t),l.send(t))},Vi:()=>l.close()}),d=(t,e,c)=>{t.listen(e,t=>{try{c(t)}catch(t){setTimeout(()=>{throw t},0)}})};return d(l,s["f"].EventType.OPEN,()=>{u||f("Connection","WebChannel transport opened.")}),d(l,s["f"].EventType.CLOSE,()=>{u||(u=!0,f("Connection","WebChannel transport closed"),v.$i())}),d(l,s["f"].EventType.ERROR,t=>{u||(u=!0,m("Connection","WebChannel transport errored:",t),v.$i(new M(y.UNAVAILABLE,"The operation could not be completed")))}),d(l,s["f"].EventType.MESSAGE,t=>{var e;if(!u){const c=t.data[0];z(!!c);const n=c,r=n.error||(null===(e=n[0])||void 0===e?void 0:e.error);if(r){f("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=xe[t];if(void 0!==e)return Re(e)}(t),c=r.message;void 0===e&&(e=y.INTERNAL,c="Unknown error status: "+t+" with message "+r.message),u=!0,v.$i(new M(e,c)),l.close()}else f("Connection","WebChannel received:",c),v.Oi(c)}}),d(r,s["b"].STAT_EVENT,t=>{t.stat===s["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===s["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{v.ki()},0),v}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){return new hc(t,!0)}class tr{constructor(t,e,c=1e3,n=1.5,r=6e4){this.Oe=t,this.timerId=e,this.Qi=c,this.Wi=n,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),c=Math.max(0,Date.now()-this.Ji),n=Math.max(0,e-c);n>0&&f("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${c} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,n,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e,c,n,r,i){this.Oe=t,this.er=c,this.nr=n,this.credentialsProvider=r,this.listener=i,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new tr(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===y.RESOURCE_EXHAUSTED?(v(e.toString()),v("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===y.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new M(y.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cr extends er{constructor(t,e,c,n,r){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,c,r),this.N=n}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=Hc(this.N,t),c=function(t){if(!("targetChange"in t))return I.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?I.min():e.readTime?mc(e.readTime):I.min()}(t);return this.listener.Tr(e,c)}Ir(t){const e={};e.database=Cc(this.N),e.addTarget=function(t,e){let c;const n=e.target;return c=Ct(n)?{documents:Ac(t,n)}:{query:Sc(t,n)},c.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?c.resumeToken=fc(t,e.resumeToken):e.snapshotVersion.compareTo(I.min())>0&&(c.readTime=uc(t,e.snapshotVersion.toTimestamp())),c}(this.N,t);const c=kc(this.N,t);c&&(e.labels=c),this.wr(e)}Ar(t){const e={};e.database=Cc(this.N),e.removeTarget=t,this.wr(e)}}class nr extends er{constructor(t,e,c,n,r){super(t,"write_stream_connection_backoff","write_stream_idle",e,c,r),this.N=n,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=wc(t.writeResults,t.commitTime),c=mc(t.commitTime);return this.listener.vr(c,e)}return z(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=Cc(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Lc(this.N,t))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends class{}{constructor(t,e,c){super(),this.credentials=t,this.nr=e,this.N=c,this.Dr=!1}Cr(){if(this.Dr)throw new M(y.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,c){return this.Cr(),this.credentials.getToken().then(n=>this.nr.Li(t,e,c,n)).catch(t=>{throw"FirebaseError"===t.name?(t.code===y.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new M(y.UNKNOWN,t.toString())})}Ki(t,e,c){return this.Cr(),this.credentials.getToken().then(n=>this.nr.Ki(t,e,c,n)).catch(t=>{throw"FirebaseError"===t.name?(t.code===y.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new M(y.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class ir{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(v(e),this.$r=!1):f("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,c,n,r){this.localStore=t,this.datastore=e,this.asyncQueue=c,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=r,this.Qr.Ei(t=>{c.enqueueAndForget(async()=>{dr(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=g(t);e.Kr.add(4),await or(e),e.Wr.set("Unknown"),e.Kr.delete(4),await sr(e)}(this))})}),this.Wr=new ir(c,n)}}async function sr(t){if(dr(t))for(const e of t.jr)await e(!0)}async function or(t){for(const e of t.jr)await e(!1)}function lr(t,e){const c=g(t);c.qr.has(e.targetId)||(c.qr.set(e.targetId,e),mr(c)?vr(c):Tr(c).cr()&&ur(c,e))}function hr(t,e){const c=g(t),n=Tr(c);c.qr.delete(e),n.cr()&&fr(c,e),0===c.qr.size&&(n.cr()?n.lr():dr(c)&&c.Wr.set("Unknown"))}function ur(t,e){t.Gr.Y(e.targetId),Tr(t).Ir(e)}function fr(t,e){t.Gr.Y(e),Tr(t).Ar(e)}function vr(t){t.Gr=new ic({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Tr(t).start(),t.Wr.Or()}function mr(t){return dr(t)&&!Tr(t).ar()&&t.qr.size>0}function dr(t){return 0===g(t).Kr.size}function pr(t){t.Gr=void 0}async function zr(t){t.qr.forEach((e,c)=>{ur(t,e)})}async function gr(t,e){pr(t),mr(t)?(t.Wr.Lr(e),vr(t)):t.Wr.set("Unknown")}async function yr(t,e,c){if(t.Wr.set("Online"),e instanceof nc&&2===e.state&&e.cause)try{await async function(t,e){const c=e.cause;for(const n of e.targetIds)t.qr.has(n)&&(await t.remoteSyncer.rejectListen(n,c),t.qr.delete(n),t.Gr.removeTarget(n))}(t,e)}catch(c){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),c),await Mr(t,c)}else if(e instanceof ec?t.Gr.rt(e):e instanceof cc?t.Gr.ft(e):t.Gr.ct(e),!c.isEqual(I.min()))try{const e=await Sn(t.localStore);c.compareTo(e)>=0&&await function(t,e){const c=t.Gr._t(e);return c.targetChanges.forEach((c,n)=>{if(c.resumeToken.approximateByteSize()>0){const r=t.qr.get(n);r&&t.qr.set(n,r.withResumeToken(c.resumeToken,e))}}),c.targetMismatches.forEach(e=>{const c=t.qr.get(e);if(!c)return;t.qr.set(e,c.withResumeToken(F.EMPTY_BYTE_STRING,c.snapshotVersion)),fr(t,e);const n=new un(c.target,e,1,c.sequenceNumber);ur(t,n)}),t.remoteSyncer.applyRemoteEvent(c)}(t,c)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await Mr(t,e)}}async function Mr(t,e,c){if(!on(e))throw e;t.Kr.add(1),await or(t),t.Wr.set("Offline"),c||(c=()=>Sn(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await c(),t.Kr.delete(1),await sr(t)})}function Cr(t,e){return e().catch(c=>Mr(t,c,e))}async function br(t){const e=g(t),c=Ir(e);let n=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Vr(e);)try{const t=await En(e.localStore,n);if(null===t){0===e.Ur.length&&c.lr();break}n=t.batchId,Hr(e,t)}catch(t){await Mr(e,t)}Lr(e)&&wr(e)}function Vr(t){return dr(t)&&t.Ur.length<10}function Hr(t,e){t.Ur.push(e);const c=Ir(t);c.cr()&&c.br&&c.Pr(e.mutations)}function Lr(t){return dr(t)&&!Ir(t).ar()&&t.Ur.length>0}function wr(t){Ir(t).start()}async function Ar(t){Ir(t).Sr()}async function Sr(t){const e=Ir(t);for(const c of t.Ur)e.Pr(c.mutations)}async function _r(t,e,c){const n=t.Ur.shift(),r=hn.from(n,e,c);await Cr(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await br(t)}async function kr(t,e){e&&Ir(t).br&&await async function(t,e){if(c=e.code,Ne(c)&&c!==y.ABORTED){const c=t.Ur.shift();Ir(t).hr(),await Cr(t,()=>t.remoteSyncer.rejectFailedWrite(c.batchId,e)),await br(t)}var c}(t,e),Lr(t)&&wr(t)}async function Er(t,e){const c=g(t);e?(c.Kr.delete(2),await sr(c)):e||(c.Kr.add(2),await or(c),c.Wr.set("Unknown"))}function Tr(t){return t.zr||(t.zr=function(t,e,c){const n=g(t);return n.Cr(),new cr(e,n.nr,n.credentials,n.N,c)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:zr.bind(null,t),Ci:gr.bind(null,t),Tr:yr.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),mr(t)?vr(t):t.Wr.set("Unknown")):(await t.zr.stop(),pr(t))})),t.zr}function Ir(t){return t.Hr||(t.Hr=function(t,e,c){const n=g(t);return n.Cr(),new nr(e,n.nr,n.credentials,n.N,c)}(t.datastore,t.asyncQueue,{Si:Ar.bind(null,t),Ci:kr.bind(null,t),Vr:Sr.bind(null,t),vr:_r.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await br(t)):(await t.Hr.stop(),t.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xr{constructor(t,e,c,n,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=c,this.op=n,this.removalCallback=r,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,c,n,r){const i=Date.now()+c,a=new xr(t,e,i,n,r);return a.start(c),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new M(y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Or(t,e){if(v("AsyncQueue",`${e}: ${t}`),on(t))return new M(y.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t){this.comparator=t?(e,c)=>t(e,c)||Q.comparator(e.key,c.key):(t,e)=>Q.comparator(t.key,e.key),this.keyedMap=Be(),this.sortedSet=new Pe(this.comparator)}static emptySet(t){return new Nr(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,c)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Nr))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),c=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=c.getNext().key;if(!t.isEqual(n))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const c=new Nr;return c.comparator=this.comparator,c.keyedMap=t,c.sortedSet=e,c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.Jr=new Pe(Q.comparator)}track(t){const e=t.doc.key,c=this.Jr.get(e);c?0!==t.type&&3===c.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==c.type?this.Jr=this.Jr.insert(e,{type:c.type,doc:t.doc}):2===t.type&&2===c.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===c.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===c.type?this.Jr=this.Jr.remove(e):1===t.type&&2===c.type?this.Jr=this.Jr.insert(e,{type:1,doc:c.doc}):0===t.type&&1===c.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):p():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,c)=>{t.push(c)}),t}}class Pr{constructor(t,e,c,n,r,i,a,s){this.query=t,this.docs=e,this.oldDocs=c,this.docChanges=n,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=s}static fromInitialDocuments(t,e,c,n){const r=[];return e.forEach(t=>{r.push({type:0,doc:t})}),new Pr(t,e,Nr.emptySet(e),r,c,n,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,c=t.docChanges;if(e.length!==c.length)return!1;for(let n=0;n<e.length;n++)if(e[n].type!==c[n].type||!e[n].doc.isEqual(c[n].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.Xr=void 0,this.listeners=[]}}class Dr{constructor(){this.queries=new yn(t=>Xt(t),Wt),this.onlineState="Unknown",this.Zr=new Set}}async function Ur(t,e){const c=g(t),n=e.query;let r=!1,i=c.queries.get(n);if(i||(r=!0,i=new jr),r)try{i.Xr=await c.onListen(n)}catch(t){const c=Or(t,`Initialization of query '${Yt(e.query)}' failed`);return void e.onError(c)}c.queries.set(n,i),i.listeners.push(e),e.eo(c.onlineState),i.Xr&&e.no(i.Xr)&&$r(c)}async function Fr(t,e){const c=g(t),n=e.query;let r=!1;const i=c.queries.get(n);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return c.queries.delete(n),c.onUnlisten(n)}function qr(t,e){const c=g(t);let n=!1;for(const r of e){const t=r.query,e=c.queries.get(t);if(e){for(const t of e.listeners)t.no(r)&&(n=!0);e.Xr=r}}n&&$r(c)}function Zr(t,e,c){const n=g(t),r=n.queries.get(e);if(r)for(const i of r.listeners)i.onError(c);n.queries.delete(e)}function $r(t){t.Zr.forEach(t=>{t.next()})}class Br{constructor(t,e,c){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=c||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const c of t.docChanges)3!==c.type&&e.push(c);t=new Pr(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const c="Offline"!==e;return(!this.options.uo||!c)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Pr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(t){this.key=t}}class Kr{constructor(t){this.key=t}}class Wr{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Xe(),this.mutatedKeys=Xe(),this.po=Qt(t),this.Eo=new Nr(this.po)}get To(){return this._o}Io(t,e){const c=e?e.Ao:new Rr,n=e?e.Eo:this.Eo;let r=e?e.mutatedKeys:this.mutatedKeys,i=n,a=!1;const s=Ut(this.query)&&n.size===this.query.limit?n.last():null,o=Ft(this.query)&&n.size===this.query.limit?n.first():null;if(t.inorderTraversal((t,e)=>{const l=n.get(t),h=Jt(this.query,e)?e:null,u=!!l&&this.mutatedKeys.has(l.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let v=!1;l&&h?l.data.isEqual(h.data)?u!==f&&(c.track({type:3,doc:h}),v=!0):this.Ro(l,h)||(c.track({type:2,doc:h}),v=!0,(s&&this.po(h,s)>0||o&&this.po(h,o)<0)&&(a=!0)):!l&&h?(c.track({type:0,doc:h}),v=!0):l&&!h&&(c.track({type:1,doc:l}),v=!0,(s||o)&&(a=!0)),v&&(h?(i=i.add(h),r=f?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))}),Ut(this.query)||Ft(this.query))for(;i.size>this.query.limit;){const t=Ut(this.query)?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),c.track({type:1,doc:t})}return{Eo:i,Ao:c,Ln:a,mutatedKeys:r}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,c){const n=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const r=t.Ao.Yr();r.sort((t,e)=>function(t,e){const c=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return p()}};return c(t)-c(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(c);const i=e?this.Po():[],a=0===this.yo.size&&this.current?1:0,s=a!==this.mo;return this.mo=a,0!==r.length||s?{snapshot:new Pr(this.query,t.Eo,n,r,t.mutatedKeys,0===a,s,!1),vo:i}:{vo:i}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Rr,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=Xe(),this.Eo.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new Kr(t))}),this.yo.forEach(c=>{t.has(c)||e.push(new Gr(c))}),e}So(t){this._o=t.Gn,this.yo=Xe();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Pr.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class Xr{constructor(t,e,c){this.query=t,this.targetId=e,this.view=c}}class Yr{constructor(t){this.key=t,this.Co=!1}}class Jr{constructor(t,e,c,n,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=c,this.sharedClientState=n,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.No={},this.xo=new yn(t=>Xt(t),Wt),this.ko=new Map,this.$o=new Set,this.Oo=new Pe(Q.comparator),this.Fo=new Map,this.Mo=new Nn,this.Lo={},this.Bo=new Map,this.Uo=zn.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Qr(t,e){const c=gi(t);let n,r;const i=c.xo.get(e);if(i)n=i.targetId,c.sharedClientState.addLocalQueryTarget(n),r=i.view.Do();else{const t=await Tn(c.localStore,Gt(e)),i=c.sharedClientState.addLocalQueryTarget(t.targetId);n=t.targetId,r=await ti(c,e,n,"current"===i),c.isPrimaryClient&&lr(c.remoteStore,t)}return r}async function ti(t,e,c,n){t.Ko=(e,c,n)=>async function(t,e,c,n){let r=e.view.Io(c);r.Ln&&(r=await xn(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,r)));const i=n&&n.targetChanges.get(e.targetId),a=e.view.applyChanges(r,t.isPrimaryClient,i);return fi(t,e.targetId,a.vo),a.snapshot}(t,e,c,n);const r=await xn(t.localStore,e,!0),i=new Wr(e,r.Gn),a=i.Io(r.documents),s=tc.createSynthesizedTargetChangeForCurrentChange(c,n&&"Offline"!==t.onlineState),o=i.applyChanges(a,t.isPrimaryClient,s);fi(t,c,o.vo);const l=new Xr(e,c,i);return t.xo.set(e,l),t.ko.has(c)?t.ko.get(c).push(e):t.ko.set(c,[e]),o.snapshot}async function ei(t,e){const c=g(t),n=c.xo.get(e),r=c.ko.get(n.targetId);if(r.length>1)return c.ko.set(n.targetId,r.filter(t=>!Wt(t,e))),void c.xo.delete(e);c.isPrimaryClient?(c.sharedClientState.removeLocalQueryTarget(n.targetId),c.sharedClientState.isActiveQueryTarget(n.targetId)||await In(c.localStore,n.targetId,!1).then(()=>{c.sharedClientState.clearQueryState(n.targetId),hr(c.remoteStore,n.targetId),hi(c,n.targetId)}).catch(gn)):(hi(c,n.targetId),await In(c.localStore,n.targetId,!0))}async function ci(t,e,c){const n=yi(t);try{const t=await function(t,e){const c=g(t),n=T.now(),r=e.reduce((t,e)=>t.add(e.key),Xe());let i;return c.persistence.runTransaction("Locally write mutations","readwrite",t=>c.Qn.Pn(t,r).next(r=>{i=r;const a=[];for(const t of e){const e=Ve(t,i.get(t.key));null!=e&&a.push(new Ae(t.key,e,mt(e.value.mapValue),ge.exists(!0)))}return c.In.addMutationBatch(t,n,a,e)})).then(t=>(t.applyToLocalDocumentSet(i),{batchId:t.batchId,changes:i}))}(n.localStore,e);n.sharedClientState.addPendingMutation(t.batchId),function(t,e,c){let n=t.Lo[t.currentUser.toKey()];n||(n=new Pe(k)),n=n.insert(e,c),t.Lo[t.currentUser.toKey()]=n}(n,t.batchId,c),await di(n,t.changes),await br(n.remoteStore)}catch(t){const e=Or(t,"Failed to persist write");c.reject(e)}}async function ni(t,e){const c=g(t);try{const t=await _n(c.localStore,e);e.targetChanges.forEach((t,e)=>{const n=c.Fo.get(e);n&&(z(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?n.Co=!0:t.modifiedDocuments.size>0?z(n.Co):t.removedDocuments.size>0&&(z(n.Co),n.Co=!1))}),await di(c,t,e)}catch(t){await gn(t)}}function ri(t,e,c){const n=g(t);if(n.isPrimaryClient&&0===c||!n.isPrimaryClient&&1===c){const t=[];n.xo.forEach((c,n)=>{const r=n.view.eo(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const c=g(t);c.onlineState=e;let n=!1;c.queries.forEach((t,c)=>{for(const r of c.listeners)r.eo(e)&&(n=!0)}),n&&$r(c)}(n.eventManager,e),t.length&&n.No.Tr(t),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ii(t,e,c){const n=g(t);n.sharedClientState.updateQueryState(e,"rejected",c);const r=n.Fo.get(e),i=r&&r.key;if(i){let t=new Pe(Q.comparator);t=t.insert(i,dt.newNoDocument(i,I.min()));const c=Xe().add(i),r=new Qe(I.min(),new Map,new Ue(k),t,c);await ni(n,r),n.Oo=n.Oo.remove(i),n.Fo.delete(e),mi(n)}else await In(n.localStore,e,!1).then(()=>hi(n,e,c)).catch(gn)}async function ai(t,e){const c=g(t),n=e.batch.batchId;try{const t=await An(c.localStore,e);li(c,n,null),oi(c,n),c.sharedClientState.updateMutationState(n,"acknowledged"),await di(c,t)}catch(t){await gn(t)}}async function si(t,e,c){const n=g(t);try{const t=await function(t,e){const c=g(t);return c.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let n;return c.In.lookupMutationBatch(t,e).next(e=>(z(null!==e),n=e.keys(),c.In.removeMutationBatch(t,e))).next(()=>c.In.performConsistencyCheck(t)).next(()=>c.Qn.Pn(t,n))})}(n.localStore,e);li(n,e,c),oi(n,e),n.sharedClientState.updateMutationState(e,"rejected",c),await di(n,t)}catch(c){await gn(c)}}function oi(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function li(t,e,c){const n=g(t);let r=n.Lo[n.currentUser.toKey()];if(r){const t=r.get(e);t&&(c?t.reject(c):t.resolve(),r=r.remove(e)),n.Lo[n.currentUser.toKey()]=r}}function hi(t,e,c=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.ko.get(e))t.xo.delete(n),c&&t.No.jo(n,c);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||ui(t,e)})}function ui(t,e){t.$o.delete(e.path.canonicalString());const c=t.Oo.get(e);null!==c&&(hr(t.remoteStore,c),t.Oo=t.Oo.remove(e),t.Fo.delete(c),mi(t))}function fi(t,e,c){for(const n of c)n instanceof Gr?(t.Mo.addReference(n.key,e),vi(t,n)):n instanceof Kr?(f("SyncEngine","Document no longer in limbo: "+n.key),t.Mo.removeReference(n.key,e),t.Mo.containsKey(n.key)||ui(t,n.key)):p()}function vi(t,e){const c=e.key,n=c.path.canonicalString();t.Oo.get(c)||t.$o.has(n)||(f("SyncEngine","New document in limbo: "+c),t.$o.add(n),mi(t))}function mi(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const c=new Q(P.fromString(e)),n=t.Uo.next();t.Fo.set(n,new Yr(c)),t.Oo=t.Oo.insert(c,n),lr(t.remoteStore,new un(Gt(Dt(c.path)),n,2,A.T))}}async function di(t,e,c){const n=g(t),r=[],i=[],a=[];n.xo.isEmpty()||(n.xo.forEach((t,s)=>{a.push(n.Ko(s,e,c).then(t=>{if(t){n.isPrimaryClient&&n.sharedClientState.updateQueryState(s.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=bn.kn(s.targetId,t);i.push(e)}}))}),await Promise.all(a),n.No.Tr(r),await async function(t,e){const c=g(t);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>sn.forEach(e,e=>sn.forEach(e.Nn,n=>c.persistence.referenceDelegate.addReference(t,e.targetId,n)).next(()=>sn.forEach(e.xn,n=>c.persistence.referenceDelegate.removeReference(t,e.targetId,n)))))}catch(t){if(!on(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const n of e){const t=n.targetId;if(!n.fromCache){const e=c.Un.get(t),n=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(n);c.Un=c.Un.insert(t,r)}}}(n.localStore,i))}async function pi(t,e){const c=g(t);if(!c.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await wn(c.localStore,e);c.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new M(y.CANCELLED,e))})}),t.Bo.clear()}(c,"'waitForPendingWrites' promise is rejected due to a user change."),c.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await di(c,t.Wn)}}function zi(t,e){const c=g(t),n=c.Fo.get(e);if(n&&n.Co)return Xe().add(n.key);{let t=Xe();const n=c.ko.get(e);if(!n)return t;for(const e of n){const n=c.xo.get(e);t=t.unionWith(n.view.To)}return t}}function gi(t){const e=g(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ni.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zi.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ii.bind(null,e),e.No.Tr=qr.bind(null,e.eventManager),e.No.jo=Zr.bind(null,e.eventManager),e}function yi(t){const e=g(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ai.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=si.bind(null,e),e}class Mi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Qn(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return Ln(this.persistence,new Vn,t.initialUser,this.N)}Go(t){return new Fn(Zn.Ns,this.N)}Wo(t){return new Bn}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ci{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ri(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=pi.bind(null,this.syncEngine),await Er(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Dr}createDatastore(t){const e=Qn(t.databaseInfo.databaseId),c=(n=t.databaseInfo,new Yn(n));var n;return function(t,e,c){return new rr(t,e,c)}(t.credentials,c,e)}createRemoteStore(t){return e=this.localStore,c=this.datastore,n=t.asyncQueue,r=t=>ri(this.syncEngine,t,0),i=Kn.bt()?new Kn:new Gn,new ar(e,c,n,r,i);var e,c,n,r,i}createSyncEngine(t,e){return function(t,e,c,n,r,i,a){const s=new Jr(t,e,c,n,r,i);return a&&(s.qo=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=g(t);f("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await or(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{constructor(t,e,c){this.credentials=t,this.asyncQueue=e,this.databaseInfo=c,this.user=o.UNAUTHENTICATED,this.clientId=_.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const c=Or(e,"Failed to shutdown persistence");t.reject(c)}}),t.promise}}async function Hi(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const c=await t.getConfiguration();await e.initialize(c);let n=c.initialUser;t.setCredentialChangeListener(async t=>{n.isEqual(t)||(await wn(e.localStore,t),n=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Li(t,e){t.asyncQueue.verifyOperationInProgress();const c=await wi(t);f("FirestoreClient","Initializing OnlineComponentProvider");const n=await t.getConfiguration();await e.initialize(c,n),t.setCredentialChangeListener(t=>async function(t,e){const c=g(t);c.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const n=dr(c);c.Kr.add(3),await or(c),n&&c.Wr.set("Unknown"),await c.remoteSyncer.handleCredentialChange(e),c.Kr.delete(3),await sr(c)}(e.remoteStore,t)),t.onlineComponents=e}async function wi(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Hi(t,new Mi)),t.offlineComponents}async function Ai(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Li(t,new Ci)),t.onlineComponents}function Si(t){return Ai(t).then(t=>t.syncEngine)}async function _i(t){const e=await Ai(t),c=e.eventManager;return c.onListen=Qr.bind(null,e.syncEngine),c.onUnlisten=ei.bind(null,e.syncEngine),c}function ki(t,e,c={}){const n=new C;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,c,n,r){const i=new bi({next:c=>{e.enqueueAndForget(()=>Fr(t,a)),c.fromCache&&"server"===n.source?r.reject(new M(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(c)},error:t=>r.reject(t)}),a=new Br(c,i,{includeMetadataChanges:!0,uo:!0});return Ur(t,a)}(await _i(t),t.asyncQueue,e,c,n)),n.promise}class Ei{constructor(t,e,c,n,r,i,a,s){this.databaseId=t,this.appId=e,this.persistenceKey=c,this.host=n,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=s}}class Ti{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ti&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e,c){if(!c)throw new M(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Oi(t,e,c,n){if(!0===e&&!0===n)throw new M(y.INVALID_ARGUMENT,`${t} and ${c} cannot be used together.`)}function Ni(t){if(!Q.isDocumentKey(t))throw new M(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ri(t){if(Q.isDocumentKey(t))throw new M(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pi(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":p()}function ji(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const c=Pi(t);throw new M(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${c}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new M(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new M(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Oi("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Di({}),this._settingsFrozen=!1,t instanceof Ti?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new M(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(t.options.projectId)}(t))}get app(){if(!this._app)throw new M(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new M(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Di(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new V;switch(t.type){case"gapi":t.client;return z(!("object"!=typeof n["d"]||null===n["d"]||!n["d"].auth||!n["d"].auth.getAuthHeaderValueForFirstParty)),new w(n["d"],t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new M(y.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ii.get(t);e&&(f("ComponentProvider","Removing Datastore"),Ii.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi{constructor(t,e,c){this.converter=e,this._key=c,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Fi(this.firestore,t,this._key)}}class qi{constructor(t,e,c){this.converter=e,this._query=c,this.type="query",this.firestore=t}withConverter(t){return new qi(this.firestore,t,this._query)}}class Zi extends qi{constructor(t,e,c){super(t,e,Dt(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Fi(this.firestore,null,new Q(t))}withConverter(t){return new Zi(this.firestore,t,this._path)}}function $i(t,e,...c){if(t=Object(a["i"])(t),xi("collection","path",e),t instanceof Ui){const n=P.fromString(e,...c);return Ri(n),new Zi(t,null,n)}{if(!(t instanceof Fi||t instanceof Zi))throw new M(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(P.fromString(e,...c));return Ri(n),new Zi(t.firestore,null,n)}}function Bi(t,e,...c){if(t=Object(a["i"])(t),1===arguments.length&&(e=_.I()),xi("doc","path",e),t instanceof Ui){const n=P.fromString(e,...c);return Ni(n),new Fi(t,null,new Q(n))}{if(!(t instanceof Fi||t instanceof Zi))throw new M(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(P.fromString(e,...c));return Ni(n),new Fi(t.firestore,t instanceof Zi?t.converter:null,new Q(n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gi{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new tr(this,"async_queue_retry"),this.Ea=()=>{const t=Jn();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Jn();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Jn();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise(()=>{});const e=new C;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!on(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{throw this.ma=t,this.ga=!1,v("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,c){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const n=xr.createAndSchedule(this,t,e,c,t=>this.Ra(t));return this._a.push(n),n}Ta(){this.ma&&p()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class Ki extends Ui{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Gi,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Yi(this),this._firestoreClient.terminate()}}function Wi(t=Object(n["e"])()){return Object(n["b"])(t,"firestore").getImmediate()}function Xi(t){return t._firestoreClient||Yi(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Yi(t){var e;const c=t._freezeSettings(),n=function(t,e,c,n){return new Ei(t,e,c,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,c);t._firestoreClient=new Vi(t._credentials,t._queue,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new M(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new D(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qi(F.fromBase64String(t))}catch(t){throw new M(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Qi(F.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=/^__.*__$/;class na{constructor(t,e,c){this.data=t,this.fieldMask=e,this.fieldTransforms=c}toMutation(t,e){return null!==this.fieldMask?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new we(t,this.data,e,this.fieldTransforms)}}function ra(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class ia{constructor(t,e,c,n,r,i){this.settings=t,this.databaseId=e,this.N=c,this.ignoreUndefinedProperties=n,void 0===r&&this.Sa(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new ia(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const c=null===(e=this.path)||void 0===e?void 0:e.child(t),n=this.Ca({path:c,xa:!1});return n.ka(t),n}$a(t){var e;const c=null===(e=this.path)||void 0===e?void 0:e.child(t),n=this.Ca({path:c,xa:!1});return n.Sa(),n}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return pa(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(ra(this.Da)&&ca.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class aa{constructor(t,e,c){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=c||Qn(t)}Ba(t,e,c,n=!1){return new ia({Da:t,methodName:e,La:c,path:D.emptyPath(),xa:!1,Ma:n},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function sa(t){const e=t._freezeSettings(),c=Qn(t._databaseId);return new aa(t._databaseId,!!e.ignoreUndefinedProperties,c)}function oa(t,e,c,n,r,i={}){const a=t.Ba(i.merge||i.mergeFields?2:0,e,c,r);fa("Data must be an object, but it was:",a,n);const s=ha(n,a);let o,l;if(i.merge)o=new U(a.fieldMask),l=a.fieldTransforms;else if(i.mergeFields){const t=[];for(const n of i.mergeFields){const r=va(e,n,c);if(!a.contains(r))throw new M(y.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);za(t,r)||t.push(r)}o=new U(t),l=a.fieldTransforms.filter(t=>o.covers(t.field))}else o=null,l=a.fieldTransforms;return new na(new vt(s),o,l)}function la(t,e){if(ua(t=Object(a["i"])(t)))return fa("Unsupported field value:",e,t),ha(t,e);if(t instanceof ta)return function(t,e){if(!ra(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const c=t._toFieldTransform(e);c&&e.fieldTransforms.push(c)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const c=[];let n=0;for(const r of t){let t=la(r,e.Oa(n));null==t&&(t={nullValue:"NULL_VALUE"}),c.push(t),n++}return{arrayValue:{values:c}}}(t,e)}return function(t,e){if(null===(t=Object(a["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ne(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const c=T.fromDate(t);return{timestampValue:uc(e.N,c)}}if(t instanceof T){const c=new T(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:uc(e.N,c)}}if(t instanceof ea)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Qi)return{bytesValue:fc(e.N,t._byteString)};if(t instanceof Fi){const c=e.databaseId,n=t.firestore._databaseId;if(!n.isEqual(c))throw e.Fa(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:dc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+Pi(t))}(t,e)}function ha(t,e){const c={};return N(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):O(t,(t,n)=>{const r=la(n,e.Na(t));null!=r&&(c[t]=r)}),{mapValue:{fields:c}}}function ua(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof T||t instanceof ea||t instanceof Qi||t instanceof Fi||t instanceof ta)}function fa(t,e,c){if(!ua(c)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(c)){const n=Pi(c);throw"an object"===n?e.Fa(t+" a custom object"):e.Fa(t+" "+n)}}function va(t,e,c){if((e=Object(a["i"])(e))instanceof Ji)return e._internalPath;if("string"==typeof e)return da(t,e);throw pa("Field path arguments must be of type string or FieldPath.",t,!1,void 0,c)}const ma=new RegExp("[~\\*/\\[\\]]");function da(t,e,c){if(e.search(ma)>=0)throw pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,c);try{return new Ji(...e.split("."))._internalPath}catch(n){throw pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,c)}}function pa(t,e,c,n,r){const i=n&&!n.isEmpty(),a=void 0!==r;let s=`Function ${e}() called with invalid data`;c&&(s+=" (via `toFirestore()`)"),s+=". ";let o="";return(i||a)&&(o+=" (found",i&&(o+=" in field "+n),a&&(o+=" in document "+r),o+=")"),new M(y.INVALID_ARGUMENT,s+t+o)}function za(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e,c,n,r){this._firestore=t,this._userDataWriter=e,this._key=c,this._document=n,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Fi(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ya(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ma("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ya extends ga{data(){return super.data()}}function Ma(t,e){return"string"==typeof e?da(t,e):e instanceof Ji?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ba extends ga{constructor(t,e,c,n,r,i){super(t,e,c,n,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const c=this._document.data.field(Ma("DocumentSnapshot.get",t));if(null!==c)return this._userDataWriter.convertValue(c,e.serverTimestamps)}}}class Va extends ba{data(t={}){return super.data(t)}}class Ha{constructor(t,e,c,n){this._firestore=t,this._userDataWriter=e,this._snapshot=n,this.metadata=new Ca(n.hasPendingWrites,n.fromCache),this.query=c}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(c=>{t.call(e,new Va(this._firestore,this._userDataWriter,c.key,c,new Ca(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(c=>({type:"added",doc:new Va(t._firestore,t._userDataWriter,c.doc.key,c.doc,new Ca(t._snapshot.mutatedKeys.has(c.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let c=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const n=new Va(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ca(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=c.indexOf(e.doc.key),c=c.delete(e.doc.key)),1!==e.type&&(c=c.add(e.doc),i=c.indexOf(e.doc.key)),{type:La(e.type),doc:n,oldIndex:r,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function La(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return p()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wa(t){if(Ft(t)&&0===t.explicitOrderBy.length)throw new M(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{convertValue(t,e="none"){switch(tt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(B(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw p()}}convertObject(t,e){const c={};return O(t.fields,(t,n)=>{c[t]=this.convertValue(n,e)}),c}convertGeoPoint(t){return new ea($(t.latitude),$(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":K(t);return null==n["c"]?null:this.convertValue(n["c"],e);case"estimate":return this.convertTimestamp(W(t));default:return null}}convertTimestamp(t){const e=Z(t);return new T(e.seconds,e.nanos)}convertDocumentKey(t,e){const c=P.fromString(t);z(Uc(c));const n=new Ti(c.get(1),c.get(3)),r=new Q(c.popFirst(5));return n.isEqual(e)||v(`Document ${r} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t,e,c){let n;return n=t?c&&(c.merge||c.mergeFields)?t.toFirestore(e,c):t.toFirestore(e):e,n}class _a extends Aa{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qi(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Fi(this.firestore,null,e)}}function ka(t){t=ji(t,qi);const e=ji(t.firestore,Ki),c=Xi(e),n=new _a(e);return wa(t._query),ki(c,t._query).then(c=>new Ha(e,n,t,c))}function Ea(t,e){const c=ji(t.firestore,Ki),n=Bi(t),r=Sa(t.converter,e);return Ta(c,[oa(sa(t.firestore),"addDoc",n._key,r,null!==t.converter,{}).toMutation(n._key,ge.exists(!1))]).then(()=>n)}function Ta(t,e){return function(t,e){const c=new C;return t.asyncQueue.enqueueAndForget(async()=>ci(await Si(t),e,c)),c.promise}(Xi(t),e)}var Ia;!function(t){l=t}(n["a"]),Object(n["c"])(new r["a"]("firestore",(t,{options:e})=>{const c=t.getProvider("app").getImmediate(),n=new Ki(c,new H(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),n._setSettings(e),n},"PUBLIC")),Object(n["g"])("@firebase/firestore","3.1.0",Ia)}).call(this,c("4362"))},"0a06":function(t,e,c){"use strict";var n=c("c532"),r=c("30b5"),i=c("f6b4"),a=c("5270"),s=c("4a7b"),o=c("848b"),l=o.validators;function h(t){this.defaults=t,this.interceptors={request:new i,response:new i}}h.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=s(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=t.transitional;void 0!==e&&o.assertOptions(e,{silentJSONParsing:l.transitional(l.boolean,"1.0.0"),forcedJSONParsing:l.transitional(l.boolean,"1.0.0"),clarifyTimeoutError:l.transitional(l.boolean,"1.0.0")},!1);var c=[],n=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(n=n&&e.synchronous,c.unshift(e.fulfilled,e.rejected))}));var r,i=[];if(this.interceptors.response.forEach((function(t){i.push(t.fulfilled,t.rejected)})),!n){var h=[a,void 0];Array.prototype.unshift.apply(h,c),h=h.concat(i),r=Promise.resolve(t);while(h.length)r=r.then(h.shift(),h.shift());return r}var u=t;while(c.length){var f=c.shift(),v=c.shift();try{u=f(u)}catch(m){v(m);break}}try{r=a(u)}catch(m){return Promise.reject(m)}while(i.length)r=r.then(i.shift(),i.shift());return r},h.prototype.getUri=function(t){return t=s(this.defaults,t),r(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){h.prototype[t]=function(e,c){return this.request(s(c||{},{method:t,url:e,data:(c||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){h.prototype[t]=function(e,c,n){return this.request(s(n||{},{method:t,url:e,data:c}))}})),t.exports=h},"0b42":function(t,e,c){var n=c("e8b5"),r=c("68ee"),i=c("861d"),a=c("b622"),s=a("species");t.exports=function(t){var e;return n(t)&&(e=t.constructor,r(e)&&(e===Array||n(e.prototype))?e=void 0:i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?Array:e}},"0cfb":function(t,e,c){var n=c("83ab"),r=c("d039"),i=c("cc12");t.exports=!n&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e){t.exports=function(t){try{return String(t)}catch(e){return"Object"}}},"0df6":function(t,e,c){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"159b":function(t,e,c){var n=c("da84"),r=c("fdbc"),i=c("785a"),a=c("17c2"),s=c("9112"),o=function(t){if(t&&t.forEach!==a)try{s(t,"forEach",a)}catch(e){t.forEach=a}};for(var l in r)r[l]&&o(n[l]&&n[l].prototype);o(i)},"15f5":function(t,e,c){},1626:function(t,e){t.exports=function(t){return"function"===typeof t}},"17c2":function(t,e,c){"use strict";var n=c("b727").forEach,r=c("a640"),i=r("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,c){if(t instanceof e)return t;throw TypeError("Incorrect "+(c?c+" ":"")+"invocation")}},"1be4":function(t,e,c){var n=c("d066");t.exports=n("document","documentElement")},"1c7e":function(t,e,c){var n=c("b622"),r=n("iterator"),i=!1;try{var a=0,s={next:function(){return{done:!!a++}},return:function(){i=!0}};s[r]=function(){return this},Array.from(s,(function(){throw 2}))}catch(o){}t.exports=function(t,e){if(!e&&!i)return!1;var c=!1;try{var n={};n[r]=function(){return{next:function(){return{done:c=!0}}}},t(n)}catch(o){}return c}},"1cdc":function(t,e,c){var n=c("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},"1d2b":function(t,e,c){"use strict";t.exports=function(t,e){return function(){for(var c=new Array(arguments.length),n=0;n<c.length;n++)c[n]=arguments[n];return t.apply(e,c)}}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));c("d3b7");function n(t,e,c,n,r,i,a){try{var s=t[i](a),o=s.value}catch(l){return void c(l)}s.done?e(o):Promise.resolve(o).then(n,r)}function r(t){return function(){var e=this,c=arguments;return new Promise((function(r,i){var a=t.apply(e,c);function s(t){n(a,r,i,s,o,"next",t)}function o(t){n(a,r,i,s,o,"throw",t)}s(void 0)}))}}},"1dde":function(t,e,c){var n=c("d039"),r=c("b622"),i=c("2d00"),a=r("species");t.exports=function(t){return i>=51||!n((function(){var e=[],c=e.constructor={};return c[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,c){"use strict";(function(t){c.d(e,"a",(function(){return l})),c.d(e,"b",(function(){return V})),c.d(e,"c",(function(){return b})),c.d(e,"d",(function(){return o})),c.d(e,"e",(function(){return h})),c.d(e,"f",(function(){return T})),c.d(e,"g",(function(){return A})),c.d(e,"h",(function(){return E})),c.d(e,"i",(function(){return N})),c.d(e,"j",(function(){return u})),c.d(e,"k",(function(){return m})),c.d(e,"l",(function(){return p})),c.d(e,"m",(function(){return w})),c.d(e,"n",(function(){return z})),c.d(e,"o",(function(){return M})),c.d(e,"p",(function(){return f})),c.d(e,"q",(function(){return d})),c.d(e,"r",(function(){return y})),c.d(e,"s",(function(){return g})),c.d(e,"t",(function(){return _})),c.d(e,"u",(function(){return k}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(t){const e=[];let c=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r<128?e[c++]=r:r<2048?(e[c++]=r>>6|192,e[c++]=63&r|128):55296===(64512&r)&&n+1<t.length&&56320===(64512&t.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++n)),e[c++]=r>>18|240,e[c++]=r>>12&63|128,e[c++]=r>>6&63|128,e[c++]=63&r|128):(e[c++]=r>>12|224,e[c++]=r>>6&63|128,e[c++]=63&r|128)}return e},r=function(t){const e=[];let c=0,n=0;while(c<t.length){const r=t[c++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[c++];e[n++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=t[c++],a=t[c++],s=t[c++],o=((7&r)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(1023&o))}else{const i=t[c++],a=t[c++];e[n++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&a)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,a=i?t[r+1]:0,s=r+2<t.length,o=s?t[r+2]:0,l=e>>2,h=(3&e)<<4|a>>4;let u=(15&a)<<2|o>>6,f=63&o;s||(f=64,i||(u=64)),n.push(c[l],c[h],c[u],c[f])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const c=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<t.length;){const e=c[t.charAt(r++)],i=r<t.length,a=i?c[t.charAt(r)]:0;++r;const s=r<t.length,o=s?c[t.charAt(r)]:64;++r;const l=r<t.length,h=l?c[t.charAt(r)]:64;if(++r,null==e||null==a||null==o||null==h)throw Error();const u=e<<2|a>>4;if(n.push(u),64!==o){const t=a<<4&240|o>>2;if(n.push(t),64!==h){const t=o<<6&192|h;n.push(t)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){const e=n(t);return i.encodeByteArray(e,!0)},s=function(t){return a(t).replace(/\./g,"")},o=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,c)=>{e?this.reject(e):this.resolve(c),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,c))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),o="";return[s(JSON.stringify(c)),s(JSON.stringify(a)),o].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function v(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function m(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return u().indexOf("Electron/")>=0}function z(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function y(){return!v()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function M(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="FirebaseError";class b extends Error{constructor(t,e,c){super(e),this.code=t,this.customData=c,this.name=C,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(t,e,c){this.service=t,this.serviceName=e,this.errors=c}create(t,...e){const c=e[0]||{},n=`${this.service}/${t}`,r=this.errors[t],i=r?H(r,c):"Error",a=`${this.serviceName}: ${i} (${n}).`,s=new b(n,a,c);return s}}function H(t,e){return t.replace(L,(t,c)=>{const n=e[c];return null!=n?String(n):`<${c}?>`})}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A(t,e){if(t===e)return!0;const c=Object.keys(t),n=Object.keys(e);for(const r of c){if(!n.includes(r))return!1;const c=t[r],i=e[r];if(S(c)&&S(i)){if(!A(c,i))return!1}else if(c!==i)return!1}for(const r of n)if(!c.includes(r))return!1;return!0}function S(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t){const e=[];for(const[c,n]of Object.entries(t))Array.isArray(n)?n.forEach(t=>{e.push(encodeURIComponent(c)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function k(t){const e={},c=t.replace(/^\?/,"").split("&");return c.forEach(t=>{if(t){const[c,n]=t.split("=");e[decodeURIComponent(c)]=decodeURIComponent(n)}}),e}function E(t){const e=t.indexOf("?");if(!e)return"";const c=t.indexOf("#",e);return t.substring(e,c>0?c:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){const c=new I(t,e);return c.subscribe.bind(c)}class I{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,c){let n;if(void 0===t&&void 0===e&&void 0===c)throw new Error("Missing Observer.");n=x(t,["next","error","complete"])?t:{next:t,error:e,complete:c},void 0===n.next&&(n.next=O),void 0===n.error&&(n.error=O),void 0===n.complete&&(n.complete=O);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(t){}}),this.observers.push(n),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(c){"undefined"!==typeof console&&console.error&&console.error(c)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function x(t,e){if("object"!==typeof t||null===t)return!1;for(const c of e)if(c in t&&"function"===typeof t[c])return!0;return!1}function O(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t){return t&&t._delegate?t._delegate:t}}).call(this,c("c8ba"))},2266:function(t,e,c){var n=c("825a"),r=c("e95a"),i=c("50c4"),a=c("0366"),s=c("9a1f"),o=c("35a1"),l=c("2a62"),h=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,c){var u,f,v,m,d,p,z,g=c&&c.that,y=!(!c||!c.AS_ENTRIES),M=!(!c||!c.IS_ITERATOR),C=!(!c||!c.INTERRUPTED),b=a(e,g,1+y+C),V=function(t){return u&&l(u,"normal",t),new h(!0,t)},H=function(t){return y?(n(t),C?b(t[0],t[1],V):b(t[0],t[1])):C?b(t,V):b(t)};if(M)u=t;else{if(f=o(t),!f)throw TypeError(String(t)+" is not iterable");if(r(f)){for(v=0,m=i(t.length);m>v;v++)if(d=H(t[v]),d&&d instanceof h)return d;return new h(!1)}u=s(t,f)}p=u.next;while(!(z=p.call(u)).done){try{d=H(z.value)}catch(L){l(u,"throw",L)}if("object"==typeof d&&d&&d instanceof h)return d}return new h(!1)}},"23cb":function(t,e,c){var n=c("a691"),r=Math.max,i=Math.min;t.exports=function(t,e){var c=n(t);return c<0?r(c+e,0):i(c,e)}},"23e7":function(t,e,c){var n=c("da84"),r=c("06cf").f,i=c("9112"),a=c("6eeb"),s=c("ce4e"),o=c("e893"),l=c("94ca");t.exports=function(t,e){var c,h,u,f,v,m,d=t.target,p=t.global,z=t.stat;if(h=p?n:z?n[d]||s(d,{}):(n[d]||{}).prototype,h)for(u in e){if(v=e[u],t.noTargetGet?(m=r(h,u),f=m&&m.value):f=h[u],c=l(p?u:d+(z?".":"#")+u,t.forced),!c&&void 0!==f){if(typeof v===typeof f)continue;o(v,f)}(t.sham||f&&f.sham)&&i(v,"sham",!0),a(h,u,v,t)}}},"241c":function(t,e,c){var n=c("ca84"),r=c("7839"),i=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},2444:function(t,e,c){"use strict";(function(e){var n=c("c532"),r=c("c8af"),i=c("387f"),a={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=c("b50d")),t}function l(t,e,c){if(n.isString(t))try{return(e||JSON.parse)(t),n.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(c||JSON.stringify)(t)}var h={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:o(),transformRequest:[function(t,e){return r(e,"Accept"),r(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)||e&&"application/json"===e["Content-Type"]?(s(e,"application/json"),l(t)):t}],transformResponse:[function(t){var e=this.transitional,c=e&&e.silentJSONParsing,r=e&&e.forcedJSONParsing,a=!c&&"json"===this.responseType;if(a||r&&n.isString(t)&&t.length)try{return JSON.parse(t)}catch(s){if(a){if("SyntaxError"===s.name)throw i(s,this,"E_JSON_PARSE");throw s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){h.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){h.headers[t]=n.merge(a)})),t.exports=h}).call(this,c("4362"))},2532:function(t,e,c){"use strict";var n=c("23e7"),r=c("5a34"),i=c("1d80"),a=c("577e"),s=c("ab13");n({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~a(i(this)).indexOf(a(r(t)),arguments.length>1?arguments[1]:void 0)}})},"260b":function(t,e,c){"use strict";var n=c("5606");c.d(e,"a",(function(){return n["f"]}));var r="firebase",i="9.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(n["g"])(r,i,"app")},2626:function(t,e,c){"use strict";var n=c("d066"),r=c("9bf2"),i=c("b622"),a=c("83ab"),s=i("species");t.exports=function(t){var e=n(t),c=r.f;a&&e&&!e[s]&&c(e,s,{configurable:!0,get:function(){return this}})}},2877:function(t,e,c){"use strict";function n(t,e,c,n,r,i,a,s){var o,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=c,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(o=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=o):r&&(o=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),o)if(l.functional){l._injectStyles=o;var h=l.render;l.render=function(t,e){return o.call(e),h(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,o):[o]}return{exports:t,options:l}}c.d(e,"a",(function(){return n}))},"2a62":function(t,e,c){var n=c("825a"),r=c("dc4a");t.exports=function(t,e,c){var i,a;n(t);try{if(i=r(t,"return"),!i){if("throw"===e)throw c;return c}i=i.call(t)}catch(s){a=!0,i=s}if("throw"===e)throw c;if(a)throw i;return n(i),c}},"2b0e":function(t,e,c){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var c=Object.freeze({});function n(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function o(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function h(t){return"[object Object]"===l.call(t)}function u(t){return"[object RegExp]"===l.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function v(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function d(t){var e=parseFloat(t);return isNaN(e)?t:e}function p(t,e){for(var c=Object.create(null),n=t.split(","),r=0;r<n.length;r++)c[n[r]]=!0;return e?function(t){return c[t.toLowerCase()]}:function(t){return c[t]}}p("slot,component",!0);var z=p("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var c=t.indexOf(e);if(c>-1)return t.splice(c,1)}}var y=Object.prototype.hasOwnProperty;function M(t,e){return y.call(t,e)}function C(t){var e=Object.create(null);return function(c){var n=e[c];return n||(e[c]=t(c))}}var b=/-(\w)/g,V=C((function(t){return t.replace(b,(function(t,e){return e?e.toUpperCase():""}))})),H=C((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),L=/\B([A-Z])/g,w=C((function(t){return t.replace(L,"-$1").toLowerCase()}));function A(t,e){function c(c){var n=arguments.length;return n?n>1?t.apply(e,arguments):t.call(e,c):t.call(e)}return c._length=t.length,c}function S(t,e){return t.bind(e)}var _=Function.prototype.bind?S:A;function k(t,e){e=e||0;var c=t.length-e,n=new Array(c);while(c--)n[c]=t[c+e];return n}function E(t,e){for(var c in e)t[c]=e[c];return t}function T(t){for(var e={},c=0;c<t.length;c++)t[c]&&E(e,t[c]);return e}function I(t,e,c){}var x=function(t,e,c){return!1},O=function(t){return t};function N(t,e){if(t===e)return!0;var c=o(t),n=o(e);if(!c||!n)return!c&&!n&&String(t)===String(e);try{var r=Array.isArray(t),i=Array.isArray(e);if(r&&i)return t.length===e.length&&t.every((function(t,c){return N(t,e[c])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every((function(c){return N(t[c],e[c])}))}catch(l){return!1}}function R(t,e){for(var c=0;c<t.length;c++)if(N(t[c],e))return c;return-1}function P(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var j="data-server-rendered",D=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:x,isReservedAttr:x,isUnknownElement:x,getTagNamespace:I,parsePlatformTagName:O,mustUseProp:x,async:!0,_lifecycleHooks:U},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function $(t,e,c,n){Object.defineProperty(t,e,{value:c,enumerable:!!n,writable:!0,configurable:!0})}var B=new RegExp("[^"+q.source+".$_\\d]");function G(t){if(!B.test(t)){var e=t.split(".");return function(t){for(var c=0;c<e.length;c++){if(!t)return;t=t[e[c]]}return t}}}var K,W="__proto__"in{},X="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=Y&&WXEnvironment.platform.toLowerCase(),Q=X&&window.navigator.userAgent.toLowerCase(),tt=Q&&/msie|trident/.test(Q),et=Q&&Q.indexOf("msie 9.0")>0,ct=Q&&Q.indexOf("edge/")>0,nt=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===J),rt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/)),it={}.watch,at=!1;if(X)try{var st={};Object.defineProperty(st,"passive",{get:function(){at=!0}}),window.addEventListener("test-passive",null,st)}catch(Va){}var ot=function(){return void 0===K&&(K=!X&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},lt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ht(t){return"function"===typeof t&&/native code/.test(t.toString())}var ut,ft="undefined"!==typeof Symbol&&ht(Symbol)&&"undefined"!==typeof Reflect&&ht(Reflect.ownKeys);ut="undefined"!==typeof Set&&ht(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var vt=I,mt=0,dt=function(){this.id=mt++,this.subs=[]};dt.prototype.addSub=function(t){this.subs.push(t)},dt.prototype.removeSub=function(t){g(this.subs,t)},dt.prototype.depend=function(){dt.target&&dt.target.addDep(this)},dt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,c=t.length;e<c;e++)t[e].update()},dt.target=null;var pt=[];function zt(t){pt.push(t),dt.target=t}function gt(){pt.pop(),dt.target=pt[pt.length-1]}var yt=function(t,e,c,n,r,i,a,s){this.tag=t,this.data=e,this.children=c,this.text=n,this.elm=r,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Mt={child:{configurable:!0}};Mt.child.get=function(){return this.componentInstance},Object.defineProperties(yt.prototype,Mt);var Ct=function(t){void 0===t&&(t="");var e=new yt;return e.text=t,e.isComment=!0,e};function bt(t){return new yt(void 0,void 0,void 0,String(t))}function Vt(t){var e=new yt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Ht=Array.prototype,Lt=Object.create(Ht),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach((function(t){var e=Ht[t];$(Lt,t,(function(){var c=[],n=arguments.length;while(n--)c[n]=arguments[n];var r,i=e.apply(this,c),a=this.__ob__;switch(t){case"push":case"unshift":r=c;break;case"splice":r=c.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),i}))}));var At=Object.getOwnPropertyNames(Lt),St=!0;function _t(t){St=t}var kt=function(t){this.value=t,this.dep=new dt,this.vmCount=0,$(t,"__ob__",this),Array.isArray(t)?(W?Et(t,Lt):Tt(t,Lt,At),this.observeArray(t)):this.walk(t)};function Et(t,e){t.__proto__=e}function Tt(t,e,c){for(var n=0,r=c.length;n<r;n++){var i=c[n];$(t,i,e[i])}}function It(t,e){var c;if(o(t)&&!(t instanceof yt))return M(t,"__ob__")&&t.__ob__ instanceof kt?c=t.__ob__:St&&!ot()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(c=new kt(t)),e&&c&&c.vmCount++,c}function xt(t,e,c,n,r){var i=new dt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,o=a&&a.set;s&&!o||2!==arguments.length||(c=t[e]);var l=!r&&It(c);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):c;return dt.target&&(i.depend(),l&&(l.dep.depend(),Array.isArray(e)&&Rt(e))),e},set:function(e){var n=s?s.call(t):c;e===n||e!==e&&n!==n||s&&!o||(o?o.call(t,e):c=e,l=!r&&It(e),i.notify())}})}}function Ot(t,e,c){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,c),c;if(e in t&&!(e in Object.prototype))return t[e]=c,c;var n=t.__ob__;return t._isVue||n&&n.vmCount?c:n?(xt(n.value,e,c),n.dep.notify(),c):(t[e]=c,c)}function Nt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var c=t.__ob__;t._isVue||c&&c.vmCount||M(t,e)&&(delete t[e],c&&c.dep.notify())}}function Rt(t){for(var e=void 0,c=0,n=t.length;c<n;c++)e=t[c],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Rt(e)}kt.prototype.walk=function(t){for(var e=Object.keys(t),c=0;c<e.length;c++)xt(t,e[c])},kt.prototype.observeArray=function(t){for(var e=0,c=t.length;e<c;e++)It(t[e])};var Pt=F.optionMergeStrategies;function jt(t,e){if(!e)return t;for(var c,n,r,i=ft?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)c=i[a],"__ob__"!==c&&(n=t[c],r=e[c],M(t,c)?n!==r&&h(n)&&h(r)&&jt(n,r):Ot(t,c,r));return t}function Dt(t,e,c){return c?function(){var n="function"===typeof e?e.call(c,c):e,r="function"===typeof t?t.call(c,c):t;return n?jt(n,r):r}:e?t?function(){return jt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Ut(t,e){var c=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return c?Ft(c):c}function Ft(t){for(var e=[],c=0;c<t.length;c++)-1===e.indexOf(t[c])&&e.push(t[c]);return e}function qt(t,e,c,n){var r=Object.create(t||null);return e?E(r,e):r}Pt.data=function(t,e,c){return c?Dt(t,e,c):e&&"function"!==typeof e?t:Dt(t,e)},U.forEach((function(t){Pt[t]=Ut})),D.forEach((function(t){Pt[t+"s"]=qt})),Pt.watch=function(t,e,c,n){if(t===it&&(t=void 0),e===it&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var i in E(r,t),e){var a=r[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),r[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return r},Pt.props=Pt.methods=Pt.inject=Pt.computed=function(t,e,c,n){if(!t)return e;var r=Object.create(null);return E(r,t),e&&E(r,e),r},Pt.provide=Dt;var Zt=function(t,e){return void 0===e?t:e};function $t(t,e){var c=t.props;if(c){var n,r,i,a={};if(Array.isArray(c)){n=c.length;while(n--)r=c[n],"string"===typeof r&&(i=V(r),a[i]={type:null})}else if(h(c))for(var s in c)r=c[s],i=V(s),a[i]=h(r)?r:{type:r};else 0;t.props=a}}function Bt(t,e){var c=t.inject;if(c){var n=t.inject={};if(Array.isArray(c))for(var r=0;r<c.length;r++)n[c[r]]={from:c[r]};else if(h(c))for(var i in c){var a=c[i];n[i]=h(a)?E({from:i},a):{from:a}}else 0}}function Gt(t){var e=t.directives;if(e)for(var c in e){var n=e[c];"function"===typeof n&&(e[c]={bind:n,update:n})}}function Kt(t,e,c){if("function"===typeof e&&(e=e.options),$t(e,c),Bt(e,c),Gt(e),!e._base&&(e.extends&&(t=Kt(t,e.extends,c)),e.mixins))for(var n=0,r=e.mixins.length;n<r;n++)t=Kt(t,e.mixins[n],c);var i,a={};for(i in t)s(i);for(i in e)M(t,i)||s(i);function s(n){var r=Pt[n]||Zt;a[n]=r(t[n],e[n],c,n)}return a}function Wt(t,e,c,n){if("string"===typeof c){var r=t[e];if(M(r,c))return r[c];var i=V(c);if(M(r,i))return r[i];var a=H(i);if(M(r,a))return r[a];var s=r[c]||r[i]||r[a];return s}}function Xt(t,e,c,n){var r=e[t],i=!M(c,t),a=c[t],s=ee(Boolean,r.type);if(s>-1)if(i&&!M(r,"default"))a=!1;else if(""===a||a===w(t)){var o=ee(String,r.type);(o<0||s<o)&&(a=!0)}if(void 0===a){a=Yt(n,r,t);var l=St;_t(!0),It(a),_t(l)}return a}function Yt(t,e,c){if(M(e,"default")){var n=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[c]&&void 0!==t._props[c]?t._props[c]:"function"===typeof n&&"Function"!==Qt(e.type)?n.call(t):n}}var Jt=/^\s*function (\w+)/;function Qt(t){var e=t&&t.toString().match(Jt);return e?e[1]:""}function te(t,e){return Qt(t)===Qt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var c=0,n=e.length;c<n;c++)if(te(e[c],t))return c;return-1}function ce(t,e,c){zt();try{if(e){var n=e;while(n=n.$parent){var r=n.$options.errorCaptured;if(r)for(var i=0;i<r.length;i++)try{var a=!1===r[i].call(n,t,e,c);if(a)return}catch(Va){re(Va,n,"errorCaptured hook")}}}re(t,e,c)}finally{gt()}}function ne(t,e,c,n,r){var i;try{i=c?t.apply(e,c):t.call(e),i&&!i._isVue&&v(i)&&!i._handled&&(i.catch((function(t){return ce(t,n,r+" (Promise/async)")})),i._handled=!0)}catch(Va){ce(Va,n,r)}return i}function re(t,e,c){if(F.errorHandler)try{return F.errorHandler.call(null,t,e,c)}catch(Va){Va!==t&&ie(Va,null,"config.errorHandler")}ie(t,e,c)}function ie(t,e,c){if(!X&&!Y||"undefined"===typeof console)throw t;console.error(t)}var ae,se=!1,oe=[],le=!1;function he(){le=!1;var t=oe.slice(0);oe.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ht(Promise)){var ue=Promise.resolve();ae=function(){ue.then(he),nt&&setTimeout(I)},se=!0}else if(tt||"undefined"===typeof MutationObserver||!ht(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ae="undefined"!==typeof setImmediate&&ht(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var fe=1,ve=new MutationObserver(he),me=document.createTextNode(String(fe));ve.observe(me,{characterData:!0}),ae=function(){fe=(fe+1)%2,me.data=String(fe)},se=!0}function de(t,e){var c;if(oe.push((function(){if(t)try{t.call(e)}catch(Va){ce(Va,e,"nextTick")}else c&&c(e)})),le||(le=!0,ae()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){c=t}))}var pe=new ut;function ze(t){ge(t,pe),pe.clear()}function ge(t,e){var c,n,r=Array.isArray(t);if(!(!r&&!o(t)||Object.isFrozen(t)||t instanceof yt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(r){c=t.length;while(c--)ge(t[c],e)}else{n=Object.keys(t),c=n.length;while(c--)ge(t[n[c]],e)}}}var ye=C((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var c="~"===t.charAt(0);t=c?t.slice(1):t;var n="!"===t.charAt(0);return t=n?t.slice(1):t,{name:t,once:c,capture:n,passive:e}}));function Me(t,e){function c(){var t=arguments,n=c.fns;if(!Array.isArray(n))return ne(n,null,arguments,e,"v-on handler");for(var r=n.slice(),i=0;i<r.length;i++)ne(r[i],null,t,e,"v-on handler")}return c.fns=t,c}function Ce(t,e,c,r,a,s){var o,l,h,u;for(o in t)l=t[o],h=e[o],u=ye(o),n(l)||(n(h)?(n(l.fns)&&(l=t[o]=Me(l,s)),i(u.once)&&(l=t[o]=a(u.name,l,u.capture)),c(u.name,l,u.capture,u.passive,u.params)):l!==h&&(h.fns=l,t[o]=h));for(o in e)n(t[o])&&(u=ye(o),r(u.name,e[o],u.capture))}function be(t,e,c){var a;t instanceof yt&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function o(){c.apply(this,arguments),g(a.fns,o)}n(s)?a=Me([o]):r(s.fns)&&i(s.merged)?(a=s,a.fns.push(o)):a=Me([s,o]),a.merged=!0,t[e]=a}function Ve(t,e,c){var i=e.options.props;if(!n(i)){var a={},s=t.attrs,o=t.props;if(r(s)||r(o))for(var l in i){var h=w(l);He(a,o,l,h,!0)||He(a,s,l,h,!1)}return a}}function He(t,e,c,n,i){if(r(e)){if(M(e,c))return t[c]=e[c],i||delete e[c],!0;if(M(e,n))return t[c]=e[n],i||delete e[n],!0}return!1}function Le(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function we(t){return s(t)?[bt(t)]:Array.isArray(t)?Se(t):void 0}function Ae(t){return r(t)&&r(t.text)&&a(t.isComment)}function Se(t,e){var c,a,o,l,h=[];for(c=0;c<t.length;c++)a=t[c],n(a)||"boolean"===typeof a||(o=h.length-1,l=h[o],Array.isArray(a)?a.length>0&&(a=Se(a,(e||"")+"_"+c),Ae(a[0])&&Ae(l)&&(h[o]=bt(l.text+a[0].text),a.shift()),h.push.apply(h,a)):s(a)?Ae(l)?h[o]=bt(l.text+a):""!==a&&h.push(bt(a)):Ae(a)&&Ae(l)?h[o]=bt(l.text+a.text):(i(t._isVList)&&r(a.tag)&&n(a.key)&&r(e)&&(a.key="__vlist"+e+"_"+c+"__"),h.push(a)));return h}function _e(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function ke(t){var e=Ee(t.$options.inject,t);e&&(_t(!1),Object.keys(e).forEach((function(c){xt(t,c,e[c])})),_t(!0))}function Ee(t,e){if(t){for(var c=Object.create(null),n=ft?Reflect.ownKeys(t):Object.keys(t),r=0;r<n.length;r++){var i=n[r];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&M(s._provided,a)){c[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var o=t[i].default;c[i]="function"===typeof o?o.call(e):o}else 0}}return c}}function Te(t,e){if(!t||!t.length)return{};for(var c={},n=0,r=t.length;n<r;n++){var i=t[n],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)(c.default||(c.default=[])).push(i);else{var s=a.slot,o=c[s]||(c[s]=[]);"template"===i.tag?o.push.apply(o,i.children||[]):o.push(i)}}for(var l in c)c[l].every(Ie)&&delete c[l];return c}function Ie(t){return t.isComment&&!t.asyncFactory||" "===t.text}function xe(t){return t.isComment&&t.asyncFactory}function Oe(t,e,n){var r,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&n&&n!==c&&s===n.$key&&!i&&!n.$hasNormal)return n;for(var o in r={},t)t[o]&&"$"!==o[0]&&(r[o]=Ne(e,o,t[o]))}else r={};for(var l in e)l in r||(r[l]=Re(e,l));return t&&Object.isExtensible(t)&&(t._normalized=r),$(r,"$stable",a),$(r,"$key",s),$(r,"$hasNormal",i),r}function Ne(t,e,c){var n=function(){var t=arguments.length?c.apply(null,arguments):c({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:we(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!xe(e))?void 0:t};return c.proxy&&Object.defineProperty(t,e,{get:n,enumerable:!0,configurable:!0}),n}function Re(t,e){return function(){return t[e]}}function Pe(t,e){var c,n,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(c=new Array(t.length),n=0,i=t.length;n<i;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(o(t))if(ft&&t[Symbol.iterator]){c=[];var l=t[Symbol.iterator](),h=l.next();while(!h.done)c.push(e(h.value,c.length)),h=l.next()}else for(a=Object.keys(t),c=new Array(a.length),n=0,i=a.length;n<i;n++)s=a[n],c[n]=e(t[s],s,n);return r(c)||(c=[]),c._isVList=!0,c}function je(t,e,c,n){var r,i=this.$scopedSlots[t];i?(c=c||{},n&&(c=E(E({},n),c)),r=i(c)||("function"===typeof e?e():e)):r=this.$slots[t]||("function"===typeof e?e():e);var a=c&&c.slot;return a?this.$createElement("template",{slot:a},r):r}function De(t){return Wt(this.$options,"filters",t,!0)||O}function Ue(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Fe(t,e,c,n,r){var i=F.keyCodes[e]||c;return r&&n&&!F.keyCodes[e]?Ue(r,n):i?Ue(i,t):n?w(n)!==e:void 0===t}function qe(t,e,c,n,r){if(c)if(o(c)){var i;Array.isArray(c)&&(c=T(c));var a=function(a){if("class"===a||"style"===a||z(a))i=t;else{var s=t.attrs&&t.attrs.type;i=n||F.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var o=V(a),l=w(a);if(!(o in i)&&!(l in i)&&(i[a]=c[a],r)){var h=t.on||(t.on={});h["update:"+a]=function(t){c[a]=t}}};for(var s in c)a(s)}else;return t}function Ze(t,e){var c=this._staticTrees||(this._staticTrees=[]),n=c[t];return n&&!e||(n=c[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Be(n,"__static__"+t,!1)),n}function $e(t,e,c){return Be(t,"__once__"+e+(c?"_"+c:""),!0),t}function Be(t,e,c){if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]&&"string"!==typeof t[n]&&Ge(t[n],e+"_"+n,c);else Ge(t,e,c)}function Ge(t,e,c){t.isStatic=!0,t.key=e,t.isOnce=c}function Ke(t,e){if(e)if(h(e)){var c=t.on=t.on?E({},t.on):{};for(var n in e){var r=c[n],i=e[n];c[n]=r?[].concat(r,i):i}}else;return t}function We(t,e,c,n){e=e||{$stable:!c};for(var r=0;r<t.length;r++){var i=t[r];Array.isArray(i)?We(i,e,c):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return n&&(e.$key=n),e}function Xe(t,e){for(var c=0;c<e.length;c+=2){var n=e[c];"string"===typeof n&&n&&(t[e[c]]=e[c+1])}return t}function Ye(t,e){return"string"===typeof t?e+t:t}function Je(t){t._o=$e,t._n=d,t._s=m,t._l=Pe,t._t=je,t._q=N,t._i=R,t._m=Ze,t._f=De,t._k=Fe,t._b=qe,t._v=bt,t._e=Ct,t._u=We,t._g=Ke,t._d=Xe,t._p=Ye}function Qe(t,e,n,r,a){var s,o=this,l=a.options;M(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var h=i(l._compiled),u=!h;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||c,this.injections=Ee(l.inject,r),this.slots=function(){return o.$slots||Oe(t.scopedSlots,o.$slots=Te(n,r)),o.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Oe(t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Oe(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,c,n){var i=fc(s,t,e,c,n,u);return i&&!Array.isArray(i)&&(i.fnScopeId=l._scopeId,i.fnContext=r),i}:this._c=function(t,e,c,n){return fc(s,t,e,c,n,u)}}function tc(t,e,n,i,a){var s=t.options,o={},l=s.props;if(r(l))for(var h in l)o[h]=Xt(h,l,e||c);else r(n.attrs)&&cc(o,n.attrs),r(n.props)&&cc(o,n.props);var u=new Qe(n,o,a,i,t),f=s.render.call(null,u._c,u);if(f instanceof yt)return ec(f,n,u.parent,s,u);if(Array.isArray(f)){for(var v=we(f)||[],m=new Array(v.length),d=0;d<v.length;d++)m[d]=ec(v[d],n,u.parent,s,u);return m}}function ec(t,e,c,n,r){var i=Vt(t);return i.fnContext=c,i.fnOptions=n,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function cc(t,e){for(var c in e)t[V(c)]=e[c]}Je(Qe.prototype);var nc={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var c=t;nc.prepatch(c,c)}else{var n=t.componentInstance=ac(t,kc);n.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var c=e.componentOptions,n=e.componentInstance=t.componentInstance;Oc(n,c.propsData,c.listeners,e,c.children)},insert:function(t){var e=t.context,c=t.componentInstance;c._isMounted||(c._isMounted=!0,jc(c,"mounted")),t.data.keepAlive&&(e._isMounted?Jc(c):Rc(c,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pc(e,!0):e.$destroy())}},rc=Object.keys(nc);function ic(t,e,c,a,s){if(!n(t)){var l=c.$options._base;if(o(t)&&(t=l.extend(t)),"function"===typeof t){var h;if(n(t.cid)&&(h=t,t=bc(h,l),void 0===t))return Cc(h,e,c,a,s);e=e||{},bn(t),r(e.model)&&lc(t.options,e);var u=Ve(e,t,s);if(i(t.options.functional))return tc(t,u,e,c,a);var f=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var v=e.slot;e={},v&&(e.slot=v)}sc(e);var m=t.options.name||s,d=new yt("vue-component-"+t.cid+(m?"-"+m:""),e,void 0,void 0,void 0,c,{Ctor:t,propsData:u,listeners:f,tag:s,children:a},h);return d}}}function ac(t,e){var c={_isComponent:!0,_parentVnode:t,parent:e},n=t.data.inlineTemplate;return r(n)&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns),new t.componentOptions.Ctor(c)}function sc(t){for(var e=t.hook||(t.hook={}),c=0;c<rc.length;c++){var n=rc[c],r=e[n],i=nc[n];r===i||r&&r._merged||(e[n]=r?oc(i,r):i)}}function oc(t,e){var c=function(c,n){t(c,n),e(c,n)};return c._merged=!0,c}function lc(t,e){var c=t.model&&t.model.prop||"value",n=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[c]=e.model.value;var i=e.on||(e.on={}),a=i[n],s=e.model.callback;r(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[n]=[s].concat(a)):i[n]=s}var hc=1,uc=2;function fc(t,e,c,n,r,a){return(Array.isArray(c)||s(c))&&(r=n,n=c,c=void 0),i(a)&&(r=uc),vc(t,e,c,n,r)}function vc(t,e,c,n,i){if(r(c)&&r(c.__ob__))return Ct();if(r(c)&&r(c.is)&&(e=c.is),!e)return Ct();var a,s,o;(Array.isArray(n)&&"function"===typeof n[0]&&(c=c||{},c.scopedSlots={default:n[0]},n.length=0),i===uc?n=we(n):i===hc&&(n=Le(n)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||F.getTagNamespace(e),a=F.isReservedTag(e)?new yt(F.parsePlatformTagName(e),c,n,void 0,void 0,t):c&&c.pre||!r(o=Wt(t.$options,"components",e))?new yt(e,c,n,void 0,void 0,t):ic(o,c,t,n,e)):a=ic(e,c,t,n);return Array.isArray(a)?a:r(a)?(r(s)&&mc(a,s),r(c)&&dc(c),a):Ct()}function mc(t,e,c){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,c=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var o=t.children[a];r(o.tag)&&(n(o.ns)||i(c)&&"svg"!==o.tag)&&mc(o,e,c)}}function dc(t){o(t.style)&&ze(t.style),o(t.class)&&ze(t.class)}function pc(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=Te(e._renderChildren,r),t.$scopedSlots=c,t._c=function(e,c,n,r){return fc(t,e,c,n,r,!1)},t.$createElement=function(e,c,n,r){return fc(t,e,c,n,r,!0)};var i=n&&n.data;xt(t,"$attrs",i&&i.attrs||c,null,!0),xt(t,"$listeners",e._parentListeners||c,null,!0)}var zc,gc=null;function yc(t){Je(t.prototype),t.prototype.$nextTick=function(t){return de(t,this)},t.prototype._render=function(){var t,e=this,c=e.$options,n=c.render,r=c._parentVnode;r&&(e.$scopedSlots=Oe(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{gc=e,t=n.call(e._renderProxy,e.$createElement)}catch(Va){ce(Va,e,"render"),t=e._vnode}finally{gc=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof yt||(t=Ct()),t.parent=r,t}}function Mc(t,e){return(t.__esModule||ft&&"Module"===t[Symbol.toStringTag])&&(t=t.default),o(t)?e.extend(t):t}function Cc(t,e,c,n,r){var i=Ct();return i.asyncFactory=t,i.asyncMeta={data:e,context:c,children:n,tag:r},i}function bc(t,e){if(i(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var c=gc;if(c&&r(t.owners)&&-1===t.owners.indexOf(c)&&t.owners.push(c),i(t.loading)&&r(t.loadingComp))return t.loadingComp;if(c&&!r(t.owners)){var a=t.owners=[c],s=!0,l=null,h=null;c.$on("hook:destroyed",(function(){return g(a,c)}));var u=function(t){for(var e=0,c=a.length;e<c;e++)a[e].$forceUpdate();t&&(a.length=0,null!==l&&(clearTimeout(l),l=null),null!==h&&(clearTimeout(h),h=null))},f=P((function(c){t.resolved=Mc(c,e),s?a.length=0:u(!0)})),m=P((function(e){r(t.errorComp)&&(t.error=!0,u(!0))})),d=t(f,m);return o(d)&&(v(d)?n(t.resolved)&&d.then(f,m):v(d.component)&&(d.component.then(f,m),r(d.error)&&(t.errorComp=Mc(d.error,e)),r(d.loading)&&(t.loadingComp=Mc(d.loading,e),0===d.delay?t.loading=!0:l=setTimeout((function(){l=null,n(t.resolved)&&n(t.error)&&(t.loading=!0,u(!1))}),d.delay||200)),r(d.timeout)&&(h=setTimeout((function(){h=null,n(t.resolved)&&m(null)}),d.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function Vc(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var c=t[e];if(r(c)&&(r(c.componentOptions)||xe(c)))return c}}function Hc(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Sc(t,e)}function Lc(t,e){zc.$on(t,e)}function wc(t,e){zc.$off(t,e)}function Ac(t,e){var c=zc;return function n(){var r=e.apply(null,arguments);null!==r&&c.$off(t,n)}}function Sc(t,e,c){zc=t,Ce(e,c||{},Lc,wc,Ac,t),zc=void 0}function _c(t){var e=/^hook:/;t.prototype.$on=function(t,c){var n=this;if(Array.isArray(t))for(var r=0,i=t.length;r<i;r++)n.$on(t[r],c);else(n._events[t]||(n._events[t]=[])).push(c),e.test(t)&&(n._hasHookEvent=!0);return n},t.prototype.$once=function(t,e){var c=this;function n(){c.$off(t,n),e.apply(c,arguments)}return n.fn=e,c.$on(t,n),c},t.prototype.$off=function(t,e){var c=this;if(!arguments.length)return c._events=Object.create(null),c;if(Array.isArray(t)){for(var n=0,r=t.length;n<r;n++)c.$off(t[n],e);return c}var i,a=c._events[t];if(!a)return c;if(!e)return c._events[t]=null,c;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return c},t.prototype.$emit=function(t){var e=this,c=e._events[t];if(c){c=c.length>1?k(c):c;for(var n=k(arguments,1),r='event handler for "'+t+'"',i=0,a=c.length;i<a;i++)ne(c[i],e,n,e,r)}return e}}var kc=null;function Ec(t){var e=kc;return kc=t,function(){kc=e}}function Tc(t){var e=t.$options,c=e.parent;if(c&&!e.abstract){while(c.$options.abstract&&c.$parent)c=c.$parent;c.$children.push(t)}t.$parent=c,t.$root=c?c.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ic(t){t.prototype._update=function(t,e){var c=this,n=c.$el,r=c._vnode,i=Ec(c);c._vnode=t,c.$el=r?c.__patch__(r,t):c.__patch__(c.$el,t,e,!1),i(),n&&(n.__vue__=null),c.$el&&(c.$el.__vue__=c),c.$vnode&&c.$parent&&c.$vnode===c.$parent._vnode&&(c.$parent.$el=c.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){jc(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var c=t._watchers.length;while(c--)t._watchers[c].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),jc(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function xc(t,e,c){var n;return t.$el=e,t.$options.render||(t.$options.render=Ct),jc(t,"beforeMount"),n=function(){t._update(t._render(),c)},new cn(t,n,I,{before:function(){t._isMounted&&!t._isDestroyed&&jc(t,"beforeUpdate")}},!0),c=!1,null==t.$vnode&&(t._isMounted=!0,jc(t,"mounted")),t}function Oc(t,e,n,r,i){var a=r.data.scopedSlots,s=t.$scopedSlots,o=!!(a&&!a.$stable||s!==c&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key||!a&&t.$scopedSlots.$key),l=!!(i||t.$options._renderChildren||o);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data.attrs||c,t.$listeners=n||c,e&&t.$options.props){_t(!1);for(var h=t._props,u=t.$options._propKeys||[],f=0;f<u.length;f++){var v=u[f],m=t.$options.props;h[v]=Xt(v,m,e,t)}_t(!0),t.$options.propsData=e}n=n||c;var d=t.$options._parentListeners;t.$options._parentListeners=n,Sc(t,n,d),l&&(t.$slots=Te(i,r.context),t.$forceUpdate())}function Nc(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Rc(t,e){if(e){if(t._directInactive=!1,Nc(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var c=0;c<t.$children.length;c++)Rc(t.$children[c]);jc(t,"activated")}}function Pc(t,e){if((!e||(t._directInactive=!0,!Nc(t)))&&!t._inactive){t._inactive=!0;for(var c=0;c<t.$children.length;c++)Pc(t.$children[c]);jc(t,"deactivated")}}function jc(t,e){zt();var c=t.$options[e],n=e+" hook";if(c)for(var r=0,i=c.length;r<i;r++)ne(c[r],t,null,t,n);t._hasHookEvent&&t.$emit("hook:"+e),gt()}var Dc=[],Uc=[],Fc={},qc=!1,Zc=!1,$c=0;function Bc(){$c=Dc.length=Uc.length=0,Fc={},qc=Zc=!1}var Gc=0,Kc=Date.now;if(X&&!tt){var Wc=window.performance;Wc&&"function"===typeof Wc.now&&Kc()>document.createEvent("Event").timeStamp&&(Kc=function(){return Wc.now()})}function Xc(){var t,e;for(Gc=Kc(),Zc=!0,Dc.sort((function(t,e){return t.id-e.id})),$c=0;$c<Dc.length;$c++)t=Dc[$c],t.before&&t.before(),e=t.id,Fc[e]=null,t.run();var c=Uc.slice(),n=Dc.slice();Bc(),Qc(c),Yc(n),lt&&F.devtools&&lt.emit("flush")}function Yc(t){var e=t.length;while(e--){var c=t[e],n=c.vm;n._watcher===c&&n._isMounted&&!n._isDestroyed&&jc(n,"updated")}}function Jc(t){t._inactive=!1,Uc.push(t)}function Qc(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Rc(t[e],!0)}function tn(t){var e=t.id;if(null==Fc[e]){if(Fc[e]=!0,Zc){var c=Dc.length-1;while(c>$c&&Dc[c].id>t.id)c--;Dc.splice(c+1,0,t)}else Dc.push(t);qc||(qc=!0,de(Xc))}}var en=0,cn=function(t,e,c,n,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync,this.before=n.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=c,this.id=++en,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ut,this.newDepIds=new ut,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};cn.prototype.get=function(){var t;zt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Va){if(!this.user)throw Va;ce(Va,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ze(t),gt(),this.cleanupDeps()}return t},cn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},cn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var c=this.depIds;this.depIds=this.newDepIds,this.newDepIds=c,this.newDepIds.clear(),c=this.deps,this.deps=this.newDeps,this.newDeps=c,this.newDeps.length=0},cn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():tn(this)},cn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||o(t)||this.deep){var e=this.value;if(this.value=t,this.user){var c='callback for watcher "'+this.expression+'"';ne(this.cb,this.vm,[t,e],this.vm,c)}else this.cb.call(this.vm,t,e)}}},cn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},cn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},cn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var nn={enumerable:!0,configurable:!0,get:I,set:I};function rn(t,e,c){nn.get=function(){return this[e][c]},nn.set=function(t){this[e][c]=t},Object.defineProperty(t,c,nn)}function an(t){t._watchers=[];var e=t.$options;e.props&&sn(t,e.props),e.methods&&dn(t,e.methods),e.data?on(t):It(t._data={},!0),e.computed&&un(t,e.computed),e.watch&&e.watch!==it&&pn(t,e.watch)}function sn(t,e){var c=t.$options.propsData||{},n=t._props={},r=t.$options._propKeys=[],i=!t.$parent;i||_t(!1);var a=function(i){r.push(i);var a=Xt(i,e,c,t);xt(n,i,a),i in t||rn(t,"_props",i)};for(var s in e)a(s);_t(!0)}function on(t){var e=t.$options.data;e=t._data="function"===typeof e?ln(e,t):e||{},h(e)||(e={});var c=Object.keys(e),n=t.$options.props,r=(t.$options.methods,c.length);while(r--){var i=c[r];0,n&&M(n,i)||Z(i)||rn(t,"_data",i)}It(e,!0)}function ln(t,e){zt();try{return t.call(e,e)}catch(Va){return ce(Va,e,"data()"),{}}finally{gt()}}var hn={lazy:!0};function un(t,e){var c=t._computedWatchers=Object.create(null),n=ot();for(var r in e){var i=e[r],a="function"===typeof i?i:i.get;0,n||(c[r]=new cn(t,a||I,I,hn)),r in t||fn(t,r,i)}}function fn(t,e,c){var n=!ot();"function"===typeof c?(nn.get=n?vn(e):mn(c),nn.set=I):(nn.get=c.get?n&&!1!==c.cache?vn(e):mn(c.get):I,nn.set=c.set||I),Object.defineProperty(t,e,nn)}function vn(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),dt.target&&e.depend(),e.value}}function mn(t){return function(){return t.call(this,this)}}function dn(t,e){t.$options.props;for(var c in e)t[c]="function"!==typeof e[c]?I:_(e[c],t)}function pn(t,e){for(var c in e){var n=e[c];if(Array.isArray(n))for(var r=0;r<n.length;r++)zn(t,c,n[r]);else zn(t,c,n)}}function zn(t,e,c,n){return h(c)&&(n=c,c=c.handler),"string"===typeof c&&(c=t[c]),t.$watch(e,c,n)}function gn(t){var e={get:function(){return this._data}},c={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",c),t.prototype.$set=Ot,t.prototype.$delete=Nt,t.prototype.$watch=function(t,e,c){var n=this;if(h(e))return zn(n,t,e,c);c=c||{},c.user=!0;var r=new cn(n,t,e,c);if(c.immediate){var i='callback for immediate watcher "'+r.expression+'"';zt(),ne(e,n,[r.value],n,i),gt()}return function(){r.teardown()}}}var yn=0;function Mn(t){t.prototype._init=function(t){var e=this;e._uid=yn++,e._isVue=!0,t&&t._isComponent?Cn(e,t):e.$options=Kt(bn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Tc(e),Hc(e),pc(e),jc(e,"beforeCreate"),ke(e),an(e),_e(e),jc(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Cn(t,e){var c=t.$options=Object.create(t.constructor.options),n=e._parentVnode;c.parent=e.parent,c._parentVnode=n;var r=n.componentOptions;c.propsData=r.propsData,c._parentListeners=r.listeners,c._renderChildren=r.children,c._componentTag=r.tag,e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns)}function bn(t){var e=t.options;if(t.super){var c=bn(t.super),n=t.superOptions;if(c!==n){t.superOptions=c;var r=Vn(t);r&&E(t.extendOptions,r),e=t.options=Kt(c,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Vn(t){var e,c=t.options,n=t.sealedOptions;for(var r in c)c[r]!==n[r]&&(e||(e={}),e[r]=c[r]);return e}function Hn(t){this._init(t)}function Ln(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var c=k(arguments,1);return c.unshift(this),"function"===typeof t.install?t.install.apply(t,c):"function"===typeof t&&t.apply(null,c),e.push(t),this}}function wn(t){t.mixin=function(t){return this.options=Kt(this.options,t),this}}function An(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var c=this,n=c.cid,r=t._Ctor||(t._Ctor={});if(r[n])return r[n];var i=t.name||c.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(c.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Kt(c.options,t),a["super"]=c,a.options.props&&Sn(a),a.options.computed&&_n(a),a.extend=c.extend,a.mixin=c.mixin,a.use=c.use,D.forEach((function(t){a[t]=c[t]})),i&&(a.options.components[i]=a),a.superOptions=c.options,a.extendOptions=t,a.sealedOptions=E({},a.options),r[n]=a,a}}function Sn(t){var e=t.options.props;for(var c in e)rn(t.prototype,"_props",c)}function _n(t){var e=t.options.computed;for(var c in e)fn(t.prototype,c,e[c])}function kn(t){D.forEach((function(e){t[e]=function(t,c){return c?("component"===e&&h(c)&&(c.name=c.name||t,c=this.options._base.extend(c)),"directive"===e&&"function"===typeof c&&(c={bind:c,update:c}),this.options[e+"s"][t]=c,c):this.options[e+"s"][t]}}))}function En(t){return t&&(t.Ctor.options.name||t.tag)}function Tn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!u(t)&&t.test(e)}function In(t,e){var c=t.cache,n=t.keys,r=t._vnode;for(var i in c){var a=c[i];if(a){var s=a.name;s&&!e(s)&&xn(c,i,n,r)}}}function xn(t,e,c,n){var r=t[e];!r||n&&r.tag===n.tag||r.componentInstance.$destroy(),t[e]=null,g(c,e)}Mn(Hn),gn(Hn),_c(Hn),Ic(Hn),yc(Hn);var On=[String,RegExp,Array],Nn={name:"keep-alive",abstract:!0,props:{include:On,exclude:On,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,c=t.keys,n=t.vnodeToCache,r=t.keyToCache;if(n){var i=n.tag,a=n.componentInstance,s=n.componentOptions;e[r]={name:En(s),tag:i,componentInstance:a},c.push(r),this.max&&c.length>parseInt(this.max)&&xn(e,c[0],c,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)xn(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){In(t,(function(t){return Tn(e,t)}))})),this.$watch("exclude",(function(e){In(t,(function(t){return!Tn(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Vc(t),c=e&&e.componentOptions;if(c){var n=En(c),r=this,i=r.include,a=r.exclude;if(i&&(!n||!Tn(i,n))||a&&n&&Tn(a,n))return e;var s=this,o=s.cache,l=s.keys,h=null==e.key?c.Ctor.cid+(c.tag?"::"+c.tag:""):e.key;o[h]?(e.componentInstance=o[h].componentInstance,g(l,h),l.push(h)):(this.vnodeToCache=e,this.keyToCache=h),e.data.keepAlive=!0}return e||t&&t[0]}},Rn={KeepAlive:Nn};function Pn(t){var e={get:function(){return F}};Object.defineProperty(t,"config",e),t.util={warn:vt,extend:E,mergeOptions:Kt,defineReactive:xt},t.set=Ot,t.delete=Nt,t.nextTick=de,t.observable=function(t){return It(t),t},t.options=Object.create(null),D.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,E(t.options.components,Rn),Ln(t),wn(t),An(t),kn(t)}Pn(Hn),Object.defineProperty(Hn.prototype,"$isServer",{get:ot}),Object.defineProperty(Hn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Hn,"FunctionalRenderContext",{value:Qe}),Hn.version="2.6.14";var jn=p("style,class"),Dn=p("input,textarea,option,select,progress"),Un=function(t,e,c){return"value"===c&&Dn(t)&&"button"!==e||"selected"===c&&"option"===t||"checked"===c&&"input"===t||"muted"===c&&"video"===t},Fn=p("contenteditable,draggable,spellcheck"),qn=p("events,caret,typing,plaintext-only"),Zn=function(t,e){return Wn(e)||"false"===e?"false":"contenteditable"===t&&qn(e)?e:"true"},$n=p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Bn="http://www.w3.org/1999/xlink",Gn=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Kn=function(t){return Gn(t)?t.slice(6,t.length):""},Wn=function(t){return null==t||!1===t};function Xn(t){var e=t.data,c=t,n=t;while(r(n.componentInstance))n=n.componentInstance._vnode,n&&n.data&&(e=Yn(n.data,e));while(r(c=c.parent))c&&c.data&&(e=Yn(e,c.data));return Jn(e.staticClass,e.class)}function Yn(t,e){return{staticClass:Qn(t.staticClass,e.staticClass),class:r(t.class)?[t.class,e.class]:e.class}}function Jn(t,e){return r(t)||r(e)?Qn(t,tr(e)):""}function Qn(t,e){return t?e?t+" "+e:t:e||""}function tr(t){return Array.isArray(t)?er(t):o(t)?cr(t):"string"===typeof t?t:""}function er(t){for(var e,c="",n=0,i=t.length;n<i;n++)r(e=tr(t[n]))&&""!==e&&(c&&(c+=" "),c+=e);return c}function cr(t){var e="";for(var c in t)t[c]&&(e&&(e+=" "),e+=c);return e}var nr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},rr=p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ir=p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ar=function(t){return rr(t)||ir(t)};function sr(t){return ir(t)?"svg":"math"===t?"math":void 0}var or=Object.create(null);function lr(t){if(!X)return!0;if(ar(t))return!1;if(t=t.toLowerCase(),null!=or[t])return or[t];var e=document.createElement(t);return t.indexOf("-")>-1?or[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:or[t]=/HTMLUnknownElement/.test(e.toString())}var hr=p("text,number,password,search,email,tel,url");function ur(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function fr(t,e){var c=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&c.setAttribute("multiple","multiple"),c}function vr(t,e){return document.createElementNS(nr[t],e)}function mr(t){return document.createTextNode(t)}function dr(t){return document.createComment(t)}function pr(t,e,c){t.insertBefore(e,c)}function zr(t,e){t.removeChild(e)}function gr(t,e){t.appendChild(e)}function yr(t){return t.parentNode}function Mr(t){return t.nextSibling}function Cr(t){return t.tagName}function br(t,e){t.textContent=e}function Vr(t,e){t.setAttribute(e,"")}var Hr=Object.freeze({createElement:fr,createElementNS:vr,createTextNode:mr,createComment:dr,insertBefore:pr,removeChild:zr,appendChild:gr,parentNode:yr,nextSibling:Mr,tagName:Cr,setTextContent:br,setStyleScope:Vr}),Lr={create:function(t,e){wr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(wr(t,!0),wr(e))},destroy:function(t){wr(t,!0)}};function wr(t,e){var c=t.data.ref;if(r(c)){var n=t.context,i=t.componentInstance||t.elm,a=n.$refs;e?Array.isArray(a[c])?g(a[c],i):a[c]===i&&(a[c]=void 0):t.data.refInFor?Array.isArray(a[c])?a[c].indexOf(i)<0&&a[c].push(i):a[c]=[i]:a[c]=i}}var Ar=new yt("",{},[]),Sr=["create","activate","update","remove","destroy"];function _r(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&kr(t,e)||i(t.isAsyncPlaceholder)&&n(e.asyncFactory.error))}function kr(t,e){if("input"!==t.tag)return!0;var c,n=r(c=t.data)&&r(c=c.attrs)&&c.type,i=r(c=e.data)&&r(c=c.attrs)&&c.type;return n===i||hr(n)&&hr(i)}function Er(t,e,c){var n,i,a={};for(n=e;n<=c;++n)i=t[n].key,r(i)&&(a[i]=n);return a}function Tr(t){var e,c,a={},o=t.modules,l=t.nodeOps;for(e=0;e<Sr.length;++e)for(a[Sr[e]]=[],c=0;c<o.length;++c)r(o[c][Sr[e]])&&a[Sr[e]].push(o[c][Sr[e]]);function h(t){return new yt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function u(t,e){function c(){0===--c.listeners&&f(t)}return c.listeners=e,c}function f(t){var e=l.parentNode(t);r(e)&&l.removeChild(e,t)}function v(t,e,c,n,a,s,o){if(r(t.elm)&&r(s)&&(t=s[o]=Vt(t)),t.isRootInsert=!a,!m(t,e,c,n)){var h=t.data,u=t.children,f=t.tag;r(f)?(t.elm=t.ns?l.createElementNS(t.ns,f):l.createElement(f,t),b(t),y(t,u,e),r(h)&&C(t,e),g(c,t.elm,n)):i(t.isComment)?(t.elm=l.createComment(t.text),g(c,t.elm,n)):(t.elm=l.createTextNode(t.text),g(c,t.elm,n))}}function m(t,e,c,n){var a=t.data;if(r(a)){var s=r(t.componentInstance)&&a.keepAlive;if(r(a=a.hook)&&r(a=a.init)&&a(t,!1),r(t.componentInstance))return d(t,e),g(c,t.elm,n),i(s)&&z(t,e,c,n),!0}}function d(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,M(t)?(C(t,e),b(t)):(wr(t),e.push(t))}function z(t,e,c,n){var i,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,r(i=s.data)&&r(i=i.transition)){for(i=0;i<a.activate.length;++i)a.activate[i](Ar,s);e.push(s);break}g(c,t.elm,n)}function g(t,e,c){r(t)&&(r(c)?l.parentNode(c)===t&&l.insertBefore(t,e,c):l.appendChild(t,e))}function y(t,e,c){if(Array.isArray(e)){0;for(var n=0;n<e.length;++n)v(e[n],c,t.elm,null,!0,e,n)}else s(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function M(t){while(t.componentInstance)t=t.componentInstance._vnode;return r(t.tag)}function C(t,c){for(var n=0;n<a.create.length;++n)a.create[n](Ar,t);e=t.data.hook,r(e)&&(r(e.create)&&e.create(Ar,t),r(e.insert)&&c.push(t))}function b(t){var e;if(r(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var c=t;while(c)r(e=c.context)&&r(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),c=c.parent}r(e=kc)&&e!==t.context&&e!==t.fnContext&&r(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function V(t,e,c,n,r,i){for(;n<=r;++n)v(c[n],i,t,e,!1,c,n)}function H(t){var e,c,n=t.data;if(r(n))for(r(e=n.hook)&&r(e=e.destroy)&&e(t),e=0;e<a.destroy.length;++e)a.destroy[e](t);if(r(e=t.children))for(c=0;c<t.children.length;++c)H(t.children[c])}function L(t,e,c){for(;e<=c;++e){var n=t[e];r(n)&&(r(n.tag)?(w(n),H(n)):f(n.elm))}}function w(t,e){if(r(e)||r(t.data)){var c,n=a.remove.length+1;for(r(e)?e.listeners+=n:e=u(t.elm,n),r(c=t.componentInstance)&&r(c=c._vnode)&&r(c.data)&&w(c,e),c=0;c<a.remove.length;++c)a.remove[c](t,e);r(c=t.data.hook)&&r(c=c.remove)?c(t,e):e()}else f(t.elm)}function A(t,e,c,i,a){var s,o,h,u,f=0,m=0,d=e.length-1,p=e[0],z=e[d],g=c.length-1,y=c[0],M=c[g],C=!a;while(f<=d&&m<=g)n(p)?p=e[++f]:n(z)?z=e[--d]:_r(p,y)?(_(p,y,i,c,m),p=e[++f],y=c[++m]):_r(z,M)?(_(z,M,i,c,g),z=e[--d],M=c[--g]):_r(p,M)?(_(p,M,i,c,g),C&&l.insertBefore(t,p.elm,l.nextSibling(z.elm)),p=e[++f],M=c[--g]):_r(z,y)?(_(z,y,i,c,m),C&&l.insertBefore(t,z.elm,p.elm),z=e[--d],y=c[++m]):(n(s)&&(s=Er(e,f,d)),o=r(y.key)?s[y.key]:S(y,e,f,d),n(o)?v(y,i,t,p.elm,!1,c,m):(h=e[o],_r(h,y)?(_(h,y,i,c,m),e[o]=void 0,C&&l.insertBefore(t,h.elm,p.elm)):v(y,i,t,p.elm,!1,c,m)),y=c[++m]);f>d?(u=n(c[g+1])?null:c[g+1].elm,V(t,u,c,m,g,i)):m>g&&L(e,f,d)}function S(t,e,c,n){for(var i=c;i<n;i++){var a=e[i];if(r(a)&&_r(t,a))return i}}function _(t,e,c,s,o,h){if(t!==e){r(e.elm)&&r(s)&&(e=s[o]=Vt(e));var u=e.elm=t.elm;if(i(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?T(t.elm,e,c):e.isAsyncPlaceholder=!0;else if(i(e.isStatic)&&i(t.isStatic)&&e.key===t.key&&(i(e.isCloned)||i(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,v=e.data;r(v)&&r(f=v.hook)&&r(f=f.prepatch)&&f(t,e);var m=t.children,d=e.children;if(r(v)&&M(e)){for(f=0;f<a.update.length;++f)a.update[f](t,e);r(f=v.hook)&&r(f=f.update)&&f(t,e)}n(e.text)?r(m)&&r(d)?m!==d&&A(u,m,d,c,h):r(d)?(r(t.text)&&l.setTextContent(u,""),V(u,null,d,0,d.length-1,c)):r(m)?L(m,0,m.length-1):r(t.text)&&l.setTextContent(u,""):t.text!==e.text&&l.setTextContent(u,e.text),r(v)&&r(f=v.hook)&&r(f=f.postpatch)&&f(t,e)}}}function k(t,e,c){if(i(c)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var n=0;n<e.length;++n)e[n].data.hook.insert(e[n])}var E=p("attrs,class,staticClass,staticStyle,key");function T(t,e,c,n){var a,s=e.tag,o=e.data,l=e.children;if(n=n||o&&o.pre,e.elm=t,i(e.isComment)&&r(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(r(o)&&(r(a=o.hook)&&r(a=a.init)&&a(e,!0),r(a=e.componentInstance)))return d(e,c),!0;if(r(s)){if(r(l))if(t.hasChildNodes())if(r(a=o)&&r(a=a.domProps)&&r(a=a.innerHTML)){if(a!==t.innerHTML)return!1}else{for(var h=!0,u=t.firstChild,f=0;f<l.length;f++){if(!u||!T(u,l[f],c,n)){h=!1;break}u=u.nextSibling}if(!h||u)return!1}else y(e,l,c);if(r(o)){var v=!1;for(var m in o)if(!E(m)){v=!0,C(e,c);break}!v&&o["class"]&&ze(o["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,c,s){if(!n(e)){var o=!1,u=[];if(n(t))o=!0,v(e,u);else{var f=r(t.nodeType);if(!f&&_r(t,e))_(t,e,u,null,null,s);else{if(f){if(1===t.nodeType&&t.hasAttribute(j)&&(t.removeAttribute(j),c=!0),i(c)&&T(t,e,u))return k(e,u,!0),t;t=h(t)}var m=t.elm,d=l.parentNode(m);if(v(e,u,m._leaveCb?null:d,l.nextSibling(m)),r(e.parent)){var p=e.parent,z=M(e);while(p){for(var g=0;g<a.destroy.length;++g)a.destroy[g](p);if(p.elm=e.elm,z){for(var y=0;y<a.create.length;++y)a.create[y](Ar,p);var C=p.data.hook.insert;if(C.merged)for(var b=1;b<C.fns.length;b++)C.fns[b]()}else wr(p);p=p.parent}}r(d)?L([t],0,0):r(t.tag)&&H(t)}}return k(e,u,o),e.elm}r(t)&&H(t)}}var Ir={create:xr,update:xr,destroy:function(t){xr(t,Ar)}};function xr(t,e){(t.data.directives||e.data.directives)&&Or(t,e)}function Or(t,e){var c,n,r,i=t===Ar,a=e===Ar,s=Rr(t.data.directives,t.context),o=Rr(e.data.directives,e.context),l=[],h=[];for(c in o)n=s[c],r=o[c],n?(r.oldValue=n.value,r.oldArg=n.arg,jr(r,"update",e,t),r.def&&r.def.componentUpdated&&h.push(r)):(jr(r,"bind",e,t),r.def&&r.def.inserted&&l.push(r));if(l.length){var u=function(){for(var c=0;c<l.length;c++)jr(l[c],"inserted",e,t)};i?be(e,"insert",u):u()}if(h.length&&be(e,"postpatch",(function(){for(var c=0;c<h.length;c++)jr(h[c],"componentUpdated",e,t)})),!i)for(c in s)o[c]||jr(s[c],"unbind",t,t,a)}var Nr=Object.create(null);function Rr(t,e){var c,n,r=Object.create(null);if(!t)return r;for(c=0;c<t.length;c++)n=t[c],n.modifiers||(n.modifiers=Nr),r[Pr(n)]=n,n.def=Wt(e.$options,"directives",n.name,!0);return r}function Pr(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function jr(t,e,c,n,r){var i=t.def&&t.def[e];if(i)try{i(c.elm,t,c,n,r)}catch(Va){ce(Va,c.context,"directive "+t.name+" "+e+" hook")}}var Dr=[Lr,Ir];function Ur(t,e){var c=e.componentOptions;if((!r(c)||!1!==c.Ctor.options.inheritAttrs)&&(!n(t.data.attrs)||!n(e.data.attrs))){var i,a,s,o=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(i in r(h.__ob__)&&(h=e.data.attrs=E({},h)),h)a=h[i],s=l[i],s!==a&&Fr(o,i,a,e.data.pre);for(i in(tt||ct)&&h.value!==l.value&&Fr(o,"value",h.value),l)n(h[i])&&(Gn(i)?o.removeAttributeNS(Bn,Kn(i)):Fn(i)||o.removeAttribute(i))}}function Fr(t,e,c,n){n||t.tagName.indexOf("-")>-1?qr(t,e,c):$n(e)?Wn(c)?t.removeAttribute(e):(c="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,c)):Fn(e)?t.setAttribute(e,Zn(e,c)):Gn(e)?Wn(c)?t.removeAttributeNS(Bn,Kn(e)):t.setAttributeNS(Bn,e,c):qr(t,e,c)}function qr(t,e,c){if(Wn(c))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==c&&!t.__ieph){var n=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",n)};t.addEventListener("input",n),t.__ieph=!0}t.setAttribute(e,c)}}var Zr={create:Ur,update:Ur};function $r(t,e){var c=e.elm,i=e.data,a=t.data;if(!(n(i.staticClass)&&n(i.class)&&(n(a)||n(a.staticClass)&&n(a.class)))){var s=Xn(e),o=c._transitionClasses;r(o)&&(s=Qn(s,tr(o))),s!==c._prevClass&&(c.setAttribute("class",s),c._prevClass=s)}}var Br,Gr={create:$r,update:$r},Kr="__r",Wr="__c";function Xr(t){if(r(t[Kr])){var e=tt?"change":"input";t[e]=[].concat(t[Kr],t[e]||[]),delete t[Kr]}r(t[Wr])&&(t.change=[].concat(t[Wr],t.change||[]),delete t[Wr])}function Yr(t,e,c){var n=Br;return function r(){var i=e.apply(null,arguments);null!==i&&ti(t,r,c,n)}}var Jr=se&&!(rt&&Number(rt[1])<=53);function Qr(t,e,c,n){if(Jr){var r=Gc,i=e;e=i._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return i.apply(this,arguments)}}Br.addEventListener(t,e,at?{capture:c,passive:n}:c)}function ti(t,e,c,n){(n||Br).removeEventListener(t,e._wrapper||e,c)}function ei(t,e){if(!n(t.data.on)||!n(e.data.on)){var c=e.data.on||{},r=t.data.on||{};Br=e.elm,Xr(c),Ce(c,r,Qr,ti,Yr,e.context),Br=void 0}}var ci,ni={create:ei,update:ei};function ri(t,e){if(!n(t.data.domProps)||!n(e.data.domProps)){var c,i,a=e.elm,s=t.data.domProps||{},o=e.data.domProps||{};for(c in r(o.__ob__)&&(o=e.data.domProps=E({},o)),s)c in o||(a[c]="");for(c in o){if(i=o[c],"textContent"===c||"innerHTML"===c){if(e.children&&(e.children.length=0),i===s[c])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===c&&"PROGRESS"!==a.tagName){a._value=i;var l=n(i)?"":String(i);ii(a,l)&&(a.value=l)}else if("innerHTML"===c&&ir(a.tagName)&&n(a.innerHTML)){ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+i+"</svg>";var h=ci.firstChild;while(a.firstChild)a.removeChild(a.firstChild);while(h.firstChild)a.appendChild(h.firstChild)}else if(i!==s[c])try{a[c]=i}catch(Va){}}}}function ii(t,e){return!t.composing&&("OPTION"===t.tagName||ai(t,e)||si(t,e))}function ai(t,e){var c=!0;try{c=document.activeElement!==t}catch(Va){}return c&&t.value!==e}function si(t,e){var c=t.value,n=t._vModifiers;if(r(n)){if(n.number)return d(c)!==d(e);if(n.trim)return c.trim()!==e.trim()}return c!==e}var oi={create:ri,update:ri},li=C((function(t){var e={},c=/;(?![^(]*\))/g,n=/:(.+)/;return t.split(c).forEach((function(t){if(t){var c=t.split(n);c.length>1&&(e[c[0].trim()]=c[1].trim())}})),e}));function hi(t){var e=ui(t.style);return t.staticStyle?E(t.staticStyle,e):e}function ui(t){return Array.isArray(t)?T(t):"string"===typeof t?li(t):t}function fi(t,e){var c,n={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(c=hi(r.data))&&E(n,c)}(c=hi(t.data))&&E(n,c);var i=t;while(i=i.parent)i.data&&(c=hi(i.data))&&E(n,c);return n}var vi,mi=/^--/,di=/\s*!important$/,pi=function(t,e,c){if(mi.test(e))t.style.setProperty(e,c);else if(di.test(c))t.style.setProperty(w(e),c.replace(di,""),"important");else{var n=gi(e);if(Array.isArray(c))for(var r=0,i=c.length;r<i;r++)t.style[n]=c[r];else t.style[n]=c}},zi=["Webkit","Moz","ms"],gi=C((function(t){if(vi=vi||document.createElement("div").style,t=V(t),"filter"!==t&&t in vi)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),c=0;c<zi.length;c++){var n=zi[c]+e;if(n in vi)return n}}));function yi(t,e){var c=e.data,i=t.data;if(!(n(c.staticStyle)&&n(c.style)&&n(i.staticStyle)&&n(i.style))){var a,s,o=e.elm,l=i.staticStyle,h=i.normalizedStyle||i.style||{},u=l||h,f=ui(e.data.style)||{};e.data.normalizedStyle=r(f.__ob__)?E({},f):f;var v=fi(e,!0);for(s in u)n(v[s])&&pi(o,s,"");for(s in v)a=v[s],a!==u[s]&&pi(o,s,null==a?"":a)}}var Mi={create:yi,update:yi},Ci=/\s+/;function bi(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ci).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var c=" "+(t.getAttribute("class")||"")+" ";c.indexOf(" "+e+" ")<0&&t.setAttribute("class",(c+e).trim())}}function Vi(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ci).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var c=" "+(t.getAttribute("class")||"")+" ",n=" "+e+" ";while(c.indexOf(n)>=0)c=c.replace(n," ");c=c.trim(),c?t.setAttribute("class",c):t.removeAttribute("class")}}function Hi(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&E(e,Li(t.name||"v")),E(e,t),e}return"string"===typeof t?Li(t):void 0}}var Li=C((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),wi=X&&!et,Ai="transition",Si="animation",_i="transition",ki="transitionend",Ei="animation",Ti="animationend";wi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(_i="WebkitTransition",ki="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ei="WebkitAnimation",Ti="webkitAnimationEnd"));var Ii=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function xi(t){Ii((function(){Ii(t)}))}function Oi(t,e){var c=t._transitionClasses||(t._transitionClasses=[]);c.indexOf(e)<0&&(c.push(e),bi(t,e))}function Ni(t,e){t._transitionClasses&&g(t._transitionClasses,e),Vi(t,e)}function Ri(t,e,c){var n=ji(t,e),r=n.type,i=n.timeout,a=n.propCount;if(!r)return c();var s=r===Ai?ki:Ti,o=0,l=function(){t.removeEventListener(s,h),c()},h=function(e){e.target===t&&++o>=a&&l()};setTimeout((function(){o<a&&l()}),i+1),t.addEventListener(s,h)}var Pi=/\b(transform|all)(,|$)/;function ji(t,e){var c,n=window.getComputedStyle(t),r=(n[_i+"Delay"]||"").split(", "),i=(n[_i+"Duration"]||"").split(", "),a=Di(r,i),s=(n[Ei+"Delay"]||"").split(", "),o=(n[Ei+"Duration"]||"").split(", "),l=Di(s,o),h=0,u=0;e===Ai?a>0&&(c=Ai,h=a,u=i.length):e===Si?l>0&&(c=Si,h=l,u=o.length):(h=Math.max(a,l),c=h>0?a>l?Ai:Si:null,u=c?c===Ai?i.length:o.length:0);var f=c===Ai&&Pi.test(n[_i+"Property"]);return{type:c,timeout:h,propCount:u,hasTransform:f}}function Di(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,c){return Ui(e)+Ui(t[c])})))}function Ui(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Fi(t,e){var c=t.elm;r(c._leaveCb)&&(c._leaveCb.cancelled=!0,c._leaveCb());var i=Hi(t.data.transition);if(!n(i)&&!r(c._enterCb)&&1===c.nodeType){var a=i.css,s=i.type,l=i.enterClass,h=i.enterToClass,u=i.enterActiveClass,f=i.appearClass,v=i.appearToClass,m=i.appearActiveClass,p=i.beforeEnter,z=i.enter,g=i.afterEnter,y=i.enterCancelled,M=i.beforeAppear,C=i.appear,b=i.afterAppear,V=i.appearCancelled,H=i.duration,L=kc,w=kc.$vnode;while(w&&w.parent)L=w.context,w=w.parent;var A=!L._isMounted||!t.isRootInsert;if(!A||C||""===C){var S=A&&f?f:l,_=A&&m?m:u,k=A&&v?v:h,E=A&&M||p,T=A&&"function"===typeof C?C:z,I=A&&b||g,x=A&&V||y,O=d(o(H)?H.enter:H);0;var N=!1!==a&&!et,R=$i(T),j=c._enterCb=P((function(){N&&(Ni(c,k),Ni(c,_)),j.cancelled?(N&&Ni(c,S),x&&x(c)):I&&I(c),c._enterCb=null}));t.data.show||be(t,"insert",(function(){var e=c.parentNode,n=e&&e._pending&&e._pending[t.key];n&&n.tag===t.tag&&n.elm._leaveCb&&n.elm._leaveCb(),T&&T(c,j)})),E&&E(c),N&&(Oi(c,S),Oi(c,_),xi((function(){Ni(c,S),j.cancelled||(Oi(c,k),R||(Zi(O)?setTimeout(j,O):Ri(c,s,j)))}))),t.data.show&&(e&&e(),T&&T(c,j)),N||R||j()}}}function qi(t,e){var c=t.elm;r(c._enterCb)&&(c._enterCb.cancelled=!0,c._enterCb());var i=Hi(t.data.transition);if(n(i)||1!==c.nodeType)return e();if(!r(c._leaveCb)){var a=i.css,s=i.type,l=i.leaveClass,h=i.leaveToClass,u=i.leaveActiveClass,f=i.beforeLeave,v=i.leave,m=i.afterLeave,p=i.leaveCancelled,z=i.delayLeave,g=i.duration,y=!1!==a&&!et,M=$i(v),C=d(o(g)?g.leave:g);0;var b=c._leaveCb=P((function(){c.parentNode&&c.parentNode._pending&&(c.parentNode._pending[t.key]=null),y&&(Ni(c,h),Ni(c,u)),b.cancelled?(y&&Ni(c,l),p&&p(c)):(e(),m&&m(c)),c._leaveCb=null}));z?z(V):V()}function V(){b.cancelled||(!t.data.show&&c.parentNode&&((c.parentNode._pending||(c.parentNode._pending={}))[t.key]=t),f&&f(c),y&&(Oi(c,l),Oi(c,u),xi((function(){Ni(c,l),b.cancelled||(Oi(c,h),M||(Zi(C)?setTimeout(b,C):Ri(c,s,b)))}))),v&&v(c,b),y||M||b())}}function Zi(t){return"number"===typeof t&&!isNaN(t)}function $i(t){if(n(t))return!1;var e=t.fns;return r(e)?$i(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Bi(t,e){!0!==e.data.show&&Fi(e)}var Gi=X?{create:Bi,activate:Bi,remove:function(t,e){!0!==t.data.show?qi(t,e):e()}}:{},Ki=[Zr,Gr,ni,oi,Mi,Gi],Wi=Ki.concat(Dr),Xi=Tr({nodeOps:Hr,modules:Wi});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&ra(t,"input")}));var Yi={inserted:function(t,e,c,n){"select"===c.tag?(n.elm&&!n.elm._vOptions?be(c,"postpatch",(function(){Yi.componentUpdated(t,e,c)})):Ji(t,e,c.context),t._vOptions=[].map.call(t.options,ea)):("textarea"===c.tag||hr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ca),t.addEventListener("compositionend",na),t.addEventListener("change",na),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,c){if("select"===c.tag){Ji(t,e,c.context);var n=t._vOptions,r=t._vOptions=[].map.call(t.options,ea);if(r.some((function(t,e){return!N(t,n[e])}))){var i=t.multiple?e.value.some((function(t){return ta(t,r)})):e.value!==e.oldValue&&ta(e.value,r);i&&ra(t,"change")}}}};function Ji(t,e,c){Qi(t,e,c),(tt||ct)&&setTimeout((function(){Qi(t,e,c)}),0)}function Qi(t,e,c){var n=e.value,r=t.multiple;if(!r||Array.isArray(n)){for(var i,a,s=0,o=t.options.length;s<o;s++)if(a=t.options[s],r)i=R(n,ea(a))>-1,a.selected!==i&&(a.selected=i);else if(N(ea(a),n))return void(t.selectedIndex!==s&&(t.selectedIndex=s));r||(t.selectedIndex=-1)}}function ta(t,e){return e.every((function(e){return!N(e,t)}))}function ea(t){return"_value"in t?t._value:t.value}function ca(t){t.target.composing=!0}function na(t){t.target.composing&&(t.target.composing=!1,ra(t.target,"input"))}function ra(t,e){var c=document.createEvent("HTMLEvents");c.initEvent(e,!0,!0),t.dispatchEvent(c)}function ia(t){return!t.componentInstance||t.data&&t.data.transition?t:ia(t.componentInstance._vnode)}var aa={bind:function(t,e,c){var n=e.value;c=ia(c);var r=c.data&&c.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;n&&r?(c.data.show=!0,Fi(c,(function(){t.style.display=i}))):t.style.display=n?i:"none"},update:function(t,e,c){var n=e.value,r=e.oldValue;if(!n!==!r){c=ia(c);var i=c.data&&c.data.transition;i?(c.data.show=!0,n?Fi(c,(function(){t.style.display=t.__vOriginalDisplay})):qi(c,(function(){t.style.display="none"}))):t.style.display=n?t.__vOriginalDisplay:"none"}},unbind:function(t,e,c,n,r){r||(t.style.display=t.__vOriginalDisplay)}},sa={model:Yi,show:aa},oa={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function la(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?la(Vc(e.children)):t}function ha(t){var e={},c=t.$options;for(var n in c.propsData)e[n]=t[n];var r=c._parentListeners;for(var i in r)e[V(i)]=r[i];return e}function ua(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fa(t){while(t=t.parent)if(t.data.transition)return!0}function va(t,e){return e.key===t.key&&e.tag===t.tag}var ma=function(t){return t.tag||xe(t)},da=function(t){return"show"===t.name},pa={name:"transition",props:oa,abstract:!0,render:function(t){var e=this,c=this.$slots.default;if(c&&(c=c.filter(ma),c.length)){0;var n=this.mode;0;var r=c[0];if(fa(this.$vnode))return r;var i=la(r);if(!i)return r;if(this._leaving)return ua(t,r);var a="__transition-"+this._uid+"-";i.key=null==i.key?i.isComment?a+"comment":a+i.tag:s(i.key)?0===String(i.key).indexOf(a)?i.key:a+i.key:i.key;var o=(i.data||(i.data={})).transition=ha(this),l=this._vnode,h=la(l);if(i.data.directives&&i.data.directives.some(da)&&(i.data.show=!0),h&&h.data&&!va(i,h)&&!xe(h)&&(!h.componentInstance||!h.componentInstance._vnode.isComment)){var u=h.data.transition=E({},o);if("out-in"===n)return this._leaving=!0,be(u,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ua(t,r);if("in-out"===n){if(xe(i))return l;var f,v=function(){f()};be(o,"afterEnter",v),be(o,"enterCancelled",v),be(u,"delayLeave",(function(t){f=t}))}}return r}}},za=E({tag:String,moveClass:String},oa);delete za.mode;var ga={props:za,beforeMount:function(){var t=this,e=this._update;this._update=function(c,n){var r=Ec(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,c,n)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",c=Object.create(null),n=this.prevChildren=this.children,r=this.$slots.default||[],i=this.children=[],a=ha(this),s=0;s<r.length;s++){var o=r[s];if(o.tag)if(null!=o.key&&0!==String(o.key).indexOf("__vlist"))i.push(o),c[o.key]=o,(o.data||(o.data={})).transition=a;else;}if(n){for(var l=[],h=[],u=0;u<n.length;u++){var f=n[u];f.data.transition=a,f.data.pos=f.elm.getBoundingClientRect(),c[f.key]?l.push(f):h.push(f)}this.kept=t(e,null,l),this.removed=h}return t(e,null,i)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(ya),t.forEach(Ma),t.forEach(Ca),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var c=t.elm,n=c.style;Oi(c,e),n.transform=n.WebkitTransform=n.transitionDuration="",c.addEventListener(ki,c._moveCb=function t(n){n&&n.target!==c||n&&!/transform$/.test(n.propertyName)||(c.removeEventListener(ki,t),c._moveCb=null,Ni(c,e))})}})))},methods:{hasMove:function(t,e){if(!wi)return!1;if(this._hasMove)return this._hasMove;var c=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Vi(c,t)})),bi(c,e),c.style.display="none",this.$el.appendChild(c);var n=ji(c);return this.$el.removeChild(c),this._hasMove=n.hasTransform}}};function ya(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Ma(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ca(t){var e=t.data.pos,c=t.data.newPos,n=e.left-c.left,r=e.top-c.top;if(n||r){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+n+"px,"+r+"px)",i.transitionDuration="0s"}}var ba={Transition:pa,TransitionGroup:ga};Hn.config.mustUseProp=Un,Hn.config.isReservedTag=ar,Hn.config.isReservedAttr=jn,Hn.config.getTagNamespace=sr,Hn.config.isUnknownElement=lr,E(Hn.options.directives,sa),E(Hn.options.components,ba),Hn.prototype.__patch__=X?Xi:I,Hn.prototype.$mount=function(t,e){return t=t&&X?ur(t):void 0,xc(this,t,e)},X&&setTimeout((function(){F.devtools&&lt&&lt.emit("init",Hn)}),0),e["a"]=Hn}).call(this,c("c8ba"))},"2cf4":function(t,e,c){var n,r,i,a,s=c("da84"),o=c("1626"),l=c("d039"),h=c("0366"),u=c("1be4"),f=c("cc12"),v=c("1cdc"),m=c("605d"),d=s.setImmediate,p=s.clearImmediate,z=s.process,g=s.MessageChannel,y=s.Dispatch,M=0,C={},b="onreadystatechange";try{n=s.location}catch(A){}var V=function(t){if(C.hasOwnProperty(t)){var e=C[t];delete C[t],e()}},H=function(t){return function(){V(t)}},L=function(t){V(t.data)},w=function(t){s.postMessage(String(t),n.protocol+"//"+n.host)};d&&p||(d=function(t){var e=[],c=arguments.length,n=1;while(c>n)e.push(arguments[n++]);return C[++M]=function(){(o(t)?t:Function(t)).apply(void 0,e)},r(M),M},p=function(t){delete C[t]},m?r=function(t){z.nextTick(H(t))}:y&&y.now?r=function(t){y.now(H(t))}:g&&!v?(i=new g,a=i.port2,i.port1.onmessage=L,r=h(a.postMessage,a,1)):s.addEventListener&&o(s.postMessage)&&!s.importScripts&&n&&"file:"!==n.protocol&&!l(w)?(r=w,s.addEventListener("message",L,!1)):r=b in f("script")?function(t){u.appendChild(f("script"))[b]=function(){u.removeChild(this),V(t)}}:function(t){setTimeout(H(t),0)}),t.exports={set:d,clear:p}},"2d00":function(t,e,c){var n,r,i=c("da84"),a=c("342f"),s=i.process,o=i.Deno,l=s&&s.versions||o&&o.version,h=l&&l.v8;h?(n=h.split("."),r=n[0]<4?1:n[0]+n[1]):a&&(n=a.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/),n&&(r=n[1]))),t.exports=r&&+r},"2d83":function(t,e,c){"use strict";var n=c("387f");t.exports=function(t,e,c,r,i){var a=new Error(t);return n(a,e,c,r,i)}},"2e67":function(t,e,c){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"2f62":function(t,e,c){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function n(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:n});else{var c=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,c.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}c.d(e,"b",(function(){return N})),c.d(e,"c",(function(){return O}));var r="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},i=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){i.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){i.emit("vuex:action",t,e)}),{prepend:!0}))}function s(t,e){return t.filter(e)[0]}function o(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var c=s(e,(function(e){return e.original===t}));if(c)return c.copy;var n=Array.isArray(t)?[]:{};return e.push({original:t,copy:n}),Object.keys(t).forEach((function(c){n[c]=o(t[c],e)})),n}function l(t,e){Object.keys(t).forEach((function(c){return e(t[c],c)}))}function h(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var v=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var c=t.state;this.state=("function"===typeof c?c():c)||{}},m={namespaced:{configurable:!0}};m.namespaced.get=function(){return!!this._rawModule.namespaced},v.prototype.addChild=function(t,e){this._children[t]=e},v.prototype.removeChild=function(t){delete this._children[t]},v.prototype.getChild=function(t){return this._children[t]},v.prototype.hasChild=function(t){return t in this._children},v.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},v.prototype.forEachChild=function(t){l(this._children,t)},v.prototype.forEachGetter=function(t){this._rawModule.getters&&l(this._rawModule.getters,t)},v.prototype.forEachAction=function(t){this._rawModule.actions&&l(this._rawModule.actions,t)},v.prototype.forEachMutation=function(t){this._rawModule.mutations&&l(this._rawModule.mutations,t)},Object.defineProperties(v.prototype,m);var d=function(t){this.register([],t,!1)};function p(t,e,c){if(e.update(c),c.modules)for(var n in c.modules){if(!e.getChild(n))return void 0;p(t.concat(n),e.getChild(n),c.modules[n])}}d.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},d.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,c){return e=e.getChild(c),t+(e.namespaced?c+"/":"")}),"")},d.prototype.update=function(t){p([],this.root,t)},d.prototype.register=function(t,e,c){var n=this;void 0===c&&(c=!0);var r=new v(e,c);if(0===t.length)this.root=r;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],r)}e.modules&&l(e.modules,(function(e,r){n.register(t.concat(r),e,c)}))},d.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),c=t[t.length-1],n=e.getChild(c);n&&n.runtime&&e.removeChild(c)},d.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),c=t[t.length-1];return!!e&&e.hasChild(c)};var z;var g=function(t){var e=this;void 0===t&&(t={}),!z&&"undefined"!==typeof window&&window.Vue&&T(window.Vue);var c=t.plugins;void 0===c&&(c=[]);var n=t.strict;void 0===n&&(n=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new d(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new z,this._makeLocalGettersCache=Object.create(null);var r=this,i=this,s=i.dispatch,o=i.commit;this.dispatch=function(t,e){return s.call(r,t,e)},this.commit=function(t,e,c){return o.call(r,t,e,c)},this.strict=n;var l=this._modules.root.state;V(this,l,[],this._modules.root),b(this,l),c.forEach((function(t){return t(e)}));var h=void 0!==t.devtools?t.devtools:z.config.devtools;h&&a(this)},y={state:{configurable:!0}};function M(t,e,c){return e.indexOf(t)<0&&(c&&c.prepend?e.unshift(t):e.push(t)),function(){var c=e.indexOf(t);c>-1&&e.splice(c,1)}}function C(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var c=t.state;V(t,c,[],t._modules.root,!0),b(t,c,e)}function b(t,e,c){var n=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};l(r,(function(e,c){i[c]=f(e,t),Object.defineProperty(t.getters,c,{get:function(){return t._vm[c]},enumerable:!0})}));var a=z.config.silent;z.config.silent=!0,t._vm=new z({data:{$$state:e},computed:i}),z.config.silent=a,t.strict&&_(t),n&&(c&&t._withCommit((function(){n._data.$$state=null})),z.nextTick((function(){return n.$destroy()})))}function V(t,e,c,n,r){var i=!c.length,a=t._modules.getNamespace(c);if(n.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=n),!i&&!r){var s=k(e,c.slice(0,-1)),o=c[c.length-1];t._withCommit((function(){z.set(s,o,n.state)}))}var l=n.context=H(t,a,c);n.forEachMutation((function(e,c){var n=a+c;w(t,n,e,l)})),n.forEachAction((function(e,c){var n=e.root?c:a+c,r=e.handler||e;A(t,n,r,l)})),n.forEachGetter((function(e,c){var n=a+c;S(t,n,e,l)})),n.forEachChild((function(n,i){V(t,e,c.concat(i),n,r)}))}function H(t,e,c){var n=""===e,r={dispatch:n?t.dispatch:function(c,n,r){var i=E(c,n,r),a=i.payload,s=i.options,o=i.type;return s&&s.root||(o=e+o),t.dispatch(o,a)},commit:n?t.commit:function(c,n,r){var i=E(c,n,r),a=i.payload,s=i.options,o=i.type;s&&s.root||(o=e+o),t.commit(o,a,s)}};return Object.defineProperties(r,{getters:{get:n?function(){return t.getters}:function(){return L(t,e)}},state:{get:function(){return k(t.state,c)}}}),r}function L(t,e){if(!t._makeLocalGettersCache[e]){var c={},n=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,n)===e){var i=r.slice(n);Object.defineProperty(c,i,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=c}return t._makeLocalGettersCache[e]}function w(t,e,c,n){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){c.call(t,n.state,e)}))}function A(t,e,c,n){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=c.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return u(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function S(t,e,c,n){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return c(n.state,n.getters,t.state,t.getters)})}function _(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function k(t,e){return e.reduce((function(t,e){return t[e]}),t)}function E(t,e,c){return h(t)&&t.type&&(c=e,e=t,t=t.type),{type:t,payload:e,options:c}}function T(t){z&&t===z||(z=t,n(z))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(t){0},g.prototype.commit=function(t,e,c){var n=this,r=E(t,e,c),i=r.type,a=r.payload,s=(r.options,{type:i,payload:a}),o=this._mutations[i];o&&(this._withCommit((function(){o.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(s,n.state)})))},g.prototype.dispatch=function(t,e){var c=this,n=E(t,e),r=n.type,i=n.payload,a={type:r,payload:i},s=this._actions[r];if(s){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,c.state)}))}catch(l){0}var o=s.length>1?Promise.all(s.map((function(t){return t(i)}))):s[0](i);return new Promise((function(t,e){o.then((function(e){try{c._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,c.state)}))}catch(l){0}t(e)}),(function(t){try{c._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,c.state,t)}))}catch(l){0}e(t)}))}))}},g.prototype.subscribe=function(t,e){return M(t,this._subscribers,e)},g.prototype.subscribeAction=function(t,e){var c="function"===typeof t?{before:t}:t;return M(c,this._actionSubscribers,e)},g.prototype.watch=function(t,e,c){var n=this;return this._watcherVM.$watch((function(){return t(n.state,n.getters)}),e,c)},g.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},g.prototype.registerModule=function(t,e,c){void 0===c&&(c={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),V(this,this.state,t,this._modules.get(t),c.preserveState),b(this,this.state)},g.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var c=k(e.state,t.slice(0,-1));z.delete(c,t[t.length-1])})),C(this)},g.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},g.prototype.hotUpdate=function(t){this._modules.update(t),C(this,!0)},g.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(g.prototype,y);var I=D((function(t,e){var c={};return P(e).forEach((function(e){var n=e.key,r=e.val;c[n]=function(){var e=this.$store.state,c=this.$store.getters;if(t){var n=U(this.$store,"mapState",t);if(!n)return;e=n.context.state,c=n.context.getters}return"function"===typeof r?r.call(this,e,c):e[r]},c[n].vuex=!0})),c})),x=D((function(t,e){var c={};return P(e).forEach((function(e){var n=e.key,r=e.val;c[n]=function(){var e=[],c=arguments.length;while(c--)e[c]=arguments[c];var n=this.$store.commit;if(t){var i=U(this.$store,"mapMutations",t);if(!i)return;n=i.context.commit}return"function"===typeof r?r.apply(this,[n].concat(e)):n.apply(this.$store,[r].concat(e))}})),c})),O=D((function(t,e){var c={};return P(e).forEach((function(e){var n=e.key,r=e.val;r=t+r,c[n]=function(){if(!t||U(this.$store,"mapGetters",t))return this.$store.getters[r]},c[n].vuex=!0})),c})),N=D((function(t,e){var c={};return P(e).forEach((function(e){var n=e.key,r=e.val;c[n]=function(){var e=[],c=arguments.length;while(c--)e[c]=arguments[c];var n=this.$store.dispatch;if(t){var i=U(this.$store,"mapActions",t);if(!i)return;n=i.context.dispatch}return"function"===typeof r?r.apply(this,[n].concat(e)):n.apply(this.$store,[r].concat(e))}})),c})),R=function(t){return{mapState:I.bind(null,t),mapGetters:O.bind(null,t),mapMutations:x.bind(null,t),mapActions:N.bind(null,t)}};function P(t){return j(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function j(t){return Array.isArray(t)||h(t)}function D(t){return function(e,c){return"string"!==typeof e?(c=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,c)}}function U(t,e,c){var n=t._modulesNamespaceMap[c];return n}function F(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var c=t.filter;void 0===c&&(c=function(t,e,c){return!0});var n=t.transformer;void 0===n&&(n=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var i=t.actionFilter;void 0===i&&(i=function(t,e){return!0});var a=t.actionTransformer;void 0===a&&(a=function(t){return t});var s=t.logMutations;void 0===s&&(s=!0);var l=t.logActions;void 0===l&&(l=!0);var h=t.logger;return void 0===h&&(h=console),function(t){var u=o(t.state);"undefined"!==typeof h&&(s&&t.subscribe((function(t,i){var a=o(i);if(c(t,u,a)){var s=$(),l=r(t),f="mutation "+t.type+s;q(h,f,e),h.log("%c prev state","color: #9E9E9E; font-weight: bold",n(u)),h.log("%c mutation","color: #03A9F4; font-weight: bold",l),h.log("%c next state","color: #4CAF50; font-weight: bold",n(a)),Z(h)}u=a})),l&&t.subscribeAction((function(t,c){if(i(t,c)){var n=$(),r=a(t),s="action "+t.type+n;q(h,s,e),h.log("%c action","color: #03A9F4; font-weight: bold",r),Z(h)}})))}}function q(t,e,c){var n=c?t.groupCollapsed:t.group;try{n.call(t,e)}catch(r){t.log(e)}}function Z(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function $(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function B(t,e){return new Array(e+1).join(t)}function G(t,e){return B("0",e-t.toString().length)+t}var K={Store:g,install:T,version:"3.6.2",mapState:I,mapMutations:x,mapGetters:O,mapActions:N,createNamespacedHelpers:R,createLogger:F};e["a"]=K}).call(this,c("c8ba"))},"30b5":function(t,e,c){"use strict";var n=c("c532");function r(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,c){if(!e)return t;var i;if(c)i=c(e);else if(n.isURLSearchParams(e))i=e.toString();else{var a=[];n.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))})))})),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},"342f":function(t,e,c){var n=c("d066");t.exports=n("navigator","userAgent")||""},"35a1":function(t,e,c){var n=c("f5df"),r=c("dc4a"),i=c("3f8c"),a=c("b622"),s=a("iterator");t.exports=function(t){if(void 0!=t)return r(t,s)||r(t,"@@iterator")||i[n(t)]}},"37e8":function(t,e,c){var n=c("83ab"),r=c("9bf2"),i=c("825a"),a=c("df75");t.exports=n?Object.defineProperties:function(t,e){i(t);var c,n=a(e),s=n.length,o=0;while(s>o)r.f(t,c=n[o++],e[c]);return t}},"387f":function(t,e,c){"use strict";t.exports=function(t,e,c,n,r){return t.config=e,c&&(t.code=c),t.request=n,t.response=r,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,c){"use strict";var n=c("c532");t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),c=document.createElement("a");function r(t){var n=t;return e&&(c.setAttribute("href",n),n=c.href),c.setAttribute("href",n),{href:c.href,protocol:c.protocol?c.protocol.replace(/:$/,""):"",host:c.host,search:c.search?c.search.replace(/^\?/,""):"",hash:c.hash?c.hash.replace(/^#/,""):"",hostname:c.hostname,port:c.port,pathname:"/"===c.pathname.charAt(0)?c.pathname:"/"+c.pathname}}return t=r(window.location.href),function(e){var c=n.isString(e)?r(e):e;return c.protocol===t.protocol&&c.host===t.host}}():function(){return function(){return!0}}()},"3bbe":function(t,e,c){var n=c("1626");t.exports=function(t){if("object"===typeof t||n(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")}},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,c){var n=c("da84");t.exports=n},4362:function(t,e,c){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,n="/";e.cwd=function(){return n},e.chdir=function(e){t||(t=c("df7c")),n=t.resolve(e,n)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,c){var n=c("d039"),r=c("c6b6"),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?i.call(t,""):Object(t)}:Object},"44d2":function(t,e,c){var n=c("b622"),r=c("7c73"),i=c("9bf2"),a=n("unscopables"),s=Array.prototype;void 0==s[a]&&i.f(s,a,{configurable:!0,value:r(null)}),t.exports=function(t){s[a][t]=!0}},"44de":function(t,e,c){var n=c("da84");t.exports=function(t,e){var c=n.console;c&&c.error&&(1===arguments.length?c.error(t):c.error(t,e))}},"44e7":function(t,e,c){var n=c("861d"),r=c("c6b6"),i=c("b622"),a=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},"467f":function(t,e,c){"use strict";var n=c("2d83");t.exports=function(t,e,c){var r=c.config.validateStatus;c.status&&r&&!r(c.status)?e(n("Request failed with status code "+c.status,c.config,null,c.request,c)):t(c)}},4840:function(t,e,c){var n=c("825a"),r=c("5087"),i=c("b622"),a=i("species");t.exports=function(t,e){var c,i=n(t).constructor;return void 0===i||void 0==(c=n(i)[a])?e:r(c)}},"485a":function(t,e,c){var n=c("1626"),r=c("861d");t.exports=function(t,e){var c,i;if("string"===e&&n(c=t.toString)&&!r(i=c.call(t)))return i;if(n(c=t.valueOf)&&!r(i=c.call(t)))return i;if("string"!==e&&n(c=t.toString)&&!r(i=c.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,c){var n=c("2d00"),r=c("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"4a0c":function(t){t.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')},"4a7b":function(t,e,c){"use strict";var n=c("c532");t.exports=function(t,e){e=e||{};var c={},r=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function o(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function l(r){n.isUndefined(e[r])?n.isUndefined(t[r])||(c[r]=o(void 0,t[r])):c[r]=o(t[r],e[r])}n.forEach(r,(function(t){n.isUndefined(e[t])||(c[t]=o(void 0,e[t]))})),n.forEach(i,l),n.forEach(a,(function(r){n.isUndefined(e[r])?n.isUndefined(t[r])||(c[r]=o(void 0,t[r])):c[r]=o(void 0,e[r])})),n.forEach(s,(function(n){n in e?c[n]=o(t[n],e[n]):n in t&&(c[n]=o(void 0,t[n]))}));var h=r.concat(i).concat(a).concat(s),u=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===h.indexOf(t)}));return n.forEach(u,l),c}},"4d64":function(t,e,c){var n=c("fc6a"),r=c("50c4"),i=c("23cb"),a=function(t){return function(e,c,a){var s,o=n(e),l=r(o.length),h=i(a,l);if(t&&c!=c){while(l>h)if(s=o[h++],s!=s)return!0}else for(;l>h;h++)if((t||h in o)&&o[h]===c)return t||h||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},"4de4":function(t,e,c){"use strict";var n=c("23e7"),r=c("b727").filter,i=c("1dde"),a=i("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4fc1":function(t,e,c){"use strict";c.d(e,"a",(function(){return r})),c.d(e,"b",(function(){return l})),c.d(e,"c",(function(){return h})),c.d(e,"d",(function(){return u}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,s={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},o=(t,e,...c)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),r=s[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${n}]  ${t.name}:`,...c)};class l{constructor(t){this.name=t,this._logLevel=a,this._logHandler=o,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function h(t){n.forEach(e=>{e.setLogLevel(t)})}function u(t,e){for(const c of n){let n=null;e&&e.level&&(n=i[e.level]),c.userLogHandler=null===t?null:(e,c,...i)=>{const a=i.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");c>=(null!==n&&void 0!==n?n:e.logLevel)&&t({level:r[c].toLowerCase(),message:a,args:i,type:e.name})}}}},5087:function(t,e,c){var n=c("68ee"),r=c("0d51");t.exports=function(t){if(n(t))return t;throw TypeError(r(t)+" is not a constructor")}},"50c4":function(t,e,c){var n=c("a691"),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},5135:function(t,e,c){var n=c("7b0b"),r={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return r.call(n(t),e)}},5270:function(t,e,c){"use strict";var n=c("c532"),r=c("c401"),i=c("2e67"),a=c("2444");function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){s(t),t.headers=t.headers||{},t.data=r.call(t,t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||a.adapter;return e(t).then((function(e){return s(t),e.data=r.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=r.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},5530:function(t,e,c){"use strict";c.d(e,"a",(function(){return i}));c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function n(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function r(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,n)}return c}function i(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?r(Object(c),!0).forEach((function(e){n(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):r(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}},5606:function(t,e,c){"use strict";c.d(e,"a",(function(){return G})),c.d(e,"b",(function(){return F})),c.d(e,"c",(function(){return U})),c.d(e,"d",(function(){return q})),c.d(e,"e",(function(){return W})),c.d(e,"f",(function(){return K})),c.d(e,"g",(function(){return X}));var n=c("ffa6"),r=c("4fc1"),i=c("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(s(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function s(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const o="@firebase/app",l="0.7.1",h=new r["b"]("@firebase/app"),u="@firebase/app-compat",f="@firebase/analytics-compat",v="@firebase/analytics",m="@firebase/app-check-compat",d="@firebase/app-check",p="@firebase/auth",z="@firebase/auth-compat",g="@firebase/database",y="@firebase/database-compat",M="@firebase/functions",C="@firebase/functions-compat",b="@firebase/installations",V="@firebase/installations-compat",H="@firebase/messaging",L="@firebase/messaging-compat",w="@firebase/performance",A="@firebase/performance-compat",S="@firebase/remote-config",_="@firebase/remote-config-compat",k="@firebase/storage",E="@firebase/storage-compat",T="@firebase/firestore",I="@firebase/firestore-compat",x="firebase",O="9.1.0",N="[DEFAULT]",R={[o]:"fire-core",[u]:"fire-core-compat",[v]:"fire-analytics",[f]:"fire-analytics-compat",[d]:"fire-app-check",[m]:"fire-app-check-compat",[p]:"fire-auth",[z]:"fire-auth-compat",[g]:"fire-rtdb",[y]:"fire-rtdb-compat",[M]:"fire-fn",[C]:"fire-fn-compat",[b]:"fire-iid",[V]:"fire-iid-compat",[H]:"fire-fcm",[L]:"fire-fcm-compat",[w]:"fire-perf",[A]:"fire-perf-compat",[S]:"fire-rc",[_]:"fire-rc-compat",[k]:"fire-gcs",[E]:"fire-gcs-compat",[T]:"fire-fst",[I]:"fire-fst-compat","fire-js":"fire-js",[x]:"fire-js-all"},P=new Map,j=new Map;function D(t,e){try{t.container.addComponent(e)}catch(c){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,c)}}function U(t){const e=t.name;if(j.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;j.set(e,t);for(const c of P.values())D(c,t);return!0}function F(t,e){return t.container.getProvider(e)}function q(t,e,c=N){F(t,e).clearInstance(c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},$=new i["b"]("app","Firebase",Z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(t,e,c){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new n["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=O;function K(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const c=Object.assign({name:N,automaticDataCollectionEnabled:!1},e),r=c.name;if("string"!==typeof r||!r)throw $.create("bad-app-name",{appName:String(r)});const a=P.get(r);if(a){if(Object(i["g"])(t,a.options)&&Object(i["g"])(c,a.config))return a;throw $.create("duplicate-app",{appName:r})}const s=new n["b"](r);for(const n of j.values())s.addComponent(n);const o=new B(t,c,s);return P.set(r,o),o}function W(t=N){const e=P.get(t);if(!e)throw $.create("no-app",{appName:t});return e}function X(t,e,c){var r;let i=null!==(r=R[t])&&void 0!==r?r:t;c&&(i+="-"+c);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const t=[`Unable to register library "${i}" with version "${e}":`];return a&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}U(new n["a"](i+"-version",()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(t){U(new n["a"]("platform-logger",t=>new a(t),"PRIVATE")),X(o,l,t),X("fire-js","")}Y()},5692:function(t,e,c){var n=c("c430"),r=c("c6cd");(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,c){var n=c("d066"),r=c("241c"),i=c("7418"),a=c("825a");t.exports=n("Reflect","ownKeys")||function(t){var e=r.f(a(t)),c=i.f;return c?e.concat(c(t)):e}},"577e":function(t,e,c){var n=c("f5df");t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,c){var n=c("1d80"),r=c("577e"),i=c("5899"),a="["+i+"]",s=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),l=function(t){return function(e){var c=r(n(e));return 1&t&&(c=c.replace(s,"")),2&t&&(c=c.replace(o,"")),c}};t.exports={start:l(1),end:l(2),trim:l(3)}},"59ed":function(t,e,c){var n=c("1626"),r=c("0d51");t.exports=function(t){if(n(t))return t;throw TypeError(r(t)+" is not a function")}},"5a34":function(t,e,c){var n=c("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,c){var n=c("83ab"),r=c("5135"),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,s=r(i,"name"),o=s&&"something"===function(){}.name,l=s&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:s,PROPER:o,CONFIGURABLE:l}},"5f02":function(t,e,c){"use strict";t.exports=function(t){return"object"===typeof t&&!0===t.isAxiosError}},"605d":function(t,e,c){var n=c("c6b6"),r=c("da84");t.exports="process"==n(r.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,c){"use strict";var n=c("83ab"),r=c("d039"),i=c("df75"),a=c("7418"),s=c("d1e7"),o=c("7b0b"),l=c("44ad"),h=Object.assign,u=Object.defineProperty;t.exports=!h||r((function(){if(n&&1!==h({b:1},h(u({},"a",{enumerable:!0,get:function(){u(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},c=Symbol(),r="abcdefghijklmnopqrst";return t[c]=7,r.split("").forEach((function(t){e[t]=t})),7!=h({},t)[c]||i(h({},e)).join("")!=r}))?function(t,e){var c=o(t),r=arguments.length,h=1,u=a.f,f=s.f;while(r>h){var v,m=l(arguments[h++]),d=u?i(m).concat(u(m)):i(m),p=d.length,z=0;while(p>z)v=d[z++],n&&!f.call(m,v)||(c[v]=m[v])}return c}:h},"65f0":function(t,e,c){var n=c("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"68ee":function(t,e,c){var n=c("d039"),r=c("1626"),i=c("f5df"),a=c("d066"),s=c("8925"),o=[],l=a("Reflect","construct"),h=/^\s*(?:class|function)\b/,u=h.exec,f=!h.exec((function(){})),v=function(t){if(!r(t))return!1;try{return l(Object,o,t),!0}catch(e){return!1}},m=function(t){if(!r(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return f||!!u.call(h,s(t))};t.exports=!l||n((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?m:v},"69f3":function(t,e,c){var n,r,i,a=c("7f9a"),s=c("da84"),o=c("861d"),l=c("9112"),h=c("5135"),u=c("c6cd"),f=c("f772"),v=c("d012"),m="Object already initialized",d=s.WeakMap,p=function(t){return i(t)?r(t):n(t,{})},z=function(t){return function(e){var c;if(!o(e)||(c=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return c}};if(a||u.state){var g=u.state||(u.state=new d),y=g.get,M=g.has,C=g.set;n=function(t,e){if(M.call(g,t))throw new TypeError(m);return e.facade=t,C.call(g,t,e),e},r=function(t){return y.call(g,t)||{}},i=function(t){return M.call(g,t)}}else{var b=f("state");v[b]=!0,n=function(t,e){if(h(t,b))throw new TypeError(m);return e.facade=t,l(t,b,e),e},r=function(t){return h(t,b)?t[b]:{}},i=function(t){return h(t,b)}}t.exports={set:n,get:r,has:i,enforce:p,getterFor:z}},"6eeb":function(t,e,c){var n=c("da84"),r=c("1626"),i=c("5135"),a=c("9112"),s=c("ce4e"),o=c("8925"),l=c("69f3"),h=c("5e77").CONFIGURABLE,u=l.get,f=l.enforce,v=String(String).split("String");(t.exports=function(t,e,c,o){var l,u=!!o&&!!o.unsafe,m=!!o&&!!o.enumerable,d=!!o&&!!o.noTargetGet,p=o&&void 0!==o.name?o.name:e;r(c)&&("Symbol("===String(p).slice(0,7)&&(p="["+String(p).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(c,"name")||h&&c.name!==p)&&a(c,"name",p),l=f(c),l.source||(l.source=v.join("string"==typeof p?p:""))),t!==n?(u?!d&&t[e]&&(m=!0):delete t[e],m?t[e]=c:a(t,e,c)):m?t[e]=c:s(e,c)})(Function.prototype,"toString",(function(){return r(this)&&u(this).source||o(this)}))},7051:function(t,e,c){(function(t){
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function n(t,e){0}function r(t,e){for(var c in e)t[c]=e[c];return t}var i=/[!'()*]/g,a=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,o=function(t){return encodeURIComponent(t).replace(i,a).replace(s,",")};function l(t){try{return decodeURIComponent(t)}catch(e){0}return t}function h(t,e,c){void 0===e&&(e={});var n,r=c||f;try{n=r(t||"")}catch(s){n={}}for(var i in e){var a=e[i];n[i]=Array.isArray(a)?a.map(u):u(a)}return n}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function f(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var c=t.replace(/\+/g," ").split("="),n=l(c.shift()),r=c.length>0?l(c.join("=")):null;void 0===e[n]?e[n]=r:Array.isArray(e[n])?e[n].push(r):e[n]=[e[n],r]})),e):e}function v(t){var e=t?Object.keys(t).map((function(e){var c=t[e];if(void 0===c)return"";if(null===c)return o(e);if(Array.isArray(c)){var n=[];return c.forEach((function(t){void 0!==t&&(null===t?n.push(o(e)):n.push(o(e)+"="+o(t)))})),n.join("&")}return o(e)+"="+o(c)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var m=/\/?$/;function d(t,e,c,n){var r=n&&n.options.stringifyQuery,i=e.query||{};try{i=p(i)}catch(s){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:y(e,r),matched:t?g(t):[]};return c&&(a.redirectedFrom=y(c,r)),Object.freeze(a)}function p(t){if(Array.isArray(t))return t.map(p);if(t&&"object"===typeof t){var e={};for(var c in t)e[c]=p(t[c]);return e}return t}var z=d(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var c=t.path,n=t.query;void 0===n&&(n={});var r=t.hash;void 0===r&&(r="");var i=e||v;return(c||"/")+i(n)+r}function M(t,e,c){return e===z?t===e:!!e&&(t.path&&e.path?t.path.replace(m,"")===e.path.replace(m,"")&&(c||t.hash===e.hash&&C(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(c||t.hash===e.hash&&C(t.query,e.query)&&C(t.params,e.params))))}function C(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var c=Object.keys(t).sort(),n=Object.keys(e).sort();return c.length===n.length&&c.every((function(c,r){var i=t[c],a=n[r];if(a!==c)return!1;var s=e[c];return null==i||null==s?i===s:"object"===typeof i&&"object"===typeof s?C(i,s):String(i)===String(s)}))}function b(t,e){return 0===t.path.replace(m,"/").indexOf(e.path.replace(m,"/"))&&(!e.hash||t.hash===e.hash)&&V(t.query,e.query)}function V(t,e){for(var c in e)if(!(c in t))return!1;return!0}function H(t){for(var e=0;e<t.matched.length;e++){var c=t.matched[e];for(var n in c.instances){var r=c.instances[n],i=c.enteredCbs[n];if(r&&i){delete c.enteredCbs[n];for(var a=0;a<i.length;a++)r._isBeingDestroyed||i[a](r)}}}}var L={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var c=e.props,n=e.children,i=e.parent,a=e.data;a.routerView=!0;var s=i.$createElement,o=c.name,l=i.$route,h=i._routerViewCache||(i._routerViewCache={}),u=0,f=!1;while(i&&i._routerRoot!==i){var v=i.$vnode?i.$vnode.data:{};v.routerView&&u++,v.keepAlive&&i._directInactive&&i._inactive&&(f=!0),i=i.$parent}if(a.routerViewDepth=u,f){var m=h[o],d=m&&m.component;return d?(m.configProps&&w(d,a,m.route,m.configProps),s(d,a,n)):s()}var p=l.matched[u],z=p&&p.components[o];if(!p||!z)return h[o]=null,s();h[o]={component:z},a.registerRouteInstance=function(t,e){var c=p.instances[o];(e&&c!==t||!e&&c===t)&&(p.instances[o]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){p.instances[o]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==p.instances[o]&&(p.instances[o]=t.componentInstance),H(l)};var g=p.props&&p.props[o];return g&&(r(h[o],{route:l,configProps:g}),w(z,a,l,g)),s(z,a,n)}};function w(t,e,c,n){var i=e.props=A(c,n);if(i){i=e.props=r({},i);var a=e.attrs=e.attrs||{};for(var s in i)t.props&&s in t.props||(a[s]=i[s],delete i[s])}}function A(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function S(t,e,c){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var r=e.split("/");c&&r[r.length-1]||r.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var s=i[a];".."===s?r.pop():"."!==s&&r.push(s)}return""!==r[0]&&r.unshift(""),r.join("/")}function _(t){var e="",c="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var r=t.indexOf("?");return r>=0&&(c=t.slice(r+1),t=t.slice(0,r)),{path:t,query:c,hash:e}}function k(t){return t.replace(/\/\//g,"/")}var E=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},T=Y,I=P,x=j,O=F,N=X,R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(t,e){var c,n=[],r=0,i=0,a="",s=e&&e.delimiter||"/";while(null!=(c=R.exec(t))){var o=c[0],l=c[1],h=c.index;if(a+=t.slice(i,h),i=h+o.length,l)a+=l[1];else{var u=t[i],f=c[2],v=c[3],m=c[4],d=c[5],p=c[6],z=c[7];a&&(n.push(a),a="");var g=null!=f&&null!=u&&u!==f,y="+"===p||"*"===p,M="?"===p||"*"===p,C=c[2]||s,b=m||d;n.push({name:v||r++,prefix:f||"",delimiter:C,optional:M,repeat:y,partial:g,asterisk:!!z,pattern:b?Z(b):z?".*":"[^"+q(C)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function j(t,e){return F(P(t,e),e)}function D(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function U(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t,e){for(var c=new Array(t.length),n=0;n<t.length;n++)"object"===typeof t[n]&&(c[n]=new RegExp("^(?:"+t[n].pattern+")$",B(e)));return function(e,n){for(var r="",i=e||{},a=n||{},s=a.pretty?D:encodeURIComponent,o=0;o<t.length;o++){var l=t[o];if("string"!==typeof l){var h,u=i[l.name];if(null==u){if(l.optional){l.partial&&(r+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(E(u)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(u)+"`");if(0===u.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var f=0;f<u.length;f++){if(h=s(u[f]),!c[o].test(h))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(h)+"`");r+=(0===f?l.prefix:l.delimiter)+h}}else{if(h=l.asterisk?U(u):s(u),!c[o].test(h))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+h+'"');r+=l.prefix+h}}else r+=l}return r}}function q(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function $(t,e){return t.keys=e,t}function B(t){return t&&t.sensitive?"":"i"}function G(t,e){var c=t.source.match(/\((?!\?)/g);if(c)for(var n=0;n<c.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return $(t,e)}function K(t,e,c){for(var n=[],r=0;r<t.length;r++)n.push(Y(t[r],e,c).source);var i=new RegExp("(?:"+n.join("|")+")",B(c));return $(i,e)}function W(t,e,c){return X(P(t,c),e,c)}function X(t,e,c){E(e)||(c=e||c,e=[]),c=c||{};for(var n=c.strict,r=!1!==c.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"===typeof s)i+=q(s);else{var o=q(s.prefix),l="(?:"+s.pattern+")";e.push(s),s.repeat&&(l+="(?:"+o+l+")*"),l=s.optional?s.partial?o+"("+l+")?":"(?:"+o+"("+l+"))?":o+"("+l+")",i+=l}}var h=q(c.delimiter||"/"),u=i.slice(-h.length)===h;return n||(i=(u?i.slice(0,-h.length):i)+"(?:"+h+"(?=$))?"),i+=r?"$":n&&u?"":"(?="+h+"|$)",$(new RegExp("^"+i,B(c)),e)}function Y(t,e,c){return E(e)||(c=e||c,e=[]),c=c||{},t instanceof RegExp?G(t,e):E(t)?K(t,e,c):W(t,e,c)}T.parse=I,T.compile=x,T.tokensToFunction=O,T.tokensToRegExp=N;var J=Object.create(null);function Q(t,e,c){e=e||{};try{var n=J[t]||(J[t]=T.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(r){return""}finally{delete e[0]}}function tt(t,e,c,n){var i="string"===typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){i=r({},t);var a=i.params;return a&&"object"===typeof a&&(i.params=r({},a)),i}if(!i.path&&i.params&&e){i=r({},i),i._normalized=!0;var s=r(r({},e.params),i.params);if(e.name)i.name=e.name,i.params=s;else if(e.matched.length){var o=e.matched[e.matched.length-1].path;i.path=Q(o,s,"path "+e.path)}else 0;return i}var l=_(i.path||""),u=e&&e.path||"/",f=l.path?S(l.path,u,c||i.append):u,v=h(l.query,i.query,n&&n.options.parseQuery),m=i.hash||l.hash;return m&&"#"!==m.charAt(0)&&(m="#"+m),{_normalized:!0,path:f,query:v,hash:m}}var et,ct=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:ct,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,c=this.$router,n=this.$route,i=c.resolve(this.to,n,this.append),a=i.location,s=i.route,o=i.href,l={},h=c.options.linkActiveClass,u=c.options.linkExactActiveClass,f=null==h?"router-link-active":h,v=null==u?"router-link-exact-active":u,m=null==this.activeClass?f:this.activeClass,p=null==this.exactActiveClass?v:this.exactActiveClass,z=s.redirectedFrom?d(null,tt(s.redirectedFrom),null,c):s;l[p]=M(n,z,this.exactPath),l[m]=this.exact||this.exactPath?l[p]:b(n,z);var g=l[p]?this.ariaCurrentValue:null,y=function(t){at(t)&&(e.replace?c.replace(a,rt):c.push(a,rt))},C={click:at};Array.isArray(this.event)?this.event.forEach((function(t){C[t]=y})):C[this.event]=y;var V={class:l},H=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:o,route:s,navigate:y,isActive:l[m],isExactActive:l[p]});if(H){if(1===H.length)return H[0];if(H.length>1||!H.length)return 0===H.length?t():t("span",{},H)}if("a"===this.tag)V.on=C,V.attrs={href:o,"aria-current":g};else{var L=st(this.$slots.default);if(L){L.isStatic=!1;var w=L.data=r({},L.data);for(var A in w.on=w.on||{},w.on){var S=w.on[A];A in C&&(w.on[A]=Array.isArray(S)?S:[S])}for(var _ in C)_ in w.on?w.on[_].push(C[_]):w.on[_]=y;var k=L.data.attrs=r({},L.data.attrs);k.href=o,k["aria-current"]=g}else V.on=C}return t(this.tag,V,this.$slots.default)}};function at(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,c=0;c<t.length;c++){if(e=t[c],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function ot(t){if(!ot.installed||et!==t){ot.installed=!0,et=t;var e=function(t){return void 0!==t},c=function(t,c){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,c)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,c(this,this)},destroyed:function(){c(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",L),t.component("RouterLink",it);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var lt="undefined"!==typeof window;function ht(t,e,c,n,r){var i=e||[],a=c||Object.create(null),s=n||Object.create(null);t.forEach((function(t){ut(i,a,s,t,r)}));for(var o=0,l=i.length;o<l;o++)"*"===i[o]&&(i.push(i.splice(o,1)[0]),l--,o--);return{pathList:i,pathMap:a,nameMap:s}}function ut(t,e,c,n,r,i){var a=n.path,s=n.name;var o=n.pathToRegexpOptions||{},l=vt(a,r,o.strict);"boolean"===typeof n.caseSensitive&&(o.sensitive=n.caseSensitive);var h={path:l,regex:ft(l,o),components:n.components||{default:n.component},alias:n.alias?"string"===typeof n.alias?[n.alias]:n.alias:[],instances:{},enteredCbs:{},name:s,parent:r,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach((function(n){var r=i?k(i+"/"+n.path):void 0;ut(t,e,c,n,h,r)})),e[h.path]||(t.push(h.path),e[h.path]=h),void 0!==n.alias)for(var u=Array.isArray(n.alias)?n.alias:[n.alias],f=0;f<u.length;++f){var v=u[f];0;var m={path:v,children:n.children};ut(t,e,c,m,r,h.path||"/")}s&&(c[s]||(c[s]=h))}function ft(t,e){var c=T(t,[],e);return c}function vt(t,e,c){return c||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:k(e.path+"/"+t)}function mt(t,e){var c=ht(t),n=c.pathList,r=c.pathMap,i=c.nameMap;function a(t){ht(t,n,r,i)}function s(t,e){var c="object"!==typeof t?i[t]:void 0;ht([e||t],n,r,i,c),c&&c.alias.length&&ht(c.alias.map((function(t){return{path:t,children:[e]}})),n,r,i,c)}function o(){return n.map((function(t){return r[t]}))}function l(t,c,a){var s=tt(t,c,!1,e),o=s.name;if(o){var l=i[o];if(!l)return f(null,s);var h=l.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof s.params&&(s.params={}),c&&"object"===typeof c.params)for(var u in c.params)!(u in s.params)&&h.indexOf(u)>-1&&(s.params[u]=c.params[u]);return s.path=Q(l.path,s.params,'named route "'+o+'"'),f(l,s,a)}if(s.path){s.params={};for(var v=0;v<n.length;v++){var m=n[v],d=r[m];if(dt(d.regex,s.path,s.params))return f(d,s,a)}}return f(null,s)}function h(t,c){var n=t.redirect,r="function"===typeof n?n(d(t,c,null,e)):n;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return f(null,c);var a=r,s=a.name,o=a.path,h=c.query,u=c.hash,v=c.params;if(h=a.hasOwnProperty("query")?a.query:h,u=a.hasOwnProperty("hash")?a.hash:u,v=a.hasOwnProperty("params")?a.params:v,s){i[s];return l({_normalized:!0,name:s,query:h,hash:u,params:v},void 0,c)}if(o){var m=pt(o,t),p=Q(m,v,'redirect route with path "'+m+'"');return l({_normalized:!0,path:p,query:h,hash:u},void 0,c)}return f(null,c)}function u(t,e,c){var n=Q(c,e.params,'aliased route with path "'+c+'"'),r=l({_normalized:!0,path:n});if(r){var i=r.matched,a=i[i.length-1];return e.params=r.params,f(a,e)}return f(null,e)}function f(t,c,n){return t&&t.redirect?h(t,n||c):t&&t.matchAs?u(t,c,t.matchAs):d(t,c,n,e)}return{match:l,addRoute:s,getRoutes:o,addRoutes:a}}function dt(t,e,c){var n=e.match(t);if(!n)return!1;if(!c)return!0;for(var r=1,i=n.length;r<i;++r){var a=t.keys[r-1];a&&(c[a.name||"pathMatch"]="string"===typeof n[r]?l(n[r]):n[r])}return!0}function pt(t,e){return S(t,e.parent?e.parent.path:"/",!0)}var zt=lt&&window.performance&&window.performance.now?window.performance:Date;function gt(){return zt.now().toFixed(3)}var yt=gt();function Mt(){return yt}function Ct(t){return yt=t}var bt=Object.create(null);function Vt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),c=r({},window.history.state);return c.key=Mt(),window.history.replaceState(c,"",e),window.addEventListener("popstate",wt),function(){window.removeEventListener("popstate",wt)}}function Ht(t,e,c,n){if(t.app){var r=t.options.scrollBehavior;r&&t.app.$nextTick((function(){var i=At(),a=r.call(t,e,c,n?i:null);a&&("function"===typeof a.then?a.then((function(t){xt(t,i)})).catch((function(t){0})):xt(a,i))}))}}function Lt(){var t=Mt();t&&(bt[t]={x:window.pageXOffset,y:window.pageYOffset})}function wt(t){Lt(),t.state&&t.state.key&&Ct(t.state.key)}function At(){var t=Mt();if(t)return bt[t]}function St(t,e){var c=document.documentElement,n=c.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-n.left-e.x,y:r.top-n.top-e.y}}function _t(t){return Tt(t.x)||Tt(t.y)}function kt(t){return{x:Tt(t.x)?t.x:window.pageXOffset,y:Tt(t.y)?t.y:window.pageYOffset}}function Et(t){return{x:Tt(t.x)?t.x:0,y:Tt(t.y)?t.y:0}}function Tt(t){return"number"===typeof t}var It=/^#\d/;function xt(t,e){var c="object"===typeof t;if(c&&"string"===typeof t.selector){var n=It.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(n){var r=t.offset&&"object"===typeof t.offset?t.offset:{};r=Et(r),e=St(n,r)}else _t(t)&&(e=kt(t))}else c&&_t(t)&&(e=kt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Ot=lt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Nt(t,e){Lt();var c=window.history;try{if(e){var n=r({},c.state);n.key=Mt(),c.replaceState(n,"",t)}else c.pushState({key:Ct(gt())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function Rt(t){Nt(t,!0)}function Pt(t,e,c){var n=function(r){r>=t.length?c():t[r]?e(t[r],(function(){n(r+1)})):n(r+1)};n(0)}var jt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Dt(t,e){return Zt(t,e,jt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Bt(e)+'" via a navigation guard.')}function Ut(t,e){var c=Zt(t,e,jt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return c.name="NavigationDuplicated",c}function Ft(t,e){return Zt(t,e,jt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function qt(t,e){return Zt(t,e,jt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Zt(t,e,c,n){var r=new Error(n);return r._isRouter=!0,r.from=t,r.to=e,r.type=c,r}var $t=["params","query","hash"];function Bt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return $t.forEach((function(c){c in t&&(e[c]=t[c])})),JSON.stringify(e,null,2)}function Gt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Gt(t)&&t._isRouter&&(null==e||t.type===e)}function Wt(t){return function(e,c,n){var r=!1,i=0,a=null;Xt(t,(function(t,e,c,s){if("function"===typeof t&&void 0===t.cid){r=!0,i++;var o,l=te((function(e){Qt(e)&&(e=e.default),t.resolved="function"===typeof e?e:et.extend(e),c.components[s]=e,i--,i<=0&&n()})),h=te((function(t){var e="Failed to resolve async component "+s+": "+t;a||(a=Gt(t)?t:new Error(e),n(a))}));try{o=t(l,h)}catch(f){h(f)}if(o)if("function"===typeof o.then)o.then(l,h);else{var u=o.component;u&&"function"===typeof u.then&&u.then(l,h)}}})),r||n()}}function Xt(t,e){return Yt(t.map((function(t){return Object.keys(t.components).map((function(c){return e(t.components[c],t.instances[c],t,c)}))})))}function Yt(t){return Array.prototype.concat.apply([],t)}var Jt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Qt(t){return t.__esModule||Jt&&"Module"===t[Symbol.toStringTag]}function te(t){var e=!1;return function(){var c=[],n=arguments.length;while(n--)c[n]=arguments[n];if(!e)return e=!0,t.apply(this,c)}}var ee=function(t,e){this.router=t,this.base=ce(e),this.current=z,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ce(t){if(!t)if(lt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var c,n=Math.max(t.length,e.length);for(c=0;c<n;c++)if(t[c]!==e[c])break;return{updated:e.slice(0,c),activated:e.slice(c),deactivated:t.slice(c)}}function re(t,e,c,n){var r=Xt(t,(function(t,n,r,i){var a=ie(t,e);if(a)return Array.isArray(a)?a.map((function(t){return c(t,n,r,i)})):c(a,n,r,i)}));return Yt(n?r.reverse():r)}function ie(t,e){return"function"!==typeof t&&(t=et.extend(t)),t.options[e]}function ae(t){return re(t,"beforeRouteLeave",oe,!0)}function se(t){return re(t,"beforeRouteUpdate",oe)}function oe(t,e){if(e)return function(){return t.apply(e,arguments)}}function le(t){return re(t,"beforeRouteEnter",(function(t,e,c,n){return he(t,c,n)}))}function he(t,e,c){return function(n,r,i){return t(n,r,(function(t){"function"===typeof t&&(e.enteredCbs[c]||(e.enteredCbs[c]=[]),e.enteredCbs[c].push(t)),i(t)}))}}ee.prototype.listen=function(t){this.cb=t},ee.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ee.prototype.onError=function(t){this.errorCbs.push(t)},ee.prototype.transitionTo=function(t,e,c){var n,r=this;try{n=this.router.match(t,this.current)}catch(a){throw this.errorCbs.forEach((function(t){t(a)})),a}var i=this.current;this.confirmTransition(n,(function(){r.updateRoute(n),e&&e(n),r.ensureURL(),r.router.afterHooks.forEach((function(t){t&&t(n,i)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(n)})))}),(function(t){c&&c(t),t&&!r.ready&&(Kt(t,jt.redirected)&&i===z||(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)}))))}))},ee.prototype.confirmTransition=function(t,e,c){var r=this,i=this.current;this.pending=t;var a=function(t){!Kt(t)&&Gt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):(n(!1,"uncaught error during route navigation:"),console.error(t))),c&&c(t)},s=t.matched.length-1,o=i.matched.length-1;if(M(t,i)&&s===o&&t.matched[s]===i.matched[o])return this.ensureURL(),a(Ut(i,t));var l=ne(this.current.matched,t.matched),h=l.updated,u=l.deactivated,f=l.activated,v=[].concat(ae(u),this.router.beforeHooks,se(h),f.map((function(t){return t.beforeEnter})),Wt(f)),m=function(e,c){if(r.pending!==t)return a(Ft(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),a(qt(i,t))):Gt(e)?(r.ensureURL(!0),a(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(a(Dt(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):c(e)}))}catch(n){a(n)}};Pt(v,m,(function(){var c=le(f),n=c.concat(r.router.resolveHooks);Pt(n,m,(function(){if(r.pending!==t)return a(Ft(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){H(t)}))}))}))},ee.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},ee.prototype.setupListeners=function(){},ee.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=z,this.pending=null};var ue=function(t){function e(e,c){t.call(this,e,c),this._startLocation=fe(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,c=e.options.scrollBehavior,n=Ot&&c;n&&this.listeners.push(Vt());var r=function(){var c=t.current,r=fe(t.base);t.current===z&&r===t._startLocation||t.transitionTo(r,(function(t){n&&Ht(e,t,c,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,c){var n=this,r=this,i=r.current;this.transitionTo(t,(function(t){Nt(k(n.base+t.fullPath)),Ht(n.router,t,i,!1),e&&e(t)}),c)},e.prototype.replace=function(t,e,c){var n=this,r=this,i=r.current;this.transitionTo(t,(function(t){Rt(k(n.base+t.fullPath)),Ht(n.router,t,i,!1),e&&e(t)}),c)},e.prototype.ensureURL=function(t){if(fe(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?Nt(e):Rt(e)}},e.prototype.getCurrentLocation=function(){return fe(this.base)},e}(ee);function fe(t){var e=window.location.pathname,c=e.toLowerCase(),n=t.toLowerCase();return!t||c!==n&&0!==c.indexOf(k(n+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var ve=function(t){function e(e,c,n){t.call(this,e,c),n&&me(this.base)||de()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,c=e.options.scrollBehavior,n=Ot&&c;n&&this.listeners.push(Vt());var r=function(){var e=t.current;de()&&t.transitionTo(pe(),(function(c){n&&Ht(t.router,c,e,!0),Ot||ye(c.fullPath)}))},i=Ot?"popstate":"hashchange";window.addEventListener(i,r),this.listeners.push((function(){window.removeEventListener(i,r)}))}},e.prototype.push=function(t,e,c){var n=this,r=this,i=r.current;this.transitionTo(t,(function(t){ge(t.fullPath),Ht(n.router,t,i,!1),e&&e(t)}),c)},e.prototype.replace=function(t,e,c){var n=this,r=this,i=r.current;this.transitionTo(t,(function(t){ye(t.fullPath),Ht(n.router,t,i,!1),e&&e(t)}),c)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;pe()!==e&&(t?ge(e):ye(e))},e.prototype.getCurrentLocation=function(){return pe()},e}(ee);function me(t){var e=fe(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}function de(){var t=pe();return"/"===t.charAt(0)||(ye("/"+t),!1)}function pe(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ze(t){var e=window.location.href,c=e.indexOf("#"),n=c>=0?e.slice(0,c):e;return n+"#"+t}function ge(t){Ot?Nt(ze(t)):window.location.hash=t}function ye(t){Ot?Rt(ze(t)):window.location.replace(ze(t))}var Me=function(t){function e(e,c){t.call(this,e,c),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,c){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),c)},e.prototype.replace=function(t,e,c){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),c)},e.prototype.go=function(t){var e=this,c=this.index+t;if(!(c<0||c>=this.stack.length)){var n=this.stack[c];this.confirmTransition(n,(function(){var t=e.current;e.index=c,e.updateRoute(n),e.router.afterHooks.forEach((function(e){e&&e(n,t)}))}),(function(t){Kt(t,jt.duplicated)&&(e.index=c)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ee),Ce=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=mt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Ot&&!1!==t.fallback,this.fallback&&(e="hash"),lt||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new ve(this,t.base,this.fallback);break;case"abstract":this.history=new Me(this,t.base);break;default:0}},be={currentRoute:{configurable:!0}};function Ve(t,e){return t.push(e),function(){var c=t.indexOf(e);c>-1&&t.splice(c,1)}}function He(t,e,c){var n="hash"===c?"#"+e:e;return t?k(t+"/"+n):n}Ce.prototype.match=function(t,e,c){return this.matcher.match(t,e,c)},be.currentRoute.get=function(){return this.history&&this.history.current},Ce.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var c=e.apps.indexOf(t);c>-1&&e.apps.splice(c,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var c=this.history;if(c instanceof ue||c instanceof ve){var n=function(t){var n=c.current,r=e.options.scrollBehavior,i=Ot&&r;i&&"fullPath"in t&&Ht(e,t,n,!1)},r=function(t){c.setupListeners(),n(t)};c.transitionTo(c.getCurrentLocation(),r,r)}c.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Ce.prototype.beforeEach=function(t){return Ve(this.beforeHooks,t)},Ce.prototype.beforeResolve=function(t){return Ve(this.resolveHooks,t)},Ce.prototype.afterEach=function(t){return Ve(this.afterHooks,t)},Ce.prototype.onReady=function(t,e){this.history.onReady(t,e)},Ce.prototype.onError=function(t){this.history.onError(t)},Ce.prototype.push=function(t,e,c){var n=this;if(!e&&!c&&"undefined"!==typeof Promise)return new Promise((function(e,c){n.history.push(t,e,c)}));this.history.push(t,e,c)},Ce.prototype.replace=function(t,e,c){var n=this;if(!e&&!c&&"undefined"!==typeof Promise)return new Promise((function(e,c){n.history.replace(t,e,c)}));this.history.replace(t,e,c)},Ce.prototype.go=function(t){this.history.go(t)},Ce.prototype.back=function(){this.go(-1)},Ce.prototype.forward=function(){this.go(1)},Ce.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Ce.prototype.resolve=function(t,e,c){e=e||this.history.current;var n=tt(t,e,c,this),r=this.match(n,e),i=r.redirectedFrom||r.fullPath,a=this.history.base,s=He(a,i,this.mode);return{location:n,route:r,href:s,normalizedTo:n,resolved:r}},Ce.prototype.getRoutes=function(){return this.matcher.getRoutes()},Ce.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==z&&this.history.transitionTo(this.history.getCurrentLocation())},Ce.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==z&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Ce.prototype,be),Ce.install=ot,Ce.version="3.5.2",Ce.isNavigationFailure=Kt,Ce.NavigationFailureType=jt,Ce.START_LOCATION=z,lt&&window.Vue&&window.Vue.use(Ce),e["a"]=Ce},"8df4":function(t,e,c){"use strict";var n=c("7a77");function r(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var c=this;t((function(t){c.reason||(c.reason=new n(t),e(c.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t,e=new r((function(e){t=e}));return{token:e,cancel:t}},t.exports=r},"8f6b":function(t,e,c){"use strict";(function(t){c.d(e,"a",(function(){return Sn})),c.d(e,"b",(function(){return kn})),c.d(e,"c",(function(){return _n})),c.d(e,"d",(function(){return Tn})),c.d(e,"e",(function(){return En})),c.d(e,"f",(function(){return In})),c.d(e,"g",(function(){return xn})),c.d(e,"h",(function(){return wn})),c.d(e,"i",(function(){return An}));var n,r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},i={},a=a||{},s=r||self;function o(){}function l(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function u(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++v)}var f="closure_uid_"+(1e9*Math.random()>>>0),v=0;function m(t,e,c){return t.call.apply(t.bind,arguments)}function d(t,e,c){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,n),t.apply(e,c)}}return function(){return t.apply(e,arguments)}}function p(t,e,c){return p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?m:d,p.apply(null,arguments)}function z(t,e){var c=Array.prototype.slice.call(arguments,1);return function(){var e=c.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function g(t,e){function c(){}c.prototype=e.prototype,t.Z=e.prototype,t.prototype=new c,t.prototype.constructor=t,t.Vb=function(t,c,n){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[c].apply(t,r)}}function y(){this.s=this.s,this.o=this.o}var M=0,C={};y.prototype.s=!1,y.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=M)){var t=u(this);delete C[t]}},y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let c=0;c<t.length;c++)if(c in t&&t[c]===e)return c;return-1},V=Array.prototype.forEach?function(t,e,c){Array.prototype.forEach.call(t,e,c)}:function(t,e,c){const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)i in r&&e.call(c,r[i],i,t)};function H(t){t:{var e=Uc;const c=t.length,n="string"===typeof t?t.split(""):t;for(let r=0;r<c;r++)if(r in n&&e.call(void 0,n[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function L(t){return Array.prototype.concat.apply([],arguments)}function w(t){const e=t.length;if(0<e){const c=Array(e);for(let n=0;n<e;n++)c[n]=t[n];return c}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var S,_=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function k(t,e){return-1!=t.indexOf(e)}function E(t,e){return t<e?-1:t>e?1:0}t:{var T=s.navigator;if(T){var I=T.userAgent;if(I){S=I;break t}}S=""}function x(t,e,c){for(const n in t)e.call(c,t[n],n,t)}function O(t){const e={};for(const c in t)e[c]=t[c];return e}var N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(t,e){let c,n;for(let r=1;r<arguments.length;r++){for(c in n=arguments[r],n)t[c]=n[c];for(let e=0;e<N.length;e++)c=N[e],Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}}function P(t){return P[" "](t),t}function j(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}P[" "]=o;var D,U=k(S,"Opera"),F=k(S,"Trident")||k(S,"MSIE"),q=k(S,"Edge"),Z=q||F,$=k(S,"Gecko")&&!(k(S.toLowerCase(),"webkit")&&!k(S,"Edge"))&&!(k(S,"Trident")||k(S,"MSIE"))&&!k(S,"Edge"),B=k(S.toLowerCase(),"webkit")&&!k(S,"Edge");function G(){var t=s.document;return t?t.documentMode:void 0}t:{var K="",W=function(){var t=S;return $?/rv:([^\);]+)(\)|;)/.exec(t):q?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):B?/WebKit\/(\S+)/.exec(t):U?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(W&&(K=W?W[1]:""),F){var X=G();if(null!=X&&X>parseFloat(K)){D=String(X);break t}}D=K}var Y,J={};function Q(){return j((function(){let t=0;const e=_(String(D)).split("."),c=_("9").split("."),n=Math.max(e.length,c.length);for(let a=0;0==t&&a<n;a++){var r=e[a]||"",i=c[a]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=E(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||E(0==r[2].length,0==i[2].length)||E(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(s.document&&F){var tt=G();Y=tt||(parseInt(D,10)||void 0)}else Y=void 0;var et=Y,ct=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{s.addEventListener("test",o,e),s.removeEventListener("test",o,e)}catch(c){}return t}();function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function rt(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var c=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{P(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==c?e=t.fromElement:"mouseout"==c&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:it[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rt.Z.h.call(this)}}nt.prototype.h=function(){this.defaultPrevented=!0},g(rt,nt);var it={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var at="closure_listenable_"+(1e6*Math.random()|0),st=0;function ot(t,e,c,n,r){this.listener=t,this.proxy=null,this.src=e,this.type=c,this.capture=!!n,this.ia=r,this.key=++st,this.ca=this.fa=!1}function lt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ht(t){this.src=t,this.g={},this.h=0}function ut(t,e){var c=e.type;if(c in t.g){var n,r=t.g[c],i=b(r,e);(n=0<=i)&&Array.prototype.splice.call(r,i,1),n&&(lt(e),0==t.g[c].length&&(delete t.g[c],t.h--))}}function ft(t,e,c,n){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!c&&i.ia==n)return r}return-1}ht.prototype.add=function(t,e,c,n,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var a=ft(t,e,n,r);return-1<a?(e=t[a],c||(e.fa=!1)):(e=new ot(e,this.src,i,!!n,r),e.fa=c,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),mt={};function dt(t,e,c,n,r){if(n&&n.once)return gt(t,e,c,n,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)dt(t,e[i],c,n,r);return null}return c=Lt(c),t&&t[at]?t.N(e,c,h(n)?!!n.capture:!!n,r):pt(t,e,c,!1,n,r)}function pt(t,e,c,n,r,i){if(!e)throw Error("Invalid event type");var a=h(r)?!!r.capture:!!r,s=Vt(t);if(s||(t[vt]=s=new ht(t)),c=s.add(e,c,n,a,i),c.proxy)return c;if(n=zt(),c.proxy=n,n.src=t,n.listener=c,t.addEventListener)ct||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),n,r);else if(t.attachEvent)t.attachEvent(Ct(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return c}function zt(){function t(c){return e.call(t.src,t.listener,c)}var e=bt;return t}function gt(t,e,c,n,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)gt(t,e[i],c,n,r);return null}return c=Lt(c),t&&t[at]?t.O(e,c,h(n)?!!n.capture:!!n,r):pt(t,e,c,!0,n,r)}function yt(t,e,c,n,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)yt(t,e[i],c,n,r);else n=h(n)?!!n.capture:!!n,c=Lt(c),t&&t[at]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],c=ft(i,c,n,r),-1<c&&(lt(i[c]),Array.prototype.splice.call(i,c,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,c,n,r)),(c=-1<t?e[t]:null)&&Mt(c))}function Mt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[at])ut(e.i,t);else{var c=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(c,n,t.capture):e.detachEvent?e.detachEvent(Ct(c),n):e.addListener&&e.removeListener&&e.removeListener(n),(c=Vt(e))?(ut(c,t),0==c.h&&(c.src=null,e[vt]=null)):lt(t)}}}function Ct(t){return t in mt?mt[t]:mt[t]="on"+t}function bt(t,e){if(t.ca)t=!0;else{e=new rt(e,this);var c=t.listener,n=t.ia||t.src;t.fa&&Mt(t),t=c.call(n,e)}return t}function Vt(t){return t=t[vt],t instanceof ht?t:null}var Ht="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lt(t){return"function"===typeof t?t:(t[Ht]||(t[Ht]=function(e){return t.handleEvent(e)}),t[Ht])}function wt(){y.call(this),this.i=new ht(this),this.P=this,this.I=null}function At(t,e){var c,n=t.I;if(n)for(c=[];n;n=n.I)c.push(n);if(t=t.P,n=e.type||e,"string"===typeof e)e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var r=e;e=new nt(n,t),R(e,r)}if(r=!0,c)for(var i=c.length-1;0<=i;i--){var a=e.g=c[i];r=St(a,n,!0,e)&&r}if(a=e.g=t,r=St(a,n,!0,e)&&r,r=St(a,n,!1,e)&&r,c)for(i=0;i<c.length;i++)a=e.g=c[i],r=St(a,n,!1,e)&&r}function St(t,e,c,n){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var a=e[i];if(a&&!a.ca&&a.capture==c){var s=a.listener,o=a.ia||a.src;a.fa&&ut(t.i,a),r=!1!==s.call(o,n)&&r}}return r&&!n.defaultPrevented}g(wt,y),wt.prototype[at]=!0,wt.prototype.removeEventListener=function(t,e,c,n){yt(this,t,e,c,n)},wt.prototype.M=function(){if(wt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var c=e.g[t],n=0;n<c.length;n++)lt(c[n]);delete e.g[t],e.h--}}this.I=null},wt.prototype.N=function(t,e,c,n){return this.i.add(String(t),e,!1,c,n)},wt.prototype.O=function(t,e,c,n){return this.i.add(String(t),e,!0,c,n)};var _t=s.JSON.stringify;function kt(){var t=jt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Et{constructor(){this.h=this.g=null}add(t,e){const c=It.get();c.set(t,e),this.h?this.h.next=c:this.g=c,this.h=c}}var Tt,It=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new xt,t=>t.reset());class xt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){s.setTimeout(()=>{throw t},0)}function Nt(t,e){Tt||Rt(),Pt||(Tt(),Pt=!0),jt.add(t,e)}function Rt(){var t=s.Promise.resolve(void 0);Tt=function(){t.then(Dt)}}var Pt=!1,jt=new Et;function Dt(){for(var t;t=kt();){try{t.h.call(t.g)}catch(c){Ot(c)}var e=It;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pt=!1}function Ut(t,e){wt.call(this),this.h=t||1,this.g=e||s,this.j=p(this.kb,this),this.l=Date.now()}function Ft(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function qt(t,e,c){if("function"===typeof t)c&&(t=p(t,c));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=p(t.handleEvent,t)}return 2147483647<Number(e)?-1:s.setTimeout(t,e||0)}function Zt(t){t.g=qt(()=>{t.g=null,t.i&&(t.i=!1,Zt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}g(Ut,wt),n=Ut.prototype,n.da=!1,n.S=null,n.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),At(this,"tick"),this.da&&(Ft(this),this.start()))}},n.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n.M=function(){Ut.Z.M.call(this),Ft(this),delete this.g};class $t extends y{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Zt(this)}M(){super.M(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bt(t){y.call(this),this.h=t,this.g={}}g(Bt,y);var Gt=[];function Kt(t,e,c,n){Array.isArray(c)||(c&&(Gt[0]=c.toString()),c=Gt);for(var r=0;r<c.length;r++){var i=dt(e,c[r],n||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Wt(t){x(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Mt(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,c,n,r,i){t.info((function(){if(t.g)if(i)for(var a="",s=i.split("&"),o=0;o<s.length;o++){var l=s[o].split("=");if(1<l.length){var h=l[0];l=l[1];var u=h.split("_");a=2<=u.length&&"type"==u[1]?a+(h+"=")+l+"&":a+(h+"=redacted&")}}else a=null;else a=i;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+e+"\n"+c+"\n"+a}))}function Jt(t,e,c,n,r,i,a){t.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+e+"\n"+c+"\n"+i+" "+a}))}function Qt(t,e,c,n){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,c)+(n?" "+n:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var c=JSON.parse(e);if(c)for(t=0;t<c.length;t++)if(Array.isArray(c[t])){var n=c[t];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var a=1;a<r.length;a++)r[a]=""}}}return _t(c)}catch(s){return e}}Bt.prototype.M=function(){Bt.Z.M.call(this),Wt(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ce={},ne=null;function re(){return ne=ne||new wt}function ie(t){nt.call(this,ce.Ma,t)}function ae(t){const e=re();At(e,new ie(e,t))}function se(t,e){nt.call(this,ce.STAT_EVENT,t),this.stat=e}function oe(t){const e=re();At(e,new se(e,t))}function le(t,e){nt.call(this,ce.Na,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return s.setTimeout((function(){t()}),e)}ce.Ma="serverreachability",g(ie,nt),ce.STAT_EVENT="statevent",g(se,nt),ce.Na="timingevent",g(le,nt);var ue={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function me(t){return t.h||(t.h=t.i())}function de(){}ve.prototype.h=null;var pe,ze={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ge(){nt.call(this,"d")}function ye(){nt.call(this,"c")}function Me(){}function Ce(t,e,c,n){this.l=t,this.j=e,this.m=c,this.X=n||1,this.V=new Bt(this),this.P=Ve,t=Z?125:void 0,this.W=new Ut(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}g(ge,nt),g(ye,nt),g(Me,ve),Me.prototype.g=function(){return new XMLHttpRequest},Me.prototype.i=function(){return{}},pe=new Me;var Ve=45e3,He={},Le={};function we(t,e,c){t.K=1,t.v=Ye($e(e)),t.s=c,t.U=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),Ee(t),t.A=$e(t.v);var c=t.A,n=t.X;Array.isArray(n)||(n=[String(n)]),fc(c.h,"t",n),t.C=0,c=t.l.H,t.h=new be,t.g=yn(t.l,c?e:null,!t.s),0<t.O&&(t.L=new $t(p(t.Ia,t,t.g),t.O)),Kt(t.V,t.g,"readystatechange",t.gb),e=t.H?O(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ae(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function Se(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function _e(t,e,c){let n,r=!0;for(;!t.I&&t.C<c.length;){if(n=ke(t,c),n==Le){4==e&&(t.o=4,oe(14),r=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(n==He){t.o=4,oe(15),Qt(t.j,t.m,c,"[Invalid Chunk]"),r=!1;break}Qt(t.j,t.m,n,null),Ne(t,n)}Se(t)&&n!=Le&&n!=He&&(t.h.g="",t.C=0),4!=e||0!=c.length||t.h.h||(t.o=1,oe(16),r=!1),t.i=t.i&&r,r?0<c.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+c.length),un(e),e.L=!0,oe(11))):(Qt(t.j,t.m,c,"[Invalid Chunked Response]"),Oe(t),xe(t))}function ke(t,e){var c=t.C,n=e.indexOf("\n",c);return-1==n?Le:(c=Number(e.substring(c,n)),isNaN(c)?He:(n+=1,n+c>e.length?Le:(e=e.substr(n,c),t.C=n+c,e)))}function Ee(t){t.Y=Date.now()+t.P,Te(t,t.P)}function Te(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(p(t.eb,t),e)}function Ie(t){t.B&&(s.clearTimeout(t.B),t.B=null)}function xe(t){0==t.l.G||t.I||mn(t.l,t)}function Oe(t){Ie(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ft(t.W),Wt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ne(t,e){try{var c=t.l;if(0!=c.G&&(c.g==t||Mc(c.i,t)))if(c.I=t.N,!t.J&&Mc(c.i,t)&&3==c.G){try{var n=c.Ca.g.parse(e)}catch(l){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){t:if(!c.u){if(c.g){if(!(c.g.F+3e3<t.F))break t;vn(c),tn(c)}hn(c),oe(18)}}else c.ta=r[1],0<c.ta-c.U&&37500>r[2]&&c.N&&0==c.A&&!c.v&&(c.v=he(p(c.ab,c),6e3));if(1>=yc(c.i)&&c.ka){try{c.ka()}catch(l){}c.ka=void 0}}else pn(c,11)}else if((t.J||c.g==t)&&vn(c),!A(e))for(r=c.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(c.U=l[0],l=l[1],2==c.G)if("c"==l[0]){c.J=l[1],c.la=l[2];const e=l[3];null!=e&&(c.ma=e,c.h.info("VER="+c.ma));const r=l[4];null!=r&&(c.za=r,c.h.info("SVER="+c.za));const h=l[5];null!=h&&"number"===typeof h&&0<h&&(n=1.5*h,c.K=n,c.h.info("backChannelRequestTimeoutMs_="+n)),n=c;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=n.i;!i.g&&(k(t,"spdy")||k(t,"quic")||k(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Cc(i,i.h),i.h=null))}if(n.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.sa=t,Xe(n.F,n.D,t))}}c.G=3,c.j&&c.j.xa(),c.$&&(c.O=Date.now()-t.F,c.h.info("Handshake RTT: "+c.O+"ms")),n=c;var a=t;if(n.oa=gn(n,n.H?n.la:null,n.W),a.J){bc(n.i,a);var s=a,o=n.K;o&&s.setTimeout(o),s.B&&(Ie(s),Ee(s)),n.g=a}else ln(n);0<c.l.length&&nn(c)}else"stop"!=l[0]&&"close"!=l[0]||pn(c,7);else 3==c.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?pn(c,7):Qc(c):"noop"!=l[0]&&c.j&&c.j.wa(l),c.A=0)}ae(4)}catch(l){}}function Re(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(l(t)){for(var e=[],c=t.length,n=0;n<c;n++)e.push(t[n]);return e}for(n in e=[],c=0,t)e[c++]=t[n];return e}function Pe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"===typeof t)V(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var c=t.T();else if(t.R&&"function"==typeof t.R)c=void 0;else if(l(t)||"string"===typeof t){c=[];for(var n=t.length,r=0;r<n;r++)c.push(r)}else for(r in c=[],n=0,t)c[n++]=r;n=Re(t),r=n.length;for(var i=0;i<r;i++)e.call(void 0,n[i],c&&c[i],t)}}function je(t,e){this.h={},this.g=[],this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var n=0;n<c;n+=2)this.set(arguments[n],arguments[n+1])}else if(t)if(t instanceof je)for(c=t.T(),n=0;n<c.length;n++)this.set(c[n],t.get(c[n]));else for(n in t)this.set(n,t[n])}function De(t){if(t.i!=t.g.length){for(var e=0,c=0;e<t.g.length;){var n=t.g[e];Ue(t.h,n)&&(t.g[c++]=n),e++}t.g.length=c}if(t.i!=t.g.length){var r={};for(c=e=0;e<t.g.length;)n=t.g[e],Ue(r,n)||(t.g[c++]=n,r[n]=1),e++;t.g.length=c}}function Ue(t,e){return Object.prototype.hasOwnProperty.call(t,e)}n=Ce.prototype,n.setTimeout=function(t){this.P=t},n.gb=function(t){t=t.target;const e=this.L;e&&3==Gc(t)?e.l():this.Ia(t)},n.Ia=function(t){try{if(t==this.g)t:{const u=Gc(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>u)&&(3!=u||Z||this.g&&(this.h.h||this.g.ga()||Kc(this.g)))){this.I||4!=u||7==e||ae(8==e||0>=f?3:2),Ie(this);var c=this.g.ba();this.N=c;e:if(Se(this)){var n=Kc(this.g);t="";var r=n.length,i=4==Gc(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Oe(this),xe(this);var a="";break e}this.h.i=new s.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:i&&e==r-1});n.splice(0,r),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ga();if(this.i=200==c,Jt(this.j,this.u,this.A,this.m,this.X,u,c),this.i){if(this.$&&!this.J){e:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(o)){var h=o;break e}}h=null}if(!(c=h)){this.i=!1,this.o=3,oe(12),Oe(this),xe(this);break t}Qt(this.j,this.m,c,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ne(this,c)}this.U?(_e(this,u,a),Z&&this.i&&3==u&&(Kt(this.V,this.W,"tick",this.fb),this.W.start())):(Qt(this.j,this.m,a,null),Ne(this,a)),4==u&&Oe(this),this.i&&!this.I&&(4==u?mn(this.l,this):(this.i=!1,Ee(this)))}else 400==c&&0<a.indexOf("Unknown SID")?(this.o=3,oe(12)):(this.o=0,oe(13)),Oe(this),xe(this)}}}catch(u){}},n.fb=function(){if(this.g){var t=Gc(this.g),e=this.g.ga();this.C<e.length&&(Ie(this),_e(this,t,e),this.i&&4!=t&&Ee(this))}},n.cancel=function(){this.I=!0,Oe(this)},n.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(ae(3),oe(17)),Oe(this),this.o=2,xe(this)):Te(this,this.Y-t)},n=je.prototype,n.R=function(){De(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},n.T=function(){return De(this),this.g.concat()},n.get=function(t,e){return Ue(this.h,t)?this.h[t]:e},n.set=function(t,e){Ue(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},n.forEach=function(t,e){for(var c=this.T(),n=0;n<c.length;n++){var r=c[n],i=this.get(r);t.call(e,i,r,this)}};var Fe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qe(t,e){if(t){t=t.split("&");for(var c=0;c<t.length;c++){var n=t[c].indexOf("="),r=null;if(0<=n){var i=t[c].substring(0,n);r=t[c].substring(n+1)}else i=t[c];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ze(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ze){this.g=void 0!==e?e:t.g,Be(this,t.j),this.s=t.s,Ge(this,t.i),Ke(this,t.m),this.l=t.l,e=t.h;var c=new oc;c.i=e.i,e.g&&(c.g=new je(e.g),c.h=e.h),We(this,c),this.o=t.o}else t&&(c=String(t).match(Fe))?(this.g=!!e,Be(this,c[1]||"",!0),this.s=tc(c[2]||""),Ge(this,c[3]||"",!0),Ke(this,c[4]),this.l=tc(c[5]||"",!0),We(this,c[6]||"",!0),this.o=tc(c[7]||"")):(this.g=!!e,this.h=new oc(null,this.g))}function $e(t){return new Ze(t)}function Be(t,e,c){t.j=c?tc(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ge(t,e,c){t.i=c?tc(e,!0):e}function Ke(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function We(t,e,c){e instanceof oc?(t.h=e,mc(t.h,t.g)):(c||(e=ec(e,ac)),t.h=new oc(e,t.g))}function Xe(t,e,c){t.h.set(e,c)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof Ze?$e(t):new Ze(t,void 0)}function Qe(t,e,c,n){var r=new Ze(null,void 0);return t&&Be(r,t),e&&Ge(r,e),c&&Ke(r,c),n&&(r.l=n),r}function tc(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ec(t,e,c){return"string"===typeof t?(t=encodeURI(t).replace(e,cc),c&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cc(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ec(e,nc,!0),":");var c=this.i;return(c||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ec(e,nc,!0),"@"),t.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.m,null!=c&&t.push(":",String(c))),(c=this.l)&&(this.i&&"/"!=c.charAt(0)&&t.push("/"),t.push(ec(c,"/"==c.charAt(0)?ic:rc,!0))),(c=this.h.toString())&&t.push("?",c),(c=this.o)&&t.push("#",ec(c,sc)),t.join("")};var nc=/[#\/\?@]/g,rc=/[#\?:]/g,ic=/[#\?]/g,ac=/[#\?@]/g,sc=/#/g;function oc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lc(t){t.g||(t.g=new je,t.h=0,t.i&&qe(t.i,(function(e,c){t.add(decodeURIComponent(e.replace(/\+/g," ")),c)})))}function hc(t,e){lc(t),e=vc(t,e),Ue(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ue(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&De(t)))}function uc(t,e){return lc(t),e=vc(t,e),Ue(t.g.h,e)}function fc(t,e,c){hc(t,e),0<c.length&&(t.i=null,t.g.set(vc(t,e),w(c)),t.h+=c.length)}function vc(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mc(t,e){e&&!t.j&&(lc(t),t.i=null,t.g.forEach((function(t,e){var c=e.toLowerCase();e!=c&&(hc(this,e),fc(this,c,t))}),t)),t.j=e}n=oc.prototype,n.add=function(t,e){lc(this),this.i=null,t=vc(this,t);var c=this.g.get(t);return c||this.g.set(t,c=[]),c.push(e),this.h+=1,this},n.forEach=function(t,e){lc(this),this.g.forEach((function(c,n){V(c,(function(c){t.call(e,c,n,this)}),this)}),this)},n.T=function(){lc(this);for(var t=this.g.R(),e=this.g.T(),c=[],n=0;n<e.length;n++)for(var r=t[n],i=0;i<r.length;i++)c.push(e[n]);return c},n.R=function(t){lc(this);var e=[];if("string"===typeof t)uc(this,t)&&(e=L(e,this.g.get(vc(this,t))));else{t=this.g.R();for(var c=0;c<t.length;c++)e=L(e,t[c])}return e},n.set=function(t,e){return lc(this),this.i=null,t=vc(this,t),uc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},n.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),c=0;c<e.length;c++){var n=e[c],r=encodeURIComponent(String(n));n=this.R(n);for(var i=0;i<n.length;i++){var a=r;""!==n[i]&&(a+="="+encodeURIComponent(String(n[i]))),t.push(a)}}return this.i=t.join("&")};var dc=class{constructor(t,e){this.h=t,this.g=e}};function pc(t){this.l=t||zc,s.PerformanceNavigationTiming?(t=s.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(s.g&&s.g.Ea&&s.g.Ea()&&s.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zc=10;function gc(t){return!!t.h||!!t.g&&t.g.size>=t.j}function yc(t){return t.h?1:t.g?t.g.size:0}function Mc(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Cc(t,e){t.g?t.g.add(e):t.h=e}function bc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Vc(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const c of t.g.values())e=e.concat(c.D);return e}return w(t.i)}function Hc(){}function Lc(){this.g=new Hc}function wc(t,e,c){const n=c||"";try{Pe(t,(function(t,c){let r=t;h(t)&&(r=_t(t)),e.push(n+c+"="+encodeURIComponent(r))}))}catch(r){throw e.push(n+"type="+encodeURIComponent("_badmap")),r}}function Ac(t,e){const c=new Xt;if(s.Image){const n=new Image;n.onload=z(Sc,c,n,"TestLoadImage: loaded",!0,e),n.onerror=z(Sc,c,n,"TestLoadImage: error",!1,e),n.onabort=z(Sc,c,n,"TestLoadImage: abort",!1,e),n.ontimeout=z(Sc,c,n,"TestLoadImage: timeout",!1,e),s.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=t}else e(!1)}function Sc(t,e,c,n,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(n)}catch(i){}}function _c(t){this.l=t.$b||null,this.j=t.ib||!1}function kc(t,e){wt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ec,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pc.prototype.cancel=function(){if(this.i=Vc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Hc.prototype.stringify=function(t){return s.JSON.stringify(t,void 0)},Hc.prototype.parse=function(t){return s.JSON.parse(t,void 0)},g(_c,ve),_c.prototype.g=function(){return new kc(this.l,this.j)},_c.prototype.i=function(t){return function(){return t}}({}),g(kc,wt);var Ec=0;function Tc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ic(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xc(t)}function xc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}n=kc.prototype,n.open=function(t,e){if(this.readyState!=Ec)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xc(this)},n.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||s).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ic(this)),this.readyState=Ec},n.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xc(this)),this.g&&(this.readyState=3,xc(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof s.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},n.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ic(this):xc(this),3==this.readyState&&Tc(this)}},n.Ua=function(t){this.g&&(this.response=this.responseText=t,Ic(this))},n.Ta=function(t){this.g&&(this.response=t,Ic(this))},n.ha=function(){this.g&&Ic(this)},n.setRequestHeader=function(t,e){this.v.append(t,e)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var c=e.next();!c.done;)c=c.value,t.push(c[0]+": "+c[1]),c=e.next();return t.join("\r\n")},Object.defineProperty(kc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Oc=s.JSON.parse;function Nc(t){wt.call(this),this.headers=new je,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Rc,this.K=this.L=!1}g(Nc,wt);var Rc="",Pc=/^https?$/i,jc=["POST","PUT"];function Dc(t){return F&&Q()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Uc(t){return"content-type"==t.toLowerCase()}function Fc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qc(t),$c(t)}function qc(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function Zc(t){if(t.h&&"undefined"!=typeof a&&(!t.C[1]||4!=Gc(t)||2!=t.ba()))if(t.v&&4==Gc(t))qt(t.Fa,0,t);else if(At(t,"readystatechange"),4==Gc(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var c;if(!(c=e)){var n;if(n=0===a){var r=String(t.H).match(Fe)[1]||null;if(!r&&s.self&&s.self.location){var i=s.self.location.protocol;r=i.substr(0,i.length-1)}n=!Pc.test(r?r.toLowerCase():"")}c=n}if(c)At(t,"complete"),At(t,"success");else{t.m=6;try{var o=2<Gc(t)?t.g.statusText:""}catch(l){o=""}t.j=o+" ["+t.ba()+"]",qc(t)}}finally{$c(t)}}}function $c(t,e){if(t.g){Bc(t);const n=t.g,r=t.C[0]?o:null;t.g=null,t.C=null,e||At(t,"ready");try{n.onreadystatechange=r}catch(c){}}}function Bc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(s.clearTimeout(t.A),t.A=null)}function Gc(t){return t.g?t.g.readyState:0}function Kc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Rc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Wc(t){let e="";return x(t,(function(t,c){e+=c,e+=":",e+=t,e+="\r\n"})),e}function Xc(t,e,c){t:{for(n in c){var n=!1;break t}n=!0}n||(c=Wc(c),"string"===typeof t?null!=c&&encodeURIComponent(String(c)):Xe(t,e,c))}function Yc(t,e,c){return c&&c.internalChannelParams&&c.internalChannelParams[t]||e}function Jc(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yc("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yc("baseRetryDelayMs",5e3,t),this.$a=Yc("retryDelaySeedMs",1e4,t),this.Ya=Yc("forwardChannelMaxRetries",2,t),this.ra=Yc("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new pc(t&&t.concurrentRequestLimit),this.Ca=new Lc,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Qc(t){if(en(t),3==t.G){var e=t.V++,c=$e(t.F);Xe(c,"SID",t.J),Xe(c,"RID",e),Xe(c,"TYPE","terminate"),sn(t,c),e=new Ce(t,t.h,e,void 0),e.K=2,e.v=Ye($e(c)),c=!1,s.navigator&&s.navigator.sendBeacon&&(c=s.navigator.sendBeacon(e.v.toString(),"")),!c&&s.Image&&((new Image).src=e.v,c=!0),c||(e.g=yn(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ee(e)}zn(t)}function tn(t){t.g&&(un(t),t.g.cancel(),t.g=null)}function en(t){tn(t),t.u&&(s.clearTimeout(t.u),t.u=null),vn(t),t.i.cancel(),t.m&&("number"===typeof t.m&&s.clearTimeout(t.m),t.m=null)}function cn(t,e){t.l.push(new dc(t.Za++,e)),3==t.G&&nn(t)}function nn(t){gc(t.i)||t.m||(t.m=!0,Nt(t.Ha,t),t.C=0)}function rn(t,e){return!(yc(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=he(p(t.Ha,t,e),dn(t,t.C)),t.C++,!0))}function an(t,e){var c;c=e?e.m:t.V++;const n=$e(t.F);Xe(n,"SID",t.J),Xe(n,"RID",c),Xe(n,"AID",t.U),sn(t,n),t.o&&t.s&&Xc(n,t.o,t.s),c=new Ce(t,t.h,c,t.C+1),null===t.o&&(c.H=t.s),e&&(t.l=e.D.concat(t.l)),e=on(t,c,1e3),c.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Cc(t.i,c),we(c,n,e)}function sn(t,e){t.j&&Pe({},(function(t,c){Xe(e,c,t)}))}function on(t,e,c){c=Math.min(t.l.length,c);var n=t.j?p(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+c];-1==e?0<c?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let a=!0;for(let s=0;s<c;s++){let c=r[s].h;const o=r[s].g;if(c-=e,0>c)e=Math.max(0,r[s].h-100),a=!1;else try{wc(o,t,"req"+c+"_")}catch(i){n&&n(o)}}if(a){n=t.join("&");break t}}}return t=t.l.splice(0,c),e.D=t,n}function ln(t){t.g||t.u||(t.Y=1,Nt(t.Ga,t),t.A=0)}function hn(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=he(p(t.Ga,t),dn(t,t.A)),t.A++,!0)}function un(t){null!=t.B&&(s.clearTimeout(t.B),t.B=null)}function fn(t){t.g=new Ce(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=$e(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),sn(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Xc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var c=t.g;t=t.la,c.K=1,c.v=Ye($e(e)),c.s=null,c.U=!0,Ae(c,t)}function vn(t){null!=t.v&&(s.clearTimeout(t.v),t.v=null)}function mn(t,e){var c=null;if(t.g==e){vn(t),un(t),t.g=null;var n=2}else{if(!Mc(t.i,e))return;c=e.D,bc(t.i,e),n=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==n){c=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;n=re(),At(n,new le(n,c,e,r)),nn(t)}else ln(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==n&&rn(t,e)||2==n&&hn(t)))switch(c&&0<c.length&&(e=t.i,e.i=e.i.concat(c)),r){case 1:pn(t,5);break;case 4:pn(t,10);break;case 3:pn(t,6);break;default:pn(t,2)}}function dn(t,e){let c=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(c*=2),c*e}function pn(t,e){if(t.h.info("Error code "+e),2==e){var c=null;t.j&&(c=null);var n=p(t.jb,t);c||(c=new Ze("//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||Be(c,"https"),Ye(c)),Ac(c.toString(),n)}else oe(2);t.G=0,t.j&&t.j.va(e),zn(t),en(t)}function zn(t){t.G=0,t.I=-1,t.j&&(0==Vc(t.i).length&&0==t.l.length||(t.i.i.length=0,w(t.l),t.l.length=0),t.j.ua())}function gn(t,e,c){let n=Je(c);if(""!=n.i)e&&Ge(n,e+"."+n.i),Ke(n,n.m);else{const t=s.location;n=Qe(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,c)}return t.aa&&x(t.aa,(function(t,e){Xe(n,e,t)})),e=t.D,c=t.sa,e&&c&&Xe(n,e,c),Xe(n,"VER",t.ma),sn(t,n),n}function yn(t,e,c){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=c&&t.Ba&&!t.qa?new Nc(new _c({ib:!0})):new Nc(t.qa),e.L=t.H,e}function Mn(){}function Cn(){if(F&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function bn(t,e){wt.call(this),this.g=new Jc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ln(this)}function Vn(t){ge.call(this);var e=t.__sm__;if(e){t:{for(const c in e){t=c;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Hn(){ye.call(this),this.status=1}function Ln(t){this.g=t}n=Nc.prototype,n.ea=function(t,e,c,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pe.g(),this.C=this.u?me(this.u):me(pe),this.g.onreadystatechange=p(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Fc(this,i)}t=c||"";const r=new je(this.headers);n&&Pe(n,(function(t,e){r.set(e,t)})),n=H(r.T()),c=s.FormData&&t instanceof s.FormData,!(0<=b(jc,e))||n||c||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bc(this),0<this.B&&((this.K=Dc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=p(this.pa,this)):this.A=qt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Fc(this,i)}},n.pa=function(){"undefined"!=typeof a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},n.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),$c(this))},n.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$c(this,!0)),Nc.Z.M.call(this)},n.Fa=function(){this.s||(this.F||this.v||this.l?Zc(this):this.cb())},n.cb=function(){Zc(this)},n.ba=function(){try{return 2<Gc(this)?this.g.status:-1}catch(t){return-1}},n.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},n.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Oc(e)}},n.Da=function(){return this.m},n.La=function(){return"string"===typeof this.j?this.j:String(this.j)},n=Jc.prototype,n.ma=8,n.G=1,n.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},n.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ce(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=O(i),R(i,this.P)):i=this.P),null===this.o&&(r.H=i),this.ja)t:{for(var e=0,c=0;c<this.l.length;c++){var n=this.l[c];if(n="__data__"in n.g&&(n=n.g.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(e+=n,4096<e){e=c;break t}if(4096===e||c===this.l.length-1){e=c+1;break t}}e=1e3}else e=1e3;e=on(this,r,e),c=$e(this.F),Xe(c,"RID",t),Xe(c,"CVER",22),this.D&&Xe(c,"X-HTTP-Session-Id",this.D),sn(this,c),this.o&&i&&Xc(c,this.o,i),Cc(this.i,r),this.Ra&&Xe(c,"TYPE","init"),this.ja?(Xe(c,"$req",e),Xe(c,"SID","null"),r.$=!0,we(r,c,null)):we(r,c,e),this.G=2}}else 3==this.G&&(t?an(this,t):0==this.l.length||gc(this.i)||an(this))},n.Ga=function(){if(this.u=null,fn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=he(p(this.bb,this),t)}},n.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,oe(10),tn(this),fn(this))},n.ab=function(){null!=this.v&&(this.v=null,tn(this),hn(this),oe(19))},n.jb=function(t){t?(this.h.info("Successfully pinged google.com"),oe(2)):(this.h.info("Failed to ping google.com"),oe(1))},n=Mn.prototype,n.xa=function(){},n.wa=function(){},n.va=function(){},n.ua=function(){},n.Oa=function(){},Cn.prototype.g=function(t,e){return new bn(t,e)},g(bn,wt),bn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,c=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Nt(p(t.hb,t,e))),oe(0),t.W=e,t.aa=c||{},t.N=t.X,t.F=gn(t,null,t.W),nn(t)},bn.prototype.close=function(){Qc(this.g)},bn.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,cn(this.g,e)}else this.v?(e={},e.__data__=_t(t),cn(this.g,e)):cn(this.g,t)},bn.prototype.M=function(){this.g.j=null,delete this.j,Qc(this.g),delete this.g,bn.Z.M.call(this)},g(Vn,ge),g(Hn,ye),g(Ln,Mn),Ln.prototype.xa=function(){At(this.g,"a")},Ln.prototype.wa=function(t){At(this.g,new Vn(t))},Ln.prototype.va=function(t){At(this.g,new Hn(t))},Ln.prototype.ua=function(){At(this.g,"b")},Cn.prototype.createWebChannel=Cn.prototype.g,bn.prototype.send=bn.prototype.u,bn.prototype.open=bn.prototype.m,bn.prototype.close=bn.prototype.close,ue.NO_ERROR=0,ue.TIMEOUT=8,ue.HTTP_ERROR=6,fe.COMPLETE="complete",de.EventType=ze,ze.OPEN="a",ze.CLOSE="b",ze.ERROR="c",ze.MESSAGE="d",wt.prototype.listen=wt.prototype.N,Nc.prototype.listenOnce=Nc.prototype.O,Nc.prototype.getLastError=Nc.prototype.La,Nc.prototype.getLastErrorCode=Nc.prototype.Da,Nc.prototype.getStatus=Nc.prototype.ba,Nc.prototype.getResponseJson=Nc.prototype.Qa,Nc.prototype.getResponseText=Nc.prototype.ga,Nc.prototype.send=Nc.prototype.ea;var wn=i.createWebChannelTransport=function(){return new Cn},An=i.getStatEventTarget=function(){return re()},Sn=i.ErrorCode=ue,_n=i.EventType=fe,kn=i.Event=ce,En=i.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Tn=i.FetchXmlHttpFactory=_c,In=i.WebChannel=de,xn=i.XhrIo=Nc}).call(this,c("c8ba"))},"90e3":function(t,e){var c=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++c+n).toString(36)}},9112:function(t,e,c){var n=c("83ab"),r=c("9bf2"),i=c("5c6c");t.exports=n?function(t,e,c){return r.f(t,e,i(1,c))}:function(t,e,c){return t[e]=c,t}},"94ca":function(t,e,c){var n=c("d039"),r=c("1626"),i=/#|\.prototype\./,a=function(t,e){var c=o[s(t)];return c==h||c!=l&&(r(e)?n(e):!!e)},s=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},o=a.data={},l=a.NATIVE="N",h=a.POLYFILL="P";t.exports=a},"96cf":function(t,e,c){var n=function(t){"use strict";var e,c=Object.prototype,n=c.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function o(t,e,c){return Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{o({},"")}catch(T){o=function(t,e,c){return t[e]=c}}function l(t,e,c,n){var r=e&&e.prototype instanceof p?e:p,i=Object.create(r.prototype),a=new _(n||[]);return i._invoke=L(t,c,a),i}function h(t,e,c){try{return{type:"normal",arg:t.call(e,c)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var u="suspendedStart",f="suspendedYield",v="executing",m="completed",d={};function p(){}function z(){}function g(){}var y={};o(y,i,(function(){return this}));var M=Object.getPrototypeOf,C=M&&M(M(k([])));C&&C!==c&&n.call(C,i)&&(y=C);var b=g.prototype=p.prototype=Object.create(y);function V(t){["next","throw","return"].forEach((function(e){o(t,e,(function(t){return this._invoke(e,t)}))}))}function H(t,e){function c(r,i,a,s){var o=h(t[r],t,i);if("throw"!==o.type){var l=o.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){c("next",t,a,s)}),(function(t){c("throw",t,a,s)})):e.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return c("throw",t,a,s)}))}s(o.arg)}var r;function i(t,n){function i(){return new e((function(e,r){c(t,n,e,r)}))}return r=r?r.then(i,i):i()}this._invoke=i}function L(t,e,c){var n=u;return function(r,i){if(n===v)throw new Error("Generator is already running");if(n===m){if("throw"===r)throw i;return E()}c.method=r,c.arg=i;while(1){var a=c.delegate;if(a){var s=w(a,c);if(s){if(s===d)continue;return s}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(n===u)throw n=m,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);n=v;var o=h(t,e,c);if("normal"===o.type){if(n=c.done?m:f,o.arg===d)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(n=m,c.method="throw",c.arg=o.arg)}}}function w(t,c){var n=t.iterator[c.method];if(n===e){if(c.delegate=null,"throw"===c.method){if(t.iterator["return"]&&(c.method="return",c.arg=e,w(t,c),"throw"===c.method))return d;c.method="throw",c.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=h(n,t.iterator,c.arg);if("throw"===r.type)return c.method="throw",c.arg=r.arg,c.delegate=null,d;var i=r.arg;return i?i.done?(c[t.resultName]=i.value,c.next=t.nextLoc,"return"!==c.method&&(c.method="next",c.arg=e),c.delegate=null,d):i:(c.method="throw",c.arg=new TypeError("iterator result is not an object"),c.delegate=null,d)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function k(t){if(t){var c=t[i];if(c)return c.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function c(){while(++r<t.length)if(n.call(t,r))return c.value=t[r],c.done=!1,c;return c.value=e,c.done=!0,c};return a.next=a}}return{next:E}}function E(){return{value:e,done:!0}}return z.prototype=g,o(b,"constructor",g),o(g,"constructor",z),z.displayName=o(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===z||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,o(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},V(H.prototype),o(H.prototype,a,(function(){return this})),t.AsyncIterator=H,t.async=function(e,c,n,r,i){void 0===i&&(i=Promise);var a=new H(l(e,c,n,r),i);return t.isGeneratorFunction(c)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},V(b),o(b,s,"Generator"),o(b,i,(function(){return this})),o(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var c in t)e.push(c);return e.reverse(),function c(){while(e.length){var n=e.pop();if(n in t)return c.value=n,c.done=!1,c}return c.done=!0,c}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var c in this)"t"===c.charAt(0)&&n.call(this,c)&&!isNaN(+c.slice(1))&&(this[c]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var c=this;function r(n,r){return s.type="throw",s.arg=t,c.next=n,r&&(c.method="next",c.arg=e),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var o=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(o&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var c=this.tryEntries.length-1;c>=0;--c){var r=this.tryEntries[c];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var c=this.tryEntries[e];if(c.finallyLoc===t)return this.complete(c.completion,c.afterLoc),S(c),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var c=this.tryEntries[e];if(c.tryLoc===t){var n=c.completion;if("throw"===n.type){var r=n.arg;S(c)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,c,n){return this.delegate={iterator:k(t),resultName:c,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},"9a1f":function(t,e,c){var n=c("59ed"),r=c("825a"),i=c("35a1");t.exports=function(t,e){var c=arguments.length<2?i(t):e;if(n(c))return r(c.call(t));throw TypeError(String(t)+" is not iterable")}},"9bf2":function(t,e,c){var n=c("83ab"),r=c("0cfb"),i=c("825a"),a=c("a04b"),s=Object.defineProperty;e.f=n?s:function(t,e,c){if(i(t),e=a(e),i(c),r)try{return s(t,e,c)}catch(n){}if("get"in c||"set"in c)throw TypeError("Accessors not supported");return"value"in c&&(t[e]=c.value),t}},"9ed3":function(t,e,c){"use strict";var n=c("ae93").IteratorPrototype,r=c("7c73"),i=c("5c6c"),a=c("d44e"),s=c("3f8c"),o=function(){return this};t.exports=function(t,e,c){var l=e+" Iterator";return t.prototype=r(n,{next:i(1,c)}),a(t,l,!1,!0),s[l]=o,t}},a04b:function(t,e,c){var n=c("c04e"),r=c("d9b5");t.exports=function(t){var e=n(t,"string");return r(e)?e:String(e)}},a4b4:function(t,e,c){var n=c("342f");t.exports=/web0s(?!.*chrome)/i.test(n)},a4d3:function(t,e,c){"use strict";var n=c("23e7"),r=c("da84"),i=c("d066"),a=c("c430"),s=c("83ab"),o=c("4930"),l=c("d039"),h=c("5135"),u=c("e8b5"),f=c("1626"),v=c("861d"),m=c("d9b5"),d=c("825a"),p=c("7b0b"),z=c("fc6a"),g=c("a04b"),y=c("577e"),M=c("5c6c"),C=c("7c73"),b=c("df75"),V=c("241c"),H=c("057f"),L=c("7418"),w=c("06cf"),A=c("9bf2"),S=c("d1e7"),_=c("6eeb"),k=c("5692"),E=c("f772"),T=c("d012"),I=c("90e3"),x=c("b622"),O=c("e538"),N=c("746f"),R=c("d44e"),P=c("69f3"),j=c("b727").forEach,D=E("hidden"),U="Symbol",F="prototype",q=x("toPrimitive"),Z=P.set,$=P.getterFor(U),B=Object[F],G=r.Symbol,K=i("JSON","stringify"),W=w.f,X=A.f,Y=H.f,J=S.f,Q=k("symbols"),tt=k("op-symbols"),et=k("string-to-symbol-registry"),ct=k("symbol-to-string-registry"),nt=k("wks"),rt=r.QObject,it=!rt||!rt[F]||!rt[F].findChild,at=s&&l((function(){return 7!=C(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,c){var n=W(B,e);n&&delete B[e],X(t,e,c),n&&t!==B&&X(B,e,n)}:X,st=function(t,e){var c=Q[t]=C(G[F]);return Z(c,{type:U,tag:t,description:e}),s||(c.description=e),c},ot=function(t,e,c){t===B&&ot(tt,e,c),d(t);var n=g(e);return d(c),h(Q,n)?(c.enumerable?(h(t,D)&&t[D][n]&&(t[D][n]=!1),c=C(c,{enumerable:M(0,!1)})):(h(t,D)||X(t,D,M(1,{})),t[D][n]=!0),at(t,n,c)):X(t,n,c)},lt=function(t,e){d(t);var c=z(e),n=b(c).concat(mt(c));return j(n,(function(e){s&&!ut.call(c,e)||ot(t,e,c[e])})),t},ht=function(t,e){return void 0===e?C(t):lt(C(t),e)},ut=function(t){var e=g(t),c=J.call(this,e);return!(this===B&&h(Q,e)&&!h(tt,e))&&(!(c||!h(this,e)||!h(Q,e)||h(this,D)&&this[D][e])||c)},ft=function(t,e){var c=z(t),n=g(e);if(c!==B||!h(Q,n)||h(tt,n)){var r=W(c,n);return!r||!h(Q,n)||h(c,D)&&c[D][n]||(r.enumerable=!0),r}},vt=function(t){var e=Y(z(t)),c=[];return j(e,(function(t){h(Q,t)||h(T,t)||c.push(t)})),c},mt=function(t){var e=t===B,c=Y(e?tt:z(t)),n=[];return j(c,(function(t){!h(Q,t)||e&&!h(B,t)||n.push(Q[t])})),n};if(o||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,e=I(t),c=function(t){this===B&&c.call(tt,t),h(this,D)&&h(this[D],e)&&(this[D][e]=!1),at(this,e,M(1,t))};return s&&it&&at(B,e,{configurable:!0,set:c}),st(e,t)},_(G[F],"toString",(function(){return $(this).tag})),_(G,"withoutSetter",(function(t){return st(I(t),t)})),S.f=ut,A.f=ot,w.f=ft,V.f=H.f=vt,L.f=mt,O.f=function(t){return st(x(t),t)},s&&(X(G[F],"description",{configurable:!0,get:function(){return $(this).description}}),a||_(B,"propertyIsEnumerable",ut,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:G}),j(b(nt),(function(t){N(t)})),n({target:U,stat:!0,forced:!o},{for:function(t){var e=y(t);if(h(et,e))return et[e];var c=G(e);return et[e]=c,ct[c]=e,c},keyFor:function(t){if(!m(t))throw TypeError(t+" is not a symbol");if(h(ct,t))return ct[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!o,sham:!s},{create:ht,defineProperty:ot,defineProperties:lt,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:vt,getOwnPropertySymbols:mt}),n({target:"Object",stat:!0,forced:l((function(){L.f(1)}))},{getOwnPropertySymbols:function(t){return L.f(p(t))}}),K){var dt=!o||l((function(){var t=G();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:dt},{stringify:function(t,e,c){var n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e,(v(e)||void 0!==t)&&!m(t))return u(e)||(e=function(t,e){if(f(n)&&(e=n.call(this,t,e)),!m(e))return e}),r[1]=e,K.apply(null,r)}})}if(!G[F][q]){var pt=G[F].valueOf;_(G[F],q,(function(){return pt.apply(this,arguments)}))}R(G,U),T[D]=!0},a640:function(t,e,c){"use strict";var n=c("d039");t.exports=function(t,e){var c=[][t];return!!c&&n((function(){c.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var c=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:c)(t)}},a79d:function(t,e,c){"use strict";var n=c("23e7"),r=c("c430"),i=c("fea9"),a=c("d039"),s=c("d066"),o=c("1626"),l=c("4840"),h=c("cdf9"),u=c("6eeb"),f=!!i&&a((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));if(n({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(t){var e=l(this,s("Promise")),c=o(t);return this.then(c?function(c){return h(e,t()).then((function(){return c}))}:t,c?function(c){return h(e,t()).then((function(){throw c}))}:t)}}),!r&&o(i)){var v=s("Promise").prototype["finally"];i.prototype["finally"]!==v&&u(i.prototype,"finally",v,{unsafe:!0})}},a9e3:function(t,e,c){"use strict";var n=c("83ab"),r=c("da84"),i=c("94ca"),a=c("6eeb"),s=c("5135"),o=c("c6b6"),l=c("7156"),h=c("d9b5"),u=c("c04e"),f=c("d039"),v=c("7c73"),m=c("241c").f,d=c("06cf").f,p=c("9bf2").f,z=c("58a8").trim,g="Number",y=r[g],M=y.prototype,C=o(v(M))==g,b=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,c,n,r,i,a,s,o,l=u(t,"number");if("string"==typeof l&&l.length>2)if(l=z(l),e=l.charCodeAt(0),43===e||45===e){if(c=l.charCodeAt(2),88===c||120===c)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+l}for(i=l.slice(2),a=i.length,s=0;s<a;s++)if(o=i.charCodeAt(s),o<48||o>r)return NaN;return parseInt(i,n)}return+l};if(i(g,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var V,H=function(t){var e=arguments.length<1?0:t,c=this;return c instanceof H&&(C?f((function(){M.valueOf.call(c)})):o(c)!=g)?l(new y(b(e)),c,H):b(e)},L=n?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;L.length>w;w++)s(y,V=L[w])&&!s(H,V)&&p(H,V,d(y,V));H.prototype=M,M.constructor=H,a(r,g,H)}},ab13:function(t,e,c){var n=c("b622"),r=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(c){try{return e[r]=!1,"/./"[t](e)}catch(n){}}return!1}},ad3d:function(t,e,c){"use strict";(function(t){c.d(e,"a",(function(){return b}));var n=c("ecee"),r="undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};function i(t,e){return e={exports:{}},t(e,e.exports),e.exports}var a=i((function(t){(function(e){var c=function(t,e,n){if(!l(e)||u(e)||f(e)||v(e)||o(e))return e;var r,i=0,a=0;if(h(e))for(r=[],a=e.length;i<a;i++)r.push(c(t,e[i],n));else for(var s in r={},e)Object.prototype.hasOwnProperty.call(e,s)&&(r[t(s,n)]=c(t,e[s],n));return r},n=function(t,e){e=e||{};var c=e.separator||"_",n=e.split||/(?=[A-Z])/;return t.split(n).join(c)},r=function(t){return m(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""})),t.substr(0,1).toLowerCase()+t.substr(1))},i=function(t){var e=r(t);return e.substr(0,1).toUpperCase()+e.substr(1)},a=function(t,e){return n(t,e).toLowerCase()},s=Object.prototype.toString,o=function(t){return"function"===typeof t},l=function(t){return t===Object(t)},h=function(t){return"[object Array]"==s.call(t)},u=function(t){return"[object Date]"==s.call(t)},f=function(t){return"[object RegExp]"==s.call(t)},v=function(t){return"[object Boolean]"==s.call(t)},m=function(t){return t-=0,t===t},d=function(t,e){var c=e&&"process"in e?e.process:e;return"function"!==typeof c?t:function(e,n){return c(e,t,n)}},p={camelize:r,decamelize:a,pascalize:i,depascalize:a,camelizeKeys:function(t,e){return c(d(r,e),t)},decamelizeKeys:function(t,e){return c(d(a,e),t,e)},pascalizeKeys:function(t,e){return c(d(i,e),t)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=p:e.humps=p})(r)})),s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t},l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var c=arguments[e];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n])}return t},h=function(t,e){var c={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(c[n]=t[n]);return c},u=function(t){if(Array.isArray(t)){for(var e=0,c=Array(t.length);e<t.length;e++)c[e]=t[e];return c}return Array.from(t)};function f(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var c=e.indexOf(":"),n=a.camelize(e.slice(0,c)),r=e.slice(c+1).trim();return t[n]=r,t}),{})}function v(t){return t.split(/\s+/).reduce((function(t,e){return t[e]=!0,t}),{})}function m(){for(var t=arguments.length,e=Array(t),c=0;c<t;c++)e[c]=arguments[c];return e.reduce((function(t,e){return Array.isArray(e)?t=t.concat(e):t.push(e),t}),[])}function d(t,e){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=(e.children||[]).map(d.bind(null,t)),i=Object.keys(e.attributes||{}).reduce((function(t,c){var n=e.attributes[c];switch(c){case"class":t["class"]=v(n);break;case"style":t["style"]=f(n);break;default:t.attrs[c]=n}return t}),{class:{},style:{},attrs:{}}),a=n.class,s=void 0===a?{}:a,o=n.style,u=void 0===o?{}:o,p=n.attrs,z=void 0===p?{}:p,g=h(n,["class","style","attrs"]);return"string"===typeof e?e:t(e.tag,l({class:m(i.class,s),style:l({},i.style,u),attrs:l({},i.attrs,z)},g,{props:c}),r)}var p=!1;try{p=!0}catch(V){}function z(){var t;!p&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}function g(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?o({},t,e):{}}function y(t){var e,c=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":"horizontal"===t.flip||"both"===t.flip,"fa-flip-vertical":"vertical"===t.flip||"both"===t.flip},o(e,"fa-"+t.size,null!==t.size),o(e,"fa-rotate-"+t.rotation,null!==t.rotation),o(e,"fa-pull-"+t.pull,null!==t.pull),o(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(c).map((function(t){return c[t]?t:null})).filter((function(t){return t}))}function M(t,e){var c=0===(t||"").length?[]:[t];return c.concat(e).join(" ")}function C(t){return n["d"].icon?n["d"].icon(t):null===t?null:"object"===("undefined"===typeof t?"undefined":s(t))&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}var b={name:"FontAwesomeIcon",functional:!0,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},render:function(t,e){var c=e.props,r=c.icon,i=c.mask,a=c.symbol,s=c.title,o=C(r),h=g("classes",y(c)),u=g("transform","string"===typeof c.transform?n["d"].transform(c.transform):c.transform),f=g("mask",C(i)),v=Object(n["b"])(o,l({},h,u,f,{symbol:a,title:s}));if(!v)return z("Could not find one or more icon(s)",o,f);var m=v.abstract,p=d.bind(null,t);return p(m[0],{},e.data)}};Boolean,Boolean}).call(this,c("c8ba"))},ae93:function(t,e,c){"use strict";var n,r,i,a=c("d039"),s=c("1626"),o=c("7c73"),l=c("e163"),h=c("6eeb"),u=c("b622"),f=c("c430"),v=u("iterator"),m=!1;[].keys&&(i=[].keys(),"next"in i?(r=l(l(i)),r!==Object.prototype&&(n=r)):m=!0);var d=void 0==n||a((function(){var t={};return n[v].call(t)!==t}));d?n={}:f&&(n=o(n)),s(n[v])||h(n,v,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:m}},b041:function(t,e,c){"use strict";var n=c("00ee"),r=c("f5df");t.exports=n?{}.toString:function(){return"[object "+r(this)+"]"}},b0c0:function(t,e,c){var n=c("83ab"),r=c("5e77").EXISTS,i=c("9bf2").f,a=Function.prototype,s=a.toString,o=/^\s*function ([^ (]*)/,l="name";n&&!r&&i(a,l,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},b50d:function(t,e,c){"use strict";var n=c("c532"),r=c("467f"),i=c("7aac"),a=c("30b5"),s=c("83b9"),o=c("c345"),l=c("3934"),h=c("2d83");t.exports=function(t){return new Promise((function(e,c){var u=t.data,f=t.headers,v=t.responseType;n.isFormData(u)&&delete f["Content-Type"];var m=new XMLHttpRequest;if(t.auth){var d=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";f.Authorization="Basic "+btoa(d+":"+p)}var z=s(t.baseURL,t.url);function g(){if(m){var n="getAllResponseHeaders"in m?o(m.getAllResponseHeaders()):null,i=v&&"text"!==v&&"json"!==v?m.response:m.responseText,a={data:i,status:m.status,statusText:m.statusText,headers:n,config:t,request:m};r(e,c,a),m=null}}if(m.open(t.method.toUpperCase(),a(z,t.params,t.paramsSerializer),!0),m.timeout=t.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(c(h("Request aborted",t,"ECONNABORTED",m)),m=null)},m.onerror=function(){c(h("Network Error",t,null,m)),m=null},m.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),c(h(e,t,t.transitional&&t.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",m)),m=null},n.isStandardBrowserEnv()){var y=(t.withCredentials||l(z))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;y&&(f[t.xsrfHeaderName]=y)}"setRequestHeader"in m&&n.forEach(f,(function(t,e){"undefined"===typeof u&&"content-type"===e.toLowerCase()?delete f[e]:m.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(m.withCredentials=!!t.withCredentials),v&&"json"!==v&&(m.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&m.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){m&&(m.abort(),c(t),m=null)})),u||(u=null),m.send(u)}))}},b575:function(t,e,c){var n,r,i,a,s,o,l,h,u=c("da84"),f=c("06cf").f,v=c("2cf4").set,m=c("1cdc"),d=c("d4c3"),p=c("a4b4"),z=c("605d"),g=u.MutationObserver||u.WebKitMutationObserver,y=u.document,M=u.process,C=u.Promise,b=f(u,"queueMicrotask"),V=b&&b.value;V||(n=function(){var t,e;z&&(t=M.domain)&&t.exit();while(r){e=r.fn,r=r.next;try{e()}catch(c){throw r?a():i=void 0,c}}i=void 0,t&&t.enter()},m||z||p||!g||!y?!d&&C&&C.resolve?(l=C.resolve(void 0),l.constructor=C,h=l.then,a=function(){h.call(l,n)}):a=z?function(){M.nextTick(n)}:function(){v.call(u,n)}:(s=!0,o=y.createTextNode(""),new g(n).observe(o,{characterData:!0}),a=function(){o.data=s=!s})),t.exports=V||function(t){var e={fn:t,next:void 0};i&&(i.next=e),r||(r=e,a()),i=e}},b622:function(t,e,c){var n=c("da84"),r=c("5692"),i=c("5135"),a=c("90e3"),s=c("4930"),o=c("fdbf"),l=r("wks"),h=n.Symbol,u=o?h:h&&h.withoutSetter||a;t.exports=function(t){return i(l,t)&&(s||"string"==typeof l[t])||(s&&i(h,t)?l[t]=h[t]:l[t]=u("Symbol."+t)),l[t]}},b64b:function(t,e,c){var n=c("23e7"),r=c("7b0b"),i=c("df75"),a=c("d039"),s=a((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return i(r(t))}})},b727:function(t,e,c){var n=c("0366"),r=c("44ad"),i=c("7b0b"),a=c("50c4"),s=c("65f0"),o=[].push,l=function(t){var e=1==t,c=2==t,l=3==t,h=4==t,u=6==t,f=7==t,v=5==t||u;return function(m,d,p,z){for(var g,y,M=i(m),C=r(M),b=n(d,p,3),V=a(C.length),H=0,L=z||s,w=e?L(m,V):c||f?L(m,0):void 0;V>H;H++)if((v||H in C)&&(g=C[H],y=b(g,H,M),t))if(e)w[H]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return H;case 2:o.call(w,g)}else switch(t){case 4:return!1;case 7:o.call(w,g)}return u?-1:l||h?h:w}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},bc3a:function(t,e,c){t.exports=c("cee4")},c04e:function(t,e,c){var n=c("861d"),r=c("d9b5"),i=c("dc4a"),a=c("485a"),s=c("b622"),o=s("toPrimitive");t.exports=function(t,e){if(!n(t)||r(t))return t;var c,s=i(t,o);if(s){if(void 0===e&&(e="default"),c=s.call(t,e),!n(c)||r(c))return c;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},c074:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var n={prefix:"fas",iconName:"hand-holding-usd",icon:[576,512,[],"f4c0","M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"]}},c345:function(t,e,c){"use strict";var n=c("c532"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,c,i,a={};return t?(n.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),c=n.trim(t.substr(i+1)),e){if(a[e]&&r.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([c]):a[e]?a[e]+", "+c:c}})),a):a}},c401:function(t,e,c){"use strict";var n=c("c532"),r=c("2444");t.exports=function(t,e,c){var i=this||r;return n.forEach(c,(function(c){t=c.call(i,t,e)})),t}},c430:function(t,e){t.exports=!1},c532:function(t,e,c){"use strict";var n=c("1d2b"),r=Object.prototype.toString;function i(t){return"[object Array]"===r.call(t)}function a(t){return"undefined"===typeof t}function s(t){return null!==t&&!a(t)&&null!==t.constructor&&!a(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function o(t){return"[object ArrayBuffer]"===r.call(t)}function l(t){return"undefined"!==typeof FormData&&t instanceof FormData}function h(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function u(t){return"string"===typeof t}function f(t){return"number"===typeof t}function v(t){return null!==t&&"object"===typeof t}function m(t){if("[object Object]"!==r.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function d(t){return"[object Date]"===r.call(t)}function p(t){return"[object File]"===r.call(t)}function z(t){return"[object Blob]"===r.call(t)}function g(t){return"[object Function]"===r.call(t)}function y(t){return v(t)&&g(t.pipe)}function M(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function C(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function b(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function V(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var c=0,n=t.length;c<n;c++)e.call(null,t[c],c,t);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(null,t[r],r,t)}function H(){var t={};function e(e,c){m(t[c])&&m(e)?t[c]=H(t[c],e):m(e)?t[c]=H({},e):i(e)?t[c]=e.slice():t[c]=e}for(var c=0,n=arguments.length;c<n;c++)V(arguments[c],e);return t}function L(t,e,c){return V(e,(function(e,r){t[r]=c&&"function"===typeof e?n(e,c):e})),t}function w(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:i,isArrayBuffer:o,isBuffer:s,isFormData:l,isArrayBufferView:h,isString:u,isNumber:f,isObject:v,isPlainObject:m,isUndefined:a,isDate:d,isFile:p,isBlob:z,isFunction:g,isStream:y,isURLSearchParams:M,isStandardBrowserEnv:b,forEach:V,merge:H,extend:L,trim:C,stripBOM:w}},c6b6:function(t,e){var c={}.toString;t.exports=function(t){return c.call(t).slice(8,-1)}},c6cd:function(t,e,c){var n=c("da84"),r=c("ce4e"),i="__core-js_shared__",a=n[i]||r(i,{});t.exports=a},c740:function(t,e,c){"use strict";var n=c("23e7"),r=c("b727").findIndex,i=c("44d2"),a="findIndex",s=!0;a in[]&&Array(1)[a]((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},c8af:function(t,e,c){"use strict";var n=c("c532");t.exports=function(t,e){n.forEach(t,(function(c,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=c,delete t[n])}))}},c8ba:function(t,e){var c;c=function(){return this}();try{c=c||new Function("return this")()}catch(n){"object"===typeof window&&(c=window)}t.exports=c},ca84:function(t,e,c){var n=c("5135"),r=c("fc6a"),i=c("4d64").indexOf,a=c("d012");t.exports=function(t,e){var c,s=r(t),o=0,l=[];for(c in s)!n(a,c)&&n(s,c)&&l.push(c);while(e.length>o)n(s,c=e[o++])&&(~i(l,c)||l.push(c));return l}},caad:function(t,e,c){"use strict";var n=c("23e7"),r=c("4d64").includes,i=c("44d2");n({target:"Array",proto:!0},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},cc12:function(t,e,c){var n=c("da84"),r=c("861d"),i=n.document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},cca6:function(t,e,c){var n=c("23e7"),r=c("60da");n({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},cdf9:function(t,e,c){var n=c("825a"),r=c("861d"),i=c("f069");t.exports=function(t,e){if(n(t),r(e)&&e.constructor===t)return e;var c=i.f(t),a=c.resolve;return a(e),c.promise}},ce4e:function(t,e,c){var n=c("da84");t.exports=function(t,e){try{Object.defineProperty(n,t,{value:e,configurable:!0,writable:!0})}catch(c){n[t]=e}return e}},cee4:function(t,e,c){"use strict";var n=c("c532"),r=c("1d2b"),i=c("0a06"),a=c("4a7b"),s=c("2444");function o(t){var e=new i(t),c=r(i.prototype.request,e);return n.extend(c,i.prototype,e),n.extend(c,e),c}var l=o(s);l.Axios=i,l.create=function(t){return o(a(l.defaults,t))},l.Cancel=c("7a77"),l.CancelToken=c("8df4"),l.isCancel=c("2e67"),l.all=function(t){return Promise.all(t)},l.spread=c("0df6"),l.isAxiosError=c("5f02"),t.exports=l,t.exports.default=l},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,c){var n=c("da84"),r=c("1626"),i=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},d1e7:function(t,e,c){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},d2bb:function(t,e,c){var n=c("825a"),r=c("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,c={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(c,[]),e=c instanceof Array}catch(i){}return function(c,i){return n(c),r(i),e?t.call(c,i):c.__proto__=i,c}}():void 0)},d3b7:function(t,e,c){var n=c("00ee"),r=c("6eeb"),i=c("b041");n||r(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(t,e,c){var n=c("9bf2").f,r=c("5135"),i=c("b622"),a=i("toStringTag");t.exports=function(t,e,c){t&&!r(t=c?t:t.prototype,a)&&n(t,a,{configurable:!0,value:e})}},d4c3:function(t,e,c){var n=c("342f"),r=c("da84");t.exports=/ipad|iphone|ipod/i.test(n)&&void 0!==r.Pebble},d81d:function(t,e,c){"use strict";var n=c("23e7"),r=c("b727").map,i=c("1dde"),a=i("map");n({target:"Array",proto:!0,forced:!a},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},d925:function(t,e,c){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},d9b5:function(t,e,c){var n=c("1626"),r=c("d066"),i=c("fdbf");t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return n(e)&&Object(t)instanceof e}},da84:function(t,e,c){(function(e){var c=function(t){return t&&t.Math==Math&&t};t.exports=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,c("c8ba"))},dbb4:function(t,e,c){var n=c("23e7"),r=c("83ab"),i=c("56ef"),a=c("fc6a"),s=c("06cf"),o=c("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,c,n=a(t),r=s.f,l=i(n),h={},u=0;while(l.length>u)c=r(n,e=l[u++]),void 0!==c&&o(h,e,c);return h}})},dc4a:function(t,e,c){var n=c("59ed");t.exports=function(t,e){var c=t[e];return null==c?void 0:n(c)}},df75:function(t,e,c){var n=c("ca84"),r=c("7839");t.exports=Object.keys||function(t){return n(t,r)}},df7c:function(t,e,c){(function(t){function c(t,e){for(var c=0,n=t.length-1;n>=0;n--){var r=t[n];"."===r?t.splice(n,1):".."===r?(t.splice(n,1),c++):c&&(t.splice(n,1),c--)}if(e)for(;c--;c)t.unshift("..");return t}function n(t){"string"!==typeof t&&(t+="");var e,c=0,n=-1,r=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!r){c=e+1;break}}else-1===n&&(r=!1,n=e+1);return-1===n?"":t.slice(c,n)}function r(t,e){if(t.filter)return t.filter(e);for(var c=[],n=0;n<t.length;n++)e(t[n],n,t)&&c.push(t[n]);return c}e.resolve=function(){for(var e="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,n="/"===a.charAt(0))}return e=c(r(e.split("/"),(function(t){return!!t})),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(t){var n=e.isAbsolute(t),a="/"===i(t,-1);return t=c(r(t.split("/"),(function(t){return!!t})),!n).join("/"),t||n||(t="."),t&&a&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,c){function n(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var c=t.length-1;c>=0;c--)if(""!==t[c])break;return e>c?[]:t.slice(e,c-e+1)}t=e.resolve(t).substr(1),c=e.resolve(c).substr(1);for(var r=n(t.split("/")),i=n(c.split("/")),a=Math.min(r.length,i.length),s=a,o=0;o<a;o++)if(r[o]!==i[o]){s=o;break}var l=[];for(o=s;o<r.length;o++)l.push("..");return l=l.concat(i.slice(s)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),c=47===e,n=-1,r=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!r){n=i;break}}else r=!1;return-1===n?c?"/":".":c&&1===n?"/":t.slice(0,n)},e.basename=function(t,e){var c=n(t);return e&&c.substr(-1*e.length)===e&&(c=c.substr(0,c.length-e.length)),c},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,c=0,n=-1,r=!0,i=0,a=t.length-1;a>=0;--a){var s=t.charCodeAt(a);if(47!==s)-1===n&&(r=!1,n=a+1),46===s?-1===e?e=a:1!==i&&(i=1):-1!==e&&(i=-1);else if(!r){c=a+1;break}}return-1===e||-1===n||0===i||1===i&&e===n-1&&e===c+1?"":t.slice(e,n)};var i="b"==="ab".substr(-1)?function(t,e,c){return t.substr(e,c)}:function(t,e,c){return e<0&&(e=t.length+e),t.substr(e,c)}}).call(this,c("4362"))},e163:function(t,e,c){var n=c("5135"),r=c("1626"),i=c("7b0b"),a=c("f772"),s=c("e177"),o=a("IE_PROTO"),l=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){var e=i(t);if(n(e,o))return e[o];var c=e.constructor;return r(c)&&e instanceof c?c.prototype:e instanceof Object?l:null}},e177:function(t,e,c){var n=c("d039");t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,c){"use strict";var n=c("fc6a"),r=c("44d2"),i=c("3f8c"),a=c("69f3"),s=c("7dd0"),o="Array Iterator",l=a.set,h=a.getterFor(o);t.exports=s(Array,"Array",(function(t,e){l(this,{type:o,target:n(t),index:0,kind:e})}),(function(){var t=h(this),e=t.target,c=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==c?{value:n,done:!1}:"values"==c?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},e2cc:function(t,e,c){var n=c("6eeb");t.exports=function(t,e,c){for(var r in e)n(t,r,e[r],c);return t}},e439:function(t,e,c){var n=c("23e7"),r=c("d039"),i=c("fc6a"),a=c("06cf").f,s=c("83ab"),o=r((function(){a(1)})),l=!s||o;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,c){var n=c("b622");e.f=n},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e683:function(t,e,c){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},e6cf:function(t,e,c){"use strict";var n,r,i,a,s=c("23e7"),o=c("c430"),l=c("da84"),h=c("d066"),u=c("fea9"),f=c("6eeb"),v=c("e2cc"),m=c("d2bb"),d=c("d44e"),p=c("2626"),z=c("59ed"),g=c("1626"),y=c("861d"),M=c("19aa"),C=c("8925"),b=c("2266"),V=c("1c7e"),H=c("4840"),L=c("2cf4").set,w=c("b575"),A=c("cdf9"),S=c("44de"),_=c("f069"),k=c("e667"),E=c("69f3"),T=c("94ca"),I=c("b622"),x=c("6069"),O=c("605d"),N=c("2d00"),R=I("species"),P="Promise",j=E.get,D=E.set,U=E.getterFor(P),F=u&&u.prototype,q=u,Z=F,$=l.TypeError,B=l.document,G=l.process,K=_.f,W=K,X=!!(B&&B.createEvent&&l.dispatchEvent),Y=g(l.PromiseRejectionEvent),J="unhandledrejection",Q="rejectionhandled",tt=0,et=1,ct=2,nt=1,rt=2,it=!1,at=T(P,(function(){var t=C(q),e=t!==String(q);if(!e&&66===N)return!0;if(o&&!Z["finally"])return!0;if(N>=51&&/native code/.test(t))return!1;var c=new q((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))},r=c.constructor={};return r[R]=n,it=c.then((function(){}))instanceof n,!it||!e&&x&&!Y})),st=at||!V((function(t){q.all(t)["catch"]((function(){}))})),ot=function(t){var e;return!(!y(t)||!g(e=t.then))&&e},lt=function(t,e){if(!t.notified){t.notified=!0;var c=t.reactions;w((function(){var n=t.value,r=t.state==et,i=0;while(c.length>i){var a,s,o,l=c[i++],h=r?l.ok:l.fail,u=l.resolve,f=l.reject,v=l.domain;try{h?(r||(t.rejection===rt&&vt(t),t.rejection=nt),!0===h?a=n:(v&&v.enter(),a=h(n),v&&(v.exit(),o=!0)),a===l.promise?f($("Promise-chain cycle")):(s=ot(a))?s.call(a,u,f):u(a)):f(n)}catch(m){v&&!o&&v.exit(),f(m)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ut(t)}))}},ht=function(t,e,c){var n,r;X?(n=B.createEvent("Event"),n.promise=e,n.reason=c,n.initEvent(t,!1,!0),l.dispatchEvent(n)):n={promise:e,reason:c},!Y&&(r=l["on"+t])?r(n):t===J&&S("Unhandled promise rejection",c)},ut=function(t){L.call(l,(function(){var e,c=t.facade,n=t.value,r=ft(t);if(r&&(e=k((function(){O?G.emit("unhandledRejection",n,c):ht(J,c,n)})),t.rejection=O||ft(t)?rt:nt,e.error))throw e.value}))},ft=function(t){return t.rejection!==nt&&!t.parent},vt=function(t){L.call(l,(function(){var e=t.facade;O?G.emit("rejectionHandled",e):ht(Q,e,t.value)}))},mt=function(t,e,c){return function(n){t(e,n,c)}},dt=function(t,e,c){t.done||(t.done=!0,c&&(t=c),t.value=e,t.state=ct,lt(t,!0))},pt=function(t,e,c){if(!t.done){t.done=!0,c&&(t=c);try{if(t.facade===e)throw $("Promise can't be resolved itself");var n=ot(e);n?w((function(){var c={done:!1};try{n.call(e,mt(pt,c,t),mt(dt,c,t))}catch(r){dt(c,r,t)}})):(t.value=e,t.state=et,lt(t,!1))}catch(r){dt({done:!1},r,t)}}};if(at&&(q=function(t){M(this,q,P),z(t),n.call(this);var e=j(this);try{t(mt(pt,e),mt(dt,e))}catch(c){dt(e,c)}},Z=q.prototype,n=function(t){D(this,{type:P,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:tt,value:void 0})},n.prototype=v(Z,{then:function(t,e){var c=U(this),n=K(H(this,q));return n.ok=!g(t)||t,n.fail=g(e)&&e,n.domain=O?G.domain:void 0,c.parent=!0,c.reactions.push(n),c.state!=tt&&lt(c,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),r=function(){var t=new n,e=j(t);this.promise=t,this.resolve=mt(pt,e),this.reject=mt(dt,e)},_.f=K=function(t){return t===q||t===i?new r(t):W(t)},!o&&g(u)&&F!==Object.prototype)){a=F.then,it||(f(F,"then",(function(t,e){var c=this;return new q((function(t,e){a.call(c,t,e)})).then(t,e)}),{unsafe:!0}),f(F,"catch",Z["catch"],{unsafe:!0}));try{delete F.constructor}catch(zt){}m&&m(F,Z)}s({global:!0,wrap:!0,forced:at},{Promise:q}),d(q,P,!1,!0),p(P),i=h(P),s({target:P,stat:!0,forced:at},{reject:function(t){var e=K(this);return e.reject.call(void 0,t),e.promise}}),s({target:P,stat:!0,forced:o||at},{resolve:function(t){return A(o&&this===i?q:this,t)}}),s({target:P,stat:!0,forced:st},{all:function(t){var e=this,c=K(e),n=c.resolve,r=c.reject,i=k((function(){var c=z(e.resolve),i=[],a=0,s=1;b(t,(function(t){var o=a++,l=!1;i.push(void 0),s++,c.call(e,t).then((function(t){l||(l=!0,i[o]=t,--s||n(i))}),r)})),--s||n(i)}));return i.error&&r(i.value),c.promise},race:function(t){var e=this,c=K(e),n=c.reject,r=k((function(){var r=z(e.resolve);b(t,(function(t){r.call(e,t).then(c.resolve,n)}))}));return r.error&&n(r.value),c.promise}})},e71f:function(t,e,c){"use strict";var n=c("0829");c.d(e,"a",(function(){return n["a"]})),c.d(e,"b",(function(){return n["b"]})),c.d(e,"c",(function(){return n["c"]})),c.d(e,"d",(function(){return n["d"]})),c.d(e,"e",(function(){return n["e"]}))},e893:function(t,e,c){var n=c("5135"),r=c("56ef"),i=c("06cf"),a=c("9bf2");t.exports=function(t,e){for(var c=r(e),s=a.f,o=i.f,l=0;l<c.length;l++){var h=c[l];n(t,h)||s(t,h,o(e,h))}}},e8b5:function(t,e,c){var n=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},e95a:function(t,e,c){var n=c("b622"),r=c("3f8c"),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[i]===t)}},ea7b:function(t,e,c){"use strict";c.d(e,"a",(function(){return se})),c.d(e,"b",(function(){return on})),c.d(e,"c",(function(){return le})),c.d(e,"d",(function(){return oe})),c.d(e,"e",(function(){return he}));var n=c("1fd5"),r=c("5606");function i(t,e){var c={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(c[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(c[n[r]]=t[n[r]])}return c}Object.create;Object.create;var a=c("4fc1"),s=c("ffa6");function o(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=o,h=new n["b"]("auth","Firebase",o()),u=new a["b"]("@firebase/auth");function f(t,...e){u.logLevel<=a["a"].ERROR&&u.error(`Auth (${r["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,...e){throw p(t,...e)}function m(t,...e){return p(t,...e)}function d(t,e,c){const r=Object.assign(Object.assign({},l()),{[e]:c}),i=new n["b"]("auth","Firebase",r);return i.create(e,{appName:t.name})}function p(t,...e){if("string"!==typeof t){const c=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(c,...n)}return h.create(t,...e)}function z(t,e,...c){if(!t)throw p(e,...c)}function g(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function y(t,e){t||g(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=new Map;function C(t){y(t instanceof Function,"Expected a class definition");let e=M.get(t);return e?(y(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){const c=Object(r["b"])(t,"auth");if(c.isInitialized()){const t=c.getImmediate(),r=c.getOptions();if(Object(n["g"])(r,null!==e&&void 0!==e?e:{}))return t;v(t,"already-initialized")}const i=c.initialize({options:e});return i}function V(t,e){const c=(null===e||void 0===e?void 0:e.persistence)||[],n=(Array.isArray(c)?c:[c]).map(C);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function L(){return"http:"===w()||"https:"===w()}function w(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(L()||Object(n["k"])()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t,e){this.shortDelay=t,this.longDelay=e,y(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(n["p"])()||Object(n["q"])()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){y(t.emulator,"Emulator should always be set here");const{url:c}=t.emulator;return e?`${c}${e.startsWith("/")?e.slice(1):e}`:c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{static initialize(t,e,c){this.fetchImpl=t,e&&(this.headersImpl=e),c&&(this.responseImpl=c)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void g("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void g("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void g("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},I=new _(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function O(t,e,c,r,i={}){return N(t,i,()=>{let i={},a={};r&&("GET"===e?a=r:i={body:JSON.stringify(r)});const s=Object(n["t"])(Object.assign({key:t.config.apiKey},a)).slice(1),o=new(E.headers());return o.set("Content-Type","application/json"),o.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&o.set("X-Firebase-Locale",t.languageCode),E.fetch()(P(t,t.config.apiHost,c,s),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},i))})}async function N(t,e,c){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},T),e);try{const e=new j(t),n=await Promise.race([c(),e.promise]);e.clearNetworkTimeout();const i=await n.json();if("needConfirmation"in i)throw D(t,"account-exists-with-different-credential",i);if(n.ok&&!("errorMessage"in i))return i;{const e=n.ok?i.errorMessage:i.error.message,[c,a]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===c)throw D(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===c)throw D(t,"email-already-in-use",i);const s=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw d(t,s,a);v(t,s)}}catch(i){if(i instanceof n["c"])throw i;v(t,"network-request-failed")}}async function R(t,e,c,n,r={}){const i=await O(t,e,c,n,r);return"mfaPendingCredential"in i&&v(t,"multi-factor-auth-required",{serverResponse:i}),i}function P(t,e,c,n){const r=`${e}${c}?${n}`;return t.config.emulator?k(t.config,r):`${t.config.apiScheme}://${r}`}class j{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(m(this.auth,"timeout")),I.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(t,e,c){const n={appName:t.name};c.email&&(n.email=c.email),c.phoneNumber&&(n.phoneNumber=c.phoneNumber);const r=m(t,e,n);return r.customData._tokenResponse=c,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e){return O(t,"POST","/v1/accounts:delete",e)}async function F(t,e){return O(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e=!1){const c=Object(n["i"])(t),r=await c.getIdToken(e),i=B(r);z(i&&i.exp&&i.auth_time&&i.iat,c.auth,"internal-error");const a="object"===typeof i.firebase?i.firebase:void 0,s=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:i,token:r,authTime:q($(i.auth_time)),issuedAtTime:q($(i.iat)),expirationTime:q($(i.exp)),signInProvider:s||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function $(t){return 1e3*Number(t)}function B(t){const[e,c,r]=t.split(".");if(void 0===e||void 0===c||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(n["d"])(c);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",i),null}}function G(t){const e=B(t);return z(e,"internal-error"),z("undefined"!==typeof e.exp,"internal-error"),z("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,c=!1){if(c)return e;try{return await e}catch(r){throw r instanceof n["c"]&&W(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function W({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,c=t-Date.now()-3e5;return Math.max(0,c)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t){var e;const c=t.auth,n=await t.getIdToken(),r=await K(t,F(c,{idToken:n}));z(null===r||void 0===r?void 0:r.users.length,c,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?et(i.providerUserInfo):[],s=tt(t.providerData,a),o=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),h=!!o&&l,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Y(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function Q(t){const e=Object(n["i"])(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const c=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...c,...e]}function et(t){return t.map(t=>{var{providerId:e}=t,c=i(t,["providerId"]);return{providerId:e,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t,e){const c=await N(t,{},()=>{const c=Object(n["t"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=P(t,r,"/v1/token","key="+i);return E.fetch()(a,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:c})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z("undefined"!==typeof t.idToken,"internal-error"),z("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return z(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:c,refreshToken:n,expiresIn:r}=await ct(t,e);this.updateTokensAndExpiration(c,n,Number(r))}updateTokensAndExpiration(t,e,c){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(t,e){const{refreshToken:c,accessToken:n,expirationTime:r}=e,i=new nt;return c&&(z("string"===typeof c,"internal-error",{appName:t}),i.refreshToken=c),n&&(z("string"===typeof n,"internal-error",{appName:t}),i.accessToken=n),r&&(z("number"===typeof r,"internal-error",{appName:t}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){z("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class it{constructor(t){var{uid:e,auth:c,stsTokenManager:n}=t,r=i(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=c,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.metadata=new Y(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return z(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Z(this,t)}reload(){return Q(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new it(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let c=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),c=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,U(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var c,n,r,i,a,s,o,l;const h=null!==(c=e.displayName)&&void 0!==c?c:void 0,u=null!==(n=e.email)&&void 0!==n?n:void 0,f=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,v=null!==(i=e.photoURL)&&void 0!==i?i:void 0,m=null!==(a=e.tenantId)&&void 0!==a?a:void 0,d=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,p=null!==(o=e.createdAt)&&void 0!==o?o:void 0,g=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:M,isAnonymous:C,providerData:b,stsTokenManager:V}=e;z(y&&V,t,"internal-error");const H=nt.fromJSON(this.name,V);z("string"===typeof y,t,"internal-error"),rt(h,t.name),rt(u,t.name),z("boolean"===typeof M,t,"internal-error"),z("boolean"===typeof C,t,"internal-error"),rt(f,t.name),rt(v,t.name),rt(m,t.name),rt(d,t.name),rt(p,t.name),rt(g,t.name);const L=new it({uid:y,auth:t,email:u,emailVerified:M,displayName:h,isAnonymous:C,photoURL:v,phoneNumber:f,tenantId:m,stsTokenManager:H,createdAt:p,lastLoginAt:g});return b&&Array.isArray(b)&&(L.providerData=b.map(t=>Object.assign({},t))),d&&(L._redirectEventId=d),L}static async _fromIdTokenResponse(t,e,c=!1){const n=new nt;n.updateFromServerResponse(e);const r=new it({uid:e.localId,auth:t,stsTokenManager:n,isAnonymous:c});return await J(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}at.type="NONE";const st=at;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,e,c){return`firebase:${t}:${e}:${c}`}class lt{constructor(t,e,c){this.persistence=t,this.auth=e,this.userKey=c;const{config:n,name:r}=this.auth;this.fullUserKey=ot(this.userKey,n.apiKey,r),this.fullPersistenceKey=ot("persistence",n.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?it._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,c="authUser"){if(!e.length)return new lt(C(st),t,c);const n=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let r=n[0]||C(st);const i=ot(c,t.config.apiKey,t.name);let a=null;for(const l of e)try{const e=await l._get(i);if(e){const c=it._fromJSON(t,e);l!==r&&(a=c),r=l;break}}catch(o){}const s=n.filter(t=>t._shouldAllowMigration);return r._shouldAllowMigration&&s.length?(r=s[0],a&&await r._set(i,a.toJSON()),await Promise.all(e.map(async t=>{if(t!==r)try{await t._remove(i)}catch(o){}})),new lt(r,t,c)):new lt(r,t,c)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ut(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pt(e))return"Blackberry";if(zt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||vt(e))&&!e.includes("edge/"))return"Chrome";if(dt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,c=t.match(e);if(2===(null===c||void 0===c?void 0:c.length))return c[1]}return"Other"}function ut(t=Object(n["j"])()){return/firefox\//i.test(t)}function ft(t=Object(n["j"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vt(t=Object(n["j"])()){return/crios\//i.test(t)}function mt(t=Object(n["j"])()){return/iemobile/i.test(t)}function dt(t=Object(n["j"])()){return/android/i.test(t)}function pt(t=Object(n["j"])()){return/blackberry/i.test(t)}function zt(t=Object(n["j"])()){return/webos/i.test(t)}function gt(t=Object(n["j"])()){return/iphone|ipad|ipod/i.test(t)}function yt(t=Object(n["j"])()){var e;return gt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Mt(){return Object(n["n"])()&&10===document.documentMode}function Ct(t=Object(n["j"])()){return gt(t)||dt(t)||zt(t)||pt(t)||/windows phone/i.test(t)||mt(t)}function bt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e=[]){let c;switch(t){case"Browser":c=ht(Object(n["j"])());break;case"Worker":c=`${ht(Object(n["j"])())}-${t}`;break;default:c=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${c}/JsCore/${r["a"]}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wt(this),this.idTokenSubscription=new wt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=C(e)),this._initializationPromise=this.queue(async()=>{var c;this._deleted||(this.persistenceManager=await lt.create(this,t),this._deleted||((null===(c=this._popupRedirectResolver)||void 0===c?void 0:c._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let c=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===c||void 0===c?void 0:c._redirectEventId,i=await this.tryRedirectSignIn(t);n&&n!==r||!(null===i||void 0===i?void 0:i.user)||(c=i.user)}return c?c._redirectEventId?(z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===c._redirectEventId?this.directlySetCurrentUser(c):this.reloadAndSetCurrentUserOrClear(c)):this.reloadAndSetCurrentUserOrClear(c):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(c){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await J(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(n["i"])(t):null;return e&&z(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(C(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new n["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,c){return this.registerStateListener(this.authStateSubscription,t,e,c)}onIdTokenChanged(t,e,c){return this.registerStateListener(this.idTokenSubscription,t,e,c)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const c=await this.getOrInitRedirectPersistenceManager(e);return null===t?c.removeCurrentUser():c.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&C(t)||this._popupRedirectResolver;z(e,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[C(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,c;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(c=this.redirectUser)||void 0===c?void 0:c._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const c=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,c,n){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return z(i,this,"internal-error"),i.then(()=>r(this.currentUser)),"function"===typeof e?t.addObserver(e,c,n):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Lt(t){return Object(n["i"])(t)}class wt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(n["f"])(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return g("not implemented")}_getIdTokenResponse(t){return g("not implemented")}_linkToIdToken(t,e){return g("not implemented")}_getReauthenticationResolver(t){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(t,e){return O(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _t(t,e){return R(t,"POST","/v1/accounts:signInWithPassword",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kt(t,e){return R(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}async function Et(t,e){return R(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends At{constructor(t,e,c,n=null){super("password",c),this._email=t,this._password=e,this._tenantId=n}static _fromEmailAndPassword(t,e){return new Tt(t,e,"password")}static _fromEmailAndCode(t,e,c=null){return new Tt(t,e,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return _t(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kt(t,{email:this._email,oobCode:this._password});default:v(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return St(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Et(t,{idToken:e,email:this._email,oobCode:this._password});default:v(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t,e){return R(t,"POST","/v1/accounts:signInWithIdp",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="http://localhost";class Ot extends At{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ot(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):v("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:c,signInMethod:n}=e,r=i(e,["providerId","signInMethod"]);if(!c||!n)return null;const a=new Ot(c,n);return Object.assign(a,r),a}_getIdTokenResponse(t){const e=this.buildRequest();return It(t,e)}_linkToIdToken(t,e){const c=this.buildRequest();return c.idToken=e,It(t,c)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,It(t,e)}buildRequest(){const t={requestUri:xt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(n["t"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(t,e){return O(t,"POST","/v1/accounts:sendVerificationCode",x(t,e))}async function Rt(t,e){return R(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e))}async function Pt(t,e){const c=await R(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e));if(c.temporaryProof)throw D(t,"account-exists-with-different-credential",c);return c}const jt={["USER_NOT_FOUND"]:"user-not-found"};async function Dt(t,e){const c=Object.assign(Object.assign({},e),{operation:"REAUTH"});return R(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,c),jt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends At{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Ut({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ut({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Rt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Pt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Dt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:c,verificationCode:n}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:c,code:n}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:c,phoneNumber:n,temporaryProof:r}=t;return c||e||n||r?new Ut({verificationId:e,verificationCode:c,phoneNumber:n,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qt(t){const e=Object(n["u"])(Object(n["h"])(t))["link"],c=e?Object(n["u"])(Object(n["h"])(e))["deep_link_id"]:null,r=Object(n["u"])(Object(n["h"])(t))["deep_link_id"],i=r?Object(n["u"])(Object(n["h"])(r))["link"]:null;return i||r||c||e||t}class Zt{constructor(t){var e,c,r,i,a,s;const o=Object(n["u"])(Object(n["h"])(t)),l=null!==(e=o["apiKey"])&&void 0!==e?e:null,h=null!==(c=o["oobCode"])&&void 0!==c?c:null,u=Ft(null!==(r=o["mode"])&&void 0!==r?r:null);z(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=null!==(i=o["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(a=o["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(s=o["tenantId"])&&void 0!==s?s:null}static parseLink(t){const e=qt(t);try{return new Zt(e)}catch(c){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(){this.providerId=$t.PROVIDER_ID}static credential(t,e){return Tt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const c=Zt.parseLink(e);return z(c,"argument-error"),Tt._fromEmailAndCode(t,c.code,c.tenantId)}}$t.PROVIDER_ID="password",$t.EMAIL_PASSWORD_SIGN_IN_METHOD="password",$t.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Bt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Gt{constructor(){super("facebook.com")}static credential(t){return Ot._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch(e){return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt extends Gt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ot._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:c}=t;if(!e&&!c)return null;try{return Wt.credential(e,c)}catch(n){return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com",Wt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Gt{constructor(){super("github.com")}static credential(t){return Ot._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com",Xt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Gt{constructor(){super("twitter.com")}static credential(t,e){return Ot._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:c}=t;if(!e||!c)return null;try{return Yt.credential(e,c)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jt(t,e){return R(t,"POST","/v1/accounts:signUp",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.TWITTER_SIGN_IN_METHOD="twitter.com",Yt.PROVIDER_ID="twitter.com";class Qt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,c,n=!1){const r=await it._fromIdTokenResponse(t,c,n),i=te(c),a=new Qt({user:r,providerId:i,_tokenResponse:c,operationType:e});return a}static async _forOperation(t,e,c){await t._updateTokensIfNecessary(c,!0);const n=te(c);return new Qt({user:t,providerId:n,_tokenResponse:c,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends n["c"]{constructor(t,e,c,n){var r;super(e.code,e.message),this.operationType=c,this.user=n,this.name="FirebaseError",Object.setPrototypeOf(this,ee.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(r=t.tenantId)&&void 0!==r?r:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,c,n){return new ee(t,e,c,n)}}function ce(t,e,c,n){const r="reauthenticate"===e?c._getReauthenticationResolver(t):c._getIdTokenResponse(t);return r.catch(c=>{if("auth/multi-factor-auth-required"===c.code)throw ee._fromErrorAndOperation(t,c,e,n);throw c})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,e,c=!1){const n=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),c);return Qt._forOperation(t,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function re(t,e,c=!1){const{auth:n}=t,r="reauthenticate";try{const i=await K(t,ce(n,r,e,t),c);z(i.idToken,n,"internal-error");const a=B(i.idToken);z(a,n,"internal-error");const{sub:s}=a;return z(t.uid===s,n,"user-mismatch"),Qt._forOperation(t,r,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&v(n,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e,c=!1){const n="signIn",r=await ce(t,n,e),i=await Qt._fromIdTokenResponse(t,n,r);return c||await t._updateCurrentUser(i.user),i}async function ae(t,e){return ie(Lt(t),e)}async function se(t,e,c){const n=Lt(t),r=await Jt(n,{returnSecureToken:!0,email:e,password:c}),i=await Qt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function oe(t,e,c){return ae(Object(n["i"])(t),$t.credential(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,c,r){return Object(n["i"])(t).onAuthStateChanged(e,c,r)}function he(t){return Object(n["i"])(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(t,e){return O(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function fe(t,e){return O(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}new WeakMap;const ve="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ve,"1"),this.storage.removeItem(ve),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){const t=Object(n["j"])();return ft(t)||gt(t)}const pe=1e3,ze=10;class ge extends me{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=de()&&bt(),this.fallbackToPolling=Ct(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const c=this.storage.getItem(e),n=this.localCache[e];c!==n&&t(e,n,c)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,c)=>{this.notifyListeners(t,c)});const c=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(c);if(t.newValue!==n)null!==t.newValue?this.storage.setItem(c,t.newValue):this.storage.removeItem(c);else if(this.localCache[c]===t.newValue&&!e)return}const n=()=>{const t=this.storage.getItem(c);(e||this.localCache[c]!==t)&&this.notifyListeners(c,t)},r=this.storage.getItem(c);Mt()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(n,ze):n()}notifyListeners(t,e){this.localCache[t]=e;const c=this.listeners[t];if(c)for(const n of Array.from(c))n(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:c}),!0)})},pe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ge.type="LOCAL";const ye=ge;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends me{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Me.type="SESSION";const Ce=Me;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const c=new Ve(t);return this.receivers.push(c),c}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:c,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null===i||void 0===i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:c,eventType:n});const a=Array.from(i).map(async t=>t(e.origin,r)),s=await be(a);e.ports[0].postMessage({status:"done",eventId:c,eventType:n,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(t="",e=10){let c="";for(let n=0;n<e;n++)c+=Math.floor(10*Math.random());return t+c}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve.receivers=[];class Le{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,c=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,i;return new Promise((a,s)=>{const o=He("",20);n.port1.start();const l=setTimeout(()=>{s(new Error("unsupported_event"))},c);i={messageChannel:n,onMessage(t){const e=t;if(e.data.eventId===o)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(e.data.response);break;default:clearTimeout(l),clearTimeout(r),s(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:o,data:e},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return window}function Ae(t){we().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return"undefined"!==typeof we()["WorkerGlobalScope"]&&"function"===typeof we()["importScripts"]}async function _e(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function ke(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ee(){return Se()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="firebaseLocalStorageDb",Ie=1,xe="firebaseLocalStorage",Oe="fbase_key";class Ne{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Re(t,e){return t.transaction([xe],e?"readwrite":"readonly").objectStore(xe)}function Pe(){const t=indexedDB.deleteDatabase(Te);return new Ne(t).toPromise()}function je(){const t=indexedDB.open(Te,Ie);return new Promise((e,c)=>{t.addEventListener("error",()=>{c(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(xe,{keyPath:Oe})}catch(n){c(n)}}),t.addEventListener("success",async()=>{const c=t.result;c.objectStoreNames.contains(xe)?e(c):(c.close(),await Pe(),e(await je()))})})}async function De(t,e,c){const n=Re(t,!0).put({[Oe]:e,value:c});return new Ne(n).toPromise()}async function Ue(t,e){const c=Re(t,!1).get(e),n=await new Ne(c).toPromise();return void 0===n?null:n.value}function Fe(t,e){const c=Re(t,!0).delete(e);return new Ne(c).toPromise()}const qe=800,Ze=3;class $e{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await je()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(c){if(e++>Ze)throw c;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Se()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ve._getInstance(Ee()),this.receiver._subscribe("keyChanged",async(t,e)=>{const c=await this._poll();return{keyProcessed:c.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await _e(),!this.activeServiceWorker)return;this.sender=new Le(this.activeServiceWorker);const c=await this.sender._send("ping",{},800);c&&(null===(t=c[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=c[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&ke()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await je();return await De(t,ve,"1"),await Fe(t,ve),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(c=>De(c,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Ue(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Fe(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Re(t,!1).getAll();return new Ne(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],c=new Set;for(const{fbase_key:n,value:r}of t)c.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),e.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!c.has(n)&&(this.notifyListeners(n,null),e.push(n));return e}notifyListeners(t,e){this.localCache[t]=e;const c=this.listeners[t];if(c)for(const n of Array.from(c))n(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}$e.type="LOCAL";const Be=$e;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){return O(t,"POST","/v2/accounts/mfaSignIn:start",x(t,e))}function Ke(t,e){return O(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Xe(t){return new Promise((e,c)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=t=>{const e=m("internal-error");e.customData=t,c(e)},n.type="text/javascript",n.charset="UTF-8",We().appendChild(n)})}function Ye(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ye("rcb"),new _(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je="recaptcha";async function Qe(t,e,c){var n;const r=await c.verify();try{let i;if(z("string"===typeof r,t,"argument-error"),z(c.type===Je,t,"argument-error"),i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){z("enroll"===e.type,t,"internal-error");const c=await ue(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}});return c.phoneSessionInfo.sessionInfo}{z("signin"===e.type,t,"internal-error");const c=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;z(c,t,"missing-multi-factor-info");const a=await Ge(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Nt(t,{phoneNumber:i.phoneNumber,recaptchaToken:r});return e}}finally{c._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{constructor(t){this.providerId=tc.PROVIDER_ID,this.auth=Lt(t)}verifyPhoneNumber(t,e){return Qe(this.auth,t,Object(n["i"])(e))}static credential(t,e){return Ut._fromVerification(t,e)}static credentialFromResult(t){const e=t;return tc.credentialFromTaggedObject(e)}static credentialFromError(t){return tc.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:c}=t;return e&&c?Ut._fromTokenResponse(e,c):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ec(t,e){return e?C(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tc.PROVIDER_ID="phone",tc.PHONE_SIGN_IN_METHOD="phone";class cc extends At{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return It(t,this._buildIdpRequest())}_linkToIdToken(t,e){return It(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return It(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function nc(t){return ie(t.auth,new cc(t),t.bypassAuthState)}function rc(t){const{auth:e,user:c}=t;return z(c,e,"internal-error"),re(c,new cc(t),t.bypassAuthState)}async function ic(t){const{auth:e,user:c}=t;return z(c,e,"internal-error"),ne(c,new cc(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t,e,c,n,r=!1){this.auth=t,this.resolver=c,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:c,postBody:n,tenantId:r,error:i,type:a}=t;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:e,sessionId:c,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(o){this.reject(o)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return nc;case"linkViaPopup":case"linkViaRedirect":return ic;case"reauthViaPopup":case"reauthViaRedirect":return rc;default:v(this.auth,"internal-error")}}resolve(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new _(2e3,1e4);class oc extends ac{constructor(t,e,c,n,r){super(t,e,n,r),this.provider=c,this.authWindow=null,this.pollId=null,oc.currentPopupAction&&oc.currentPopupAction.cancel(),oc.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const t=He();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oc.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,c;(null===(c=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===c?void 0:c.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,sc.get())};t()}}oc.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lc="pendingRedirect",hc=new Map;class uc extends ac{constructor(t,e,c=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,c),this.eventId=null}async execute(){let t=hc.get(this.auth._key());if(!t){try{const e=await fc(this.resolver,this.auth),c=e?await super.execute():null;t=()=>Promise.resolve(c)}catch(e){t=()=>Promise.reject(e)}hc.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fc(t,e){const c=mc(e),n="true"===await vc(t)._get(c);return await vc(t)._remove(c),n}function vc(t){return C(t._redirectPersistence)}function mc(t){return ot(lc,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(t,e,c=!1){const n=Lt(t),r=ec(n,e),i=new uc(n,r,c),a=await i.execute();return a&&!c&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pc=6e5;class zc{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(t,c)&&(e=!0,this.sendToConsumer(t,c),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Mc(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var c;if(t.error&&!yc(t)){const n=(null===(c=t.error.code)||void 0===c?void 0:c.split("auth/")[1])||"internal-error";e.onError(m(this.auth,n))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const c=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&c}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=pc&&this.cachedEventUids.clear(),this.cachedEventUids.has(gc(t))}saveEventToCache(t){this.cachedEventUids.add(gc(t)),this.lastProcessedEventTime=Date.now()}}function gc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function yc({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Mc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yc(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(t,e={}){return O(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vc=/^https?/;async function Hc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cc(t);for(const n of e)try{if(Lc(n))return}catch(c){}v(t,"unauthorized-domain")}function Lc(t){const e=H(),{protocol:c,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===n?"chrome-extension:"===c&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===c&&r.hostname===n}if(!Vc.test(c))return!1;if(bc.test(t))return n===t;const r=t.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+r+"|"+r+")$","i");return i.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new _(3e4,6e4);function Ac(){const t=we().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let c=0;c<t.CP.length;c++)t.CP[c]=null}function Sc(t){return new Promise((e,c)=>{var n,r,i;function a(){Ac(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ac(),c(m(t,"network-request-failed"))},timeout:wc.get()})}if(null===(r=null===(n=we().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=we().gapi)||void 0===i?void 0:i.load)){const e=Ye("iframefcb");return we()[e]=()=>{gapi.load?a():c(m(t,"network-request-failed"))},Xe("https://apis.google.com/js/api.js?onload="+e)}a()}}).catch(t=>{throw _c=null,t})}let _c=null;function kc(t){return _c=_c||Sc(t),_c}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new _(5e3,15e3),Tc="__/auth/iframe",Ic="emulator/auth/iframe",xc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Oc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nc(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const c=e.emulator?k(e,Ic):`https://${t.config.authDomain}/${Tc}`,i={apiKey:e.apiKey,appName:t.name,v:r["a"]},a=Oc.get(t.config.apiHost);a&&(i.eid=a);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${c}?${Object(n["t"])(i).slice(1)}`}async function Rc(t){const e=await kc(t),c=we().gapi;return z(c,t,"internal-error"),e.open({where:document.body,url:Nc(t),messageHandlersFilter:c.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xc,dontclear:!0},e=>new Promise(async(c,n)=>{await e.restyle({setHideOnLeave:!1});const r=m(t,"network-request-failed"),i=we().setTimeout(()=>{n(r)},Ec.get());function a(){we().clearTimeout(i),c(e)}e.ping(a).then(a,()=>{n(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jc=500,Dc=600,Uc="_blank",Fc="http://localhost";class qc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Zc(t,e,c,r=jc,i=Dc){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Pc),{width:r.toString(),height:i.toString(),top:a,left:s}),h=Object(n["j"])().toLowerCase();c&&(o=vt(h)?Uc:c),ut(h)&&(e=e||Fc,l.scrollbars="yes");const u=Object.entries(l).reduce((t,[e,c])=>`${t}${e}=${c},`,"");if(yt(h)&&"_self"!==o)return $c(e||"",o),new qc(null);const f=window.open(e||"",o,u);z(f,t,"popup-blocked");try{f.focus()}catch(v){}return new qc(f)}function $c(t,e){const c=document.createElement("a");c.href=t,c.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),c.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="__/auth/handler",Gc="emulator/auth/handler";function Kc(t,e,c,i,a,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:c,redirectUrl:i,v:r["a"],eventId:a};if(e instanceof Bt){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Object(n["m"])(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof Gt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const n of Object.keys(l))void 0===l[n]&&delete l[n];return`${Wc(t)}?${Object(n["t"])(l).slice(1)}`}function Wc({config:t}){return t.emulator?k(t,Gc):`https://${t.authDomain}/${Bc}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="webStorageSupport";class Yc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ce,this._completeRedirectFn=dc}async _openPopup(t,e,c,n){var r;y(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const i=Kc(t,e,c,H(),n);return Zc(t,i,He())}async _openRedirect(t,e,c,n){return await this._originValidation(t),Ae(Kc(t,e,c,H(),n)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:c}=this.eventManagers[e];return t?Promise.resolve(t):(y(c,"If manager is not set, promise should be"),c)}const c=this.initAndGetManager(t);return this.eventManagers[e]={promise:c},c}async initAndGetManager(t){const e=await Rc(t),c=new zc(t);return e.register("authEvent",e=>{z(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const n=c.onEvent(e.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:c},this.iframes[t._key()]=e,c}_isIframeWebStorageSupported(t,e){const c=this.iframes[t._key()];c.send(Xc,{type:Xc},c=>{var n;const r=null===(n=null===c||void 0===c?void 0:c[0])||void 0===n?void 0:n[Xc];void 0!==r&&e(!!r),v(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Hc(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ct()||ft()||gt()}}const Jc=Yc;class Qc{constructor(t){this.factorId=t}_process(t,e,c){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,c);case"signin":return this._finalizeSignIn(t,e.credential);default:return g("unexpected MultiFactorSessionType")}}}class tn extends Qc{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new tn(t)}_finalizeEnroll(t,e,c){return fe(t,{idToken:e,displayName:c,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ke(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class en{constructor(){}static assertion(t){return tn._fromCredential(t)}}en.FACTOR_ID="phone";var cn="@firebase/auth",nn="0.18.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var c;t((null===(c=e)||void 0===c?void 0:c.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sn(t){Object(r["c"])(new s["a"]("auth",(e,{options:c})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{z(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),z(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vt(t)},a=new Ht(e,n);return V(a,c),a})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,c)=>{const n=t.getProvider("auth-internal");n.initialize()})),Object(r["c"])(new s["a"]("auth-internal",t=>{const e=Lt(t.getProvider("auth").getImmediate());return(t=>new rn(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["g"])(cn,nn,an(t))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t=Object(r["e"])()){const e=Object(r["b"])(t,"auth");return e.isInitialized()?e.getImmediate():b(t,{popupRedirectResolver:Jc,persistence:[Be,ye,Ce]})}sn("Browser")},ecee:function(t,e,c){"use strict";(function(t){
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var c=0;c<e.length;c++){var n=e[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,c){return e&&i(t.prototype,e),c&&i(t,c),t}function s(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function o(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{},n=Object.keys(c);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(c).filter((function(t){return Object.getOwnPropertyDescriptor(c,t).enumerable})))),n.forEach((function(e){s(t,e,c[e])}))}return t}function l(t,e){return f(t)||m(t,e)||p()}function h(t){return u(t)||v(t)||d()}function u(t){if(Array.isArray(t)){for(var e=0,c=new Array(t.length);e<t.length;e++)c[e]=t[e];return c}}function f(t){if(Array.isArray(t))return t}function v(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function m(t,e){var c=[],n=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)if(c.push(a.value),e&&c.length===e)break}catch(o){r=!0,i=o}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw i}}return c}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}c.d(e,"b",(function(){return oe})),c.d(e,"a",(function(){return q})),c.d(e,"e",(function(){return le})),c.d(e,"c",(function(){return ie})),c.d(e,"d",(function(){return se}));var z=function(){},g={},y={},M={mark:z,measure:z};try{"undefined"!==typeof window&&(g=window),"undefined"!==typeof document&&(y=document),"undefined"!==typeof MutationObserver&&MutationObserver,"undefined"!==typeof performance&&(M=performance)}catch(he){}var C=g.navigator||{},b=C.userAgent,V=void 0===b?"":b,H=g,L=y,w=M,A=(H.document,!!L.documentElement&&!!L.head&&"function"===typeof L.addEventListener&&"function"===typeof L.createElement),S=~V.indexOf("MSIE")||~V.indexOf("Trident/"),_="___FONT_AWESOME___",k=16,E="fa",T="svg-inline--fa",I="data-fa-i2svg",x=(function(){try{}catch(he){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),O=x.concat([11,12,13,14,15,16,17,18,19,20]),N={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",N.GROUP,N.SWAP_OPACITY,N.PRIMARY,N.SECONDARY].concat(x.map((function(t){return"".concat(t,"x")}))).concat(O.map((function(t){return"w-".concat(t)}))),H.FontAwesomeConfig||{});function P(t){var e=L.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function j(t){return""===t||"false"!==t&&("true"===t||t)}if(L&&"function"===typeof L.querySelector){var D=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];D.forEach((function(t){var e=l(t,2),c=e[0],n=e[1],r=j(P(c));void 0!==r&&null!==r&&(R[n]=r)}))}var U={familyPrefix:E,replacementClass:T,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},F=o({},U,R);F.autoReplaceSvg||(F.observeMutations=!1);var q=o({},F);H.FontAwesomeConfig=q;var Z=H||{};Z[_]||(Z[_]={}),Z[_].styles||(Z[_].styles={}),Z[_].hooks||(Z[_].hooks={}),Z[_].shims||(Z[_].shims=[]);var $=Z[_],B=[],G=function t(){L.removeEventListener("DOMContentLoaded",t),K=1,B.map((function(t){return t()}))},K=!1;A&&(K=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),K||L.addEventListener("DOMContentLoaded",G));var W,X="pending",Y="settled",J="fulfilled",Q="rejected",tt=function(){},et="undefined"!==typeof t&&"undefined"!==typeof t.process&&"function"===typeof t.process.emit,ct="undefined"===typeof setImmediate?setTimeout:setImmediate,nt=[];function rt(){for(var t=0;t<nt.length;t++)nt[t][0](nt[t][1]);nt=[],W=!1}function it(t,e){nt.push([t,e]),W||(W=!0,ct(rt,0))}function at(t,e){function c(t){lt(e,t)}function n(t){ut(e,t)}try{t(c,n)}catch(he){n(he)}}function st(t){var e=t.owner,c=e._state,n=e._data,r=t[c],i=t.then;if("function"===typeof r){c=J;try{n=r(n)}catch(he){ut(i,he)}}ot(i,n)||(c===J&&lt(i,n),c===Q&&ut(i,n))}function ot(t,e){var c;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"===typeof e||"object"===n(e))){var r=e.then;if("function"===typeof r)return r.call(e,(function(n){c||(c=!0,e===n?ht(t,n):lt(t,n))}),(function(e){c||(c=!0,ut(t,e))})),!0}}catch(he){return c||ut(t,he),!0}return!1}function lt(t,e){t!==e&&ot(t,e)||ht(t,e)}function ht(t,e){t._state===X&&(t._state=Y,t._data=e,it(vt,t))}function ut(t,e){t._state===X&&(t._state=Y,t._data=e,it(mt,t))}function ft(t){t._then=t._then.forEach(st)}function vt(t){t._state=J,ft(t)}function mt(e){e._state=Q,ft(e),!e._handled&&et&&t.process.emit("unhandledRejection",e._data,e)}function dt(e){t.process.emit("rejectionHandled",e)}function pt(t){if("function"!==typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof pt===!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],at(t,this)}pt.prototype={constructor:pt,_state:X,_then:null,_data:void 0,_handled:!1,then:function(t,e){var c={owner:this,then:new this.constructor(tt),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===Q&&et&&it(dt,this)),this._state===J||this._state===Q?it(st,c):this._then.push(c),c.then},catch:function(t){return this.then(null,t)}},pt.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new pt((function(e,c){var n=[],r=0;function i(t){return r++,function(c){n[t]=c,--r||e(n)}}for(var a,s=0;s<t.length;s++)a=t[s],a&&"function"===typeof a.then?a.then(i(s),c):n[s]=a;r||e(n)}))},pt.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new pt((function(e,c){for(var n,r=0;r<t.length;r++)n=t[r],n&&"function"===typeof n.then?n.then(e,c):e(n)}))},pt.resolve=function(t){return t&&"object"===n(t)&&t.constructor===pt?t:new pt((function(e){e(t)}))},pt.reject=function(t){return new pt((function(e,c){c(t)}))};var zt=k,gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yt(t){if(t&&A){var e=L.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var c=L.head.childNodes,n=null,r=c.length-1;r>-1;r--){var i=c[r],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=i)}return L.head.insertBefore(e,n),t}}var Mt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ct(){var t=12,e="";while(t-- >0)e+=Mt[62*Math.random()|0];return e}function bt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vt(t){return Object.keys(t||{}).reduce((function(e,c){return e+"".concat(c,'="').concat(bt(t[c]),'" ')}),"").trim()}function Ht(t){return Object.keys(t||{}).reduce((function(e,c){return e+"".concat(c,": ").concat(t[c],";")}),"")}function Lt(t){return t.size!==gt.size||t.x!==gt.x||t.y!==gt.y||t.rotate!==gt.rotate||t.flipX||t.flipY}function wt(t){var e=t.transform,c=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(c/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(i," ").concat(a," ").concat(s)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:o,path:l}}function At(t){var e=t.transform,c=t.width,n=void 0===c?k:c,r=t.height,i=void 0===r?k:r,a=t.startCentered,s=void 0!==a&&a,o="";return o+=s&&S?"translate(".concat(e.x/zt-n/2,"em, ").concat(e.y/zt-i/2,"em) "):s?"translate(calc(-50% + ".concat(e.x/zt,"em), calc(-50% + ").concat(e.y/zt,"em)) "):"translate(".concat(e.x/zt,"em, ").concat(e.y/zt,"em) "),o+="scale(".concat(e.size/zt*(e.flipX?-1:1),", ").concat(e.size/zt*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var St={x:0,y:0,width:"100%",height:"100%"};function _t(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function kt(t){return"g"===t.tag?t.children:[t]}function Et(t){var e=t.children,c=t.attributes,n=t.main,r=t.mask,i=t.maskId,a=t.transform,s=n.width,l=n.icon,h=r.width,u=r.icon,f=wt({transform:a,containerWidth:h,iconWidth:s}),v={tag:"rect",attributes:o({},St,{fill:"white"})},m=l.children?{children:l.children.map(_t)}:{},d={tag:"g",attributes:o({},f.inner),children:[_t(o({tag:l.tag,attributes:o({},l.attributes,f.path)},m))]},p={tag:"g",attributes:o({},f.outer),children:[d]},z="mask-".concat(i||Ct()),g="clip-".concat(i||Ct()),y={tag:"mask",attributes:o({},St,{id:z,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:kt(u)},y]};return e.push(M,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(z,")")},St)}),{children:e,attributes:c}}function Tt(t){var e=t.children,c=t.attributes,n=t.main,r=t.transform,i=t.styles,a=Ht(i);if(a.length>0&&(c["style"]=a),Lt(r)){var s=wt({transform:r,containerWidth:n.width,iconWidth:n.width});e.push({tag:"g",attributes:o({},s.outer),children:[{tag:"g",attributes:o({},s.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:o({},n.icon.attributes,s.path)}]}]})}else e.push(n.icon);return{children:e,attributes:c}}function It(t){var e=t.children,c=t.main,n=t.mask,r=t.attributes,i=t.styles,a=t.transform;if(Lt(a)&&c.found&&!n.found){var s=c.width,l=c.height,h={x:s/l/2,y:.5};r["style"]=Ht(o({},i,{"transform-origin":"".concat(h.x+a.x/16,"em ").concat(h.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function xt(t){var e=t.prefix,c=t.iconName,n=t.children,r=t.attributes,i=t.symbol,a=!0===i?"".concat(e,"-").concat(q.familyPrefix,"-").concat(c):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o({},r,{id:a}),children:n}]}]}function Ot(t){var e=t.icons,c=e.main,n=e.mask,r=t.prefix,i=t.iconName,a=t.transform,s=t.symbol,l=t.title,h=t.maskId,u=t.titleId,f=t.extra,v=t.watchable,m=void 0!==v&&v,d=n.found?n:c,p=d.width,z=d.height,g="fak"===r,y=g?"":"fa-w-".concat(Math.ceil(p/z*16)),M=[q.replacementClass,i?"".concat(q.familyPrefix,"-").concat(i):"",y].filter((function(t){return-1===f.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(f.classes).join(" "),C={children:[],attributes:o({},f.attributes,{"data-prefix":r,"data-icon":i,class:M,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(z)})},b=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/z*16*.0625,"em")}:{};m&&(C.attributes[I]=""),l&&C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(u||Ct())},children:[l]});var V=o({},C,{prefix:r,iconName:i,main:c,mask:n,maskId:h,transform:a,symbol:s,styles:o({},b,f.styles)}),H=n.found&&c.found?Et(V):Tt(V),L=H.children,w=H.attributes;return V.children=L,V.attributes=w,s?xt(V):It(V)}function Nt(t){var e=t.content,c=t.width,n=t.height,r=t.transform,i=t.title,a=t.extra,s=t.watchable,l=void 0!==s&&s,h=o({},a.attributes,i?{title:i}:{},{class:a.classes.join(" ")});l&&(h[I]="");var u=o({},a.styles);Lt(r)&&(u["transform"]=At({transform:r,startCentered:!0,width:c,height:n}),u["-webkit-transform"]=u["transform"]);var f=Ht(u);f.length>0&&(h["style"]=f);var v=[];return v.push({tag:"span",attributes:h,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}var Rt=function(){},Pt=(q.measurePerformance&&w&&w.mark&&w.measure,function(t,e){return function(c,n,r,i){return t.call(e,c,n,r,i)}}),jt=function(t,e,c,n){var r,i,a,s=Object.keys(t),o=s.length,l=void 0!==n?Pt(e,n):e;for(void 0===c?(r=1,a=t[s[0]]):(r=0,a=c);r<o;r++)i=s[r],a=l(a,t[i],i,t);return a};function Dt(t,e){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=c.skipHooks,r=void 0!==n&&n,i=Object.keys(e).reduce((function(t,c){var n=e[c],r=!!n.icon;return r?t[n.iconName]=n.icon:t[c]=n,t}),{});"function"!==typeof $.hooks.addPack||r?$.styles[t]=o({},$.styles[t]||{},i):$.hooks.addPack(t,i),"fas"===t&&Dt("fa",e)}var Ut=$.styles,Ft=$.shims,qt=function(){var t=function(t){return jt(Ut,(function(e,c,n){return e[n]=jt(c,t,{}),e}),{})};t((function(t,e,c){return e[3]&&(t[e[3]]=c),t})),t((function(t,e,c){var n=e[2];return t[c]=c,n.forEach((function(e){t[e]=c})),t}));var e="far"in Ut;jt(Ft,(function(t,c){var n=c[0],r=c[1],i=c[2];return"far"!==r||e||(r="fas"),t[n]={prefix:r,iconName:i},t}),{})};qt();$.styles;function Zt(t,e,c){if(t&&t[e]&&t[e][c])return{prefix:e,iconName:c,icon:t[e][c]}}function $t(t){var e=t.tag,c=t.attributes,n=void 0===c?{}:c,r=t.children,i=void 0===r?[]:r;return"string"===typeof t?bt(t):"<".concat(e," ").concat(Vt(n),">").concat(i.map($t).join(""),"</").concat(e,">")}var Bt=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,e){var c=e.toLowerCase().split("-"),n=c[0],r=c.slice(1).join("-");if(n&&"h"===r)return t.flipX=!0,t;if(n&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(n){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r;break}return t}),e):e};function Gt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}Gt.prototype=Object.create(Error.prototype),Gt.prototype.constructor=Gt;var Kt={fill:"currentColor"},Wt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Xt=(o({},Kt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),o({},Wt,{attributeName:"opacity"}));o({},Kt,{cx:"256",cy:"364",r:"28"}),o({},Wt,{attributeName:"r",values:"28;14;28;28;14;28;"}),o({},Xt,{values:"1;0;1;1;0;1;"}),o({},Kt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),o({},Xt,{values:"1;0;0;0;0;1;"}),o({},Kt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),o({},Xt,{values:"0;0;1;1;0;0;"}),$.styles;function Yt(t){var e=t[0],c=t[1],n=t.slice(4),r=l(n,1),i=r[0],a=null;return a=Array.isArray(i)?{tag:"g",attributes:{class:"".concat(q.familyPrefix,"-").concat(N.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.familyPrefix,"-").concat(N.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(q.familyPrefix,"-").concat(N.PRIMARY),fill:"currentColor",d:i[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:c,icon:a}}$.styles;var Jt='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function Qt(){var t=E,e=T,c=q.familyPrefix,n=q.replacementClass,r=Jt;if(c!==t||n!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(c,"-")).replace(a,"--".concat(c,"-")).replace(s,".".concat(n))}return r}var te=function(){function t(){r(this,t),this.definitions={}}return a(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,c=new Array(e),n=0;n<e;n++)c[n]=arguments[n];var r=c.reduce(this._pullDefinitions,{});Object.keys(r).forEach((function(e){t.definitions[e]=o({},t.definitions[e]||{},r[e]),Dt(e,r[e]),qt()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var c=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(c).map((function(e){var n=c[e],r=n.prefix,i=n.iconName,a=n.icon;t[r]||(t[r]={}),t[r][i]=a})),t}}]),t}();function ee(){q.autoAddCss&&!ae&&(yt(Qt()),ae=!0)}function ce(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return $t(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(A){var e=L.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ne(t){var e=t.prefix,c=void 0===e?"fa":e,n=t.iconName;if(n)return Zt(ie.definitions,c,n)||Zt($.styles,c,n)}function re(t){return function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(e||{}).icon?e:ne(e||{}),r=c.mask;return r&&(r=(r||{}).icon?r:ne(r||{})),t(n,o({},c,{mask:r}))}}var ie=new te,ae=!1,se={transform:function(t){return Bt(t)}},oe=re((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=e.transform,n=void 0===c?gt:c,r=e.symbol,i=void 0!==r&&r,a=e.mask,s=void 0===a?null:a,l=e.maskId,h=void 0===l?null:l,u=e.title,f=void 0===u?null:u,v=e.titleId,m=void 0===v?null:v,d=e.classes,p=void 0===d?[]:d,z=e.attributes,g=void 0===z?{}:z,y=e.styles,M=void 0===y?{}:y;if(t){var C=t.prefix,b=t.iconName,V=t.icon;return ce(o({type:"icon"},t),(function(){return ee(),q.autoA11y&&(f?g["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(m||Ct()):(g["aria-hidden"]="true",g["focusable"]="false")),Ot({icons:{main:Yt(V),mask:s?Yt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:b,transform:o({},gt,n),symbol:i,title:f,maskId:h,titleId:m,extra:{attributes:g,styles:M,classes:p}})}))}})),le=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=e.transform,n=void 0===c?gt:c,r=e.title,i=void 0===r?null:r,a=e.classes,s=void 0===a?[]:a,l=e.attributes,u=void 0===l?{}:l,f=e.styles,v=void 0===f?{}:f;return ce({type:"text",content:t},(function(){return ee(),Nt({content:t,transform:o({},gt,n),title:i,extra:{attributes:u,styles:v,classes:["".concat(q.familyPrefix,"-layers-text")].concat(h(s))}})}))}}).call(this,c("c8ba"))},f069:function(t,e,c){"use strict";var n=c("59ed"),r=function(t){var e,c;this.promise=new t((function(t,n){if(void 0!==e||void 0!==c)throw TypeError("Bad Promise constructor");e=t,c=n})),this.resolve=n(e),this.reject=n(c)};t.exports.f=function(t){return new r(t)}},f2d1:function(t,e,c){"use strict";c.d(e,"a",(function(){return n})),c.d(e,"b",(function(){return r}));
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var n={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},r={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]}},f5df:function(t,e,c){var n=c("00ee"),r=c("1626"),i=c("c6b6"),a=c("b622"),s=a("toStringTag"),o="Arguments"==i(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(c){}};t.exports=n?i:function(t){var e,c,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(c=l(e=Object(t),s))?c:o?i(e):"Object"==(n=i(e))&&r(e.callee)?"Arguments":n}},f6b4:function(t,e,c){"use strict";var n=c("c532");function r(){this.handlers=[]}r.prototype.use=function(t,e,c){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!c&&c.synchronous,runWhen:c?c.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=r},f772:function(t,e,c){var n=c("5692"),r=c("90e3"),i=n("keys");t.exports=function(t){return i[t]||(i[t]=r(t))}},fb6a:function(t,e,c){"use strict";var n=c("23e7"),r=c("e8b5"),i=c("68ee"),a=c("861d"),s=c("23cb"),o=c("50c4"),l=c("fc6a"),h=c("8418"),u=c("b622"),f=c("1dde"),v=f("slice"),m=u("species"),d=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!v},{slice:function(t,e){var c,n,u,f=l(this),v=o(f.length),z=s(t,v),g=s(void 0===e?v:e,v);if(r(f)&&(c=f.constructor,i(c)&&(c===Array||r(c.prototype))?c=void 0:a(c)&&(c=c[m],null===c&&(c=void 0)),c===Array||void 0===c))return d.call(f,z,g);for(n=new(void 0===c?Array:c)(p(g-z,0)),u=0;z<g;z++,u++)z in f&&h(n,u,f[z]);return n.length=u,n}})},fc6a:function(t,e,c){var n=c("44ad"),r=c("1d80");t.exports=function(t){return n(r(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,c){var n=c("4930");t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,c){var n=c("da84");t.exports=n.Promise},ffa6:function(t,e,c){"use strict";c.d(e,"a",(function(){return l})),c.d(e,"b",(function(){return m}));function n(t,e,c,n){function r(t){return t instanceof c?t:new c((function(e){e(t)}))}return new(c||(c=Promise))((function(c,i){function a(t){try{o(n.next(t))}catch(e){i(e)}}function s(t){try{o(n["throw"](t))}catch(e){i(e)}}function o(t){t.done?c(t.value):r(t.value).then(a,s)}o((n=n.apply(t,e||[])).next())}))}function r(t,e){var c,n,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return o([t,e])}}function o(i){if(c)throw new TypeError("Generator is already executing.");while(a)try{if(c=1,n&&(r=2&i[0]?n["return"]:i[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],n=0}finally{c=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}Object.create;function i(t){var e="function"===typeof Symbol&&Symbol.iterator,c=e&&t[e],n=0;if(c)return c.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var c="function"===typeof Symbol&&t[Symbol.iterator];if(!c)return t;var n,r,i=c.call(t),a=[];try{while((void 0===e||e-- >0)&&!(n=i.next()).done)a.push(n.value)}catch(s){r={error:s}}finally{try{n&&!n.done&&(c=i["return"])&&c.call(i)}finally{if(r)throw r.error}}return a}function s(t,e,c){if(c||2===arguments.length)for(var n,r=0,i=e.length;r<i;r++)!n&&r in e||(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return t.concat(n||Array.prototype.slice.call(e))}Object.create;var o=c("1fd5"),l=function(){function t(t,e,c){this.name=t,this.instanceFactory=e,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),h="[DEFAULT]",u=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var c=new o["a"];if(this.instancesDeferred.set(e,c),this.isInitialized(e)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:e});n&&c.resolve(n)}catch(r){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,c=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),n=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(c)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:c})}catch(r){if(n)return null;throw r}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,c;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(v(t))try{this.getOrInitializeService({instanceIdentifier:h})}catch(m){}try{for(var n=i(this.instancesDeferred.entries()),r=n.next();!r.done;r=n.next()){var s=a(r.value,2),o=s[0],l=s[1],u=this.normalizeInstanceIdentifier(o);try{var f=this.getOrInitializeService({instanceIdentifier:u});l.resolve(f)}catch(m){}}}catch(d){e={error:d}}finally{try{r&&!r.done&&(c=n.return)&&c.call(n)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=h),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(s(s([],a(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),a(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=h),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=h),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,c;void 0===t&&(t={});var n=t.options,r=void 0===n?{}:n,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:r});try{for(var l=i(this.instancesDeferred.entries()),h=l.next();!h.done;h=l.next()){var u=a(h.value,2),f=u[0],v=u[1],m=this.normalizeInstanceIdentifier(f);s===m&&v.resolve(o)}}catch(d){e={error:d}}finally{try{h&&!h.done&&(c=l.return)&&c.call(l)}finally{if(e)throw e.error}}return o},t.prototype.onInit=function(t,e){var c,n=this.normalizeInstanceIdentifier(e),r=null!==(c=this.onInitCallbacks.get(n))&&void 0!==c?c:new Set;r.add(t),this.onInitCallbacks.set(n,r);var i=this.instances.get(n);return i&&t(i,n),function(){r.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var c,n,r=this.onInitCallbacks.get(e);if(r)try{for(var a=i(r),s=a.next();!s.done;s=a.next()){var o=s.value;try{o(t,e)}catch(l){}}}catch(h){c={error:h}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(c)throw c.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,c=t.options,n=void 0===c?{}:c,r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:f(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=h),this.component?this.component.multipleInstances?t:h:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function f(t){return t===h?void 0:t}function v(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new u(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);
//# sourceMappingURL=chunk-vendors.fb1fc718.js.map