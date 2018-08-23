# WDL versioning system
In WDL, we use a versioning system, a version of semantic versioning. Here are the rules: 
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119)
- The version name MUST be in the form MAJOR.MINOR.PATCH (e.g. v1.3.2) 
- The PATCH version SHOULD be incremented each time a new API is introduced 
- The MINOR version MUST be incremented each time an API is deprecated 
- The MAJOR version MUST be incremented each time code that has not been updated may no longer be compatible (i.e. APIs are obsoleted) 
- The PATCH version SHOULD be incremented each time a bug is fixed 
- Prereleases MUST be denoted by appending a string of ASCII characters to the version name(e.g. v1.3.2x) 
- Prereleases SHOULD be released in the backwards alphabetical order (i.e. z then y then x then w then v then u etc.) 
- MINOR version and PATCH version MUST be reset to 0 when the MAJOR version is incremented
- PATCH version MUST be reset to 0 when the MINOR version is incremented
