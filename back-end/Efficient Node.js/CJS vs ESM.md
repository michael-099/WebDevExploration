**CJS vs ESM**

### The Debate

* The JavaScript community has been divided for years over how to split code.
* This debate is fundamental to JavaScript app development.

### History of CJS and ESM

* JavaScript was originally designed as a scripting language for browsers.
* With Node.js, JavaScript expanded to servers, requiring a module system.
* **CommonJS (CJS)** was created for Node.js, using `<span>require()</span>` for imports.
* JavaScript later introduced **ECMAScript Modules (ESM)** with `<span>import/export</span>` in ES6.
* **Why Not Use **`<span><strong>require()</strong></span>`** in JavaScript?**
  * `<span>require()</span>` is synchronous and not ideal for browser environments where resources load asynchronously.
  * ESM was designed to work better in web environments.

### Compatibility Issues

* **ESM can import CJS** without problems.
* **CJS cannot directly import ESM** without workarounds (e.g., dynamic imports using async functions).
* **Package Publishing Challenges:**
  * If a package is ESM-only, CJS users face issues.
  * If a package is CJS-only, ESM users find it problematic, especially in browsers.
  * Using both systems in a package can result in "dual package hazard," leading to multiple versions of code running simultaneously.

### The Bundler Effect

* Bundlers (e.g., Webpack, Rollup, Babel, TypeScript) transform code.
* Even if you write ESM, your bundler may output CJS.
* To check: look at your built code.
  * If it contains `<span>require()</span>`, it is CJS.
  * If it contains `<span>import/export</span>`, it is ESM.

### Bun's Approach

* **Bun** aims to resolve CJS and ESM interoperability issues.
* It achieves this through non-standard workarounds.
* If successful, it could influence JavaScript module specifications.

### Why You Should Use ESM

* **Reduces Complexity:** Maintaining two module systems adds unnecessary complexity.
* **Future-Proofing:** All long-term support (LTS) versions of Node.js now support ESM.
* **Consistency Across Platforms:** Works in both browsers and Node.js.
* **Encouraged Adoption:** The community is shifting towards ESM as the standard.

### Conclusion

* If possible, use **ESM** to simplify JavaScript development and ensure future compatibility.
