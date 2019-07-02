(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.trydotnet = {}));
}(this, function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.
    // run api
    var RUN_REQUEST = "run";
    var RUN_RESPONSE = "RunCompleted";
    var SERVICE_ERROR_RESPONSE = "ServiceError";
    // compile api
    var COMPILE_REQUEST = "compile";
    var COMPILE_RESPONSE = "compileCompleted";
    // theme api
    var CONFIGURE_MONACO_REQUEST = "configureMonacoEditor";
    var DEFINE_THEMES_REQUEST = "defineMonacoEditorThemes";
    var HOST_EDITOR_READY_EVENT = "HostEditorReady";
    var HOST_RUN_READY_EVENT = "HostRunReady";
    var SHOW_EDITOR_REQUEST = "showEditor";
    // workspace api
    var SET_WORKSPACE_REQUEST = "setWorkspace";
    var SET_EDITOR_CODE_REQUEST = "setSourceCode";
    var CODE_CHANGED_EVENT = "CodeModified";
    var SET_ACTIVE_BUFFER_REQUEST = "setActiveBufferId";
    // operationId api
    var CREATE_OPERATION_ID_REQUEST = "generateoperationid";
    var CREATE_OPERATION_ID_RESPONSE = "operationidgenerated";
    // region api
    var CREATE_REGIONS_FROM_SOURCEFILES_REQUEST = "generateregionfromfiles";
    var CREATE_REGIONS_FROM_SOURCEFILES_RESPONSE = "generateregionfromfilesresponse";
    // project api
    var CREATE_PROJECT_FROM_GIST_REQUEST = "createprojectfromgist";
    var CREATE_PROJECT_RESPONSE = "createprojectresponse";
    function isApiMessageOfType(message, type) {
        return message && message.type && type && message.type.toLowerCase() === type.toLowerCase();
    }
    function isApiMessageCorrelatedTo(message, requestId) {
        return message && requestId && message.requestId && message.requestId === requestId;
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isFunction(x) {
        return typeof x === 'function';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    var config = {
        Promise: undefined,
        set useDeprecatedSynchronousErrorHandling(value) {
            if (value) {
                var error = /*@__PURE__*/ new Error();
                /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
            }
            else if (_enable_super_gross_mode_that_will_cause_bad_things) {
                /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
            }
            _enable_super_gross_mode_that_will_cause_bad_things = value;
        },
        get useDeprecatedSynchronousErrorHandling() {
            return _enable_super_gross_mode_that_will_cause_bad_things;
        },
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function hostReportError(err) {
        setTimeout(function () { throw err; }, 0);
    }

    /** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
    var empty = {
        closed: true,
        next: function (value) { },
        error: function (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        },
        complete: function () { }
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isObject(x) {
        return x !== null && typeof x === 'object';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    var UnsubscriptionError = UnsubscriptionErrorImpl;

    /** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
    var Subscription = /*@__PURE__*/ (function () {
        function Subscription(unsubscribe) {
            this.closed = false;
            this._parentOrParents = null;
            this._subscriptions = null;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        Subscription.prototype.unsubscribe = function () {
            var errors;
            if (this.closed) {
                return;
            }
            var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
            this.closed = true;
            this._parentOrParents = null;
            this._subscriptions = null;
            if (_parentOrParents instanceof Subscription) {
                _parentOrParents.remove(this);
            }
            else if (_parentOrParents !== null) {
                for (var index = 0; index < _parentOrParents.length; ++index) {
                    var parent_1 = _parentOrParents[index];
                    parent_1.remove(this);
                }
            }
            if (isFunction(_unsubscribe)) {
                try {
                    _unsubscribe.call(this);
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
                }
            }
            if (isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject(sub)) {
                        try {
                            sub.unsubscribe();
                        }
                        catch (e) {
                            errors = errors || [];
                            if (e instanceof UnsubscriptionError) {
                                errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                            }
                            else {
                                errors.push(e);
                            }
                        }
                    }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        };
        Subscription.prototype.add = function (teardown) {
            var subscription = teardown;
            if (!teardown) {
                return Subscription.EMPTY;
            }
            switch (typeof teardown) {
                case 'function':
                    subscription = new Subscription(teardown);
                case 'object':
                    if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                        return subscription;
                    }
                    else if (this.closed) {
                        subscription.unsubscribe();
                        return subscription;
                    }
                    else if (!(subscription instanceof Subscription)) {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                    break;
                default: {
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
                }
            }
            var _parentOrParents = subscription._parentOrParents;
            if (_parentOrParents === null) {
                subscription._parentOrParents = this;
            }
            else if (_parentOrParents instanceof Subscription) {
                if (_parentOrParents === this) {
                    return subscription;
                }
                subscription._parentOrParents = [_parentOrParents, this];
            }
            else if (_parentOrParents.indexOf(this) === -1) {
                _parentOrParents.push(this);
            }
            else {
                return subscription;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions === null) {
                this._subscriptions = [subscription];
            }
            else {
                subscriptions.push(subscription);
            }
            return subscription;
        };
        Subscription.prototype.remove = function (subscription) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.EMPTY = (function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription()));
        return Subscription;
    }());
    function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var rxSubscriber = typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();

    /** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
    var Subscriber = /*@__PURE__*/ (function (_super) {
        __extends(Subscriber, _super);
        function Subscriber(destinationOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this.syncErrorValue = null;
            _this.syncErrorThrown = false;
            _this.syncErrorThrowable = false;
            _this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    _this.destination = empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        _this.destination = empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                            _this.destination = destinationOrNext;
                            destinationOrNext.add(_this);
                        }
                        else {
                            _this.syncErrorThrowable = true;
                            _this.destination = new SafeSubscriber(_this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    _this.syncErrorThrowable = true;
                    _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                    break;
            }
            return _this;
        }
        Subscriber.prototype[rxSubscriber] = function () { return this; };
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        Subscriber.prototype._unsubscribeAndRecycle = function () {
            var _parentOrParents = this._parentOrParents;
            this._parentOrParents = null;
            this.unsubscribe();
            this.closed = false;
            this.isStopped = false;
            this._parentOrParents = _parentOrParents;
            return this;
        };
        return Subscriber;
    }(Subscription));
    var SafeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this._parentSubscriber = _parentSubscriber;
            var next;
            var context = _this;
            if (isFunction(observerOrNext)) {
                next = observerOrNext;
            }
            else if (observerOrNext) {
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (observerOrNext !== empty) {
                    context = Object.create(observerOrNext);
                    if (isFunction(context.unsubscribe)) {
                        _this.add(context.unsubscribe.bind(context));
                    }
                    context.unsubscribe = _this.unsubscribe.bind(_this);
                }
            }
            _this._context = context;
            _this._next = next;
            _this._error = error;
            _this._complete = complete;
            return _this;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parentSubscriber = this._parentSubscriber;
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                }
                else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
                if (this._error) {
                    if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, this._error, err);
                        this.unsubscribe();
                    }
                }
                else if (!_parentSubscriber.syncErrorThrowable) {
                    this.unsubscribe();
                    if (useDeprecatedSynchronousErrorHandling) {
                        throw err;
                    }
                    hostReportError(err);
                }
                else {
                    if (useDeprecatedSynchronousErrorHandling) {
                        _parentSubscriber.syncErrorValue = err;
                        _parentSubscriber.syncErrorThrown = true;
                    }
                    else {
                        hostReportError(err);
                    }
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            var _this = this;
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._complete) {
                    var wrappedComplete = function () { return _this._complete.call(_this._context); };
                    if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(wrappedComplete);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                        this.unsubscribe();
                    }
                }
                else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                this.unsubscribe();
                if (config.useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                else {
                    hostReportError(err);
                }
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            if (!config.useDeprecatedSynchronousErrorHandling) {
                throw new Error('bad call');
            }
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                if (config.useDeprecatedSynchronousErrorHandling) {
                    parent.syncErrorValue = err;
                    parent.syncErrorThrown = true;
                    return true;
                }
                else {
                    hostReportError(err);
                    return true;
                }
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parentSubscriber = this._parentSubscriber;
            this._context = null;
            this._parentSubscriber = null;
            _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
    function canReportError(observer) {
        while (observer) {
            var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
            if (closed_1 || isStopped) {
                return false;
            }
            else if (destination && destination instanceof Subscriber) {
                observer = destination;
            }
            else {
                observer = null;
            }
        }
        return true;
    }

    /** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber]) {
                return nextOrObserver[rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber(empty);
        }
        return new Subscriber(nextOrObserver, error, complete);
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function noop() { }

    /** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
    function pipeFromArray(fns) {
        if (!fns) {
            return noop;
        }
        if (fns.length === 1) {
            return fns[0];
        }
        return function piped(input) {
            return fns.reduce(function (prev, fn) { return fn(prev); }, input);
        };
    }

    /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
    var Observable = /*@__PURE__*/ (function () {
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        Observable.prototype.lift = function (operator) {
            var observable$$1 = new Observable();
            observable$$1.source = this;
            observable$$1.operator = operator;
            return observable$$1;
        };
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber(observerOrNext, error, complete);
            if (operator) {
                sink.add(operator.call(sink, this.source));
            }
            else {
                sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                    this._subscribe(sink) :
                    this._trySubscribe(sink));
            }
            if (config.useDeprecatedSynchronousErrorHandling) {
                if (sink.syncErrorThrowable) {
                    sink.syncErrorThrowable = false;
                    if (sink.syncErrorThrown) {
                        throw sink.syncErrorValue;
                    }
                }
            }
            return sink;
        };
        Observable.prototype._trySubscribe = function (sink) {
            try {
                return this._subscribe(sink);
            }
            catch (err) {
                if (config.useDeprecatedSynchronousErrorHandling) {
                    sink.syncErrorThrown = true;
                    sink.syncErrorValue = err;
                }
                if (canReportError(sink)) {
                    sink.error(err);
                }
                else {
                    console.warn(err);
                }
            }
        };
        Observable.prototype.forEach = function (next, promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var subscription;
                subscription = _this.subscribe(function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        if (subscription) {
                            subscription.unsubscribe();
                        }
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            var source = this.source;
            return source && source.subscribe(subscriber);
        };
        Observable.prototype[observable] = function () {
            return this;
        };
        Observable.prototype.pipe = function () {
            var operations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                operations[_i] = arguments[_i];
            }
            if (operations.length === 0) {
                return this;
            }
            return pipeFromArray(operations)(this);
        };
        Observable.prototype.toPromise = function (promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var value;
                _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
            });
        };
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }());
    function getPromiseCtor(promiseCtor) {
        if (!promiseCtor) {
            promiseCtor = config.Promise || Promise;
        }
        if (!promiseCtor) {
            throw new Error('no Promise impl found');
        }
        return promiseCtor;
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

    /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
    var SubjectSubscription = /*@__PURE__*/ (function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            var _this = _super.call(this) || this;
            _this.subject = subject;
            _this.subscriber = subscriber;
            _this.closed = false;
            return _this;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription));

    /** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
    var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            return _this;
        }
        return SubjectSubscriber;
    }(Subscriber));
    var Subject = /*@__PURE__*/ (function (_super) {
        __extends(Subject, _super);
        function Subject() {
            var _this = _super.call(this) || this;
            _this.observers = [];
            _this.closed = false;
            _this.isStopped = false;
            _this.hasError = false;
            _this.thrownError = null;
            return _this;
        }
        Subject.prototype[rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
        };
        Subject.prototype._trySubscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else {
                return _super.prototype._trySubscribe.call(this, subscriber);
            }
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription.EMPTY;
            }
            else if (this.isStopped) {
                subscriber.complete();
                return Subscription.EMPTY;
            }
            else {
                this.observers.push(subscriber);
                return new SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable();
            observable.source = this;
            return observable;
        };
        Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
        };
        return Subject;
    }(Observable));
    var AnonymousSubject = /*@__PURE__*/ (function (_super) {
        __extends(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            var _this = _super.call(this) || this;
            _this.destination = destination;
            _this.source = source;
            return _this;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            }
            else {
                return Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    function refCount() {
        return function refCountOperatorFunction(source) {
            return source.lift(new RefCountOperator(source));
        };
    }
    var RefCountOperator = /*@__PURE__*/ (function () {
        function RefCountOperator(connectable) {
            this.connectable = connectable;
        }
        RefCountOperator.prototype.call = function (subscriber, source) {
            var connectable = this.connectable;
            connectable._refCount++;
            var refCounter = new RefCountSubscriber(subscriber, connectable);
            var subscription = source.subscribe(refCounter);
            if (!refCounter.closed) {
                refCounter.connection = connectable.connect();
            }
            return subscription;
        };
        return RefCountOperator;
    }());
    var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RefCountSubscriber, _super);
        function RefCountSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        RefCountSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (!connectable) {
                this.connection = null;
                return;
            }
            this.connectable = null;
            var refCount = connectable._refCount;
            if (refCount <= 0) {
                this.connection = null;
                return;
            }
            connectable._refCount = refCount - 1;
            if (refCount > 1) {
                this.connection = null;
                return;
            }
            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;
            if (sharedConnection && (!connection || sharedConnection === connection)) {
                sharedConnection.unsubscribe();
            }
        };
        return RefCountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
    var ConnectableObservable = /*@__PURE__*/ (function (_super) {
        __extends(ConnectableObservable, _super);
        function ConnectableObservable(source, subjectFactory) {
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.subjectFactory = subjectFactory;
            _this._refCount = 0;
            _this._isComplete = false;
            return _this;
        }
        ConnectableObservable.prototype._subscribe = function (subscriber) {
            return this.getSubject().subscribe(subscriber);
        };
        ConnectableObservable.prototype.getSubject = function () {
            var subject = this._subject;
            if (!subject || subject.isStopped) {
                this._subject = this.subjectFactory();
            }
            return this._subject;
        };
        ConnectableObservable.prototype.connect = function () {
            var connection = this._connection;
            if (!connection) {
                this._isComplete = false;
                connection = this._connection = new Subscription();
                connection.add(this.source
                    .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
                if (connection.closed) {
                    this._connection = null;
                    connection = Subscription.EMPTY;
                }
            }
            return connection;
        };
        ConnectableObservable.prototype.refCount = function () {
            return refCount()(this);
        };
        return ConnectableObservable;
    }(Observable));
    var connectableProto = ConnectableObservable.prototype;
    var connectableObservableDescriptor = {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
    var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ConnectableSubscriber, _super);
        function ConnectableSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        ConnectableSubscriber.prototype._error = function (err) {
            this._unsubscribe();
            _super.prototype._error.call(this, err);
        };
        ConnectableSubscriber.prototype._complete = function () {
            this.connectable._isComplete = true;
            this._unsubscribe();
            _super.prototype._complete.call(this);
        };
        ConnectableSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (connectable) {
                this.connectable = null;
                var connection = connectable._connection;
                connectable._refCount = 0;
                connectable._subject = null;
                connectable._connection = null;
                if (connection) {
                    connection.unsubscribe();
                }
            }
        };
        return ConnectableSubscriber;
    }(SubjectSubscriber));
    var RefCountSubscriber$1 = /*@__PURE__*/ (function (_super) {
        __extends(RefCountSubscriber, _super);
        function RefCountSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        RefCountSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (!connectable) {
                this.connection = null;
                return;
            }
            this.connectable = null;
            var refCount$$1 = connectable._refCount;
            if (refCount$$1 <= 0) {
                this.connection = null;
                return;
            }
            connectable._refCount = refCount$$1 - 1;
            if (refCount$$1 > 1) {
                this.connection = null;
                return;
            }
            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;
            if (sharedConnection && (!connection || sharedConnection === connection)) {
                sharedConnection.unsubscribe();
            }
        };
        return RefCountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */
    var GroupBySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(GroupBySubscriber, _super);
        function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.elementSelector = elementSelector;
            _this.durationSelector = durationSelector;
            _this.subjectSelector = subjectSelector;
            _this.groups = null;
            _this.attemptedToUnsubscribe = false;
            _this.count = 0;
            return _this;
        }
        GroupBySubscriber.prototype._next = function (value) {
            var key;
            try {
                key = this.keySelector(value);
            }
            catch (err) {
                this.error(err);
                return;
            }
            this._group(value, key);
        };
        GroupBySubscriber.prototype._group = function (value, key) {
            var groups = this.groups;
            if (!groups) {
                groups = this.groups = new Map();
            }
            var group = groups.get(key);
            var element;
            if (this.elementSelector) {
                try {
                    element = this.elementSelector(value);
                }
                catch (err) {
                    this.error(err);
                }
            }
            else {
                element = value;
            }
            if (!group) {
                group = (this.subjectSelector ? this.subjectSelector() : new Subject());
                groups.set(key, group);
                var groupedObservable = new GroupedObservable(key, group, this);
                this.destination.next(groupedObservable);
                if (this.durationSelector) {
                    var duration = void 0;
                    try {
                        duration = this.durationSelector(new GroupedObservable(key, group));
                    }
                    catch (err) {
                        this.error(err);
                        return;
                    }
                    this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
                }
            }
            if (!group.closed) {
                group.next(element);
            }
        };
        GroupBySubscriber.prototype._error = function (err) {
            var groups = this.groups;
            if (groups) {
                groups.forEach(function (group, key) {
                    group.error(err);
                });
                groups.clear();
            }
            this.destination.error(err);
        };
        GroupBySubscriber.prototype._complete = function () {
            var groups = this.groups;
            if (groups) {
                groups.forEach(function (group, key) {
                    group.complete();
                });
                groups.clear();
            }
            this.destination.complete();
        };
        GroupBySubscriber.prototype.removeGroup = function (key) {
            this.groups.delete(key);
        };
        GroupBySubscriber.prototype.unsubscribe = function () {
            if (!this.closed) {
                this.attemptedToUnsubscribe = true;
                if (this.count === 0) {
                    _super.prototype.unsubscribe.call(this);
                }
            }
        };
        return GroupBySubscriber;
    }(Subscriber));
    var GroupDurationSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(GroupDurationSubscriber, _super);
        function GroupDurationSubscriber(key, group, parent) {
            var _this = _super.call(this, group) || this;
            _this.key = key;
            _this.group = group;
            _this.parent = parent;
            return _this;
        }
        GroupDurationSubscriber.prototype._next = function (value) {
            this.complete();
        };
        GroupDurationSubscriber.prototype._unsubscribe = function () {
            var _a = this, parent = _a.parent, key = _a.key;
            this.key = this.parent = null;
            if (parent) {
                parent.removeGroup(key);
            }
        };
        return GroupDurationSubscriber;
    }(Subscriber));
    var GroupedObservable = /*@__PURE__*/ (function (_super) {
        __extends(GroupedObservable, _super);
        function GroupedObservable(key, groupSubject, refCountSubscription) {
            var _this = _super.call(this) || this;
            _this.key = key;
            _this.groupSubject = groupSubject;
            _this.refCountSubscription = refCountSubscription;
            return _this;
        }
        GroupedObservable.prototype._subscribe = function (subscriber) {
            var subscription = new Subscription();
            var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
            if (refCountSubscription && !refCountSubscription.closed) {
                subscription.add(new InnerRefCountSubscription(refCountSubscription));
            }
            subscription.add(groupSubject.subscribe(subscriber));
            return subscription;
        };
        return GroupedObservable;
    }(Observable));
    var InnerRefCountSubscription = /*@__PURE__*/ (function (_super) {
        __extends(InnerRefCountSubscription, _super);
        function InnerRefCountSubscription(parent) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            parent.count++;
            return _this;
        }
        InnerRefCountSubscription.prototype.unsubscribe = function () {
            var parent = this.parent;
            if (!parent.closed && !this.closed) {
                _super.prototype.unsubscribe.call(this);
                parent.count -= 1;
                if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                    parent.unsubscribe();
                }
            }
        };
        return InnerRefCountSubscription;
    }(Subscription));

    /** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
    var BehaviorSubject = /*@__PURE__*/ (function (_super) {
        __extends(BehaviorSubject, _super);
        function BehaviorSubject(_value) {
            var _this = _super.call(this) || this;
            _this._value = _value;
            return _this;
        }
        Object.defineProperty(BehaviorSubject.prototype, "value", {
            get: function () {
                return this.getValue();
            },
            enumerable: true,
            configurable: true
        });
        BehaviorSubject.prototype._subscribe = function (subscriber) {
            var subscription = _super.prototype._subscribe.call(this, subscriber);
            if (subscription && !subscription.closed) {
                subscriber.next(this._value);
            }
            return subscription;
        };
        BehaviorSubject.prototype.getValue = function () {
            if (this.hasError) {
                throw this.thrownError;
            }
            else if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else {
                return this._value;
            }
        };
        BehaviorSubject.prototype.next = function (value) {
            _super.prototype.next.call(this, this._value = value);
        };
        return BehaviorSubject;
    }(Subject));

    /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
    var Action = /*@__PURE__*/ (function (_super) {
        __extends(Action, _super);
        function Action(scheduler, work) {
            return _super.call(this) || this;
        }
        Action.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return this;
        };
        return Action;
    }(Subscription));

    /** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
    var AsyncAction = /*@__PURE__*/ (function (_super) {
        __extends(AsyncAction, _super);
        function AsyncAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            _this.pending = false;
            return _this;
        }
        AsyncAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (this.closed) {
                return this;
            }
            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, delay);
            }
            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
        };
        AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
        };
        AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && this.delay === delay && this.pending === false) {
                return id;
            }
            clearInterval(id);
            return undefined;
        };
        AsyncAction.prototype.execute = function (state, delay) {
            if (this.closed) {
                return new Error('executing a cancelled action');
            }
            this.pending = false;
            var error = this._execute(state, delay);
            if (error) {
                return error;
            }
            else if (this.pending === false && this.id != null) {
                this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
        };
        AsyncAction.prototype._execute = function (state, delay) {
            var errored = false;
            var errorValue = undefined;
            try {
                this.work(state);
            }
            catch (e) {
                errored = true;
                errorValue = !!e && e || new Error(e);
            }
            if (errored) {
                this.unsubscribe();
                return errorValue;
            }
        };
        AsyncAction.prototype._unsubscribe = function () {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;
            if (index !== -1) {
                actions.splice(index, 1);
            }
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
        };
        return AsyncAction;
    }(Action));

    /** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
    var QueueAction = /*@__PURE__*/ (function (_super) {
        __extends(QueueAction, _super);
        function QueueAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        QueueAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay > 0) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.delay = delay;
            this.state = state;
            this.scheduler.flush(this);
            return this;
        };
        QueueAction.prototype.execute = function (state, delay) {
            return (delay > 0 || this.closed) ?
                _super.prototype.execute.call(this, state, delay) :
                this._execute(state, delay);
        };
        QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            return scheduler.flush(this);
        };
        return QueueAction;
    }(AsyncAction));

    var Scheduler = /*@__PURE__*/ (function () {
        function Scheduler(SchedulerAction, now) {
            if (now === void 0) {
                now = Scheduler.now;
            }
            this.SchedulerAction = SchedulerAction;
            this.now = now;
        }
        Scheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) {
                delay = 0;
            }
            return new this.SchedulerAction(this, work).schedule(state, delay);
        };
        Scheduler.now = function () { return Date.now(); };
        return Scheduler;
    }());

    /** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
    var AsyncScheduler = /*@__PURE__*/ (function (_super) {
        __extends(AsyncScheduler, _super);
        function AsyncScheduler(SchedulerAction, now) {
            if (now === void 0) {
                now = Scheduler.now;
            }
            var _this = _super.call(this, SchedulerAction, function () {
                if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                    return AsyncScheduler.delegate.now();
                }
                else {
                    return now();
                }
            }) || this;
            _this.actions = [];
            _this.active = false;
            _this.scheduled = undefined;
            return _this;
        }
        AsyncScheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) {
                delay = 0;
            }
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.schedule(work, delay, state);
            }
            else {
                return _super.prototype.schedule.call(this, work, delay, state);
            }
        };
        AsyncScheduler.prototype.flush = function (action) {
            var actions = this.actions;
            if (this.active) {
                actions.push(action);
                return;
            }
            var error;
            this.active = true;
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (action = actions.shift());
            this.active = false;
            if (error) {
                while (action = actions.shift()) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AsyncScheduler;
    }(Scheduler));

    /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
    var QueueScheduler = /*@__PURE__*/ (function (_super) {
        __extends(QueueScheduler, _super);
        function QueueScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueueScheduler;
    }(AsyncScheduler));

    /** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
    var queue = /*@__PURE__*/ new QueueScheduler(QueueAction);

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
    var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
    function empty$1(scheduler) {
        return scheduler ? emptyScheduled(scheduler) : EMPTY;
    }
    function emptyScheduled(scheduler) {
        return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isScheduler(value) {
        return value && typeof value.schedule === 'function';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var subscribeToArray = function (array) {
        return function (subscriber) {
            for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        };
    };

    /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
    function scheduleArray(input, scheduler) {
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            var i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }

    /** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
    function fromArray(input, scheduler) {
        if (!scheduler) {
            return new Observable(subscribeToArray(input));
        }
        else {
            return scheduleArray(input, scheduler);
        }
    }

    /** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
    function of() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var scheduler = args[args.length - 1];
        if (isScheduler(scheduler)) {
            args.pop();
            return scheduleArray(args, scheduler);
        }
        else {
            return fromArray(args);
        }
    }

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
    function throwError(error, scheduler) {
        if (!scheduler) {
            return new Observable(function (subscriber) { return subscriber.error(error); });
        }
        else {
            return new Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
        }
    }
    function dispatch(_a) {
        var error = _a.error, subscriber = _a.subscriber;
        subscriber.error(error);
    }

    /** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
    var NotificationKind;
    /*@__PURE__*/ (function (NotificationKind) {
        NotificationKind["NEXT"] = "N";
        NotificationKind["ERROR"] = "E";
        NotificationKind["COMPLETE"] = "C";
    })(NotificationKind || (NotificationKind = {}));
    var Notification = /*@__PURE__*/ (function () {
        function Notification(kind, value, error) {
            this.kind = kind;
            this.value = value;
            this.error = error;
            this.hasValue = kind === 'N';
        }
        Notification.prototype.observe = function (observer) {
            switch (this.kind) {
                case 'N':
                    return observer.next && observer.next(this.value);
                case 'E':
                    return observer.error && observer.error(this.error);
                case 'C':
                    return observer.complete && observer.complete();
            }
        };
        Notification.prototype.do = function (next, error, complete) {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return next && next(this.value);
                case 'E':
                    return error && error(this.error);
                case 'C':
                    return complete && complete();
            }
        };
        Notification.prototype.accept = function (nextOrObserver, error, complete) {
            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
                return this.observe(nextOrObserver);
            }
            else {
                return this.do(nextOrObserver, error, complete);
            }
        };
        Notification.prototype.toObservable = function () {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return of(this.value);
                case 'E':
                    return throwError(this.error);
                case 'C':
                    return empty$1();
            }
            throw new Error('unexpected notification kind value');
        };
        Notification.createNext = function (value) {
            if (typeof value !== 'undefined') {
                return new Notification('N', value);
            }
            return Notification.undefinedValueNotification;
        };
        Notification.createError = function (err) {
            return new Notification('E', undefined, err);
        };
        Notification.createComplete = function () {
            return Notification.completeNotification;
        };
        Notification.completeNotification = new Notification('C');
        Notification.undefinedValueNotification = new Notification('N', undefined);
        return Notification;
    }());

    /** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
    var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ObserveOnSubscriber, _super);
        function ObserveOnSubscriber(destination, scheduler, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            var _this = _super.call(this, destination) || this;
            _this.scheduler = scheduler;
            _this.delay = delay;
            return _this;
        }
        ObserveOnSubscriber.dispatch = function (arg) {
            var notification = arg.notification, destination = arg.destination;
            notification.observe(destination);
            this.unsubscribe();
        };
        ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
            var destination = this.destination;
            destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
        };
        ObserveOnSubscriber.prototype._next = function (value) {
            this.scheduleMessage(Notification.createNext(value));
        };
        ObserveOnSubscriber.prototype._error = function (err) {
            this.scheduleMessage(Notification.createError(err));
            this.unsubscribe();
        };
        ObserveOnSubscriber.prototype._complete = function () {
            this.scheduleMessage(Notification.createComplete());
            this.unsubscribe();
        };
        return ObserveOnSubscriber;
    }(Subscriber));
    var ObserveOnMessage = /*@__PURE__*/ (function () {
        function ObserveOnMessage(notification, destination) {
            this.notification = notification;
            this.destination = destination;
        }
        return ObserveOnMessage;
    }());

    /** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
    var ReplaySubject = /*@__PURE__*/ (function (_super) {
        __extends(ReplaySubject, _super);
        function ReplaySubject(bufferSize, windowTime, scheduler) {
            if (bufferSize === void 0) {
                bufferSize = Number.POSITIVE_INFINITY;
            }
            if (windowTime === void 0) {
                windowTime = Number.POSITIVE_INFINITY;
            }
            var _this = _super.call(this) || this;
            _this.scheduler = scheduler;
            _this._events = [];
            _this._infiniteTimeWindow = false;
            _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
            _this._windowTime = windowTime < 1 ? 1 : windowTime;
            if (windowTime === Number.POSITIVE_INFINITY) {
                _this._infiniteTimeWindow = true;
                _this.next = _this.nextInfiniteTimeWindow;
            }
            else {
                _this.next = _this.nextTimeWindow;
            }
            return _this;
        }
        ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
            var _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
            _super.prototype.next.call(this, value);
        };
        ReplaySubject.prototype.nextTimeWindow = function (value) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
            _super.prototype.next.call(this, value);
        };
        ReplaySubject.prototype._subscribe = function (subscriber) {
            var _infiniteTimeWindow = this._infiniteTimeWindow;
            var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
            var scheduler = this.scheduler;
            var len = _events.length;
            var subscription;
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else if (this.isStopped || this.hasError) {
                subscription = Subscription.EMPTY;
            }
            else {
                this.observers.push(subscriber);
                subscription = new SubjectSubscription(this, subscriber);
            }
            if (scheduler) {
                subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
            }
            if (_infiniteTimeWindow) {
                for (var i = 0; i < len && !subscriber.closed; i++) {
                    subscriber.next(_events[i]);
                }
            }
            else {
                for (var i = 0; i < len && !subscriber.closed; i++) {
                    subscriber.next(_events[i].value);
                }
            }
            if (this.hasError) {
                subscriber.error(this.thrownError);
            }
            else if (this.isStopped) {
                subscriber.complete();
            }
            return subscription;
        };
        ReplaySubject.prototype._getNow = function () {
            return (this.scheduler || queue).now();
        };
        ReplaySubject.prototype._trimBufferThenGetEvents = function () {
            var now = this._getNow();
            var _bufferSize = this._bufferSize;
            var _windowTime = this._windowTime;
            var _events = this._events;
            var eventsCount = _events.length;
            var spliceCount = 0;
            while (spliceCount < eventsCount) {
                if ((now - _events[spliceCount].time) < _windowTime) {
                    break;
                }
                spliceCount++;
            }
            if (eventsCount > _bufferSize) {
                spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
            }
            if (spliceCount > 0) {
                _events.splice(0, spliceCount);
            }
            return _events;
        };
        return ReplaySubject;
    }(Subject));
    var ReplayEvent = /*@__PURE__*/ (function () {
        function ReplayEvent(time, value) {
            this.time = time;
            this.value = value;
        }
        return ReplayEvent;
    }());

    /** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */
    var AsyncSubject = /*@__PURE__*/ (function (_super) {
        __extends(AsyncSubject, _super);
        function AsyncSubject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = null;
            _this.hasNext = false;
            _this.hasCompleted = false;
            return _this;
        }
        AsyncSubject.prototype._subscribe = function (subscriber) {
            if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription.EMPTY;
            }
            else if (this.hasCompleted && this.hasNext) {
                subscriber.next(this.value);
                subscriber.complete();
                return Subscription.EMPTY;
            }
            return _super.prototype._subscribe.call(this, subscriber);
        };
        AsyncSubject.prototype.next = function (value) {
            if (!this.hasCompleted) {
                this.value = value;
                this.hasNext = true;
            }
        };
        AsyncSubject.prototype.error = function (error) {
            if (!this.hasCompleted) {
                _super.prototype.error.call(this, error);
            }
        };
        AsyncSubject.prototype.complete = function () {
            this.hasCompleted = true;
            if (this.hasNext) {
                _super.prototype.next.call(this, this.value);
            }
            _super.prototype.complete.call(this);
        };
        return AsyncSubject;
    }(Subject));

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var nextHandle = 1;
    var tasksByHandle = {};
    function runIfPresent(handle) {
        var cb = tasksByHandle[handle];
        if (cb) {
            cb();
        }
    }
    var Immediate = {
        setImmediate: function (cb) {
            var handle = nextHandle++;
            tasksByHandle[handle] = cb;
            Promise.resolve().then(function () { return runIfPresent(handle); });
            return handle;
        },
        clearImmediate: function (handle) {
            delete tasksByHandle[handle];
        },
    };

    /** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */
    var AsapAction = /*@__PURE__*/ (function (_super) {
        __extends(AsapAction, _super);
        function AsapAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && delay > 0) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
        };
        AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
                return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
            }
            if (scheduler.actions.length === 0) {
                Immediate.clearImmediate(id);
                scheduler.scheduled = undefined;
            }
            return undefined;
        };
        return AsapAction;
    }(AsyncAction));

    /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
    var AsapScheduler = /*@__PURE__*/ (function (_super) {
        __extends(AsapScheduler, _super);
        function AsapScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AsapScheduler.prototype.flush = function (action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (++index < count && (action = actions.shift()));
            this.active = false;
            if (error) {
                while (++index < count && (action = actions.shift())) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AsapScheduler;
    }(AsyncScheduler));

    /** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */
    var asap = /*@__PURE__*/ new AsapScheduler(AsapAction);

    /** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
    var async = /*@__PURE__*/ new AsyncScheduler(AsyncAction);

    /** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
    var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
        __extends(AnimationFrameAction, _super);
        function AnimationFrameAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && delay > 0) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
        };
        AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
                return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
            }
            if (scheduler.actions.length === 0) {
                cancelAnimationFrame(id);
                scheduler.scheduled = undefined;
            }
            return undefined;
        };
        return AnimationFrameAction;
    }(AsyncAction));

    /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
    var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
        __extends(AnimationFrameScheduler, _super);
        function AnimationFrameScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimationFrameScheduler.prototype.flush = function (action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (++index < count && (action = actions.shift()));
            this.active = false;
            if (error) {
                while (++index < count && (action = actions.shift())) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AnimationFrameScheduler;
    }(AsyncScheduler));

    /** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
    var animationFrame = /*@__PURE__*/ new AnimationFrameScheduler(AnimationFrameAction);

    /** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
    var VirtualTimeScheduler = /*@__PURE__*/ (function (_super) {
        __extends(VirtualTimeScheduler, _super);
        function VirtualTimeScheduler(SchedulerAction, maxFrames) {
            if (SchedulerAction === void 0) {
                SchedulerAction = VirtualAction;
            }
            if (maxFrames === void 0) {
                maxFrames = Number.POSITIVE_INFINITY;
            }
            var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
            _this.maxFrames = maxFrames;
            _this.frame = 0;
            _this.index = -1;
            return _this;
        }
        VirtualTimeScheduler.prototype.flush = function () {
            var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
            var error, action;
            while ((action = actions[0]) && action.delay <= maxFrames) {
                actions.shift();
                this.frame = action.delay;
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            }
            if (error) {
                while (action = actions.shift()) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        VirtualTimeScheduler.frameTimeFactor = 10;
        return VirtualTimeScheduler;
    }(AsyncScheduler));
    var VirtualAction = /*@__PURE__*/ (function (_super) {
        __extends(VirtualAction, _super);
        function VirtualAction(scheduler, work, index) {
            if (index === void 0) {
                index = scheduler.index += 1;
            }
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            _this.index = index;
            _this.active = true;
            _this.index = scheduler.index = index;
            return _this;
        }
        VirtualAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        };
        VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            this.delay = scheduler.frame + delay;
            var actions = scheduler.actions;
            actions.push(this);
            actions.sort(VirtualAction.sortActions);
            return true;
        };
        VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return undefined;
        };
        VirtualAction.prototype._execute = function (state, delay) {
            if (this.active === true) {
                return _super.prototype._execute.call(this, state, delay);
            }
        };
        VirtualAction.sortActions = function (a, b) {
            if (a.delay === b.delay) {
                if (a.index === b.index) {
                    return 0;
                }
                else if (a.index > b.index) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
            else if (a.delay > b.delay) {
                return 1;
            }
            else {
                return -1;
            }
        };
        return VirtualAction;
    }(AsyncAction));

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    var EmptyError = EmptyErrorImpl;

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var MapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MapSubscriber, _super);
        function MapSubscriber(destination, project, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.count = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        MapSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.project.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return MapSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var OuterSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(OuterSubscriber, _super);
        function OuterSubscriber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        OuterSubscriber.prototype.notifyError = function (error, innerSub) {
            this.destination.error(error);
        };
        OuterSubscriber.prototype.notifyComplete = function (innerSub) {
            this.destination.complete();
        };
        return OuterSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var InnerSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(InnerSubscriber, _super);
        function InnerSubscriber(parent, outerValue, outerIndex) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            _this.outerValue = outerValue;
            _this.outerIndex = outerIndex;
            _this.index = 0;
            return _this;
        }
        InnerSubscriber.prototype._next = function (value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
        };
        InnerSubscriber.prototype._error = function (error) {
            this.parent.notifyError(error, this);
            this.unsubscribe();
        };
        InnerSubscriber.prototype._complete = function () {
            this.parent.notifyComplete(this);
            this.unsubscribe();
        };
        return InnerSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
    var subscribeToPromise = function (promise) {
        return function (subscriber) {
            promise.then(function (value) {
                if (!subscriber.closed) {
                    subscriber.next(value);
                    subscriber.complete();
                }
            }, function (err) { return subscriber.error(err); })
                .then(null, hostReportError);
            return subscriber;
        };
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function getSymbolIterator() {
        if (typeof Symbol !== 'function' || !Symbol.iterator) {
            return '@@iterator';
        }
        return Symbol.iterator;
    }
    var iterator = /*@__PURE__*/ getSymbolIterator();

    /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
    var subscribeToIterable = function (iterable) {
        return function (subscriber) {
            var iterator$$1 = iterable[iterator]();
            do {
                var item = iterator$$1.next();
                if (item.done) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(item.value);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
            if (typeof iterator$$1.return === 'function') {
                subscriber.add(function () {
                    if (iterator$$1.return) {
                        iterator$$1.return();
                    }
                });
            }
            return subscriber;
        };
    };

    /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
    var subscribeToObservable = function (obj) {
        return function (subscriber) {
            var obs = obj[observable]();
            if (typeof obs.subscribe !== 'function') {
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
            }
            else {
                return obs.subscribe(subscriber);
            }
        };
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isPromise(value) {
        return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }

    /** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
    var subscribeTo = function (result) {
        if (!!result && typeof result[observable] === 'function') {
            return subscribeToObservable(result);
        }
        else if (isArrayLike(result)) {
            return subscribeToArray(result);
        }
        else if (isPromise(result)) {
            return subscribeToPromise(result);
        }
        else if (!!result && typeof result[iterator] === 'function') {
            return subscribeToIterable(result);
        }
        else {
            var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
            var msg = "You provided " + value + " where a stream was expected."
                + ' You can provide an Observable, Promise, Array, or Iterable.';
            throw new TypeError(msg);
        }
    };

    /** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */
    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
        if (destination === void 0) {
            destination = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        }
        if (destination.closed) {
            return undefined;
        }
        if (result instanceof Observable) {
            return result.subscribe(destination);
        }
        return subscribeTo(result)(destination);
    }

    /** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
    var NONE = {};
    var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(CombineLatestSubscriber, _super);
        function CombineLatestSubscriber(destination, resultSelector) {
            var _this = _super.call(this, destination) || this;
            _this.resultSelector = resultSelector;
            _this.active = 0;
            _this.values = [];
            _this.observables = [];
            return _this;
        }
        CombineLatestSubscriber.prototype._next = function (observable) {
            this.values.push(NONE);
            this.observables.push(observable);
        };
        CombineLatestSubscriber.prototype._complete = function () {
            var observables = this.observables;
            var len = observables.length;
            if (len === 0) {
                this.destination.complete();
            }
            else {
                this.active = len;
                this.toRespond = len;
                for (var i = 0; i < len; i++) {
                    var observable = observables[i];
                    this.add(subscribeToResult(this, observable, observable, i));
                }
            }
        };
        CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
            if ((this.active -= 1) === 0) {
                this.destination.complete();
            }
        };
        CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var values = this.values;
            var oldVal = values[outerIndex];
            var toRespond = !this.toRespond
                ? 0
                : oldVal === NONE ? --this.toRespond : this.toRespond;
            values[outerIndex] = innerValue;
            if (toRespond === 0) {
                if (this.resultSelector) {
                    this._tryResultSelector(values);
                }
                else {
                    this.destination.next(values.slice());
                }
            }
        };
        CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
            var result;
            try {
                result = this.resultSelector.apply(this, values);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return CombineLatestSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */
    function scheduleObservable(input, scheduler) {
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            sub.add(scheduler.schedule(function () {
                var observable$$1 = input[observable]();
                sub.add(observable$$1.subscribe({
                    next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                    error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                    complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                }));
            }));
            return sub;
        });
    }

    /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
    function schedulePromise(input, scheduler) {
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            sub.add(scheduler.schedule(function () {
                return input.then(function (value) {
                    sub.add(scheduler.schedule(function () {
                        subscriber.next(value);
                        sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                    }));
                }, function (err) {
                    sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
                });
            }));
            return sub;
        });
    }

    /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */
    function scheduleIterable(input, scheduler) {
        if (!input) {
            throw new Error('Iterable cannot be null');
        }
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            var iterator$$1;
            sub.add(function () {
                if (iterator$$1 && typeof iterator$$1.return === 'function') {
                    iterator$$1.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator$$1 = input[iterator]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator$$1.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }

    /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
    function isInteropObservable(input) {
        return input && typeof input[observable] === 'function';
    }

    /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
    function isIterable(input) {
        return input && typeof input[iterator] === 'function';
    }

    /** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */
    function scheduled(input, scheduler) {
        if (input != null) {
            if (isInteropObservable(input)) {
                return scheduleObservable(input, scheduler);
            }
            else if (isPromise(input)) {
                return schedulePromise(input, scheduler);
            }
            else if (isArrayLike(input)) {
                return scheduleArray(input, scheduler);
            }
            else if (isIterable(input) || typeof input === 'string') {
                return scheduleIterable(input, scheduler);
            }
        }
        throw new TypeError((input !== null && typeof input || input) + ' is not observable');
    }

    /** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */
    function from(input, scheduler) {
        if (!scheduler) {
            if (input instanceof Observable) {
                return input;
            }
            return new Observable(subscribeTo(input));
        }
        else {
            return scheduled(input, scheduler);
        }
    }

    /** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */
    var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MergeMapSubscriber, _super);
        function MergeMapSubscriber(destination, project, concurrent) {
            if (concurrent === void 0) {
                concurrent = Number.POSITIVE_INFINITY;
            }
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.concurrent = concurrent;
            _this.hasCompleted = false;
            _this.buffer = [];
            _this.active = 0;
            _this.index = 0;
            return _this;
        }
        MergeMapSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                this._tryNext(value);
            }
            else {
                this.buffer.push(value);
            }
        };
        MergeMapSubscriber.prototype._tryNext = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.active++;
            this._innerSub(result, value, index);
        };
        MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            subscribeToResult(this, ish, value, index, innerSubscriber);
        };
        MergeMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                this.destination.complete();
            }
            this.unsubscribe();
        };
        MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            this.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            }
            else if (this.active === 0 && this.hasCompleted) {
                this.destination.complete();
            }
        };
        return MergeMapSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
    function isNumeric(val) {
        return !isArray(val) && (val - parseFloat(val) + 1) >= 0;
    }

    /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */
    var NEVER = /*@__PURE__*/ new Observable(noop);

    /** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var FilterSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(FilterSubscriber, _super);
        function FilterSubscriber(destination, predicate, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.thisArg = thisArg;
            _this.count = 0;
            return _this;
        }
        FilterSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.predicate.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (result) {
                this.destination.next(value);
            }
        };
        return FilterSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var RaceSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RaceSubscriber, _super);
        function RaceSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasFirst = false;
            _this.observables = [];
            _this.subscriptions = [];
            return _this;
        }
        RaceSubscriber.prototype._next = function (observable) {
            this.observables.push(observable);
        };
        RaceSubscriber.prototype._complete = function () {
            var observables = this.observables;
            var len = observables.length;
            if (len === 0) {
                this.destination.complete();
            }
            else {
                for (var i = 0; i < len && !this.hasFirst; i++) {
                    var observable = observables[i];
                    var subscription = subscribeToResult(this, observable, observable, i);
                    if (this.subscriptions) {
                        this.subscriptions.push(subscription);
                    }
                    this.add(subscription);
                }
                this.observables = null;
            }
        };
        RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            if (!this.hasFirst) {
                this.hasFirst = true;
                for (var i = 0; i < this.subscriptions.length; i++) {
                    if (i !== outerIndex) {
                        var subscription = this.subscriptions[i];
                        subscription.unsubscribe();
                        this.remove(subscription);
                    }
                }
                this.subscriptions = null;
            }
            this.destination.next(innerValue);
        };
        return RaceSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */
    var ZipSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ZipSubscriber, _super);
        function ZipSubscriber(destination, resultSelector, values) {
            if (values === void 0) {
                values = Object.create(null);
            }
            var _this = _super.call(this, destination) || this;
            _this.iterators = [];
            _this.active = 0;
            _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
            _this.values = values;
            return _this;
        }
        ZipSubscriber.prototype._next = function (value) {
            var iterators = this.iterators;
            if (isArray(value)) {
                iterators.push(new StaticArrayIterator(value));
            }
            else if (typeof value[iterator] === 'function') {
                iterators.push(new StaticIterator(value[iterator]()));
            }
            else {
                iterators.push(new ZipBufferIterator(this.destination, this, value));
            }
        };
        ZipSubscriber.prototype._complete = function () {
            var iterators = this.iterators;
            var len = iterators.length;
            this.unsubscribe();
            if (len === 0) {
                this.destination.complete();
                return;
            }
            this.active = len;
            for (var i = 0; i < len; i++) {
                var iterator$$1 = iterators[i];
                if (iterator$$1.stillUnsubscribed) {
                    var destination = this.destination;
                    destination.add(iterator$$1.subscribe(iterator$$1, i));
                }
                else {
                    this.active--;
                }
            }
        };
        ZipSubscriber.prototype.notifyInactive = function () {
            this.active--;
            if (this.active === 0) {
                this.destination.complete();
            }
        };
        ZipSubscriber.prototype.checkIterators = function () {
            var iterators = this.iterators;
            var len = iterators.length;
            var destination = this.destination;
            for (var i = 0; i < len; i++) {
                var iterator$$1 = iterators[i];
                if (typeof iterator$$1.hasValue === 'function' && !iterator$$1.hasValue()) {
                    return;
                }
            }
            var shouldComplete = false;
            var args = [];
            for (var i = 0; i < len; i++) {
                var iterator$$1 = iterators[i];
                var result = iterator$$1.next();
                if (iterator$$1.hasCompleted()) {
                    shouldComplete = true;
                }
                if (result.done) {
                    destination.complete();
                    return;
                }
                args.push(result.value);
            }
            if (this.resultSelector) {
                this._tryresultSelector(args);
            }
            else {
                destination.next(args);
            }
            if (shouldComplete) {
                destination.complete();
            }
        };
        ZipSubscriber.prototype._tryresultSelector = function (args) {
            var result;
            try {
                result = this.resultSelector.apply(this, args);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return ZipSubscriber;
    }(Subscriber));
    var StaticIterator = /*@__PURE__*/ (function () {
        function StaticIterator(iterator$$1) {
            this.iterator = iterator$$1;
            this.nextResult = iterator$$1.next();
        }
        StaticIterator.prototype.hasValue = function () {
            return true;
        };
        StaticIterator.prototype.next = function () {
            var result = this.nextResult;
            this.nextResult = this.iterator.next();
            return result;
        };
        StaticIterator.prototype.hasCompleted = function () {
            var nextResult = this.nextResult;
            return nextResult && nextResult.done;
        };
        return StaticIterator;
    }());
    var StaticArrayIterator = /*@__PURE__*/ (function () {
        function StaticArrayIterator(array) {
            this.array = array;
            this.index = 0;
            this.length = 0;
            this.length = array.length;
        }
        StaticArrayIterator.prototype[iterator] = function () {
            return this;
        };
        StaticArrayIterator.prototype.next = function (value) {
            var i = this.index++;
            var array = this.array;
            return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
        };
        StaticArrayIterator.prototype.hasValue = function () {
            return this.array.length > this.index;
        };
        StaticArrayIterator.prototype.hasCompleted = function () {
            return this.array.length === this.index;
        };
        return StaticArrayIterator;
    }());
    var ZipBufferIterator = /*@__PURE__*/ (function (_super) {
        __extends(ZipBufferIterator, _super);
        function ZipBufferIterator(destination, parent, observable) {
            var _this = _super.call(this, destination) || this;
            _this.parent = parent;
            _this.observable = observable;
            _this.stillUnsubscribed = true;
            _this.buffer = [];
            _this.isComplete = false;
            return _this;
        }
        ZipBufferIterator.prototype[iterator] = function () {
            return this;
        };
        ZipBufferIterator.prototype.next = function () {
            var buffer = this.buffer;
            if (buffer.length === 0 && this.isComplete) {
                return { value: null, done: true };
            }
            else {
                return { value: buffer.shift(), done: false };
            }
        };
        ZipBufferIterator.prototype.hasValue = function () {
            return this.buffer.length > 0;
        };
        ZipBufferIterator.prototype.hasCompleted = function () {
            return this.buffer.length === 0 && this.isComplete;
        };
        ZipBufferIterator.prototype.notifyComplete = function () {
            if (this.buffer.length > 0) {
                this.isComplete = true;
                this.parent.notifyInactive();
            }
            else {
                this.destination.complete();
            }
        };
        ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.buffer.push(innerValue);
            this.parent.checkIterators();
        };
        ZipBufferIterator.prototype.subscribe = function (value, index) {
            return subscribeToResult(this, this.observable, this, index);
        };
        return ZipBufferIterator;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var AuditSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(AuditSubscriber, _super);
        function AuditSubscriber(destination, durationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.durationSelector = durationSelector;
            _this.hasValue = false;
            return _this;
        }
        AuditSubscriber.prototype._next = function (value) {
            this.value = value;
            this.hasValue = true;
            if (!this.throttled) {
                var duration = void 0;
                try {
                    var durationSelector = this.durationSelector;
                    duration = durationSelector(value);
                }
                catch (err) {
                    return this.destination.error(err);
                }
                var innerSubscription = subscribeToResult(this, duration);
                if (!innerSubscription || innerSubscription.closed) {
                    this.clearThrottle();
                }
                else {
                    this.add(this.throttled = innerSubscription);
                }
            }
        };
        AuditSubscriber.prototype.clearThrottle = function () {
            var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
            if (throttled) {
                this.remove(throttled);
                this.throttled = null;
                throttled.unsubscribe();
            }
            if (hasValue) {
                this.value = null;
                this.hasValue = false;
                this.destination.next(value);
            }
        };
        AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
            this.clearThrottle();
        };
        AuditSubscriber.prototype.notifyComplete = function () {
            this.clearThrottle();
        };
        return AuditSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var BufferSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferSubscriber, _super);
        function BufferSubscriber(destination, closingNotifier) {
            var _this = _super.call(this, destination) || this;
            _this.buffer = [];
            _this.add(subscribeToResult(_this, closingNotifier));
            return _this;
        }
        BufferSubscriber.prototype._next = function (value) {
            this.buffer.push(value);
        };
        BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var buffer = this.buffer;
            this.buffer = [];
            this.destination.next(buffer);
        };
        return BufferSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var BufferCountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferCountSubscriber, _super);
        function BufferCountSubscriber(destination, bufferSize) {
            var _this = _super.call(this, destination) || this;
            _this.bufferSize = bufferSize;
            _this.buffer = [];
            return _this;
        }
        BufferCountSubscriber.prototype._next = function (value) {
            var buffer = this.buffer;
            buffer.push(value);
            if (buffer.length == this.bufferSize) {
                this.destination.next(buffer);
                this.buffer = [];
            }
        };
        BufferCountSubscriber.prototype._complete = function () {
            var buffer = this.buffer;
            if (buffer.length > 0) {
                this.destination.next(buffer);
            }
            _super.prototype._complete.call(this);
        };
        return BufferCountSubscriber;
    }(Subscriber));
    var BufferSkipCountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferSkipCountSubscriber, _super);
        function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
            var _this = _super.call(this, destination) || this;
            _this.bufferSize = bufferSize;
            _this.startBufferEvery = startBufferEvery;
            _this.buffers = [];
            _this.count = 0;
            return _this;
        }
        BufferSkipCountSubscriber.prototype._next = function (value) {
            var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
            this.count++;
            if (count % startBufferEvery === 0) {
                buffers.push([]);
            }
            for (var i = buffers.length; i--;) {
                var buffer = buffers[i];
                buffer.push(value);
                if (buffer.length === bufferSize) {
                    buffers.splice(i, 1);
                    this.destination.next(buffer);
                }
            }
        };
        BufferSkipCountSubscriber.prototype._complete = function () {
            var _a = this, buffers = _a.buffers, destination = _a.destination;
            while (buffers.length > 0) {
                var buffer = buffers.shift();
                if (buffer.length > 0) {
                    destination.next(buffer);
                }
            }
            _super.prototype._complete.call(this);
        };
        return BufferSkipCountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_scheduler_async,_Subscriber,_util_isScheduler PURE_IMPORTS_END */
    var Context = /*@__PURE__*/ (function () {
        function Context() {
            this.buffer = [];
        }
        return Context;
    }());
    var BufferTimeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferTimeSubscriber, _super);
        function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.bufferTimeSpan = bufferTimeSpan;
            _this.bufferCreationInterval = bufferCreationInterval;
            _this.maxBufferSize = maxBufferSize;
            _this.scheduler = scheduler;
            _this.contexts = [];
            var context = _this.openContext();
            _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
            if (_this.timespanOnly) {
                var timeSpanOnlyState = { subscriber: _this, context: context, bufferTimeSpan: bufferTimeSpan };
                _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
            }
            else {
                var closeState = { subscriber: _this, context: context };
                var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: _this, scheduler: scheduler };
                _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
                _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
            }
            return _this;
        }
        BufferTimeSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            var len = contexts.length;
            var filledBufferContext;
            for (var i = 0; i < len; i++) {
                var context_1 = contexts[i];
                var buffer = context_1.buffer;
                buffer.push(value);
                if (buffer.length == this.maxBufferSize) {
                    filledBufferContext = context_1;
                }
            }
            if (filledBufferContext) {
                this.onBufferFull(filledBufferContext);
            }
        };
        BufferTimeSubscriber.prototype._error = function (err) {
            this.contexts.length = 0;
            _super.prototype._error.call(this, err);
        };
        BufferTimeSubscriber.prototype._complete = function () {
            var _a = this, contexts = _a.contexts, destination = _a.destination;
            while (contexts.length > 0) {
                var context_2 = contexts.shift();
                destination.next(context_2.buffer);
            }
            _super.prototype._complete.call(this);
        };
        BufferTimeSubscriber.prototype._unsubscribe = function () {
            this.contexts = null;
        };
        BufferTimeSubscriber.prototype.onBufferFull = function (context) {
            this.closeContext(context);
            var closeAction = context.closeAction;
            closeAction.unsubscribe();
            this.remove(closeAction);
            if (!this.closed && this.timespanOnly) {
                context = this.openContext();
                var bufferTimeSpan = this.bufferTimeSpan;
                var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
                this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
            }
        };
        BufferTimeSubscriber.prototype.openContext = function () {
            var context = new Context();
            this.contexts.push(context);
            return context;
        };
        BufferTimeSubscriber.prototype.closeContext = function (context) {
            this.destination.next(context.buffer);
            var contexts = this.contexts;
            var spliceIndex = contexts ? contexts.indexOf(context) : -1;
            if (spliceIndex >= 0) {
                contexts.splice(contexts.indexOf(context), 1);
            }
        };
        return BufferTimeSubscriber;
    }(Subscriber));
    function dispatchBufferTimeSpanOnly(state) {
        var subscriber = state.subscriber;
        var prevContext = state.context;
        if (prevContext) {
            subscriber.closeContext(prevContext);
        }
        if (!subscriber.closed) {
            state.context = subscriber.openContext();
            state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
        }
    }
    function dispatchBufferCreation(state) {
        var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
        var context = subscriber.openContext();
        var action = this;
        if (!subscriber.closed) {
            subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
            action.schedule(state, bufferCreationInterval);
        }
    }
    function dispatchBufferClose(arg) {
        var subscriber = arg.subscriber, context = arg.context;
        subscriber.closeContext(context);
    }

    /** PURE_IMPORTS_START tslib,_Subscription,_util_subscribeToResult,_OuterSubscriber PURE_IMPORTS_END */
    var BufferToggleSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferToggleSubscriber, _super);
        function BufferToggleSubscriber(destination, openings, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.openings = openings;
            _this.closingSelector = closingSelector;
            _this.contexts = [];
            _this.add(subscribeToResult(_this, openings));
            return _this;
        }
        BufferToggleSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].buffer.push(value);
            }
        };
        BufferToggleSubscriber.prototype._error = function (err) {
            var contexts = this.contexts;
            while (contexts.length > 0) {
                var context_1 = contexts.shift();
                context_1.subscription.unsubscribe();
                context_1.buffer = null;
                context_1.subscription = null;
            }
            this.contexts = null;
            _super.prototype._error.call(this, err);
        };
        BufferToggleSubscriber.prototype._complete = function () {
            var contexts = this.contexts;
            while (contexts.length > 0) {
                var context_2 = contexts.shift();
                this.destination.next(context_2.buffer);
                context_2.subscription.unsubscribe();
                context_2.buffer = null;
                context_2.subscription = null;
            }
            this.contexts = null;
            _super.prototype._complete.call(this);
        };
        BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
        };
        BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
            this.closeBuffer(innerSub.context);
        };
        BufferToggleSubscriber.prototype.openBuffer = function (value) {
            try {
                var closingSelector = this.closingSelector;
                var closingNotifier = closingSelector.call(this, value);
                if (closingNotifier) {
                    this.trySubscribe(closingNotifier);
                }
            }
            catch (err) {
                this._error(err);
            }
        };
        BufferToggleSubscriber.prototype.closeBuffer = function (context) {
            var contexts = this.contexts;
            if (contexts && context) {
                var buffer = context.buffer, subscription = context.subscription;
                this.destination.next(buffer);
                contexts.splice(contexts.indexOf(context), 1);
                this.remove(subscription);
                subscription.unsubscribe();
            }
        };
        BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
            var contexts = this.contexts;
            var buffer = [];
            var subscription = new Subscription();
            var context = { buffer: buffer, subscription: subscription };
            contexts.push(context);
            var innerSubscription = subscribeToResult(this, closingNotifier, context);
            if (!innerSubscription || innerSubscription.closed) {
                this.closeBuffer(context);
            }
            else {
                innerSubscription.context = context;
                this.add(innerSubscription);
                subscription.add(innerSubscription);
            }
        };
        return BufferToggleSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var BufferWhenSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferWhenSubscriber, _super);
        function BufferWhenSubscriber(destination, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.closingSelector = closingSelector;
            _this.subscribing = false;
            _this.openBuffer();
            return _this;
        }
        BufferWhenSubscriber.prototype._next = function (value) {
            this.buffer.push(value);
        };
        BufferWhenSubscriber.prototype._complete = function () {
            var buffer = this.buffer;
            if (buffer) {
                this.destination.next(buffer);
            }
            _super.prototype._complete.call(this);
        };
        BufferWhenSubscriber.prototype._unsubscribe = function () {
            this.buffer = null;
            this.subscribing = false;
        };
        BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openBuffer();
        };
        BufferWhenSubscriber.prototype.notifyComplete = function () {
            if (this.subscribing) {
                this.complete();
            }
            else {
                this.openBuffer();
            }
        };
        BufferWhenSubscriber.prototype.openBuffer = function () {
            var closingSubscription = this.closingSubscription;
            if (closingSubscription) {
                this.remove(closingSubscription);
                closingSubscription.unsubscribe();
            }
            var buffer = this.buffer;
            if (this.buffer) {
                this.destination.next(buffer);
            }
            this.buffer = [];
            var closingNotifier;
            try {
                var closingSelector = this.closingSelector;
                closingNotifier = closingSelector();
            }
            catch (err) {
                return this.error(err);
            }
            closingSubscription = new Subscription();
            this.closingSubscription = closingSubscription;
            this.add(closingSubscription);
            this.subscribing = true;
            closingSubscription.add(subscribeToResult(this, closingNotifier));
            this.subscribing = false;
        };
        return BufferWhenSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var CatchSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(CatchSubscriber, _super);
        function CatchSubscriber(destination, selector, caught) {
            var _this = _super.call(this, destination) || this;
            _this.selector = selector;
            _this.caught = caught;
            return _this;
        }
        CatchSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var result = void 0;
                try {
                    result = this.selector(err, this.caught);
                }
                catch (err2) {
                    _super.prototype.error.call(this, err2);
                    return;
                }
                this._unsubscribeAndRecycle();
                var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
                this.add(innerSubscriber);
                subscribeToResult(this, result, undefined, undefined, innerSubscriber);
            }
        };
        return CatchSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _observable_combineLatest PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_isArray,_observable_combineLatest,_observable_from PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_concat PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _concatMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var CountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(CountSubscriber, _super);
        function CountSubscriber(destination, predicate, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.count = 0;
            _this.index = 0;
            return _this;
        }
        CountSubscriber.prototype._next = function (value) {
            if (this.predicate) {
                this._tryPredicate(value);
            }
            else {
                this.count++;
            }
        };
        CountSubscriber.prototype._tryPredicate = function (value) {
            var result;
            try {
                result = this.predicate(value, this.index++, this.source);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (result) {
                this.count++;
            }
        };
        CountSubscriber.prototype._complete = function () {
            this.destination.next(this.count);
            this.destination.complete();
        };
        return CountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var DebounceSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DebounceSubscriber, _super);
        function DebounceSubscriber(destination, durationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.durationSelector = durationSelector;
            _this.hasValue = false;
            _this.durationSubscription = null;
            return _this;
        }
        DebounceSubscriber.prototype._next = function (value) {
            try {
                var result = this.durationSelector.call(this, value);
                if (result) {
                    this._tryNext(value, result);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        DebounceSubscriber.prototype._complete = function () {
            this.emitValue();
            this.destination.complete();
        };
        DebounceSubscriber.prototype._tryNext = function (value, duration) {
            var subscription = this.durationSubscription;
            this.value = value;
            this.hasValue = true;
            if (subscription) {
                subscription.unsubscribe();
                this.remove(subscription);
            }
            subscription = subscribeToResult(this, duration);
            if (subscription && !subscription.closed) {
                this.add(this.durationSubscription = subscription);
            }
        };
        DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.emitValue();
        };
        DebounceSubscriber.prototype.notifyComplete = function () {
            this.emitValue();
        };
        DebounceSubscriber.prototype.emitValue = function () {
            if (this.hasValue) {
                var value = this.value;
                var subscription = this.durationSubscription;
                if (subscription) {
                    this.durationSubscription = null;
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
                this.value = null;
                this.hasValue = false;
                _super.prototype._next.call(this, value);
            }
        };
        return DebounceSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
    function debounceTime(dueTime, scheduler) {
        if (scheduler === void 0) {
            scheduler = async;
        }
        return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
    }
    var DebounceTimeOperator = /*@__PURE__*/ (function () {
        function DebounceTimeOperator(dueTime, scheduler) {
            this.dueTime = dueTime;
            this.scheduler = scheduler;
        }
        DebounceTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
        };
        return DebounceTimeOperator;
    }());
    var DebounceTimeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DebounceTimeSubscriber, _super);
        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.dueTime = dueTime;
            _this.scheduler = scheduler;
            _this.debouncedSubscription = null;
            _this.lastValue = null;
            _this.hasValue = false;
            return _this;
        }
        DebounceTimeSubscriber.prototype._next = function (value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext$2, this.dueTime, this));
        };
        DebounceTimeSubscriber.prototype._complete = function () {
            this.debouncedNext();
            this.destination.complete();
        };
        DebounceTimeSubscriber.prototype.debouncedNext = function () {
            this.clearDebounce();
            if (this.hasValue) {
                var lastValue = this.lastValue;
                this.lastValue = null;
                this.hasValue = false;
                this.destination.next(lastValue);
            }
        };
        DebounceTimeSubscriber.prototype.clearDebounce = function () {
            var debouncedSubscription = this.debouncedSubscription;
            if (debouncedSubscription !== null) {
                this.remove(debouncedSubscription);
                debouncedSubscription.unsubscribe();
                this.debouncedSubscription = null;
            }
        };
        return DebounceTimeSubscriber;
    }(Subscriber));
    function dispatchNext$2(subscriber) {
        subscriber.debouncedNext();
    }

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var DefaultIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DefaultIfEmptySubscriber, _super);
        function DefaultIfEmptySubscriber(destination, defaultValue) {
            var _this = _super.call(this, destination) || this;
            _this.defaultValue = defaultValue;
            _this.isEmpty = true;
            return _this;
        }
        DefaultIfEmptySubscriber.prototype._next = function (value) {
            this.isEmpty = false;
            this.destination.next(value);
        };
        DefaultIfEmptySubscriber.prototype._complete = function () {
            if (this.isEmpty) {
                this.destination.next(this.defaultValue);
            }
            this.destination.complete();
        };
        return DefaultIfEmptySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isDate(value) {
        return value instanceof Date && !isNaN(+value);
    }

    /** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_Subscriber,_Notification PURE_IMPORTS_END */
    var DelaySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DelaySubscriber, _super);
        function DelaySubscriber(destination, delay, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.delay = delay;
            _this.scheduler = scheduler;
            _this.queue = [];
            _this.active = false;
            _this.errored = false;
            return _this;
        }
        DelaySubscriber.dispatch = function (state) {
            var source = state.source;
            var queue = source.queue;
            var scheduler = state.scheduler;
            var destination = state.destination;
            while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
                queue.shift().notification.observe(destination);
            }
            if (queue.length > 0) {
                var delay_1 = Math.max(0, queue[0].time - scheduler.now());
                this.schedule(state, delay_1);
            }
            else {
                this.unsubscribe();
                source.active = false;
            }
        };
        DelaySubscriber.prototype._schedule = function (scheduler) {
            this.active = true;
            var destination = this.destination;
            destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
                source: this, destination: this.destination, scheduler: scheduler
            }));
        };
        DelaySubscriber.prototype.scheduleNotification = function (notification) {
            if (this.errored === true) {
                return;
            }
            var scheduler = this.scheduler;
            var message = new DelayMessage(scheduler.now() + this.delay, notification);
            this.queue.push(message);
            if (this.active === false) {
                this._schedule(scheduler);
            }
        };
        DelaySubscriber.prototype._next = function (value) {
            this.scheduleNotification(Notification.createNext(value));
        };
        DelaySubscriber.prototype._error = function (err) {
            this.errored = true;
            this.queue = [];
            this.destination.error(err);
            this.unsubscribe();
        };
        DelaySubscriber.prototype._complete = function () {
            this.scheduleNotification(Notification.createComplete());
            this.unsubscribe();
        };
        return DelaySubscriber;
    }(Subscriber));
    var DelayMessage = /*@__PURE__*/ (function () {
        function DelayMessage(time, notification) {
            this.time = time;
            this.notification = notification;
        }
        return DelayMessage;
    }());

    /** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var DelayWhenSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DelayWhenSubscriber, _super);
        function DelayWhenSubscriber(destination, delayDurationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.delayDurationSelector = delayDurationSelector;
            _this.completed = false;
            _this.delayNotifierSubscriptions = [];
            _this.index = 0;
            return _this;
        }
        DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(outerValue);
            this.removeSubscription(innerSub);
            this.tryComplete();
        };
        DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
            var value = this.removeSubscription(innerSub);
            if (value) {
                this.destination.next(value);
            }
            this.tryComplete();
        };
        DelayWhenSubscriber.prototype._next = function (value) {
            var index = this.index++;
            try {
                var delayNotifier = this.delayDurationSelector(value, index);
                if (delayNotifier) {
                    this.tryDelay(delayNotifier, value);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        DelayWhenSubscriber.prototype._complete = function () {
            this.completed = true;
            this.tryComplete();
            this.unsubscribe();
        };
        DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
            subscription.unsubscribe();
            var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
            if (subscriptionIdx !== -1) {
                this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
            }
            return subscription.outerValue;
        };
        DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
            var notifierSubscription = subscribeToResult(this, delayNotifier, value);
            if (notifierSubscription && !notifierSubscription.closed) {
                var destination = this.destination;
                destination.add(notifierSubscription);
                this.delayNotifierSubscriptions.push(notifierSubscription);
            }
        };
        DelayWhenSubscriber.prototype.tryComplete = function () {
            if (this.completed && this.delayNotifierSubscriptions.length === 0) {
                this.destination.complete();
            }
        };
        return DelayWhenSubscriber;
    }(OuterSubscriber));
    var SubscriptionDelayObservable = /*@__PURE__*/ (function (_super) {
        __extends(SubscriptionDelayObservable, _super);
        function SubscriptionDelayObservable(source, subscriptionDelay) {
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.subscriptionDelay = subscriptionDelay;
            return _this;
        }
        SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
            this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
        };
        return SubscriptionDelayObservable;
    }(Observable));
    var SubscriptionDelaySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SubscriptionDelaySubscriber, _super);
        function SubscriptionDelaySubscriber(parent, source) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            _this.source = source;
            _this.sourceSubscribed = false;
            return _this;
        }
        SubscriptionDelaySubscriber.prototype._next = function (unused) {
            this.subscribeToSource();
        };
        SubscriptionDelaySubscriber.prototype._error = function (err) {
            this.unsubscribe();
            this.parent.error(err);
        };
        SubscriptionDelaySubscriber.prototype._complete = function () {
            this.unsubscribe();
            this.subscribeToSource();
        };
        SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
            if (!this.sourceSubscribed) {
                this.sourceSubscribed = true;
                this.unsubscribe();
                this.source.subscribe(this.parent);
            }
        };
        return SubscriptionDelaySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var DeMaterializeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DeMaterializeSubscriber, _super);
        function DeMaterializeSubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        DeMaterializeSubscriber.prototype._next = function (value) {
            value.observe(this.destination);
        };
        return DeMaterializeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var DistinctSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DistinctSubscriber, _super);
        function DistinctSubscriber(destination, keySelector, flushes) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.values = new Set();
            if (flushes) {
                _this.add(subscribeToResult(_this, flushes));
            }
            return _this;
        }
        DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values.clear();
        };
        DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        DistinctSubscriber.prototype._next = function (value) {
            if (this.keySelector) {
                this._useKeySelector(value);
            }
            else {
                this._finalizeNext(value, value);
            }
        };
        DistinctSubscriber.prototype._useKeySelector = function (value) {
            var key;
            var destination = this.destination;
            try {
                key = this.keySelector(value);
            }
            catch (err) {
                destination.error(err);
                return;
            }
            this._finalizeNext(key, value);
        };
        DistinctSubscriber.prototype._finalizeNext = function (key, value) {
            var values = this.values;
            if (!values.has(key)) {
                values.add(key);
                this.destination.next(value);
            }
        };
        return DistinctSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var DistinctUntilChangedSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DistinctUntilChangedSubscriber, _super);
        function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.hasKey = false;
            if (typeof compare === 'function') {
                _this.compare = compare;
            }
            return _this;
        }
        DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
            return x === y;
        };
        DistinctUntilChangedSubscriber.prototype._next = function (value) {
            var key;
            try {
                var keySelector = this.keySelector;
                key = keySelector ? keySelector(value) : value;
            }
            catch (err) {
                return this.destination.error(err);
            }
            var result = false;
            if (this.hasKey) {
                try {
                    var compare = this.compare;
                    result = compare(this.key, key);
                }
                catch (err) {
                    return this.destination.error(err);
                }
            }
            else {
                this.hasKey = true;
            }
            if (!result) {
                this.key = key;
                this.destination.next(value);
            }
        };
        return DistinctUntilChangedSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _distinctUntilChanged PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_util_EmptyError,_Subscriber PURE_IMPORTS_END */
    var ThrowIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ThrowIfEmptySubscriber, _super);
        function ThrowIfEmptySubscriber(destination, errorFactory) {
            var _this = _super.call(this, destination) || this;
            _this.errorFactory = errorFactory;
            _this.hasValue = false;
            return _this;
        }
        ThrowIfEmptySubscriber.prototype._next = function (value) {
            this.hasValue = true;
            this.destination.next(value);
        };
        ThrowIfEmptySubscriber.prototype._complete = function () {
            if (!this.hasValue) {
                var err = void 0;
                try {
                    err = this.errorFactory();
                }
                catch (e) {
                    err = e;
                }
                this.destination.error(err);
            }
            else {
                return this.destination.complete();
            }
        };
        return ThrowIfEmptySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
    var TakeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TakeSubscriber, _super);
        function TakeSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.count = 0;
            return _this;
        }
        TakeSubscriber.prototype._next = function (value) {
            var total = this.total;
            var count = ++this.count;
            if (count <= total) {
                this.destination.next(value);
                if (count === total) {
                    this.destination.complete();
                    this.unsubscribe();
                }
            }
        };
        return TakeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _util_ArgumentOutOfRangeError,_filter,_throwIfEmpty,_defaultIfEmpty,_take PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_concat,_observable_of PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var EverySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(EverySubscriber, _super);
        function EverySubscriber(destination, predicate, thisArg, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.thisArg = thisArg;
            _this.source = source;
            _this.index = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
            this.destination.next(everyValueMatch);
            this.destination.complete();
        };
        EverySubscriber.prototype._next = function (value) {
            var result = false;
            try {
                result = this.predicate.call(this.thisArg, value, this.index++, this.source);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (!result) {
                this.notifyComplete(false);
            }
        };
        EverySubscriber.prototype._complete = function () {
            this.notifyComplete(true);
        };
        return EverySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var SwitchFirstSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SwitchFirstSubscriber, _super);
        function SwitchFirstSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasCompleted = false;
            _this.hasSubscription = false;
            return _this;
        }
        SwitchFirstSubscriber.prototype._next = function (value) {
            if (!this.hasSubscription) {
                this.hasSubscription = true;
                this.add(subscribeToResult(this, value));
            }
        };
        SwitchFirstSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (!this.hasSubscription) {
                this.destination.complete();
            }
        };
        SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
            this.remove(innerSub);
            this.hasSubscription = false;
            if (this.hasCompleted) {
                this.destination.complete();
            }
        };
        return SwitchFirstSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */
    var ExhaustMapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ExhaustMapSubscriber, _super);
        function ExhaustMapSubscriber(destination, project) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.hasSubscription = false;
            _this.hasCompleted = false;
            _this.index = 0;
            return _this;
        }
        ExhaustMapSubscriber.prototype._next = function (value) {
            if (!this.hasSubscription) {
                this.tryNext(value);
            }
        };
        ExhaustMapSubscriber.prototype.tryNext = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.hasSubscription = true;
            this._innerSub(result, value, index);
        };
        ExhaustMapSubscriber.prototype._innerSub = function (result, value, index) {
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            subscribeToResult(this, result, value, index, innerSubscriber);
        };
        ExhaustMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (!this.hasSubscription) {
                this.destination.complete();
            }
            this.unsubscribe();
        };
        ExhaustMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        ExhaustMapSubscriber.prototype.notifyError = function (err) {
            this.destination.error(err);
        };
        ExhaustMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var destination = this.destination;
            destination.remove(innerSub);
            this.hasSubscription = false;
            if (this.hasCompleted) {
                this.destination.complete();
            }
        };
        return ExhaustMapSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var ExpandSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ExpandSubscriber, _super);
        function ExpandSubscriber(destination, project, concurrent, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.concurrent = concurrent;
            _this.scheduler = scheduler;
            _this.index = 0;
            _this.active = 0;
            _this.hasCompleted = false;
            if (concurrent < Number.POSITIVE_INFINITY) {
                _this.buffer = [];
            }
            return _this;
        }
        ExpandSubscriber.dispatch = function (arg) {
            var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
            subscriber.subscribeToProjection(result, value, index);
        };
        ExpandSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            if (destination.closed) {
                this._complete();
                return;
            }
            var index = this.index++;
            if (this.active < this.concurrent) {
                destination.next(value);
                try {
                    var project = this.project;
                    var result = project(value, index);
                    if (!this.scheduler) {
                        this.subscribeToProjection(result, value, index);
                    }
                    else {
                        var state = { subscriber: this, result: result, value: value, index: index };
                        var destination_1 = this.destination;
                        destination_1.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                    }
                }
                catch (e) {
                    destination.error(e);
                }
            }
            else {
                this.buffer.push(value);
            }
        };
        ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
            this.active++;
            var destination = this.destination;
            destination.add(subscribeToResult(this, result, value, index));
        };
        ExpandSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.hasCompleted && this.active === 0) {
                this.destination.complete();
            }
            this.unsubscribe();
        };
        ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this._next(innerValue);
        };
        ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            var destination = this.destination;
            destination.remove(innerSub);
            this.active--;
            if (buffer && buffer.length > 0) {
                this._next(buffer.shift());
            }
            if (this.hasCompleted && this.active === 0) {
                this.destination.complete();
            }
        };
        return ExpandSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */
    var FinallySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(FinallySubscriber, _super);
        function FinallySubscriber(destination, callback) {
            var _this = _super.call(this, destination) || this;
            _this.add(new Subscription(callback));
            return _this;
        }
        return FinallySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var FindValueSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(FindValueSubscriber, _super);
        function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.yieldIndex = yieldIndex;
            _this.thisArg = thisArg;
            _this.index = 0;
            return _this;
        }
        FindValueSubscriber.prototype.notifyComplete = function (value) {
            var destination = this.destination;
            destination.next(value);
            destination.complete();
            this.unsubscribe();
        };
        FindValueSubscriber.prototype._next = function (value) {
            var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
            var index = this.index++;
            try {
                var result = predicate.call(thisArg || this, value, index, this.source);
                if (result) {
                    this.notifyComplete(this.yieldIndex ? index : value);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        FindValueSubscriber.prototype._complete = function () {
            this.notifyComplete(this.yieldIndex ? -1 : undefined);
        };
        return FindValueSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _operators_find PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var IgnoreElementsSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(IgnoreElementsSubscriber, _super);
        function IgnoreElementsSubscriber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IgnoreElementsSubscriber.prototype._next = function (unused) {
        };
        return IgnoreElementsSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var IsEmptySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(IsEmptySubscriber, _super);
        function IsEmptySubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
            var destination = this.destination;
            destination.next(isEmpty);
            destination.complete();
        };
        IsEmptySubscriber.prototype._next = function (value) {
            this.notifyComplete(false);
        };
        IsEmptySubscriber.prototype._complete = function () {
            this.notifyComplete(true);
        };
        return IsEmptySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
    var TakeLastSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TakeLastSubscriber, _super);
        function TakeLastSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.ring = new Array();
            _this.count = 0;
            return _this;
        }
        TakeLastSubscriber.prototype._next = function (value) {
            var ring = this.ring;
            var total = this.total;
            var count = this.count++;
            if (ring.length < total) {
                ring.push(value);
            }
            else {
                var index = count % total;
                ring[index] = value;
            }
        };
        TakeLastSubscriber.prototype._complete = function () {
            var destination = this.destination;
            var count = this.count;
            if (count > 0) {
                var total = this.count >= this.total ? this.total : this.count;
                var ring = this.ring;
                for (var i = 0; i < total; i++) {
                    var idx = (count++) % total;
                    destination.next(ring[idx]);
                }
            }
            destination.complete();
        };
        return TakeLastSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var MapToSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MapToSubscriber, _super);
        function MapToSubscriber(destination, value) {
            var _this = _super.call(this, destination) || this;
            _this.value = value;
            return _this;
        }
        MapToSubscriber.prototype._next = function (x) {
            this.destination.next(this.value);
        };
        return MapToSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
    var MaterializeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MaterializeSubscriber, _super);
        function MaterializeSubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        MaterializeSubscriber.prototype._next = function (value) {
            this.destination.next(Notification.createNext(value));
        };
        MaterializeSubscriber.prototype._error = function (err) {
            var destination = this.destination;
            destination.next(Notification.createError(err));
            destination.complete();
        };
        MaterializeSubscriber.prototype._complete = function () {
            var destination = this.destination;
            destination.next(Notification.createComplete());
            destination.complete();
        };
        return MaterializeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var ScanSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ScanSubscriber, _super);
        function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
            var _this = _super.call(this, destination) || this;
            _this.accumulator = accumulator;
            _this._seed = _seed;
            _this.hasSeed = hasSeed;
            _this.index = 0;
            return _this;
        }
        Object.defineProperty(ScanSubscriber.prototype, "seed", {
            get: function () {
                return this._seed;
            },
            set: function (value) {
                this.hasSeed = true;
                this._seed = value;
            },
            enumerable: true,
            configurable: true
        });
        ScanSubscriber.prototype._next = function (value) {
            if (!this.hasSeed) {
                this.seed = value;
                this.destination.next(value);
            }
            else {
                return this._tryNext(value);
            }
        };
        ScanSubscriber.prototype._tryNext = function (value) {
            var index = this.index++;
            var result;
            try {
                result = this.accumulator(this.seed, value, index);
            }
            catch (err) {
                this.destination.error(err);
            }
            this.seed = result;
            this.destination.next(result);
        };
        return ScanSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _scan,_takeLast,_defaultIfEmpty,_util_pipe PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_merge PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber PURE_IMPORTS_END */
    var MergeScanSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MergeScanSubscriber, _super);
        function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
            var _this = _super.call(this, destination) || this;
            _this.accumulator = accumulator;
            _this.acc = acc;
            _this.concurrent = concurrent;
            _this.hasValue = false;
            _this.hasCompleted = false;
            _this.buffer = [];
            _this.active = 0;
            _this.index = 0;
            return _this;
        }
        MergeScanSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                var index = this.index++;
                var destination = this.destination;
                var ish = void 0;
                try {
                    var accumulator = this.accumulator;
                    ish = accumulator(this.acc, value, index);
                }
                catch (e) {
                    return destination.error(e);
                }
                this.active++;
                this._innerSub(ish, value, index);
            }
            else {
                this.buffer.push(value);
            }
        };
        MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            subscribeToResult(this, ish, value, index, innerSubscriber);
        };
        MergeScanSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                if (this.hasValue === false) {
                    this.destination.next(this.acc);
                }
                this.destination.complete();
            }
            this.unsubscribe();
        };
        MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var destination = this.destination;
            this.acc = innerValue;
            this.hasValue = true;
            destination.next(innerValue);
        };
        MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            var destination = this.destination;
            destination.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            }
            else if (this.active === 0 && this.hasCompleted) {
                if (this.hasValue === false) {
                    this.destination.next(this.acc);
                }
                this.destination.complete();
            }
        };
        return MergeScanSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_observable_from,_util_isArray,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var OnErrorResumeNextSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(OnErrorResumeNextSubscriber, _super);
        function OnErrorResumeNextSubscriber(destination, nextSources) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.nextSources = nextSources;
            return _this;
        }
        OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
            this.subscribeToNextSource();
        };
        OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
            this.subscribeToNextSource();
        };
        OnErrorResumeNextSubscriber.prototype._error = function (err) {
            this.subscribeToNextSource();
            this.unsubscribe();
        };
        OnErrorResumeNextSubscriber.prototype._complete = function () {
            this.subscribeToNextSource();
            this.unsubscribe();
        };
        OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
            var next = this.nextSources.shift();
            if (!!next) {
                var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
                var destination = this.destination;
                destination.add(innerSubscriber);
                subscribeToResult(this, next, undefined, undefined, innerSubscriber);
            }
            else {
                this.destination.complete();
            }
        };
        return OnErrorResumeNextSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var PairwiseSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(PairwiseSubscriber, _super);
        function PairwiseSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasPrev = false;
            return _this;
        }
        PairwiseSubscriber.prototype._next = function (value) {
            var pair;
            if (this.hasPrev) {
                pair = [this.prev, value];
            }
            else {
                this.hasPrev = true;
            }
            this.prev = value;
            if (pair) {
                this.destination.next(pair);
            }
        };
        return PairwiseSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _util_not,_filter PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Subject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _BehaviorSubject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _AsyncSubject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _ReplaySubject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_isArray,_observable_race PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_observable_empty PURE_IMPORTS_END */
    var RepeatSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RepeatSubscriber, _super);
        function RepeatSubscriber(destination, count, source) {
            var _this = _super.call(this, destination) || this;
            _this.count = count;
            _this.source = source;
            return _this;
        }
        RepeatSubscriber.prototype.complete = function () {
            if (!this.isStopped) {
                var _a = this, source = _a.source, count = _a.count;
                if (count === 0) {
                    return _super.prototype.complete.call(this);
                }
                else if (count > -1) {
                    this.count = count - 1;
                }
                source.subscribe(this._unsubscribeAndRecycle());
            }
        };
        return RepeatSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var RepeatWhenSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RepeatWhenSubscriber, _super);
        function RepeatWhenSubscriber(destination, notifier, source) {
            var _this = _super.call(this, destination) || this;
            _this.notifier = notifier;
            _this.source = source;
            _this.sourceIsBeingSubscribedTo = true;
            return _this;
        }
        RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.sourceIsBeingSubscribedTo = true;
            this.source.subscribe(this);
        };
        RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
            if (this.sourceIsBeingSubscribedTo === false) {
                return _super.prototype.complete.call(this);
            }
        };
        RepeatWhenSubscriber.prototype.complete = function () {
            this.sourceIsBeingSubscribedTo = false;
            if (!this.isStopped) {
                if (!this.retries) {
                    this.subscribeToRetries();
                }
                if (!this.retriesSubscription || this.retriesSubscription.closed) {
                    return _super.prototype.complete.call(this);
                }
                this._unsubscribeAndRecycle();
                this.notifications.next();
            }
        };
        RepeatWhenSubscriber.prototype._unsubscribe = function () {
            var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
            if (notifications) {
                notifications.unsubscribe();
                this.notifications = null;
            }
            if (retriesSubscription) {
                retriesSubscription.unsubscribe();
                this.retriesSubscription = null;
            }
            this.retries = null;
        };
        RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
            var _unsubscribe = this._unsubscribe;
            this._unsubscribe = null;
            _super.prototype._unsubscribeAndRecycle.call(this);
            this._unsubscribe = _unsubscribe;
            return this;
        };
        RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
            this.notifications = new Subject();
            var retries;
            try {
                var notifier = this.notifier;
                retries = notifier(this.notifications);
            }
            catch (e) {
                return _super.prototype.complete.call(this);
            }
            this.retries = retries;
            this.retriesSubscription = subscribeToResult(this, retries);
        };
        return RepeatWhenSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var RetrySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RetrySubscriber, _super);
        function RetrySubscriber(destination, count, source) {
            var _this = _super.call(this, destination) || this;
            _this.count = count;
            _this.source = source;
            return _this;
        }
        RetrySubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _a = this, source = _a.source, count = _a.count;
                if (count === 0) {
                    return _super.prototype.error.call(this, err);
                }
                else if (count > -1) {
                    this.count = count - 1;
                }
                source.subscribe(this._unsubscribeAndRecycle());
            }
        };
        return RetrySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var RetryWhenSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RetryWhenSubscriber, _super);
        function RetryWhenSubscriber(destination, notifier, source) {
            var _this = _super.call(this, destination) || this;
            _this.notifier = notifier;
            _this.source = source;
            return _this;
        }
        RetryWhenSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var errors = this.errors;
                var retries = this.retries;
                var retriesSubscription = this.retriesSubscription;
                if (!retries) {
                    errors = new Subject();
                    try {
                        var notifier = this.notifier;
                        retries = notifier(errors);
                    }
                    catch (e) {
                        return _super.prototype.error.call(this, e);
                    }
                    retriesSubscription = subscribeToResult(this, retries);
                }
                else {
                    this.errors = null;
                    this.retriesSubscription = null;
                }
                this._unsubscribeAndRecycle();
                this.errors = errors;
                this.retries = retries;
                this.retriesSubscription = retriesSubscription;
                errors.next(err);
            }
        };
        RetryWhenSubscriber.prototype._unsubscribe = function () {
            var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
            if (errors) {
                errors.unsubscribe();
                this.errors = null;
            }
            if (retriesSubscription) {
                retriesSubscription.unsubscribe();
                this.retriesSubscription = null;
            }
            this.retries = null;
        };
        RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var _unsubscribe = this._unsubscribe;
            this._unsubscribe = null;
            this._unsubscribeAndRecycle();
            this._unsubscribe = _unsubscribe;
            this.source.subscribe(this);
        };
        return RetryWhenSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var SampleSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SampleSubscriber, _super);
        function SampleSubscriber() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasValue = false;
            return _this;
        }
        SampleSubscriber.prototype._next = function (value) {
            this.value = value;
            this.hasValue = true;
        };
        SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.emitValue();
        };
        SampleSubscriber.prototype.notifyComplete = function () {
            this.emitValue();
        };
        SampleSubscriber.prototype.emitValue = function () {
            if (this.hasValue) {
                this.hasValue = false;
                this.destination.next(this.value);
            }
        };
        return SampleSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
    var SampleTimeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SampleTimeSubscriber, _super);
        function SampleTimeSubscriber(destination, period, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.period = period;
            _this.scheduler = scheduler;
            _this.hasValue = false;
            _this.add(scheduler.schedule(dispatchNotification, period, { subscriber: _this, period: period }));
            return _this;
        }
        SampleTimeSubscriber.prototype._next = function (value) {
            this.lastValue = value;
            this.hasValue = true;
        };
        SampleTimeSubscriber.prototype.notifyNext = function () {
            if (this.hasValue) {
                this.hasValue = false;
                this.destination.next(this.lastValue);
            }
        };
        return SampleTimeSubscriber;
    }(Subscriber));
    function dispatchNotification(state) {
        var subscriber = state.subscriber, period = state.period;
        subscriber.notifyNext();
        this.schedule(state, period);
    }

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var SequenceEqualSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SequenceEqualSubscriber, _super);
        function SequenceEqualSubscriber(destination, compareTo, comparator) {
            var _this = _super.call(this, destination) || this;
            _this.compareTo = compareTo;
            _this.comparator = comparator;
            _this._a = [];
            _this._b = [];
            _this._oneComplete = false;
            _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));
            return _this;
        }
        SequenceEqualSubscriber.prototype._next = function (value) {
            if (this._oneComplete && this._b.length === 0) {
                this.emit(false);
            }
            else {
                this._a.push(value);
                this.checkValues();
            }
        };
        SequenceEqualSubscriber.prototype._complete = function () {
            if (this._oneComplete) {
                this.emit(this._a.length === 0 && this._b.length === 0);
            }
            else {
                this._oneComplete = true;
            }
            this.unsubscribe();
        };
        SequenceEqualSubscriber.prototype.checkValues = function () {
            var _c = this, _a = _c._a, _b = _c._b, comparator = _c.comparator;
            while (_a.length > 0 && _b.length > 0) {
                var a = _a.shift();
                var b = _b.shift();
                var areEqual = false;
                try {
                    areEqual = comparator ? comparator(a, b) : a === b;
                }
                catch (e) {
                    this.destination.error(e);
                }
                if (!areEqual) {
                    this.emit(false);
                }
            }
        };
        SequenceEqualSubscriber.prototype.emit = function (value) {
            var destination = this.destination;
            destination.next(value);
            destination.complete();
        };
        SequenceEqualSubscriber.prototype.nextB = function (value) {
            if (this._oneComplete && this._a.length === 0) {
                this.emit(false);
            }
            else {
                this._b.push(value);
                this.checkValues();
            }
        };
        SequenceEqualSubscriber.prototype.completeB = function () {
            if (this._oneComplete) {
                this.emit(this._a.length === 0 && this._b.length === 0);
            }
            else {
                this._oneComplete = true;
            }
        };
        return SequenceEqualSubscriber;
    }(Subscriber));
    var SequenceEqualCompareToSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SequenceEqualCompareToSubscriber, _super);
        function SequenceEqualCompareToSubscriber(destination, parent) {
            var _this = _super.call(this, destination) || this;
            _this.parent = parent;
            return _this;
        }
        SequenceEqualCompareToSubscriber.prototype._next = function (value) {
            this.parent.nextB(value);
        };
        SequenceEqualCompareToSubscriber.prototype._error = function (err) {
            this.parent.error(err);
            this.unsubscribe();
        };
        SequenceEqualCompareToSubscriber.prototype._complete = function () {
            this.parent.completeB();
            this.unsubscribe();
        };
        return SequenceEqualCompareToSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_EmptyError PURE_IMPORTS_END */
    var SingleSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SingleSubscriber, _super);
        function SingleSubscriber(destination, predicate, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.seenValue = false;
            _this.index = 0;
            return _this;
        }
        SingleSubscriber.prototype.applySingleValue = function (value) {
            if (this.seenValue) {
                this.destination.error('Sequence contains more than one element');
            }
            else {
                this.seenValue = true;
                this.singleValue = value;
            }
        };
        SingleSubscriber.prototype._next = function (value) {
            var index = this.index++;
            if (this.predicate) {
                this.tryNext(value, index);
            }
            else {
                this.applySingleValue(value);
            }
        };
        SingleSubscriber.prototype.tryNext = function (value, index) {
            try {
                if (this.predicate(value, index, this.source)) {
                    this.applySingleValue(value);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        SingleSubscriber.prototype._complete = function () {
            var destination = this.destination;
            if (this.index > 0) {
                destination.next(this.seenValue ? this.singleValue : undefined);
                destination.complete();
            }
            else {
                destination.error(new EmptyError);
            }
        };
        return SingleSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var SkipSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SkipSubscriber, _super);
        function SkipSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.count = 0;
            return _this;
        }
        SkipSubscriber.prototype._next = function (x) {
            if (++this.count > this.total) {
                this.destination.next(x);
            }
        };
        return SkipSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError PURE_IMPORTS_END */
    var SkipLastSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SkipLastSubscriber, _super);
        function SkipLastSubscriber(destination, _skipCount) {
            var _this = _super.call(this, destination) || this;
            _this._skipCount = _skipCount;
            _this._count = 0;
            _this._ring = new Array(_skipCount);
            return _this;
        }
        SkipLastSubscriber.prototype._next = function (value) {
            var skipCount = this._skipCount;
            var count = this._count++;
            if (count < skipCount) {
                this._ring[count] = value;
            }
            else {
                var currentIndex = count % skipCount;
                var ring = this._ring;
                var oldValue = ring[currentIndex];
                ring[currentIndex] = value;
                this.destination.next(oldValue);
            }
        };
        return SkipLastSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var SkipUntilSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SkipUntilSubscriber, _super);
        function SkipUntilSubscriber(destination, notifier) {
            var _this = _super.call(this, destination) || this;
            _this.hasValue = false;
            var innerSubscriber = new InnerSubscriber(_this, undefined, undefined);
            _this.add(innerSubscriber);
            _this.innerSubscription = innerSubscriber;
            subscribeToResult(_this, notifier, undefined, undefined, innerSubscriber);
            return _this;
        }
        SkipUntilSubscriber.prototype._next = function (value) {
            if (this.hasValue) {
                _super.prototype._next.call(this, value);
            }
        };
        SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.hasValue = true;
            if (this.innerSubscription) {
                this.innerSubscription.unsubscribe();
            }
        };
        SkipUntilSubscriber.prototype.notifyComplete = function () {
        };
        return SkipUntilSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var SkipWhileSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SkipWhileSubscriber, _super);
        function SkipWhileSubscriber(destination, predicate) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.skipping = true;
            _this.index = 0;
            return _this;
        }
        SkipWhileSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            if (this.skipping) {
                this.tryCallPredicate(value);
            }
            if (!this.skipping) {
                destination.next(value);
            }
        };
        SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
            try {
                var result = this.predicate(value, this.index++);
                this.skipping = Boolean(result);
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        return SkipWhileSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _observable_concat,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Observable,_scheduler_asap,_util_isNumeric PURE_IMPORTS_END */
    var SubscribeOnObservable = /*@__PURE__*/ (function (_super) {
        __extends(SubscribeOnObservable, _super);
        function SubscribeOnObservable(source, delayTime, scheduler) {
            if (delayTime === void 0) {
                delayTime = 0;
            }
            if (scheduler === void 0) {
                scheduler = asap;
            }
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.delayTime = delayTime;
            _this.scheduler = scheduler;
            if (!isNumeric(delayTime) || delayTime < 0) {
                _this.delayTime = 0;
            }
            if (!scheduler || typeof scheduler.schedule !== 'function') {
                _this.scheduler = asap;
            }
            return _this;
        }
        SubscribeOnObservable.create = function (source, delay, scheduler) {
            if (delay === void 0) {
                delay = 0;
            }
            if (scheduler === void 0) {
                scheduler = asap;
            }
            return new SubscribeOnObservable(source, delay, scheduler);
        };
        SubscribeOnObservable.dispatch = function (arg) {
            var source = arg.source, subscriber = arg.subscriber;
            return this.add(source.subscribe(subscriber));
        };
        SubscribeOnObservable.prototype._subscribe = function (subscriber) {
            var delay = this.delayTime;
            var source = this.source;
            var scheduler = this.scheduler;
            return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
                source: source, subscriber: subscriber
            });
        };
        return SubscribeOnObservable;
    }(Observable));

    /** PURE_IMPORTS_START _observable_SubscribeOnObservable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */
    var SwitchMapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SwitchMapSubscriber, _super);
        function SwitchMapSubscriber(destination, project) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.index = 0;
            return _this;
        }
        SwitchMapSubscriber.prototype._next = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (error) {
                this.destination.error(error);
                return;
            }
            this._innerSub(result, value, index);
        };
        SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
            var innerSubscription = this.innerSubscription;
            if (innerSubscription) {
                innerSubscription.unsubscribe();
            }
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            this.innerSubscription = subscribeToResult(this, result, value, index, innerSubscriber);
        };
        SwitchMapSubscriber.prototype._complete = function () {
            var innerSubscription = this.innerSubscription;
            if (!innerSubscription || innerSubscription.closed) {
                _super.prototype._complete.call(this);
            }
            this.unsubscribe();
        };
        SwitchMapSubscriber.prototype._unsubscribe = function () {
            this.innerSubscription = null;
        };
        SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var destination = this.destination;
            destination.remove(innerSub);
            this.innerSubscription = null;
            if (this.isStopped) {
                _super.prototype._complete.call(this);
            }
        };
        SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        return SwitchMapSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _switchMap,_util_identity PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _switchMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var TakeUntilSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TakeUntilSubscriber, _super);
        function TakeUntilSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.seenValue = false;
            return _this;
        }
        TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.seenValue = true;
            this.complete();
        };
        TakeUntilSubscriber.prototype.notifyComplete = function () {
        };
        return TakeUntilSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var TakeWhileSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TakeWhileSubscriber, _super);
        function TakeWhileSubscriber(destination, predicate, inclusive) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.inclusive = inclusive;
            _this.index = 0;
            return _this;
        }
        TakeWhileSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            var result;
            try {
                result = this.predicate(value, this.index++);
            }
            catch (err) {
                destination.error(err);
                return;
            }
            this.nextOrComplete(value, result);
        };
        TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
            var destination = this.destination;
            if (Boolean(predicateResult)) {
                destination.next(value);
            }
            else {
                if (this.inclusive) {
                    destination.next(value);
                }
                destination.complete();
            }
        };
        return TakeWhileSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */
    var TapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TapSubscriber, _super);
        function TapSubscriber(destination, observerOrNext, error, complete) {
            var _this = _super.call(this, destination) || this;
            _this._tapNext = noop;
            _this._tapError = noop;
            _this._tapComplete = noop;
            _this._tapError = error || noop;
            _this._tapComplete = complete || noop;
            if (isFunction(observerOrNext)) {
                _this._context = _this;
                _this._tapNext = observerOrNext;
            }
            else if (observerOrNext) {
                _this._context = observerOrNext;
                _this._tapNext = observerOrNext.next || noop;
                _this._tapError = observerOrNext.error || noop;
                _this._tapComplete = observerOrNext.complete || noop;
            }
            return _this;
        }
        TapSubscriber.prototype._next = function (value) {
            try {
                this._tapNext.call(this._context, value);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(value);
        };
        TapSubscriber.prototype._error = function (err) {
            try {
                this._tapError.call(this._context, err);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.error(err);
        };
        TapSubscriber.prototype._complete = function () {
            try {
                this._tapComplete.call(this._context);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            return this.destination.complete();
        };
        return TapSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var ThrottleSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ThrottleSubscriber, _super);
        function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.durationSelector = durationSelector;
            _this._leading = _leading;
            _this._trailing = _trailing;
            _this._hasValue = false;
            return _this;
        }
        ThrottleSubscriber.prototype._next = function (value) {
            this._hasValue = true;
            this._sendValue = value;
            if (!this._throttled) {
                if (this._leading) {
                    this.send();
                }
                else {
                    this.throttle(value);
                }
            }
        };
        ThrottleSubscriber.prototype.send = function () {
            var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
            if (_hasValue) {
                this.destination.next(_sendValue);
                this.throttle(_sendValue);
            }
            this._hasValue = false;
            this._sendValue = null;
        };
        ThrottleSubscriber.prototype.throttle = function (value) {
            var duration = this.tryDurationSelector(value);
            if (!!duration) {
                this.add(this._throttled = subscribeToResult(this, duration));
            }
        };
        ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
            try {
                return this.durationSelector(value);
            }
            catch (err) {
                this.destination.error(err);
                return null;
            }
        };
        ThrottleSubscriber.prototype.throttlingDone = function () {
            var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
            if (_throttled) {
                _throttled.unsubscribe();
            }
            this._throttled = null;
            if (_trailing) {
                this.send();
            }
        };
        ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.throttlingDone();
        };
        ThrottleSubscriber.prototype.notifyComplete = function () {
            this.throttlingDone();
        };
        return ThrottleSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */
    var ThrottleTimeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ThrottleTimeSubscriber, _super);
        function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
            var _this = _super.call(this, destination) || this;
            _this.duration = duration;
            _this.scheduler = scheduler;
            _this.leading = leading;
            _this.trailing = trailing;
            _this._hasTrailingValue = false;
            _this._trailingValue = null;
            return _this;
        }
        ThrottleTimeSubscriber.prototype._next = function (value) {
            if (this.throttled) {
                if (this.trailing) {
                    this._trailingValue = value;
                    this._hasTrailingValue = true;
                }
            }
            else {
                this.add(this.throttled = this.scheduler.schedule(dispatchNext$3, this.duration, { subscriber: this }));
                if (this.leading) {
                    this.destination.next(value);
                }
                else if (this.trailing) {
                    this._trailingValue = value;
                    this._hasTrailingValue = true;
                }
            }
        };
        ThrottleTimeSubscriber.prototype._complete = function () {
            if (this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this.destination.complete();
            }
            else {
                this.destination.complete();
            }
        };
        ThrottleTimeSubscriber.prototype.clearThrottle = function () {
            var throttled = this.throttled;
            if (throttled) {
                if (this.trailing && this._hasTrailingValue) {
                    this.destination.next(this._trailingValue);
                    this._trailingValue = null;
                    this._hasTrailingValue = false;
                }
                throttled.unsubscribe();
                this.remove(throttled);
                this.throttled = null;
            }
        };
        return ThrottleTimeSubscriber;
    }(Subscriber));
    function dispatchNext$3(arg) {
        var subscriber = arg.subscriber;
        subscriber.clearThrottle();
    }

    /** PURE_IMPORTS_START _scheduler_async,_scan,_observable_defer,_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    function timeoutWith(due, withObservable, scheduler) {
        if (scheduler === void 0) {
            scheduler = async;
        }
        return function (source) {
            var absoluteTimeout = isDate(due);
            var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
            return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
        };
    }
    var TimeoutWithOperator = /*@__PURE__*/ (function () {
        function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
            this.waitFor = waitFor;
            this.absoluteTimeout = absoluteTimeout;
            this.withObservable = withObservable;
            this.scheduler = scheduler;
        }
        TimeoutWithOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
        };
        return TimeoutWithOperator;
    }());
    var TimeoutWithSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TimeoutWithSubscriber, _super);
        function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.absoluteTimeout = absoluteTimeout;
            _this.waitFor = waitFor;
            _this.withObservable = withObservable;
            _this.scheduler = scheduler;
            _this.action = null;
            _this.scheduleTimeout();
            return _this;
        }
        TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
            var withObservable = subscriber.withObservable;
            subscriber._unsubscribeAndRecycle();
            subscriber.add(subscribeToResult(subscriber, withObservable));
        };
        TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
            var action = this.action;
            if (action) {
                this.action = action.schedule(this, this.waitFor);
            }
            else {
                this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
            }
        };
        TimeoutWithSubscriber.prototype._next = function (value) {
            if (!this.absoluteTimeout) {
                this.scheduleTimeout();
            }
            _super.prototype._next.call(this, value);
        };
        TimeoutWithSubscriber.prototype._unsubscribe = function () {
            this.action = null;
            this.scheduler = null;
            this.withObservable = null;
        };
        return TimeoutWithSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _scheduler_async,_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var WindowSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(WindowSubscriber, _super);
        function WindowSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.window = new Subject();
            destination.next(_this.window);
            return _this;
        }
        WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openWindow();
        };
        WindowSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        WindowSubscriber.prototype.notifyComplete = function (innerSub) {
            this._complete();
        };
        WindowSubscriber.prototype._next = function (value) {
            this.window.next(value);
        };
        WindowSubscriber.prototype._error = function (err) {
            this.window.error(err);
            this.destination.error(err);
        };
        WindowSubscriber.prototype._complete = function () {
            this.window.complete();
            this.destination.complete();
        };
        WindowSubscriber.prototype._unsubscribe = function () {
            this.window = null;
        };
        WindowSubscriber.prototype.openWindow = function () {
            var prevWindow = this.window;
            if (prevWindow) {
                prevWindow.complete();
            }
            var destination = this.destination;
            var newWindow = this.window = new Subject();
            destination.next(newWindow);
        };
        return WindowSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_Subject PURE_IMPORTS_END */
    var WindowCountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(WindowCountSubscriber, _super);
        function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.windowSize = windowSize;
            _this.startWindowEvery = startWindowEvery;
            _this.windows = [new Subject()];
            _this.count = 0;
            destination.next(_this.windows[0]);
            return _this;
        }
        WindowCountSubscriber.prototype._next = function (value) {
            var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
            var destination = this.destination;
            var windowSize = this.windowSize;
            var windows = this.windows;
            var len = windows.length;
            for (var i = 0; i < len && !this.closed; i++) {
                windows[i].next(value);
            }
            var c = this.count - windowSize + 1;
            if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
                windows.shift().complete();
            }
            if (++this.count % startWindowEvery === 0 && !this.closed) {
                var window_1 = new Subject();
                windows.push(window_1);
                destination.next(window_1);
            }
        };
        WindowCountSubscriber.prototype._error = function (err) {
            var windows = this.windows;
            if (windows) {
                while (windows.length > 0 && !this.closed) {
                    windows.shift().error(err);
                }
            }
            this.destination.error(err);
        };
        WindowCountSubscriber.prototype._complete = function () {
            var windows = this.windows;
            if (windows) {
                while (windows.length > 0 && !this.closed) {
                    windows.shift().complete();
                }
            }
            this.destination.complete();
        };
        WindowCountSubscriber.prototype._unsubscribe = function () {
            this.count = 0;
            this.windows = null;
        };
        return WindowCountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_scheduler_async,_Subscriber,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
    var CountedSubject = /*@__PURE__*/ (function (_super) {
        __extends(CountedSubject, _super);
        function CountedSubject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._numberOfNextedValues = 0;
            return _this;
        }
        CountedSubject.prototype.next = function (value) {
            this._numberOfNextedValues++;
            _super.prototype.next.call(this, value);
        };
        Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
            get: function () {
                return this._numberOfNextedValues;
            },
            enumerable: true,
            configurable: true
        });
        return CountedSubject;
    }(Subject));
    var WindowTimeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(WindowTimeSubscriber, _super);
        function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.windowTimeSpan = windowTimeSpan;
            _this.windowCreationInterval = windowCreationInterval;
            _this.maxWindowSize = maxWindowSize;
            _this.scheduler = scheduler;
            _this.windows = [];
            var window = _this.openWindow();
            if (windowCreationInterval !== null && windowCreationInterval >= 0) {
                var closeState = { subscriber: _this, window: window, context: null };
                var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: _this, scheduler: scheduler };
                _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
                _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
            }
            else {
                var timeSpanOnlyState = { subscriber: _this, window: window, windowTimeSpan: windowTimeSpan };
                _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
            }
            return _this;
        }
        WindowTimeSubscriber.prototype._next = function (value) {
            var windows = this.windows;
            var len = windows.length;
            for (var i = 0; i < len; i++) {
                var window_1 = windows[i];
                if (!window_1.closed) {
                    window_1.next(value);
                    if (window_1.numberOfNextedValues >= this.maxWindowSize) {
                        this.closeWindow(window_1);
                    }
                }
            }
        };
        WindowTimeSubscriber.prototype._error = function (err) {
            var windows = this.windows;
            while (windows.length > 0) {
                windows.shift().error(err);
            }
            this.destination.error(err);
        };
        WindowTimeSubscriber.prototype._complete = function () {
            var windows = this.windows;
            while (windows.length > 0) {
                var window_2 = windows.shift();
                if (!window_2.closed) {
                    window_2.complete();
                }
            }
            this.destination.complete();
        };
        WindowTimeSubscriber.prototype.openWindow = function () {
            var window = new CountedSubject();
            this.windows.push(window);
            var destination = this.destination;
            destination.next(window);
            return window;
        };
        WindowTimeSubscriber.prototype.closeWindow = function (window) {
            window.complete();
            var windows = this.windows;
            windows.splice(windows.indexOf(window), 1);
        };
        return WindowTimeSubscriber;
    }(Subscriber));
    function dispatchWindowTimeSpanOnly(state) {
        var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
        if (window) {
            subscriber.closeWindow(window);
        }
        state.window = subscriber.openWindow();
        this.schedule(state, windowTimeSpan);
    }
    function dispatchWindowCreation(state) {
        var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
        var window = subscriber.openWindow();
        var action = this;
        var context = { action: action, subscription: null };
        var timeSpanState = { subscriber: subscriber, window: window, context: context };
        context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
        action.add(context.subscription);
        action.schedule(state, windowCreationInterval);
    }
    function dispatchWindowClose(state) {
        var subscriber = state.subscriber, window = state.window, context = state.context;
        if (context && context.action && context.subscription) {
            context.action.remove(context.subscription);
        }
        subscriber.closeWindow(window);
    }

    /** PURE_IMPORTS_START tslib,_Subject,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var WindowToggleSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(WindowToggleSubscriber, _super);
        function WindowToggleSubscriber(destination, openings, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.openings = openings;
            _this.closingSelector = closingSelector;
            _this.contexts = [];
            _this.add(_this.openSubscription = subscribeToResult(_this, openings, openings));
            return _this;
        }
        WindowToggleSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            if (contexts) {
                var len = contexts.length;
                for (var i = 0; i < len; i++) {
                    contexts[i].window.next(value);
                }
            }
        };
        WindowToggleSubscriber.prototype._error = function (err) {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_1 = contexts[index];
                    context_1.window.error(err);
                    context_1.subscription.unsubscribe();
                }
            }
            _super.prototype._error.call(this, err);
        };
        WindowToggleSubscriber.prototype._complete = function () {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_2 = contexts[index];
                    context_2.window.complete();
                    context_2.subscription.unsubscribe();
                }
            }
            _super.prototype._complete.call(this);
        };
        WindowToggleSubscriber.prototype._unsubscribe = function () {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_3 = contexts[index];
                    context_3.window.unsubscribe();
                    context_3.subscription.unsubscribe();
                }
            }
        };
        WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            if (outerValue === this.openings) {
                var closingNotifier = void 0;
                try {
                    var closingSelector = this.closingSelector;
                    closingNotifier = closingSelector(innerValue);
                }
                catch (e) {
                    return this.error(e);
                }
                var window_1 = new Subject();
                var subscription = new Subscription();
                var context_4 = { window: window_1, subscription: subscription };
                this.contexts.push(context_4);
                var innerSubscription = subscribeToResult(this, closingNotifier, context_4);
                if (innerSubscription.closed) {
                    this.closeWindow(this.contexts.length - 1);
                }
                else {
                    innerSubscription.context = context_4;
                    subscription.add(innerSubscription);
                }
                this.destination.next(window_1);
            }
            else {
                this.closeWindow(this.contexts.indexOf(outerValue));
            }
        };
        WindowToggleSubscriber.prototype.notifyError = function (err) {
            this.error(err);
        };
        WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
            if (inner !== this.openSubscription) {
                this.closeWindow(this.contexts.indexOf(inner.context));
            }
        };
        WindowToggleSubscriber.prototype.closeWindow = function (index) {
            if (index === -1) {
                return;
            }
            var contexts = this.contexts;
            var context = contexts[index];
            var window = context.window, subscription = context.subscription;
            contexts.splice(index, 1);
            window.complete();
            subscription.unsubscribe();
        };
        return WindowToggleSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var WindowSubscriber$1 = /*@__PURE__*/ (function (_super) {
        __extends(WindowSubscriber, _super);
        function WindowSubscriber(destination, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.closingSelector = closingSelector;
            _this.openWindow();
            return _this;
        }
        WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openWindow(innerSub);
        };
        WindowSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        WindowSubscriber.prototype.notifyComplete = function (innerSub) {
            this.openWindow(innerSub);
        };
        WindowSubscriber.prototype._next = function (value) {
            this.window.next(value);
        };
        WindowSubscriber.prototype._error = function (err) {
            this.window.error(err);
            this.destination.error(err);
            this.unsubscribeClosingNotification();
        };
        WindowSubscriber.prototype._complete = function () {
            this.window.complete();
            this.destination.complete();
            this.unsubscribeClosingNotification();
        };
        WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
            if (this.closingNotification) {
                this.closingNotification.unsubscribe();
            }
        };
        WindowSubscriber.prototype.openWindow = function (innerSub) {
            if (innerSub === void 0) {
                innerSub = null;
            }
            if (innerSub) {
                this.remove(innerSub);
                innerSub.unsubscribe();
            }
            var prevWindow = this.window;
            if (prevWindow) {
                prevWindow.complete();
            }
            var window = this.window = new Subject();
            this.destination.next(window);
            var closingNotifier;
            try {
                var closingSelector = this.closingSelector;
                closingNotifier = closingSelector();
            }
            catch (e) {
                this.destination.error(e);
                this.window.error(e);
                return;
            }
            this.add(this.closingNotification = subscribeToResult(this, closingNotifier));
        };
        return WindowSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var WithLatestFromSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(WithLatestFromSubscriber, _super);
        function WithLatestFromSubscriber(destination, observables, project) {
            var _this = _super.call(this, destination) || this;
            _this.observables = observables;
            _this.project = project;
            _this.toRespond = [];
            var len = observables.length;
            _this.values = new Array(len);
            for (var i = 0; i < len; i++) {
                _this.toRespond.push(i);
            }
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                _this.add(subscribeToResult(_this, observable, observable, i));
            }
            return _this;
        }
        WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values[outerIndex] = innerValue;
            var toRespond = this.toRespond;
            if (toRespond.length > 0) {
                var found = toRespond.indexOf(outerIndex);
                if (found !== -1) {
                    toRespond.splice(found, 1);
                }
            }
        };
        WithLatestFromSubscriber.prototype.notifyComplete = function () {
        };
        WithLatestFromSubscriber.prototype._next = function (value) {
            if (this.toRespond.length === 0) {
                var args = [value].concat(this.values);
                if (this.project) {
                    this._tryProject(args);
                }
                else {
                    this.destination.next(args);
                }
            }
        };
        WithLatestFromSubscriber.prototype._tryProject = function (args) {
            var result;
            try {
                result = this.project.apply(this, args);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return WithLatestFromSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    function responseFor(messageBus, responseMessageType, requestId, responseGenerator) {
        return responseOrErrorFor(messageBus, responseMessageType, SERVICE_ERROR_RESPONSE, requestId, responseGenerator, function (errorMessage) {
            var result = __assign({}, errorMessage);
            delete result.type;
            return result;
        });
    }
    function responseOrErrorFor(messageBus, responseMessageType, erroreMessageType, requestId, responseGenerator, errorGenerator) {
        var ret = new Promise(function (resolve, reject) {
            var sub = messageBus.subscribe(function (message) {
                if (isApiMessageOfType(message, responseMessageType) && isApiMessageCorrelatedTo(message, requestId)) {
                    var result = responseGenerator(message);
                    sub.unsubscribe();
                    resolve(result);
                }
                else if (isApiMessageOfType(message, erroreMessageType) && isApiMessageCorrelatedTo(message, requestId)) {
                    var result = errorGenerator(message);
                    sub.unsubscribe();
                    reject(result);
                }
            }, function (error) {
                sub.unsubscribe();
                reject(error);
            });
        });
        return ret;
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var RequestIdGenerator = /** @class */ (function () {
        function RequestIdGenerator(messageBus, requestTimeoutMs) {
            if (requestTimeoutMs === void 0) { requestTimeoutMs = 2000; }
            this.messageBus = messageBus;
            this.requestTimeoutMs = requestTimeoutMs;
            if (!this.messageBus) {
                throw new Error("messageBus cannot be null or undefined");
            }
            var random = new Date().getTime();
            this.id = "trydotnetjs.session." + random;
            this.seed = 0;
        }
        RequestIdGenerator.prototype.getNewRequestId = function () {
            var requestId = this.id + "_" + this.seed++;
            var request = {
                type: CREATE_OPERATION_ID_REQUEST,
                requestId: requestId
            };
            var ret = responseFor(this.messageBus, CREATE_OPERATION_ID_RESPONSE, requestId, function (responseMessage) {
                var result = responseMessage.operationId;
                return result;
            });
            var composed = from(ret).pipe(timeoutWith(this.requestTimeoutMs, from([requestId]))).toPromise();
            this.messageBus.post(request);
            return composed;
        };
        return RequestIdGenerator;
    }());

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.
    function isNullOrUndefinedOrWhitespace(input) {
        if (isNullOrUndefined(input)) {
            return true;
        }
        return input.replace(/\s/g, "").length < 1;
    }
    function isNullOrUndefined(input) {
        return input === undefined || input === null;
    }
    function trimNewLines(input) {
        return isNullOrUndefined(input) ? input : input.trim();
    }
    function isString(input) {
        return input.charAt !== undefined;
    }
    function htmlEncode(input, doc) {
        var encoded = input;
        var source = doc;
        if (source) {
            var encoder = source.createElement("div");
            var text = source.createTextNode(input);
            encoder.appendChild(text);
            encoded = encoder.innerHTML;
        }
        return encoded;
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var Document = /** @class */ (function () {
        function Document(documentId, content) {
            this.documentId = documentId;
            this.content = content;
            this.cursorPosition = 0;
            this.isModified = false;
            if (!this.documentId) {
                throw new Error("documentId cannot be null");
            }
        }
        Document.prototype.id = function () {
            return this.documentId;
        };
        Document.prototype.getContent = function () {
            return this.content;
        };
        Document.prototype.getCursorPosition = function () {
            return this.cursorPosition;
        };
        Document.prototype.currentEditor = function () {
            return this.editor;
        };
        Document.prototype.isActiveInEditor = function () {
            return this.editor ? true : false;
        };
        Document.prototype.setContent = function (content) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.content !== content)) return [3 /*break*/, 2];
                            this.isModified = true;
                            this.content = content;
                            if (!this.editor) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.editor.setContent(content)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        Document.prototype.bindToEditor = function (editor) {
            return __awaiter(this, void 0, void 0, function () {
                var handler_1, onComplete_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.unbind();
                            if (!editor) return [3 /*break*/, 3];
                            this.editor = editor;
                            return [4 /*yield*/, this.editor.setBufferId(this.documentId)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.editor.setContent(this.content)];
                        case 2:
                            _a.sent();
                            handler_1 = (function (event) {
                                if (event.documentId === _this.documentId) {
                                    if (isNullOrUndefined(event.editorId) || event.editorId === _this.editor.id()) {
                                        _this.content = event.text;
                                        _this.cursorPosition = event.cursor ? event.cursor : 0;
                                    }
                                }
                            }).bind(this);
                            onComplete_1 = (function () { return _this.unbind(); }).bind(this);
                            this.editorSubscription = editor.textChanges.subscribe(function (event) { return handler_1(event); }, undefined, function () { return onComplete_1(); });
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        Document.prototype.unbindFromEditor = function () {
            this.unbind();
            this.cursorPosition = 0;
            return Promise.resolve();
        };
        Document.prototype.unbind = function () {
            if (this.editor) {
                this.editor = null;
            }
            if (this.editorSubscription) {
                this.editorSubscription.unsubscribe();
                this.editorSubscription = null;
            }
        };
        return Document;
    }());

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var Workspace = /** @class */ (function () {
        function Workspace(projectApiMessageBus, requestIdGenerator) {
            this.projectApiMessageBus = projectApiMessageBus;
            this.requestIdGenerator = requestIdGenerator;
            this.openDocuments = {};
            this.workspaceIsModified = false;
            if (!this.projectApiMessageBus) {
                throw new Error("messageBus cannot be null");
            }
            if (!this.requestIdGenerator) {
                throw new Error("requestIdGenerator cannot be null");
            }
        }
        Workspace.prototype.isModified = function () {
            return this.workspaceIsModified || (this.openDocuments && this.getAllOpenDocuments().some(function (d) { return d.isModified; }));
        };
        Workspace.prototype.fromProject = function (project) {
            this.openDocuments = {};
            this.workspace = {
                workspaceType: project.package
            };
            if (!isNullOrUndefinedOrWhitespace(project.language)) {
                this.workspace.language = project.language;
            }
            if (project.usings) {
                this.workspace.usings = JSON.parse(JSON.stringify(project.usings));
            }
            if (project.files) {
                this.workspace.files = project.files.map(function (f) { return ({ name: f.name, text: f.content }); });
            }
            if (!isNullOrUndefinedOrWhitespace(project.packageVersion)) {
                this.packageVersion = project.packageVersion;
            }
            this.workspaceIsModified = true;
        };
        Workspace.prototype.findFile = function (fileName) {
            var file = this.workspace.files.find(function (f) { return f.name === fileName; });
            return file;
        };
        Workspace.prototype.findRegion = function (regions, id) {
            return regions ? regions.find(function (p) { return p.id === id; }) : null;
        };
        Workspace.prototype.createDocumentFromSourceFileRegion = function (file, id) {
            return __awaiter(this, void 0, void 0, function () {
                var requestId, ret;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.requestIdGenerator.getNewRequestId()];
                        case 1:
                            requestId = _a.sent();
                            ret = responseFor(this.projectApiMessageBus, CREATE_REGIONS_FROM_SOURCEFILES_RESPONSE, requestId, function (responseMessage) {
                                var result = null;
                                var regions = (responseMessage.regions);
                                var region = _this.findRegion(regions, id);
                                if (region) {
                                    result = new Document(region.id, region.content);
                                }
                                return result;
                            });
                            this.projectApiMessageBus.post({
                                type: CREATE_REGIONS_FROM_SOURCEFILES_REQUEST,
                                requestId: requestId,
                                files: [{ name: file.name, content: file.text }]
                            });
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        Workspace.prototype.createDocument = function (fileName, region, content) {
            return __awaiter(this, void 0, void 0, function () {
                var id, document, file, file;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = fileName;
                            if (region) {
                                id = fileName + "@" + region;
                            }
                            document = null;
                            if (!region) return [3 /*break*/, 4];
                            file = this.findFile(fileName);
                            if (!file) return [3 /*break*/, 3];
                            if (!!isNullOrUndefined(content)) return [3 /*break*/, 1];
                            document = new Document(id, content);
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this.createDocumentFromSourceFileRegion(file, id)];
                        case 2:
                            document = _a.sent();
                            _a.label = 3;
                        case 3: return [3 /*break*/, 5];
                        case 4:
                            file = this.findFile(id);
                            if (file) {
                                document = new Document(id, file.text);
                            }
                            _a.label = 5;
                        case 5:
                            if (!document) {
                                document = new Document(id, "");
                            }
                            if (!!isNullOrUndefined(content)) return [3 /*break*/, 7];
                            return [4 /*yield*/, document.setContent(content)];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7: return [2 /*return*/, document];
                    }
                });
            });
        };
        Workspace.prototype.createAndOpenDocument = function (fileName, region, content) {
            return __awaiter(this, void 0, void 0, function () {
                var id, document;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = fileName;
                            if (region) {
                                id = fileName + "@" + region;
                            }
                            return [4 /*yield*/, this.createDocument(fileName, region, content)];
                        case 1:
                            document = _a.sent();
                            if (document) {
                                this.openDocuments[id] = document;
                            }
                            return [2 /*return*/, document];
                    }
                });
            });
        };
        Workspace.prototype.closeDocumentBeforeOpen = function (fileName, region) {
            if (region && this.openDocuments[fileName]) {
                this.openDocuments[fileName].unbindFromEditor();
                delete this.openDocuments[fileName];
                this.workspaceIsModified = true;
            }
            else if (!region) {
                this.closeAllOpenDocumentsForFile(fileName);
                this.workspaceIsModified = true;
            }
        };
        Workspace.prototype.closeAllOpenDocumentsForFile = function (fileName) {
            var toDelete = Object.getOwnPropertyNames(this.openDocuments).filter(function (name) { return name.startsWith(fileName + "@"); });
            for (var _i = 0, toDelete_1 = toDelete; _i < toDelete_1.length; _i++) {
                var region = toDelete_1[_i];
                this.openDocuments[region].unbindFromEditor();
                delete this.openDocuments[region];
            }
        };
        Workspace.prototype.unbindAllDocumentsForEditorId = function (editorId) {
            var _this = this;
            var docIds = Object.getOwnPropertyNames(this.openDocuments);
            var activeDocuments = docIds
                .map(function (id) { return _this.openDocuments[id]; })
                .filter(function (openDocument) { return openDocument.isActiveInEditor() && openDocument.currentEditor().id() === editorId; });
            for (var _i = 0, activeDocuments_1 = activeDocuments; _i < activeDocuments_1.length; _i++) {
                var activeDocument = activeDocuments_1[_i];
                activeDocument.unbindFromEditor();
            }
        };
        Workspace.prototype.getAllOpenDocuments = function () {
            var _this = this;
            return Object.getOwnPropertyNames(this.openDocuments).map(function (n) { return _this.openDocuments[n]; });
        };
        Workspace.prototype._openDocument = function (fileName, region, content) {
            return __awaiter(this, void 0, void 0, function () {
                var id, document;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!fileName) {
                                throw new Error("file cannot be null");
                            }
                            id = region ? fileName + "@" + region : fileName;
                            document = this.openDocuments[id];
                            if (!!document) return [3 /*break*/, 2];
                            this.closeDocumentBeforeOpen(fileName, region);
                            return [4 /*yield*/, this.createAndOpenDocument(fileName, region, content)];
                        case 1:
                            document = _a.sent();
                            this.workspaceIsModified = true;
                            return [3 /*break*/, 4];
                        case 2:
                            if (!content) return [3 /*break*/, 4];
                            return [4 /*yield*/, document.setContent(content)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/, document];
                    }
                });
            });
        };
        Workspace.prototype.getActiveDocuments = function () {
            var ret = null;
            ret = this.getAllOpenDocuments().filter(function (d) { return d.isActiveInEditor(); }).map(function (d) {
                return {
                    document: d,
                    editorId: d.currentEditor().id()
                };
            });
            return ret;
        };
        Workspace.prototype.openDocument = function (parameters) {
            return __awaiter(this, void 0, void 0, function () {
                var document;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._openDocument(parameters.fileName, parameters.region, parameters.content)];
                        case 1:
                            document = _a.sent();
                            if (parameters.textEditor) {
                                this.unbindAllDocumentsForEditorId(parameters.textEditor.id());
                            }
                            return [4 /*yield*/, document.bindToEditor(parameters.textEditor)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, document];
                    }
                });
            });
        };
        Workspace.prototype.toSetWorkspaceRequests = function () {
            this.workspace.buffers = this.getAllOpenDocuments().map(function (d) { return ({
                id: d.id(),
                content: d.getContent(),
                position: d.getCursorPosition()
            }); });
            this.workspaceIsModified = false;
            var requests = {
                workspace: JSON.parse(JSON.stringify(this.workspace)),
                bufferIds: {}
            };
            var activeDocuments = this.getActiveDocuments();
            for (var _i = 0, activeDocuments_2 = activeDocuments; _i < activeDocuments_2.length; _i++) {
                var activeDocument = activeDocuments_2[_i];
                requests.bufferIds[activeDocument.editorId] = activeDocument.document.id();
            }
            return requests;
        };
        return Workspace;
    }());

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var signatureHelpService = /** @class */ (function () {
        function signatureHelpService(messageBus, requestIdGenerator, serviceErrorChannel) {
            this.messageBus = messageBus;
            this.requestIdGenerator = requestIdGenerator;
            this.serviceErrorChannel = serviceErrorChannel;
            if (!this.messageBus) {
                throw new Error("messageBus cannot be null");
            }
            if (!this.requestIdGenerator) {
                throw new Error("requestIdGenerator cannot be null");
            }
        }
        signatureHelpService.prototype.getSignatureHelp = function (workspace, fileName, position, region) {
            return __awaiter(this, void 0, void 0, function () {
                var requestId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!workspace) {
                                throw new Error("workspace cannot be null");
                            }
                            return [4 /*yield*/, this.requestIdGenerator.getNewRequestId()];
                        case 1:
                            requestId = _a.sent();
                            throw new Error("Method not implemented.");
                    }
                });
            });
        };
        return signatureHelpService;
    }());

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var completionListService = /** @class */ (function () {
        function completionListService(messageBus, requestIdGenerator, serviceErrorChannel) {
            this.messageBus = messageBus;
            this.requestIdGenerator = requestIdGenerator;
            this.serviceErrorChannel = serviceErrorChannel;
            if (!this.messageBus) {
                throw new Error("messageBus cannot be null");
            }
            if (!this.requestIdGenerator) {
                throw new Error("requestIdGenerator cannot be null");
            }
        }
        completionListService.prototype.getCompletionList = function (workspace, fileName, position, region) {
            return __awaiter(this, void 0, void 0, function () {
                var requestId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!workspace) {
                                throw new Error("workspace cannot be null");
                            }
                            return [4 /*yield*/, this.requestIdGenerator.getNewRequestId()];
                        case 1:
                            requestId = _a.sent();
                            throw new Error("Method not implemented.");
                    }
                });
            });
        };
        return completionListService;
    }());

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var compilationServiceStates;
    (function (compilationServiceStates) {
        compilationServiceStates[compilationServiceStates["ready"] = 0] = "ready";
        compilationServiceStates[compilationServiceStates["running"] = 1] = "running";
    })(compilationServiceStates || (compilationServiceStates = {}));
    var compilationService = /** @class */ (function () {
        function compilationService(messageBus, requestIdGenerator, serviceErrorChannel) {
            this.messageBus = messageBus;
            this.requestIdGenerator = requestIdGenerator;
            this.serviceErrorChannel = serviceErrorChannel;
            this.state = compilationServiceStates.ready;
            if (!this.messageBus) {
                throw new Error("messageBus cannot be null");
            }
            if (!this.requestIdGenerator) {
                throw new Error("requestIdGenerator cannot be null");
            }
        }
        compilationService.prototype.compile = function (workspace) {
            return __awaiter(this, void 0, void 0, function () {
                var requestId, request, ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!workspace) {
                                throw new Error("workspace cannot be null");
                            }
                            if (this.state === compilationServiceStates.running) {
                                return [2 /*return*/, this.currentCompile.request];
                            }
                            return [4 /*yield*/, this.requestIdGenerator.getNewRequestId()];
                        case 1:
                            requestId = _a.sent();
                            request = {
                                type: COMPILE_REQUEST,
                                requestId: requestId
                            };
                            ret = responseFor(this.messageBus, COMPILE_RESPONSE, requestId, function (responseMessage) {
                                var result = __assign({}, responseMessage, { succeeded: responseMessage.outcome === "Success" });
                                delete result.type;
                                delete result.outcome;
                                return result;
                            });
                            this.state = compilationServiceStates.running;
                            this.currentCompile = {
                                requestId: requestId,
                                request: ret
                            };
                            this.messageBus.post(request);
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        return compilationService;
    }());

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var executionServiceStates;
    (function (executionServiceStates) {
        executionServiceStates[executionServiceStates["ready"] = 0] = "ready";
        executionServiceStates[executionServiceStates["running"] = 1] = "running";
    })(executionServiceStates || (executionServiceStates = {}));
    var executionService = /** @class */ (function () {
        function executionService(messageBus, requestIdGenerator, serviceErrorChannel) {
            this.messageBus = messageBus;
            this.requestIdGenerator = requestIdGenerator;
            this.serviceErrorChannel = serviceErrorChannel;
            this.state = executionServiceStates.ready;
            this.outputEventChannel = new Subject();
            if (!this.messageBus) {
                throw new Error("messageBus cannot be null");
            }
            if (!this.requestIdGenerator) {
                throw new Error("requestIdGenerator cannot be null");
            }
        }
        executionService.prototype.run = function (workspace, configuration) {
            return __awaiter(this, void 0, void 0, function () {
                var requestId, request, resultChannel, serviceErrorChannel, ret;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!workspace) {
                                throw new Error("workspace cannot be null");
                            }
                            if (this.state === executionServiceStates.running) {
                                return [2 /*return*/, this.currentRun.request];
                            }
                            return [4 /*yield*/, this.requestIdGenerator.getNewRequestId()];
                        case 1:
                            requestId = _a.sent();
                            request = {
                                type: RUN_REQUEST,
                                requestId: requestId
                            };
                            if (configuration) {
                                request.parameters = JSON.parse(JSON.stringify(configuration));
                            }
                            resultChannel = this.outputEventChannel;
                            serviceErrorChannel = this.serviceErrorChannel;
                            ret = responseFor(this.messageBus, RUN_RESPONSE, requestId, function (responseMessage) {
                                var result = __assign({}, responseMessage, { succeeded: responseMessage.outcome === "Success" });
                                delete result.type;
                                delete result.outcome;
                                var event = {};
                                if (result.exception) {
                                    event.exception = result.exception;
                                }
                                if (result.output) {
                                    event.stdout = result.output;
                                }
                                resultChannel.next(event);
                                return result;
                            });
                            ret.then(function (_result) {
                                _this.state = executionServiceStates.ready;
                                _this.currentRun = null;
                            }).catch(function (_error) {
                                _this.state = executionServiceStates.ready;
                                _this.currentRun = null;
                                if (serviceErrorChannel !== null && serviceErrorChannel !== undefined && isApiMessageOfType(_error, SERVICE_ERROR_RESPONSE)) {
                                    serviceErrorChannel.next(_error);
                                }
                            });
                            this.state = executionServiceStates.running;
                            this.currentRun = {
                                requestId: requestId,
                                request: ret
                            };
                            this.messageBus.post(request);
                            return [2 /*return*/, ret];
                    }
                });
            });
        };
        executionService.prototype.subscribe = function (next, error, complete) {
            return this.outputEventChannel.subscribe(next, error, complete);
        };
        return executionService;
    }());

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var MonacoTextEditor = /** @class */ (function () {
        function MonacoTextEditor(editorApimessageBus, requestIdGenerator, editorId) {
            var _this = this;
            this.editorApimessageBus = editorApimessageBus;
            this.requestIdGenerator = requestIdGenerator;
            this.editorId = editorId;
            if (!this.editorApimessageBus) {
                throw new Error("messageBus cannot be null");
            }
            if (!this.requestIdGenerator) {
                throw new Error("requestIdGenerator cannot be null");
            }
            this.textChanges = new Subject();
            var codeChangedHandler = (function (message) {
                if (message && message.type === CODE_CHANGED_EVENT) {
                    var event_1 = {
                        text: message.sourceCode,
                        documentId: message.bufferId,
                        editorId: _this.editorId
                    };
                    _this.textChanges.next(event_1);
                }
            }).bind(this);
            this.editorApimessageBus.subscribe(codeChangedHandler);
        }
        MonacoTextEditor.prototype.id = function () {
            return this.editorId;
        };
        MonacoTextEditor.prototype.messageBus = function () {
            return this.editorApimessageBus;
        };
        MonacoTextEditor.prototype.setBufferId = function (bufferId) {
            return __awaiter(this, void 0, void 0, function () {
                var requestId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.currentbufferId = bufferId;
                            return [4 /*yield*/, this.requestIdGenerator.getNewRequestId()];
                        case 1:
                            requestId = _a.sent();
                            this.editorApimessageBus.post({
                                type: SET_ACTIVE_BUFFER_REQUEST,
                                requestId: requestId,
                                bufferId: this.currentbufferId
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        MonacoTextEditor.prototype.setContent = function (content) {
            return __awaiter(this, void 0, void 0, function () {
                var requestId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.requestIdGenerator.getNewRequestId()];
                        case 1:
                            requestId = _a.sent();
                            this.editorApimessageBus.post({
                                type: SET_EDITOR_CODE_REQUEST,
                                requestId: requestId,
                                sourceCode: content
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        MonacoTextEditor.prototype.setTheme = function (theme) {
            if (theme) {
                if (isThemeObject(theme)) {
                    this._defineTheme(theme.name, theme.monacoEditorTheme);
                    this._setTheme(theme.name);
                }
                else if (!isNullOrUndefinedOrWhitespace(theme)) {
                    this._setTheme(theme);
                }
            }
        };
        MonacoTextEditor.prototype.setOptions = function (options) {
            this.editorApimessageBus.post({
                type: CONFIGURE_MONACO_REQUEST,
                editorOptions: __assign({}, options)
            });
        };
        MonacoTextEditor.prototype.configure = function (configuration) {
            this.setOptions(configuration.options);
            this.setTheme(configuration.theme);
        };
        MonacoTextEditor.prototype._defineTheme = function (themeName, editorTheme) {
            var _a;
            var name = isNullOrUndefinedOrWhitespace(themeName) ? "trydotnetJs" : themeName;
            this.editorApimessageBus.post({
                type: DEFINE_THEMES_REQUEST,
                themes: (_a = {},
                    _a[name] = __assign({}, editorTheme),
                    _a)
            });
        };
        MonacoTextEditor.prototype._setTheme = function (themeName) {
            this.editorApimessageBus.post({
                type: CONFIGURE_MONACO_REQUEST,
                theme: themeName
            });
        };
        return MonacoTextEditor;
    }());
    function isThemeObject(theme) {
        return theme.monacoEditorTheme !== undefined;
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var Session = /** @class */ (function () {
        function Session(messageBuses) {
            var _this = this;
            this.messageBuses = messageBuses;
            this.busReady = [];
            this.runAsCodeChanges = false;
            this.serviceErrorChannel = new Subject();
            this.canRunChangedCallbacks = [];
            this.canRun = false;
            if (!this.messageBuses || this.messageBuses.length < 1) {
                throw new Error("messageBuses cannot be null and must have at least one bus");
            }
            for (var i = 0; i < this.messageBuses.length; i++) {
                this.busReady.push(false);
            }
            this.requestIdGenerator = new RequestIdGenerator(this.messageBuses[0]);
            this.signatureHelpService = new signatureHelpService(this.messageBuses[0], this.requestIdGenerator, this.serviceErrorChannel);
            this.completionListService = new completionListService(this.messageBuses[0], this.requestIdGenerator, this.serviceErrorChannel);
            this.compilationService = new compilationService(this.messageBuses[0], this.requestIdGenerator, this.serviceErrorChannel);
            this.executionService = new executionService(this.messageBuses[0], this.requestIdGenerator, this.serviceErrorChannel);
            this.textEditors = this.messageBuses.map(function (messageBus) { return new MonacoTextEditor(messageBus, _this.requestIdGenerator, messageBus.id()); });
            var textChangedHandler = (function () {
                _this.setWorkspaceIfRequired();
                if (_this.runAsCodeChanges) {
                    _this.run();
                }
            }).bind(this);
            this.mergedTextChangedEvents = new Subject();
            this.mergedTextChangedEvents.pipe(debounceTime(1000)).subscribe(function (_next) {
                textChangedHandler();
            });
        }
        Session.prototype.onCanRunChanged = function (changed) {
            if (changed) {
                changed(this.canRun);
            }
            this.canRunChangedCallbacks.push(changed);
        };
        Session.prototype.DispatchRunChanged = function (canRun) {
            if (this.canRun === canRun) {
                return;
            }
            this.canRun = canRun;
            for (var _i = 0, _a = this.canRunChangedCallbacks; _i < _a.length; _i++) {
                var callback = _a[_i];
                if (callback) {
                    callback(this.canRun);
                }
            }
        };
        Session.prototype.areBussesReady = function () {
            return this.busReady.reduce(function (prev, current) { return prev && current; }, true);
        };
        Session.prototype.requiresWorkspace = function (message) {
            if (!this.workspace) {
                throw new Error(message ? message : "workspace cannot be null");
            }
        };
        Session.prototype.setWorkspaceIfRequired = function () {
            if (this.workspace && this.workspace.isModified) {
                return this.setWorkspace();
            }
        };
        Session.prototype.setWorkspace = function () {
            return __awaiter(this, void 0, void 0, function () {
                var requestId, wsr, editorIds, _i, editorIds_1, editorId, editor, messageBus;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.workspace) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.requestIdGenerator.getNewRequestId()];
                        case 1:
                            requestId = _a.sent();
                            wsr = this.workspace.toSetWorkspaceRequests();
                            if (wsr.workspace && wsr.workspace.buffers && wsr.workspace.buffers.length > 0) {
                                editorIds = Object.getOwnPropertyNames(wsr.bufferIds);
                                for (_i = 0, editorIds_1 = editorIds; _i < editorIds_1.length; _i++) {
                                    editorId = editorIds_1[_i];
                                    editor = (this.getTextEditorById(editorId));
                                    messageBus = editor.messageBus();
                                    messageBus.post({
                                        type: SET_WORKSPACE_REQUEST,
                                        requestId: requestId,
                                        workspace: wsr.workspace,
                                        bufferId: wsr.bufferIds[editorId]
                                    });
                                }
                            }
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        Session.prototype.getTextEditor = function () {
            return this.textEditors[0];
        };
        Session.prototype.getTextEditors = function () {
            return this.textEditors;
        };
        Session.prototype.getTextEditorById = function (editorId) {
            return this.textEditors.find(function (editor) { return editor.id() === editorId; });
        };
        Session.prototype.getRequestIdGenerator = function () {
            return this.requestIdGenerator;
        };
        Session.prototype.getMessageBus = function () {
            return this.messageBuses[0];
        };
        Session.prototype.subscribeToOutputEvents = function (handler) {
            return this.executionService.subscribe(handler);
        };
        Session.prototype.subscribeToServiceErrorEvents = function (handler) {
            return this.serviceErrorChannel.subscribe(function (error) { return handler(error); });
        };
        Session.prototype.configureAndInitialize = function (configuration, initialState) {
            var _this = this;
            var configureAndInitializePromiseHandler = (function (resolve, reject) {
                if (_this.areBussesReady()) {
                    _this._configureAndInitialize(configuration, initialState)
                        .then(function () {
                        for (var _i = 0, _a = _this.textEditors; _i < _a.length; _i++) {
                            var editor = _a[_i];
                            editor.textChanges.subscribe(_this.mergedTextChangedEvents);
                        }
                        _this.setWorkspace();
                        resolve();
                    })
                        .catch(function (error) { return reject(error); });
                }
            }).bind(this);
            return new Promise(function (resolve, reject) {
                configureAndInitializePromiseHandler(resolve, reject);
                var listenerHandler = (function (message, busId) {
                    if (message.type === HOST_EDITOR_READY_EVENT) {
                        _this.busReady[busId] = true;
                        configureAndInitializePromiseHandler(resolve, reject);
                    }
                    if (message.type == HOST_RUN_READY_EVENT) {
                        _this.DispatchRunChanged(true);
                    }
                }).bind(_this);
                var _loop_1 = function (i) {
                    _this.messageBuses[i].subscribe(function (message) { return listenerHandler(message, i); });
                };
                for (var i = 0; i < _this.messageBuses.length; i++) {
                    _loop_1(i);
                }
            });
        };
        Session.prototype._configureAndInitialize = function (configuration, initialState) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, editor, _b, _c, messageBus;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (configuration.editorConfiguration) {
                                for (_i = 0, _a = this.textEditors; _i < _a.length; _i++) {
                                    editor = _a[_i];
                                    editor.configure(configuration.editorConfiguration);
                                }
                            }
                            this.runAsCodeChanges = configuration.runAsCodeChanges === true;
                            if (!initialState) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.handleInitialState(initialState)];
                        case 1:
                            _d.sent();
                            _d.label = 2;
                        case 2:
                            for (_b = 0, _c = this.messageBuses; _b < _c.length; _b++) {
                                messageBus = _c[_b];
                                messageBus.post({ type: SHOW_EDITOR_REQUEST });
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        Session.prototype.handleInitialState = function (initialState) {
            return __awaiter(this, void 0, void 0, function () {
                var loadedProject;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.handleInitialProject(initialState)];
                        case 1:
                            loadedProject = _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Session.prototype.handleInitialProject = function (initialState) {
            return __awaiter(this, void 0, void 0, function () {
                var project;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            project = initialState.project;
                            if (!project) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.openProject(project)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.handleDocumentsToInclude(initialState.documentsToInclude)];
                        case 2:
                            _a.sent();
                            if (!initialState.openDocument) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.handleInitialisationWithSingleDocument(initialState)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 4:
                            if (!initialState.openDocuments) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.handleInitialisationWithMultipleDocument(initialState)];
                        case 5:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 6: return [2 /*return*/, false];
                    }
                });
            });
        };
        Session.prototype.handleDocumentsToInclude = function (documentsToInclude) {
            var docs = [];
            if (documentsToInclude != null && documentsToInclude.length > 0) {
                for (var _i = 0, documentsToInclude_1 = documentsToInclude; _i < documentsToInclude_1.length; _i++) {
                    var documentToInclude = documentsToInclude_1[_i];
                    if (isWithRegion(documentToInclude)) {
                        if (!isNullOrUndefined(documentToInclude.content)) {
                            var parameters = {
                                fileName: documentToInclude.fileName,
                                region: documentToInclude.region,
                                content: documentToInclude.content,
                            };
                            docs.push(this.openDocument(parameters));
                        }
                    }
                }
            }
            return Promise.all(docs);
        };
        Session.prototype.generateOpenDocumentParameters = function (documentToOpen) {
            var openDocumentParameters = null;
            if (isWithRegion(documentToOpen)) {
                openDocumentParameters = {
                    fileName: documentToOpen.fileName,
                    region: documentToOpen.region
                };
                if (!isNullOrUndefined(documentToOpen.content)) {
                    openDocumentParameters.content = documentToOpen.content;
                }
            }
            else {
                openDocumentParameters = { fileName: documentToOpen };
            }
            return openDocumentParameters;
        };
        Session.prototype.handleInitialisationWithSingleDocument = function (initialState) {
            var parameters = this.generateOpenDocumentParameters(initialState.openDocument);
            parameters.editorId = this.textEditors[0].id();
            return this.openDocument(parameters);
        };
        Session.prototype.handleInitialisationWithMultipleDocument = function (initialState) {
            var editorIds = Object.getOwnPropertyNames(initialState.openDocuments);
            var docs = [];
            for (var _i = 0, editorIds_2 = editorIds; _i < editorIds_2.length; _i++) {
                var editorId = editorIds_2[_i];
                var documentToOpen = initialState.openDocuments[editorId];
                var openDocumentParameters = this.generateOpenDocumentParameters(documentToOpen);
                openDocumentParameters.editorId = editorId;
                docs.push(this.openDocument(openDocumentParameters));
            }
            return Promise.all(docs);
        };
        Session.prototype.openProject = function (project) {
            if (project) {
                this.workspace = new Workspace(this.messageBuses[0], this.requestIdGenerator);
                this.workspace.fromProject(project);
            }
            else {
                throw new Error("cannot open null project");
            }
            return Promise.resolve();
        };
        Session.prototype.openDocument = function (parameters) {
            return __awaiter(this, void 0, void 0, function () {
                var editor, document;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.requiresWorkspace("Cannot open file without loading a project first");
                            editor = isNullOrUndefinedOrWhitespace(parameters.editorId) ? undefined : (this.getTextEditorById(parameters.editorId));
                            return [4 /*yield*/, this.workspace.openDocument({
                                    fileName: parameters.fileName,
                                    region: parameters.region,
                                    content: parameters.content,
                                    textEditor: editor
                                })];
                        case 1:
                            document = _a.sent();
                            return [4 /*yield*/, this.setWorkspaceIfRequired()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, document];
                    }
                });
            });
        };
        Session.prototype.run = function (configuration) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.requiresWorkspace("Cannot run without loading a project first");
                            this.DispatchRunChanged(false);
                            return [4 /*yield*/, this.setWorkspaceIfRequired()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this.executionService.run(this.workspace, configuration).then(function (result) {
                                    _this.DispatchRunChanged(true);
                                    return result;
                                })];
                    }
                });
            });
        };
        Session.prototype.compile = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.requiresWorkspace("Cannot compile without loading a project first");
                            return [4 /*yield*/, this.setWorkspaceIfRequired()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this.compilationService.compile(this.workspace)];
                    }
                });
            });
        };
        Session.prototype.getSignatureHelp = function (fileName, position, region) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.requiresWorkspace("Cannot get SignatureHelp without loading a project first");
                            return [4 /*yield*/, this.setWorkspaceIfRequired()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this.signatureHelpService.getSignatureHelp(this.workspace, fileName, position, region)];
                    }
                });
            });
        };
        Session.prototype.getCompletionList = function (fileName, position, region) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.requiresWorkspace("Cannot get CompletionList without loading a project first");
                            return [4 /*yield*/, this.setWorkspaceIfRequired()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this.completionListService.getCompletionList(this.workspace, fileName, position, region)];
                    }
                });
            });
        };
        return Session;
    }());
    function isWithRegion(document) {
        return document.region !== undefined;
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.
    function generateEditorUrl(configuration, messageBusId, packageName) {
        var host = configuration.trydotnetOrigin ? configuration.trydotnetOrigin : "https://try.dot.net";
        var url = new URL(host);
        url.pathname = "v2/editor";
        url.searchParams.append("waitForConfiguration", "true");
        if (messageBusId) {
            url.searchParams.append("editorId", messageBusId);
        }
        if (!!configuration.debug === true) {
            url.searchParams.append("debug", "true");
        }
        if (!!configuration.useWasmRunner === true) {
            url.searchParams.append("useWasmRunner", "true");
        }
        buildQueryString(url, packageName);
        return url.href;
    }
    function buildQueryString(url, packageName) {
        if (packageName) {
            url.searchParams.append("workspaceType", packageName);
        }
    }
    function extractTargetOriginFromIFrame(iframe) {
        var origin = "";
        var src = iframe.getAttribute("src");
        if (src) {
            var url = new URL(src);
            origin = url.origin;
        }
        return origin;
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    function tryGetEditorId(iframe, defaultEditorId) {
        if (!iframe) {
            throw new Error("iframe cannot be null");
        }
        var editorId = iframe.dataset.trydotnetEditorId;
        if (isNullOrUndefinedOrWhitespace(editorId)) {
            editorId = defaultEditorId;
        }
        return editorId;
    }
    var IFrameMessageBus = /** @class */ (function () {
        function IFrameMessageBus(iframe, window, messageBusId) {
            var _this = this;
            this.iframe = iframe;
            this.window = window;
            this.messageBusId = messageBusId;
            this.isConnected = false;
            this.processMessageEvent = (function (event) {
                if (event.data && event.data.type) {
                    var message = event.data;
                    switch (message.type) {
                        case HOST_EDITOR_READY_EVENT:
                        case CODE_CHANGED_EVENT:
                            if (isNullOrUndefined(message.editorId) ||
                                message.editorId === _this.messageBusId) {
                                _this.internalChannel.next(message);
                            }
                            break;
                        default:
                            _this.internalChannel.next(message);
                            break;
                    }
                }
            }).bind(this);
            this.internalChannel = new Subject();
            if (!this.window) {
                this.window = this.iframe.contentWindow.parent;
            }
            this.window.addEventListener("message", this.processMessageEvent);
        }
        IFrameMessageBus.prototype.subscribe = function (next, error, complete) {
            return this.internalChannel.subscribe(next, error, complete);
        };
        IFrameMessageBus.prototype.dispose = function () {
            this.iframe.contentWindow.parent.removeEventListener("message", this.processMessageEvent);
            this.internalChannel.complete();
        };
        IFrameMessageBus.prototype.post = function (message) {
            if (!this.targetOrigin) {
                this.targetOrigin = extractTargetOriginFromIFrame(this.iframe);
            }
            this.iframe.contentWindow.postMessage(message, this.targetOrigin);
        };
        IFrameMessageBus.prototype.id = function () {
            return this.messageBusId;
        };
        IFrameMessageBus.prototype.targetIframe = function () {
            return this.iframe;
        };
        return IFrameMessageBus;
    }());

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    function configureEmbeddableEditorIFrame(iframe, messageBusId, configuration) {
        if (configuration) {
            var src = iframe.getAttribute("src");
            if (!src) {
                var url = generateEditorUrl(configuration, messageBusId);
                iframe.setAttribute("src", url);
            }
        }
        return iframe;
    }
    function configureEmbeddableEditorIFrameWithPackage(iframe, messageBusId, configuration, packageName) {
        if (configuration) {
            var src = iframe.getAttribute("src");
            if (!src) {
                var url = generateEditorUrl(configuration, messageBusId, packageName);
                iframe.setAttribute("src", url);
            }
        }
        return iframe;
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    function _createSession(configuration, editorIFrames, window, initialState, configureEmbeddableEditorIFrameCallBack) {
        return __awaiter(this, void 0, void 0, function () {
            var messageBuses, session, _i, messageBuses_1, messageBus, editorIFrame, src;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageBuses = editorIFrames.map(function (editorIFrame, index) { return new IFrameMessageBus(editorIFrame, window, tryGetEditorId(editorIFrame, index.toString())); });
                        session = new Session(messageBuses);
                        for (_i = 0, messageBuses_1 = messageBuses; _i < messageBuses_1.length; _i++) {
                            messageBus = messageBuses_1[_i];
                            editorIFrame = messageBus.targetIframe();
                            src = editorIFrame.getAttribute("src");
                            if (!src) {
                                configureEmbeddableEditorIFrameCallBack(editorIFrame, messageBus.id(), configuration);
                            }
                        }
                        return [4 /*yield*/, session.configureAndInitialize(configuration, initialState)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, session];
                }
            });
        });
    }
    function createSession(configuration, editorIFrames, window) {
        return _createSession(configuration, editorIFrames, window, undefined, function (editorIFrame, messageBusId, configuration) {
            configureEmbeddableEditorIFrame(editorIFrame, messageBusId, configuration);
        });
    }
    function createSessionWithPackage(configuration, editorIFrames, window, packageName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _createSession(configuration, editorIFrames, window, undefined, function (editorIFrame, messageBusId, configuration) {
                        configureEmbeddableEditorIFrameWithPackage(editorIFrame, messageBusId, configuration, packageName);
                    })];
            });
        });
    }
    function createSessionWithProject(configuration, editorIFrames, window, project, documentsToInclude) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _createSession(configuration, editorIFrames, window, { project: project, documentsToInclude: documentsToInclude }, function (editorIFrame, messageBusId, configuration) {
                        configureEmbeddableEditorIFrameWithPackage(editorIFrame, messageBusId, configuration, project.package);
                    })];
            });
        });
    }
    function createSessionWithProjectAndOpenDocument(configuration, editorIFrames, window, project, document, documentsToInclude) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _createSession(configuration, editorIFrames, window, { project: project, openDocument: document, documentsToInclude: documentsToInclude }, function (editorIFrame, messageBusId, configuration) {
                        configureEmbeddableEditorIFrameWithPackage(editorIFrame, messageBusId, configuration, project.package);
                    })];
            });
        });
    }
    function createSessionWithProjectAndOpenDocuments(configuration, editorIFrames, window, project, documents, documentsToInclude) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _createSession(configuration, editorIFrames, window, { project: project, openDocuments: documents, documentsToInclude: documentsToInclude }, function (editorIFrame, messageBusId, configuration) {
                        configureEmbeddableEditorIFrameWithPackage(editorIFrame, messageBusId, configuration, project.package);
                    })];
            });
        });
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.
    function createInstrumentationFrameNavigator(runResult, editor, outputPanel) {
        throw new Error("not implemented");
    }

    function createProject(args) {
        if (isNullOrUndefinedOrWhitespace(args.packageName)) {
            throw new Error("packageName can not be null or empty");
        }
        if (!args.files || args.files.length === 0) {
            throw new Error("at least a file is required");
        }
        var project = {
            package: args.packageName,
            files: JSON.parse(JSON.stringify(args.files))
        };
        if (isNullOrUndefinedOrWhitespace(args.language)) {
            project.language = "csharp";
        }
        else {
            project.language = args.language;
        }
        if (args.usings) {
            project.usings = JSON.parse(JSON.stringify(args.usings));
        }
        return Promise.resolve(project);
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    function createProjectFromGist(session, packageName, gistId, hash) {
        return __awaiter(this, void 0, void 0, function () {
            var internalSession, requestId, ret, request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        internalSession = session;
                        return [4 /*yield*/, internalSession.getRequestIdGenerator().getNewRequestId()];
                    case 1:
                        requestId = _a.sent();
                        ret = responseFor(internalSession.getMessageBus(), CREATE_PROJECT_RESPONSE, requestId, function (response) {
                            if (response.success) {
                                return response.project;
                            }
                            else {
                                throw new Error(response.error);
                            }
                        });
                        request = {
                            type: CREATE_PROJECT_FROM_GIST_REQUEST,
                            gistId: gistId,
                            projectTemplate: packageName,
                            commitHash: hash,
                            requestId: requestId
                        };
                        internalSession.getMessageBus().post(request);
                        return [2 /*return*/, ret];
                }
            });
        });
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.
    function createScaffoldingProject(session, packageName, scaffolding) {
        throw new Error("not implemented");
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    (function (tryDotNetModes) {
        tryDotNetModes["editor"] = "editor";
        tryDotNetModes["run"] = "run";
        tryDotNetModes["runResult"] = "runResult";
        tryDotNetModes["errorReport"] = "errorReport";
        tryDotNetModes["include"] = "include";
        tryDotNetModes["settings"] = "settings";
    })(exports.tryDotNetModes || (exports.tryDotNetModes = {}));
    (function (tryDotNetRegionInjectionPoints) {
        tryDotNetRegionInjectionPoints["before"] = "before";
        tryDotNetRegionInjectionPoints["after"] = "after";
        tryDotNetRegionInjectionPoints["replace"] = "replace";
    })(exports.tryDotNetRegionInjectionPoints || (exports.tryDotNetRegionInjectionPoints = {}));
    (function (tryDotNetVisibilityModifiers) {
        tryDotNetVisibilityModifiers["visible"] = "visible";
        tryDotNetVisibilityModifiers["hidden"] = "hidden";
    })(exports.tryDotNetVisibilityModifiers || (exports.tryDotNetVisibilityModifiers = {}));
    (function (tryDotNetOutputModes) {
        tryDotNetOutputModes["standard"] = "standard";
        tryDotNetOutputModes["terminal"] = "terminal";
    })(exports.tryDotNetOutputModes || (exports.tryDotNetOutputModes = {}));

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var EventEmitter2_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventEmitter2 = (function () {
        function EventEmitter2() {
            this._listeners = [];
        }
        Object.defineProperty(EventEmitter2.prototype, "event", {
            get: function () {
                var _this = this;
                if (!this._event) {
                    this._event = function (listener) {
                        _this._listeners.push(listener);
                        var disposable = {
                            dispose: function () {
                                for (var i = 0; i < _this._listeners.length; i++) {
                                    if (_this._listeners[i] === listener) {
                                        _this._listeners.splice(i, 1);
                                        return;
                                    }
                                }
                            }
                        };
                        return disposable;
                    };
                }
                return this._event;
            },
            enumerable: true,
            configurable: true
        });
        EventEmitter2.prototype.fire = function (data) {
            var queue = [];
            for (var i = 0; i < this._listeners.length; i++) {
                queue.push(this._listeners[i]);
            }
            for (var i = 0; i < queue.length; i++) {
                queue[i].call(undefined, data);
            }
        };
        return EventEmitter2;
    }());
    exports.EventEmitter2 = EventEmitter2;

    });

    unwrapExports(EventEmitter2_1);
    var EventEmitter2_2 = EventEmitter2_1.EventEmitter2;

    var CircularList_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    var CircularList = (function () {
        function CircularList(_maxLength) {
            this._maxLength = _maxLength;
            this.onDeleteEmitter = new EventEmitter2_1.EventEmitter2();
            this.onInsertEmitter = new EventEmitter2_1.EventEmitter2();
            this.onTrimEmitter = new EventEmitter2_1.EventEmitter2();
            this._array = new Array(this._maxLength);
            this._startIndex = 0;
            this._length = 0;
        }
        Object.defineProperty(CircularList.prototype, "onDelete", {
            get: function () { return this.onDeleteEmitter.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CircularList.prototype, "onInsert", {
            get: function () { return this.onInsertEmitter.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CircularList.prototype, "onTrim", {
            get: function () { return this.onTrimEmitter.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CircularList.prototype, "maxLength", {
            get: function () {
                return this._maxLength;
            },
            set: function (newMaxLength) {
                if (this._maxLength === newMaxLength) {
                    return;
                }
                var newArray = new Array(newMaxLength);
                for (var i = 0; i < Math.min(newMaxLength, this.length); i++) {
                    newArray[i] = this._array[this._getCyclicIndex(i)];
                }
                this._array = newArray;
                this._maxLength = newMaxLength;
                this._startIndex = 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CircularList.prototype, "length", {
            get: function () {
                return this._length;
            },
            set: function (newLength) {
                if (newLength > this._length) {
                    for (var i = this._length; i < newLength; i++) {
                        this._array[i] = undefined;
                    }
                }
                this._length = newLength;
            },
            enumerable: true,
            configurable: true
        });
        CircularList.prototype.get = function (index) {
            return this._array[this._getCyclicIndex(index)];
        };
        CircularList.prototype.set = function (index, value) {
            this._array[this._getCyclicIndex(index)] = value;
        };
        CircularList.prototype.push = function (value) {
            this._array[this._getCyclicIndex(this._length)] = value;
            if (this._length === this._maxLength) {
                this._startIndex = ++this._startIndex % this._maxLength;
                this.onTrimEmitter.fire(1);
            }
            else {
                this._length++;
            }
        };
        CircularList.prototype.recycle = function () {
            if (this._length !== this._maxLength) {
                throw new Error('Can only recycle when the buffer is full');
            }
            this._startIndex = ++this._startIndex % this._maxLength;
            this.onTrimEmitter.fire(1);
            return this._array[this._getCyclicIndex(this._length - 1)];
        };
        Object.defineProperty(CircularList.prototype, "isFull", {
            get: function () {
                return this._length === this._maxLength;
            },
            enumerable: true,
            configurable: true
        });
        CircularList.prototype.pop = function () {
            return this._array[this._getCyclicIndex(this._length-- - 1)];
        };
        CircularList.prototype.splice = function (start, deleteCount) {
            var items = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                items[_i - 2] = arguments[_i];
            }
            if (deleteCount) {
                for (var i = start; i < this._length - deleteCount; i++) {
                    this._array[this._getCyclicIndex(i)] = this._array[this._getCyclicIndex(i + deleteCount)];
                }
                this._length -= deleteCount;
            }
            for (var i = this._length - 1; i >= start; i--) {
                this._array[this._getCyclicIndex(i + items.length)] = this._array[this._getCyclicIndex(i)];
            }
            for (var i = 0; i < items.length; i++) {
                this._array[this._getCyclicIndex(start + i)] = items[i];
            }
            if (this._length + items.length > this._maxLength) {
                var countToTrim = (this._length + items.length) - this._maxLength;
                this._startIndex += countToTrim;
                this._length = this._maxLength;
                this.onTrimEmitter.fire(countToTrim);
            }
            else {
                this._length += items.length;
            }
        };
        CircularList.prototype.trimStart = function (count) {
            if (count > this._length) {
                count = this._length;
            }
            this._startIndex += count;
            this._length -= count;
            this.onTrimEmitter.fire(count);
        };
        CircularList.prototype.shiftElements = function (start, count, offset) {
            if (count <= 0) {
                return;
            }
            if (start < 0 || start >= this._length) {
                throw new Error('start argument out of range');
            }
            if (start + offset < 0) {
                throw new Error('Cannot shift elements in list beyond index 0');
            }
            if (offset > 0) {
                for (var i = count - 1; i >= 0; i--) {
                    this.set(start + i + offset, this.get(start + i));
                }
                var expandListBy = (start + count + offset) - this._length;
                if (expandListBy > 0) {
                    this._length += expandListBy;
                    while (this._length > this._maxLength) {
                        this._length--;
                        this._startIndex++;
                        this.onTrimEmitter.fire(1);
                    }
                }
            }
            else {
                for (var i = 0; i < count; i++) {
                    this.set(start + i + offset, this.get(start + i));
                }
            }
        };
        CircularList.prototype._getCyclicIndex = function (index) {
            return (this._startIndex + index) % this._maxLength;
        };
        return CircularList;
    }());
    exports.CircularList = CircularList;

    });

    unwrapExports(CircularList_1);
    var CircularList_2 = CircularList_1.CircularList;

    var TextDecoder = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var StringToUtf32 = (function () {
        function StringToUtf32() {
            this._interim = 0;
        }
        StringToUtf32.prototype.clear = function () {
            this._interim = 0;
        };
        StringToUtf32.prototype.decode = function (input, target) {
            var length = input.length;
            if (!length) {
                return 0;
            }
            var size = 0;
            var startPos = 0;
            if (this._interim) {
                var second = input.charCodeAt(startPos++);
                if (0xDC00 <= second && second <= 0xDFFF) {
                    target[size++] = (this._interim - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
                }
                else {
                    target[size++] = this._interim;
                    target[size++] = second;
                }
                this._interim = 0;
            }
            for (var i = startPos; i < length; ++i) {
                var code = input.charCodeAt(i);
                if (0xD800 <= code && code <= 0xDBFF) {
                    if (++i >= length) {
                        this._interim = code;
                        return size;
                    }
                    var second = input.charCodeAt(i);
                    if (0xDC00 <= second && second <= 0xDFFF) {
                        target[size++] = (code - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
                    }
                    else {
                        target[size++] = code;
                        target[size++] = second;
                    }
                    continue;
                }
                target[size++] = code;
            }
            return size;
        };
        return StringToUtf32;
    }());
    exports.StringToUtf32 = StringToUtf32;
    function stringFromCodePoint(codePoint) {
        if (codePoint > 0xFFFF) {
            codePoint -= 0x10000;
            return String.fromCharCode((codePoint >> 10) + 0xD800) + String.fromCharCode((codePoint % 0x400) + 0xDC00);
        }
        return String.fromCharCode(codePoint);
    }
    exports.stringFromCodePoint = stringFromCodePoint;
    function utf32ToString(data, start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = data.length; }
        var result = '';
        for (var i = start; i < end; ++i) {
            var codepoint = data[i];
            if (codepoint > 0xFFFF) {
                codepoint -= 0x10000;
                result += String.fromCharCode((codepoint >> 10) + 0xD800) + String.fromCharCode((codepoint % 0x400) + 0xDC00);
            }
            else {
                result += String.fromCharCode(codepoint);
            }
        }
        return result;
    }
    exports.utf32ToString = utf32ToString;

    });

    unwrapExports(TextDecoder);
    var TextDecoder_1 = TextDecoder.StringToUtf32;
    var TextDecoder_2 = TextDecoder.stringFromCodePoint;
    var TextDecoder_3 = TextDecoder.utf32ToString;

    var BufferLine_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });


    var CELL_SIZE = 3;
    var AttributeData = (function () {
        function AttributeData() {
            this.fg = 0;
            this.bg = 0;
        }
        AttributeData.toColorRGB = function (value) {
            return [
                value >>> 16 & 255,
                value >>> 8 & 255,
                value & 255
            ];
        };
        AttributeData.fromColorRGB = function (value) {
            return (value[0] & 255) << 16 | (value[1] & 255) << 8 | value[2] & 255;
        };
        AttributeData.prototype.clone = function () {
            var newObj = new AttributeData();
            newObj.fg = this.fg;
            newObj.bg = this.bg;
            return newObj;
        };
        AttributeData.prototype.isInverse = function () { return this.fg & 67108864; };
        AttributeData.prototype.isBold = function () { return this.fg & 134217728; };
        AttributeData.prototype.isUnderline = function () { return this.fg & 268435456; };
        AttributeData.prototype.isBlink = function () { return this.fg & 536870912; };
        AttributeData.prototype.isInvisible = function () { return this.fg & 1073741824; };
        AttributeData.prototype.isItalic = function () { return this.bg & 67108864; };
        AttributeData.prototype.isDim = function () { return this.bg & 134217728; };
        AttributeData.prototype.getFgColorMode = function () { return this.fg & 50331648; };
        AttributeData.prototype.getBgColorMode = function () { return this.bg & 50331648; };
        AttributeData.prototype.isFgRGB = function () { return (this.fg & 50331648) === 50331648; };
        AttributeData.prototype.isBgRGB = function () { return (this.bg & 50331648) === 50331648; };
        AttributeData.prototype.isFgPalette = function () { return (this.fg & 50331648) === 16777216 || (this.fg & 50331648) === 33554432; };
        AttributeData.prototype.isBgPalette = function () { return (this.bg & 50331648) === 16777216 || (this.bg & 50331648) === 33554432; };
        AttributeData.prototype.isFgDefault = function () { return (this.fg & 50331648) === 0; };
        AttributeData.prototype.isBgDefault = function () { return (this.bg & 50331648) === 0; };
        AttributeData.prototype.getFgColor = function () {
            switch (this.fg & 50331648) {
                case 16777216:
                case 33554432: return this.fg & 255;
                case 50331648: return this.fg & 16777215;
                default: return -1;
            }
        };
        AttributeData.prototype.getBgColor = function () {
            switch (this.bg & 50331648) {
                case 16777216:
                case 33554432: return this.bg & 255;
                case 50331648: return this.bg & 16777215;
                default: return -1;
            }
        };
        return AttributeData;
    }());
    exports.AttributeData = AttributeData;
    var CellData = (function (_super) {
        __extends(CellData, _super);
        function CellData() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.content = 0;
            _this.fg = 0;
            _this.bg = 0;
            _this.combinedData = '';
            return _this;
        }
        CellData.fromCharData = function (value) {
            var obj = new CellData();
            obj.setFromCharData(value);
            return obj;
        };
        CellData.prototype.isCombined = function () {
            return this.content & 2097152;
        };
        CellData.prototype.getWidth = function () {
            return this.content >> 22;
        };
        CellData.prototype.getChars = function () {
            if (this.content & 2097152) {
                return this.combinedData;
            }
            if (this.content & 2097151) {
                return TextDecoder.stringFromCodePoint(this.content & 2097151);
            }
            return '';
        };
        CellData.prototype.getCode = function () {
            return (this.isCombined())
                ? this.combinedData.charCodeAt(this.combinedData.length - 1)
                : this.content & 2097151;
        };
        CellData.prototype.setFromCharData = function (value) {
            this.fg = value[Buffer_1.CHAR_DATA_ATTR_INDEX];
            this.bg = 0;
            var combined = false;
            if (value[Buffer_1.CHAR_DATA_CHAR_INDEX].length > 2) {
                combined = true;
            }
            else if (value[Buffer_1.CHAR_DATA_CHAR_INDEX].length === 2) {
                var code = value[Buffer_1.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                if (0xD800 <= code && code <= 0xDBFF) {
                    var second = value[Buffer_1.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                    if (0xDC00 <= second && second <= 0xDFFF) {
                        this.content = ((code - 0xD800) * 0x400 + second - 0xDC00 + 0x10000) | (value[Buffer_1.CHAR_DATA_WIDTH_INDEX] << 22);
                    }
                    else {
                        combined = true;
                    }
                }
                else {
                    combined = true;
                }
            }
            else {
                this.content = value[Buffer_1.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | (value[Buffer_1.CHAR_DATA_WIDTH_INDEX] << 22);
            }
            if (combined) {
                this.combinedData = value[Buffer_1.CHAR_DATA_CHAR_INDEX];
                this.content = 2097152 | (value[Buffer_1.CHAR_DATA_WIDTH_INDEX] << 22);
            }
        };
        CellData.prototype.getAsCharData = function () {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
        };
        return CellData;
    }(AttributeData));
    exports.CellData = CellData;
    var BufferLine = (function () {
        function BufferLine(cols, fillCellData, isWrapped) {
            if (isWrapped === void 0) { isWrapped = false; }
            this.isWrapped = isWrapped;
            this._data = null;
            this._combined = {};
            if (cols) {
                this._data = new Uint32Array(cols * CELL_SIZE);
                var cell = fillCellData || CellData.fromCharData([0, Buffer_1.NULL_CELL_CHAR, Buffer_1.NULL_CELL_WIDTH, Buffer_1.NULL_CELL_CODE]);
                for (var i = 0; i < cols; ++i) {
                    this.setCell(i, cell);
                }
            }
            this.length = cols;
        }
        BufferLine.prototype.get = function (index) {
            var content = this._data[index * CELL_SIZE + 0];
            var cp = content & 2097151;
            return [
                this._data[index * CELL_SIZE + 1],
                (content & 2097152)
                    ? this._combined[index]
                    : (cp) ? TextDecoder.stringFromCodePoint(cp) : '',
                content >> 22,
                (content & 2097152)
                    ? this._combined[index].charCodeAt(this._combined[index].length - 1)
                    : cp
            ];
        };
        BufferLine.prototype.set = function (index, value) {
            this._data[index * CELL_SIZE + 1] = value[Buffer_1.CHAR_DATA_ATTR_INDEX];
            if (value[Buffer_1.CHAR_DATA_CHAR_INDEX].length > 1) {
                this._combined[index] = value[1];
                this._data[index * CELL_SIZE + 0] = index | 2097152 | (value[Buffer_1.CHAR_DATA_WIDTH_INDEX] << 22);
            }
            else {
                this._data[index * CELL_SIZE + 0] = value[Buffer_1.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | (value[Buffer_1.CHAR_DATA_WIDTH_INDEX] << 22);
            }
        };
        BufferLine.prototype.getWidth = function (index) {
            return this._data[index * CELL_SIZE + 0] >> 22;
        };
        BufferLine.prototype.hasWidth = function (index) {
            return this._data[index * CELL_SIZE + 0] & 12582912;
        };
        BufferLine.prototype.getFg = function (index) {
            return this._data[index * CELL_SIZE + 1];
        };
        BufferLine.prototype.getBg = function (index) {
            return this._data[index * CELL_SIZE + 2];
        };
        BufferLine.prototype.hasContent = function (index) {
            return this._data[index * CELL_SIZE + 0] & 4194303;
        };
        BufferLine.prototype.getCodePoint = function (index) {
            var content = this._data[index * CELL_SIZE + 0];
            if (content & 2097152) {
                return this._combined[index].charCodeAt(this._combined[index].length - 1);
            }
            return content & 2097151;
        };
        BufferLine.prototype.isCombined = function (index) {
            return this._data[index * CELL_SIZE + 0] & 2097152;
        };
        BufferLine.prototype.getString = function (index) {
            var content = this._data[index * CELL_SIZE + 0];
            if (content & 2097152) {
                return this._combined[index];
            }
            if (content & 2097151) {
                return TextDecoder.stringFromCodePoint(content & 2097151);
            }
            return '';
        };
        BufferLine.prototype.loadCell = function (index, cell) {
            var startIndex = index * CELL_SIZE;
            cell.content = this._data[startIndex + 0];
            cell.fg = this._data[startIndex + 1];
            cell.bg = this._data[startIndex + 2];
            if (cell.content & 2097152) {
                cell.combinedData = this._combined[index];
            }
            return cell;
        };
        BufferLine.prototype.setCell = function (index, cell) {
            if (cell.content & 2097152) {
                this._combined[index] = cell.combinedData;
            }
            this._data[index * CELL_SIZE + 0] = cell.content;
            this._data[index * CELL_SIZE + 1] = cell.fg;
            this._data[index * CELL_SIZE + 2] = cell.bg;
        };
        BufferLine.prototype.setCellFromCodePoint = function (index, codePoint, width, fg, bg) {
            this._data[index * CELL_SIZE + 0] = codePoint | (width << 22);
            this._data[index * CELL_SIZE + 1] = fg;
            this._data[index * CELL_SIZE + 2] = bg;
        };
        BufferLine.prototype.addCodepointToCell = function (index, codePoint) {
            var content = this._data[index * CELL_SIZE + 0];
            if (content & 2097152) {
                this._combined[index] += TextDecoder.stringFromCodePoint(codePoint);
            }
            else {
                if (content & 2097151) {
                    this._combined[index] = TextDecoder.stringFromCodePoint(content & 2097151) + TextDecoder.stringFromCodePoint(codePoint);
                    content &= ~2097151;
                    content |= 2097152;
                }
                else {
                    content = codePoint | (1 << 22);
                }
                this._data[index * CELL_SIZE + 0] = content;
            }
        };
        BufferLine.prototype.insertCells = function (pos, n, fillCellData) {
            pos %= this.length;
            if (n < this.length - pos) {
                var cell = new CellData();
                for (var i = this.length - pos - n - 1; i >= 0; --i) {
                    this.setCell(pos + n + i, this.loadCell(pos + i, cell));
                }
                for (var i = 0; i < n; ++i) {
                    this.setCell(pos + i, fillCellData);
                }
            }
            else {
                for (var i = pos; i < this.length; ++i) {
                    this.setCell(i, fillCellData);
                }
            }
        };
        BufferLine.prototype.deleteCells = function (pos, n, fillCellData) {
            pos %= this.length;
            if (n < this.length - pos) {
                var cell = new CellData();
                for (var i = 0; i < this.length - pos - n; ++i) {
                    this.setCell(pos + i, this.loadCell(pos + n + i, cell));
                }
                for (var i = this.length - n; i < this.length; ++i) {
                    this.setCell(i, fillCellData);
                }
            }
            else {
                for (var i = pos; i < this.length; ++i) {
                    this.setCell(i, fillCellData);
                }
            }
        };
        BufferLine.prototype.replaceCells = function (start, end, fillCellData) {
            while (start < end && start < this.length) {
                this.setCell(start++, fillCellData);
            }
        };
        BufferLine.prototype.resize = function (cols, fillCellData) {
            if (cols === this.length) {
                return;
            }
            if (cols > this.length) {
                var data = new Uint32Array(cols * CELL_SIZE);
                if (this.length) {
                    if (cols * CELL_SIZE < this._data.length) {
                        data.set(this._data.subarray(0, cols * CELL_SIZE));
                    }
                    else {
                        data.set(this._data);
                    }
                }
                this._data = data;
                for (var i = this.length; i < cols; ++i) {
                    this.setCell(i, fillCellData);
                }
            }
            else {
                if (cols) {
                    var data = new Uint32Array(cols * CELL_SIZE);
                    data.set(this._data.subarray(0, cols * CELL_SIZE));
                    this._data = data;
                    var keys = Object.keys(this._combined);
                    for (var i = 0; i < keys.length; i++) {
                        var key = parseInt(keys[i], 10);
                        if (key >= cols) {
                            delete this._combined[key];
                        }
                    }
                }
                else {
                    this._data = null;
                    this._combined = {};
                }
            }
            this.length = cols;
        };
        BufferLine.prototype.fill = function (fillCellData) {
            this._combined = {};
            for (var i = 0; i < this.length; ++i) {
                this.setCell(i, fillCellData);
            }
        };
        BufferLine.prototype.copyFrom = function (line) {
            if (this.length !== line.length) {
                this._data = new Uint32Array(line._data);
            }
            else {
                this._data.set(line._data);
            }
            this.length = line.length;
            this._combined = {};
            for (var el in line._combined) {
                this._combined[el] = line._combined[el];
            }
            this.isWrapped = line.isWrapped;
        };
        BufferLine.prototype.clone = function () {
            var newLine = new BufferLine(0);
            newLine._data = new Uint32Array(this._data);
            newLine.length = this.length;
            for (var el in this._combined) {
                newLine._combined[el] = this._combined[el];
            }
            newLine.isWrapped = this.isWrapped;
            return newLine;
        };
        BufferLine.prototype.getTrimmedLength = function () {
            for (var i = this.length - 1; i >= 0; --i) {
                if ((this._data[i * CELL_SIZE + 0] & 4194303)) {
                    return i + (this._data[i * CELL_SIZE + 0] >> 22);
                }
            }
            return 0;
        };
        BufferLine.prototype.copyCellsFrom = function (src, srcCol, destCol, length, applyInReverse) {
            var srcData = src._data;
            if (applyInReverse) {
                for (var cell = length - 1; cell >= 0; cell--) {
                    for (var i = 0; i < CELL_SIZE; i++) {
                        this._data[(destCol + cell) * CELL_SIZE + i] = srcData[(srcCol + cell) * CELL_SIZE + i];
                    }
                }
            }
            else {
                for (var cell = 0; cell < length; cell++) {
                    for (var i = 0; i < CELL_SIZE; i++) {
                        this._data[(destCol + cell) * CELL_SIZE + i] = srcData[(srcCol + cell) * CELL_SIZE + i];
                    }
                }
            }
            var srcCombinedKeys = Object.keys(src._combined);
            for (var i = 0; i < srcCombinedKeys.length; i++) {
                var key = parseInt(srcCombinedKeys[i], 10);
                if (key >= srcCol) {
                    this._combined[key - srcCol + destCol] = src._combined[key];
                }
            }
        };
        BufferLine.prototype.translateToString = function (trimRight, startCol, endCol) {
            if (trimRight === void 0) { trimRight = false; }
            if (startCol === void 0) { startCol = 0; }
            if (endCol === void 0) { endCol = this.length; }
            if (trimRight) {
                endCol = Math.min(endCol, this.getTrimmedLength());
            }
            var result = '';
            while (startCol < endCol) {
                var content = this._data[startCol * CELL_SIZE + 0];
                var cp = content & 2097151;
                result += (content & 2097152) ? this._combined[startCol] : (cp) ? TextDecoder.stringFromCodePoint(cp) : Buffer_1.WHITESPACE_CELL_CHAR;
                startCol += (content >> 22) || 1;
            }
            return result;
        };
        return BufferLine;
    }());
    exports.BufferLine = BufferLine;

    });

    unwrapExports(BufferLine_1);
    var BufferLine_2 = BufferLine_1.AttributeData;
    var BufferLine_3 = BufferLine_1.CellData;
    var BufferLine_4 = BufferLine_1.BufferLine;

    var BufferReflow = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function reflowLargerGetLinesToRemove(lines, oldCols, newCols, bufferAbsoluteY, nullCell) {
        var toRemove = [];
        for (var y = 0; y < lines.length - 1; y++) {
            var i = y;
            var nextLine = lines.get(++i);
            if (!nextLine.isWrapped) {
                continue;
            }
            var wrappedLines = [lines.get(y)];
            while (i < lines.length && nextLine.isWrapped) {
                wrappedLines.push(nextLine);
                nextLine = lines.get(++i);
            }
            if (bufferAbsoluteY >= y && bufferAbsoluteY < i) {
                y += wrappedLines.length - 1;
                continue;
            }
            var destLineIndex = 0;
            var destCol = getWrappedLineTrimmedLength(wrappedLines, destLineIndex, oldCols);
            var srcLineIndex = 1;
            var srcCol = 0;
            while (srcLineIndex < wrappedLines.length) {
                var srcTrimmedTineLength = getWrappedLineTrimmedLength(wrappedLines, srcLineIndex, oldCols);
                var srcRemainingCells = srcTrimmedTineLength - srcCol;
                var destRemainingCells = newCols - destCol;
                var cellsToCopy = Math.min(srcRemainingCells, destRemainingCells);
                wrappedLines[destLineIndex].copyCellsFrom(wrappedLines[srcLineIndex], srcCol, destCol, cellsToCopy, false);
                destCol += cellsToCopy;
                if (destCol === newCols) {
                    destLineIndex++;
                    destCol = 0;
                }
                srcCol += cellsToCopy;
                if (srcCol === srcTrimmedTineLength) {
                    srcLineIndex++;
                    srcCol = 0;
                }
                if (destCol === 0 && destLineIndex !== 0) {
                    if (wrappedLines[destLineIndex - 1].getWidth(newCols - 1) === 2) {
                        wrappedLines[destLineIndex].copyCellsFrom(wrappedLines[destLineIndex - 1], newCols - 1, destCol++, 1, false);
                        wrappedLines[destLineIndex - 1].setCell(newCols - 1, nullCell);
                    }
                }
            }
            wrappedLines[destLineIndex].replaceCells(destCol, newCols, nullCell);
            var countToRemove = 0;
            for (var i_1 = wrappedLines.length - 1; i_1 > 0; i_1--) {
                if (i_1 > destLineIndex || wrappedLines[i_1].getTrimmedLength() === 0) {
                    countToRemove++;
                }
                else {
                    break;
                }
            }
            if (countToRemove > 0) {
                toRemove.push(y + wrappedLines.length - countToRemove);
                toRemove.push(countToRemove);
            }
            y += wrappedLines.length - 1;
        }
        return toRemove;
    }
    exports.reflowLargerGetLinesToRemove = reflowLargerGetLinesToRemove;
    function reflowLargerCreateNewLayout(lines, toRemove) {
        var layout = [];
        var nextToRemoveIndex = 0;
        var nextToRemoveStart = toRemove[nextToRemoveIndex];
        var countRemovedSoFar = 0;
        for (var i = 0; i < lines.length; i++) {
            if (nextToRemoveStart === i) {
                var countToRemove = toRemove[++nextToRemoveIndex];
                lines.onDeleteEmitter.fire({
                    index: i - countRemovedSoFar,
                    amount: countToRemove
                });
                i += countToRemove - 1;
                countRemovedSoFar += countToRemove;
                nextToRemoveStart = toRemove[++nextToRemoveIndex];
            }
            else {
                layout.push(i);
            }
        }
        return {
            layout: layout,
            countRemoved: countRemovedSoFar
        };
    }
    exports.reflowLargerCreateNewLayout = reflowLargerCreateNewLayout;
    function reflowLargerApplyNewLayout(lines, newLayout) {
        var newLayoutLines = [];
        for (var i = 0; i < newLayout.length; i++) {
            newLayoutLines.push(lines.get(newLayout[i]));
        }
        for (var i = 0; i < newLayoutLines.length; i++) {
            lines.set(i, newLayoutLines[i]);
        }
        lines.length = newLayout.length;
    }
    exports.reflowLargerApplyNewLayout = reflowLargerApplyNewLayout;
    function reflowSmallerGetNewLineLengths(wrappedLines, oldCols, newCols) {
        var newLineLengths = [];
        var cellsNeeded = wrappedLines.map(function (l, i) { return getWrappedLineTrimmedLength(wrappedLines, i, oldCols); }).reduce(function (p, c) { return p + c; });
        var srcCol = 0;
        var srcLine = 0;
        var cellsAvailable = 0;
        while (cellsAvailable < cellsNeeded) {
            if (cellsNeeded - cellsAvailable < newCols) {
                newLineLengths.push(cellsNeeded - cellsAvailable);
                break;
            }
            srcCol += newCols;
            var oldTrimmedLength = getWrappedLineTrimmedLength(wrappedLines, srcLine, oldCols);
            if (srcCol > oldTrimmedLength) {
                srcCol -= oldTrimmedLength;
                srcLine++;
            }
            var endsWithWide = wrappedLines[srcLine].getWidth(srcCol - 1) === 2;
            if (endsWithWide) {
                srcCol--;
            }
            var lineLength = endsWithWide ? newCols - 1 : newCols;
            newLineLengths.push(lineLength);
            cellsAvailable += lineLength;
        }
        return newLineLengths;
    }
    exports.reflowSmallerGetNewLineLengths = reflowSmallerGetNewLineLengths;
    function getWrappedLineTrimmedLength(lines, i, cols) {
        if (i === lines.length - 1) {
            return lines[i].getTrimmedLength();
        }
        var endsInNull = !(lines[i].hasContent(cols - 1)) && lines[i].getWidth(cols - 1) === 1;
        var followingLineStartsWithWide = lines[i + 1].getWidth(0) === 2;
        if (endsInNull && followingLineStartsWithWide) {
            return cols - 1;
        }
        return cols;
    }
    exports.getWrappedLineTrimmedLength = getWrappedLineTrimmedLength;

    });

    unwrapExports(BufferReflow);
    var BufferReflow_1 = BufferReflow.reflowLargerGetLinesToRemove;
    var BufferReflow_2 = BufferReflow.reflowLargerCreateNewLayout;
    var BufferReflow_3 = BufferReflow.reflowLargerApplyNewLayout;
    var BufferReflow_4 = BufferReflow.reflowSmallerGetNewLineLengths;
    var BufferReflow_5 = BufferReflow.getWrappedLineTrimmedLength;

    var Types = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_COLOR = 256;
    exports.INVERTED_DEFAULT_COLOR = 257;
    exports.DIM_OPACITY = 0.5;
    exports.CHAR_ATLAS_CELL_SPACING = 1;

    });

    unwrapExports(Types);
    var Types_1 = Types.DEFAULT_COLOR;
    var Types_2 = Types.INVERTED_DEFAULT_COLOR;
    var Types_3 = Types.DIM_OPACITY;
    var Types_4 = Types.CHAR_ATLAS_CELL_SPACING;

    var Lifecycle = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var Disposable = (function () {
        function Disposable() {
            this._disposables = [];
            this._isDisposed = false;
        }
        Disposable.prototype.dispose = function () {
            this._isDisposed = true;
            this._disposables.forEach(function (d) { return d.dispose(); });
            this._disposables.length = 0;
        };
        Disposable.prototype.register = function (d) {
            this._disposables.push(d);
        };
        Disposable.prototype.unregister = function (d) {
            var index = this._disposables.indexOf(d);
            if (index !== -1) {
                this._disposables.splice(index, 1);
            }
        };
        return Disposable;
    }());
    exports.Disposable = Disposable;

    });

    unwrapExports(Lifecycle);
    var Lifecycle_1 = Lifecycle.Disposable;

    var Buffer_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });






    exports.DEFAULT_ATTR = (0 << 18) | (Types.DEFAULT_COLOR << 9) | (256 << 0);
    exports.DEFAULT_ATTR_DATA = new BufferLine_1.AttributeData();
    exports.CHAR_DATA_ATTR_INDEX = 0;
    exports.CHAR_DATA_CHAR_INDEX = 1;
    exports.CHAR_DATA_WIDTH_INDEX = 2;
    exports.CHAR_DATA_CODE_INDEX = 3;
    exports.MAX_BUFFER_SIZE = 4294967295;
    exports.NULL_CELL_CHAR = '';
    exports.NULL_CELL_WIDTH = 1;
    exports.NULL_CELL_CODE = 0;
    exports.WHITESPACE_CELL_CHAR = ' ';
    exports.WHITESPACE_CELL_WIDTH = 1;
    exports.WHITESPACE_CELL_CODE = 32;
    var Buffer = (function () {
        function Buffer(_terminal, _hasScrollback) {
            this._terminal = _terminal;
            this._hasScrollback = _hasScrollback;
            this.savedCurAttrData = exports.DEFAULT_ATTR_DATA.clone();
            this.markers = [];
            this._nullCell = BufferLine_1.CellData.fromCharData([0, exports.NULL_CELL_CHAR, exports.NULL_CELL_WIDTH, exports.NULL_CELL_CODE]);
            this._whitespaceCell = BufferLine_1.CellData.fromCharData([0, exports.WHITESPACE_CELL_CHAR, exports.WHITESPACE_CELL_WIDTH, exports.WHITESPACE_CELL_CODE]);
            this._cols = this._terminal.cols;
            this._rows = this._terminal.rows;
            this.clear();
        }
        Buffer.prototype.getNullCell = function (attr) {
            if (attr) {
                this._nullCell.fg = attr.fg;
                this._nullCell.bg = attr.bg;
            }
            else {
                this._nullCell.fg = 0;
                this._nullCell.bg = 0;
            }
            return this._nullCell;
        };
        Buffer.prototype.getWhitespaceCell = function (attr) {
            if (attr) {
                this._whitespaceCell.fg = attr.fg;
                this._whitespaceCell.bg = attr.bg;
            }
            else {
                this._whitespaceCell.fg = 0;
                this._whitespaceCell.bg = 0;
            }
            return this._whitespaceCell;
        };
        Buffer.prototype.getBlankLine = function (attr, isWrapped) {
            return new BufferLine_1.BufferLine(this._terminal.cols, this.getNullCell(attr), isWrapped);
        };
        Object.defineProperty(Buffer.prototype, "hasScrollback", {
            get: function () {
                return this._hasScrollback && this.lines.maxLength > this._rows;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Buffer.prototype, "isCursorInViewport", {
            get: function () {
                var absoluteY = this.ybase + this.y;
                var relativeY = absoluteY - this.ydisp;
                return (relativeY >= 0 && relativeY < this._rows);
            },
            enumerable: true,
            configurable: true
        });
        Buffer.prototype._getCorrectBufferLength = function (rows) {
            if (!this._hasScrollback) {
                return rows;
            }
            var correctBufferLength = rows + this._terminal.options.scrollback;
            return correctBufferLength > exports.MAX_BUFFER_SIZE ? exports.MAX_BUFFER_SIZE : correctBufferLength;
        };
        Buffer.prototype.fillViewportRows = function (fillAttr) {
            if (this.lines.length === 0) {
                if (fillAttr === undefined) {
                    fillAttr = exports.DEFAULT_ATTR_DATA;
                }
                var i = this._rows;
                while (i--) {
                    this.lines.push(this.getBlankLine(fillAttr));
                }
            }
        };
        Buffer.prototype.clear = function () {
            this.ydisp = 0;
            this.ybase = 0;
            this.y = 0;
            this.x = 0;
            this.lines = new CircularList_1.CircularList(this._getCorrectBufferLength(this._rows));
            this.scrollTop = 0;
            this.scrollBottom = this._rows - 1;
            this.setupTabStops();
        };
        Buffer.prototype.resize = function (newCols, newRows) {
            var nullCell = this.getNullCell(exports.DEFAULT_ATTR_DATA);
            var newMaxLength = this._getCorrectBufferLength(newRows);
            if (newMaxLength > this.lines.maxLength) {
                this.lines.maxLength = newMaxLength;
            }
            if (this.lines.length > 0) {
                if (this._cols < newCols) {
                    for (var i = 0; i < this.lines.length; i++) {
                        this.lines.get(i).resize(newCols, nullCell);
                    }
                }
                var addToY = 0;
                if (this._rows < newRows) {
                    for (var y = this._rows; y < newRows; y++) {
                        if (this.lines.length < newRows + this.ybase) {
                            if (this.ybase > 0 && this.lines.length <= this.ybase + this.y + addToY + 1) {
                                this.ybase--;
                                addToY++;
                                if (this.ydisp > 0) {
                                    this.ydisp--;
                                }
                            }
                            else {
                                this.lines.push(new BufferLine_1.BufferLine(newCols, nullCell));
                            }
                        }
                    }
                }
                else {
                    for (var y = this._rows; y > newRows; y--) {
                        if (this.lines.length > newRows + this.ybase) {
                            if (this.lines.length > this.ybase + this.y + 1) {
                                this.lines.pop();
                            }
                            else {
                                this.ybase++;
                                this.ydisp++;
                            }
                        }
                    }
                }
                if (newMaxLength < this.lines.maxLength) {
                    var amountToTrim = this.lines.length - newMaxLength;
                    if (amountToTrim > 0) {
                        this.lines.trimStart(amountToTrim);
                        this.ybase = Math.max(this.ybase - amountToTrim, 0);
                        this.ydisp = Math.max(this.ydisp - amountToTrim, 0);
                    }
                    this.lines.maxLength = newMaxLength;
                }
                this.x = Math.min(this.x, newCols - 1);
                this.y = Math.min(this.y, newRows - 1);
                if (addToY) {
                    this.y += addToY;
                }
                this.savedY = Math.min(this.savedY, newRows - 1);
                this.savedX = Math.min(this.savedX, newCols - 1);
                this.scrollTop = 0;
            }
            this.scrollBottom = newRows - 1;
            if (this._isReflowEnabled) {
                this._reflow(newCols, newRows);
                if (this._cols > newCols) {
                    for (var i = 0; i < this.lines.length; i++) {
                        this.lines.get(i).resize(newCols, nullCell);
                    }
                }
            }
            this._cols = newCols;
            this._rows = newRows;
        };
        Object.defineProperty(Buffer.prototype, "_isReflowEnabled", {
            get: function () {
                return this._hasScrollback && !this._terminal.options.windowsMode;
            },
            enumerable: true,
            configurable: true
        });
        Buffer.prototype._reflow = function (newCols, newRows) {
            if (this._cols === newCols) {
                return;
            }
            if (newCols > this._cols) {
                this._reflowLarger(newCols, newRows);
            }
            else {
                this._reflowSmaller(newCols, newRows);
            }
        };
        Buffer.prototype._reflowLarger = function (newCols, newRows) {
            var toRemove = BufferReflow.reflowLargerGetLinesToRemove(this.lines, this._cols, newCols, this.ybase + this.y, this.getNullCell(exports.DEFAULT_ATTR_DATA));
            if (toRemove.length > 0) {
                var newLayoutResult = BufferReflow.reflowLargerCreateNewLayout(this.lines, toRemove);
                BufferReflow.reflowLargerApplyNewLayout(this.lines, newLayoutResult.layout);
                this._reflowLargerAdjustViewport(newCols, newRows, newLayoutResult.countRemoved);
            }
        };
        Buffer.prototype._reflowLargerAdjustViewport = function (newCols, newRows, countRemoved) {
            var nullCell = this.getNullCell(exports.DEFAULT_ATTR_DATA);
            var viewportAdjustments = countRemoved;
            while (viewportAdjustments-- > 0) {
                if (this.ybase === 0) {
                    if (this.y > 0) {
                        this.y--;
                    }
                    if (this.lines.length < newRows) {
                        this.lines.push(new BufferLine_1.BufferLine(newCols, nullCell));
                    }
                }
                else {
                    if (this.ydisp === this.ybase) {
                        this.ydisp--;
                    }
                    this.ybase--;
                }
            }
        };
        Buffer.prototype._reflowSmaller = function (newCols, newRows) {
            var nullCell = this.getNullCell(exports.DEFAULT_ATTR_DATA);
            var toInsert = [];
            var countToInsert = 0;
            for (var y = this.lines.length - 1; y >= 0; y--) {
                var nextLine = this.lines.get(y);
                if (!nextLine.isWrapped && nextLine.getTrimmedLength() <= newCols) {
                    continue;
                }
                var wrappedLines = [nextLine];
                while (nextLine.isWrapped && y > 0) {
                    nextLine = this.lines.get(--y);
                    wrappedLines.unshift(nextLine);
                }
                var absoluteY = this.ybase + this.y;
                if (absoluteY >= y && absoluteY < y + wrappedLines.length) {
                    continue;
                }
                var lastLineLength = wrappedLines[wrappedLines.length - 1].getTrimmedLength();
                var destLineLengths = BufferReflow.reflowSmallerGetNewLineLengths(wrappedLines, this._cols, newCols);
                var linesToAdd = destLineLengths.length - wrappedLines.length;
                var trimmedLines = void 0;
                if (this.ybase === 0 && this.y !== this.lines.length - 1) {
                    trimmedLines = Math.max(0, this.y - this.lines.maxLength + linesToAdd);
                }
                else {
                    trimmedLines = Math.max(0, this.lines.length - this.lines.maxLength + linesToAdd);
                }
                var newLines = [];
                for (var i = 0; i < linesToAdd; i++) {
                    var newLine = this.getBlankLine(exports.DEFAULT_ATTR_DATA, true);
                    newLines.push(newLine);
                }
                if (newLines.length > 0) {
                    toInsert.push({
                        start: y + wrappedLines.length + countToInsert,
                        newLines: newLines
                    });
                    countToInsert += newLines.length;
                }
                wrappedLines.push.apply(wrappedLines, newLines);
                var destLineIndex = destLineLengths.length - 1;
                var destCol = destLineLengths[destLineIndex];
                if (destCol === 0) {
                    destLineIndex--;
                    destCol = destLineLengths[destLineIndex];
                }
                var srcLineIndex = wrappedLines.length - linesToAdd - 1;
                var srcCol = lastLineLength;
                while (srcLineIndex >= 0) {
                    var cellsToCopy = Math.min(srcCol, destCol);
                    wrappedLines[destLineIndex].copyCellsFrom(wrappedLines[srcLineIndex], srcCol - cellsToCopy, destCol - cellsToCopy, cellsToCopy, true);
                    destCol -= cellsToCopy;
                    if (destCol === 0) {
                        destLineIndex--;
                        destCol = destLineLengths[destLineIndex];
                    }
                    srcCol -= cellsToCopy;
                    if (srcCol === 0) {
                        srcLineIndex--;
                        var wrappedLinesIndex = Math.max(srcLineIndex, 0);
                        srcCol = BufferReflow.getWrappedLineTrimmedLength(wrappedLines, wrappedLinesIndex, this._cols);
                    }
                }
                for (var i = 0; i < wrappedLines.length; i++) {
                    if (destLineLengths[i] < newCols) {
                        wrappedLines[i].setCell(destLineLengths[i], nullCell);
                    }
                }
                var viewportAdjustments = linesToAdd - trimmedLines;
                while (viewportAdjustments-- > 0) {
                    if (this.ybase === 0) {
                        if (this.y < newRows - 1) {
                            this.y++;
                            this.lines.pop();
                        }
                        else {
                            this.ybase++;
                            this.ydisp++;
                        }
                    }
                    else {
                        if (this.ybase < Math.min(this.lines.maxLength, this.lines.length + countToInsert) - newRows) {
                            if (this.ybase === this.ydisp) {
                                this.ydisp++;
                            }
                            this.ybase++;
                        }
                    }
                }
            }
            if (toInsert.length > 0) {
                var insertEvents = [];
                var originalLines = [];
                for (var i = 0; i < this.lines.length; i++) {
                    originalLines.push(this.lines.get(i));
                }
                var originalLinesLength = this.lines.length;
                var originalLineIndex = originalLinesLength - 1;
                var nextToInsertIndex = 0;
                var nextToInsert = toInsert[nextToInsertIndex];
                this.lines.length = Math.min(this.lines.maxLength, this.lines.length + countToInsert);
                var countInsertedSoFar = 0;
                for (var i = Math.min(this.lines.maxLength - 1, originalLinesLength + countToInsert - 1); i >= 0; i--) {
                    if (nextToInsert && nextToInsert.start > originalLineIndex + countInsertedSoFar) {
                        for (var nextI = nextToInsert.newLines.length - 1; nextI >= 0; nextI--) {
                            this.lines.set(i--, nextToInsert.newLines[nextI]);
                        }
                        i++;
                        insertEvents.push({
                            index: originalLineIndex + 1,
                            amount: nextToInsert.newLines.length
                        });
                        countInsertedSoFar += nextToInsert.newLines.length;
                        nextToInsert = toInsert[++nextToInsertIndex];
                    }
                    else {
                        this.lines.set(i, originalLines[originalLineIndex--]);
                    }
                }
                var insertCountEmitted = 0;
                for (var i = insertEvents.length - 1; i >= 0; i--) {
                    insertEvents[i].index += insertCountEmitted;
                    this.lines.onInsertEmitter.fire(insertEvents[i]);
                    insertCountEmitted += insertEvents[i].amount;
                }
                var amountToTrim = Math.max(0, originalLinesLength + countToInsert - this.lines.maxLength);
                if (amountToTrim > 0) {
                    this.lines.onTrimEmitter.fire(amountToTrim);
                }
            }
        };
        Buffer.prototype.stringIndexToBufferIndex = function (lineIndex, stringIndex, trimRight) {
            if (trimRight === void 0) { trimRight = false; }
            while (stringIndex) {
                var line = this.lines.get(lineIndex);
                if (!line) {
                    return [-1, -1];
                }
                var length_1 = (trimRight) ? line.getTrimmedLength() : line.length;
                for (var i = 0; i < length_1; ++i) {
                    if (line.get(i)[exports.CHAR_DATA_WIDTH_INDEX]) {
                        stringIndex -= line.get(i)[exports.CHAR_DATA_CHAR_INDEX].length || 1;
                    }
                    if (stringIndex < 0) {
                        return [lineIndex, i];
                    }
                }
                lineIndex++;
            }
            return [lineIndex, 0];
        };
        Buffer.prototype.translateBufferLineToString = function (lineIndex, trimRight, startCol, endCol) {
            if (startCol === void 0) { startCol = 0; }
            var line = this.lines.get(lineIndex);
            if (!line) {
                return '';
            }
            return line.translateToString(trimRight, startCol, endCol);
        };
        Buffer.prototype.getWrappedRangeForLine = function (y) {
            var first = y;
            var last = y;
            while (first > 0 && this.lines.get(first).isWrapped) {
                first--;
            }
            while (last + 1 < this.lines.length && this.lines.get(last + 1).isWrapped) {
                last++;
            }
            return { first: first, last: last };
        };
        Buffer.prototype.setupTabStops = function (i) {
            if (i !== null && i !== undefined) {
                if (!this.tabs[i]) {
                    i = this.prevStop(i);
                }
            }
            else {
                this.tabs = {};
                i = 0;
            }
            for (; i < this._cols; i += this._terminal.options.tabStopWidth) {
                this.tabs[i] = true;
            }
        };
        Buffer.prototype.prevStop = function (x) {
            if (x === null || x === undefined) {
                x = this.x;
            }
            while (!this.tabs[--x] && x > 0)
                ;
            return x >= this._cols ? this._cols - 1 : x < 0 ? 0 : x;
        };
        Buffer.prototype.nextStop = function (x) {
            if (x === null || x === undefined) {
                x = this.x;
            }
            while (!this.tabs[++x] && x < this._cols)
                ;
            return x >= this._cols ? this._cols - 1 : x < 0 ? 0 : x;
        };
        Buffer.prototype.addMarker = function (y) {
            var _this = this;
            var marker = new Marker(y);
            this.markers.push(marker);
            marker.register(this.lines.onTrim(function (amount) {
                marker.line -= amount;
                if (marker.line < 0) {
                    marker.dispose();
                }
            }));
            marker.register(this.lines.onInsert(function (event) {
                if (marker.line >= event.index) {
                    marker.line += event.amount;
                }
            }));
            marker.register(this.lines.onDelete(function (event) {
                if (marker.line >= event.index && marker.line < event.index + event.amount) {
                    marker.dispose();
                }
                if (marker.line > event.index) {
                    marker.line -= event.amount;
                }
            }));
            marker.register(marker.onDispose(function () { return _this._removeMarker(marker); }));
            return marker;
        };
        Buffer.prototype._removeMarker = function (marker) {
            this.markers.splice(this.markers.indexOf(marker), 1);
        };
        Buffer.prototype.iterator = function (trimRight, startIndex, endIndex, startOverscan, endOverscan) {
            return new BufferStringIterator(this, trimRight, startIndex, endIndex, startOverscan, endOverscan);
        };
        return Buffer;
    }());
    exports.Buffer = Buffer;
    var Marker = (function (_super) {
        __extends(Marker, _super);
        function Marker(line) {
            var _this = _super.call(this) || this;
            _this.line = line;
            _this._id = Marker._nextId++;
            _this.isDisposed = false;
            _this._onDispose = new EventEmitter2_1.EventEmitter2();
            return _this;
        }
        Object.defineProperty(Marker.prototype, "id", {
            get: function () { return this._id; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Marker.prototype, "onDispose", {
            get: function () { return this._onDispose.event; },
            enumerable: true,
            configurable: true
        });
        Marker.prototype.dispose = function () {
            if (this.isDisposed) {
                return;
            }
            this.isDisposed = true;
            this._onDispose.fire();
        };
        Marker._nextId = 1;
        return Marker;
    }(Lifecycle.Disposable));
    exports.Marker = Marker;
    var BufferStringIterator = (function () {
        function BufferStringIterator(_buffer, _trimRight, _startIndex, _endIndex, _startOverscan, _endOverscan) {
            if (_startIndex === void 0) { _startIndex = 0; }
            if (_endIndex === void 0) { _endIndex = _buffer.lines.length; }
            if (_startOverscan === void 0) { _startOverscan = 0; }
            if (_endOverscan === void 0) { _endOverscan = 0; }
            this._buffer = _buffer;
            this._trimRight = _trimRight;
            this._startIndex = _startIndex;
            this._endIndex = _endIndex;
            this._startOverscan = _startOverscan;
            this._endOverscan = _endOverscan;
            if (this._startIndex < 0) {
                this._startIndex = 0;
            }
            if (this._endIndex > this._buffer.lines.length) {
                this._endIndex = this._buffer.lines.length;
            }
            this._current = this._startIndex;
        }
        BufferStringIterator.prototype.hasNext = function () {
            return this._current < this._endIndex;
        };
        BufferStringIterator.prototype.next = function () {
            var range = this._buffer.getWrappedRangeForLine(this._current);
            if (range.first < this._startIndex - this._startOverscan) {
                range.first = this._startIndex - this._startOverscan;
            }
            if (range.last > this._endIndex + this._endOverscan) {
                range.last = this._endIndex + this._endOverscan;
            }
            range.first = Math.max(range.first, 0);
            range.last = Math.min(range.last, this._buffer.lines.length);
            var result = '';
            for (var i = range.first; i <= range.last; ++i) {
                result += this._buffer.translateBufferLineToString(i, this._trimRight);
            }
            this._current = range.last + 1;
            return { range: range, content: result };
        };
        return BufferStringIterator;
    }());
    exports.BufferStringIterator = BufferStringIterator;

    });

    unwrapExports(Buffer_1);
    var Buffer_2 = Buffer_1.DEFAULT_ATTR;
    var Buffer_3 = Buffer_1.DEFAULT_ATTR_DATA;
    var Buffer_4 = Buffer_1.CHAR_DATA_ATTR_INDEX;
    var Buffer_5 = Buffer_1.CHAR_DATA_CHAR_INDEX;
    var Buffer_6 = Buffer_1.CHAR_DATA_WIDTH_INDEX;
    var Buffer_7 = Buffer_1.CHAR_DATA_CODE_INDEX;
    var Buffer_8 = Buffer_1.MAX_BUFFER_SIZE;
    var Buffer_9 = Buffer_1.NULL_CELL_CHAR;
    var Buffer_10 = Buffer_1.NULL_CELL_WIDTH;
    var Buffer_11 = Buffer_1.NULL_CELL_CODE;
    var Buffer_12 = Buffer_1.WHITESPACE_CELL_CHAR;
    var Buffer_13 = Buffer_1.WHITESPACE_CELL_WIDTH;
    var Buffer_14 = Buffer_1.WHITESPACE_CELL_CODE;
    var Buffer_15 = Buffer_1.Buffer;
    var Buffer_16 = Buffer_1.Marker;
    var Buffer_17 = Buffer_1.BufferStringIterator;

    var BufferSet_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    var BufferSet = (function () {
        function BufferSet(_terminal) {
            this._terminal = _terminal;
            this._onBufferActivate = new EventEmitter2_1.EventEmitter2();
            this._normal = new Buffer_1.Buffer(this._terminal, true);
            this._normal.fillViewportRows();
            this._alt = new Buffer_1.Buffer(this._terminal, false);
            this._activeBuffer = this._normal;
            this.setupTabStops();
        }
        Object.defineProperty(BufferSet.prototype, "onBufferActivate", {
            get: function () { return this._onBufferActivate.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BufferSet.prototype, "alt", {
            get: function () {
                return this._alt;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BufferSet.prototype, "active", {
            get: function () {
                return this._activeBuffer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BufferSet.prototype, "normal", {
            get: function () {
                return this._normal;
            },
            enumerable: true,
            configurable: true
        });
        BufferSet.prototype.activateNormalBuffer = function () {
            if (this._activeBuffer === this._normal) {
                return;
            }
            this._normal.x = this._alt.x;
            this._normal.y = this._alt.y;
            this._alt.clear();
            this._activeBuffer = this._normal;
            this._onBufferActivate.fire({
                activeBuffer: this._normal,
                inactiveBuffer: this._alt
            });
        };
        BufferSet.prototype.activateAltBuffer = function (fillAttr) {
            if (this._activeBuffer === this._alt) {
                return;
            }
            this._alt.fillViewportRows(fillAttr);
            this._alt.x = this._normal.x;
            this._alt.y = this._normal.y;
            this._activeBuffer = this._alt;
            this._onBufferActivate.fire({
                activeBuffer: this._alt,
                inactiveBuffer: this._normal
            });
        };
        BufferSet.prototype.resize = function (newCols, newRows) {
            this._normal.resize(newCols, newRows);
            this._alt.resize(newCols, newRows);
        };
        BufferSet.prototype.setupTabStops = function (i) {
            this._normal.setupTabStops(i);
            this._alt.setupTabStops(i);
        };
        return BufferSet;
    }());
    exports.BufferSet = BufferSet;

    });

    unwrapExports(BufferSet_1);
    var BufferSet_2 = BufferSet_1.BufferSet;

    var CompositionHelper_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var CompositionHelper = (function () {
        function CompositionHelper(_textarea, _compositionView, _terminal) {
            this._textarea = _textarea;
            this._compositionView = _compositionView;
            this._terminal = _terminal;
            this._isComposing = false;
            this._isSendingComposition = false;
            this._compositionPosition = { start: null, end: null };
        }
        CompositionHelper.prototype.compositionstart = function () {
            this._isComposing = true;
            this._compositionPosition.start = this._textarea.value.length;
            this._compositionView.textContent = '';
            this._compositionView.classList.add('active');
        };
        CompositionHelper.prototype.compositionupdate = function (ev) {
            var _this = this;
            this._compositionView.textContent = ev.data;
            this.updateCompositionElements();
            setTimeout(function () {
                _this._compositionPosition.end = _this._textarea.value.length;
            }, 0);
        };
        CompositionHelper.prototype.compositionend = function () {
            this._finalizeComposition(true);
        };
        CompositionHelper.prototype.keydown = function (ev) {
            if (this._isComposing || this._isSendingComposition) {
                if (ev.keyCode === 229) {
                    return false;
                }
                else if (ev.keyCode === 16 || ev.keyCode === 17 || ev.keyCode === 18) {
                    return false;
                }
                this._finalizeComposition(false);
            }
            if (ev.keyCode === 229) {
                this._handleAnyTextareaChanges();
                return false;
            }
            return true;
        };
        CompositionHelper.prototype._finalizeComposition = function (waitForPropagation) {
            var _this = this;
            this._compositionView.classList.remove('active');
            this._isComposing = false;
            this._clearTextareaPosition();
            if (!waitForPropagation) {
                this._isSendingComposition = false;
                var input = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                this._terminal.handler(input);
            }
            else {
                var currentCompositionPosition_1 = {
                    start: this._compositionPosition.start,
                    end: this._compositionPosition.end
                };
                this._isSendingComposition = true;
                setTimeout(function () {
                    if (_this._isSendingComposition) {
                        _this._isSendingComposition = false;
                        var input = void 0;
                        if (_this._isComposing) {
                            input = _this._textarea.value.substring(currentCompositionPosition_1.start, currentCompositionPosition_1.end);
                        }
                        else {
                            input = _this._textarea.value.substring(currentCompositionPosition_1.start);
                        }
                        _this._terminal.handler(input);
                    }
                }, 0);
            }
        };
        CompositionHelper.prototype._handleAnyTextareaChanges = function () {
            var _this = this;
            var oldValue = this._textarea.value;
            setTimeout(function () {
                if (!_this._isComposing) {
                    var newValue = _this._textarea.value;
                    var diff = newValue.replace(oldValue, '');
                    if (diff.length > 0) {
                        _this._terminal.handler(diff);
                    }
                }
            }, 0);
        };
        CompositionHelper.prototype.updateCompositionElements = function (dontRecurse) {
            var _this = this;
            if (!this._isComposing) {
                return;
            }
            if (this._terminal.buffer.isCursorInViewport) {
                var cellHeight = Math.ceil(this._terminal.charMeasure.height * this._terminal.options.lineHeight);
                var cursorTop = this._terminal.buffer.y * cellHeight;
                var cursorLeft = this._terminal.buffer.x * this._terminal.charMeasure.width;
                this._compositionView.style.left = cursorLeft + 'px';
                this._compositionView.style.top = cursorTop + 'px';
                this._compositionView.style.height = cellHeight + 'px';
                this._compositionView.style.lineHeight = cellHeight + 'px';
                this._compositionView.style.fontFamily = this._terminal.options.fontFamily;
                this._compositionView.style.fontSize = this._terminal.options.fontSize + 'px';
                var compositionViewBounds = this._compositionView.getBoundingClientRect();
                this._textarea.style.left = cursorLeft + 'px';
                this._textarea.style.top = cursorTop + 'px';
                this._textarea.style.width = compositionViewBounds.width + 'px';
                this._textarea.style.height = compositionViewBounds.height + 'px';
                this._textarea.style.lineHeight = compositionViewBounds.height + 'px';
            }
            if (!dontRecurse) {
                setTimeout(function () { return _this.updateCompositionElements(true); }, 0);
            }
        };
        CompositionHelper.prototype._clearTextareaPosition = function () {
            this._textarea.style.left = '';
            this._textarea.style.top = '';
        };
        return CompositionHelper;
    }());
    exports.CompositionHelper = CompositionHelper;

    });

    unwrapExports(CompositionHelper_1);
    var CompositionHelper_2 = CompositionHelper_1.CompositionHelper;

    var EventEmitter_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });

    var EventEmitter = (function (_super) {
        __extends(EventEmitter, _super);
        function EventEmitter() {
            var _this = _super.call(this) || this;
            _this._events = _this._events || {};
            return _this;
        }
        EventEmitter.prototype.on = function (type, listener) {
            this._events[type] = this._events[type] || [];
            this._events[type].push(listener);
        };
        EventEmitter.prototype.addDisposableListener = function (type, handler) {
            var _this = this;
            this.on(type, handler);
            var disposed = false;
            return {
                dispose: function () {
                    if (disposed) {
                        return;
                    }
                    _this.off(type, handler);
                    disposed = true;
                }
            };
        };
        EventEmitter.prototype.off = function (type, listener) {
            if (!this._events[type]) {
                return;
            }
            var obj = this._events[type];
            var i = obj.length;
            while (i--) {
                if (obj[i] === listener) {
                    obj.splice(i, 1);
                    return;
                }
            }
        };
        EventEmitter.prototype.removeAllListeners = function (type) {
            if (this._events[type]) {
                delete this._events[type];
            }
        };
        EventEmitter.prototype.emit = function (type) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!this._events[type]) {
                return;
            }
            var obj = this._events[type];
            for (var i = 0; i < obj.length; i++) {
                obj[i].apply(this, args);
            }
        };
        EventEmitter.prototype.emitMayRemoveListeners = function (type) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!this._events[type]) {
                return;
            }
            var obj = this._events[type];
            var length = obj.length;
            for (var i = 0; i < obj.length; i++) {
                obj[i].apply(this, args);
                i -= length - obj.length;
                length = obj.length;
            }
        };
        EventEmitter.prototype.listeners = function (type) {
            return this._events[type] || [];
        };
        EventEmitter.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this._events = {};
        };
        return EventEmitter;
    }(Lifecycle.Disposable));
    exports.EventEmitter = EventEmitter;

    });

    unwrapExports(EventEmitter_1);
    var EventEmitter_2 = EventEmitter_1.EventEmitter;

    var Lifecycle$2 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function addDisposableDomListener(node, type, handler, useCapture) {
        node.addEventListener(type, handler, useCapture);
        return {
            dispose: function () {
                if (!handler) {
                    return;
                }
                node.removeEventListener(type, handler, useCapture);
            }
        };
    }
    exports.addDisposableDomListener = addDisposableDomListener;

    });

    unwrapExports(Lifecycle$2);
    var Lifecycle_1$1 = Lifecycle$2.addDisposableDomListener;

    var Viewport_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });


    var FALLBACK_SCROLL_BAR_WIDTH = 15;
    var Viewport = (function (_super) {
        __extends(Viewport, _super);
        function Viewport(_terminal, _viewportElement, _scrollArea, _charMeasure) {
            var _this = _super.call(this) || this;
            _this._terminal = _terminal;
            _this._viewportElement = _viewportElement;
            _this._scrollArea = _scrollArea;
            _this._charMeasure = _charMeasure;
            _this.scrollBarWidth = 0;
            _this._currentRowHeight = 0;
            _this._lastRecordedBufferLength = 0;
            _this._lastRecordedViewportHeight = 0;
            _this._lastRecordedBufferHeight = 0;
            _this._lastScrollTop = 0;
            _this._wheelPartialScroll = 0;
            _this._refreshAnimationFrame = null;
            _this._ignoreNextScrollEvent = false;
            _this.scrollBarWidth = (_this._viewportElement.offsetWidth - _this._scrollArea.offsetWidth) || FALLBACK_SCROLL_BAR_WIDTH;
            _this.register(Lifecycle$2.addDisposableDomListener(_this._viewportElement, 'scroll', _this._onScroll.bind(_this)));
            setTimeout(function () { return _this.syncScrollArea(); }, 0);
            return _this;
        }
        Viewport.prototype.onThemeChanged = function (colors) {
            this._viewportElement.style.backgroundColor = colors.background.css;
        };
        Viewport.prototype._refresh = function () {
            var _this = this;
            if (this._refreshAnimationFrame === null) {
                this._refreshAnimationFrame = requestAnimationFrame(function () { return _this._innerRefresh(); });
            }
        };
        Viewport.prototype._innerRefresh = function () {
            if (this._charMeasure.height > 0) {
                this._currentRowHeight = this._terminal.renderer.dimensions.scaledCellHeight / window.devicePixelRatio;
                this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                var newBufferHeight = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._terminal.renderer.dimensions.canvasHeight);
                if (this._lastRecordedBufferHeight !== newBufferHeight) {
                    this._lastRecordedBufferHeight = newBufferHeight;
                    this._scrollArea.style.height = this._lastRecordedBufferHeight + 'px';
                }
            }
            var scrollTop = this._terminal.buffer.ydisp * this._currentRowHeight;
            if (this._viewportElement.scrollTop !== scrollTop) {
                this._ignoreNextScrollEvent = true;
                this._viewportElement.scrollTop = scrollTop;
            }
            this._refreshAnimationFrame = null;
        };
        Viewport.prototype.syncScrollArea = function () {
            if (this._lastRecordedBufferLength !== this._terminal.buffer.lines.length) {
                this._lastRecordedBufferLength = this._terminal.buffer.lines.length;
                this._refresh();
                return;
            }
            if (this._lastRecordedViewportHeight !== this._terminal.renderer.dimensions.canvasHeight) {
                this._refresh();
                return;
            }
            var newScrollTop = this._terminal.buffer.ydisp * this._currentRowHeight;
            if (this._lastScrollTop !== newScrollTop) {
                this._refresh();
                return;
            }
            if (this._lastScrollTop !== this._viewportElement.scrollTop) {
                this._refresh();
                return;
            }
            if (this._terminal.renderer.dimensions.scaledCellHeight / window.devicePixelRatio !== this._currentRowHeight) {
                this._refresh();
                return;
            }
        };
        Viewport.prototype._onScroll = function (ev) {
            this._lastScrollTop = this._viewportElement.scrollTop;
            if (!this._viewportElement.offsetParent) {
                return;
            }
            if (this._ignoreNextScrollEvent) {
                this._ignoreNextScrollEvent = false;
                return;
            }
            var newRow = Math.round(this._lastScrollTop / this._currentRowHeight);
            var diff = newRow - this._terminal.buffer.ydisp;
            this._terminal.scrollLines(diff, true);
        };
        Viewport.prototype.onWheel = function (ev) {
            var amount = this._getPixelsScrolled(ev);
            if (amount === 0) {
                return;
            }
            this._viewportElement.scrollTop += amount;
            ev.preventDefault();
        };
        Viewport.prototype._getPixelsScrolled = function (ev) {
            if (ev.deltaY === 0) {
                return 0;
            }
            var amount = ev.deltaY;
            if (ev.deltaMode === WheelEvent.DOM_DELTA_LINE) {
                amount *= this._currentRowHeight;
            }
            else if (ev.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
                amount *= this._currentRowHeight * this._terminal.rows;
            }
            return amount;
        };
        Viewport.prototype.getLinesScrolled = function (ev) {
            if (ev.deltaY === 0) {
                return 0;
            }
            var amount = ev.deltaY;
            if (ev.deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
                amount /= this._currentRowHeight + 0.0;
                this._wheelPartialScroll += amount;
                amount = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1);
                this._wheelPartialScroll %= 1;
            }
            else if (ev.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
                amount *= this._terminal.rows;
            }
            return amount;
        };
        Viewport.prototype.onTouchStart = function (ev) {
            this._lastTouchY = ev.touches[0].pageY;
        };
        Viewport.prototype.onTouchMove = function (ev) {
            var deltaY = this._lastTouchY - ev.touches[0].pageY;
            this._lastTouchY = ev.touches[0].pageY;
            if (deltaY === 0) {
                return;
            }
            this._viewportElement.scrollTop += deltaY;
            ev.preventDefault();
        };
        return Viewport;
    }(Lifecycle.Disposable));
    exports.Viewport = Viewport;

    });

    unwrapExports(Viewport_1);
    var Viewport_2 = Viewport_1.Viewport;

    var Clipboard = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function prepareTextForTerminal(text) {
        return text.replace(/\r?\n/g, '\r');
    }
    exports.prepareTextForTerminal = prepareTextForTerminal;
    function bracketTextForPaste(text, bracketedPasteMode) {
        if (bracketedPasteMode) {
            return '\x1b[200~' + text + '\x1b[201~';
        }
        return text;
    }
    exports.bracketTextForPaste = bracketTextForPaste;
    function copyHandler(ev, term, selectionManager) {
        if (term.browser.isMSIE) {
            window.clipboardData.setData('Text', selectionManager.selectionText);
        }
        else {
            ev.clipboardData.setData('text/plain', selectionManager.selectionText);
        }
        ev.preventDefault();
    }
    exports.copyHandler = copyHandler;
    function pasteHandler(ev, term) {
        ev.stopPropagation();
        var text;
        var dispatchPaste = function (text) {
            text = prepareTextForTerminal(text);
            text = bracketTextForPaste(text, term.bracketedPasteMode);
            term.handler(text);
            term.textarea.value = '';
            term.emit('paste', text);
            term.cancel(ev);
        };
        if (term.browser.isMSIE) {
            if (window.clipboardData) {
                text = window.clipboardData.getData('Text');
                dispatchPaste(text);
            }
        }
        else {
            if (ev.clipboardData) {
                text = ev.clipboardData.getData('text/plain');
                dispatchPaste(text);
            }
        }
    }
    exports.pasteHandler = pasteHandler;
    function moveTextAreaUnderMouseCursor(ev, term) {
        var pos = term.screenElement.getBoundingClientRect();
        var left = ev.clientX - pos.left - 10;
        var top = ev.clientY - pos.top - 10;
        term.textarea.style.position = 'absolute';
        term.textarea.style.width = '20px';
        term.textarea.style.height = '20px';
        term.textarea.style.left = left + "px";
        term.textarea.style.top = top + "px";
        term.textarea.style.zIndex = '1000';
        term.textarea.focus();
        setTimeout(function () {
            term.textarea.style.position = null;
            term.textarea.style.width = null;
            term.textarea.style.height = null;
            term.textarea.style.left = null;
            term.textarea.style.top = null;
            term.textarea.style.zIndex = null;
        }, 200);
    }
    exports.moveTextAreaUnderMouseCursor = moveTextAreaUnderMouseCursor;
    function rightClickHandler(ev, term, selectionManager, shouldSelectWord) {
        moveTextAreaUnderMouseCursor(ev, term);
        if (shouldSelectWord && !selectionManager.isClickInSelection(ev)) {
            selectionManager.selectWordAtCursor(ev);
        }
        term.textarea.value = selectionManager.selectionText;
        term.textarea.select();
    }
    exports.rightClickHandler = rightClickHandler;

    });

    unwrapExports(Clipboard);
    var Clipboard_1 = Clipboard.prepareTextForTerminal;
    var Clipboard_2 = Clipboard.bracketTextForPaste;
    var Clipboard_3 = Clipboard.copyHandler;
    var Clipboard_4 = Clipboard.pasteHandler;
    var Clipboard_5 = Clipboard.moveTextAreaUnderMouseCursor;
    var Clipboard_6 = Clipboard.rightClickHandler;

    var EscapeSequences = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var C0;
    (function (C0) {
        C0.NUL = '\x00';
        C0.SOH = '\x01';
        C0.STX = '\x02';
        C0.ETX = '\x03';
        C0.EOT = '\x04';
        C0.ENQ = '\x05';
        C0.ACK = '\x06';
        C0.BEL = '\x07';
        C0.BS = '\x08';
        C0.HT = '\x09';
        C0.LF = '\x0a';
        C0.VT = '\x0b';
        C0.FF = '\x0c';
        C0.CR = '\x0d';
        C0.SO = '\x0e';
        C0.SI = '\x0f';
        C0.DLE = '\x10';
        C0.DC1 = '\x11';
        C0.DC2 = '\x12';
        C0.DC3 = '\x13';
        C0.DC4 = '\x14';
        C0.NAK = '\x15';
        C0.SYN = '\x16';
        C0.ETB = '\x17';
        C0.CAN = '\x18';
        C0.EM = '\x19';
        C0.SUB = '\x1a';
        C0.ESC = '\x1b';
        C0.FS = '\x1c';
        C0.GS = '\x1d';
        C0.RS = '\x1e';
        C0.US = '\x1f';
        C0.SP = '\x20';
        C0.DEL = '\x7f';
    })(C0 = exports.C0 || (exports.C0 = {}));
    var C1;
    (function (C1) {
        C1.PAD = '\x80';
        C1.HOP = '\x81';
        C1.BPH = '\x82';
        C1.NBH = '\x83';
        C1.IND = '\x84';
        C1.NEL = '\x85';
        C1.SSA = '\x86';
        C1.ESA = '\x87';
        C1.HTS = '\x88';
        C1.HTJ = '\x89';
        C1.VTS = '\x8a';
        C1.PLD = '\x8b';
        C1.PLU = '\x8c';
        C1.RI = '\x8d';
        C1.SS2 = '\x8e';
        C1.SS3 = '\x8f';
        C1.DCS = '\x90';
        C1.PU1 = '\x91';
        C1.PU2 = '\x92';
        C1.STS = '\x93';
        C1.CCH = '\x94';
        C1.MW = '\x95';
        C1.SPA = '\x96';
        C1.EPA = '\x97';
        C1.SOS = '\x98';
        C1.SGCI = '\x99';
        C1.SCI = '\x9a';
        C1.CSI = '\x9b';
        C1.ST = '\x9c';
        C1.OSC = '\x9d';
        C1.PM = '\x9e';
        C1.APC = '\x9f';
    })(C1 = exports.C1 || (exports.C1 = {}));

    });

    unwrapExports(EscapeSequences);
    var EscapeSequences_1 = EscapeSequences.C0;
    var EscapeSequences_2 = EscapeSequences.C1;

    var Charsets = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHARSETS = {};
    exports.DEFAULT_CHARSET = exports.CHARSETS['B'];
    exports.CHARSETS['0'] = {
        '`': '\u25c6',
        'a': '\u2592',
        'b': '\u0009',
        'c': '\u000c',
        'd': '\u000d',
        'e': '\u000a',
        'f': '\u00b0',
        'g': '\u00b1',
        'h': '\u2424',
        'i': '\u000b',
        'j': '\u2518',
        'k': '\u2510',
        'l': '\u250c',
        'm': '\u2514',
        'n': '\u253c',
        'o': '\u23ba',
        'p': '\u23bb',
        'q': '\u2500',
        'r': '\u23bc',
        's': '\u23bd',
        't': '\u251c',
        'u': '\u2524',
        'v': '\u2534',
        'w': '\u252c',
        'x': '\u2502',
        'y': '\u2264',
        'z': '\u2265',
        '{': '\u03c0',
        '|': '\u2260',
        '}': '\u00a3',
        '~': '\u00b7'
    };
    exports.CHARSETS['A'] = {
        '#': '£'
    };
    exports.CHARSETS['B'] = null;
    exports.CHARSETS['4'] = {
        '#': '£',
        '@': '¾',
        '[': 'ij',
        '\\': '½',
        ']': '|',
        '{': '¨',
        '|': 'f',
        '}': '¼',
        '~': '´'
    };
    exports.CHARSETS['C'] =
        exports.CHARSETS['5'] = {
            '[': 'Ä',
            '\\': 'Ö',
            ']': 'Å',
            '^': 'Ü',
            '`': 'é',
            '{': 'ä',
            '|': 'ö',
            '}': 'å',
            '~': 'ü'
        };
    exports.CHARSETS['R'] = {
        '#': '£',
        '@': 'à',
        '[': '°',
        '\\': 'ç',
        ']': '§',
        '{': 'é',
        '|': 'ù',
        '}': 'è',
        '~': '¨'
    };
    exports.CHARSETS['Q'] = {
        '@': 'à',
        '[': 'â',
        '\\': 'ç',
        ']': 'ê',
        '^': 'î',
        '`': 'ô',
        '{': 'é',
        '|': 'ù',
        '}': 'è',
        '~': 'û'
    };
    exports.CHARSETS['K'] = {
        '@': '§',
        '[': 'Ä',
        '\\': 'Ö',
        ']': 'Ü',
        '{': 'ä',
        '|': 'ö',
        '}': 'ü',
        '~': 'ß'
    };
    exports.CHARSETS['Y'] = {
        '#': '£',
        '@': '§',
        '[': '°',
        '\\': 'ç',
        ']': 'é',
        '`': 'ù',
        '{': 'à',
        '|': 'ò',
        '}': 'è',
        '~': 'ì'
    };
    exports.CHARSETS['E'] =
        exports.CHARSETS['6'] = {
            '@': 'Ä',
            '[': 'Æ',
            '\\': 'Ø',
            ']': 'Å',
            '^': 'Ü',
            '`': 'ä',
            '{': 'æ',
            '|': 'ø',
            '}': 'å',
            '~': 'ü'
        };
    exports.CHARSETS['Z'] = {
        '#': '£',
        '@': '§',
        '[': '¡',
        '\\': 'Ñ',
        ']': '¿',
        '{': '°',
        '|': 'ñ',
        '}': 'ç'
    };
    exports.CHARSETS['H'] =
        exports.CHARSETS['7'] = {
            '@': 'É',
            '[': 'Ä',
            '\\': 'Ö',
            ']': 'Å',
            '^': 'Ü',
            '`': 'é',
            '{': 'ä',
            '|': 'ö',
            '}': 'å',
            '~': 'ü'
        };
    exports.CHARSETS['='] = {
        '#': 'ù',
        '@': 'à',
        '[': 'é',
        '\\': 'ç',
        ']': 'ê',
        '^': 'î',
        '_': 'è',
        '`': 'ô',
        '{': 'ä',
        '|': 'ö',
        '}': 'ü',
        '~': 'û'
    };

    });

    unwrapExports(Charsets);
    var Charsets_1 = Charsets.CHARSETS;
    var Charsets_2 = Charsets.DEFAULT_CHARSET;

    var TypedArrayUtils = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function fill(array, value, start, end) {
        if (array.fill) {
            return array.fill(value, start, end);
        }
        return fillFallback(array, value, start, end);
    }
    exports.fill = fill;
    function fillFallback(array, value, start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = array.length; }
        if (start >= array.length) {
            return array;
        }
        start = (array.length + start) % array.length;
        if (end >= array.length) {
            end = array.length;
        }
        else {
            end = (array.length + end) % array.length;
        }
        for (var i = start; i < end; ++i) {
            array[i] = value;
        }
        return array;
    }
    exports.fillFallback = fillFallback;
    function concat(a, b) {
        var result = new a.constructor(a.length + b.length);
        result.set(a);
        result.set(b, a.length);
        return result;
    }
    exports.concat = concat;

    });

    unwrapExports(TypedArrayUtils);
    var TypedArrayUtils_1 = TypedArrayUtils.fill;
    var TypedArrayUtils_2 = TypedArrayUtils.fillFallback;
    var TypedArrayUtils_3 = TypedArrayUtils.concat;

    var CharWidth = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    exports.wcwidth = (function (opts) {
        var COMBINING_BMP = [
            [0x0300, 0x036F], [0x0483, 0x0486], [0x0488, 0x0489],
            [0x0591, 0x05BD], [0x05BF, 0x05BF], [0x05C1, 0x05C2],
            [0x05C4, 0x05C5], [0x05C7, 0x05C7], [0x0600, 0x0603],
            [0x0610, 0x0615], [0x064B, 0x065E], [0x0670, 0x0670],
            [0x06D6, 0x06E4], [0x06E7, 0x06E8], [0x06EA, 0x06ED],
            [0x070F, 0x070F], [0x0711, 0x0711], [0x0730, 0x074A],
            [0x07A6, 0x07B0], [0x07EB, 0x07F3], [0x0901, 0x0902],
            [0x093C, 0x093C], [0x0941, 0x0948], [0x094D, 0x094D],
            [0x0951, 0x0954], [0x0962, 0x0963], [0x0981, 0x0981],
            [0x09BC, 0x09BC], [0x09C1, 0x09C4], [0x09CD, 0x09CD],
            [0x09E2, 0x09E3], [0x0A01, 0x0A02], [0x0A3C, 0x0A3C],
            [0x0A41, 0x0A42], [0x0A47, 0x0A48], [0x0A4B, 0x0A4D],
            [0x0A70, 0x0A71], [0x0A81, 0x0A82], [0x0ABC, 0x0ABC],
            [0x0AC1, 0x0AC5], [0x0AC7, 0x0AC8], [0x0ACD, 0x0ACD],
            [0x0AE2, 0x0AE3], [0x0B01, 0x0B01], [0x0B3C, 0x0B3C],
            [0x0B3F, 0x0B3F], [0x0B41, 0x0B43], [0x0B4D, 0x0B4D],
            [0x0B56, 0x0B56], [0x0B82, 0x0B82], [0x0BC0, 0x0BC0],
            [0x0BCD, 0x0BCD], [0x0C3E, 0x0C40], [0x0C46, 0x0C48],
            [0x0C4A, 0x0C4D], [0x0C55, 0x0C56], [0x0CBC, 0x0CBC],
            [0x0CBF, 0x0CBF], [0x0CC6, 0x0CC6], [0x0CCC, 0x0CCD],
            [0x0CE2, 0x0CE3], [0x0D41, 0x0D43], [0x0D4D, 0x0D4D],
            [0x0DCA, 0x0DCA], [0x0DD2, 0x0DD4], [0x0DD6, 0x0DD6],
            [0x0E31, 0x0E31], [0x0E34, 0x0E3A], [0x0E47, 0x0E4E],
            [0x0EB1, 0x0EB1], [0x0EB4, 0x0EB9], [0x0EBB, 0x0EBC],
            [0x0EC8, 0x0ECD], [0x0F18, 0x0F19], [0x0F35, 0x0F35],
            [0x0F37, 0x0F37], [0x0F39, 0x0F39], [0x0F71, 0x0F7E],
            [0x0F80, 0x0F84], [0x0F86, 0x0F87], [0x0F90, 0x0F97],
            [0x0F99, 0x0FBC], [0x0FC6, 0x0FC6], [0x102D, 0x1030],
            [0x1032, 0x1032], [0x1036, 0x1037], [0x1039, 0x1039],
            [0x1058, 0x1059], [0x1160, 0x11FF], [0x135F, 0x135F],
            [0x1712, 0x1714], [0x1732, 0x1734], [0x1752, 0x1753],
            [0x1772, 0x1773], [0x17B4, 0x17B5], [0x17B7, 0x17BD],
            [0x17C6, 0x17C6], [0x17C9, 0x17D3], [0x17DD, 0x17DD],
            [0x180B, 0x180D], [0x18A9, 0x18A9], [0x1920, 0x1922],
            [0x1927, 0x1928], [0x1932, 0x1932], [0x1939, 0x193B],
            [0x1A17, 0x1A18], [0x1B00, 0x1B03], [0x1B34, 0x1B34],
            [0x1B36, 0x1B3A], [0x1B3C, 0x1B3C], [0x1B42, 0x1B42],
            [0x1B6B, 0x1B73], [0x1DC0, 0x1DCA], [0x1DFE, 0x1DFF],
            [0x200B, 0x200F], [0x202A, 0x202E], [0x2060, 0x2063],
            [0x206A, 0x206F], [0x20D0, 0x20EF], [0x302A, 0x302F],
            [0x3099, 0x309A], [0xA806, 0xA806], [0xA80B, 0xA80B],
            [0xA825, 0xA826], [0xFB1E, 0xFB1E], [0xFE00, 0xFE0F],
            [0xFE20, 0xFE23], [0xFEFF, 0xFEFF], [0xFFF9, 0xFFFB]
        ];
        var COMBINING_HIGH = [
            [0x10A01, 0x10A03], [0x10A05, 0x10A06], [0x10A0C, 0x10A0F],
            [0x10A38, 0x10A3A], [0x10A3F, 0x10A3F], [0x1D167, 0x1D169],
            [0x1D173, 0x1D182], [0x1D185, 0x1D18B], [0x1D1AA, 0x1D1AD],
            [0x1D242, 0x1D244], [0xE0001, 0xE0001], [0xE0020, 0xE007F],
            [0xE0100, 0xE01EF]
        ];
        function bisearch(ucs, data) {
            var min = 0;
            var max = data.length - 1;
            var mid;
            if (ucs < data[0][0] || ucs > data[max][1]) {
                return false;
            }
            while (max >= min) {
                mid = (min + max) >> 1;
                if (ucs > data[mid][1]) {
                    min = mid + 1;
                }
                else if (ucs < data[mid][0]) {
                    max = mid - 1;
                }
                else {
                    return true;
                }
            }
            return false;
        }
        function wcwidthHigh(ucs) {
            if (bisearch(ucs, COMBINING_HIGH)) {
                return 0;
            }
            if ((ucs >= 0x20000 && ucs <= 0x2fffd) || (ucs >= 0x30000 && ucs <= 0x3fffd)) {
                return 2;
            }
            return 1;
        }
        var control = opts.control | 0;
        var table = new Uint8Array(65536);
        TypedArrayUtils.fill(table, 1);
        table[0] = opts.nul;
        TypedArrayUtils.fill(table, opts.control, 1, 32);
        TypedArrayUtils.fill(table, opts.control, 0x7f, 0xa0);
        TypedArrayUtils.fill(table, 2, 0x1100, 0x1160);
        table[0x2329] = 2;
        table[0x232a] = 2;
        TypedArrayUtils.fill(table, 2, 0x2e80, 0xa4d0);
        table[0x303f] = 1;
        TypedArrayUtils.fill(table, 2, 0xac00, 0xd7a4);
        TypedArrayUtils.fill(table, 2, 0xf900, 0xfb00);
        TypedArrayUtils.fill(table, 2, 0xfe10, 0xfe1a);
        TypedArrayUtils.fill(table, 2, 0xfe30, 0xfe70);
        TypedArrayUtils.fill(table, 2, 0xff00, 0xff61);
        TypedArrayUtils.fill(table, 2, 0xffe0, 0xffe7);
        for (var r = 0; r < COMBINING_BMP.length; ++r) {
            TypedArrayUtils.fill(table, 0, COMBINING_BMP[r][0], COMBINING_BMP[r][1] + 1);
        }
        return function (num) {
            if (num < 32) {
                return control | 0;
            }
            if (num < 127) {
                return 1;
            }
            if (num < 65536) {
                return table[num];
            }
            return wcwidthHigh(num);
        };
    })({ nul: 0, control: 0 });
    function getStringCellWidth(s) {
        var result = 0;
        var length = s.length;
        for (var i = 0; i < length; ++i) {
            var code = s.charCodeAt(i);
            if (0xD800 <= code && code <= 0xDBFF) {
                if (++i >= length) {
                    return result + exports.wcwidth(code);
                }
                var second = s.charCodeAt(i);
                if (0xDC00 <= second && second <= 0xDFFF) {
                    code = (code - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
                }
                else {
                    result += exports.wcwidth(second);
                }
            }
            result += exports.wcwidth(code);
        }
        return result;
    }
    exports.getStringCellWidth = getStringCellWidth;

    });

    unwrapExports(CharWidth);
    var CharWidth_1 = CharWidth.wcwidth;
    var CharWidth_2 = CharWidth.getStringCellWidth;

    var EscapeSequenceParser_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });


    function r(low, high) {
        var c = high - low;
        var arr = new Array(c);
        while (c--) {
            arr[c] = --high;
        }
        return arr;
    }
    var TransitionTable = (function () {
        function TransitionTable(length) {
            this.table = (typeof Uint8Array === 'undefined')
                ? new Array(length)
                : new Uint8Array(length);
        }
        TransitionTable.prototype.add = function (code, state, action, next) {
            this.table[state << 8 | code] = ((action | 0) << 4) | ((next === undefined) ? state : next);
        };
        TransitionTable.prototype.addMany = function (codes, state, action, next) {
            for (var i = 0; i < codes.length; i++) {
                this.add(codes[i], state, action, next);
            }
        };
        return TransitionTable;
    }());
    exports.TransitionTable = TransitionTable;
    var PRINTABLES = r(0x20, 0x7f);
    var EXECUTABLES = r(0x00, 0x18);
    EXECUTABLES.push(0x19);
    EXECUTABLES.push.apply(EXECUTABLES, r(0x1c, 0x20));
    var NON_ASCII_PRINTABLE = 0xA0;
    exports.VT500_TRANSITION_TABLE = (function () {
        var table = new TransitionTable(4095);
        var states = r(0, 13 + 1);
        var state;
        for (state in states) {
            for (var code = 0; code <= NON_ASCII_PRINTABLE; ++code) {
                table.add(code, state, 1, 0);
            }
        }
        table.addMany(PRINTABLES, 0, 2, 0);
        for (state in states) {
            table.addMany([0x18, 0x1a, 0x99, 0x9a], state, 3, 0);
            table.addMany(r(0x80, 0x90), state, 3, 0);
            table.addMany(r(0x90, 0x98), state, 3, 0);
            table.add(0x9c, state, 0, 0);
            table.add(0x1b, state, 11, 1);
            table.add(0x9d, state, 4, 8);
            table.addMany([0x98, 0x9e, 0x9f], state, 0, 7);
            table.add(0x9b, state, 11, 3);
            table.add(0x90, state, 11, 9);
        }
        table.addMany(EXECUTABLES, 0, 3, 0);
        table.addMany(EXECUTABLES, 1, 3, 1);
        table.add(0x7f, 1, 0, 1);
        table.addMany(EXECUTABLES, 8, 0, 8);
        table.addMany(EXECUTABLES, 3, 3, 3);
        table.add(0x7f, 3, 0, 3);
        table.addMany(EXECUTABLES, 4, 3, 4);
        table.add(0x7f, 4, 0, 4);
        table.addMany(EXECUTABLES, 6, 3, 6);
        table.addMany(EXECUTABLES, 5, 3, 5);
        table.add(0x7f, 5, 0, 5);
        table.addMany(EXECUTABLES, 2, 3, 2);
        table.add(0x7f, 2, 0, 2);
        table.add(0x5d, 1, 4, 8);
        table.addMany(PRINTABLES, 8, 5, 8);
        table.add(0x7f, 8, 5, 8);
        table.addMany([0x9c, 0x1b, 0x18, 0x1a, 0x07], 8, 6, 0);
        table.addMany(r(0x1c, 0x20), 8, 0, 8);
        table.addMany([0x58, 0x5e, 0x5f], 1, 0, 7);
        table.addMany(PRINTABLES, 7, 0, 7);
        table.addMany(EXECUTABLES, 7, 0, 7);
        table.add(0x9c, 7, 0, 0);
        table.add(0x7f, 7, 0, 7);
        table.add(0x5b, 1, 11, 3);
        table.addMany(r(0x40, 0x7f), 3, 7, 0);
        table.addMany(r(0x30, 0x3a), 3, 8, 4);
        table.add(0x3b, 3, 8, 4);
        table.addMany([0x3c, 0x3d, 0x3e, 0x3f], 3, 9, 4);
        table.addMany(r(0x30, 0x3a), 4, 8, 4);
        table.add(0x3b, 4, 8, 4);
        table.addMany(r(0x40, 0x7f), 4, 7, 0);
        table.addMany([0x3a, 0x3c, 0x3d, 0x3e, 0x3f], 4, 0, 6);
        table.addMany(r(0x20, 0x40), 6, 0, 6);
        table.add(0x7f, 6, 0, 6);
        table.addMany(r(0x40, 0x7f), 6, 0, 0);
        table.add(0x3a, 3, 0, 6);
        table.addMany(r(0x20, 0x30), 3, 9, 5);
        table.addMany(r(0x20, 0x30), 5, 9, 5);
        table.addMany(r(0x30, 0x40), 5, 0, 6);
        table.addMany(r(0x40, 0x7f), 5, 7, 0);
        table.addMany(r(0x20, 0x30), 4, 9, 5);
        table.addMany(r(0x20, 0x30), 1, 9, 2);
        table.addMany(r(0x20, 0x30), 2, 9, 2);
        table.addMany(r(0x30, 0x7f), 2, 10, 0);
        table.addMany(r(0x30, 0x50), 1, 10, 0);
        table.addMany(r(0x51, 0x58), 1, 10, 0);
        table.addMany([0x59, 0x5a, 0x5c], 1, 10, 0);
        table.addMany(r(0x60, 0x7f), 1, 10, 0);
        table.add(0x50, 1, 11, 9);
        table.addMany(EXECUTABLES, 9, 0, 9);
        table.add(0x7f, 9, 0, 9);
        table.addMany(r(0x1c, 0x20), 9, 0, 9);
        table.addMany(r(0x20, 0x30), 9, 9, 12);
        table.add(0x3a, 9, 0, 11);
        table.addMany(r(0x30, 0x3a), 9, 8, 10);
        table.add(0x3b, 9, 8, 10);
        table.addMany([0x3c, 0x3d, 0x3e, 0x3f], 9, 9, 10);
        table.addMany(EXECUTABLES, 11, 0, 11);
        table.addMany(r(0x20, 0x80), 11, 0, 11);
        table.addMany(r(0x1c, 0x20), 11, 0, 11);
        table.addMany(EXECUTABLES, 10, 0, 10);
        table.add(0x7f, 10, 0, 10);
        table.addMany(r(0x1c, 0x20), 10, 0, 10);
        table.addMany(r(0x30, 0x3a), 10, 8, 10);
        table.add(0x3b, 10, 8, 10);
        table.addMany([0x3a, 0x3c, 0x3d, 0x3e, 0x3f], 10, 0, 11);
        table.addMany(r(0x20, 0x30), 10, 9, 12);
        table.addMany(EXECUTABLES, 12, 0, 12);
        table.add(0x7f, 12, 0, 12);
        table.addMany(r(0x1c, 0x20), 12, 0, 12);
        table.addMany(r(0x20, 0x30), 12, 9, 12);
        table.addMany(r(0x30, 0x40), 12, 0, 11);
        table.addMany(r(0x40, 0x7f), 12, 12, 13);
        table.addMany(r(0x40, 0x7f), 10, 12, 13);
        table.addMany(r(0x40, 0x7f), 9, 12, 13);
        table.addMany(EXECUTABLES, 13, 13, 13);
        table.addMany(PRINTABLES, 13, 13, 13);
        table.add(0x7f, 13, 0, 13);
        table.addMany([0x1b, 0x9c], 13, 14, 0);
        table.add(NON_ASCII_PRINTABLE, 8, 5, 8);
        return table;
    })();
    var DcsDummy = (function () {
        function DcsDummy() {
        }
        DcsDummy.prototype.hook = function (collect, params, flag) { };
        DcsDummy.prototype.put = function (data, start, end) { };
        DcsDummy.prototype.unhook = function () { };
        return DcsDummy;
    }());
    var EscapeSequenceParser = (function (_super) {
        __extends(EscapeSequenceParser, _super);
        function EscapeSequenceParser(TRANSITIONS) {
            if (TRANSITIONS === void 0) { TRANSITIONS = exports.VT500_TRANSITION_TABLE; }
            var _this = _super.call(this) || this;
            _this.TRANSITIONS = TRANSITIONS;
            _this.initialState = 0;
            _this.currentState = _this.initialState;
            _this._osc = '';
            _this._params = [0];
            _this._collect = '';
            _this._printHandlerFb = function (data, start, end) { };
            _this._executeHandlerFb = function (code) { };
            _this._csiHandlerFb = function (collect, params, flag) { };
            _this._escHandlerFb = function (collect, flag) { };
            _this._oscHandlerFb = function (identifier, data) { };
            _this._dcsHandlerFb = new DcsDummy();
            _this._errorHandlerFb = function (state) { return state; };
            _this._printHandler = _this._printHandlerFb;
            _this._executeHandlers = Object.create(null);
            _this._csiHandlers = Object.create(null);
            _this._escHandlers = Object.create(null);
            _this._oscHandlers = Object.create(null);
            _this._dcsHandlers = Object.create(null);
            _this._activeDcsHandler = null;
            _this._errorHandler = _this._errorHandlerFb;
            _this.setEscHandler('\\', function () { });
            return _this;
        }
        EscapeSequenceParser.prototype.dispose = function () {
            this._printHandlerFb = null;
            this._executeHandlerFb = null;
            this._csiHandlerFb = null;
            this._escHandlerFb = null;
            this._oscHandlerFb = null;
            this._dcsHandlerFb = null;
            this._errorHandlerFb = null;
            this._printHandler = null;
            this._executeHandlers = null;
            this._escHandlers = null;
            this._csiHandlers = null;
            this._oscHandlers = null;
            this._dcsHandlers = null;
            this._activeDcsHandler = null;
            this._errorHandler = null;
        };
        EscapeSequenceParser.prototype.setPrintHandler = function (callback) {
            this._printHandler = callback;
        };
        EscapeSequenceParser.prototype.clearPrintHandler = function () {
            this._printHandler = this._printHandlerFb;
        };
        EscapeSequenceParser.prototype.setExecuteHandler = function (flag, callback) {
            this._executeHandlers[flag.charCodeAt(0)] = callback;
        };
        EscapeSequenceParser.prototype.clearExecuteHandler = function (flag) {
            if (this._executeHandlers[flag.charCodeAt(0)])
                delete this._executeHandlers[flag.charCodeAt(0)];
        };
        EscapeSequenceParser.prototype.setExecuteHandlerFallback = function (callback) {
            this._executeHandlerFb = callback;
        };
        EscapeSequenceParser.prototype.addCsiHandler = function (flag, callback) {
            var index = flag.charCodeAt(0);
            if (this._csiHandlers[index] === undefined) {
                this._csiHandlers[index] = [];
            }
            var handlerList = this._csiHandlers[index];
            handlerList.push(callback);
            return {
                dispose: function () {
                    var handlerIndex = handlerList.indexOf(callback);
                    if (handlerIndex !== -1) {
                        handlerList.splice(handlerIndex, 1);
                    }
                }
            };
        };
        EscapeSequenceParser.prototype.setCsiHandler = function (flag, callback) {
            this._csiHandlers[flag.charCodeAt(0)] = [callback];
        };
        EscapeSequenceParser.prototype.clearCsiHandler = function (flag) {
            if (this._csiHandlers[flag.charCodeAt(0)])
                delete this._csiHandlers[flag.charCodeAt(0)];
        };
        EscapeSequenceParser.prototype.setCsiHandlerFallback = function (callback) {
            this._csiHandlerFb = callback;
        };
        EscapeSequenceParser.prototype.setEscHandler = function (collectAndFlag, callback) {
            this._escHandlers[collectAndFlag] = callback;
        };
        EscapeSequenceParser.prototype.clearEscHandler = function (collectAndFlag) {
            if (this._escHandlers[collectAndFlag])
                delete this._escHandlers[collectAndFlag];
        };
        EscapeSequenceParser.prototype.setEscHandlerFallback = function (callback) {
            this._escHandlerFb = callback;
        };
        EscapeSequenceParser.prototype.addOscHandler = function (ident, callback) {
            if (this._oscHandlers[ident] === undefined) {
                this._oscHandlers[ident] = [];
            }
            var handlerList = this._oscHandlers[ident];
            handlerList.push(callback);
            return {
                dispose: function () {
                    var handlerIndex = handlerList.indexOf(callback);
                    if (handlerIndex !== -1) {
                        handlerList.splice(handlerIndex, 1);
                    }
                }
            };
        };
        EscapeSequenceParser.prototype.setOscHandler = function (ident, callback) {
            this._oscHandlers[ident] = [callback];
        };
        EscapeSequenceParser.prototype.clearOscHandler = function (ident) {
            if (this._oscHandlers[ident])
                delete this._oscHandlers[ident];
        };
        EscapeSequenceParser.prototype.setOscHandlerFallback = function (callback) {
            this._oscHandlerFb = callback;
        };
        EscapeSequenceParser.prototype.setDcsHandler = function (collectAndFlag, handler) {
            this._dcsHandlers[collectAndFlag] = handler;
        };
        EscapeSequenceParser.prototype.clearDcsHandler = function (collectAndFlag) {
            if (this._dcsHandlers[collectAndFlag])
                delete this._dcsHandlers[collectAndFlag];
        };
        EscapeSequenceParser.prototype.setDcsHandlerFallback = function (handler) {
            this._dcsHandlerFb = handler;
        };
        EscapeSequenceParser.prototype.setErrorHandler = function (callback) {
            this._errorHandler = callback;
        };
        EscapeSequenceParser.prototype.clearErrorHandler = function () {
            this._errorHandler = this._errorHandlerFb;
        };
        EscapeSequenceParser.prototype.reset = function () {
            this.currentState = this.initialState;
            this._osc = '';
            this._params = [0];
            this._collect = '';
            this._activeDcsHandler = null;
        };
        EscapeSequenceParser.prototype.parse = function (data, length) {
            var code = 0;
            var transition = 0;
            var error = false;
            var currentState = this.currentState;
            var print = -1;
            var dcs = -1;
            var osc = this._osc;
            var collect = this._collect;
            var params = this._params;
            var table = this.TRANSITIONS.table;
            var dcsHandler = this._activeDcsHandler;
            var callback = null;
            for (var i = 0; i < length; ++i) {
                code = data[i];
                if (currentState === 0 && code > 0x1f && code < 0x80) {
                    print = (~print) ? print : i;
                    do
                        i++;
                    while (i < length && data[i] > 0x1f && data[i] < 0x80);
                    i--;
                    continue;
                }
                if (currentState === 4 && (code > 0x2f && code < 0x39)) {
                    params[params.length - 1] = params[params.length - 1] * 10 + code - 48;
                    continue;
                }
                transition = table[currentState << 8 | (code < 0xa0 ? code : NON_ASCII_PRINTABLE)];
                switch (transition >> 4) {
                    case 2:
                        print = (~print) ? print : i;
                        break;
                    case 3:
                        if (~print) {
                            this._printHandler(data, print, i);
                            print = -1;
                        }
                        callback = this._executeHandlers[code];
                        if (callback)
                            callback();
                        else
                            this._executeHandlerFb(code);
                        break;
                    case 0:
                        if (~print) {
                            this._printHandler(data, print, i);
                            print = -1;
                        }
                        else if (~dcs) {
                            dcsHandler.put(data, dcs, i);
                            dcs = -1;
                        }
                        break;
                    case 1:
                        if (code > 0x9f) {
                            switch (currentState) {
                                case 0:
                                    print = (~print) ? print : i;
                                    break;
                                case 6:
                                    transition |= 6;
                                    break;
                                case 11:
                                    transition |= 11;
                                    break;
                                case 13:
                                    dcs = (~dcs) ? dcs : i;
                                    transition |= 13;
                                    break;
                                default:
                                    error = true;
                            }
                        }
                        else {
                            error = true;
                        }
                        if (error) {
                            var inject = this._errorHandler({
                                position: i,
                                code: code,
                                currentState: currentState,
                                print: print,
                                dcs: dcs,
                                osc: osc,
                                collect: collect,
                                params: params,
                                abort: false
                            });
                            if (inject.abort)
                                return;
                            error = false;
                        }
                        break;
                    case 7:
                        var handlers = this._csiHandlers[code];
                        var j = handlers ? handlers.length - 1 : -1;
                        for (; j >= 0; j--) {
                            if (handlers[j](params, collect) !== false) {
                                break;
                            }
                        }
                        if (j < 0) {
                            this._csiHandlerFb(collect, params, code);
                        }
                        break;
                    case 8:
                        if (code === 0x3b)
                            params.push(0);
                        else
                            params[params.length - 1] = params[params.length - 1] * 10 + code - 48;
                        break;
                    case 9:
                        collect += String.fromCharCode(code);
                        break;
                    case 10:
                        callback = this._escHandlers[collect + String.fromCharCode(code)];
                        if (callback)
                            callback(collect, code);
                        else
                            this._escHandlerFb(collect, code);
                        break;
                    case 11:
                        if (~print) {
                            this._printHandler(data, print, i);
                            print = -1;
                        }
                        osc = '';
                        params = [0];
                        collect = '';
                        dcs = -1;
                        break;
                    case 12:
                        dcsHandler = this._dcsHandlers[collect + String.fromCharCode(code)];
                        if (!dcsHandler)
                            dcsHandler = this._dcsHandlerFb;
                        dcsHandler.hook(collect, params, code);
                        break;
                    case 13:
                        dcs = (~dcs) ? dcs : i;
                        break;
                    case 14:
                        if (dcsHandler) {
                            if (~dcs)
                                dcsHandler.put(data, dcs, i);
                            dcsHandler.unhook();
                            dcsHandler = null;
                        }
                        if (code === 0x1b)
                            transition |= 1;
                        osc = '';
                        params = [0];
                        collect = '';
                        dcs = -1;
                        break;
                    case 4:
                        if (~print) {
                            this._printHandler(data, print, i);
                            print = -1;
                        }
                        osc = '';
                        break;
                    case 5:
                        for (var j_1 = i + 1;; j_1++) {
                            if (j_1 >= length
                                || (code = data[j_1]) < 0x20
                                || (code > 0x7f && code <= 0x9f)) {
                                osc += TextDecoder.utf32ToString(data, i, j_1);
                                i = j_1 - 1;
                                break;
                            }
                        }
                        break;
                    case 6:
                        if (osc && code !== 0x18 && code !== 0x1a) {
                            var idx = osc.indexOf(';');
                            if (idx === -1) {
                                this._oscHandlerFb(-1, osc);
                            }
                            else {
                                var identifier = parseInt(osc.substring(0, idx));
                                var content = osc.substring(idx + 1);
                                var handlers_1 = this._oscHandlers[identifier];
                                var j_2 = handlers_1 ? handlers_1.length - 1 : -1;
                                for (; j_2 >= 0; j_2--) {
                                    if (handlers_1[j_2](content) !== false) {
                                        break;
                                    }
                                }
                                if (j_2 < 0) {
                                    this._oscHandlerFb(identifier, content);
                                }
                            }
                        }
                        if (code === 0x1b)
                            transition |= 1;
                        osc = '';
                        params = [0];
                        collect = '';
                        dcs = -1;
                        break;
                }
                currentState = transition & 15;
            }
            if (currentState === 0 && ~print) {
                this._printHandler(data, print, length);
            }
            else if (currentState === 13 && ~dcs && dcsHandler) {
                dcsHandler.put(data, dcs, length);
            }
            this._osc = osc;
            this._collect = collect;
            this._params = params;
            this._activeDcsHandler = dcsHandler;
            this.currentState = currentState;
        };
        return EscapeSequenceParser;
    }(Lifecycle.Disposable));
    exports.EscapeSequenceParser = EscapeSequenceParser;

    });

    unwrapExports(EscapeSequenceParser_1);
    var EscapeSequenceParser_2 = EscapeSequenceParser_1.TransitionTable;
    var EscapeSequenceParser_3 = EscapeSequenceParser_1.VT500_TRANSITION_TABLE;
    var EscapeSequenceParser_4 = EscapeSequenceParser_1.EscapeSequenceParser;

    var InputHandler_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });










    var GLEVEL = { '(': 0, ')': 1, '*': 2, '+': 3, '-': 1, '.': 2 };
    var DECRQSS = (function () {
        function DECRQSS(_terminal) {
            this._terminal = _terminal;
            this._data = new Uint32Array(0);
        }
        DECRQSS.prototype.hook = function (collect, params, flag) {
            this._data = new Uint32Array(0);
        };
        DECRQSS.prototype.put = function (data, start, end) {
            this._data = TypedArrayUtils.concat(this._data, data.subarray(start, end));
        };
        DECRQSS.prototype.unhook = function () {
            var data = TextDecoder.utf32ToString(this._data);
            this._data = new Uint32Array(0);
            switch (data) {
                case '"q':
                    return this._terminal.handler(EscapeSequences.C0.ESC + "P1$r0\"q" + EscapeSequences.C0.ESC + "\\");
                case '"p':
                    return this._terminal.handler(EscapeSequences.C0.ESC + "P1$r61\"p" + EscapeSequences.C0.ESC + "\\");
                case 'r':
                    var pt = '' + (this._terminal.buffer.scrollTop + 1) +
                        ';' + (this._terminal.buffer.scrollBottom + 1) + 'r';
                    return this._terminal.handler(EscapeSequences.C0.ESC + "P1$r" + pt + EscapeSequences.C0.ESC + "\\");
                case 'm':
                    return this._terminal.handler(EscapeSequences.C0.ESC + "P1$r0m" + EscapeSequences.C0.ESC + "\\");
                case ' q':
                    var STYLES = { 'block': 2, 'underline': 4, 'bar': 6 };
                    var style = STYLES[this._terminal.getOption('cursorStyle')];
                    style -= this._terminal.getOption('cursorBlink');
                    return this._terminal.handler(EscapeSequences.C0.ESC + "P1$r" + style + " q" + EscapeSequences.C0.ESC + "\\");
                default:
                    this._terminal.error('Unknown DCS $q %s', data);
                    this._terminal.handler(EscapeSequences.C0.ESC + "P0$r" + EscapeSequences.C0.ESC + "\\");
            }
        };
        return DECRQSS;
    }());
    var InputHandler = (function (_super) {
        __extends(InputHandler, _super);
        function InputHandler(_terminal, _parser) {
            if (_parser === void 0) { _parser = new EscapeSequenceParser_1.EscapeSequenceParser(); }
            var _this = _super.call(this) || this;
            _this._terminal = _terminal;
            _this._parser = _parser;
            _this._parseBuffer = new Uint32Array(4096);
            _this._stringDecoder = new TextDecoder.StringToUtf32();
            _this._workCell = new BufferLine_1.CellData();
            _this._onCursorMove = new EventEmitter2_1.EventEmitter2();
            _this._onData = new EventEmitter2_1.EventEmitter2();
            _this._onLineFeed = new EventEmitter2_1.EventEmitter2();
            _this._onScroll = new EventEmitter2_1.EventEmitter2();
            _this.register(_this._parser);
            _this._parser.setCsiHandlerFallback(function (collect, params, flag) {
                _this._terminal.error('Unknown CSI code: ', { collect: collect, params: params, flag: String.fromCharCode(flag) });
            });
            _this._parser.setEscHandlerFallback(function (collect, flag) {
                _this._terminal.error('Unknown ESC code: ', { collect: collect, flag: String.fromCharCode(flag) });
            });
            _this._parser.setExecuteHandlerFallback(function (code) {
                _this._terminal.error('Unknown EXECUTE code: ', { code: code });
            });
            _this._parser.setOscHandlerFallback(function (identifier, data) {
                _this._terminal.error('Unknown OSC code: ', { identifier: identifier, data: data });
            });
            _this._parser.setPrintHandler(function (data, start, end) { return _this.print(data, start, end); });
            _this._parser.setCsiHandler('@', function (params, collect) { return _this.insertChars(params); });
            _this._parser.setCsiHandler('A', function (params, collect) { return _this.cursorUp(params); });
            _this._parser.setCsiHandler('B', function (params, collect) { return _this.cursorDown(params); });
            _this._parser.setCsiHandler('C', function (params, collect) { return _this.cursorForward(params); });
            _this._parser.setCsiHandler('D', function (params, collect) { return _this.cursorBackward(params); });
            _this._parser.setCsiHandler('E', function (params, collect) { return _this.cursorNextLine(params); });
            _this._parser.setCsiHandler('F', function (params, collect) { return _this.cursorPrecedingLine(params); });
            _this._parser.setCsiHandler('G', function (params, collect) { return _this.cursorCharAbsolute(params); });
            _this._parser.setCsiHandler('H', function (params, collect) { return _this.cursorPosition(params); });
            _this._parser.setCsiHandler('I', function (params, collect) { return _this.cursorForwardTab(params); });
            _this._parser.setCsiHandler('J', function (params, collect) { return _this.eraseInDisplay(params); });
            _this._parser.setCsiHandler('K', function (params, collect) { return _this.eraseInLine(params); });
            _this._parser.setCsiHandler('L', function (params, collect) { return _this.insertLines(params); });
            _this._parser.setCsiHandler('M', function (params, collect) { return _this.deleteLines(params); });
            _this._parser.setCsiHandler('P', function (params, collect) { return _this.deleteChars(params); });
            _this._parser.setCsiHandler('S', function (params, collect) { return _this.scrollUp(params); });
            _this._parser.setCsiHandler('T', function (params, collect) { return _this.scrollDown(params, collect); });
            _this._parser.setCsiHandler('X', function (params, collect) { return _this.eraseChars(params); });
            _this._parser.setCsiHandler('Z', function (params, collect) { return _this.cursorBackwardTab(params); });
            _this._parser.setCsiHandler('`', function (params, collect) { return _this.charPosAbsolute(params); });
            _this._parser.setCsiHandler('a', function (params, collect) { return _this.hPositionRelative(params); });
            _this._parser.setCsiHandler('b', function (params, collect) { return _this.repeatPrecedingCharacter(params); });
            _this._parser.setCsiHandler('c', function (params, collect) { return _this.sendDeviceAttributes(params, collect); });
            _this._parser.setCsiHandler('d', function (params, collect) { return _this.linePosAbsolute(params); });
            _this._parser.setCsiHandler('e', function (params, collect) { return _this.vPositionRelative(params); });
            _this._parser.setCsiHandler('f', function (params, collect) { return _this.hVPosition(params); });
            _this._parser.setCsiHandler('g', function (params, collect) { return _this.tabClear(params); });
            _this._parser.setCsiHandler('h', function (params, collect) { return _this.setMode(params, collect); });
            _this._parser.setCsiHandler('l', function (params, collect) { return _this.resetMode(params, collect); });
            _this._parser.setCsiHandler('m', function (params, collect) { return _this.charAttributes(params); });
            _this._parser.setCsiHandler('n', function (params, collect) { return _this.deviceStatus(params, collect); });
            _this._parser.setCsiHandler('p', function (params, collect) { return _this.softReset(params, collect); });
            _this._parser.setCsiHandler('q', function (params, collect) { return _this.setCursorStyle(params, collect); });
            _this._parser.setCsiHandler('r', function (params, collect) { return _this.setScrollRegion(params, collect); });
            _this._parser.setCsiHandler('s', function (params, collect) { return _this.saveCursor(params); });
            _this._parser.setCsiHandler('u', function (params, collect) { return _this.restoreCursor(params); });
            _this._parser.setExecuteHandler(EscapeSequences.C0.BEL, function () { return _this.bell(); });
            _this._parser.setExecuteHandler(EscapeSequences.C0.LF, function () { return _this.lineFeed(); });
            _this._parser.setExecuteHandler(EscapeSequences.C0.VT, function () { return _this.lineFeed(); });
            _this._parser.setExecuteHandler(EscapeSequences.C0.FF, function () { return _this.lineFeed(); });
            _this._parser.setExecuteHandler(EscapeSequences.C0.CR, function () { return _this.carriageReturn(); });
            _this._parser.setExecuteHandler(EscapeSequences.C0.BS, function () { return _this.backspace(); });
            _this._parser.setExecuteHandler(EscapeSequences.C0.HT, function () { return _this.tab(); });
            _this._parser.setExecuteHandler(EscapeSequences.C0.SO, function () { return _this.shiftOut(); });
            _this._parser.setExecuteHandler(EscapeSequences.C0.SI, function () { return _this.shiftIn(); });
            _this._parser.setExecuteHandler(EscapeSequences.C1.IND, function () { return _this.index(); });
            _this._parser.setExecuteHandler(EscapeSequences.C1.NEL, function () { return _this.nextLine(); });
            _this._parser.setExecuteHandler(EscapeSequences.C1.HTS, function () { return _this.tabSet(); });
            _this._parser.setOscHandler(0, function (data) { return _this.setTitle(data); });
            _this._parser.setOscHandler(2, function (data) { return _this.setTitle(data); });
            _this._parser.setEscHandler('7', function () { return _this.saveCursor([]); });
            _this._parser.setEscHandler('8', function () { return _this.restoreCursor([]); });
            _this._parser.setEscHandler('D', function () { return _this.index(); });
            _this._parser.setEscHandler('E', function () { return _this.nextLine(); });
            _this._parser.setEscHandler('H', function () { return _this.tabSet(); });
            _this._parser.setEscHandler('M', function () { return _this.reverseIndex(); });
            _this._parser.setEscHandler('=', function () { return _this.keypadApplicationMode(); });
            _this._parser.setEscHandler('>', function () { return _this.keypadNumericMode(); });
            _this._parser.setEscHandler('c', function () { return _this.reset(); });
            _this._parser.setEscHandler('n', function () { return _this.setgLevel(2); });
            _this._parser.setEscHandler('o', function () { return _this.setgLevel(3); });
            _this._parser.setEscHandler('|', function () { return _this.setgLevel(3); });
            _this._parser.setEscHandler('}', function () { return _this.setgLevel(2); });
            _this._parser.setEscHandler('~', function () { return _this.setgLevel(1); });
            _this._parser.setEscHandler('%@', function () { return _this.selectDefaultCharset(); });
            _this._parser.setEscHandler('%G', function () { return _this.selectDefaultCharset(); });
            var _loop_1 = function (flag) {
                this_1._parser.setEscHandler('(' + flag, function () { return _this.selectCharset('(' + flag); });
                this_1._parser.setEscHandler(')' + flag, function () { return _this.selectCharset(')' + flag); });
                this_1._parser.setEscHandler('*' + flag, function () { return _this.selectCharset('*' + flag); });
                this_1._parser.setEscHandler('+' + flag, function () { return _this.selectCharset('+' + flag); });
                this_1._parser.setEscHandler('-' + flag, function () { return _this.selectCharset('-' + flag); });
                this_1._parser.setEscHandler('.' + flag, function () { return _this.selectCharset('.' + flag); });
                this_1._parser.setEscHandler('/' + flag, function () { return _this.selectCharset('/' + flag); });
            };
            var this_1 = this;
            for (var flag in Charsets.CHARSETS) {
                _loop_1(flag);
            }
            _this._parser.setErrorHandler(function (state) {
                _this._terminal.error('Parsing error: ', state);
                return state;
            });
            _this._parser.setDcsHandler('$q', new DECRQSS(_this._terminal));
            return _this;
        }
        Object.defineProperty(InputHandler.prototype, "onCursorMove", {
            get: function () { return this._onCursorMove.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputHandler.prototype, "onData", {
            get: function () { return this._onData.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputHandler.prototype, "onLineFeed", {
            get: function () { return this._onLineFeed.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputHandler.prototype, "onScroll", {
            get: function () { return this._onScroll.event; },
            enumerable: true,
            configurable: true
        });
        InputHandler.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this._terminal = null;
        };
        InputHandler.prototype.parse = function (data) {
            if (!this._terminal) {
                return;
            }
            var buffer = this._terminal.buffer;
            var cursorStartX = buffer.x;
            var cursorStartY = buffer.y;
            if (this._terminal.debug) {
                this._terminal.log('data: ' + data);
            }
            if (this._parseBuffer.length < data.length) {
                this._parseBuffer = new Uint32Array(data.length);
            }
            this._parser.parse(this._parseBuffer, this._stringDecoder.decode(data, this._parseBuffer));
            buffer = this._terminal.buffer;
            if (buffer.x !== cursorStartX || buffer.y !== cursorStartY) {
                this._onCursorMove.fire();
            }
        };
        InputHandler.prototype.print = function (data, start, end) {
            var code;
            var chWidth;
            var buffer = this._terminal.buffer;
            var charset = this._terminal.charset;
            var screenReaderMode = this._terminal.options.screenReaderMode;
            var cols = this._terminal.cols;
            var wraparoundMode = this._terminal.wraparoundMode;
            var insertMode = this._terminal.insertMode;
            var curAttr = this._terminal.curAttrData;
            var bufferRow = buffer.lines.get(buffer.y + buffer.ybase);
            this._terminal.updateRange(buffer.y);
            for (var pos = start; pos < end; ++pos) {
                code = data[pos];
                chWidth = CharWidth.wcwidth(code);
                if (code < 127 && charset) {
                    var ch = charset[String.fromCharCode(code)];
                    if (ch) {
                        code = ch.charCodeAt(0);
                    }
                }
                if (screenReaderMode) {
                    this._terminal.emit('a11y.char', TextDecoder.stringFromCodePoint(code));
                }
                if (!chWidth && buffer.x) {
                    if (!bufferRow.getWidth(buffer.x - 1)) {
                        bufferRow.addCodepointToCell(buffer.x - 2, code);
                    }
                    else {
                        bufferRow.addCodepointToCell(buffer.x - 1, code);
                    }
                    continue;
                }
                if (buffer.x + chWidth - 1 >= cols) {
                    if (wraparoundMode) {
                        buffer.x = 0;
                        buffer.y++;
                        if (buffer.y > buffer.scrollBottom) {
                            buffer.y--;
                            this._terminal.scroll(true);
                        }
                        else {
                            buffer.lines.get(buffer.y).isWrapped = true;
                        }
                        bufferRow = buffer.lines.get(buffer.y + buffer.ybase);
                    }
                    else {
                        if (chWidth === 2) {
                            continue;
                        }
                    }
                }
                if (insertMode) {
                    bufferRow.insertCells(buffer.x, chWidth, buffer.getNullCell(curAttr));
                    if (bufferRow.getWidth(cols - 1) === 2) {
                        bufferRow.setCellFromCodePoint(cols - 1, Buffer_1.NULL_CELL_CODE, Buffer_1.NULL_CELL_WIDTH, curAttr.fg, curAttr.bg);
                    }
                }
                bufferRow.setCellFromCodePoint(buffer.x++, code, chWidth, curAttr.fg, curAttr.bg);
                if (chWidth > 0) {
                    while (--chWidth) {
                        bufferRow.setCellFromCodePoint(buffer.x++, 0, 0, curAttr.fg, curAttr.bg);
                    }
                }
            }
            this._terminal.updateRange(buffer.y);
        };
        InputHandler.prototype.addCsiHandler = function (flag, callback) {
            return this._parser.addCsiHandler(flag, callback);
        };
        InputHandler.prototype.addOscHandler = function (ident, callback) {
            return this._parser.addOscHandler(ident, callback);
        };
        InputHandler.prototype.bell = function () {
            this._terminal.bell();
        };
        InputHandler.prototype.lineFeed = function () {
            var buffer = this._terminal.buffer;
            if (this._terminal.options.convertEol) {
                buffer.x = 0;
            }
            buffer.y++;
            if (buffer.y > buffer.scrollBottom) {
                buffer.y--;
                this._terminal.scroll();
            }
            if (buffer.x >= this._terminal.cols) {
                buffer.x--;
            }
            this._onLineFeed.fire();
        };
        InputHandler.prototype.carriageReturn = function () {
            this._terminal.buffer.x = 0;
        };
        InputHandler.prototype.backspace = function () {
            if (this._terminal.buffer.x > 0) {
                this._terminal.buffer.x--;
            }
        };
        InputHandler.prototype.tab = function () {
            var originalX = this._terminal.buffer.x;
            this._terminal.buffer.x = this._terminal.buffer.nextStop();
            if (this._terminal.options.screenReaderMode) {
                this._terminal.emit('a11y.tab', this._terminal.buffer.x - originalX);
            }
        };
        InputHandler.prototype.shiftOut = function () {
            this._terminal.setgLevel(1);
        };
        InputHandler.prototype.shiftIn = function () {
            this._terminal.setgLevel(0);
        };
        InputHandler.prototype.insertChars = function (params) {
            this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).insertCells(this._terminal.buffer.x, params[0] || 1, this._terminal.buffer.getNullCell(this._terminal.eraseAttrData()));
            this._terminal.updateRange(this._terminal.buffer.y);
        };
        InputHandler.prototype.cursorUp = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            this._terminal.buffer.y -= param;
            if (this._terminal.buffer.y < 0) {
                this._terminal.buffer.y = 0;
            }
        };
        InputHandler.prototype.cursorDown = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            this._terminal.buffer.y += param;
            if (this._terminal.buffer.y >= this._terminal.rows) {
                this._terminal.buffer.y = this._terminal.rows - 1;
            }
            if (this._terminal.buffer.x >= this._terminal.cols) {
                this._terminal.buffer.x--;
            }
        };
        InputHandler.prototype.cursorForward = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            this._terminal.buffer.x += param;
            if (this._terminal.buffer.x >= this._terminal.cols) {
                this._terminal.buffer.x = this._terminal.cols - 1;
            }
        };
        InputHandler.prototype.cursorBackward = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            if (this._terminal.buffer.x >= this._terminal.cols) {
                this._terminal.buffer.x--;
            }
            this._terminal.buffer.x -= param;
            if (this._terminal.buffer.x < 0) {
                this._terminal.buffer.x = 0;
            }
        };
        InputHandler.prototype.cursorNextLine = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            this._terminal.buffer.y += param;
            if (this._terminal.buffer.y >= this._terminal.rows) {
                this._terminal.buffer.y = this._terminal.rows - 1;
            }
            this._terminal.buffer.x = 0;
        };
        InputHandler.prototype.cursorPrecedingLine = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            this._terminal.buffer.y -= param;
            if (this._terminal.buffer.y < 0) {
                this._terminal.buffer.y = 0;
            }
            this._terminal.buffer.x = 0;
        };
        InputHandler.prototype.cursorCharAbsolute = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            this._terminal.buffer.x = param - 1;
        };
        InputHandler.prototype.cursorPosition = function (params) {
            var col;
            var row = params[0] - 1;
            if (params.length >= 2) {
                col = params[1] - 1;
            }
            else {
                col = 0;
            }
            if (row < 0) {
                row = 0;
            }
            else if (row >= this._terminal.rows) {
                row = this._terminal.rows - 1;
            }
            if (col < 0) {
                col = 0;
            }
            else if (col >= this._terminal.cols) {
                col = this._terminal.cols - 1;
            }
            this._terminal.buffer.x = col;
            this._terminal.buffer.y = row;
        };
        InputHandler.prototype.cursorForwardTab = function (params) {
            var param = params[0] || 1;
            while (param--) {
                this._terminal.buffer.x = this._terminal.buffer.nextStop();
            }
        };
        InputHandler.prototype._eraseInBufferLine = function (y, start, end, clearWrap) {
            if (clearWrap === void 0) { clearWrap = false; }
            var line = this._terminal.buffer.lines.get(this._terminal.buffer.ybase + y);
            line.replaceCells(start, end, this._terminal.buffer.getNullCell(this._terminal.eraseAttrData()));
            if (clearWrap) {
                line.isWrapped = false;
            }
        };
        InputHandler.prototype._resetBufferLine = function (y) {
            this._eraseInBufferLine(y, 0, this._terminal.cols, true);
        };
        InputHandler.prototype.eraseInDisplay = function (params) {
            var j;
            switch (params[0]) {
                case 0:
                    j = this._terminal.buffer.y;
                    this._terminal.updateRange(j);
                    this._eraseInBufferLine(j++, this._terminal.buffer.x, this._terminal.cols, this._terminal.buffer.x === 0);
                    for (; j < this._terminal.rows; j++) {
                        this._resetBufferLine(j);
                    }
                    this._terminal.updateRange(j);
                    break;
                case 1:
                    j = this._terminal.buffer.y;
                    this._terminal.updateRange(j);
                    this._eraseInBufferLine(j, 0, this._terminal.buffer.x + 1, true);
                    if (this._terminal.buffer.x + 1 >= this._terminal.cols) {
                        this._terminal.buffer.lines.get(j + 1).isWrapped = false;
                    }
                    while (j--) {
                        this._resetBufferLine(j);
                    }
                    this._terminal.updateRange(0);
                    break;
                case 2:
                    j = this._terminal.rows;
                    this._terminal.updateRange(j - 1);
                    while (j--) {
                        this._resetBufferLine(j);
                    }
                    this._terminal.updateRange(0);
                    break;
                case 3:
                    var scrollBackSize = this._terminal.buffer.lines.length - this._terminal.rows;
                    if (scrollBackSize > 0) {
                        this._terminal.buffer.lines.trimStart(scrollBackSize);
                        this._terminal.buffer.ybase = Math.max(this._terminal.buffer.ybase - scrollBackSize, 0);
                        this._terminal.buffer.ydisp = Math.max(this._terminal.buffer.ydisp - scrollBackSize, 0);
                        this._onScroll.fire(0);
                    }
                    break;
            }
        };
        InputHandler.prototype.eraseInLine = function (params) {
            switch (params[0]) {
                case 0:
                    this._eraseInBufferLine(this._terminal.buffer.y, this._terminal.buffer.x, this._terminal.cols);
                    break;
                case 1:
                    this._eraseInBufferLine(this._terminal.buffer.y, 0, this._terminal.buffer.x + 1);
                    break;
                case 2:
                    this._eraseInBufferLine(this._terminal.buffer.y, 0, this._terminal.cols);
                    break;
            }
            this._terminal.updateRange(this._terminal.buffer.y);
        };
        InputHandler.prototype.insertLines = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            var buffer = this._terminal.buffer;
            var row = buffer.y + buffer.ybase;
            var scrollBottomRowsOffset = this._terminal.rows - 1 - buffer.scrollBottom;
            var scrollBottomAbsolute = this._terminal.rows - 1 + buffer.ybase - scrollBottomRowsOffset + 1;
            while (param--) {
                buffer.lines.splice(scrollBottomAbsolute - 1, 1);
                buffer.lines.splice(row, 0, buffer.getBlankLine(this._terminal.eraseAttrData()));
            }
            this._terminal.updateRange(buffer.y);
            this._terminal.updateRange(buffer.scrollBottom);
        };
        InputHandler.prototype.deleteLines = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            var buffer = this._terminal.buffer;
            var row = buffer.y + buffer.ybase;
            var j;
            j = this._terminal.rows - 1 - buffer.scrollBottom;
            j = this._terminal.rows - 1 + buffer.ybase - j;
            while (param--) {
                buffer.lines.splice(row, 1);
                buffer.lines.splice(j, 0, buffer.getBlankLine(this._terminal.eraseAttrData()));
            }
            this._terminal.updateRange(buffer.y);
            this._terminal.updateRange(buffer.scrollBottom);
        };
        InputHandler.prototype.deleteChars = function (params) {
            this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).deleteCells(this._terminal.buffer.x, params[0] || 1, this._terminal.buffer.getNullCell(this._terminal.eraseAttrData()));
            this._terminal.updateRange(this._terminal.buffer.y);
        };
        InputHandler.prototype.scrollUp = function (params) {
            var param = params[0] || 1;
            var buffer = this._terminal.buffer;
            while (param--) {
                buffer.lines.splice(buffer.ybase + buffer.scrollTop, 1);
                buffer.lines.splice(buffer.ybase + buffer.scrollBottom, 0, buffer.getBlankLine(Buffer_1.DEFAULT_ATTR_DATA));
            }
            this._terminal.updateRange(buffer.scrollTop);
            this._terminal.updateRange(buffer.scrollBottom);
        };
        InputHandler.prototype.scrollDown = function (params, collect) {
            if (params.length < 2 && !collect) {
                var param = params[0] || 1;
                var buffer = this._terminal.buffer;
                while (param--) {
                    buffer.lines.splice(buffer.ybase + buffer.scrollBottom, 1);
                    buffer.lines.splice(buffer.ybase + buffer.scrollTop, 0, buffer.getBlankLine(Buffer_1.DEFAULT_ATTR_DATA));
                }
                this._terminal.updateRange(buffer.scrollTop);
                this._terminal.updateRange(buffer.scrollBottom);
            }
        };
        InputHandler.prototype.eraseChars = function (params) {
            this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).replaceCells(this._terminal.buffer.x, this._terminal.buffer.x + (params[0] || 1), this._terminal.buffer.getNullCell(this._terminal.eraseAttrData()));
        };
        InputHandler.prototype.cursorBackwardTab = function (params) {
            var param = params[0] || 1;
            var buffer = this._terminal.buffer;
            while (param--) {
                buffer.x = buffer.prevStop();
            }
        };
        InputHandler.prototype.charPosAbsolute = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            this._terminal.buffer.x = param - 1;
            if (this._terminal.buffer.x >= this._terminal.cols) {
                this._terminal.buffer.x = this._terminal.cols - 1;
            }
        };
        InputHandler.prototype.hPositionRelative = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            this._terminal.buffer.x += param;
            if (this._terminal.buffer.x >= this._terminal.cols) {
                this._terminal.buffer.x = this._terminal.cols - 1;
            }
        };
        InputHandler.prototype.repeatPrecedingCharacter = function (params) {
            var buffer = this._terminal.buffer;
            var line = buffer.lines.get(buffer.ybase + buffer.y);
            line.loadCell(buffer.x - 1, this._workCell);
            line.replaceCells(buffer.x, buffer.x + (params[0] || 1), (this._workCell.content !== undefined) ? this._workCell : buffer.getNullCell(Buffer_1.DEFAULT_ATTR_DATA));
        };
        InputHandler.prototype.sendDeviceAttributes = function (params, collect) {
            if (params[0] > 0) {
                return;
            }
            if (!collect) {
                if (this._terminal.is('xterm') || this._terminal.is('rxvt-unicode') || this._terminal.is('screen')) {
                    this._terminal.handler(EscapeSequences.C0.ESC + '[?1;2c');
                }
                else if (this._terminal.is('linux')) {
                    this._terminal.handler(EscapeSequences.C0.ESC + '[?6c');
                }
            }
            else if (collect === '>') {
                if (this._terminal.is('xterm')) {
                    this._terminal.handler(EscapeSequences.C0.ESC + '[>0;276;0c');
                }
                else if (this._terminal.is('rxvt-unicode')) {
                    this._terminal.handler(EscapeSequences.C0.ESC + '[>85;95;0c');
                }
                else if (this._terminal.is('linux')) {
                    this._terminal.handler(params[0] + 'c');
                }
                else if (this._terminal.is('screen')) {
                    this._terminal.handler(EscapeSequences.C0.ESC + '[>83;40003;0c');
                }
            }
        };
        InputHandler.prototype.linePosAbsolute = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            this._terminal.buffer.y = param - 1;
            if (this._terminal.buffer.y >= this._terminal.rows) {
                this._terminal.buffer.y = this._terminal.rows - 1;
            }
        };
        InputHandler.prototype.vPositionRelative = function (params) {
            var param = params[0];
            if (param < 1) {
                param = 1;
            }
            this._terminal.buffer.y += param;
            if (this._terminal.buffer.y >= this._terminal.rows) {
                this._terminal.buffer.y = this._terminal.rows - 1;
            }
            if (this._terminal.buffer.x >= this._terminal.cols) {
                this._terminal.buffer.x--;
            }
        };
        InputHandler.prototype.hVPosition = function (params) {
            if (params[0] < 1)
                params[0] = 1;
            if (params[1] < 1)
                params[1] = 1;
            this._terminal.buffer.y = params[0] - 1;
            if (this._terminal.buffer.y >= this._terminal.rows) {
                this._terminal.buffer.y = this._terminal.rows - 1;
            }
            this._terminal.buffer.x = params[1] - 1;
            if (this._terminal.buffer.x >= this._terminal.cols) {
                this._terminal.buffer.x = this._terminal.cols - 1;
            }
        };
        InputHandler.prototype.tabClear = function (params) {
            var param = params[0];
            if (param <= 0) {
                delete this._terminal.buffer.tabs[this._terminal.buffer.x];
            }
            else if (param === 3) {
                this._terminal.buffer.tabs = {};
            }
        };
        InputHandler.prototype.setMode = function (params, collect) {
            if (params.length > 1) {
                for (var i = 0; i < params.length; i++) {
                    this.setMode([params[i]]);
                }
                return;
            }
            if (!collect) {
                switch (params[0]) {
                    case 4:
                        this._terminal.insertMode = true;
                        break;
                    case 20:
                        break;
                }
            }
            else if (collect === '?') {
                switch (params[0]) {
                    case 1:
                        this._terminal.applicationCursor = true;
                        break;
                    case 2:
                        this._terminal.setgCharset(0, Charsets.DEFAULT_CHARSET);
                        this._terminal.setgCharset(1, Charsets.DEFAULT_CHARSET);
                        this._terminal.setgCharset(2, Charsets.DEFAULT_CHARSET);
                        this._terminal.setgCharset(3, Charsets.DEFAULT_CHARSET);
                        break;
                    case 3:
                        this._terminal.savedCols = this._terminal.cols;
                        this._terminal.resize(132, this._terminal.rows);
                        break;
                    case 6:
                        this._terminal.originMode = true;
                        break;
                    case 7:
                        this._terminal.wraparoundMode = true;
                        break;
                    case 12:
                        break;
                    case 66:
                        this._terminal.log('Serial port requested application keypad.');
                        this._terminal.applicationKeypad = true;
                        if (this._terminal.viewport) {
                            this._terminal.viewport.syncScrollArea();
                        }
                        break;
                    case 9:
                    case 1000:
                    case 1002:
                    case 1003:
                        this._terminal.x10Mouse = params[0] === 9;
                        this._terminal.vt200Mouse = params[0] === 1000;
                        this._terminal.normalMouse = params[0] > 1000;
                        this._terminal.mouseEvents = true;
                        if (this._terminal.element) {
                            this._terminal.element.classList.add('enable-mouse-events');
                        }
                        if (this._terminal.selectionManager) {
                            this._terminal.selectionManager.disable();
                        }
                        this._terminal.log('Binding to mouse events.');
                        break;
                    case 1004:
                        this._terminal.sendFocus = true;
                        break;
                    case 1005:
                        this._terminal.utfMouse = true;
                        break;
                    case 1006:
                        this._terminal.sgrMouse = true;
                        break;
                    case 1015:
                        this._terminal.urxvtMouse = true;
                        break;
                    case 25:
                        this._terminal.cursorHidden = false;
                        break;
                    case 1048:
                        this.saveCursor(params);
                        break;
                    case 1049:
                        this.saveCursor(params);
                    case 47:
                    case 1047:
                        this._terminal.buffers.activateAltBuffer(this._terminal.eraseAttrData());
                        this._terminal.refresh(0, this._terminal.rows - 1);
                        if (this._terminal.viewport) {
                            this._terminal.viewport.syncScrollArea();
                        }
                        this._terminal.showCursor();
                        break;
                    case 2004:
                        this._terminal.bracketedPasteMode = true;
                        break;
                }
            }
        };
        InputHandler.prototype.resetMode = function (params, collect) {
            if (params.length > 1) {
                for (var i = 0; i < params.length; i++) {
                    this.resetMode([params[i]]);
                }
                return;
            }
            if (!collect) {
                switch (params[0]) {
                    case 4:
                        this._terminal.insertMode = false;
                        break;
                    case 20:
                        break;
                }
            }
            else if (collect === '?') {
                switch (params[0]) {
                    case 1:
                        this._terminal.applicationCursor = false;
                        break;
                    case 3:
                        if (this._terminal.cols === 132 && this._terminal.savedCols) {
                            this._terminal.resize(this._terminal.savedCols, this._terminal.rows);
                        }
                        delete this._terminal.savedCols;
                        break;
                    case 6:
                        this._terminal.originMode = false;
                        break;
                    case 7:
                        this._terminal.wraparoundMode = false;
                        break;
                    case 12:
                        break;
                    case 66:
                        this._terminal.log('Switching back to normal keypad.');
                        this._terminal.applicationKeypad = false;
                        if (this._terminal.viewport) {
                            this._terminal.viewport.syncScrollArea();
                        }
                        break;
                    case 9:
                    case 1000:
                    case 1002:
                    case 1003:
                        this._terminal.x10Mouse = false;
                        this._terminal.vt200Mouse = false;
                        this._terminal.normalMouse = false;
                        this._terminal.mouseEvents = false;
                        if (this._terminal.element) {
                            this._terminal.element.classList.remove('enable-mouse-events');
                        }
                        if (this._terminal.selectionManager) {
                            this._terminal.selectionManager.enable();
                        }
                        break;
                    case 1004:
                        this._terminal.sendFocus = false;
                        break;
                    case 1005:
                        this._terminal.utfMouse = false;
                        break;
                    case 1006:
                        this._terminal.sgrMouse = false;
                        break;
                    case 1015:
                        this._terminal.urxvtMouse = false;
                        break;
                    case 25:
                        this._terminal.cursorHidden = true;
                        break;
                    case 1048:
                        this.restoreCursor(params);
                        break;
                    case 1049:
                    case 47:
                    case 1047:
                        this._terminal.buffers.activateNormalBuffer();
                        if (params[0] === 1049) {
                            this.restoreCursor(params);
                        }
                        this._terminal.refresh(0, this._terminal.rows - 1);
                        if (this._terminal.viewport) {
                            this._terminal.viewport.syncScrollArea();
                        }
                        this._terminal.showCursor();
                        break;
                    case 2004:
                        this._terminal.bracketedPasteMode = false;
                        break;
                }
            }
        };
        InputHandler.prototype.charAttributes = function (params) {
            if (params.length === 1 && params[0] === 0) {
                this._terminal.curAttrData.fg = Buffer_1.DEFAULT_ATTR_DATA.fg;
                this._terminal.curAttrData.bg = Buffer_1.DEFAULT_ATTR_DATA.bg;
                return;
            }
            var l = params.length;
            var p;
            var attr = this._terminal.curAttrData;
            for (var i = 0; i < l; i++) {
                p = params[i];
                if (p >= 30 && p <= 37) {
                    attr.fg &= ~(50331648 | 255);
                    attr.fg |= 16777216 | (p - 30);
                }
                else if (p >= 40 && p <= 47) {
                    attr.bg &= ~(50331648 | 255);
                    attr.bg |= 16777216 | (p - 40);
                }
                else if (p >= 90 && p <= 97) {
                    attr.fg &= ~(50331648 | 255);
                    attr.fg |= 16777216 | (p - 90) | 8;
                }
                else if (p >= 100 && p <= 107) {
                    attr.bg &= ~(50331648 | 255);
                    attr.bg |= 16777216 | (p - 100) | 8;
                }
                else if (p === 0) {
                    attr.fg = Buffer_1.DEFAULT_ATTR_DATA.fg;
                    attr.bg = Buffer_1.DEFAULT_ATTR_DATA.bg;
                }
                else if (p === 1) {
                    attr.fg |= 134217728;
                }
                else if (p === 3) {
                    attr.bg |= 67108864;
                }
                else if (p === 4) {
                    attr.fg |= 268435456;
                }
                else if (p === 5) {
                    attr.fg |= 536870912;
                }
                else if (p === 7) {
                    attr.fg |= 67108864;
                }
                else if (p === 8) {
                    attr.fg |= 1073741824;
                }
                else if (p === 2) {
                    attr.bg |= 134217728;
                }
                else if (p === 22) {
                    attr.fg &= ~134217728;
                    attr.bg &= ~134217728;
                }
                else if (p === 23) {
                    attr.bg &= ~67108864;
                }
                else if (p === 24) {
                    attr.fg &= ~268435456;
                }
                else if (p === 25) {
                    attr.fg &= ~536870912;
                }
                else if (p === 27) {
                    attr.fg &= ~67108864;
                }
                else if (p === 28) {
                    attr.fg &= ~1073741824;
                }
                else if (p === 39) {
                    attr.fg &= ~(50331648 | 16777215);
                    attr.fg |= Buffer_1.DEFAULT_ATTR_DATA.fg & (255 | 16777215);
                }
                else if (p === 49) {
                    attr.bg &= ~(50331648 | 16777215);
                    attr.bg |= Buffer_1.DEFAULT_ATTR_DATA.bg & (255 | 16777215);
                }
                else if (p === 38) {
                    if (params[i + 1] === 2) {
                        i += 2;
                        attr.fg |= 50331648;
                        attr.fg &= ~16777215;
                        attr.fg |= BufferLine_1.AttributeData.fromColorRGB([params[i], params[i + 1], params[i + 2]]);
                        i += 2;
                    }
                    else if (params[i + 1] === 5) {
                        i += 2;
                        p = params[i] & 0xff;
                        attr.fg &= ~255;
                        attr.fg |= 33554432 | p;
                    }
                }
                else if (p === 48) {
                    if (params[i + 1] === 2) {
                        i += 2;
                        attr.bg |= 50331648;
                        attr.bg &= ~16777215;
                        attr.bg |= BufferLine_1.AttributeData.fromColorRGB([params[i], params[i + 1], params[i + 2]]);
                        i += 2;
                    }
                    else if (params[i + 1] === 5) {
                        i += 2;
                        p = params[i] & 0xff;
                        attr.bg &= ~255;
                        attr.bg |= 33554432 | p;
                    }
                }
                else if (p === 100) {
                    attr.fg &= ~(50331648 | 16777215);
                    attr.fg |= Buffer_1.DEFAULT_ATTR_DATA.fg & (255 | 16777215);
                    attr.bg &= ~(50331648 | 16777215);
                    attr.bg |= Buffer_1.DEFAULT_ATTR_DATA.bg & (255 | 16777215);
                }
                else {
                    this._terminal.error('Unknown SGR attribute: %d.', p);
                }
            }
        };
        InputHandler.prototype.deviceStatus = function (params, collect) {
            if (!collect) {
                switch (params[0]) {
                    case 5:
                        this._onData.fire(EscapeSequences.C0.ESC + "[0n");
                        break;
                    case 6:
                        var y = this._terminal.buffer.y + 1;
                        var x = this._terminal.buffer.x + 1;
                        this._onData.fire(EscapeSequences.C0.ESC + "[" + y + ";" + x + "R");
                        break;
                }
            }
            else if (collect === '?') {
                switch (params[0]) {
                    case 6:
                        var y = this._terminal.buffer.y + 1;
                        var x = this._terminal.buffer.x + 1;
                        this._onData.fire(EscapeSequences.C0.ESC + "[?" + y + ";" + x + "R");
                        break;
                    case 15:
                        break;
                    case 25:
                        break;
                    case 26:
                        break;
                    case 53:
                        break;
                }
            }
        };
        InputHandler.prototype.softReset = function (params, collect) {
            if (collect === '!') {
                this._terminal.cursorHidden = false;
                this._terminal.insertMode = false;
                this._terminal.originMode = false;
                this._terminal.wraparoundMode = true;
                this._terminal.applicationKeypad = false;
                if (this._terminal.viewport) {
                    this._terminal.viewport.syncScrollArea();
                }
                this._terminal.applicationCursor = false;
                this._terminal.buffer.scrollTop = 0;
                this._terminal.buffer.scrollBottom = this._terminal.rows - 1;
                this._terminal.curAttrData = Buffer_1.DEFAULT_ATTR_DATA;
                this._terminal.buffer.x = this._terminal.buffer.y = 0;
                this._terminal.charset = null;
                this._terminal.glevel = 0;
                this._terminal.charsets = [null];
            }
        };
        InputHandler.prototype.setCursorStyle = function (params, collect) {
            if (collect === ' ') {
                var param = params[0] < 1 ? 1 : params[0];
                switch (param) {
                    case 1:
                    case 2:
                        this._terminal.setOption('cursorStyle', 'block');
                        break;
                    case 3:
                    case 4:
                        this._terminal.setOption('cursorStyle', 'underline');
                        break;
                    case 5:
                    case 6:
                        this._terminal.setOption('cursorStyle', 'bar');
                        break;
                }
                var isBlinking = param % 2 === 1;
                this._terminal.setOption('cursorBlink', isBlinking);
            }
        };
        InputHandler.prototype.setScrollRegion = function (params, collect) {
            if (collect) {
                return;
            }
            this._terminal.buffer.scrollTop = (params[0] || 1) - 1;
            this._terminal.buffer.scrollBottom = (params[1] && params[1] <= this._terminal.rows ? params[1] : this._terminal.rows) - 1;
            this._terminal.buffer.x = 0;
            this._terminal.buffer.y = 0;
        };
        InputHandler.prototype.saveCursor = function (params) {
            this._terminal.buffer.savedX = this._terminal.buffer.x;
            this._terminal.buffer.savedY = this._terminal.buffer.y;
            this._terminal.buffer.savedCurAttrData.fg = this._terminal.curAttrData.fg;
            this._terminal.buffer.savedCurAttrData.bg = this._terminal.curAttrData.bg;
        };
        InputHandler.prototype.restoreCursor = function (params) {
            this._terminal.buffer.x = this._terminal.buffer.savedX || 0;
            this._terminal.buffer.y = this._terminal.buffer.savedY || 0;
            this._terminal.curAttrData.fg = this._terminal.buffer.savedCurAttrData.fg;
            this._terminal.curAttrData.bg = this._terminal.buffer.savedCurAttrData.bg;
        };
        InputHandler.prototype.setTitle = function (data) {
            this._terminal.handleTitle(data);
        };
        InputHandler.prototype.nextLine = function () {
            this._terminal.buffer.x = 0;
            this.index();
        };
        InputHandler.prototype.keypadApplicationMode = function () {
            this._terminal.log('Serial port requested application keypad.');
            this._terminal.applicationKeypad = true;
            if (this._terminal.viewport) {
                this._terminal.viewport.syncScrollArea();
            }
        };
        InputHandler.prototype.keypadNumericMode = function () {
            this._terminal.log('Switching back to normal keypad.');
            this._terminal.applicationKeypad = false;
            if (this._terminal.viewport) {
                this._terminal.viewport.syncScrollArea();
            }
        };
        InputHandler.prototype.selectDefaultCharset = function () {
            this._terminal.setgLevel(0);
            this._terminal.setgCharset(0, Charsets.DEFAULT_CHARSET);
        };
        InputHandler.prototype.selectCharset = function (collectAndFlag) {
            if (collectAndFlag.length !== 2) {
                this.selectDefaultCharset();
                return;
            }
            if (collectAndFlag[0] === '/') {
                return;
            }
            this._terminal.setgCharset(GLEVEL[collectAndFlag[0]], Charsets.CHARSETS[collectAndFlag[1]] || Charsets.DEFAULT_CHARSET);
            return;
        };
        InputHandler.prototype.index = function () {
            this._terminal.index();
        };
        InputHandler.prototype.tabSet = function () {
            this._terminal.tabSet();
        };
        InputHandler.prototype.reverseIndex = function () {
            this._terminal.reverseIndex();
        };
        InputHandler.prototype.reset = function () {
            this._parser.reset();
            this._terminal.reset();
        };
        InputHandler.prototype.setgLevel = function (level) {
            this._terminal.setgLevel(level);
        };
        return InputHandler;
    }(Lifecycle.Disposable));
    exports.InputHandler = InputHandler;

    });

    unwrapExports(InputHandler_1);
    var InputHandler_2 = InputHandler_1.InputHandler;

    var GridCache_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var GridCache = (function () {
        function GridCache() {
            this.cache = [];
        }
        GridCache.prototype.resize = function (width, height) {
            for (var x = 0; x < width; x++) {
                if (this.cache.length <= x) {
                    this.cache.push([]);
                }
                for (var y = this.cache[x].length; y < height; y++) {
                    this.cache[x].push(null);
                }
                this.cache[x].length = height;
            }
            this.cache.length = width;
        };
        GridCache.prototype.clear = function () {
            for (var x = 0; x < this.cache.length; x++) {
                for (var y = 0; y < this.cache[x].length; y++) {
                    this.cache[x][y] = null;
                }
            }
        };
        return GridCache;
    }());
    exports.GridCache = GridCache;

    });

    unwrapExports(GridCache_1);
    var GridCache_2 = GridCache_1.GridCache;

    var CharAtlasUtils = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    function generateConfig(scaledCharWidth, scaledCharHeight, terminal, colors) {
        var clonedColors = {
            foreground: colors.foreground,
            background: colors.background,
            cursor: null,
            cursorAccent: null,
            selection: null,
            ansi: colors.ansi.slice(0, 16)
        };
        return {
            type: terminal.options.experimentalCharAtlas,
            devicePixelRatio: window.devicePixelRatio,
            scaledCharWidth: scaledCharWidth,
            scaledCharHeight: scaledCharHeight,
            fontFamily: terminal.options.fontFamily,
            fontSize: terminal.options.fontSize,
            fontWeight: terminal.options.fontWeight,
            fontWeightBold: terminal.options.fontWeightBold,
            allowTransparency: terminal.options.allowTransparency,
            colors: clonedColors
        };
    }
    exports.generateConfig = generateConfig;
    function configEquals(a, b) {
        for (var i = 0; i < a.colors.ansi.length; i++) {
            if (a.colors.ansi[i].rgba !== b.colors.ansi[i].rgba) {
                return false;
            }
        }
        return a.type === b.type &&
            a.devicePixelRatio === b.devicePixelRatio &&
            a.fontFamily === b.fontFamily &&
            a.fontSize === b.fontSize &&
            a.fontWeight === b.fontWeight &&
            a.fontWeightBold === b.fontWeightBold &&
            a.allowTransparency === b.allowTransparency &&
            a.scaledCharWidth === b.scaledCharWidth &&
            a.scaledCharHeight === b.scaledCharHeight &&
            a.colors.foreground === b.colors.foreground &&
            a.colors.background === b.colors.background;
    }
    exports.configEquals = configEquals;
    function is256Color(colorCode) {
        return colorCode < Types.DEFAULT_COLOR;
    }
    exports.is256Color = is256Color;

    });

    unwrapExports(CharAtlasUtils);
    var CharAtlasUtils_1 = CharAtlasUtils.generateConfig;
    var CharAtlasUtils_2 = CharAtlasUtils.configEquals;
    var CharAtlasUtils_3 = CharAtlasUtils.is256Color;

    var BaseCharAtlas_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseCharAtlas = (function () {
        function BaseCharAtlas() {
            this._didWarmUp = false;
        }
        BaseCharAtlas.prototype.dispose = function () { };
        BaseCharAtlas.prototype.warmUp = function () {
            if (!this._didWarmUp) {
                this._doWarmUp();
                this._didWarmUp = true;
            }
        };
        BaseCharAtlas.prototype._doWarmUp = function () { };
        BaseCharAtlas.prototype.beginFrame = function () { };
        return BaseCharAtlas;
    }());
    exports.default = BaseCharAtlas;

    });

    unwrapExports(BaseCharAtlas_1);

    var ColorManager_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFAULT_FOREGROUND = fromHex('#ffffff');
    var DEFAULT_BACKGROUND = fromHex('#000000');
    var DEFAULT_CURSOR = fromHex('#ffffff');
    var DEFAULT_CURSOR_ACCENT = fromHex('#000000');
    var DEFAULT_SELECTION = {
        css: 'rgba(255, 255, 255, 0.3)',
        rgba: 0xFFFFFF77
    };
    exports.DEFAULT_ANSI_COLORS = (function () {
        var colors = [
            fromHex('#2e3436'),
            fromHex('#cc0000'),
            fromHex('#4e9a06'),
            fromHex('#c4a000'),
            fromHex('#3465a4'),
            fromHex('#75507b'),
            fromHex('#06989a'),
            fromHex('#d3d7cf'),
            fromHex('#555753'),
            fromHex('#ef2929'),
            fromHex('#8ae234'),
            fromHex('#fce94f'),
            fromHex('#729fcf'),
            fromHex('#ad7fa8'),
            fromHex('#34e2e2'),
            fromHex('#eeeeec')
        ];
        var v = [0x00, 0x5f, 0x87, 0xaf, 0xd7, 0xff];
        for (var i = 0; i < 216; i++) {
            var r = v[(i / 36) % 6 | 0];
            var g = v[(i / 6) % 6 | 0];
            var b = v[i % 6];
            colors.push({
                css: "#" + toPaddedHex(r) + toPaddedHex(g) + toPaddedHex(b),
                rgba: ((r << 24) | (g << 16) | (b << 8) | 0xFF) >>> 0
            });
        }
        for (var i = 0; i < 24; i++) {
            var c = 8 + i * 10;
            var ch = toPaddedHex(c);
            colors.push({
                css: "#" + ch + ch + ch,
                rgba: ((c << 24) | (c << 16) | (c << 8) | 0xFF) >>> 0
            });
        }
        return colors;
    })();
    function fromHex(css) {
        return {
            css: css,
            rgba: parseInt(css.slice(1), 16) << 8 | 0xFF
        };
    }
    function toPaddedHex(c) {
        var s = c.toString(16);
        return s.length < 2 ? '0' + s : s;
    }
    var ColorManager = (function () {
        function ColorManager(document, allowTransparency) {
            this.allowTransparency = allowTransparency;
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = 1;
            this._ctx = canvas.getContext('2d');
            this._ctx.globalCompositeOperation = 'copy';
            this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1);
            this.colors = {
                foreground: DEFAULT_FOREGROUND,
                background: DEFAULT_BACKGROUND,
                cursor: DEFAULT_CURSOR,
                cursorAccent: DEFAULT_CURSOR_ACCENT,
                selection: DEFAULT_SELECTION,
                ansi: exports.DEFAULT_ANSI_COLORS.slice()
            };
        }
        ColorManager.prototype.setTheme = function (theme) {
            this.colors.foreground = this._parseColor(theme.foreground, DEFAULT_FOREGROUND);
            this.colors.background = this._parseColor(theme.background, DEFAULT_BACKGROUND);
            this.colors.cursor = this._parseColor(theme.cursor, DEFAULT_CURSOR, true);
            this.colors.cursorAccent = this._parseColor(theme.cursorAccent, DEFAULT_CURSOR_ACCENT, true);
            this.colors.selection = this._parseColor(theme.selection, DEFAULT_SELECTION, true);
            this.colors.ansi[0] = this._parseColor(theme.black, exports.DEFAULT_ANSI_COLORS[0]);
            this.colors.ansi[1] = this._parseColor(theme.red, exports.DEFAULT_ANSI_COLORS[1]);
            this.colors.ansi[2] = this._parseColor(theme.green, exports.DEFAULT_ANSI_COLORS[2]);
            this.colors.ansi[3] = this._parseColor(theme.yellow, exports.DEFAULT_ANSI_COLORS[3]);
            this.colors.ansi[4] = this._parseColor(theme.blue, exports.DEFAULT_ANSI_COLORS[4]);
            this.colors.ansi[5] = this._parseColor(theme.magenta, exports.DEFAULT_ANSI_COLORS[5]);
            this.colors.ansi[6] = this._parseColor(theme.cyan, exports.DEFAULT_ANSI_COLORS[6]);
            this.colors.ansi[7] = this._parseColor(theme.white, exports.DEFAULT_ANSI_COLORS[7]);
            this.colors.ansi[8] = this._parseColor(theme.brightBlack, exports.DEFAULT_ANSI_COLORS[8]);
            this.colors.ansi[9] = this._parseColor(theme.brightRed, exports.DEFAULT_ANSI_COLORS[9]);
            this.colors.ansi[10] = this._parseColor(theme.brightGreen, exports.DEFAULT_ANSI_COLORS[10]);
            this.colors.ansi[11] = this._parseColor(theme.brightYellow, exports.DEFAULT_ANSI_COLORS[11]);
            this.colors.ansi[12] = this._parseColor(theme.brightBlue, exports.DEFAULT_ANSI_COLORS[12]);
            this.colors.ansi[13] = this._parseColor(theme.brightMagenta, exports.DEFAULT_ANSI_COLORS[13]);
            this.colors.ansi[14] = this._parseColor(theme.brightCyan, exports.DEFAULT_ANSI_COLORS[14]);
            this.colors.ansi[15] = this._parseColor(theme.brightWhite, exports.DEFAULT_ANSI_COLORS[15]);
        };
        ColorManager.prototype._parseColor = function (css, fallback, allowTransparency) {
            if (allowTransparency === void 0) { allowTransparency = this.allowTransparency; }
            if (!css) {
                return fallback;
            }
            this._ctx.fillStyle = this._litmusColor;
            this._ctx.fillStyle = css;
            if (typeof this._ctx.fillStyle !== 'string') {
                console.warn("Color: " + css + " is invalid using fallback " + fallback.css);
                return fallback;
            }
            this._ctx.fillRect(0, 0, 1, 1);
            var data = this._ctx.getImageData(0, 0, 1, 1).data;
            if (!allowTransparency && data[3] !== 0xFF) {
                console.warn("Color: " + css + " is using transparency, but allowTransparency is false. " +
                    ("Using fallback " + fallback.css + "."));
                return fallback;
            }
            return {
                css: css,
                rgba: (data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3]) >>> 0
            };
        };
        return ColorManager;
    }());
    exports.ColorManager = ColorManager;

    });

    unwrapExports(ColorManager_1);
    var ColorManager_2 = ColorManager_1.DEFAULT_ANSI_COLORS;
    var ColorManager_3 = ColorManager_1.ColorManager;

    var Platform = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var isNode = (typeof navigator === 'undefined') ? true : false;
    var userAgent = (isNode) ? 'node' : navigator.userAgent;
    var platform = (isNode) ? 'node' : navigator.platform;
    exports.isFirefox = !!~userAgent.indexOf('Firefox');
    exports.isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    exports.isMSIE = !!~userAgent.indexOf('MSIE') || !!~userAgent.indexOf('Trident');
    exports.isMac = contains(['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'], platform);
    exports.isIpad = platform === 'iPad';
    exports.isIphone = platform === 'iPhone';
    exports.isMSWindows = contains(['Windows', 'Win16', 'Win32', 'WinCE'], platform);
    exports.isLinux = platform.indexOf('Linux') >= 0;
    function contains(arr, el) {
        return arr.indexOf(el) >= 0;
    }

    });

    unwrapExports(Platform);
    var Platform_1 = Platform.isFirefox;
    var Platform_2 = Platform.isSafari;
    var Platform_3 = Platform.isMSIE;
    var Platform_4 = Platform.isMac;
    var Platform_5 = Platform.isIpad;
    var Platform_6 = Platform.isIphone;
    var Platform_7 = Platform.isMSWindows;
    var Platform_8 = Platform.isLinux;

    var CharAtlasGenerator = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    function generateStaticCharAtlasTexture(context, canvasFactory, config) {
        var cellWidth = config.scaledCharWidth + Types.CHAR_ATLAS_CELL_SPACING;
        var cellHeight = config.scaledCharHeight + Types.CHAR_ATLAS_CELL_SPACING;
        var canvas = canvasFactory(255 * cellWidth, (2 + 16 + 16) * cellHeight);
        var ctx = canvas.getContext('2d', { alpha: config.allowTransparency });
        ctx.fillStyle = config.colors.background.css;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.fillStyle = config.colors.foreground.css;
        ctx.font = getFont(config.fontWeight, config);
        ctx.textBaseline = 'middle';
        for (var i = 0; i < 256; i++) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(i * cellWidth, 0, cellWidth, cellHeight);
            ctx.clip();
            ctx.fillText(String.fromCharCode(i), i * cellWidth, cellHeight / 2);
            ctx.restore();
        }
        ctx.save();
        ctx.font = getFont(config.fontWeightBold, config);
        for (var i = 0; i < 256; i++) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(i * cellWidth, cellHeight, cellWidth, cellHeight);
            ctx.clip();
            ctx.fillText(String.fromCharCode(i), i * cellWidth, cellHeight * 1.5);
            ctx.restore();
        }
        ctx.restore();
        ctx.font = getFont(config.fontWeight, config);
        for (var colorIndex = 0; colorIndex < 16; colorIndex++) {
            var y = (colorIndex + 2) * cellHeight;
            for (var i = 0; i < 256; i++) {
                ctx.save();
                ctx.beginPath();
                ctx.rect(i * cellWidth, y, cellWidth, cellHeight);
                ctx.clip();
                ctx.fillStyle = config.colors.ansi[colorIndex].css;
                ctx.fillText(String.fromCharCode(i), i * cellWidth, y + cellHeight / 2);
                ctx.restore();
            }
        }
        ctx.font = getFont(config.fontWeightBold, config);
        for (var colorIndex = 0; colorIndex < 16; colorIndex++) {
            var y = (colorIndex + 2 + 16) * cellHeight;
            for (var i = 0; i < 256; i++) {
                ctx.save();
                ctx.beginPath();
                ctx.rect(i * cellWidth, y, cellWidth, cellHeight);
                ctx.clip();
                ctx.fillStyle = config.colors.ansi[colorIndex].css;
                ctx.fillText(String.fromCharCode(i), i * cellWidth, y + cellHeight / 2);
                ctx.restore();
            }
        }
        ctx.restore();
        if (!('createImageBitmap' in context) || Platform.isFirefox || Platform.isSafari) {
            return canvas;
        }
        var charAtlasImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        clearColor(charAtlasImageData, config.colors.background);
        return context.createImageBitmap(charAtlasImageData);
    }
    exports.generateStaticCharAtlasTexture = generateStaticCharAtlasTexture;
    function clearColor(imageData, color) {
        var isEmpty = true;
        var r = color.rgba >>> 24;
        var g = color.rgba >>> 16 & 0xFF;
        var b = color.rgba >>> 8 & 0xFF;
        for (var offset = 0; offset < imageData.data.length; offset += 4) {
            if (imageData.data[offset] === r &&
                imageData.data[offset + 1] === g &&
                imageData.data[offset + 2] === b) {
                imageData.data[offset + 3] = 0;
            }
            else {
                isEmpty = false;
            }
        }
        return isEmpty;
    }
    exports.clearColor = clearColor;
    function getFont(fontWeight, config) {
        return fontWeight + " " + config.fontSize * config.devicePixelRatio + "px " + config.fontFamily;
    }

    });

    unwrapExports(CharAtlasGenerator);
    var CharAtlasGenerator_1 = CharAtlasGenerator.generateStaticCharAtlasTexture;
    var CharAtlasGenerator_2 = CharAtlasGenerator.clearColor;

    var LRUMap_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var LRUMap = (function () {
        function LRUMap(capacity) {
            this.capacity = capacity;
            this._map = {};
            this._head = null;
            this._tail = null;
            this._nodePool = [];
            this.size = 0;
        }
        LRUMap.prototype._unlinkNode = function (node) {
            var prev = node.prev;
            var next = node.next;
            if (node === this._head) {
                this._head = next;
            }
            if (node === this._tail) {
                this._tail = prev;
            }
            if (prev !== null) {
                prev.next = next;
            }
            if (next !== null) {
                next.prev = prev;
            }
        };
        LRUMap.prototype._appendNode = function (node) {
            var tail = this._tail;
            if (tail !== null) {
                tail.next = node;
            }
            node.prev = tail;
            node.next = null;
            this._tail = node;
            if (this._head === null) {
                this._head = node;
            }
        };
        LRUMap.prototype.prealloc = function (count) {
            var nodePool = this._nodePool;
            for (var i = 0; i < count; i++) {
                nodePool.push({
                    prev: null,
                    next: null,
                    key: null,
                    value: null
                });
            }
        };
        LRUMap.prototype.get = function (key) {
            var node = this._map[key];
            if (node !== undefined) {
                this._unlinkNode(node);
                this._appendNode(node);
                return node.value;
            }
            return null;
        };
        LRUMap.prototype.peekValue = function (key) {
            var node = this._map[key];
            if (node !== undefined) {
                return node.value;
            }
            return null;
        };
        LRUMap.prototype.peek = function () {
            var head = this._head;
            return head === null ? null : head.value;
        };
        LRUMap.prototype.set = function (key, value) {
            var node = this._map[key];
            if (node !== undefined) {
                node = this._map[key];
                this._unlinkNode(node);
                node.value = value;
            }
            else if (this.size >= this.capacity) {
                node = this._head;
                this._unlinkNode(node);
                delete this._map[node.key];
                node.key = key;
                node.value = value;
                this._map[key] = node;
            }
            else {
                var nodePool = this._nodePool;
                if (nodePool.length > 0) {
                    node = nodePool.pop();
                    node.key = key;
                    node.value = value;
                }
                else {
                    node = {
                        prev: null,
                        next: null,
                        key: key,
                        value: value
                    };
                }
                this._map[key] = node;
                this.size++;
            }
            this._appendNode(node);
        };
        return LRUMap;
    }());
    exports.default = LRUMap;

    });

    unwrapExports(LRUMap_1);

    var DynamicCharAtlas_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });






    var TEXTURE_WIDTH = 1024;
    var TEXTURE_HEIGHT = 1024;
    var TRANSPARENT_COLOR = {
        css: 'rgba(0, 0, 0, 0)',
        rgba: 0
    };
    var FRAME_CACHE_DRAW_LIMIT = 100;
    var GLYPH_BITMAP_COMMIT_DELAY = 100;
    function getGlyphCacheKey(glyph) {
        return glyph.code << 21 | glyph.bg << 12 | glyph.fg << 3 | (glyph.bold ? 0 : 4) + (glyph.dim ? 0 : 2) + (glyph.italic ? 0 : 1);
    }
    exports.getGlyphCacheKey = getGlyphCacheKey;
    var DynamicCharAtlas = (function (_super) {
        __extends(DynamicCharAtlas, _super);
        function DynamicCharAtlas(document, _config) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._drawToCacheCount = 0;
            _this._glyphsWaitingOnBitmap = [];
            _this._bitmapCommitTimeout = null;
            _this._bitmap = null;
            _this._cacheCanvas = document.createElement('canvas');
            _this._cacheCanvas.width = TEXTURE_WIDTH;
            _this._cacheCanvas.height = TEXTURE_HEIGHT;
            _this._cacheCtx = _this._cacheCanvas.getContext('2d', { alpha: true });
            var tmpCanvas = document.createElement('canvas');
            tmpCanvas.width = _this._config.scaledCharWidth;
            tmpCanvas.height = _this._config.scaledCharHeight;
            _this._tmpCtx = tmpCanvas.getContext('2d', { alpha: _this._config.allowTransparency });
            _this._width = Math.floor(TEXTURE_WIDTH / _this._config.scaledCharWidth);
            _this._height = Math.floor(TEXTURE_HEIGHT / _this._config.scaledCharHeight);
            var capacity = _this._width * _this._height;
            _this._cacheMap = new LRUMap_1.default(capacity);
            _this._cacheMap.prealloc(capacity);
            return _this;
        }
        DynamicCharAtlas.prototype.dispose = function () {
            if (this._bitmapCommitTimeout !== null) {
                window.clearTimeout(this._bitmapCommitTimeout);
                this._bitmapCommitTimeout = null;
            }
        };
        DynamicCharAtlas.prototype.beginFrame = function () {
            this._drawToCacheCount = 0;
        };
        DynamicCharAtlas.prototype.draw = function (ctx, glyph, x, y) {
            if (glyph.code === 32) {
                return true;
            }
            if (!this._canCache(glyph)) {
                return false;
            }
            var glyphKey = getGlyphCacheKey(glyph);
            var cacheValue = this._cacheMap.get(glyphKey);
            if (cacheValue !== null && cacheValue !== undefined) {
                this._drawFromCache(ctx, cacheValue, x, y);
                return true;
            }
            else if (this._drawToCacheCount < FRAME_CACHE_DRAW_LIMIT) {
                var index = void 0;
                if (this._cacheMap.size < this._cacheMap.capacity) {
                    index = this._cacheMap.size;
                }
                else {
                    index = this._cacheMap.peek().index;
                }
                var cacheValue_1 = this._drawToCache(glyph, index);
                this._cacheMap.set(glyphKey, cacheValue_1);
                this._drawFromCache(ctx, cacheValue_1, x, y);
                return true;
            }
            return false;
        };
        DynamicCharAtlas.prototype._canCache = function (glyph) {
            return glyph.code < 256;
        };
        DynamicCharAtlas.prototype._toCoordinateX = function (index) {
            return (index % this._width) * this._config.scaledCharWidth;
        };
        DynamicCharAtlas.prototype._toCoordinateY = function (index) {
            return Math.floor(index / this._width) * this._config.scaledCharHeight;
        };
        DynamicCharAtlas.prototype._drawFromCache = function (ctx, cacheValue, x, y) {
            if (cacheValue.isEmpty) {
                return;
            }
            var cacheX = this._toCoordinateX(cacheValue.index);
            var cacheY = this._toCoordinateY(cacheValue.index);
            ctx.drawImage(cacheValue.inBitmap ? this._bitmap : this._cacheCanvas, cacheX, cacheY, this._config.scaledCharWidth, this._config.scaledCharHeight, x, y, this._config.scaledCharWidth, this._config.scaledCharHeight);
        };
        DynamicCharAtlas.prototype._getColorFromAnsiIndex = function (idx) {
            if (idx < this._config.colors.ansi.length) {
                return this._config.colors.ansi[idx];
            }
            return ColorManager_1.DEFAULT_ANSI_COLORS[idx];
        };
        DynamicCharAtlas.prototype._getBackgroundColor = function (glyph) {
            if (this._config.allowTransparency) {
                return TRANSPARENT_COLOR;
            }
            else if (glyph.bg === Types.INVERTED_DEFAULT_COLOR) {
                return this._config.colors.foreground;
            }
            else if (glyph.bg < 256) {
                return this._getColorFromAnsiIndex(glyph.bg);
            }
            return this._config.colors.background;
        };
        DynamicCharAtlas.prototype._getForegroundColor = function (glyph) {
            if (glyph.fg === Types.INVERTED_DEFAULT_COLOR) {
                return this._config.colors.background;
            }
            else if (glyph.fg < 256) {
                return this._getColorFromAnsiIndex(glyph.fg);
            }
            return this._config.colors.foreground;
        };
        DynamicCharAtlas.prototype._drawToCache = function (glyph, index) {
            this._drawToCacheCount++;
            this._tmpCtx.save();
            var backgroundColor = this._getBackgroundColor(glyph);
            this._tmpCtx.globalCompositeOperation = 'copy';
            this._tmpCtx.fillStyle = backgroundColor.css;
            this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight);
            this._tmpCtx.globalCompositeOperation = 'source-over';
            var fontWeight = glyph.bold ? this._config.fontWeightBold : this._config.fontWeight;
            var fontStyle = glyph.italic ? 'italic' : '';
            this._tmpCtx.font =
                fontStyle + " " + fontWeight + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily;
            this._tmpCtx.textBaseline = 'middle';
            this._tmpCtx.fillStyle = this._getForegroundColor(glyph).css;
            if (glyph.dim) {
                this._tmpCtx.globalAlpha = Types.DIM_OPACITY;
            }
            this._tmpCtx.fillText(glyph.chars, 0, this._config.scaledCharHeight / 2);
            this._tmpCtx.restore();
            var imageData = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight);
            var isEmpty = false;
            if (!this._config.allowTransparency) {
                isEmpty = CharAtlasGenerator.clearColor(imageData, backgroundColor);
            }
            var x = this._toCoordinateX(index);
            var y = this._toCoordinateY(index);
            this._cacheCtx.putImageData(imageData, x, y);
            var cacheValue = {
                index: index,
                isEmpty: isEmpty,
                inBitmap: false
            };
            this._addGlyphToBitmap(cacheValue);
            return cacheValue;
        };
        DynamicCharAtlas.prototype._addGlyphToBitmap = function (cacheValue) {
            var _this = this;
            if (!('createImageBitmap' in window) || Platform.isFirefox || Platform.isSafari) {
                return;
            }
            this._glyphsWaitingOnBitmap.push(cacheValue);
            if (this._bitmapCommitTimeout !== null) {
                return;
            }
            this._bitmapCommitTimeout = window.setTimeout(function () { return _this._generateBitmap(); }, GLYPH_BITMAP_COMMIT_DELAY);
        };
        DynamicCharAtlas.prototype._generateBitmap = function () {
            var _this = this;
            var glyphsMovingToBitmap = this._glyphsWaitingOnBitmap;
            this._glyphsWaitingOnBitmap = [];
            window.createImageBitmap(this._cacheCanvas).then(function (bitmap) {
                _this._bitmap = bitmap;
                for (var i = 0; i < glyphsMovingToBitmap.length; i++) {
                    var value = glyphsMovingToBitmap[i];
                    value.inBitmap = true;
                }
            });
            this._bitmapCommitTimeout = null;
        };
        return DynamicCharAtlas;
    }(BaseCharAtlas_1.default));
    exports.default = DynamicCharAtlas;

    });

    unwrapExports(DynamicCharAtlas_1);
    var DynamicCharAtlas_2 = DynamicCharAtlas_1.getGlyphCacheKey;

    var NoneCharAtlas_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });

    var NoneCharAtlas = (function (_super) {
        __extends(NoneCharAtlas, _super);
        function NoneCharAtlas(document, config) {
            return _super.call(this) || this;
        }
        NoneCharAtlas.prototype.draw = function (ctx, glyph, x, y) {
            return false;
        };
        return NoneCharAtlas;
    }(BaseCharAtlas_1.default));
    exports.default = NoneCharAtlas;

    });

    unwrapExports(NoneCharAtlas_1);

    var StaticCharAtlas_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });




    var StaticCharAtlas = (function (_super) {
        __extends(StaticCharAtlas, _super);
        function StaticCharAtlas(_document, _config) {
            var _this = _super.call(this) || this;
            _this._document = _document;
            _this._config = _config;
            _this._canvasFactory = function (width, height) {
                var canvas = _this._document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                return canvas;
            };
            return _this;
        }
        StaticCharAtlas.prototype._doWarmUp = function () {
            var _this = this;
            var result = CharAtlasGenerator.generateStaticCharAtlasTexture(window, this._canvasFactory, this._config);
            if (result instanceof HTMLCanvasElement) {
                this._texture = result;
            }
            else {
                result.then(function (texture) {
                    _this._texture = texture;
                });
            }
        };
        StaticCharAtlas.prototype._isCached = function (glyph, colorIndex) {
            var isAscii = glyph.code < 256;
            var isBasicColor = glyph.fg < 16;
            var isDefaultColor = glyph.fg === Types.DEFAULT_COLOR;
            var isDefaultBackground = glyph.bg === Types.DEFAULT_COLOR;
            return isAscii && (isBasicColor || isDefaultColor) && isDefaultBackground && !glyph.italic;
        };
        StaticCharAtlas.prototype.draw = function (ctx, glyph, x, y) {
            if (this._texture === null || this._texture === undefined) {
                return false;
            }
            var colorIndex = 0;
            if (CharAtlasUtils.is256Color(glyph.fg)) {
                colorIndex = 2 + glyph.fg + (glyph.bold ? 16 : 0);
            }
            else if (glyph.fg === Types.DEFAULT_COLOR) {
                if (glyph.bold) {
                    colorIndex = 1;
                }
            }
            if (!this._isCached(glyph, colorIndex)) {
                return false;
            }
            ctx.save();
            var charAtlasCellWidth = this._config.scaledCharWidth + Types.CHAR_ATLAS_CELL_SPACING;
            var charAtlasCellHeight = this._config.scaledCharHeight + Types.CHAR_ATLAS_CELL_SPACING;
            if (glyph.dim) {
                ctx.globalAlpha = Types.DIM_OPACITY;
            }
            ctx.drawImage(this._texture, glyph.code * charAtlasCellWidth, colorIndex * charAtlasCellHeight, charAtlasCellWidth, this._config.scaledCharHeight, x, y, charAtlasCellWidth, this._config.scaledCharHeight);
            ctx.restore();
            return true;
        };
        return StaticCharAtlas;
    }(BaseCharAtlas_1.default));
    exports.default = StaticCharAtlas;

    });

    unwrapExports(StaticCharAtlas_1);

    var CharAtlasCache = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });




    var charAtlasImplementations = {
        'none': NoneCharAtlas_1.default,
        'static': StaticCharAtlas_1.default,
        'dynamic': DynamicCharAtlas_1.default
    };
    var charAtlasCache = [];
    function acquireCharAtlas(terminal, colors, scaledCharWidth, scaledCharHeight) {
        var newConfig = CharAtlasUtils.generateConfig(scaledCharWidth, scaledCharHeight, terminal, colors);
        for (var i = 0; i < charAtlasCache.length; i++) {
            var entry = charAtlasCache[i];
            var ownedByIndex = entry.ownedBy.indexOf(terminal);
            if (ownedByIndex >= 0) {
                if (CharAtlasUtils.configEquals(entry.config, newConfig)) {
                    return entry.atlas;
                }
                if (entry.ownedBy.length === 1) {
                    entry.atlas.dispose();
                    charAtlasCache.splice(i, 1);
                }
                else {
                    entry.ownedBy.splice(ownedByIndex, 1);
                }
                break;
            }
        }
        for (var i = 0; i < charAtlasCache.length; i++) {
            var entry = charAtlasCache[i];
            if (CharAtlasUtils.configEquals(entry.config, newConfig)) {
                entry.ownedBy.push(terminal);
                return entry.atlas;
            }
        }
        var newEntry = {
            atlas: new charAtlasImplementations[terminal.options.experimentalCharAtlas](document, newConfig),
            config: newConfig,
            ownedBy: [terminal]
        };
        charAtlasCache.push(newEntry);
        return newEntry.atlas;
    }
    exports.acquireCharAtlas = acquireCharAtlas;
    function removeTerminalFromCache(terminal) {
        for (var i = 0; i < charAtlasCache.length; i++) {
            var index = charAtlasCache[i].ownedBy.indexOf(terminal);
            if (index !== -1) {
                if (charAtlasCache[i].ownedBy.length === 1) {
                    charAtlasCache[i].atlas.dispose();
                    charAtlasCache.splice(i, 1);
                }
                else {
                    charAtlasCache[i].ownedBy.splice(index, 1);
                }
                break;
            }
        }
    }
    exports.removeTerminalFromCache = removeTerminalFromCache;

    });

    unwrapExports(CharAtlasCache);
    var CharAtlasCache_1 = CharAtlasCache.acquireCharAtlas;
    var CharAtlasCache_2 = CharAtlasCache.removeTerminalFromCache;

    var CharacterJoinerRegistry_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });


    var JoinedCellData = (function (_super) {
        __extends(JoinedCellData, _super);
        function JoinedCellData(firstCell, chars, width) {
            var _this = _super.call(this) || this;
            _this.content = 0;
            _this.combinedData = '';
            _this.fg = firstCell.fg;
            _this.bg = firstCell.bg;
            _this.combinedData = chars;
            _this._width = width;
            return _this;
        }
        JoinedCellData.prototype.isCombined = function () {
            return 2097152;
        };
        JoinedCellData.prototype.getWidth = function () {
            return this._width;
        };
        JoinedCellData.prototype.getChars = function () {
            return this.combinedData;
        };
        JoinedCellData.prototype.getCode = function () {
            return 0x1FFFFF;
        };
        JoinedCellData.prototype.setFromCharData = function (value) {
            throw new Error('not implemented');
        };
        JoinedCellData.prototype.getAsCharData = function () {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
        };
        return JoinedCellData;
    }(BufferLine_1.AttributeData));
    exports.JoinedCellData = JoinedCellData;
    var CharacterJoinerRegistry = (function () {
        function CharacterJoinerRegistry(_terminal) {
            this._terminal = _terminal;
            this._characterJoiners = [];
            this._nextCharacterJoinerId = 0;
            this._workCell = new BufferLine_1.CellData();
        }
        CharacterJoinerRegistry.prototype.registerCharacterJoiner = function (handler) {
            var joiner = {
                id: this._nextCharacterJoinerId++,
                handler: handler
            };
            this._characterJoiners.push(joiner);
            return joiner.id;
        };
        CharacterJoinerRegistry.prototype.deregisterCharacterJoiner = function (joinerId) {
            for (var i = 0; i < this._characterJoiners.length; i++) {
                if (this._characterJoiners[i].id === joinerId) {
                    this._characterJoiners.splice(i, 1);
                    return true;
                }
            }
            return false;
        };
        CharacterJoinerRegistry.prototype.getJoinedCharacters = function (row) {
            if (this._characterJoiners.length === 0) {
                return [];
            }
            var line = this._terminal.buffer.lines.get(row);
            if (line.length === 0) {
                return [];
            }
            var ranges = [];
            var lineStr = line.translateToString(true);
            var rangeStartColumn = 0;
            var currentStringIndex = 0;
            var rangeStartStringIndex = 0;
            var rangeAttrFG = line.getFg(0);
            var rangeAttrBG = line.getBg(0);
            for (var x = 0; x < line.getTrimmedLength(); x++) {
                line.loadCell(x, this._workCell);
                if (this._workCell.getWidth() === 0) {
                    continue;
                }
                if (this._workCell.fg !== rangeAttrFG || this._workCell.bg !== rangeAttrBG) {
                    if (x - rangeStartColumn > 1) {
                        var joinedRanges = this._getJoinedRanges(lineStr, rangeStartStringIndex, currentStringIndex, line, rangeStartColumn);
                        for (var i = 0; i < joinedRanges.length; i++) {
                            ranges.push(joinedRanges[i]);
                        }
                    }
                    rangeStartColumn = x;
                    rangeStartStringIndex = currentStringIndex;
                    rangeAttrFG = this._workCell.fg;
                    rangeAttrBG = this._workCell.bg;
                }
                currentStringIndex += this._workCell.getChars().length || Buffer_1.WHITESPACE_CELL_CHAR.length;
            }
            if (this._terminal.cols - rangeStartColumn > 1) {
                var joinedRanges = this._getJoinedRanges(lineStr, rangeStartStringIndex, currentStringIndex, line, rangeStartColumn);
                for (var i = 0; i < joinedRanges.length; i++) {
                    ranges.push(joinedRanges[i]);
                }
            }
            return ranges;
        };
        CharacterJoinerRegistry.prototype._getJoinedRanges = function (line, startIndex, endIndex, lineData, startCol) {
            var text = line.substring(startIndex, endIndex);
            var joinedRanges = this._characterJoiners[0].handler(text);
            for (var i = 1; i < this._characterJoiners.length; i++) {
                var joinerRanges = this._characterJoiners[i].handler(text);
                for (var j = 0; j < joinerRanges.length; j++) {
                    CharacterJoinerRegistry._mergeRanges(joinedRanges, joinerRanges[j]);
                }
            }
            this._stringRangesToCellRanges(joinedRanges, lineData, startCol);
            return joinedRanges;
        };
        CharacterJoinerRegistry.prototype._stringRangesToCellRanges = function (ranges, line, startCol) {
            var currentRangeIndex = 0;
            var currentRangeStarted = false;
            var currentStringIndex = 0;
            var currentRange = ranges[currentRangeIndex];
            if (!currentRange) {
                return;
            }
            for (var x = startCol; x < this._terminal.cols; x++) {
                var width = line.getWidth(x);
                var length_1 = line.getString(x).length || Buffer_1.WHITESPACE_CELL_CHAR.length;
                if (width === 0) {
                    continue;
                }
                if (!currentRangeStarted && currentRange[0] <= currentStringIndex) {
                    currentRange[0] = x;
                    currentRangeStarted = true;
                }
                if (currentRange[1] <= currentStringIndex) {
                    currentRange[1] = x;
                    currentRange = ranges[++currentRangeIndex];
                    if (!currentRange) {
                        break;
                    }
                    if (currentRange[0] <= currentStringIndex) {
                        currentRange[0] = x;
                        currentRangeStarted = true;
                    }
                    else {
                        currentRangeStarted = false;
                    }
                }
                currentStringIndex += length_1;
            }
            if (currentRange) {
                currentRange[1] = this._terminal.cols;
            }
        };
        CharacterJoinerRegistry._mergeRanges = function (ranges, newRange) {
            var inRange = false;
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (!inRange) {
                    if (newRange[1] <= range[0]) {
                        ranges.splice(i, 0, newRange);
                        return ranges;
                    }
                    if (newRange[1] <= range[1]) {
                        range[0] = Math.min(newRange[0], range[0]);
                        return ranges;
                    }
                    if (newRange[0] < range[1]) {
                        range[0] = Math.min(newRange[0], range[0]);
                        inRange = true;
                    }
                    continue;
                }
                else {
                    if (newRange[1] <= range[0]) {
                        ranges[i - 1][1] = newRange[1];
                        return ranges;
                    }
                    if (newRange[1] <= range[1]) {
                        ranges[i - 1][1] = Math.max(newRange[1], range[1]);
                        ranges.splice(i, 1);
                        inRange = false;
                        return ranges;
                    }
                    ranges.splice(i, 1);
                    i--;
                }
            }
            if (inRange) {
                ranges[ranges.length - 1][1] = newRange[1];
            }
            else {
                ranges.push(newRange);
            }
            return ranges;
        };
        return CharacterJoinerRegistry;
    }());
    exports.CharacterJoinerRegistry = CharacterJoinerRegistry;

    });

    unwrapExports(CharacterJoinerRegistry_1);
    var CharacterJoinerRegistry_2 = CharacterJoinerRegistry_1.JoinedCellData;
    var CharacterJoinerRegistry_3 = CharacterJoinerRegistry_1.CharacterJoinerRegistry;

    var BaseRenderLayer_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });





    var BaseRenderLayer = (function () {
        function BaseRenderLayer(_container, id, zIndex, _alpha, _colors) {
            this._container = _container;
            this._alpha = _alpha;
            this._colors = _colors;
            this._scaledCharWidth = 0;
            this._scaledCharHeight = 0;
            this._scaledCellWidth = 0;
            this._scaledCellHeight = 0;
            this._scaledCharLeft = 0;
            this._scaledCharTop = 0;
            this._currentGlyphIdentifier = {
                chars: '',
                code: 0,
                bg: 0,
                fg: 0,
                bold: false,
                dim: false,
                italic: false
            };
            this._canvas = document.createElement('canvas');
            this._canvas.classList.add("xterm-" + id + "-layer");
            this._canvas.style.zIndex = zIndex.toString();
            this._initCanvas();
            this._container.appendChild(this._canvas);
        }
        BaseRenderLayer.prototype.dispose = function () {
            this._container.removeChild(this._canvas);
            if (this._charAtlas) {
                this._charAtlas.dispose();
            }
        };
        BaseRenderLayer.prototype._initCanvas = function () {
            this._ctx = this._canvas.getContext('2d', { alpha: this._alpha });
            if (!this._alpha) {
                this.clearAll();
            }
        };
        BaseRenderLayer.prototype.onOptionsChanged = function (terminal) { };
        BaseRenderLayer.prototype.onBlur = function (terminal) { };
        BaseRenderLayer.prototype.onFocus = function (terminal) { };
        BaseRenderLayer.prototype.onCursorMove = function (terminal) { };
        BaseRenderLayer.prototype.onGridChanged = function (terminal, startRow, endRow) { };
        BaseRenderLayer.prototype.onSelectionChanged = function (terminal, start, end, columnSelectMode) {
            if (columnSelectMode === void 0) { columnSelectMode = false; }
        };
        BaseRenderLayer.prototype.onThemeChanged = function (terminal, colorSet) {
            this._refreshCharAtlas(terminal, colorSet);
        };
        BaseRenderLayer.prototype.setTransparency = function (terminal, alpha) {
            if (alpha === this._alpha) {
                return;
            }
            var oldCanvas = this._canvas;
            this._alpha = alpha;
            this._canvas = this._canvas.cloneNode();
            this._initCanvas();
            this._container.replaceChild(this._canvas, oldCanvas);
            this._refreshCharAtlas(terminal, this._colors);
            this.onGridChanged(terminal, 0, terminal.rows - 1);
        };
        BaseRenderLayer.prototype._refreshCharAtlas = function (terminal, colorSet) {
            if (this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0) {
                return;
            }
            this._charAtlas = CharAtlasCache.acquireCharAtlas(terminal, colorSet, this._scaledCharWidth, this._scaledCharHeight);
            this._charAtlas.warmUp();
        };
        BaseRenderLayer.prototype.resize = function (terminal, dim) {
            this._scaledCellWidth = dim.scaledCellWidth;
            this._scaledCellHeight = dim.scaledCellHeight;
            this._scaledCharWidth = dim.scaledCharWidth;
            this._scaledCharHeight = dim.scaledCharHeight;
            this._scaledCharLeft = dim.scaledCharLeft;
            this._scaledCharTop = dim.scaledCharTop;
            this._canvas.width = dim.scaledCanvasWidth;
            this._canvas.height = dim.scaledCanvasHeight;
            this._canvas.style.width = dim.canvasWidth + "px";
            this._canvas.style.height = dim.canvasHeight + "px";
            if (!this._alpha) {
                this.clearAll();
            }
            this._refreshCharAtlas(terminal, this._colors);
        };
        BaseRenderLayer.prototype.fillCells = function (x, y, width, height) {
            this._ctx.fillRect(x * this._scaledCellWidth, y * this._scaledCellHeight, width * this._scaledCellWidth, height * this._scaledCellHeight);
        };
        BaseRenderLayer.prototype.fillBottomLineAtCells = function (x, y, width) {
            if (width === void 0) { width = 1; }
            this._ctx.fillRect(x * this._scaledCellWidth, (y + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, width * this._scaledCellWidth, window.devicePixelRatio);
        };
        BaseRenderLayer.prototype.fillLeftLineAtCell = function (x, y) {
            this._ctx.fillRect(x * this._scaledCellWidth, y * this._scaledCellHeight, window.devicePixelRatio, this._scaledCellHeight);
        };
        BaseRenderLayer.prototype.strokeRectAtCell = function (x, y, width, height) {
            this._ctx.lineWidth = window.devicePixelRatio;
            this._ctx.strokeRect(x * this._scaledCellWidth + window.devicePixelRatio / 2, y * this._scaledCellHeight + (window.devicePixelRatio / 2), width * this._scaledCellWidth - window.devicePixelRatio, (height * this._scaledCellHeight) - window.devicePixelRatio);
        };
        BaseRenderLayer.prototype.clearAll = function () {
            if (this._alpha) {
                this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            }
            else {
                this._ctx.fillStyle = this._colors.background.css;
                this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
            }
        };
        BaseRenderLayer.prototype.clearCells = function (x, y, width, height) {
            if (this._alpha) {
                this._ctx.clearRect(x * this._scaledCellWidth, y * this._scaledCellHeight, width * this._scaledCellWidth, height * this._scaledCellHeight);
            }
            else {
                this._ctx.fillStyle = this._colors.background.css;
                this._ctx.fillRect(x * this._scaledCellWidth, y * this._scaledCellHeight, width * this._scaledCellWidth, height * this._scaledCellHeight);
            }
        };
        BaseRenderLayer.prototype.fillCharTrueColor = function (terminal, cell, x, y) {
            this._ctx.font = this._getFont(terminal, false, false);
            this._ctx.textBaseline = 'middle';
            this._clipRow(terminal, y);
            this._ctx.fillText(cell.getChars(), x * this._scaledCellWidth + this._scaledCharLeft, y * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2);
        };
        BaseRenderLayer.prototype.drawChars = function (terminal, cell, x, y) {
            if (cell.isFgRGB() || cell.isBgRGB() || cell instanceof CharacterJoinerRegistry_1.JoinedCellData) {
                this._drawUncachedChars(terminal, cell, x, y);
                return;
            }
            var fg;
            var bg;
            if (cell.isInverse()) {
                fg = (cell.isBgDefault()) ? Types.INVERTED_DEFAULT_COLOR : cell.getBgColor();
                bg = (cell.isFgDefault()) ? Types.INVERTED_DEFAULT_COLOR : cell.getFgColor();
            }
            else {
                bg = (cell.isBgDefault()) ? Types.DEFAULT_COLOR : cell.getBgColor();
                fg = (cell.isFgDefault()) ? Types.DEFAULT_COLOR : cell.getFgColor();
            }
            var drawInBrightColor = terminal.options.drawBoldTextInBrightColors && cell.isBold() && fg < 8 && fg !== Types.INVERTED_DEFAULT_COLOR;
            fg += drawInBrightColor ? 8 : 0;
            this._currentGlyphIdentifier.chars = cell.getChars() || Buffer_1.WHITESPACE_CELL_CHAR;
            this._currentGlyphIdentifier.code = cell.getCode() || Buffer_1.WHITESPACE_CELL_CODE;
            this._currentGlyphIdentifier.bg = bg;
            this._currentGlyphIdentifier.fg = fg;
            this._currentGlyphIdentifier.bold = cell.isBold() && terminal.options.enableBold;
            this._currentGlyphIdentifier.dim = !!cell.isDim();
            this._currentGlyphIdentifier.italic = !!cell.isItalic();
            var atlasDidDraw = this._charAtlas && this._charAtlas.draw(this._ctx, this._currentGlyphIdentifier, x * this._scaledCellWidth + this._scaledCharLeft, y * this._scaledCellHeight + this._scaledCharTop);
            if (!atlasDidDraw) {
                this._drawUncachedChars(terminal, cell, x, y);
            }
        };
        BaseRenderLayer.prototype._drawUncachedChars = function (terminal, cell, x, y) {
            this._ctx.save();
            this._ctx.font = this._getFont(terminal, cell.isBold() && terminal.options.enableBold, !!cell.isItalic());
            this._ctx.textBaseline = 'middle';
            if (cell.isInverse()) {
                if (cell.isBgDefault()) {
                    this._ctx.fillStyle = this._colors.background.css;
                }
                else if (cell.isBgRGB()) {
                    this._ctx.fillStyle = "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getBgColor()).join(',') + ")";
                }
                else {
                    this._ctx.fillStyle = this._colors.ansi[cell.getBgColor()].css;
                }
            }
            else {
                if (cell.isFgDefault()) {
                    this._ctx.fillStyle = this._colors.foreground.css;
                }
                else if (cell.isFgRGB()) {
                    this._ctx.fillStyle = "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getFgColor()).join(',') + ")";
                }
                else {
                    var fg = cell.getFgColor();
                    if (terminal.options.drawBoldTextInBrightColors && cell.isBold() && fg < 8) {
                        fg += 8;
                    }
                    this._ctx.fillStyle = this._colors.ansi[fg].css;
                }
            }
            this._clipRow(terminal, y);
            if (cell.isDim()) {
                this._ctx.globalAlpha = Types.DIM_OPACITY;
            }
            this._ctx.fillText(cell.getChars(), x * this._scaledCellWidth + this._scaledCharLeft, y * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2);
            this._ctx.restore();
        };
        BaseRenderLayer.prototype._clipRow = function (terminal, y) {
            this._ctx.beginPath();
            this._ctx.rect(0, y * this._scaledCellHeight, terminal.cols * this._scaledCellWidth, this._scaledCellHeight);
            this._ctx.clip();
        };
        BaseRenderLayer.prototype._getFont = function (terminal, isBold, isItalic) {
            var fontWeight = isBold ? terminal.options.fontWeightBold : terminal.options.fontWeight;
            var fontStyle = isItalic ? 'italic' : '';
            return fontStyle + " " + fontWeight + " " + terminal.options.fontSize * window.devicePixelRatio + "px " + terminal.options.fontFamily;
        };
        return BaseRenderLayer;
    }());
    exports.BaseRenderLayer = BaseRenderLayer;

    });

    unwrapExports(BaseRenderLayer_1);
    var BaseRenderLayer_2 = BaseRenderLayer_1.BaseRenderLayer;

    var TextRenderLayer_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });





    var TextRenderLayer = (function (_super) {
        __extends(TextRenderLayer, _super);
        function TextRenderLayer(container, zIndex, colors, characterJoinerRegistry, alpha) {
            var _this = _super.call(this, container, 'text', zIndex, alpha, colors) || this;
            _this._characterOverlapCache = {};
            _this._workCell = new BufferLine_1.CellData();
            _this._state = new GridCache_1.GridCache();
            _this._characterJoinerRegistry = characterJoinerRegistry;
            return _this;
        }
        TextRenderLayer.prototype.resize = function (terminal, dim) {
            _super.prototype.resize.call(this, terminal, dim);
            var terminalFont = this._getFont(terminal, false, false);
            if (this._characterWidth !== dim.scaledCharWidth || this._characterFont !== terminalFont) {
                this._characterWidth = dim.scaledCharWidth;
                this._characterFont = terminalFont;
                this._characterOverlapCache = {};
            }
            this._state.clear();
            this._state.resize(terminal.cols, terminal.rows);
        };
        TextRenderLayer.prototype.reset = function (terminal) {
            this._state.clear();
            this.clearAll();
        };
        TextRenderLayer.prototype._forEachCell = function (terminal, firstRow, lastRow, joinerRegistry, callback) {
            for (var y = firstRow; y <= lastRow; y++) {
                var row = y + terminal.buffer.ydisp;
                var line = terminal.buffer.lines.get(row);
                var joinedRanges = joinerRegistry ? joinerRegistry.getJoinedCharacters(row) : [];
                for (var x = 0; x < terminal.cols; x++) {
                    line.loadCell(x, this._workCell);
                    var cell = this._workCell;
                    var isJoined = false;
                    var lastCharX = x;
                    if (cell.getWidth() === 0) {
                        continue;
                    }
                    if (joinedRanges.length > 0 && x === joinedRanges[0][0]) {
                        isJoined = true;
                        var range = joinedRanges.shift();
                        cell = new CharacterJoinerRegistry_1.JoinedCellData(this._workCell, line.translateToString(true, range[0], range[1]), range[1] - range[0]);
                        lastCharX = range[1] - 1;
                    }
                    if (!isJoined && this._isOverlapping(cell)) {
                        if (lastCharX < line.length - 1 && line.getCodePoint(lastCharX + 1) === Buffer_1.NULL_CELL_CODE) {
                            cell.content &= ~12582912;
                            cell.content |= 2 << 22;
                        }
                    }
                    callback(cell, x, y);
                    x = lastCharX;
                }
            }
        };
        TextRenderLayer.prototype._drawBackground = function (terminal, firstRow, lastRow) {
            var _this = this;
            var ctx = this._ctx;
            var cols = terminal.cols;
            var startX = 0;
            var startY = 0;
            var prevFillStyle = null;
            ctx.save();
            this._forEachCell(terminal, firstRow, lastRow, null, function (cell, x, y) {
                var nextFillStyle = null;
                if (cell.isInverse()) {
                    if (cell.isFgDefault()) {
                        nextFillStyle = _this._colors.foreground.css;
                    }
                    else if (cell.isFgRGB()) {
                        nextFillStyle = "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getFgColor()).join(',') + ")";
                    }
                    else {
                        nextFillStyle = _this._colors.ansi[cell.getFgColor()].css;
                    }
                }
                else if (cell.isBgRGB()) {
                    nextFillStyle = "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getBgColor()).join(',') + ")";
                }
                else if (cell.isBgPalette()) {
                    nextFillStyle = _this._colors.ansi[cell.getBgColor()].css;
                }
                if (prevFillStyle === null) {
                    startX = x;
                    startY = y;
                }
                if (y !== startY) {
                    ctx.fillStyle = prevFillStyle;
                    _this.fillCells(startX, startY, cols - startX, 1);
                    startX = x;
                    startY = y;
                }
                else if (prevFillStyle !== nextFillStyle) {
                    ctx.fillStyle = prevFillStyle;
                    _this.fillCells(startX, startY, x - startX, 1);
                    startX = x;
                    startY = y;
                }
                prevFillStyle = nextFillStyle;
            });
            if (prevFillStyle !== null) {
                ctx.fillStyle = prevFillStyle;
                this.fillCells(startX, startY, cols - startX, 1);
            }
            ctx.restore();
        };
        TextRenderLayer.prototype._drawForeground = function (terminal, firstRow, lastRow) {
            var _this = this;
            this._forEachCell(terminal, firstRow, lastRow, this._characterJoinerRegistry, function (cell, x, y) {
                if (cell.isInvisible()) {
                    return;
                }
                if (cell.isUnderline()) {
                    _this._ctx.save();
                    if (cell.isInverse()) {
                        if (cell.isBgDefault()) {
                            _this._ctx.fillStyle = _this._colors.background.css;
                        }
                        else if (cell.isBgRGB()) {
                            _this._ctx.fillStyle = "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getBgColor()).join(',') + ")";
                        }
                        else {
                            _this._ctx.fillStyle = _this._colors.ansi[cell.getBgColor()].css;
                        }
                    }
                    else {
                        if (cell.isFgDefault()) {
                            _this._ctx.fillStyle = _this._colors.foreground.css;
                        }
                        else if (cell.isFgRGB()) {
                            _this._ctx.fillStyle = "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getFgColor()).join(',') + ")";
                        }
                        else {
                            var fg = cell.getFgColor();
                            if (terminal.options.drawBoldTextInBrightColors && cell.isBold() && fg < 8) {
                                fg += 8;
                            }
                            _this._ctx.fillStyle = _this._colors.ansi[fg].css;
                        }
                    }
                    _this.fillBottomLineAtCells(x, y, cell.getWidth());
                    _this._ctx.restore();
                }
                _this.drawChars(terminal, cell, x, y);
            });
        };
        TextRenderLayer.prototype.onGridChanged = function (terminal, firstRow, lastRow) {
            if (this._state.cache.length === 0) {
                return;
            }
            if (this._charAtlas) {
                this._charAtlas.beginFrame();
            }
            this.clearCells(0, firstRow, terminal.cols, lastRow - firstRow + 1);
            this._drawBackground(terminal, firstRow, lastRow);
            this._drawForeground(terminal, firstRow, lastRow);
        };
        TextRenderLayer.prototype.onOptionsChanged = function (terminal) {
            this.setTransparency(terminal, terminal.options.allowTransparency);
        };
        TextRenderLayer.prototype._isOverlapping = function (cell) {
            if (cell.getWidth() !== 1) {
                return false;
            }
            if (cell.getCode() < 256) {
                return false;
            }
            var chars = cell.getChars();
            if (this._characterOverlapCache.hasOwnProperty(chars)) {
                return this._characterOverlapCache[chars];
            }
            this._ctx.save();
            this._ctx.font = this._characterFont;
            var overlaps = Math.floor(this._ctx.measureText(chars).width) > this._characterWidth;
            this._ctx.restore();
            this._characterOverlapCache[chars] = overlaps;
            return overlaps;
        };
        return TextRenderLayer;
    }(BaseRenderLayer_1.BaseRenderLayer));
    exports.TextRenderLayer = TextRenderLayer;

    });

    unwrapExports(TextRenderLayer_1);
    var TextRenderLayer_2 = TextRenderLayer_1.TextRenderLayer;

    var SelectionRenderLayer_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });

    var SelectionRenderLayer = (function (_super) {
        __extends(SelectionRenderLayer, _super);
        function SelectionRenderLayer(container, zIndex, colors) {
            var _this = _super.call(this, container, 'selection', zIndex, true, colors) || this;
            _this._clearState();
            return _this;
        }
        SelectionRenderLayer.prototype._clearState = function () {
            this._state = {
                start: null,
                end: null,
                columnSelectMode: null,
                ydisp: null
            };
        };
        SelectionRenderLayer.prototype.resize = function (terminal, dim) {
            _super.prototype.resize.call(this, terminal, dim);
            this._clearState();
        };
        SelectionRenderLayer.prototype.reset = function (terminal) {
            if (this._state.start && this._state.end) {
                this._clearState();
                this.clearAll();
            }
        };
        SelectionRenderLayer.prototype.onSelectionChanged = function (terminal, start, end, columnSelectMode) {
            if (!this._didStateChange(start, end, columnSelectMode, terminal.buffer.ydisp)) {
                return;
            }
            this.clearAll();
            if (!start || !end) {
                this._clearState();
                return;
            }
            var viewportStartRow = start[1] - terminal.buffer.ydisp;
            var viewportEndRow = end[1] - terminal.buffer.ydisp;
            var viewportCappedStartRow = Math.max(viewportStartRow, 0);
            var viewportCappedEndRow = Math.min(viewportEndRow, terminal.rows - 1);
            if (viewportCappedStartRow >= terminal.rows || viewportCappedEndRow < 0) {
                return;
            }
            this._ctx.fillStyle = this._colors.selection.css;
            if (columnSelectMode) {
                var startCol = start[0];
                var width = end[0] - startCol;
                var height = viewportCappedEndRow - viewportCappedStartRow + 1;
                this.fillCells(startCol, viewportCappedStartRow, width, height);
            }
            else {
                var startCol = viewportStartRow === viewportCappedStartRow ? start[0] : 0;
                var startRowEndCol = viewportCappedStartRow === viewportCappedEndRow ? end[0] : terminal.cols;
                this.fillCells(startCol, viewportCappedStartRow, startRowEndCol - startCol, 1);
                var middleRowsCount = Math.max(viewportCappedEndRow - viewportCappedStartRow - 1, 0);
                this.fillCells(0, viewportCappedStartRow + 1, terminal.cols, middleRowsCount);
                if (viewportCappedStartRow !== viewportCappedEndRow) {
                    var endCol = viewportEndRow === viewportCappedEndRow ? end[0] : terminal.cols;
                    this.fillCells(0, viewportCappedEndRow, endCol, 1);
                }
            }
            this._state.start = [start[0], start[1]];
            this._state.end = [end[0], end[1]];
            this._state.columnSelectMode = columnSelectMode;
            this._state.ydisp = terminal.buffer.ydisp;
        };
        SelectionRenderLayer.prototype._didStateChange = function (start, end, columnSelectMode, ydisp) {
            return !this._areCoordinatesEqual(start, this._state.start) ||
                !this._areCoordinatesEqual(end, this._state.end) ||
                columnSelectMode !== this._state.columnSelectMode ||
                ydisp !== this._state.ydisp;
        };
        SelectionRenderLayer.prototype._areCoordinatesEqual = function (coord1, coord2) {
            if (!coord1 || !coord2) {
                return false;
            }
            return coord1[0] === coord2[0] && coord1[1] === coord2[1];
        };
        return SelectionRenderLayer;
    }(BaseRenderLayer_1.BaseRenderLayer));
    exports.SelectionRenderLayer = SelectionRenderLayer;

    });

    unwrapExports(SelectionRenderLayer_1);
    var SelectionRenderLayer_2 = SelectionRenderLayer_1.SelectionRenderLayer;

    var CursorRenderLayer_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });


    var BLINK_INTERVAL = 600;
    var CursorRenderLayer = (function (_super) {
        __extends(CursorRenderLayer, _super);
        function CursorRenderLayer(container, zIndex, colors) {
            var _this = _super.call(this, container, 'cursor', zIndex, true, colors) || this;
            _this._cell = new BufferLine_1.CellData();
            _this._state = {
                x: null,
                y: null,
                isFocused: null,
                style: null,
                width: null
            };
            _this._cursorRenderers = {
                'bar': _this._renderBarCursor.bind(_this),
                'block': _this._renderBlockCursor.bind(_this),
                'underline': _this._renderUnderlineCursor.bind(_this)
            };
            return _this;
        }
        CursorRenderLayer.prototype.resize = function (terminal, dim) {
            _super.prototype.resize.call(this, terminal, dim);
            this._state = {
                x: null,
                y: null,
                isFocused: null,
                style: null,
                width: null
            };
        };
        CursorRenderLayer.prototype.reset = function (terminal) {
            this._clearCursor();
            if (this._cursorBlinkStateManager) {
                this._cursorBlinkStateManager.dispose();
                this._cursorBlinkStateManager = null;
                this.onOptionsChanged(terminal);
            }
        };
        CursorRenderLayer.prototype.onBlur = function (terminal) {
            if (this._cursorBlinkStateManager) {
                this._cursorBlinkStateManager.pause();
            }
            terminal.refresh(terminal.buffer.y, terminal.buffer.y);
        };
        CursorRenderLayer.prototype.onFocus = function (terminal) {
            if (this._cursorBlinkStateManager) {
                this._cursorBlinkStateManager.resume(terminal);
            }
            else {
                terminal.refresh(terminal.buffer.y, terminal.buffer.y);
            }
        };
        CursorRenderLayer.prototype.onOptionsChanged = function (terminal) {
            var _this = this;
            if (terminal.options.cursorBlink) {
                if (!this._cursorBlinkStateManager) {
                    this._cursorBlinkStateManager = new CursorBlinkStateManager(terminal, function () {
                        _this._render(terminal, true);
                    });
                }
            }
            else {
                if (this._cursorBlinkStateManager) {
                    this._cursorBlinkStateManager.dispose();
                    this._cursorBlinkStateManager = null;
                }
                terminal.refresh(terminal.buffer.y, terminal.buffer.y);
            }
        };
        CursorRenderLayer.prototype.onCursorMove = function (terminal) {
            if (this._cursorBlinkStateManager) {
                this._cursorBlinkStateManager.restartBlinkAnimation(terminal);
            }
        };
        CursorRenderLayer.prototype.onGridChanged = function (terminal, startRow, endRow) {
            if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused) {
                this._render(terminal, false);
            }
            else {
                this._cursorBlinkStateManager.restartBlinkAnimation(terminal);
            }
        };
        CursorRenderLayer.prototype._render = function (terminal, triggeredByAnimationFrame) {
            if (!terminal.cursorState || terminal.cursorHidden) {
                this._clearCursor();
                return;
            }
            var cursorY = terminal.buffer.ybase + terminal.buffer.y;
            var viewportRelativeCursorY = cursorY - terminal.buffer.ydisp;
            if (viewportRelativeCursorY < 0 || viewportRelativeCursorY >= terminal.rows) {
                this._clearCursor();
                return;
            }
            terminal.buffer.lines.get(cursorY).loadCell(terminal.buffer.x, this._cell);
            if (this._cell.content === undefined) {
                return;
            }
            if (!terminal.isFocused) {
                this._clearCursor();
                this._ctx.save();
                this._ctx.fillStyle = this._colors.cursor.css;
                this._renderBlurCursor(terminal, terminal.buffer.x, viewportRelativeCursorY, this._cell);
                this._ctx.restore();
                this._state.x = terminal.buffer.x;
                this._state.y = viewportRelativeCursorY;
                this._state.isFocused = false;
                this._state.style = terminal.options.cursorStyle;
                this._state.width = this._cell.getWidth();
                return;
            }
            if (this._cursorBlinkStateManager && !this._cursorBlinkStateManager.isCursorVisible) {
                this._clearCursor();
                return;
            }
            if (this._state) {
                if (this._state.x === terminal.buffer.x &&
                    this._state.y === viewportRelativeCursorY &&
                    this._state.isFocused === terminal.isFocused &&
                    this._state.style === terminal.options.cursorStyle &&
                    this._state.width === this._cell.getWidth()) {
                    return;
                }
                this._clearCursor();
            }
            this._ctx.save();
            this._cursorRenderers[terminal.options.cursorStyle || 'block'](terminal, terminal.buffer.x, viewportRelativeCursorY, this._cell);
            this._ctx.restore();
            this._state.x = terminal.buffer.x;
            this._state.y = viewportRelativeCursorY;
            this._state.isFocused = false;
            this._state.style = terminal.options.cursorStyle;
            this._state.width = this._cell.getWidth();
        };
        CursorRenderLayer.prototype._clearCursor = function () {
            if (this._state) {
                this.clearCells(this._state.x, this._state.y, this._state.width, 1);
                this._state = {
                    x: null,
                    y: null,
                    isFocused: null,
                    style: null,
                    width: null
                };
            }
        };
        CursorRenderLayer.prototype._renderBarCursor = function (terminal, x, y, cell) {
            this._ctx.save();
            this._ctx.fillStyle = this._colors.cursor.css;
            this.fillLeftLineAtCell(x, y);
            this._ctx.restore();
        };
        CursorRenderLayer.prototype._renderBlockCursor = function (terminal, x, y, cell) {
            this._ctx.save();
            this._ctx.fillStyle = this._colors.cursor.css;
            this.fillCells(x, y, cell.getWidth(), 1);
            this._ctx.fillStyle = this._colors.cursorAccent.css;
            this.fillCharTrueColor(terminal, cell, x, y);
            this._ctx.restore();
        };
        CursorRenderLayer.prototype._renderUnderlineCursor = function (terminal, x, y, cell) {
            this._ctx.save();
            this._ctx.fillStyle = this._colors.cursor.css;
            this.fillBottomLineAtCells(x, y);
            this._ctx.restore();
        };
        CursorRenderLayer.prototype._renderBlurCursor = function (terminal, x, y, cell) {
            this._ctx.save();
            this._ctx.strokeStyle = this._colors.cursor.css;
            this.strokeRectAtCell(x, y, cell.getWidth(), 1);
            this._ctx.restore();
        };
        return CursorRenderLayer;
    }(BaseRenderLayer_1.BaseRenderLayer));
    exports.CursorRenderLayer = CursorRenderLayer;
    var CursorBlinkStateManager = (function () {
        function CursorBlinkStateManager(terminal, _renderCallback) {
            this._renderCallback = _renderCallback;
            this.isCursorVisible = true;
            if (terminal.isFocused) {
                this._restartInterval();
            }
        }
        Object.defineProperty(CursorBlinkStateManager.prototype, "isPaused", {
            get: function () { return !(this._blinkStartTimeout || this._blinkInterval); },
            enumerable: true,
            configurable: true
        });
        CursorBlinkStateManager.prototype.dispose = function () {
            if (this._blinkInterval) {
                window.clearInterval(this._blinkInterval);
                this._blinkInterval = null;
            }
            if (this._blinkStartTimeout) {
                window.clearTimeout(this._blinkStartTimeout);
                this._blinkStartTimeout = null;
            }
            if (this._animationFrame) {
                window.cancelAnimationFrame(this._animationFrame);
                this._animationFrame = null;
            }
        };
        CursorBlinkStateManager.prototype.restartBlinkAnimation = function (terminal) {
            var _this = this;
            if (this.isPaused) {
                return;
            }
            this._animationTimeRestarted = Date.now();
            this.isCursorVisible = true;
            if (!this._animationFrame) {
                this._animationFrame = window.requestAnimationFrame(function () {
                    _this._renderCallback();
                    _this._animationFrame = null;
                });
            }
        };
        CursorBlinkStateManager.prototype._restartInterval = function (timeToStart) {
            var _this = this;
            if (timeToStart === void 0) { timeToStart = BLINK_INTERVAL; }
            if (this._blinkInterval) {
                window.clearInterval(this._blinkInterval);
            }
            this._blinkStartTimeout = setTimeout(function () {
                if (_this._animationTimeRestarted) {
                    var time = BLINK_INTERVAL - (Date.now() - _this._animationTimeRestarted);
                    _this._animationTimeRestarted = null;
                    if (time > 0) {
                        _this._restartInterval(time);
                        return;
                    }
                }
                _this.isCursorVisible = false;
                _this._animationFrame = window.requestAnimationFrame(function () {
                    _this._renderCallback();
                    _this._animationFrame = null;
                });
                _this._blinkInterval = setInterval(function () {
                    if (_this._animationTimeRestarted) {
                        var time = BLINK_INTERVAL - (Date.now() - _this._animationTimeRestarted);
                        _this._animationTimeRestarted = null;
                        _this._restartInterval(time);
                        return;
                    }
                    _this.isCursorVisible = !_this.isCursorVisible;
                    _this._animationFrame = window.requestAnimationFrame(function () {
                        _this._renderCallback();
                        _this._animationFrame = null;
                    });
                }, BLINK_INTERVAL);
            }, timeToStart);
        };
        CursorBlinkStateManager.prototype.pause = function () {
            this.isCursorVisible = true;
            if (this._blinkInterval) {
                window.clearInterval(this._blinkInterval);
                this._blinkInterval = null;
            }
            if (this._blinkStartTimeout) {
                window.clearTimeout(this._blinkStartTimeout);
                this._blinkStartTimeout = null;
            }
            if (this._animationFrame) {
                window.cancelAnimationFrame(this._animationFrame);
                this._animationFrame = null;
            }
        };
        CursorBlinkStateManager.prototype.resume = function (terminal) {
            this._animationTimeRestarted = null;
            this._restartInterval();
            this.restartBlinkAnimation(terminal);
        };
        return CursorBlinkStateManager;
    }());

    });

    unwrapExports(CursorRenderLayer_1);
    var CursorRenderLayer_2 = CursorRenderLayer_1.CursorRenderLayer;

    var LinkRenderLayer_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });



    var LinkRenderLayer = (function (_super) {
        __extends(LinkRenderLayer, _super);
        function LinkRenderLayer(container, zIndex, colors, terminal) {
            var _this = _super.call(this, container, 'link', zIndex, true, colors) || this;
            _this._state = null;
            terminal.linkifier.onLinkHover(function (e) { return _this._onLinkHover(e); });
            terminal.linkifier.onLinkLeave(function (e) { return _this._onLinkLeave(e); });
            return _this;
        }
        LinkRenderLayer.prototype.resize = function (terminal, dim) {
            _super.prototype.resize.call(this, terminal, dim);
            this._state = null;
        };
        LinkRenderLayer.prototype.reset = function (terminal) {
            this._clearCurrentLink();
        };
        LinkRenderLayer.prototype._clearCurrentLink = function () {
            if (this._state) {
                this.clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                var middleRowCount = this._state.y2 - this._state.y1 - 1;
                if (middleRowCount > 0) {
                    this.clearCells(0, this._state.y1 + 1, this._state.cols, middleRowCount);
                }
                this.clearCells(0, this._state.y2, this._state.x2, 1);
                this._state = null;
            }
        };
        LinkRenderLayer.prototype._onLinkHover = function (e) {
            if (e.fg === Types.INVERTED_DEFAULT_COLOR) {
                this._ctx.fillStyle = this._colors.background.css;
            }
            else if (CharAtlasUtils.is256Color(e.fg)) {
                this._ctx.fillStyle = this._colors.ansi[e.fg].css;
            }
            else {
                this._ctx.fillStyle = this._colors.foreground.css;
            }
            if (e.y1 === e.y2) {
                this.fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
            }
            else {
                this.fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
                for (var y = e.y1 + 1; y < e.y2; y++) {
                    this.fillBottomLineAtCells(0, y, e.cols);
                }
                this.fillBottomLineAtCells(0, e.y2, e.x2);
            }
            this._state = e;
        };
        LinkRenderLayer.prototype._onLinkLeave = function (e) {
            this._clearCurrentLink();
        };
        return LinkRenderLayer;
    }(BaseRenderLayer_1.BaseRenderLayer));
    exports.LinkRenderLayer = LinkRenderLayer;

    });

    unwrapExports(LinkRenderLayer_1);
    var LinkRenderLayer_2 = LinkRenderLayer_1.LinkRenderLayer;

    var RenderDebouncer_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var RenderDebouncer = (function () {
        function RenderDebouncer(_renderCallback) {
            this._renderCallback = _renderCallback;
        }
        RenderDebouncer.prototype.dispose = function () {
            if (this._animationFrame) {
                window.cancelAnimationFrame(this._animationFrame);
                this._animationFrame = undefined;
            }
        };
        RenderDebouncer.prototype.refresh = function (rowStart, rowEnd, rowCount) {
            var _this = this;
            this._rowCount = rowCount;
            rowStart = rowStart !== undefined ? rowStart : 0;
            rowEnd = rowEnd !== undefined ? rowEnd : this._rowCount - 1;
            this._rowStart = this._rowStart !== undefined ? Math.min(this._rowStart, rowStart) : rowStart;
            this._rowEnd = this._rowEnd !== undefined ? Math.max(this._rowEnd, rowEnd) : rowEnd;
            if (this._animationFrame) {
                return;
            }
            this._animationFrame = window.requestAnimationFrame(function () { return _this._innerRefresh(); });
        };
        RenderDebouncer.prototype._innerRefresh = function () {
            if (this._rowStart === undefined || this._rowEnd === undefined || this._rowCount === undefined) {
                return;
            }
            this._rowStart = Math.max(this._rowStart, 0);
            this._rowEnd = Math.min(this._rowEnd, this._rowCount - 1);
            this._renderCallback(this._rowStart, this._rowEnd);
            this._rowStart = undefined;
            this._rowEnd = undefined;
            this._animationFrame = undefined;
        };
        return RenderDebouncer;
    }());
    exports.RenderDebouncer = RenderDebouncer;

    });

    unwrapExports(RenderDebouncer_1);
    var RenderDebouncer_2 = RenderDebouncer_1.RenderDebouncer;

    var ScreenDprMonitor_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });

    var ScreenDprMonitor = (function (_super) {
        __extends(ScreenDprMonitor, _super);
        function ScreenDprMonitor() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._currentDevicePixelRatio = window.devicePixelRatio;
            return _this;
        }
        ScreenDprMonitor.prototype.setListener = function (listener) {
            var _this = this;
            if (this._listener) {
                this.clearListener();
            }
            this._listener = listener;
            this._outerListener = function () {
                if (!_this._listener) {
                    return;
                }
                _this._listener(window.devicePixelRatio, _this._currentDevicePixelRatio);
                _this._updateDpr();
            };
            this._updateDpr();
        };
        ScreenDprMonitor.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.clearListener();
        };
        ScreenDprMonitor.prototype._updateDpr = function () {
            if (!this._resolutionMediaMatchList || !this._outerListener) {
                return;
            }
            this._resolutionMediaMatchList.removeListener(this._outerListener);
            this._currentDevicePixelRatio = window.devicePixelRatio;
            this._resolutionMediaMatchList = window.matchMedia("screen and (resolution: " + window.devicePixelRatio + "dppx)");
            this._resolutionMediaMatchList.addListener(this._outerListener);
        };
        ScreenDprMonitor.prototype.clearListener = function () {
            if (!this._resolutionMediaMatchList || !this._listener || !this._outerListener) {
                return;
            }
            this._resolutionMediaMatchList.removeListener(this._outerListener);
            this._resolutionMediaMatchList = undefined;
            this._listener = undefined;
            this._outerListener = undefined;
        };
        return ScreenDprMonitor;
    }(Lifecycle.Disposable));
    exports.ScreenDprMonitor = ScreenDprMonitor;

    });

    unwrapExports(ScreenDprMonitor_1);
    var ScreenDprMonitor_2 = ScreenDprMonitor_1.ScreenDprMonitor;

    var Renderer_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });










    var Renderer = (function (_super) {
        __extends(Renderer, _super);
        function Renderer(_terminal, theme) {
            var _this = _super.call(this) || this;
            _this._terminal = _terminal;
            _this._isPaused = false;
            _this._needsFullRefresh = false;
            _this._onCanvasResize = new EventEmitter2_1.EventEmitter2();
            _this._onRender = new EventEmitter2_1.EventEmitter2();
            var allowTransparency = _this._terminal.options.allowTransparency;
            _this.colorManager = new ColorManager_1.ColorManager(document, allowTransparency);
            _this._characterJoinerRegistry = new CharacterJoinerRegistry_1.CharacterJoinerRegistry(_terminal);
            if (theme) {
                _this.colorManager.setTheme(theme);
            }
            _this._renderLayers = [
                new TextRenderLayer_1.TextRenderLayer(_this._terminal.screenElement, 0, _this.colorManager.colors, _this._characterJoinerRegistry, allowTransparency),
                new SelectionRenderLayer_1.SelectionRenderLayer(_this._terminal.screenElement, 1, _this.colorManager.colors),
                new LinkRenderLayer_1.LinkRenderLayer(_this._terminal.screenElement, 2, _this.colorManager.colors, _this._terminal),
                new CursorRenderLayer_1.CursorRenderLayer(_this._terminal.screenElement, 3, _this.colorManager.colors)
            ];
            _this.dimensions = {
                scaledCharWidth: null,
                scaledCharHeight: null,
                scaledCellWidth: null,
                scaledCellHeight: null,
                scaledCharLeft: null,
                scaledCharTop: null,
                scaledCanvasWidth: null,
                scaledCanvasHeight: null,
                canvasWidth: null,
                canvasHeight: null,
                actualCellWidth: null,
                actualCellHeight: null
            };
            _this._devicePixelRatio = window.devicePixelRatio;
            _this._updateDimensions();
            _this.onOptionsChanged();
            _this._renderDebouncer = new RenderDebouncer_1.RenderDebouncer(_this._renderRows.bind(_this));
            _this._screenDprMonitor = new ScreenDprMonitor_1.ScreenDprMonitor();
            _this._screenDprMonitor.setListener(function () { return _this.onWindowResize(window.devicePixelRatio); });
            _this.register(_this._screenDprMonitor);
            if ('IntersectionObserver' in window) {
                var observer_1 = new IntersectionObserver(function (e) { return _this.onIntersectionChange(e[e.length - 1]); }, { threshold: 0 });
                observer_1.observe(_this._terminal.element);
                _this.register({ dispose: function () { return observer_1.disconnect(); } });
            }
            return _this;
        }
        Object.defineProperty(Renderer.prototype, "onCanvasResize", {
            get: function () { return this._onCanvasResize.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Renderer.prototype, "onRender", {
            get: function () { return this._onRender.event; },
            enumerable: true,
            configurable: true
        });
        Renderer.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this._renderLayers.forEach(function (l) { return l.dispose(); });
        };
        Renderer.prototype.onIntersectionChange = function (entry) {
            this._isPaused = entry.intersectionRatio === 0;
            if (!this._isPaused && this._needsFullRefresh) {
                this._terminal.refresh(0, this._terminal.rows - 1);
                this._needsFullRefresh = false;
            }
        };
        Renderer.prototype.onWindowResize = function (devicePixelRatio) {
            if (this._devicePixelRatio !== devicePixelRatio) {
                this._devicePixelRatio = devicePixelRatio;
                this.onResize(this._terminal.cols, this._terminal.rows);
            }
        };
        Renderer.prototype.setTheme = function (theme) {
            var _this = this;
            this.colorManager.setTheme(theme);
            this._renderLayers.forEach(function (l) {
                l.onThemeChanged(_this._terminal, _this.colorManager.colors);
                l.reset(_this._terminal);
            });
            if (this._isPaused) {
                this._needsFullRefresh = true;
            }
            else {
                this._terminal.refresh(0, this._terminal.rows - 1);
            }
            return this.colorManager.colors;
        };
        Renderer.prototype.onResize = function (cols, rows) {
            var _this = this;
            this._updateDimensions();
            this._renderLayers.forEach(function (l) { return l.resize(_this._terminal, _this.dimensions); });
            if (this._isPaused) {
                this._needsFullRefresh = true;
            }
            else {
                this._terminal.refresh(0, this._terminal.rows - 1);
            }
            this._terminal.screenElement.style.width = this.dimensions.canvasWidth + "px";
            this._terminal.screenElement.style.height = this.dimensions.canvasHeight + "px";
            this._onCanvasResize.fire({
                width: this.dimensions.canvasWidth,
                height: this.dimensions.canvasHeight
            });
        };
        Renderer.prototype.onCharSizeChanged = function () {
            this.onResize(this._terminal.cols, this._terminal.rows);
        };
        Renderer.prototype.onBlur = function () {
            var _this = this;
            this._runOperation(function (l) { return l.onBlur(_this._terminal); });
        };
        Renderer.prototype.onFocus = function () {
            var _this = this;
            this._runOperation(function (l) { return l.onFocus(_this._terminal); });
        };
        Renderer.prototype.onSelectionChanged = function (start, end, columnSelectMode) {
            var _this = this;
            if (columnSelectMode === void 0) { columnSelectMode = false; }
            this._runOperation(function (l) { return l.onSelectionChanged(_this._terminal, start, end, columnSelectMode); });
        };
        Renderer.prototype.onCursorMove = function () {
            var _this = this;
            this._runOperation(function (l) { return l.onCursorMove(_this._terminal); });
        };
        Renderer.prototype.onOptionsChanged = function () {
            var _this = this;
            this.colorManager.allowTransparency = this._terminal.options.allowTransparency;
            this._runOperation(function (l) { return l.onOptionsChanged(_this._terminal); });
        };
        Renderer.prototype.clear = function () {
            var _this = this;
            this._runOperation(function (l) { return l.reset(_this._terminal); });
        };
        Renderer.prototype._runOperation = function (operation) {
            if (this._isPaused) {
                this._needsFullRefresh = true;
            }
            else {
                this._renderLayers.forEach(function (l) { return operation(l); });
            }
        };
        Renderer.prototype.refreshRows = function (start, end) {
            if (this._isPaused) {
                this._needsFullRefresh = true;
                return;
            }
            this._renderDebouncer.refresh(start, end, this._terminal.rows);
        };
        Renderer.prototype._renderRows = function (start, end) {
            var _this = this;
            this._renderLayers.forEach(function (l) { return l.onGridChanged(_this._terminal, start, end); });
            this._onRender.fire({ start: start, end: end });
        };
        Renderer.prototype._updateDimensions = function () {
            if (!this._terminal.charMeasure.width || !this._terminal.charMeasure.height) {
                return;
            }
            this.dimensions.scaledCharWidth = Math.floor(this._terminal.charMeasure.width * window.devicePixelRatio);
            this.dimensions.scaledCharHeight = Math.ceil(this._terminal.charMeasure.height * window.devicePixelRatio);
            this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._terminal.options.lineHeight);
            this.dimensions.scaledCharTop = this._terminal.options.lineHeight === 1 ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2);
            this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._terminal.options.letterSpacing);
            this.dimensions.scaledCharLeft = Math.floor(this._terminal.options.letterSpacing / 2);
            this.dimensions.scaledCanvasHeight = this._terminal.rows * this.dimensions.scaledCellHeight;
            this.dimensions.scaledCanvasWidth = this._terminal.cols * this.dimensions.scaledCellWidth;
            this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio);
            this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio);
            this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._terminal.rows;
            this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._terminal.cols;
        };
        Renderer.prototype.registerCharacterJoiner = function (handler) {
            return this._characterJoinerRegistry.registerCharacterJoiner(handler);
        };
        Renderer.prototype.deregisterCharacterJoiner = function (joinerId) {
            return this._characterJoinerRegistry.deregisterCharacterJoiner(joinerId);
        };
        return Renderer;
    }(Lifecycle.Disposable));
    exports.Renderer = Renderer;

    });

    unwrapExports(Renderer_1);
    var Renderer_2 = Renderer_1.Renderer;

    var MouseZoneManager_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });


    var HOVER_DURATION = 500;
    var MouseZoneManager = (function (_super) {
        __extends(MouseZoneManager, _super);
        function MouseZoneManager(_terminal) {
            var _this = _super.call(this) || this;
            _this._terminal = _terminal;
            _this._zones = [];
            _this._areZonesActive = false;
            _this._tooltipTimeout = null;
            _this._currentZone = null;
            _this._lastHoverCoords = [null, null];
            _this.register(Lifecycle$2.addDisposableDomListener(_this._terminal.element, 'mousedown', function (e) { return _this._onMouseDown(e); }));
            _this._mouseMoveListener = function (e) { return _this._onMouseMove(e); };
            _this._mouseLeaveListener = function (e) { return _this._onMouseLeave(e); };
            _this._clickListener = function (e) { return _this._onClick(e); };
            return _this;
        }
        MouseZoneManager.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this._deactivate();
        };
        MouseZoneManager.prototype.add = function (zone) {
            this._zones.push(zone);
            if (this._zones.length === 1) {
                this._activate();
            }
        };
        MouseZoneManager.prototype.clearAll = function (start, end) {
            if (this._zones.length === 0) {
                return;
            }
            if (!end) {
                start = 0;
                end = this._terminal.rows - 1;
            }
            for (var i = 0; i < this._zones.length; i++) {
                var zone = this._zones[i];
                if ((zone.y1 > start && zone.y1 <= end + 1) ||
                    (zone.y2 > start && zone.y2 <= end + 1) ||
                    (zone.y1 < start && zone.y2 > end + 1)) {
                    if (this._currentZone && this._currentZone === zone) {
                        this._currentZone.leaveCallback();
                        this._currentZone = null;
                    }
                    this._zones.splice(i--, 1);
                }
            }
            if (this._zones.length === 0) {
                this._deactivate();
            }
        };
        MouseZoneManager.prototype._activate = function () {
            if (!this._areZonesActive) {
                this._areZonesActive = true;
                this._terminal.element.addEventListener('mousemove', this._mouseMoveListener);
                this._terminal.element.addEventListener('mouseleave', this._mouseLeaveListener);
                this._terminal.element.addEventListener('click', this._clickListener);
            }
        };
        MouseZoneManager.prototype._deactivate = function () {
            if (this._areZonesActive) {
                this._areZonesActive = false;
                this._terminal.element.removeEventListener('mousemove', this._mouseMoveListener);
                this._terminal.element.removeEventListener('mouseleave', this._mouseLeaveListener);
                this._terminal.element.removeEventListener('click', this._clickListener);
            }
        };
        MouseZoneManager.prototype._onMouseMove = function (e) {
            if (this._lastHoverCoords[0] !== e.pageX || this._lastHoverCoords[1] !== e.pageY) {
                this._onHover(e);
                this._lastHoverCoords = [e.pageX, e.pageY];
            }
        };
        MouseZoneManager.prototype._onHover = function (e) {
            var _this = this;
            var zone = this._findZoneEventAt(e);
            if (zone === this._currentZone) {
                return;
            }
            if (this._currentZone) {
                this._currentZone.leaveCallback();
                this._currentZone = null;
                if (this._tooltipTimeout) {
                    clearTimeout(this._tooltipTimeout);
                }
            }
            if (!zone) {
                return;
            }
            this._currentZone = zone;
            if (zone.hoverCallback) {
                zone.hoverCallback(e);
            }
            this._tooltipTimeout = setTimeout(function () { return _this._onTooltip(e); }, HOVER_DURATION);
        };
        MouseZoneManager.prototype._onTooltip = function (e) {
            this._tooltipTimeout = null;
            var zone = this._findZoneEventAt(e);
            if (zone && zone.tooltipCallback) {
                zone.tooltipCallback(e);
            }
        };
        MouseZoneManager.prototype._onMouseDown = function (e) {
            this._initialSelectionLength = this._terminal.getSelection().length;
            if (!this._areZonesActive) {
                return;
            }
            var zone = this._findZoneEventAt(e);
            if (zone) {
                if (zone.willLinkActivate(e)) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            }
        };
        MouseZoneManager.prototype._onMouseLeave = function (e) {
            if (this._currentZone) {
                this._currentZone.leaveCallback();
                this._currentZone = null;
                if (this._tooltipTimeout) {
                    clearTimeout(this._tooltipTimeout);
                }
            }
        };
        MouseZoneManager.prototype._onClick = function (e) {
            var zone = this._findZoneEventAt(e);
            var currentSelectionLength = this._terminal.getSelection().length;
            if (zone && currentSelectionLength === this._initialSelectionLength) {
                zone.clickCallback(e);
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        };
        MouseZoneManager.prototype._findZoneEventAt = function (e) {
            var coords = this._terminal.mouseHelper.getCoords(e, this._terminal.screenElement, this._terminal.charMeasure, this._terminal.cols, this._terminal.rows);
            if (!coords) {
                return null;
            }
            var x = coords[0];
            var y = coords[1];
            for (var i = 0; i < this._zones.length; i++) {
                var zone = this._zones[i];
                if (zone.y1 === zone.y2) {
                    if (y === zone.y1 && x >= zone.x1 && x < zone.x2) {
                        return zone;
                    }
                }
                else {
                    if ((y === zone.y1 && x >= zone.x1) ||
                        (y === zone.y2 && x < zone.x2) ||
                        (y > zone.y1 && y < zone.y2)) {
                        return zone;
                    }
                }
            }
            return null;
        };
        return MouseZoneManager;
    }(Lifecycle.Disposable));
    exports.MouseZoneManager = MouseZoneManager;
    var MouseZone = (function () {
        function MouseZone(x1, y1, x2, y2, clickCallback, hoverCallback, tooltipCallback, leaveCallback, willLinkActivate) {
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
            this.clickCallback = clickCallback;
            this.hoverCallback = hoverCallback;
            this.tooltipCallback = tooltipCallback;
            this.leaveCallback = leaveCallback;
            this.willLinkActivate = willLinkActivate;
        }
        return MouseZone;
    }());
    exports.MouseZone = MouseZone;

    });

    unwrapExports(MouseZoneManager_1);
    var MouseZoneManager_2 = MouseZoneManager_1.MouseZoneManager;
    var MouseZoneManager_3 = MouseZoneManager_1.MouseZone;

    var Linkifier_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });



    var Linkifier = (function () {
        function Linkifier(_terminal) {
            this._terminal = _terminal;
            this._linkMatchers = [];
            this._nextLinkMatcherId = 0;
            this._onLinkHover = new EventEmitter2_1.EventEmitter2();
            this._onLinkLeave = new EventEmitter2_1.EventEmitter2();
            this._onLinkTooltip = new EventEmitter2_1.EventEmitter2();
            this._rowsToLinkify = {
                start: null,
                end: null
            };
        }
        Object.defineProperty(Linkifier.prototype, "onLinkHover", {
            get: function () { return this._onLinkHover.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Linkifier.prototype, "onLinkLeave", {
            get: function () { return this._onLinkLeave.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Linkifier.prototype, "onLinkTooltip", {
            get: function () { return this._onLinkTooltip.event; },
            enumerable: true,
            configurable: true
        });
        Linkifier.prototype.attachToDom = function (mouseZoneManager) {
            this._mouseZoneManager = mouseZoneManager;
        };
        Linkifier.prototype.linkifyRows = function (start, end) {
            var _this = this;
            if (!this._mouseZoneManager) {
                return;
            }
            if (this._rowsToLinkify.start === null) {
                this._rowsToLinkify.start = start;
                this._rowsToLinkify.end = end;
            }
            else {
                this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, start);
                this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, end);
            }
            this._mouseZoneManager.clearAll(start, end);
            if (this._rowsTimeoutId) {
                clearTimeout(this._rowsTimeoutId);
            }
            this._rowsTimeoutId = setTimeout(function () { return _this._linkifyRows(); }, Linkifier.TIME_BEFORE_LINKIFY);
        };
        Linkifier.prototype._linkifyRows = function () {
            this._rowsTimeoutId = null;
            var buffer = this._terminal.buffer;
            var absoluteRowIndexStart = buffer.ydisp + this._rowsToLinkify.start;
            if (absoluteRowIndexStart >= buffer.lines.length) {
                return;
            }
            var absoluteRowIndexEnd = buffer.ydisp + Math.min(this._rowsToLinkify.end, this._terminal.rows) + 1;
            var overscanLineLimit = Math.ceil(Linkifier.OVERSCAN_CHAR_LIMIT / this._terminal.cols);
            var iterator = this._terminal.buffer.iterator(false, absoluteRowIndexStart, absoluteRowIndexEnd, overscanLineLimit, overscanLineLimit);
            while (iterator.hasNext()) {
                var lineData = iterator.next();
                for (var i = 0; i < this._linkMatchers.length; i++) {
                    this._doLinkifyRow(lineData.range.first, lineData.content, this._linkMatchers[i]);
                }
            }
            this._rowsToLinkify.start = null;
            this._rowsToLinkify.end = null;
        };
        Linkifier.prototype.registerLinkMatcher = function (regex, handler, options) {
            if (options === void 0) { options = {}; }
            if (!handler) {
                throw new Error('handler must be defined');
            }
            var matcher = {
                id: this._nextLinkMatcherId++,
                regex: regex,
                handler: handler,
                matchIndex: options.matchIndex,
                validationCallback: options.validationCallback,
                hoverTooltipCallback: options.tooltipCallback,
                hoverLeaveCallback: options.leaveCallback,
                willLinkActivate: options.willLinkActivate,
                priority: options.priority || 0
            };
            this._addLinkMatcherToList(matcher);
            return matcher.id;
        };
        Linkifier.prototype._addLinkMatcherToList = function (matcher) {
            if (this._linkMatchers.length === 0) {
                this._linkMatchers.push(matcher);
                return;
            }
            for (var i = this._linkMatchers.length - 1; i >= 0; i--) {
                if (matcher.priority <= this._linkMatchers[i].priority) {
                    this._linkMatchers.splice(i + 1, 0, matcher);
                    return;
                }
            }
            this._linkMatchers.splice(0, 0, matcher);
        };
        Linkifier.prototype.deregisterLinkMatcher = function (matcherId) {
            for (var i = 0; i < this._linkMatchers.length; i++) {
                if (this._linkMatchers[i].id === matcherId) {
                    this._linkMatchers.splice(i, 1);
                    return true;
                }
            }
            return false;
        };
        Linkifier.prototype._doLinkifyRow = function (rowIndex, text, matcher) {
            var _this = this;
            var rex = new RegExp(matcher.regex.source, matcher.regex.flags + 'g');
            var match;
            var stringIndex = -1;
            var _loop_1 = function () {
                var uri = match[typeof matcher.matchIndex !== 'number' ? 0 : matcher.matchIndex];
                if (!uri) {
                    if (this_1._terminal.debug) {
                        console.log({ match: match, matcher: matcher });
                        throw new Error('match found without corresponding matchIndex');
                    }
                    return "break";
                }
                stringIndex = text.indexOf(uri, stringIndex + 1);
                rex.lastIndex = stringIndex + uri.length;
                if (stringIndex < 0) {
                    return "break";
                }
                var bufferIndex = this_1._terminal.buffer.stringIndexToBufferIndex(rowIndex, stringIndex);
                if (bufferIndex[0] < 0) {
                    return "break";
                }
                var line = this_1._terminal.buffer.lines.get(bufferIndex[0]);
                var attr = line.getFg(bufferIndex[1]);
                var fg;
                if (attr) {
                    fg = (attr >> 9) & 0x1ff;
                }
                if (matcher.validationCallback) {
                    matcher.validationCallback(uri, function (isValid) {
                        if (_this._rowsTimeoutId) {
                            return;
                        }
                        if (isValid) {
                            _this._addLink(bufferIndex[1], bufferIndex[0] - _this._terminal.buffer.ydisp, uri, matcher, fg);
                        }
                    });
                }
                else {
                    this_1._addLink(bufferIndex[1], bufferIndex[0] - this_1._terminal.buffer.ydisp, uri, matcher, fg);
                }
            };
            var this_1 = this;
            while ((match = rex.exec(text)) !== null) {
                var state_1 = _loop_1();
                if (state_1 === "break")
                    break;
            }
        };
        Linkifier.prototype._addLink = function (x, y, uri, matcher, fg) {
            var _this = this;
            var width = CharWidth.getStringCellWidth(uri);
            var x1 = x % this._terminal.cols;
            var y1 = y + Math.floor(x / this._terminal.cols);
            var x2 = (x1 + width) % this._terminal.cols;
            var y2 = y1 + Math.floor((x1 + width) / this._terminal.cols);
            if (x2 === 0) {
                x2 = this._terminal.cols;
                y2--;
            }
            this._mouseZoneManager.add(new MouseZoneManager_1.MouseZone(x1 + 1, y1 + 1, x2 + 1, y2 + 1, function (e) {
                if (matcher.handler) {
                    return matcher.handler(e, uri);
                }
                window.open(uri, '_blank');
            }, function () {
                _this._onLinkHover.fire(_this._createLinkHoverEvent(x1, y1, x2, y2, fg));
                _this._terminal.element.classList.add('xterm-cursor-pointer');
            }, function (e) {
                _this._onLinkTooltip.fire(_this._createLinkHoverEvent(x1, y1, x2, y2, fg));
                if (matcher.hoverTooltipCallback) {
                    matcher.hoverTooltipCallback(e, uri);
                }
            }, function () {
                _this._onLinkLeave.fire(_this._createLinkHoverEvent(x1, y1, x2, y2, fg));
                _this._terminal.element.classList.remove('xterm-cursor-pointer');
                if (matcher.hoverLeaveCallback) {
                    matcher.hoverLeaveCallback();
                }
            }, function (e) {
                if (matcher.willLinkActivate) {
                    return matcher.willLinkActivate(e, uri);
                }
                return true;
            }));
        };
        Linkifier.prototype._createLinkHoverEvent = function (x1, y1, x2, y2, fg) {
            return { x1: x1, y1: y1, x2: x2, y2: y2, cols: this._terminal.cols, fg: fg };
        };
        Linkifier.TIME_BEFORE_LINKIFY = 200;
        Linkifier.OVERSCAN_CHAR_LIMIT = 2000;
        return Linkifier;
    }());
    exports.Linkifier = Linkifier;

    });

    unwrapExports(Linkifier_1);
    var Linkifier_2 = Linkifier_1.Linkifier;

    var MouseHelper_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var MouseHelper = (function () {
        function MouseHelper(_renderer) {
            this._renderer = _renderer;
        }
        MouseHelper.prototype.setRenderer = function (renderer) {
            this._renderer = renderer;
        };
        MouseHelper.getCoordsRelativeToElement = function (event, element) {
            var rect = element.getBoundingClientRect();
            return [event.clientX - rect.left, event.clientY - rect.top];
        };
        MouseHelper.prototype.getCoords = function (event, element, charMeasure, colCount, rowCount, isSelection) {
            if (!charMeasure.width || !charMeasure.height) {
                return null;
            }
            var coords = MouseHelper.getCoordsRelativeToElement(event, element);
            if (!coords) {
                return null;
            }
            coords[0] = Math.ceil((coords[0] + (isSelection ? this._renderer.dimensions.actualCellWidth / 2 : 0)) / this._renderer.dimensions.actualCellWidth);
            coords[1] = Math.ceil(coords[1] / this._renderer.dimensions.actualCellHeight);
            coords[0] = Math.min(Math.max(coords[0], 1), colCount + (isSelection ? 1 : 0));
            coords[1] = Math.min(Math.max(coords[1], 1), rowCount);
            return coords;
        };
        MouseHelper.prototype.getRawByteCoords = function (event, element, charMeasure, colCount, rowCount) {
            var coords = this.getCoords(event, element, charMeasure, colCount, rowCount);
            var x = coords[0];
            var y = coords[1];
            x += 32;
            y += 32;
            return { x: x, y: y };
        };
        return MouseHelper;
    }());
    exports.MouseHelper = MouseHelper;

    });

    unwrapExports(MouseHelper_1);
    var MouseHelper_2 = MouseHelper_1.MouseHelper;

    var SelectionModel_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectionModel = (function () {
        function SelectionModel(_terminal) {
            this._terminal = _terminal;
            this.clearSelection();
        }
        SelectionModel.prototype.clearSelection = function () {
            this.selectionStart = null;
            this.selectionEnd = null;
            this.isSelectAllActive = false;
            this.selectionStartLength = 0;
        };
        Object.defineProperty(SelectionModel.prototype, "finalSelectionStart", {
            get: function () {
                if (this.isSelectAllActive) {
                    return [0, 0];
                }
                if (!this.selectionEnd || !this.selectionStart) {
                    return this.selectionStart;
                }
                return this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SelectionModel.prototype, "finalSelectionEnd", {
            get: function () {
                if (this.isSelectAllActive) {
                    return [this._terminal.cols, this._terminal.buffer.ybase + this._terminal.rows - 1];
                }
                if (!this.selectionStart) {
                    return null;
                }
                if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                    var startPlusLength = this.selectionStart[0] + this.selectionStartLength;
                    if (startPlusLength > this._terminal.cols) {
                        return [startPlusLength % this._terminal.cols, this.selectionStart[1] + Math.floor(startPlusLength / this._terminal.cols)];
                    }
                    return [startPlusLength, this.selectionStart[1]];
                }
                if (this.selectionStartLength) {
                    if (this.selectionEnd[1] === this.selectionStart[1]) {
                        return [Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]), this.selectionEnd[1]];
                    }
                }
                return this.selectionEnd;
            },
            enumerable: true,
            configurable: true
        });
        SelectionModel.prototype.areSelectionValuesReversed = function () {
            var start = this.selectionStart;
            var end = this.selectionEnd;
            if (!start || !end) {
                return false;
            }
            return start[1] > end[1] || (start[1] === end[1] && start[0] > end[0]);
        };
        SelectionModel.prototype.onTrim = function (amount) {
            if (this.selectionStart) {
                this.selectionStart[1] -= amount;
            }
            if (this.selectionEnd) {
                this.selectionEnd[1] -= amount;
            }
            if (this.selectionEnd && this.selectionEnd[1] < 0) {
                this.clearSelection();
                return true;
            }
            if (this.selectionStart && this.selectionStart[1] < 0) {
                this.selectionStart[1] = 0;
            }
            return false;
        };
        return SelectionModel;
    }());
    exports.SelectionModel = SelectionModel;

    });

    unwrapExports(SelectionModel_1);
    var SelectionModel_2 = SelectionModel_1.SelectionModel;

    var AltClickHandler_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    var AltClickHandler = (function () {
        function AltClickHandler(_mouseEvent, _terminal) {
            var _a;
            this._mouseEvent = _mouseEvent;
            this._terminal = _terminal;
            this._lines = this._terminal.buffer.lines;
            this._startCol = this._terminal.buffer.x;
            this._startRow = this._terminal.buffer.y;
            var coordinates = this._terminal.mouseHelper.getCoords(this._mouseEvent, this._terminal.element, this._terminal.charMeasure, this._terminal.cols, this._terminal.rows, false);
            if (coordinates) {
                _a = coordinates.map(function (coordinate) {
                    return coordinate - 1;
                }), this._endCol = _a[0], this._endRow = _a[1];
            }
        }
        AltClickHandler.prototype.move = function () {
            if (this._mouseEvent.altKey && this._endCol !== undefined && this._endRow !== undefined) {
                this._terminal.handler(this._arrowSequences());
            }
        };
        AltClickHandler.prototype._arrowSequences = function () {
            if (!this._terminal.buffer.hasScrollback) {
                return this._resetStartingRow() + this._moveToRequestedRow() + this._moveToRequestedCol();
            }
            return this._moveHorizontallyOnly();
        };
        AltClickHandler.prototype._resetStartingRow = function () {
            if (this._moveToRequestedRow().length === 0) {
                return '';
            }
            return repeat(this._bufferLine(this._startCol, this._startRow, this._startCol, this._startRow - this._wrappedRowsForRow(this._startRow), false).length, this._sequence("D"));
        };
        AltClickHandler.prototype._moveToRequestedRow = function () {
            var startRow = this._startRow - this._wrappedRowsForRow(this._startRow);
            var endRow = this._endRow - this._wrappedRowsForRow(this._endRow);
            var rowsToMove = Math.abs(startRow - endRow) - this._wrappedRowsCount();
            return repeat(rowsToMove, this._sequence(this._verticalDirection()));
        };
        AltClickHandler.prototype._moveToRequestedCol = function () {
            var startRow;
            if (this._moveToRequestedRow().length > 0) {
                startRow = this._endRow - this._wrappedRowsForRow(this._endRow);
            }
            else {
                startRow = this._startRow;
            }
            var endRow = this._endRow;
            var direction = this._horizontalDirection();
            return repeat(this._bufferLine(this._startCol, startRow, this._endCol, endRow, direction === "C").length, this._sequence(direction));
        };
        AltClickHandler.prototype._moveHorizontallyOnly = function () {
            var direction = this._horizontalDirection();
            return repeat(Math.abs(this._startCol - this._endCol), this._sequence(direction));
        };
        AltClickHandler.prototype._wrappedRowsCount = function () {
            var wrappedRows = 0;
            var startRow = this._startRow - this._wrappedRowsForRow(this._startRow);
            var endRow = this._endRow - this._wrappedRowsForRow(this._endRow);
            for (var i = 0; i < Math.abs(startRow - endRow); i++) {
                var direction = this._verticalDirection() === "A" ? -1 : 1;
                if (this._lines.get(startRow + (direction * i)).isWrapped) {
                    wrappedRows++;
                }
            }
            return wrappedRows;
        };
        AltClickHandler.prototype._wrappedRowsForRow = function (currentRow) {
            var rowCount = 0;
            var lineWraps = this._lines.get(currentRow).isWrapped;
            while (lineWraps && currentRow >= 0 && currentRow < this._terminal.rows) {
                rowCount++;
                currentRow--;
                lineWraps = this._lines.get(currentRow).isWrapped;
            }
            return rowCount;
        };
        AltClickHandler.prototype._horizontalDirection = function () {
            var startRow;
            if (this._moveToRequestedRow().length > 0) {
                startRow = this._endRow - this._wrappedRowsForRow(this._endRow);
            }
            else {
                startRow = this._startRow;
            }
            if ((this._startCol < this._endCol &&
                startRow <= this._endRow) ||
                (this._startCol >= this._endCol &&
                    startRow < this._endRow)) {
                return "C";
            }
            return "D";
        };
        AltClickHandler.prototype._verticalDirection = function () {
            if (this._startRow > this._endRow) {
                return "A";
            }
            return "B";
        };
        AltClickHandler.prototype._bufferLine = function (startCol, startRow, endCol, endRow, forward) {
            var currentCol = startCol;
            var currentRow = startRow;
            var bufferStr = '';
            while (currentCol !== endCol || currentRow !== endRow) {
                currentCol += forward ? 1 : -1;
                if (forward && currentCol > this._terminal.cols - 1) {
                    bufferStr += this._terminal.buffer.translateBufferLineToString(currentRow, false, startCol, currentCol);
                    currentCol = 0;
                    startCol = 0;
                    currentRow++;
                }
                else if (!forward && currentCol < 0) {
                    bufferStr += this._terminal.buffer.translateBufferLineToString(currentRow, false, 0, startCol + 1);
                    currentCol = this._terminal.cols - 1;
                    startCol = currentCol;
                    currentRow--;
                }
            }
            return bufferStr + this._terminal.buffer.translateBufferLineToString(currentRow, false, startCol, currentCol);
        };
        AltClickHandler.prototype._sequence = function (direction) {
            var mod = this._terminal.applicationCursor ? 'O' : '[';
            return EscapeSequences.C0.ESC + mod + direction;
        };
        return AltClickHandler;
    }());
    exports.AltClickHandler = AltClickHandler;
    function repeat(count, str) {
        count = Math.floor(count);
        var rpt = '';
        for (var i = 0; i < count; i++) {
            rpt += str;
        }
        return rpt;
    }

    });

    unwrapExports(AltClickHandler_1);
    var AltClickHandler_2 = AltClickHandler_1.AltClickHandler;

    var SelectionManager_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });






    var DRAG_SCROLL_MAX_THRESHOLD = 50;
    var DRAG_SCROLL_MAX_SPEED = 15;
    var DRAG_SCROLL_INTERVAL = 50;
    var ALT_CLICK_MOVE_CURSOR_TIME = 500;
    var WORD_SEPARATORS = ' ()[]{}\'"';
    var NON_BREAKING_SPACE_CHAR = String.fromCharCode(160);
    var ALL_NON_BREAKING_SPACE_REGEX = new RegExp(NON_BREAKING_SPACE_CHAR, 'g');
    var SelectionManager = (function () {
        function SelectionManager(_terminal, _charMeasure) {
            this._terminal = _terminal;
            this._charMeasure = _charMeasure;
            this._enabled = true;
            this._workCell = new BufferLine_1.CellData();
            this._onLinuxMouseSelection = new EventEmitter2_1.EventEmitter2();
            this._onRedrawRequest = new EventEmitter2_1.EventEmitter2();
            this._onSelectionChange = new EventEmitter2_1.EventEmitter2();
            this._initListeners();
            this.enable();
            this._model = new SelectionModel_1.SelectionModel(_terminal);
            this._activeSelectionMode = 0;
        }
        Object.defineProperty(SelectionManager.prototype, "onLinuxMouseSelection", {
            get: function () { return this._onLinuxMouseSelection.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SelectionManager.prototype, "onRedrawRequest", {
            get: function () { return this._onRedrawRequest.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SelectionManager.prototype, "onSelectionChange", {
            get: function () { return this._onSelectionChange.event; },
            enumerable: true,
            configurable: true
        });
        SelectionManager.prototype.dispose = function () {
            this._removeMouseDownListeners();
        };
        Object.defineProperty(SelectionManager.prototype, "_buffer", {
            get: function () {
                return this._terminal.buffers.active;
            },
            enumerable: true,
            configurable: true
        });
        SelectionManager.prototype._initListeners = function () {
            var _this = this;
            this._mouseMoveListener = function (event) { return _this._onMouseMove(event); };
            this._mouseUpListener = function (event) { return _this._onMouseUp(event); };
            this.initBuffersListeners();
        };
        SelectionManager.prototype.initBuffersListeners = function () {
            var _this = this;
            this._trimListener = this._terminal.buffer.lines.onTrim(function (amount) { return _this._onTrim(amount); });
            this._terminal.buffers.onBufferActivate(function (e) { return _this._onBufferActivate(e); });
        };
        SelectionManager.prototype.disable = function () {
            this.clearSelection();
            this._enabled = false;
        };
        SelectionManager.prototype.enable = function () {
            this._enabled = true;
        };
        Object.defineProperty(SelectionManager.prototype, "selectionStart", {
            get: function () { return this._model.finalSelectionStart; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SelectionManager.prototype, "selectionEnd", {
            get: function () { return this._model.finalSelectionEnd; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SelectionManager.prototype, "hasSelection", {
            get: function () {
                var start = this._model.finalSelectionStart;
                var end = this._model.finalSelectionEnd;
                if (!start || !end) {
                    return false;
                }
                return start[0] !== end[0] || start[1] !== end[1];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SelectionManager.prototype, "selectionText", {
            get: function () {
                var start = this._model.finalSelectionStart;
                var end = this._model.finalSelectionEnd;
                if (!start || !end) {
                    return '';
                }
                var result = [];
                if (this._activeSelectionMode === 3) {
                    if (start[0] === end[0]) {
                        return '';
                    }
                    for (var i = start[1]; i <= end[1]; i++) {
                        var lineText = this._buffer.translateBufferLineToString(i, true, start[0], end[0]);
                        result.push(lineText);
                    }
                }
                else {
                    var startRowEndCol = start[1] === end[1] ? end[0] : undefined;
                    result.push(this._buffer.translateBufferLineToString(start[1], true, start[0], startRowEndCol));
                    for (var i = start[1] + 1; i <= end[1] - 1; i++) {
                        var bufferLine = this._buffer.lines.get(i);
                        var lineText = this._buffer.translateBufferLineToString(i, true);
                        if (bufferLine.isWrapped) {
                            result[result.length - 1] += lineText;
                        }
                        else {
                            result.push(lineText);
                        }
                    }
                    if (start[1] !== end[1]) {
                        var bufferLine = this._buffer.lines.get(end[1]);
                        var lineText = this._buffer.translateBufferLineToString(end[1], true, 0, end[0]);
                        if (bufferLine.isWrapped) {
                            result[result.length - 1] += lineText;
                        }
                        else {
                            result.push(lineText);
                        }
                    }
                }
                var formattedResult = result.map(function (line) {
                    return line.replace(ALL_NON_BREAKING_SPACE_REGEX, ' ');
                }).join(Platform.isMSWindows ? '\r\n' : '\n');
                return formattedResult;
            },
            enumerable: true,
            configurable: true
        });
        SelectionManager.prototype.clearSelection = function () {
            this._model.clearSelection();
            this._removeMouseDownListeners();
            this.refresh();
        };
        SelectionManager.prototype.refresh = function (isLinuxMouseSelection) {
            var _this = this;
            if (!this._refreshAnimationFrame) {
                this._refreshAnimationFrame = window.requestAnimationFrame(function () { return _this._refresh(); });
            }
            if (Platform.isLinux && isLinuxMouseSelection) {
                var selectionText = this.selectionText;
                if (selectionText.length) {
                    this._onLinuxMouseSelection.fire(this.selectionText);
                }
            }
        };
        SelectionManager.prototype._refresh = function () {
            this._refreshAnimationFrame = null;
            this._onRedrawRequest.fire({
                start: this._model.finalSelectionStart,
                end: this._model.finalSelectionEnd,
                columnSelectMode: this._activeSelectionMode === 3
            });
        };
        SelectionManager.prototype.isClickInSelection = function (event) {
            var coords = this._getMouseBufferCoords(event);
            var start = this._model.finalSelectionStart;
            var end = this._model.finalSelectionEnd;
            if (!start || !end) {
                return false;
            }
            return this._areCoordsInSelection(coords, start, end);
        };
        SelectionManager.prototype._areCoordsInSelection = function (coords, start, end) {
            return (coords[1] > start[1] && coords[1] < end[1]) ||
                (start[1] === end[1] && coords[1] === start[1] && coords[0] >= start[0] && coords[0] < end[0]) ||
                (start[1] < end[1] && coords[1] === end[1] && coords[0] < end[0]) ||
                (start[1] < end[1] && coords[1] === start[1] && coords[0] >= start[0]);
        };
        SelectionManager.prototype.selectWordAtCursor = function (event) {
            var coords = this._getMouseBufferCoords(event);
            if (coords) {
                this._selectWordAt(coords, false);
                this._model.selectionEnd = null;
                this.refresh(true);
            }
        };
        SelectionManager.prototype.selectAll = function () {
            this._model.isSelectAllActive = true;
            this.refresh();
            this._onSelectionChange.fire();
        };
        SelectionManager.prototype.selectLines = function (start, end) {
            this._model.clearSelection();
            start = Math.max(start, 0);
            end = Math.min(end, this._terminal.buffer.lines.length - 1);
            this._model.selectionStart = [0, start];
            this._model.selectionEnd = [this._terminal.cols, end];
            this.refresh();
            this._onSelectionChange.fire();
        };
        SelectionManager.prototype._onTrim = function (amount) {
            var needsRefresh = this._model.onTrim(amount);
            if (needsRefresh) {
                this.refresh();
            }
        };
        SelectionManager.prototype._getMouseBufferCoords = function (event) {
            var coords = this._terminal.mouseHelper.getCoords(event, this._terminal.screenElement, this._charMeasure, this._terminal.cols, this._terminal.rows, true);
            if (!coords) {
                return null;
            }
            coords[0]--;
            coords[1]--;
            coords[1] += this._terminal.buffer.ydisp;
            return coords;
        };
        SelectionManager.prototype._getMouseEventScrollAmount = function (event) {
            var offset = MouseHelper_1.MouseHelper.getCoordsRelativeToElement(event, this._terminal.screenElement)[1];
            var terminalHeight = this._terminal.rows * Math.ceil(this._charMeasure.height * this._terminal.options.lineHeight);
            if (offset >= 0 && offset <= terminalHeight) {
                return 0;
            }
            if (offset > terminalHeight) {
                offset -= terminalHeight;
            }
            offset = Math.min(Math.max(offset, -DRAG_SCROLL_MAX_THRESHOLD), DRAG_SCROLL_MAX_THRESHOLD);
            offset /= DRAG_SCROLL_MAX_THRESHOLD;
            return (offset / Math.abs(offset)) + Math.round(offset * (DRAG_SCROLL_MAX_SPEED - 1));
        };
        SelectionManager.prototype.shouldForceSelection = function (event) {
            if (Platform.isMac) {
                return event.altKey && this._terminal.options.macOptionClickForcesSelection;
            }
            return event.shiftKey;
        };
        SelectionManager.prototype.onMouseDown = function (event) {
            this._mouseDownTimeStamp = event.timeStamp;
            if (event.button === 2 && this.hasSelection) {
                return;
            }
            if (event.button !== 0) {
                return;
            }
            if (!this._enabled) {
                if (!this.shouldForceSelection(event)) {
                    return;
                }
                event.stopPropagation();
            }
            event.preventDefault();
            this._dragScrollAmount = 0;
            if (this._enabled && event.shiftKey) {
                this._onIncrementalClick(event);
            }
            else {
                if (event.detail === 1) {
                    this._onSingleClick(event);
                }
                else if (event.detail === 2) {
                    this._onDoubleClick(event);
                }
                else if (event.detail === 3) {
                    this._onTripleClick(event);
                }
            }
            this._addMouseDownListeners();
            this.refresh(true);
        };
        SelectionManager.prototype._addMouseDownListeners = function () {
            var _this = this;
            this._terminal.element.ownerDocument.addEventListener('mousemove', this._mouseMoveListener);
            this._terminal.element.ownerDocument.addEventListener('mouseup', this._mouseUpListener);
            this._dragScrollIntervalTimer = setInterval(function () { return _this._dragScroll(); }, DRAG_SCROLL_INTERVAL);
        };
        SelectionManager.prototype._removeMouseDownListeners = function () {
            if (this._terminal.element.ownerDocument) {
                this._terminal.element.ownerDocument.removeEventListener('mousemove', this._mouseMoveListener);
                this._terminal.element.ownerDocument.removeEventListener('mouseup', this._mouseUpListener);
            }
            clearInterval(this._dragScrollIntervalTimer);
            this._dragScrollIntervalTimer = null;
        };
        SelectionManager.prototype._onIncrementalClick = function (event) {
            if (this._model.selectionStart) {
                this._model.selectionEnd = this._getMouseBufferCoords(event);
            }
        };
        SelectionManager.prototype._onSingleClick = function (event) {
            this._model.selectionStartLength = 0;
            this._model.isSelectAllActive = false;
            this._activeSelectionMode = this.shouldColumnSelect(event) ? 3 : 0;
            this._model.selectionStart = this._getMouseBufferCoords(event);
            if (!this._model.selectionStart) {
                return;
            }
            this._model.selectionEnd = null;
            var line = this._buffer.lines.get(this._model.selectionStart[1]);
            if (!line) {
                return;
            }
            if (line.length >= this._model.selectionStart[0]) {
                return;
            }
            if (line.hasWidth(this._model.selectionStart[0]) === 0) {
                this._model.selectionStart[0]++;
            }
        };
        SelectionManager.prototype._onDoubleClick = function (event) {
            var coords = this._getMouseBufferCoords(event);
            if (coords) {
                this._activeSelectionMode = 1;
                this._selectWordAt(coords, true);
            }
        };
        SelectionManager.prototype._onTripleClick = function (event) {
            var coords = this._getMouseBufferCoords(event);
            if (coords) {
                this._activeSelectionMode = 2;
                this._selectLineAt(coords[1]);
            }
        };
        SelectionManager.prototype.shouldColumnSelect = function (event) {
            return event.altKey && !(Platform.isMac && this._terminal.options.macOptionClickForcesSelection);
        };
        SelectionManager.prototype._onMouseMove = function (event) {
            event.stopImmediatePropagation();
            var previousSelectionEnd = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
            this._model.selectionEnd = this._getMouseBufferCoords(event);
            if (!this._model.selectionEnd) {
                this.refresh(true);
                return;
            }
            if (this._activeSelectionMode === 2) {
                if (this._model.selectionEnd[1] < this._model.selectionStart[1]) {
                    this._model.selectionEnd[0] = 0;
                }
                else {
                    this._model.selectionEnd[0] = this._terminal.cols;
                }
            }
            else if (this._activeSelectionMode === 1) {
                this._selectToWordAt(this._model.selectionEnd);
            }
            this._dragScrollAmount = this._getMouseEventScrollAmount(event);
            if (this._activeSelectionMode !== 3) {
                if (this._dragScrollAmount > 0) {
                    this._model.selectionEnd[0] = this._terminal.cols;
                }
                else if (this._dragScrollAmount < 0) {
                    this._model.selectionEnd[0] = 0;
                }
            }
            if (this._model.selectionEnd[1] < this._buffer.lines.length) {
                if (this._buffer.lines.get(this._model.selectionEnd[1]).hasWidth(this._model.selectionEnd[0]) === 0) {
                    this._model.selectionEnd[0]++;
                }
            }
            if (!previousSelectionEnd ||
                previousSelectionEnd[0] !== this._model.selectionEnd[0] ||
                previousSelectionEnd[1] !== this._model.selectionEnd[1]) {
                this.refresh(true);
            }
        };
        SelectionManager.prototype._dragScroll = function () {
            if (this._dragScrollAmount) {
                this._terminal.scrollLines(this._dragScrollAmount, false);
                if (this._dragScrollAmount > 0) {
                    if (this._activeSelectionMode !== 3) {
                        this._model.selectionEnd[0] = this._terminal.cols;
                    }
                    this._model.selectionEnd[1] = Math.min(this._terminal.buffer.ydisp + this._terminal.rows, this._terminal.buffer.lines.length - 1);
                }
                else {
                    if (this._activeSelectionMode !== 3) {
                        this._model.selectionEnd[0] = 0;
                    }
                    this._model.selectionEnd[1] = this._terminal.buffer.ydisp;
                }
                this.refresh();
            }
        };
        SelectionManager.prototype._onMouseUp = function (event) {
            var timeElapsed = event.timeStamp - this._mouseDownTimeStamp;
            this._removeMouseDownListeners();
            if (this.selectionText.length <= 1 && timeElapsed < ALT_CLICK_MOVE_CURSOR_TIME) {
                (new AltClickHandler_1.AltClickHandler(event, this._terminal)).move();
            }
            else if (this.hasSelection) {
                this._onSelectionChange.fire();
            }
        };
        SelectionManager.prototype._onBufferActivate = function (e) {
            var _this = this;
            this.clearSelection();
            if (this._trimListener) {
                this._trimListener.dispose();
            }
            this._trimListener = e.activeBuffer.lines.onTrim(function (amount) { return _this._onTrim(amount); });
        };
        SelectionManager.prototype._convertViewportColToCharacterIndex = function (bufferLine, coords) {
            var charIndex = coords[0];
            for (var i = 0; coords[0] >= i; i++) {
                var length_1 = bufferLine.loadCell(i, this._workCell).getChars().length;
                if (this._workCell.getWidth() === 0) {
                    charIndex--;
                }
                else if (length_1 > 1 && coords[0] !== i) {
                    charIndex += length_1 - 1;
                }
            }
            return charIndex;
        };
        SelectionManager.prototype.setSelection = function (col, row, length) {
            this._model.clearSelection();
            this._removeMouseDownListeners();
            this._model.selectionStart = [col, row];
            this._model.selectionStartLength = length;
            this.refresh();
        };
        SelectionManager.prototype._getWordAt = function (coords, allowWhitespaceOnlySelection, followWrappedLinesAbove, followWrappedLinesBelow) {
            if (followWrappedLinesAbove === void 0) { followWrappedLinesAbove = true; }
            if (followWrappedLinesBelow === void 0) { followWrappedLinesBelow = true; }
            if (coords[0] >= this._terminal.cols) {
                return null;
            }
            var bufferLine = this._buffer.lines.get(coords[1]);
            if (!bufferLine) {
                return null;
            }
            var line = this._buffer.translateBufferLineToString(coords[1], false);
            var startIndex = this._convertViewportColToCharacterIndex(bufferLine, coords);
            var endIndex = startIndex;
            var charOffset = coords[0] - startIndex;
            var leftWideCharCount = 0;
            var rightWideCharCount = 0;
            var leftLongCharOffset = 0;
            var rightLongCharOffset = 0;
            if (line.charAt(startIndex) === ' ') {
                while (startIndex > 0 && line.charAt(startIndex - 1) === ' ') {
                    startIndex--;
                }
                while (endIndex < line.length && line.charAt(endIndex + 1) === ' ') {
                    endIndex++;
                }
            }
            else {
                var startCol = coords[0];
                var endCol = coords[0];
                if (bufferLine.getWidth(startCol) === 0) {
                    leftWideCharCount++;
                    startCol--;
                }
                if (bufferLine.getWidth(endCol) === 2) {
                    rightWideCharCount++;
                    endCol++;
                }
                var length_2 = bufferLine.getString(endCol).length;
                if (length_2 > 1) {
                    rightLongCharOffset += length_2 - 1;
                    endIndex += length_2 - 1;
                }
                while (startCol > 0 && startIndex > 0 && !this._isCharWordSeparator(bufferLine.loadCell(startCol - 1, this._workCell))) {
                    bufferLine.loadCell(startCol - 1, this._workCell);
                    var length_3 = this._workCell.getChars().length;
                    if (this._workCell.getWidth() === 0) {
                        leftWideCharCount++;
                        startCol--;
                    }
                    else if (length_3 > 1) {
                        leftLongCharOffset += length_3 - 1;
                        startIndex -= length_3 - 1;
                    }
                    startIndex--;
                    startCol--;
                }
                while (endCol < bufferLine.length && endIndex + 1 < line.length && !this._isCharWordSeparator(bufferLine.loadCell(endCol + 1, this._workCell))) {
                    bufferLine.loadCell(endCol + 1, this._workCell);
                    var length_4 = this._workCell.getChars().length;
                    if (this._workCell.getWidth() === 2) {
                        rightWideCharCount++;
                        endCol++;
                    }
                    else if (length_4 > 1) {
                        rightLongCharOffset += length_4 - 1;
                        endIndex += length_4 - 1;
                    }
                    endIndex++;
                    endCol++;
                }
            }
            endIndex++;
            var start = startIndex
                + charOffset
                - leftWideCharCount
                + leftLongCharOffset;
            var length = Math.min(this._terminal.cols, endIndex
                - startIndex
                + leftWideCharCount
                + rightWideCharCount
                - leftLongCharOffset
                - rightLongCharOffset);
            if (!allowWhitespaceOnlySelection && line.slice(startIndex, endIndex).trim() === '') {
                return null;
            }
            if (followWrappedLinesAbove) {
                if (start === 0 && bufferLine.getCodePoint(0) !== 32) {
                    var previousBufferLine = this._buffer.lines.get(coords[1] - 1);
                    if (previousBufferLine && bufferLine.isWrapped && previousBufferLine.getCodePoint(this._terminal.cols - 1) !== 32) {
                        var previousLineWordPosition = this._getWordAt([this._terminal.cols - 1, coords[1] - 1], false, true, false);
                        if (previousLineWordPosition) {
                            var offset = this._terminal.cols - previousLineWordPosition.start;
                            start -= offset;
                            length += offset;
                        }
                    }
                }
            }
            if (followWrappedLinesBelow) {
                if (start + length === this._terminal.cols && bufferLine.getCodePoint(this._terminal.cols - 1) !== 32) {
                    var nextBufferLine = this._buffer.lines.get(coords[1] + 1);
                    if (nextBufferLine && nextBufferLine.isWrapped && nextBufferLine.getCodePoint(0) !== 32) {
                        var nextLineWordPosition = this._getWordAt([0, coords[1] + 1], false, false, true);
                        if (nextLineWordPosition) {
                            length += nextLineWordPosition.length;
                        }
                    }
                }
            }
            return { start: start, length: length };
        };
        SelectionManager.prototype._selectWordAt = function (coords, allowWhitespaceOnlySelection) {
            var wordPosition = this._getWordAt(coords, allowWhitespaceOnlySelection);
            if (wordPosition) {
                while (wordPosition.start < 0) {
                    wordPosition.start += this._terminal.cols;
                    coords[1]--;
                }
                this._model.selectionStart = [wordPosition.start, coords[1]];
                this._model.selectionStartLength = wordPosition.length;
            }
        };
        SelectionManager.prototype._selectToWordAt = function (coords) {
            var wordPosition = this._getWordAt(coords, true);
            if (wordPosition) {
                var endRow = coords[1];
                while (wordPosition.start < 0) {
                    wordPosition.start += this._terminal.cols;
                    endRow--;
                }
                if (!this._model.areSelectionValuesReversed()) {
                    while (wordPosition.start + wordPosition.length > this._terminal.cols) {
                        wordPosition.length -= this._terminal.cols;
                        endRow++;
                    }
                }
                this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? wordPosition.start : wordPosition.start + wordPosition.length, endRow];
            }
        };
        SelectionManager.prototype._isCharWordSeparator = function (cell) {
            if (cell.getWidth() === 0) {
                return false;
            }
            return WORD_SEPARATORS.indexOf(cell.getChars()) >= 0;
        };
        SelectionManager.prototype._selectLineAt = function (line) {
            var wrappedRange = this._buffer.getWrappedRangeForLine(line);
            this._model.selectionStart = [0, wrappedRange.first];
            this._model.selectionEnd = [this._terminal.cols, wrappedRange.last];
            this._model.selectionStartLength = 0;
        };
        return SelectionManager;
    }());
    exports.SelectionManager = SelectionManager;

    });

    unwrapExports(SelectionManager_1);
    var SelectionManager_2 = SelectionManager_1.SelectionManager;

    var CharMeasure_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    var CharMeasure = (function () {
        function CharMeasure(document, parentElement) {
            this._onCharSizeChanged = new EventEmitter2_1.EventEmitter2();
            this._document = document;
            this._parentElement = parentElement;
            this._measureElement = this._document.createElement('span');
            this._measureElement.classList.add('xterm-char-measure-element');
            this._measureElement.textContent = 'W';
            this._measureElement.setAttribute('aria-hidden', 'true');
            this._parentElement.appendChild(this._measureElement);
        }
        Object.defineProperty(CharMeasure.prototype, "onCharSizeChanged", {
            get: function () { return this._onCharSizeChanged.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CharMeasure.prototype, "width", {
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CharMeasure.prototype, "height", {
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        CharMeasure.prototype.measure = function (options) {
            this._measureElement.style.fontFamily = options.fontFamily;
            this._measureElement.style.fontSize = options.fontSize + "px";
            var geometry = this._measureElement.getBoundingClientRect();
            if (geometry.width === 0 || geometry.height === 0) {
                return;
            }
            var adjustedHeight = Math.ceil(geometry.height);
            if (this._width !== geometry.width || this._height !== adjustedHeight) {
                this._width = geometry.width;
                this._height = adjustedHeight;
                this._onCharSizeChanged.fire();
            }
        };
        return CharMeasure;
    }());
    exports.CharMeasure = CharMeasure;

    });

    unwrapExports(CharMeasure_1);
    var CharMeasure_2 = CharMeasure_1.CharMeasure;

    var Strings = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.blankLine = 'Blank line';
    exports.promptLabel = 'Terminal input';
    exports.tooMuchOutput = 'Too much output to announce, navigate to rows manually to read';

    });

    unwrapExports(Strings);
    var Strings_1 = Strings.blankLine;
    var Strings_2 = Strings.promptLabel;
    var Strings_3 = Strings.tooMuchOutput;

    var SoundManager_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_BELL_SOUND = 'data:audio/wav;base64,UklGRigBAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQBAADpAFgCwAMlBZoG/wdmCcoKRAypDQ8PbRDBEQQTOxRtFYcWlBePGIUZXhoiG88bcBz7HHIdzh0WHlMeZx51HmkeUx4WHs8dah0AHXwc3hs9G4saxRnyGBIYGBcQFv8U4RPAEoYRQBACD70NWwwHC6gJOwjWBloF7gOBAhABkf8b/qv8R/ve+Xf4Ife79W/0JfPZ8Z/wde9N7ijtE+wU6xvqM+lb6H7nw+YX5mrlxuQz5Mzje+Ma49fioeKD4nXiYeJy4pHitOL04j/jn+MN5IPkFOWs5U3mDefM55/ogOl36m7rdOyE7abuyu8D8Unyj/Pg9D/2qfcb+Yn6/vuK/Qj/lAAlAg==';
    var SoundManager = (function () {
        function SoundManager(_terminal) {
            this._terminal = _terminal;
        }
        Object.defineProperty(SoundManager, "audioContext", {
            get: function () {
                if (!SoundManager._audioContext) {
                    var audioContextCtor = window.AudioContext || window.webkitAudioContext;
                    if (!audioContextCtor) {
                        console.warn('Web Audio API is not supported by this browser. Consider upgrading to the latest version');
                        return null;
                    }
                    SoundManager._audioContext = new audioContextCtor();
                }
                return SoundManager._audioContext;
            },
            enumerable: true,
            configurable: true
        });
        SoundManager.prototype.playBellSound = function () {
            var ctx = SoundManager.audioContext;
            if (!ctx) {
                return;
            }
            var bellAudioSource = ctx.createBufferSource();
            ctx.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._terminal.options.bellSound)), function (buffer) {
                bellAudioSource.buffer = buffer;
                bellAudioSource.connect(ctx.destination);
                bellAudioSource.start(0);
            });
        };
        SoundManager.prototype._base64ToArrayBuffer = function (base64) {
            var binaryString = window.atob(base64);
            var len = binaryString.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes.buffer;
        };
        SoundManager.prototype._removeMimeType = function (dataURI) {
            var splitUri = dataURI.split(',');
            return splitUri[1];
        };
        return SoundManager;
    }());
    exports.SoundManager = SoundManager;

    });

    unwrapExports(SoundManager_1);
    var SoundManager_2 = SoundManager_1.DEFAULT_BELL_SOUND;
    var SoundManager_3 = SoundManager_1.SoundManager;

    var AccessibilityManager_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });





    var MAX_ROWS_TO_READ = 20;
    var AccessibilityManager = (function (_super) {
        __extends(AccessibilityManager, _super);
        function AccessibilityManager(_terminal) {
            var _this = _super.call(this) || this;
            _this._terminal = _terminal;
            _this._liveRegionLineCount = 0;
            _this._charsToConsume = [];
            _this._accessibilityTreeRoot = document.createElement('div');
            _this._accessibilityTreeRoot.classList.add('xterm-accessibility');
            _this._rowContainer = document.createElement('div');
            _this._rowContainer.classList.add('xterm-accessibility-tree');
            _this._rowElements = [];
            for (var i = 0; i < _this._terminal.rows; i++) {
                _this._rowElements[i] = _this._createAccessibilityTreeNode();
                _this._rowContainer.appendChild(_this._rowElements[i]);
            }
            _this._topBoundaryFocusListener = function (e) { return _this._onBoundaryFocus(e, 0); };
            _this._bottomBoundaryFocusListener = function (e) { return _this._onBoundaryFocus(e, 1); };
            _this._rowElements[0].addEventListener('focus', _this._topBoundaryFocusListener);
            _this._rowElements[_this._rowElements.length - 1].addEventListener('focus', _this._bottomBoundaryFocusListener);
            _this._refreshRowsDimensions();
            _this._accessibilityTreeRoot.appendChild(_this._rowContainer);
            _this._renderRowsDebouncer = new RenderDebouncer_1.RenderDebouncer(_this._renderRows.bind(_this));
            _this._refreshRows();
            _this._liveRegion = document.createElement('div');
            _this._liveRegion.classList.add('live-region');
            _this._liveRegion.setAttribute('aria-live', 'assertive');
            _this._accessibilityTreeRoot.appendChild(_this._liveRegion);
            _this._terminal.element.insertAdjacentElement('afterbegin', _this._accessibilityTreeRoot);
            _this.register(_this._renderRowsDebouncer);
            _this.register(_this._terminal.onResize(function (e) { return _this._onResize(e.rows); }));
            _this.register(_this._terminal.onRender(function (e) { return _this._refreshRows(e.start, e.end); }));
            _this.register(_this._terminal.onScroll(function () { return _this._refreshRows(); }));
            _this.register(_this._terminal.addDisposableListener('a11y.char', function (char) { return _this._onChar(char); }));
            _this.register(_this._terminal.onLineFeed(function () { return _this._onChar('\n'); }));
            _this.register(_this._terminal.addDisposableListener('a11y.tab', function (spaceCount) { return _this._onTab(spaceCount); }));
            _this.register(_this._terminal.onKey(function (e) { return _this._onKey(e.key); }));
            _this.register(_this._terminal.addDisposableListener('blur', function () { return _this._clearLiveRegion(); }));
            _this.register(_this._terminal.addDisposableListener('dprchange', function () { return _this._refreshRowsDimensions(); }));
            _this.register(_this._terminal.renderer.onCanvasResize(function () { return _this._refreshRowsDimensions(); }));
            _this.register(Lifecycle$2.addDisposableDomListener(window, 'resize', function () { return _this._refreshRowsDimensions(); }));
            return _this;
        }
        AccessibilityManager.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this._terminal.element.removeChild(this._accessibilityTreeRoot);
            this._rowElements.length = 0;
        };
        AccessibilityManager.prototype._onBoundaryFocus = function (e, position) {
            var boundaryElement = e.target;
            var beforeBoundaryElement = this._rowElements[position === 0 ? 1 : this._rowElements.length - 2];
            var posInSet = boundaryElement.getAttribute('aria-posinset');
            var lastRowPos = position === 0 ? '1' : "" + this._terminal.buffer.lines.length;
            if (posInSet === lastRowPos) {
                return;
            }
            if (e.relatedTarget !== beforeBoundaryElement) {
                return;
            }
            var topBoundaryElement;
            var bottomBoundaryElement;
            if (position === 0) {
                topBoundaryElement = boundaryElement;
                bottomBoundaryElement = this._rowElements.pop();
                this._rowContainer.removeChild(bottomBoundaryElement);
            }
            else {
                topBoundaryElement = this._rowElements.shift();
                bottomBoundaryElement = boundaryElement;
                this._rowContainer.removeChild(topBoundaryElement);
            }
            topBoundaryElement.removeEventListener('focus', this._topBoundaryFocusListener);
            bottomBoundaryElement.removeEventListener('focus', this._bottomBoundaryFocusListener);
            if (position === 0) {
                var newElement = this._createAccessibilityTreeNode();
                this._rowElements.unshift(newElement);
                this._rowContainer.insertAdjacentElement('afterbegin', newElement);
            }
            else {
                var newElement = this._createAccessibilityTreeNode();
                this._rowElements.push(newElement);
                this._rowContainer.appendChild(newElement);
            }
            this._rowElements[0].addEventListener('focus', this._topBoundaryFocusListener);
            this._rowElements[this._rowElements.length - 1].addEventListener('focus', this._bottomBoundaryFocusListener);
            this._terminal.scrollLines(position === 0 ? -1 : 1);
            this._rowElements[position === 0 ? 1 : this._rowElements.length - 2].focus();
            e.preventDefault();
            e.stopImmediatePropagation();
        };
        AccessibilityManager.prototype._onResize = function (rows) {
            this._rowElements[this._rowElements.length - 1].removeEventListener('focus', this._bottomBoundaryFocusListener);
            for (var i = this._rowContainer.children.length; i < this._terminal.rows; i++) {
                this._rowElements[i] = this._createAccessibilityTreeNode();
                this._rowContainer.appendChild(this._rowElements[i]);
            }
            while (this._rowElements.length > rows) {
                this._rowContainer.removeChild(this._rowElements.pop());
            }
            this._rowElements[this._rowElements.length - 1].addEventListener('focus', this._bottomBoundaryFocusListener);
            this._refreshRowsDimensions();
        };
        AccessibilityManager.prototype._createAccessibilityTreeNode = function () {
            var element = document.createElement('div');
            element.setAttribute('role', 'listitem');
            element.tabIndex = -1;
            this._refreshRowDimensions(element);
            return element;
        };
        AccessibilityManager.prototype._onTab = function (spaceCount) {
            for (var i = 0; i < spaceCount; i++) {
                this._onChar(' ');
            }
        };
        AccessibilityManager.prototype._onChar = function (char) {
            var _this = this;
            if (this._liveRegionLineCount < MAX_ROWS_TO_READ + 1) {
                if (this._charsToConsume.length > 0) {
                    var shiftedChar = this._charsToConsume.shift();
                    if (shiftedChar !== char) {
                        this._announceCharacter(char);
                    }
                }
                else {
                    this._announceCharacter(char);
                }
                if (char === '\n') {
                    this._liveRegionLineCount++;
                    if (this._liveRegionLineCount === MAX_ROWS_TO_READ + 1) {
                        this._liveRegion.textContent += Strings.tooMuchOutput;
                    }
                }
                if (Platform.isMac) {
                    if (this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode) {
                        setTimeout(function () {
                            _this._accessibilityTreeRoot.appendChild(_this._liveRegion);
                        }, 0);
                    }
                }
            }
        };
        AccessibilityManager.prototype._clearLiveRegion = function () {
            this._liveRegion.textContent = '';
            this._liveRegionLineCount = 0;
            if (Platform.isMac) {
                if (this._liveRegion.parentNode) {
                    this._accessibilityTreeRoot.removeChild(this._liveRegion);
                }
            }
        };
        AccessibilityManager.prototype._onKey = function (keyChar) {
            this._clearLiveRegion();
            this._charsToConsume.push(keyChar);
        };
        AccessibilityManager.prototype._refreshRows = function (start, end) {
            this._renderRowsDebouncer.refresh(start, end, this._terminal.rows);
        };
        AccessibilityManager.prototype._renderRows = function (start, end) {
            var buffer = this._terminal.buffer;
            var setSize = buffer.lines.length.toString();
            for (var i = start; i <= end; i++) {
                var lineData = buffer.translateBufferLineToString(buffer.ydisp + i, true);
                var posInSet = (buffer.ydisp + i + 1).toString();
                var element = this._rowElements[i];
                if (element) {
                    element.textContent = lineData.length === 0 ? Strings.blankLine : lineData;
                    element.setAttribute('aria-posinset', posInSet);
                    element.setAttribute('aria-setsize', setSize);
                }
            }
        };
        AccessibilityManager.prototype._refreshRowsDimensions = function () {
            if (!this._terminal.renderer.dimensions.actualCellHeight) {
                return;
            }
            if (this._rowElements.length !== this._terminal.rows) {
                this._onResize(this._terminal.rows);
            }
            for (var i = 0; i < this._terminal.rows; i++) {
                this._refreshRowDimensions(this._rowElements[i]);
            }
        };
        AccessibilityManager.prototype._refreshRowDimensions = function (element) {
            element.style.height = this._terminal.renderer.dimensions.actualCellHeight + "px";
        };
        AccessibilityManager.prototype._announceCharacter = function (char) {
            if (char === ' ') {
                this._liveRegion.innerHTML += '&nbsp;';
            }
            else {
                this._liveRegion.textContent += char;
            }
        };
        return AccessibilityManager;
    }(Lifecycle.Disposable));
    exports.AccessibilityManager = AccessibilityManager;

    });

    unwrapExports(AccessibilityManager_1);
    var AccessibilityManager_2 = AccessibilityManager_1.AccessibilityManager;

    var DomRendererRowFactory_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });



    exports.BOLD_CLASS = 'xterm-bold';
    exports.DIM_CLASS = 'xterm-dim';
    exports.ITALIC_CLASS = 'xterm-italic';
    exports.UNDERLINE_CLASS = 'xterm-underline';
    exports.CURSOR_CLASS = 'xterm-cursor';
    exports.CURSOR_BLINK_CLASS = 'xterm-cursor-blink';
    exports.CURSOR_STYLE_BLOCK_CLASS = 'xterm-cursor-block';
    exports.CURSOR_STYLE_BAR_CLASS = 'xterm-cursor-bar';
    exports.CURSOR_STYLE_UNDERLINE_CLASS = 'xterm-cursor-underline';
    var DomRendererRowFactory = (function () {
        function DomRendererRowFactory(_terminalOptions, _document) {
            this._terminalOptions = _terminalOptions;
            this._document = _document;
            this._workCell = new BufferLine_1.CellData();
        }
        DomRendererRowFactory.prototype.createRow = function (lineData, isCursorRow, cursorStyle, cursorX, cursorBlink, cellWidth, cols) {
            var fragment = this._document.createDocumentFragment();
            var lineLength = 0;
            for (var x = Math.min(lineData.length, cols) - 1; x >= 0; x--) {
                if (lineData.loadCell(x, this._workCell).getCode() !== Buffer_1.NULL_CELL_CODE || (isCursorRow && x === cursorX)) {
                    lineLength = x + 1;
                    break;
                }
            }
            for (var x = 0; x < lineLength; x++) {
                lineData.loadCell(x, this._workCell);
                var width = this._workCell.getWidth();
                if (width === 0) {
                    continue;
                }
                var charElement = this._document.createElement('span');
                if (width > 1) {
                    charElement.style.width = cellWidth * width + "px";
                }
                if (isCursorRow && x === cursorX) {
                    charElement.classList.add(exports.CURSOR_CLASS);
                    if (cursorBlink) {
                        charElement.classList.add(exports.CURSOR_BLINK_CLASS);
                    }
                    switch (cursorStyle) {
                        case 'bar':
                            charElement.classList.add(exports.CURSOR_STYLE_BAR_CLASS);
                            break;
                        case 'underline':
                            charElement.classList.add(exports.CURSOR_STYLE_UNDERLINE_CLASS);
                            break;
                        default:
                            charElement.classList.add(exports.CURSOR_STYLE_BLOCK_CLASS);
                            break;
                    }
                }
                if (this._workCell.isBold() && this._terminalOptions.enableBold) {
                    charElement.classList.add(exports.BOLD_CLASS);
                }
                if (this._workCell.isItalic()) {
                    charElement.classList.add(exports.ITALIC_CLASS);
                }
                if (this._workCell.isDim()) {
                    charElement.classList.add(exports.DIM_CLASS);
                }
                if (this._workCell.isUnderline()) {
                    charElement.classList.add(exports.UNDERLINE_CLASS);
                }
                charElement.textContent = this._workCell.getChars() || Buffer_1.WHITESPACE_CELL_CHAR;
                var swapColor = this._workCell.isInverse();
                if (this._workCell.isFgRGB()) {
                    var style = charElement.getAttribute('style') || '';
                    style += (swapColor ? 'background-' : '') + "color:rgb(" + (BufferLine_1.AttributeData.toColorRGB(this._workCell.getFgColor())).join(',') + ");";
                    charElement.setAttribute('style', style);
                }
                else if (this._workCell.isFgPalette()) {
                    var fg = this._workCell.getFgColor();
                    if (this._workCell.isBold() && fg < 8 && !swapColor &&
                        this._terminalOptions.enableBold && this._terminalOptions.drawBoldTextInBrightColors) {
                        fg += 8;
                    }
                    charElement.classList.add("xterm-" + (swapColor ? 'b' : 'f') + "g-" + fg);
                }
                else if (swapColor) {
                    charElement.classList.add("xterm-bg-" + Types.INVERTED_DEFAULT_COLOR);
                }
                if (this._workCell.isBgRGB()) {
                    var style = charElement.getAttribute('style') || '';
                    style += (swapColor ? '' : 'background-') + "color:rgb(" + (BufferLine_1.AttributeData.toColorRGB(this._workCell.getBgColor())).join(',') + ");";
                    charElement.setAttribute('style', style);
                }
                else if (this._workCell.isBgPalette()) {
                    charElement.classList.add("xterm-" + (swapColor ? 'f' : 'b') + "g-" + this._workCell.getBgColor());
                }
                else if (swapColor) {
                    charElement.classList.add("xterm-fg-" + Types.INVERTED_DEFAULT_COLOR);
                }
                fragment.appendChild(charElement);
            }
            return fragment;
        };
        return DomRendererRowFactory;
    }());
    exports.DomRendererRowFactory = DomRendererRowFactory;

    });

    unwrapExports(DomRendererRowFactory_1);
    var DomRendererRowFactory_2 = DomRendererRowFactory_1.BOLD_CLASS;
    var DomRendererRowFactory_3 = DomRendererRowFactory_1.DIM_CLASS;
    var DomRendererRowFactory_4 = DomRendererRowFactory_1.ITALIC_CLASS;
    var DomRendererRowFactory_5 = DomRendererRowFactory_1.UNDERLINE_CLASS;
    var DomRendererRowFactory_6 = DomRendererRowFactory_1.CURSOR_CLASS;
    var DomRendererRowFactory_7 = DomRendererRowFactory_1.CURSOR_BLINK_CLASS;
    var DomRendererRowFactory_8 = DomRendererRowFactory_1.CURSOR_STYLE_BLOCK_CLASS;
    var DomRendererRowFactory_9 = DomRendererRowFactory_1.CURSOR_STYLE_BAR_CLASS;
    var DomRendererRowFactory_10 = DomRendererRowFactory_1.CURSOR_STYLE_UNDERLINE_CLASS;
    var DomRendererRowFactory_11 = DomRendererRowFactory_1.DomRendererRowFactory;

    var DomRenderer_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });






    var TERMINAL_CLASS_PREFIX = 'xterm-dom-renderer-owner-';
    var ROW_CONTAINER_CLASS = 'xterm-rows';
    var FG_CLASS_PREFIX = 'xterm-fg-';
    var BG_CLASS_PREFIX = 'xterm-bg-';
    var FOCUS_CLASS = 'xterm-focus';
    var SELECTION_CLASS = 'xterm-selection';
    var nextTerminalId = 1;
    var DomRenderer = (function (_super) {
        __extends(DomRenderer, _super);
        function DomRenderer(_terminal, theme) {
            var _this = _super.call(this) || this;
            _this._terminal = _terminal;
            _this._terminalClass = nextTerminalId++;
            _this._rowElements = [];
            _this._onCanvasResize = new EventEmitter2_1.EventEmitter2();
            _this._onRender = new EventEmitter2_1.EventEmitter2();
            var allowTransparency = _this._terminal.options.allowTransparency;
            _this.colorManager = new ColorManager_1.ColorManager(document, allowTransparency);
            _this.setTheme(theme);
            _this._rowContainer = document.createElement('div');
            _this._rowContainer.classList.add(ROW_CONTAINER_CLASS);
            _this._rowContainer.style.lineHeight = 'normal';
            _this._rowContainer.setAttribute('aria-hidden', 'true');
            _this._refreshRowElements(_this._terminal.cols, _this._terminal.rows);
            _this._selectionContainer = document.createElement('div');
            _this._selectionContainer.classList.add(SELECTION_CLASS);
            _this._selectionContainer.setAttribute('aria-hidden', 'true');
            _this.dimensions = {
                scaledCharWidth: null,
                scaledCharHeight: null,
                scaledCellWidth: null,
                scaledCellHeight: null,
                scaledCharLeft: null,
                scaledCharTop: null,
                scaledCanvasWidth: null,
                scaledCanvasHeight: null,
                canvasWidth: null,
                canvasHeight: null,
                actualCellWidth: null,
                actualCellHeight: null
            };
            _this._updateDimensions();
            _this._renderDebouncer = new RenderDebouncer_1.RenderDebouncer(_this._renderRows.bind(_this));
            _this._rowFactory = new DomRendererRowFactory_1.DomRendererRowFactory(_terminal.options, document);
            _this._terminal.element.classList.add(TERMINAL_CLASS_PREFIX + _this._terminalClass);
            _this._terminal.screenElement.appendChild(_this._rowContainer);
            _this._terminal.screenElement.appendChild(_this._selectionContainer);
            _this._terminal.linkifier.onLinkHover(function (e) { return _this._onLinkHover(e); });
            _this._terminal.linkifier.onLinkLeave(function (e) { return _this._onLinkLeave(e); });
            return _this;
        }
        Object.defineProperty(DomRenderer.prototype, "onCanvasResize", {
            get: function () { return this._onCanvasResize.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DomRenderer.prototype, "onRender", {
            get: function () { return this._onRender.event; },
            enumerable: true,
            configurable: true
        });
        DomRenderer.prototype.dispose = function () {
            this._terminal.element.classList.remove(TERMINAL_CLASS_PREFIX + this._terminalClass);
            this._terminal.screenElement.removeChild(this._rowContainer);
            this._terminal.screenElement.removeChild(this._selectionContainer);
            this._terminal.screenElement.removeChild(this._themeStyleElement);
            this._terminal.screenElement.removeChild(this._dimensionsStyleElement);
            _super.prototype.dispose.call(this);
        };
        DomRenderer.prototype._updateDimensions = function () {
            var _this = this;
            this.dimensions.scaledCharWidth = Math.floor(this._terminal.charMeasure.width * window.devicePixelRatio);
            this.dimensions.scaledCharHeight = Math.ceil(this._terminal.charMeasure.height * window.devicePixelRatio);
            this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._terminal.options.letterSpacing);
            this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._terminal.options.lineHeight);
            this.dimensions.scaledCharLeft = 0;
            this.dimensions.scaledCharTop = 0;
            this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._terminal.cols;
            this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._terminal.rows;
            this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio);
            this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio);
            this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._terminal.cols;
            this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._terminal.rows;
            this._rowElements.forEach(function (element) {
                element.style.width = _this.dimensions.canvasWidth + "px";
                element.style.height = _this.dimensions.actualCellHeight + "px";
                element.style.lineHeight = _this.dimensions.actualCellHeight + "px";
                element.style.overflow = 'hidden';
            });
            if (!this._dimensionsStyleElement) {
                this._dimensionsStyleElement = document.createElement('style');
                this._terminal.screenElement.appendChild(this._dimensionsStyleElement);
            }
            var styles = this._terminalSelector + " ." + ROW_CONTAINER_CLASS + " span {" +
                " display: inline-block;" +
                " height: 100%;" +
                " vertical-align: top;" +
                (" width: " + this.dimensions.actualCellWidth + "px") +
                "}";
            this._dimensionsStyleElement.innerHTML = styles;
            this._selectionContainer.style.height = this._terminal._viewportElement.style.height;
            this._terminal.screenElement.style.width = this.dimensions.canvasWidth + "px";
            this._terminal.screenElement.style.height = this.dimensions.canvasHeight + "px";
        };
        DomRenderer.prototype.setTheme = function (theme) {
            var _this = this;
            if (theme) {
                this.colorManager.setTheme(theme);
            }
            if (!this._themeStyleElement) {
                this._themeStyleElement = document.createElement('style');
                this._terminal.screenElement.appendChild(this._themeStyleElement);
            }
            var styles = this._terminalSelector + " ." + ROW_CONTAINER_CLASS + " {" +
                (" color: " + this.colorManager.colors.foreground.css + ";") +
                (" background-color: " + this.colorManager.colors.background.css + ";") +
                (" font-family: " + this._terminal.getOption('fontFamily') + ";") +
                (" font-size: " + this._terminal.getOption('fontSize') + "px;") +
                "}";
            styles +=
                this._terminalSelector + " span:not(." + DomRendererRowFactory_1.BOLD_CLASS + ") {" +
                    (" font-weight: " + this._terminal.options.fontWeight + ";") +
                    "}" +
                    (this._terminalSelector + " span." + DomRendererRowFactory_1.BOLD_CLASS + " {") +
                    (" font-weight: " + this._terminal.options.fontWeightBold + ";") +
                    "}" +
                    (this._terminalSelector + " span." + DomRendererRowFactory_1.ITALIC_CLASS + " {") +
                    " font-style: italic;" +
                    "}";
            styles +=
                "@keyframes blink {" +
                    " 0% { opacity: 1.0; }" +
                    " 50% { opacity: 0.0; }" +
                    " 100% { opacity: 1.0; }" +
                    "}";
            styles +=
                this._terminalSelector + " ." + ROW_CONTAINER_CLASS + ":not(." + FOCUS_CLASS + ") ." + DomRendererRowFactory_1.CURSOR_CLASS + " {" +
                    (" outline: 1px solid " + this.colorManager.colors.cursor.css + ";") +
                    " outline-offset: -1px;" +
                    "}" +
                    (this._terminalSelector + " ." + ROW_CONTAINER_CLASS + "." + FOCUS_CLASS + " ." + DomRendererRowFactory_1.CURSOR_CLASS + "." + DomRendererRowFactory_1.CURSOR_BLINK_CLASS + " {") +
                    " animation: blink 1s step-end infinite;" +
                    "}" +
                    (this._terminalSelector + " ." + ROW_CONTAINER_CLASS + "." + FOCUS_CLASS + " ." + DomRendererRowFactory_1.CURSOR_CLASS + "." + DomRendererRowFactory_1.CURSOR_STYLE_BLOCK_CLASS + " {") +
                    (" background-color: " + this.colorManager.colors.cursor.css + ";") +
                    (" color: " + this.colorManager.colors.cursorAccent.css + ";") +
                    "}" +
                    (this._terminalSelector + " ." + ROW_CONTAINER_CLASS + "." + FOCUS_CLASS + " ." + DomRendererRowFactory_1.CURSOR_CLASS + "." + DomRendererRowFactory_1.CURSOR_STYLE_BAR_CLASS + " {") +
                    (" box-shadow: 1px 0 0 " + this.colorManager.colors.cursor.css + " inset;") +
                    "}" +
                    (this._terminalSelector + " ." + ROW_CONTAINER_CLASS + "." + FOCUS_CLASS + " ." + DomRendererRowFactory_1.CURSOR_CLASS + "." + DomRendererRowFactory_1.CURSOR_STYLE_UNDERLINE_CLASS + " {") +
                    (" box-shadow: 0 -1px 0 " + this.colorManager.colors.cursor.css + " inset;") +
                    "}";
            styles +=
                this._terminalSelector + " ." + SELECTION_CLASS + " {" +
                    " position: absolute;" +
                    " top: 0;" +
                    " left: 0;" +
                    " z-index: 1;" +
                    " pointer-events: none;" +
                    "}" +
                    (this._terminalSelector + " ." + SELECTION_CLASS + " div {") +
                    " position: absolute;" +
                    (" background-color: " + this.colorManager.colors.selection.css + ";") +
                    "}";
            this.colorManager.colors.ansi.forEach(function (c, i) {
                styles +=
                    _this._terminalSelector + " ." + FG_CLASS_PREFIX + i + " { color: " + c.css + "; }" +
                        (_this._terminalSelector + " ." + BG_CLASS_PREFIX + i + " { background-color: " + c.css + "; }");
            });
            styles +=
                this._terminalSelector + " ." + FG_CLASS_PREFIX + Types.INVERTED_DEFAULT_COLOR + " { color: " + this.colorManager.colors.background.css + "; }" +
                    (this._terminalSelector + " ." + BG_CLASS_PREFIX + Types.INVERTED_DEFAULT_COLOR + " { background-color: " + this.colorManager.colors.foreground.css + "; }");
            this._themeStyleElement.innerHTML = styles;
            return this.colorManager.colors;
        };
        DomRenderer.prototype.onWindowResize = function (devicePixelRatio) {
            this._updateDimensions();
        };
        DomRenderer.prototype._refreshRowElements = function (cols, rows) {
            for (var i = this._rowElements.length; i <= rows; i++) {
                var row = document.createElement('div');
                this._rowContainer.appendChild(row);
                this._rowElements.push(row);
            }
            while (this._rowElements.length > rows) {
                this._rowContainer.removeChild(this._rowElements.pop());
            }
        };
        DomRenderer.prototype.onResize = function (cols, rows) {
            this._refreshRowElements(cols, rows);
            this._updateDimensions();
            this._onCanvasResize.fire({
                width: this.dimensions.canvasWidth,
                height: this.dimensions.canvasHeight
            });
        };
        DomRenderer.prototype.onCharSizeChanged = function () {
            this._updateDimensions();
        };
        DomRenderer.prototype.onBlur = function () {
            this._rowContainer.classList.remove(FOCUS_CLASS);
        };
        DomRenderer.prototype.onFocus = function () {
            this._rowContainer.classList.add(FOCUS_CLASS);
        };
        DomRenderer.prototype.onSelectionChanged = function (start, end, columnSelectMode) {
            while (this._selectionContainer.children.length) {
                this._selectionContainer.removeChild(this._selectionContainer.children[0]);
            }
            if (!start || !end) {
                return;
            }
            var viewportStartRow = start[1] - this._terminal.buffer.ydisp;
            var viewportEndRow = end[1] - this._terminal.buffer.ydisp;
            var viewportCappedStartRow = Math.max(viewportStartRow, 0);
            var viewportCappedEndRow = Math.min(viewportEndRow, this._terminal.rows - 1);
            if (viewportCappedStartRow >= this._terminal.rows || viewportCappedEndRow < 0) {
                return;
            }
            var documentFragment = document.createDocumentFragment();
            if (columnSelectMode) {
                documentFragment.appendChild(this._createSelectionElement(viewportCappedStartRow, start[0], end[0], viewportCappedEndRow - viewportCappedStartRow + 1));
            }
            else {
                var startCol = viewportStartRow === viewportCappedStartRow ? start[0] : 0;
                var endCol = viewportCappedStartRow === viewportCappedEndRow ? end[0] : this._terminal.cols;
                documentFragment.appendChild(this._createSelectionElement(viewportCappedStartRow, startCol, endCol));
                var middleRowsCount = viewportCappedEndRow - viewportCappedStartRow - 1;
                documentFragment.appendChild(this._createSelectionElement(viewportCappedStartRow + 1, 0, this._terminal.cols, middleRowsCount));
                if (viewportCappedStartRow !== viewportCappedEndRow) {
                    var endCol_1 = viewportEndRow === viewportCappedEndRow ? end[0] : this._terminal.cols;
                    documentFragment.appendChild(this._createSelectionElement(viewportCappedEndRow, 0, endCol_1));
                }
            }
            this._selectionContainer.appendChild(documentFragment);
        };
        DomRenderer.prototype._createSelectionElement = function (row, colStart, colEnd, rowCount) {
            if (rowCount === void 0) { rowCount = 1; }
            var element = document.createElement('div');
            element.style.height = rowCount * this.dimensions.actualCellHeight + "px";
            element.style.top = row * this.dimensions.actualCellHeight + "px";
            element.style.left = colStart * this.dimensions.actualCellWidth + "px";
            element.style.width = this.dimensions.actualCellWidth * (colEnd - colStart) + "px";
            return element;
        };
        DomRenderer.prototype.onCursorMove = function () {
        };
        DomRenderer.prototype.onOptionsChanged = function () {
            this._updateDimensions();
            this.setTheme(undefined);
            this._terminal.refresh(0, this._terminal.rows - 1);
        };
        DomRenderer.prototype.clear = function () {
            this._rowElements.forEach(function (e) { return e.innerHTML = ''; });
        };
        DomRenderer.prototype.refreshRows = function (start, end) {
            this._renderDebouncer.refresh(start, end, this._terminal.rows);
        };
        DomRenderer.prototype._renderRows = function (start, end) {
            var terminal = this._terminal;
            var cursorAbsoluteY = terminal.buffer.ybase + terminal.buffer.y;
            var cursorX = this._terminal.buffer.x;
            var cursorBlink = this._terminal.options.cursorBlink;
            for (var y = start; y <= end; y++) {
                var rowElement = this._rowElements[y];
                rowElement.innerHTML = '';
                var row = y + terminal.buffer.ydisp;
                var lineData = terminal.buffer.lines.get(row);
                var cursorStyle = terminal.options.cursorStyle;
                rowElement.appendChild(this._rowFactory.createRow(lineData, row === cursorAbsoluteY, cursorStyle, cursorX, cursorBlink, this.dimensions.actualCellWidth, terminal.cols));
            }
            this._onRender.fire({ start: start, end: end });
        };
        Object.defineProperty(DomRenderer.prototype, "_terminalSelector", {
            get: function () {
                return "." + TERMINAL_CLASS_PREFIX + this._terminalClass;
            },
            enumerable: true,
            configurable: true
        });
        DomRenderer.prototype.registerCharacterJoiner = function (handler) { return -1; };
        DomRenderer.prototype.deregisterCharacterJoiner = function (joinerId) { return false; };
        DomRenderer.prototype._onLinkHover = function (e) {
            this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, true);
        };
        DomRenderer.prototype._onLinkLeave = function (e) {
            this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, false);
        };
        DomRenderer.prototype._setCellUnderline = function (x, x2, y, y2, cols, enabled) {
            while (x !== x2 || y !== y2) {
                var row = this._rowElements[y];
                if (!row) {
                    return;
                }
                var span = row.children[x];
                if (span) {
                    span.style.textDecoration = enabled ? 'underline' : 'none';
                }
                if (++x >= cols) {
                    x = 0;
                    y++;
                }
            }
        };
        return DomRenderer;
    }(Lifecycle.Disposable));
    exports.DomRenderer = DomRenderer;

    });

    unwrapExports(DomRenderer_1);
    var DomRenderer_2 = DomRenderer_1.DomRenderer;

    var Keyboard = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    var KEYCODE_KEY_MAPPINGS = {
        48: ['0', ')'],
        49: ['1', '!'],
        50: ['2', '@'],
        51: ['3', '#'],
        52: ['4', '$'],
        53: ['5', '%'],
        54: ['6', '^'],
        55: ['7', '&'],
        56: ['8', '*'],
        57: ['9', '('],
        186: [';', ':'],
        187: ['=', '+'],
        188: [',', '<'],
        189: ['-', '_'],
        190: ['.', '>'],
        191: ['/', '?'],
        192: ['`', '~'],
        219: ['[', '{'],
        220: ['\\', '|'],
        221: [']', '}'],
        222: ['\'', '"']
    };
    function evaluateKeyboardEvent(ev, applicationCursorMode, isMac, macOptionIsMeta) {
        var result = {
            type: 0,
            cancel: false,
            key: undefined
        };
        var modifiers = (ev.shiftKey ? 1 : 0) | (ev.altKey ? 2 : 0) | (ev.ctrlKey ? 4 : 0) | (ev.metaKey ? 8 : 0);
        switch (ev.keyCode) {
            case 0:
                if (ev.key === 'UIKeyInputUpArrow') {
                    if (applicationCursorMode) {
                        result.key = EscapeSequences.C0.ESC + 'OA';
                    }
                    else {
                        result.key = EscapeSequences.C0.ESC + '[A';
                    }
                }
                else if (ev.key === 'UIKeyInputLeftArrow') {
                    if (applicationCursorMode) {
                        result.key = EscapeSequences.C0.ESC + 'OD';
                    }
                    else {
                        result.key = EscapeSequences.C0.ESC + '[D';
                    }
                }
                else if (ev.key === 'UIKeyInputRightArrow') {
                    if (applicationCursorMode) {
                        result.key = EscapeSequences.C0.ESC + 'OC';
                    }
                    else {
                        result.key = EscapeSequences.C0.ESC + '[C';
                    }
                }
                else if (ev.key === 'UIKeyInputDownArrow') {
                    if (applicationCursorMode) {
                        result.key = EscapeSequences.C0.ESC + 'OB';
                    }
                    else {
                        result.key = EscapeSequences.C0.ESC + '[B';
                    }
                }
                break;
            case 8:
                if (ev.shiftKey) {
                    result.key = EscapeSequences.C0.BS;
                    break;
                }
                else if (ev.altKey) {
                    result.key = EscapeSequences.C0.ESC + EscapeSequences.C0.DEL;
                    break;
                }
                result.key = EscapeSequences.C0.DEL;
                break;
            case 9:
                if (ev.shiftKey) {
                    result.key = EscapeSequences.C0.ESC + '[Z';
                    break;
                }
                result.key = EscapeSequences.C0.HT;
                result.cancel = true;
                break;
            case 13:
                result.key = EscapeSequences.C0.CR;
                result.cancel = true;
                break;
            case 27:
                result.key = EscapeSequences.C0.ESC;
                result.cancel = true;
                break;
            case 37:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[1;' + (modifiers + 1) + 'D';
                    if (result.key === EscapeSequences.C0.ESC + '[1;3D') {
                        result.key = isMac ? EscapeSequences.C0.ESC + 'b' : EscapeSequences.C0.ESC + '[1;5D';
                    }
                }
                else if (applicationCursorMode) {
                    result.key = EscapeSequences.C0.ESC + 'OD';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[D';
                }
                break;
            case 39:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[1;' + (modifiers + 1) + 'C';
                    if (result.key === EscapeSequences.C0.ESC + '[1;3C') {
                        result.key = isMac ? EscapeSequences.C0.ESC + 'f' : EscapeSequences.C0.ESC + '[1;5C';
                    }
                }
                else if (applicationCursorMode) {
                    result.key = EscapeSequences.C0.ESC + 'OC';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[C';
                }
                break;
            case 38:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[1;' + (modifiers + 1) + 'A';
                    if (result.key === EscapeSequences.C0.ESC + '[1;3A') {
                        result.key = EscapeSequences.C0.ESC + '[1;5A';
                    }
                }
                else if (applicationCursorMode) {
                    result.key = EscapeSequences.C0.ESC + 'OA';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[A';
                }
                break;
            case 40:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[1;' + (modifiers + 1) + 'B';
                    if (result.key === EscapeSequences.C0.ESC + '[1;3B') {
                        result.key = EscapeSequences.C0.ESC + '[1;5B';
                    }
                }
                else if (applicationCursorMode) {
                    result.key = EscapeSequences.C0.ESC + 'OB';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[B';
                }
                break;
            case 45:
                if (!ev.shiftKey && !ev.ctrlKey) {
                    result.key = EscapeSequences.C0.ESC + '[2~';
                }
                break;
            case 46:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[3;' + (modifiers + 1) + '~';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[3~';
                }
                break;
            case 36:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[1;' + (modifiers + 1) + 'H';
                }
                else if (applicationCursorMode) {
                    result.key = EscapeSequences.C0.ESC + 'OH';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[H';
                }
                break;
            case 35:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[1;' + (modifiers + 1) + 'F';
                }
                else if (applicationCursorMode) {
                    result.key = EscapeSequences.C0.ESC + 'OF';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[F';
                }
                break;
            case 33:
                if (ev.shiftKey) {
                    result.type = 2;
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[5~';
                }
                break;
            case 34:
                if (ev.shiftKey) {
                    result.type = 3;
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[6~';
                }
                break;
            case 112:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[1;' + (modifiers + 1) + 'P';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + 'OP';
                }
                break;
            case 113:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[1;' + (modifiers + 1) + 'Q';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + 'OQ';
                }
                break;
            case 114:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[1;' + (modifiers + 1) + 'R';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + 'OR';
                }
                break;
            case 115:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[1;' + (modifiers + 1) + 'S';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + 'OS';
                }
                break;
            case 116:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[15;' + (modifiers + 1) + '~';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[15~';
                }
                break;
            case 117:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[17;' + (modifiers + 1) + '~';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[17~';
                }
                break;
            case 118:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[18;' + (modifiers + 1) + '~';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[18~';
                }
                break;
            case 119:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[19;' + (modifiers + 1) + '~';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[19~';
                }
                break;
            case 120:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[20;' + (modifiers + 1) + '~';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[20~';
                }
                break;
            case 121:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[21;' + (modifiers + 1) + '~';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[21~';
                }
                break;
            case 122:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[23;' + (modifiers + 1) + '~';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[23~';
                }
                break;
            case 123:
                if (modifiers) {
                    result.key = EscapeSequences.C0.ESC + '[24;' + (modifiers + 1) + '~';
                }
                else {
                    result.key = EscapeSequences.C0.ESC + '[24~';
                }
                break;
            default:
                if (ev.ctrlKey && !ev.shiftKey && !ev.altKey && !ev.metaKey) {
                    if (ev.keyCode >= 65 && ev.keyCode <= 90) {
                        result.key = String.fromCharCode(ev.keyCode - 64);
                    }
                    else if (ev.keyCode === 32) {
                        result.key = String.fromCharCode(0);
                    }
                    else if (ev.keyCode >= 51 && ev.keyCode <= 55) {
                        result.key = String.fromCharCode(ev.keyCode - 51 + 27);
                    }
                    else if (ev.keyCode === 56) {
                        result.key = String.fromCharCode(127);
                    }
                    else if (ev.keyCode === 219) {
                        result.key = String.fromCharCode(27);
                    }
                    else if (ev.keyCode === 220) {
                        result.key = String.fromCharCode(28);
                    }
                    else if (ev.keyCode === 221) {
                        result.key = String.fromCharCode(29);
                    }
                }
                else if ((!isMac || macOptionIsMeta) && ev.altKey && !ev.metaKey) {
                    var keyMapping = KEYCODE_KEY_MAPPINGS[ev.keyCode];
                    var key = keyMapping && keyMapping[!ev.shiftKey ? 0 : 1];
                    if (key) {
                        result.key = EscapeSequences.C0.ESC + key;
                    }
                    else if (ev.keyCode >= 65 && ev.keyCode <= 90) {
                        var keyCode = ev.ctrlKey ? ev.keyCode - 64 : ev.keyCode + 32;
                        result.key = EscapeSequences.C0.ESC + String.fromCharCode(keyCode);
                    }
                }
                else if (isMac && !ev.altKey && !ev.ctrlKey && ev.metaKey) {
                    if (ev.keyCode === 65) {
                        result.type = 1;
                    }
                }
                else if (ev.key && !ev.ctrlKey && !ev.altKey && !ev.metaKey && ev.keyCode >= 48 && ev.key.length === 1) {
                    result.key = ev.key;
                }
                else if (ev.key && ev.ctrlKey) {
                    if (ev.key === '_') {
                        result.key = EscapeSequences.C0.US;
                    }
                }
                break;
        }
        return result;
    }
    exports.evaluateKeyboardEvent = evaluateKeyboardEvent;

    });

    unwrapExports(Keyboard);
    var Keyboard_1 = Keyboard.evaluateKeyboardEvent;

    var Clone = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function clone(val, depth) {
        if (depth === void 0) { depth = 5; }
        if (typeof val !== 'object') {
            return val;
        }
        if (val === null) {
            return null;
        }
        var clonedObject = Array.isArray(val) ? [] : {};
        for (var key in val) {
            clonedObject[key] = depth <= 1 ? val[key] : clone(val[key], depth - 1);
        }
        return clonedObject;
    }
    exports.clone = clone;

    });

    unwrapExports(Clone);
    var Clone_1 = Clone.clone;

    var WindowsMode = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    function applyWindowsMode(terminal) {
        return terminal.onLineFeed(function () {
            var line = terminal.buffer.lines.get(terminal.buffer.ybase + terminal.buffer.y - 1);
            var lastChar = line.get(terminal.cols - 1);
            if (lastChar[Buffer_1.CHAR_DATA_CODE_INDEX] !== Buffer_1.NULL_CELL_CODE && lastChar[Buffer_1.CHAR_DATA_CODE_INDEX] !== Buffer_1.WHITESPACE_CELL_CODE) {
                var nextLine = terminal.buffer.lines.get(terminal.buffer.ybase + terminal.buffer.y);
                nextLine.isWrapped = true;
            }
        });
    }
    exports.applyWindowsMode = applyWindowsMode;

    });

    unwrapExports(WindowsMode);
    var WindowsMode_1 = WindowsMode.applyWindowsMode;

    var Terminal_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });


























    var document = (typeof window !== 'undefined') ? window.document : null;
    var WRITE_BUFFER_PAUSE_THRESHOLD = 5;
    var WRITE_TIMEOUT_MS = 12;
    var MINIMUM_COLS = 2;
    var MINIMUM_ROWS = 1;
    var CONSTRUCTOR_ONLY_OPTIONS = ['cols', 'rows'];
    var DEFAULT_OPTIONS = {
        cols: 80,
        rows: 24,
        convertEol: false,
        termName: 'xterm',
        cursorBlink: false,
        cursorStyle: 'block',
        bellSound: SoundManager_1.DEFAULT_BELL_SOUND,
        bellStyle: 'none',
        drawBoldTextInBrightColors: true,
        enableBold: true,
        experimentalCharAtlas: 'static',
        fontFamily: 'courier-new, courier, monospace',
        fontSize: 15,
        fontWeight: 'normal',
        fontWeightBold: 'bold',
        lineHeight: 1.0,
        letterSpacing: 0,
        scrollback: 1000,
        screenKeys: false,
        screenReaderMode: false,
        debug: false,
        macOptionIsMeta: false,
        macOptionClickForcesSelection: false,
        cancelEvents: false,
        disableStdin: false,
        useFlowControl: false,
        allowTransparency: false,
        tabStopWidth: 8,
        theme: null,
        rightClickSelectsWord: Platform.isMac,
        rendererType: 'canvas',
        windowsMode: false
    };
    var Terminal = (function (_super) {
        __extends(Terminal, _super);
        function Terminal(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this) || this;
            _this.browser = Platform;
            _this._blankLine = null;
            _this._onCursorMove = new EventEmitter2_1.EventEmitter2();
            _this._onData = new EventEmitter2_1.EventEmitter2();
            _this._onKey = new EventEmitter2_1.EventEmitter2();
            _this._onLineFeed = new EventEmitter2_1.EventEmitter2();
            _this._onRender = new EventEmitter2_1.EventEmitter2();
            _this._onResize = new EventEmitter2_1.EventEmitter2();
            _this._onScroll = new EventEmitter2_1.EventEmitter2();
            _this._onSelectionChange = new EventEmitter2_1.EventEmitter2();
            _this._onTitleChange = new EventEmitter2_1.EventEmitter2();
            _this.options = Clone.clone(options);
            _this._setup();
            _this.onCursorMove(function () { return _this.emit('cursormove'); });
            _this.onData(function (e) { return _this.emit('data', e); });
            _this.onKey(function (e) { return _this.emit('key', e.key, e.domEvent); });
            _this.onLineFeed(function () { return _this.emit('linefeed'); });
            _this.onRender(function (e) { return _this.emit('refresh', e); });
            _this.onResize(function (e) { return _this.emit('resize', e); });
            _this.onSelectionChange(function () { return _this.emit('selection'); });
            _this.onScroll(function (e) { return _this.emit('scroll', e); });
            _this.onTitleChange(function (e) { return _this.emit('title', e); });
            return _this;
        }
        Object.defineProperty(Terminal.prototype, "onCursorMove", {
            get: function () { return this._onCursorMove.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onData", {
            get: function () { return this._onData.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onKey", {
            get: function () { return this._onKey.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onLineFeed", {
            get: function () { return this._onLineFeed.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onRender", {
            get: function () { return this._onRender.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onResize", {
            get: function () { return this._onResize.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onScroll", {
            get: function () { return this._onScroll.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onSelectionChange", {
            get: function () { return this._onSelectionChange.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onTitleChange", {
            get: function () { return this._onTitleChange.event; },
            enumerable: true,
            configurable: true
        });
        Terminal.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            if (this._windowsMode) {
                this._windowsMode.dispose();
                this._windowsMode = undefined;
            }
            this._customKeyEventHandler = null;
            CharAtlasCache.removeTerminalFromCache(this);
            this.handler = function () { };
            this.write = function () { };
            if (this.element && this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        };
        Terminal.prototype.destroy = function () {
            this.dispose();
        };
        Terminal.prototype._setup = function () {
            var _this = this;
            Object.keys(DEFAULT_OPTIONS).forEach(function (key) {
                if (_this.options[key] === null || _this.options[key] === undefined) {
                    _this.options[key] = DEFAULT_OPTIONS[key];
                }
            });
            this._parent = document ? document.body : null;
            this.cols = Math.max(this.options.cols, MINIMUM_COLS);
            this.rows = Math.max(this.options.rows, MINIMUM_ROWS);
            if (this.options.handler) {
                this.onData(this.options.handler);
            }
            this.cursorState = 0;
            this.cursorHidden = false;
            this._customKeyEventHandler = null;
            this.applicationKeypad = false;
            this.applicationCursor = false;
            this.originMode = false;
            this.insertMode = false;
            this.wraparoundMode = true;
            this.bracketedPasteMode = false;
            this.charset = null;
            this.gcharset = null;
            this.glevel = 0;
            this.charsets = [null];
            this.curAttrData = Buffer_1.DEFAULT_ATTR_DATA.clone();
            this._eraseAttrData = Buffer_1.DEFAULT_ATTR_DATA.clone();
            this.params = [];
            this.currentParam = 0;
            this.writeBuffer = [];
            this._writeInProgress = false;
            this._xoffSentToCatchUp = false;
            this._userScrolling = false;
            this._inputHandler = new InputHandler_1.InputHandler(this);
            this._inputHandler.onCursorMove(function () { return _this._onCursorMove.fire(); });
            this._inputHandler.onLineFeed(function () { return _this._onLineFeed.fire(); });
            this._inputHandler.onData(function (e) { return _this._onData.fire(e); });
            this.register(this._inputHandler);
            this.renderer = this.renderer || null;
            this.selectionManager = this.selectionManager || null;
            this.linkifier = this.linkifier || new Linkifier_1.Linkifier(this);
            this._mouseZoneManager = this._mouseZoneManager || null;
            this.soundManager = this.soundManager || new SoundManager_1.SoundManager(this);
            this.buffers = new BufferSet_1.BufferSet(this);
            if (this.selectionManager) {
                this.selectionManager.clearSelection();
                this.selectionManager.initBuffersListeners();
            }
            if (this.options.windowsMode) {
                this._windowsMode = WindowsMode.applyWindowsMode(this);
            }
        };
        Object.defineProperty(Terminal.prototype, "buffer", {
            get: function () {
                return this.buffers.active;
            },
            enumerable: true,
            configurable: true
        });
        Terminal.prototype.eraseAttrData = function () {
            this._eraseAttrData.bg &= ~(50331648 | 0xFFFFFF);
            this._eraseAttrData.bg |= this.curAttrData.bg & ~0xFC000000;
            return this._eraseAttrData;
        };
        Terminal.prototype.focus = function () {
            if (this.textarea) {
                this.textarea.focus({ preventScroll: true });
            }
        };
        Object.defineProperty(Terminal.prototype, "isFocused", {
            get: function () {
                return document.activeElement === this.textarea && document.hasFocus();
            },
            enumerable: true,
            configurable: true
        });
        Terminal.prototype.getOption = function (key) {
            if (!(key in DEFAULT_OPTIONS)) {
                throw new Error('No option with key "' + key + '"');
            }
            return this.options[key];
        };
        Terminal.prototype.setOption = function (key, value) {
            if (!(key in DEFAULT_OPTIONS)) {
                throw new Error('No option with key "' + key + '"');
            }
            if (CONSTRUCTOR_ONLY_OPTIONS.indexOf(key) !== -1) {
                console.error("Option \"" + key + "\" can only be set in the constructor");
            }
            if (this.options[key] === value) {
                return;
            }
            switch (key) {
                case 'bellStyle':
                    if (!value) {
                        value = 'none';
                    }
                    break;
                case 'cursorStyle':
                    if (!value) {
                        value = 'block';
                    }
                    break;
                case 'fontWeight':
                    if (!value) {
                        value = 'normal';
                    }
                    break;
                case 'fontWeightBold':
                    if (!value) {
                        value = 'bold';
                    }
                    break;
                case 'lineHeight':
                    if (value < 1) {
                        console.warn(key + " cannot be less than 1, value: " + value);
                        return;
                    }
                case 'rendererType':
                    if (!value) {
                        value = 'canvas';
                    }
                    break;
                case 'tabStopWidth':
                    if (value < 1) {
                        console.warn(key + " cannot be less than 1, value: " + value);
                        return;
                    }
                    break;
                case 'theme':
                    if (this.renderer) {
                        this._setTheme(value);
                        return;
                    }
                    break;
                case 'scrollback':
                    value = Math.min(value, Buffer_1.MAX_BUFFER_SIZE);
                    if (value < 0) {
                        console.warn(key + " cannot be less than 0, value: " + value);
                        return;
                    }
                    if (this.options[key] !== value) {
                        var newBufferLength = this.rows + value;
                        if (this.buffer.lines.length > newBufferLength) {
                            var amountToTrim = this.buffer.lines.length - newBufferLength;
                            var needsRefresh = (this.buffer.ydisp - amountToTrim < 0);
                            this.buffer.lines.trimStart(amountToTrim);
                            this.buffer.ybase = Math.max(this.buffer.ybase - amountToTrim, 0);
                            this.buffer.ydisp = Math.max(this.buffer.ydisp - amountToTrim, 0);
                            if (needsRefresh) {
                                this.refresh(0, this.rows - 1);
                            }
                        }
                    }
                    break;
            }
            this.options[key] = value;
            switch (key) {
                case 'fontFamily':
                case 'fontSize':
                    if (this.renderer) {
                        this.renderer.clear();
                        this.charMeasure.measure(this.options);
                    }
                    break;
                case 'drawBoldTextInBrightColors':
                case 'experimentalCharAtlas':
                case 'enableBold':
                case 'letterSpacing':
                case 'lineHeight':
                case 'fontWeight':
                case 'fontWeightBold':
                    if (this.renderer) {
                        this.renderer.clear();
                        this.renderer.onResize(this.cols, this.rows);
                        this.refresh(0, this.rows - 1);
                    }
                    break;
                case 'rendererType':
                    if (this.renderer) {
                        this.unregister(this.renderer);
                        this.renderer.dispose();
                        this.renderer = null;
                    }
                    this._setupRenderer();
                    this.renderer.onCharSizeChanged();
                    if (this._theme) {
                        this.renderer.setTheme(this._theme);
                    }
                    this.mouseHelper.setRenderer(this.renderer);
                    break;
                case 'scrollback':
                    this.buffers.resize(this.cols, this.rows);
                    if (this.viewport) {
                        this.viewport.syncScrollArea();
                    }
                    break;
                case 'screenReaderMode':
                    if (value) {
                        if (!this._accessibilityManager) {
                            this._accessibilityManager = new AccessibilityManager_1.AccessibilityManager(this);
                        }
                    }
                    else {
                        if (this._accessibilityManager) {
                            this._accessibilityManager.dispose();
                            this._accessibilityManager = null;
                        }
                    }
                    break;
                case 'tabStopWidth':
                    this.buffers.setupTabStops();
                    break;
                case 'windowsMode':
                    if (value) {
                        if (!this._windowsMode) {
                            this._windowsMode = WindowsMode.applyWindowsMode(this);
                        }
                    }
                    else {
                        if (this._windowsMode) {
                            this._windowsMode.dispose();
                            this._windowsMode = undefined;
                        }
                    }
                    break;
            }
            if (this.renderer) {
                this.renderer.onOptionsChanged();
            }
        };
        Terminal.prototype._onTextAreaFocus = function (ev) {
            if (this.sendFocus) {
                this.handler(EscapeSequences.C0.ESC + '[I');
            }
            this.updateCursorStyle(ev);
            this.element.classList.add('focus');
            this.showCursor();
            this.emit('focus');
        };
        Terminal.prototype.blur = function () {
            return this.textarea.blur();
        };
        Terminal.prototype._onTextAreaBlur = function () {
            this.textarea.value = '';
            this.refresh(this.buffer.y, this.buffer.y);
            if (this.sendFocus) {
                this.handler(EscapeSequences.C0.ESC + '[O');
            }
            this.element.classList.remove('focus');
            this.emit('blur');
        };
        Terminal.prototype._initGlobal = function () {
            var _this = this;
            this._bindKeys();
            this.register(Lifecycle$2.addDisposableDomListener(this.element, 'copy', function (event) {
                if (!_this.hasSelection()) {
                    return;
                }
                Clipboard.copyHandler(event, _this, _this.selectionManager);
            }));
            var pasteHandlerWrapper = function (event) { return Clipboard.pasteHandler(event, _this); };
            this.register(Lifecycle$2.addDisposableDomListener(this.textarea, 'paste', pasteHandlerWrapper));
            this.register(Lifecycle$2.addDisposableDomListener(this.element, 'paste', pasteHandlerWrapper));
            if (Platform.isFirefox) {
                this.register(Lifecycle$2.addDisposableDomListener(this.element, 'mousedown', function (event) {
                    if (event.button === 2) {
                        Clipboard.rightClickHandler(event, _this, _this.selectionManager, _this.options.rightClickSelectsWord);
                    }
                }));
            }
            else {
                this.register(Lifecycle$2.addDisposableDomListener(this.element, 'contextmenu', function (event) {
                    Clipboard.rightClickHandler(event, _this, _this.selectionManager, _this.options.rightClickSelectsWord);
                }));
            }
            if (Platform.isLinux) {
                this.register(Lifecycle$2.addDisposableDomListener(this.element, 'auxclick', function (event) {
                    if (event.button === 1) {
                        Clipboard.moveTextAreaUnderMouseCursor(event, _this);
                    }
                }));
            }
        };
        Terminal.prototype._bindKeys = function () {
            var _this = this;
            var self = this;
            this.register(Lifecycle$2.addDisposableDomListener(this.element, 'keydown', function (ev) {
                if (document.activeElement !== this) {
                    return;
                }
                self._keyDown(ev);
            }, true));
            this.register(Lifecycle$2.addDisposableDomListener(this.element, 'keypress', function (ev) {
                if (document.activeElement !== this) {
                    return;
                }
                self._keyPress(ev);
            }, true));
            this.register(Lifecycle$2.addDisposableDomListener(this.element, 'keyup', function (ev) {
                if (!wasModifierKeyOnlyEvent(ev)) {
                    _this.focus();
                }
                self._keyUp(ev);
            }, true));
            this.register(Lifecycle$2.addDisposableDomListener(this.textarea, 'keydown', function (ev) { return _this._keyDown(ev); }, true));
            this.register(Lifecycle$2.addDisposableDomListener(this.textarea, 'keypress', function (ev) { return _this._keyPress(ev); }, true));
            this.register(Lifecycle$2.addDisposableDomListener(this.textarea, 'compositionstart', function () { return _this._compositionHelper.compositionstart(); }));
            this.register(Lifecycle$2.addDisposableDomListener(this.textarea, 'compositionupdate', function (e) { return _this._compositionHelper.compositionupdate(e); }));
            this.register(Lifecycle$2.addDisposableDomListener(this.textarea, 'compositionend', function () { return _this._compositionHelper.compositionend(); }));
            this.register(this.onRender(function () { return _this._compositionHelper.updateCompositionElements(); }));
            this.register(this.onRender(function (e) { return _this._queueLinkification(e.start, e.end); }));
        };
        Terminal.prototype.open = function (parent) {
            var _this = this;
            this._parent = parent || this._parent;
            if (!this._parent) {
                throw new Error('Terminal requires a parent element.');
            }
            this._context = this._parent.ownerDocument.defaultView;
            this._document = this._parent.ownerDocument;
            this._screenDprMonitor = new ScreenDprMonitor_1.ScreenDprMonitor();
            this._screenDprMonitor.setListener(function () { return _this.emit('dprchange', window.devicePixelRatio); });
            this.register(this._screenDprMonitor);
            this.element = this._document.createElement('div');
            this.element.dir = 'ltr';
            this.element.classList.add('terminal');
            this.element.classList.add('xterm');
            this.element.setAttribute('tabindex', '0');
            this._parent.appendChild(this.element);
            var fragment = document.createDocumentFragment();
            this._viewportElement = document.createElement('div');
            this._viewportElement.classList.add('xterm-viewport');
            fragment.appendChild(this._viewportElement);
            this._viewportScrollArea = document.createElement('div');
            this._viewportScrollArea.classList.add('xterm-scroll-area');
            this._viewportElement.appendChild(this._viewportScrollArea);
            this.screenElement = document.createElement('div');
            this.screenElement.classList.add('xterm-screen');
            this._helperContainer = document.createElement('div');
            this._helperContainer.classList.add('xterm-helpers');
            this.screenElement.appendChild(this._helperContainer);
            fragment.appendChild(this.screenElement);
            this._mouseZoneManager = new MouseZoneManager_1.MouseZoneManager(this);
            this.register(this._mouseZoneManager);
            this.register(this.onScroll(function () { return _this._mouseZoneManager.clearAll(); }));
            this.linkifier.attachToDom(this._mouseZoneManager);
            this.textarea = document.createElement('textarea');
            this.textarea.classList.add('xterm-helper-textarea');
            this.textarea.setAttribute('aria-label', Strings.promptLabel);
            this.textarea.setAttribute('aria-multiline', 'false');
            this.textarea.setAttribute('autocorrect', 'off');
            this.textarea.setAttribute('autocapitalize', 'off');
            this.textarea.setAttribute('spellcheck', 'false');
            this.textarea.tabIndex = 0;
            this.register(Lifecycle$2.addDisposableDomListener(this.textarea, 'focus', function (ev) { return _this._onTextAreaFocus(ev); }));
            this.register(Lifecycle$2.addDisposableDomListener(this.textarea, 'blur', function () { return _this._onTextAreaBlur(); }));
            this._helperContainer.appendChild(this.textarea);
            this._compositionView = document.createElement('div');
            this._compositionView.classList.add('composition-view');
            this._compositionHelper = new CompositionHelper_1.CompositionHelper(this.textarea, this._compositionView, this);
            this._helperContainer.appendChild(this._compositionView);
            this.charMeasure = new CharMeasure_1.CharMeasure(document, this._helperContainer);
            this.element.appendChild(fragment);
            this._setupRenderer();
            this._theme = this.options.theme;
            this.options.theme = null;
            this.viewport = new Viewport_1.Viewport(this, this._viewportElement, this._viewportScrollArea, this.charMeasure);
            this.viewport.onThemeChanged(this.renderer.colorManager.colors);
            this.register(this.viewport);
            this.register(this.onCursorMove(function () { return _this.renderer.onCursorMove(); }));
            this.register(this.onResize(function () { return _this.renderer.onResize(_this.cols, _this.rows); }));
            this.register(this.addDisposableListener('blur', function () { return _this.renderer.onBlur(); }));
            this.register(this.addDisposableListener('focus', function () { return _this.renderer.onFocus(); }));
            this.register(this.addDisposableListener('dprchange', function () { return _this.renderer.onWindowResize(window.devicePixelRatio); }));
            this.register(Lifecycle$2.addDisposableDomListener(window, 'resize', function () { return _this.renderer.onWindowResize(window.devicePixelRatio); }));
            this.register(this.charMeasure.onCharSizeChanged(function () { return _this.renderer.onCharSizeChanged(); }));
            this.register(this.renderer.onCanvasResize(function () { return _this.viewport.syncScrollArea(); }));
            this.selectionManager = new SelectionManager_1.SelectionManager(this, this.charMeasure);
            this.register(this.selectionManager.onSelectionChange(function () { return _this._onSelectionChange.fire(); }));
            this.register(Lifecycle$2.addDisposableDomListener(this.element, 'mousedown', function (e) { return _this.selectionManager.onMouseDown(e); }));
            this.register(this.selectionManager.onRedrawRequest(function (e) { return _this.renderer.onSelectionChanged(e.start, e.end, e.columnSelectMode); }));
            this.register(this.selectionManager.onLinuxMouseSelection(function (text) {
                _this.textarea.value = text;
                _this.textarea.focus();
                _this.textarea.select();
            }));
            this.register(this.onScroll(function () {
                _this.viewport.syncScrollArea();
                _this.selectionManager.refresh();
            }));
            this.register(Lifecycle$2.addDisposableDomListener(this._viewportElement, 'scroll', function () { return _this.selectionManager.refresh(); }));
            this.mouseHelper = new MouseHelper_1.MouseHelper(this.renderer);
            this.element.classList.toggle('enable-mouse-events', this.mouseEvents);
            if (this.mouseEvents) {
                this.selectionManager.disable();
            }
            else {
                this.selectionManager.enable();
            }
            if (this.options.screenReaderMode) {
                this._accessibilityManager = new AccessibilityManager_1.AccessibilityManager(this);
            }
            this.charMeasure.measure(this.options);
            this.refresh(0, this.rows - 1);
            this._initGlobal();
            this.bindMouse();
        };
        Terminal.prototype._setupRenderer = function () {
            var _this = this;
            switch (this.options.rendererType) {
                case 'canvas':
                    this.renderer = new Renderer_1.Renderer(this, this.options.theme);
                    break;
                case 'dom':
                    this.renderer = new DomRenderer_1.DomRenderer(this, this.options.theme);
                    break;
                default: throw new Error("Unrecognized rendererType \"" + this.options.rendererType + "\"");
            }
            this.renderer.onRender(function (e) { return _this._onRender.fire(e); });
            this.register(this.renderer);
        };
        Terminal.prototype._setTheme = function (theme) {
            this._theme = theme;
            var colors = this.renderer.setTheme(theme);
            if (this.viewport) {
                this.viewport.onThemeChanged(colors);
            }
        };
        Terminal.prototype.bindMouse = function () {
            var _this = this;
            var el = this.element;
            var self = this;
            var pressed = 32;
            function sendButton(ev) {
                var button;
                var pos;
                button = getButton(ev);
                pos = self.mouseHelper.getRawByteCoords(ev, self.screenElement, self.charMeasure, self.cols, self.rows);
                if (!pos)
                    return;
                sendEvent(button, pos);
                switch (ev.overrideType || ev.type) {
                    case 'mousedown':
                        pressed = button;
                        break;
                    case 'mouseup':
                        pressed = 32;
                        break;
                    case 'wheel':
                        break;
                }
            }
            function sendMove(ev) {
                var button = pressed;
                var pos = self.mouseHelper.getRawByteCoords(ev, self.screenElement, self.charMeasure, self.cols, self.rows);
                if (!pos)
                    return;
                button += 32;
                sendEvent(button, pos);
            }
            function encode(data, ch) {
                if (!self.utfMouse) {
                    if (ch === 255) {
                        data.push(0);
                        return;
                    }
                    if (ch > 127)
                        ch = 127;
                    data.push(ch);
                }
                else {
                    if (ch > 2047) {
                        data.push(2047);
                        return;
                    }
                    data.push(ch);
                }
            }
            function sendEvent(button, pos) {
                if (self._vt300Mouse) {
                    button &= 3;
                    pos.x -= 32;
                    pos.y -= 32;
                    var data_1 = EscapeSequences.C0.ESC + '[24';
                    if (button === 0)
                        data_1 += '1';
                    else if (button === 1)
                        data_1 += '3';
                    else if (button === 2)
                        data_1 += '5';
                    else if (button === 3)
                        return;
                    else
                        data_1 += '0';
                    data_1 += '~[' + pos.x + ',' + pos.y + ']\r';
                    self.handler(data_1);
                    return;
                }
                if (self._decLocator) {
                    button &= 3;
                    pos.x -= 32;
                    pos.y -= 32;
                    if (button === 0)
                        button = 2;
                    else if (button === 1)
                        button = 4;
                    else if (button === 2)
                        button = 6;
                    else if (button === 3)
                        button = 3;
                    self.handler(EscapeSequences.C0.ESC + '['
                        + button
                        + ';'
                        + (button === 3 ? 4 : 0)
                        + ';'
                        + pos.y
                        + ';'
                        + pos.x
                        + ';'
                        + pos.page || 0
                        + '&w');
                    return;
                }
                if (self.urxvtMouse) {
                    pos.x -= 32;
                    pos.y -= 32;
                    pos.x++;
                    pos.y++;
                    self.handler(EscapeSequences.C0.ESC + '[' + button + ';' + pos.x + ';' + pos.y + 'M');
                    return;
                }
                if (self.sgrMouse) {
                    pos.x -= 32;
                    pos.y -= 32;
                    self.handler(EscapeSequences.C0.ESC + '[<'
                        + (((button & 3) === 3 ? button & ~3 : button) - 32)
                        + ';'
                        + pos.x
                        + ';'
                        + pos.y
                        + ((button & 3) === 3 ? 'm' : 'M'));
                    return;
                }
                var data = [];
                encode(data, button);
                encode(data, pos.x);
                encode(data, pos.y);
                self.handler(EscapeSequences.C0.ESC + '[M' + String.fromCharCode.apply(String, data));
            }
            function getButton(ev) {
                var button;
                var shift;
                var meta;
                var ctrl;
                var mod;
                switch (ev.overrideType || ev.type) {
                    case 'mousedown':
                        button = ev.button !== null && ev.button !== undefined
                            ? +ev.button
                            : ev.which !== null && ev.which !== undefined
                                ? ev.which - 1
                                : null;
                        if (Platform.isMSIE) {
                            button = button === 1 ? 0 : button === 4 ? 1 : button;
                        }
                        break;
                    case 'mouseup':
                        button = 3;
                        break;
                    case 'DOMMouseScroll':
                        button = ev.detail < 0
                            ? 64
                            : 65;
                        break;
                    case 'wheel':
                        button = ev.deltaY < 0
                            ? 64
                            : 65;
                        break;
                }
                shift = ev.shiftKey ? 4 : 0;
                meta = ev.metaKey ? 8 : 0;
                ctrl = ev.ctrlKey ? 16 : 0;
                mod = shift | meta | ctrl;
                if (self.vt200Mouse) {
                    mod &= ctrl;
                }
                else if (!self.normalMouse) {
                    mod = 0;
                }
                button = (32 + (mod << 2)) + button;
                return button;
            }
            this.register(Lifecycle$2.addDisposableDomListener(el, 'mousedown', function (ev) {
                ev.preventDefault();
                _this.focus();
                if (!_this.mouseEvents || _this.selectionManager.shouldForceSelection(ev)) {
                    return;
                }
                sendButton(ev);
                if (_this.vt200Mouse) {
                    ev.overrideType = 'mouseup';
                    sendButton(ev);
                    return _this.cancel(ev);
                }
                var moveHandler;
                if (_this.normalMouse) {
                    moveHandler = function (event) {
                        if (!_this.normalMouse) {
                            return;
                        }
                        sendMove(event);
                    };
                    _this._document.addEventListener('mousemove', moveHandler);
                }
                var handler = function (ev) {
                    if (_this.normalMouse && !_this.x10Mouse) {
                        sendButton(ev);
                    }
                    if (moveHandler) {
                        _this._document.removeEventListener('mousemove', moveHandler);
                        moveHandler = null;
                    }
                    _this._document.removeEventListener('mouseup', handler);
                    return _this.cancel(ev);
                };
                _this._document.addEventListener('mouseup', handler);
                return _this.cancel(ev);
            }));
            this.register(Lifecycle$2.addDisposableDomListener(el, 'wheel', function (ev) {
                if (!_this.mouseEvents) {
                    if (!_this.buffer.hasScrollback) {
                        var amount = _this.viewport.getLinesScrolled(ev);
                        if (amount === 0) {
                            return;
                        }
                        var sequence = EscapeSequences.C0.ESC + (_this.applicationCursor ? 'O' : '[') + (ev.deltaY < 0 ? 'A' : 'B');
                        var data = '';
                        for (var i = 0; i < Math.abs(amount); i++) {
                            data += sequence;
                        }
                        _this.handler(data);
                    }
                    return;
                }
                if (_this.x10Mouse || _this._vt300Mouse || _this._decLocator)
                    return;
                sendButton(ev);
                ev.preventDefault();
            }));
            this.register(Lifecycle$2.addDisposableDomListener(el, 'wheel', function (ev) {
                if (_this.mouseEvents)
                    return;
                _this.viewport.onWheel(ev);
                return _this.cancel(ev);
            }));
            this.register(Lifecycle$2.addDisposableDomListener(el, 'touchstart', function (ev) {
                if (_this.mouseEvents)
                    return;
                _this.viewport.onTouchStart(ev);
                return _this.cancel(ev);
            }));
            this.register(Lifecycle$2.addDisposableDomListener(el, 'touchmove', function (ev) {
                if (_this.mouseEvents)
                    return;
                _this.viewport.onTouchMove(ev);
                return _this.cancel(ev);
            }));
        };
        Terminal.prototype.refresh = function (start, end) {
            if (this.renderer) {
                this.renderer.refreshRows(start, end);
            }
        };
        Terminal.prototype._queueLinkification = function (start, end) {
            if (this.linkifier) {
                this.linkifier.linkifyRows(start, end);
            }
        };
        Terminal.prototype.updateCursorStyle = function (ev) {
            if (this.selectionManager && this.selectionManager.shouldColumnSelect(ev)) {
                this.element.classList.add('column-select');
            }
            else {
                this.element.classList.remove('column-select');
            }
        };
        Terminal.prototype.showCursor = function () {
            if (!this.cursorState) {
                this.cursorState = 1;
                this.refresh(this.buffer.y, this.buffer.y);
            }
        };
        Terminal.prototype.scroll = function (isWrapped) {
            if (isWrapped === void 0) { isWrapped = false; }
            var newLine;
            newLine = this._blankLine;
            var eraseAttr = this.eraseAttrData();
            if (!newLine || newLine.length !== this.cols || newLine.getFg(0) !== eraseAttr.fg || newLine.getBg(0) !== eraseAttr.bg) {
                newLine = this.buffer.getBlankLine(eraseAttr, isWrapped);
                this._blankLine = newLine;
            }
            newLine.isWrapped = isWrapped;
            var topRow = this.buffer.ybase + this.buffer.scrollTop;
            var bottomRow = this.buffer.ybase + this.buffer.scrollBottom;
            if (this.buffer.scrollTop === 0) {
                var willBufferBeTrimmed = this.buffer.lines.isFull;
                if (bottomRow === this.buffer.lines.length - 1) {
                    if (willBufferBeTrimmed) {
                        this.buffer.lines.recycle().copyFrom(newLine);
                    }
                    else {
                        this.buffer.lines.push(newLine.clone());
                    }
                }
                else {
                    this.buffer.lines.splice(bottomRow + 1, 0, newLine.clone());
                }
                if (!willBufferBeTrimmed) {
                    this.buffer.ybase++;
                    if (!this._userScrolling) {
                        this.buffer.ydisp++;
                    }
                }
                else {
                    if (this._userScrolling) {
                        this.buffer.ydisp = Math.max(this.buffer.ydisp - 1, 0);
                    }
                }
            }
            else {
                var scrollRegionHeight = bottomRow - topRow + 1;
                this.buffer.lines.shiftElements(topRow + 1, scrollRegionHeight - 1, -1);
                this.buffer.lines.set(bottomRow, newLine.clone());
            }
            if (!this._userScrolling) {
                this.buffer.ydisp = this.buffer.ybase;
            }
            this.updateRange(this.buffer.scrollTop);
            this.updateRange(this.buffer.scrollBottom);
            this._onScroll.fire(this.buffer.ydisp);
        };
        Terminal.prototype.scrollLines = function (disp, suppressScrollEvent) {
            if (disp < 0) {
                if (this.buffer.ydisp === 0) {
                    return;
                }
                this._userScrolling = true;
            }
            else if (disp + this.buffer.ydisp >= this.buffer.ybase) {
                this._userScrolling = false;
            }
            var oldYdisp = this.buffer.ydisp;
            this.buffer.ydisp = Math.max(Math.min(this.buffer.ydisp + disp, this.buffer.ybase), 0);
            if (oldYdisp === this.buffer.ydisp) {
                return;
            }
            if (!suppressScrollEvent) {
                this._onScroll.fire(this.buffer.ydisp);
            }
            this.refresh(0, this.rows - 1);
        };
        Terminal.prototype.scrollPages = function (pageCount) {
            this.scrollLines(pageCount * (this.rows - 1));
        };
        Terminal.prototype.scrollToTop = function () {
            this.scrollLines(-this.buffer.ydisp);
        };
        Terminal.prototype.scrollToBottom = function () {
            this.scrollLines(this.buffer.ybase - this.buffer.ydisp);
        };
        Terminal.prototype.scrollToLine = function (line) {
            var scrollAmount = line - this.buffer.ydisp;
            if (scrollAmount !== 0) {
                this.scrollLines(scrollAmount);
            }
        };
        Terminal.prototype.write = function (data) {
            var _this = this;
            if (this._isDisposed) {
                return;
            }
            if (!data) {
                return;
            }
            this.writeBuffer.push(data);
            if (this.options.useFlowControl && !this._xoffSentToCatchUp && this.writeBuffer.length >= WRITE_BUFFER_PAUSE_THRESHOLD) {
                this.handler(EscapeSequences.C0.DC3);
                this._xoffSentToCatchUp = true;
            }
            if (!this._writeInProgress && this.writeBuffer.length > 0) {
                this._writeInProgress = true;
                setTimeout(function () {
                    _this._innerWrite();
                });
            }
        };
        Terminal.prototype._innerWrite = function (bufferOffset) {
            var _this = this;
            if (bufferOffset === void 0) { bufferOffset = 0; }
            if (this._isDisposed) {
                this.writeBuffer = [];
            }
            var startTime = Date.now();
            while (this.writeBuffer.length > bufferOffset) {
                var data = this.writeBuffer[bufferOffset];
                bufferOffset++;
                if (this._xoffSentToCatchUp && this.writeBuffer.length === bufferOffset) {
                    this.handler(EscapeSequences.C0.DC1);
                    this._xoffSentToCatchUp = false;
                }
                this._refreshStart = this.buffer.y;
                this._refreshEnd = this.buffer.y;
                this._inputHandler.parse(data);
                this.updateRange(this.buffer.y);
                this.refresh(this._refreshStart, this._refreshEnd);
                if (Date.now() - startTime >= WRITE_TIMEOUT_MS) {
                    break;
                }
            }
            if (this.writeBuffer.length > bufferOffset) {
                setTimeout(function () { return _this._innerWrite(bufferOffset); }, 0);
            }
            else {
                this._writeInProgress = false;
                this.writeBuffer = [];
            }
        };
        Terminal.prototype.writeln = function (data) {
            this.write(data + '\r\n');
        };
        Terminal.prototype.attachCustomKeyEventHandler = function (customKeyEventHandler) {
            this._customKeyEventHandler = customKeyEventHandler;
        };
        Terminal.prototype.addCsiHandler = function (flag, callback) {
            return this._inputHandler.addCsiHandler(flag, callback);
        };
        Terminal.prototype.addOscHandler = function (ident, callback) {
            return this._inputHandler.addOscHandler(ident, callback);
        };
        Terminal.prototype.registerLinkMatcher = function (regex, handler, options) {
            var matcherId = this.linkifier.registerLinkMatcher(regex, handler, options);
            this.refresh(0, this.rows - 1);
            return matcherId;
        };
        Terminal.prototype.deregisterLinkMatcher = function (matcherId) {
            if (this.linkifier.deregisterLinkMatcher(matcherId)) {
                this.refresh(0, this.rows - 1);
            }
        };
        Terminal.prototype.registerCharacterJoiner = function (handler) {
            var joinerId = this.renderer.registerCharacterJoiner(handler);
            this.refresh(0, this.rows - 1);
            return joinerId;
        };
        Terminal.prototype.deregisterCharacterJoiner = function (joinerId) {
            if (this.renderer.deregisterCharacterJoiner(joinerId)) {
                this.refresh(0, this.rows - 1);
            }
        };
        Object.defineProperty(Terminal.prototype, "markers", {
            get: function () {
                return this.buffer.markers;
            },
            enumerable: true,
            configurable: true
        });
        Terminal.prototype.addMarker = function (cursorYOffset) {
            if (this.buffer !== this.buffers.normal) {
                return;
            }
            return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + cursorYOffset);
        };
        Terminal.prototype.hasSelection = function () {
            return this.selectionManager ? this.selectionManager.hasSelection : false;
        };
        Terminal.prototype.getSelection = function () {
            return this.selectionManager ? this.selectionManager.selectionText : '';
        };
        Terminal.prototype.clearSelection = function () {
            if (this.selectionManager) {
                this.selectionManager.clearSelection();
            }
        };
        Terminal.prototype.selectAll = function () {
            if (this.selectionManager) {
                this.selectionManager.selectAll();
            }
        };
        Terminal.prototype.selectLines = function (start, end) {
            if (this.selectionManager) {
                this.selectionManager.selectLines(start, end);
            }
        };
        Terminal.prototype._keyDown = function (event) {
            if (this._customKeyEventHandler && this._customKeyEventHandler(event) === false) {
                return false;
            }
            if (!this._compositionHelper.keydown(event)) {
                if (this.buffer.ybase !== this.buffer.ydisp) {
                    this.scrollToBottom();
                }
                return false;
            }
            var result = Keyboard.evaluateKeyboardEvent(event, this.applicationCursor, this.browser.isMac, this.options.macOptionIsMeta);
            this.updateCursorStyle(event);
            if (result.type === 3 || result.type === 2) {
                var scrollCount = this.rows - 1;
                this.scrollLines(result.type === 2 ? -scrollCount : scrollCount);
                return this.cancel(event, true);
            }
            if (result.type === 1) {
                this.selectAll();
            }
            if (this._isThirdLevelShift(this.browser, event)) {
                return true;
            }
            if (result.cancel) {
                this.cancel(event, true);
            }
            if (!result.key) {
                return true;
            }
            this.emit('keydown', event);
            this._onKey.fire({ key: result.key, domEvent: event });
            this.showCursor();
            this.handler(result.key);
            return this.cancel(event, true);
        };
        Terminal.prototype._isThirdLevelShift = function (browser, ev) {
            var thirdLevelKey = (browser.isMac && !this.options.macOptionIsMeta && ev.altKey && !ev.ctrlKey && !ev.metaKey) ||
                (browser.isMSWindows && ev.altKey && ev.ctrlKey && !ev.metaKey);
            if (ev.type === 'keypress') {
                return thirdLevelKey;
            }
            return thirdLevelKey && (!ev.keyCode || ev.keyCode > 47);
        };
        Terminal.prototype.setgLevel = function (g) {
            this.glevel = g;
            this.charset = this.charsets[g];
        };
        Terminal.prototype.setgCharset = function (g, charset) {
            this.charsets[g] = charset;
            if (this.glevel === g) {
                this.charset = charset;
            }
        };
        Terminal.prototype._keyUp = function (ev) {
            this.updateCursorStyle(ev);
        };
        Terminal.prototype._keyPress = function (ev) {
            var key;
            if (this._customKeyEventHandler && this._customKeyEventHandler(ev) === false) {
                return false;
            }
            this.cancel(ev);
            if (ev.charCode) {
                key = ev.charCode;
            }
            else if (ev.which === null || ev.which === undefined) {
                key = ev.keyCode;
            }
            else if (ev.which !== 0 && ev.charCode !== 0) {
                key = ev.which;
            }
            else {
                return false;
            }
            if (!key || ((ev.altKey || ev.ctrlKey || ev.metaKey) && !this._isThirdLevelShift(this.browser, ev))) {
                return false;
            }
            key = String.fromCharCode(key);
            this.emit('keypress', key, ev);
            this._onKey.fire({ key: key, domEvent: ev });
            this.showCursor();
            this.handler(key);
            return true;
        };
        Terminal.prototype.bell = function () {
            var _this = this;
            this.emit('bell');
            if (this._soundBell()) {
                this.soundManager.playBellSound();
            }
            if (this._visualBell()) {
                this.element.classList.add('visual-bell-active');
                clearTimeout(this._visualBellTimer);
                this._visualBellTimer = window.setTimeout(function () {
                    _this.element.classList.remove('visual-bell-active');
                }, 200);
            }
        };
        Terminal.prototype.log = function (text, data) {
            if (!this.options.debug)
                return;
            if (!this._context.console || !this._context.console.log)
                return;
            this._context.console.log(text, data);
        };
        Terminal.prototype.error = function (text, data) {
            if (!this.options.debug)
                return;
            if (!this._context.console || !this._context.console.error)
                return;
            this._context.console.error(text, data);
        };
        Terminal.prototype.resize = function (x, y) {
            if (isNaN(x) || isNaN(y)) {
                return;
            }
            if (x === this.cols && y === this.rows) {
                if (this.charMeasure && (!this.charMeasure.width || !this.charMeasure.height)) {
                    this.charMeasure.measure(this.options);
                }
                return;
            }
            if (x < MINIMUM_COLS)
                x = MINIMUM_COLS;
            if (y < MINIMUM_ROWS)
                y = MINIMUM_ROWS;
            this.buffers.resize(x, y);
            this.cols = x;
            this.rows = y;
            this.buffers.setupTabStops(this.cols);
            if (this.charMeasure) {
                this.charMeasure.measure(this.options);
            }
            this.refresh(0, this.rows - 1);
            this._onResize.fire({ cols: x, rows: y });
        };
        Terminal.prototype.updateRange = function (y) {
            if (y < this._refreshStart)
                this._refreshStart = y;
            if (y > this._refreshEnd)
                this._refreshEnd = y;
        };
        Terminal.prototype.maxRange = function () {
            this._refreshStart = 0;
            this._refreshEnd = this.rows - 1;
        };
        Terminal.prototype.clear = function () {
            if (this.buffer.ybase === 0 && this.buffer.y === 0) {
                return;
            }
            this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y));
            this.buffer.lines.length = 1;
            this.buffer.ydisp = 0;
            this.buffer.ybase = 0;
            this.buffer.y = 0;
            for (var i = 1; i < this.rows; i++) {
                this.buffer.lines.push(this.buffer.getBlankLine(Buffer_1.DEFAULT_ATTR_DATA));
            }
            this.refresh(0, this.rows - 1);
            this._onScroll.fire(this.buffer.ydisp);
        };
        Terminal.prototype.is = function (term) {
            return (this.options.termName + '').indexOf(term) === 0;
        };
        Terminal.prototype.handler = function (data) {
            if (this.options.disableStdin) {
                return;
            }
            if (this.selectionManager && this.selectionManager.hasSelection) {
                this.selectionManager.clearSelection();
            }
            if (this.buffer.ybase !== this.buffer.ydisp) {
                this.scrollToBottom();
            }
            this._onData.fire(data);
        };
        Terminal.prototype.handleTitle = function (title) {
            this._onTitleChange.fire(title);
        };
        Terminal.prototype.index = function () {
            this.buffer.y++;
            if (this.buffer.y > this.buffer.scrollBottom) {
                this.buffer.y--;
                this.scroll();
            }
            if (this.buffer.x >= this.cols) {
                this.buffer.x--;
            }
        };
        Terminal.prototype.reverseIndex = function () {
            if (this.buffer.y === this.buffer.scrollTop) {
                var scrollRegionHeight = this.buffer.scrollBottom - this.buffer.scrollTop;
                this.buffer.lines.shiftElements(this.buffer.y + this.buffer.ybase, scrollRegionHeight, 1);
                this.buffer.lines.set(this.buffer.y + this.buffer.ybase, this.buffer.getBlankLine(this.eraseAttrData()));
                this.updateRange(this.buffer.scrollTop);
                this.updateRange(this.buffer.scrollBottom);
            }
            else {
                this.buffer.y--;
            }
        };
        Terminal.prototype.reset = function () {
            this.options.rows = this.rows;
            this.options.cols = this.cols;
            var customKeyEventHandler = this._customKeyEventHandler;
            var inputHandler = this._inputHandler;
            var cursorState = this.cursorState;
            this._setup();
            this._customKeyEventHandler = customKeyEventHandler;
            this._inputHandler = inputHandler;
            this.cursorState = cursorState;
            this.refresh(0, this.rows - 1);
            if (this.viewport) {
                this.viewport.syncScrollArea();
            }
        };
        Terminal.prototype.tabSet = function () {
            this.buffer.tabs[this.buffer.x] = true;
        };
        Terminal.prototype.cancel = function (ev, force) {
            if (!this.options.cancelEvents && !force) {
                return;
            }
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        };
        Terminal.prototype._visualBell = function () {
            return false;
        };
        Terminal.prototype._soundBell = function () {
            return this.options.bellStyle === 'sound';
        };
        return Terminal;
    }(EventEmitter_1.EventEmitter));
    exports.Terminal = Terminal;
    function wasModifierKeyOnlyEvent(ev) {
        return ev.keyCode === 16 ||
            ev.keyCode === 17 ||
            ev.keyCode === 18;
    }

    });

    unwrapExports(Terminal_1);
    var Terminal_2 = Terminal_1.Terminal;

    var Terminal_2$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    var Terminal = (function () {
        function Terminal(options) {
            this._core = new Terminal_1.Terminal(options);
        }
        Object.defineProperty(Terminal.prototype, "onCursorMove", {
            get: function () { return this._core.onCursorMove; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onLineFeed", {
            get: function () { return this._core.onLineFeed; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onSelectionChange", {
            get: function () { return this._core.onSelectionChange; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onData", {
            get: function () { return this._core.onData; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onTitleChange", {
            get: function () { return this._core.onTitleChange; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onScroll", {
            get: function () { return this._core.onScroll; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onKey", {
            get: function () { return this._core.onKey; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onRender", {
            get: function () { return this._core.onRender; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "onResize", {
            get: function () { return this._core.onResize; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "element", {
            get: function () { return this._core.element; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "textarea", {
            get: function () { return this._core.textarea; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "rows", {
            get: function () { return this._core.rows; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "cols", {
            get: function () { return this._core.cols; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Terminal.prototype, "markers", {
            get: function () { return this._core.markers; },
            enumerable: true,
            configurable: true
        });
        Terminal.prototype.blur = function () {
            this._core.blur();
        };
        Terminal.prototype.focus = function () {
            this._core.focus();
        };
        Terminal.prototype.on = function (type, listener) {
            this._core.on(type, listener);
        };
        Terminal.prototype.off = function (type, listener) {
            this._core.off(type, listener);
        };
        Terminal.prototype.emit = function (type, data) {
            this._core.emit(type, data);
        };
        Terminal.prototype.addDisposableListener = function (type, handler) {
            return this._core.addDisposableListener(type, handler);
        };
        Terminal.prototype.resize = function (columns, rows) {
            this._core.resize(columns, rows);
        };
        Terminal.prototype.writeln = function (data) {
            this._core.writeln(data);
        };
        Terminal.prototype.open = function (parent) {
            this._core.open(parent);
        };
        Terminal.prototype.attachCustomKeyEventHandler = function (customKeyEventHandler) {
            this._core.attachCustomKeyEventHandler(customKeyEventHandler);
        };
        Terminal.prototype.addCsiHandler = function (flag, callback) {
            return this._core.addCsiHandler(flag, callback);
        };
        Terminal.prototype.addOscHandler = function (ident, callback) {
            return this._core.addOscHandler(ident, callback);
        };
        Terminal.prototype.registerLinkMatcher = function (regex, handler, options) {
            return this._core.registerLinkMatcher(regex, handler, options);
        };
        Terminal.prototype.deregisterLinkMatcher = function (matcherId) {
            this._core.deregisterLinkMatcher(matcherId);
        };
        Terminal.prototype.registerCharacterJoiner = function (handler) {
            return this._core.registerCharacterJoiner(handler);
        };
        Terminal.prototype.deregisterCharacterJoiner = function (joinerId) {
            this._core.deregisterCharacterJoiner(joinerId);
        };
        Terminal.prototype.addMarker = function (cursorYOffset) {
            return this._core.addMarker(cursorYOffset);
        };
        Terminal.prototype.hasSelection = function () {
            return this._core.hasSelection();
        };
        Terminal.prototype.getSelection = function () {
            return this._core.getSelection();
        };
        Terminal.prototype.clearSelection = function () {
            this._core.clearSelection();
        };
        Terminal.prototype.selectAll = function () {
            this._core.selectAll();
        };
        Terminal.prototype.selectLines = function (start, end) {
            this._core.selectLines(start, end);
        };
        Terminal.prototype.dispose = function () {
            this._core.dispose();
        };
        Terminal.prototype.destroy = function () {
            this._core.destroy();
        };
        Terminal.prototype.scrollLines = function (amount) {
            this._core.scrollLines(amount);
        };
        Terminal.prototype.scrollPages = function (pageCount) {
            this._core.scrollPages(pageCount);
        };
        Terminal.prototype.scrollToTop = function () {
            this._core.scrollToTop();
        };
        Terminal.prototype.scrollToBottom = function () {
            this._core.scrollToBottom();
        };
        Terminal.prototype.scrollToLine = function (line) {
            this._core.scrollToLine(line);
        };
        Terminal.prototype.clear = function () {
            this._core.clear();
        };
        Terminal.prototype.write = function (data) {
            this._core.write(data);
        };
        Terminal.prototype.getOption = function (key) {
            return this._core.getOption(key);
        };
        Terminal.prototype.setOption = function (key, value) {
            this._core.setOption(key, value);
        };
        Terminal.prototype.refresh = function (start, end) {
            this._core.refresh(start, end);
        };
        Terminal.prototype.reset = function () {
            this._core.reset();
        };
        Terminal.applyAddon = function (addon) {
            addon.apply(Terminal);
        };
        Object.defineProperty(Terminal, "strings", {
            get: function () {
                return Strings;
            },
            enumerable: true,
            configurable: true
        });
        return Terminal;
    }());
    exports.Terminal = Terminal;

    });

    unwrapExports(Terminal_2$1);
    var Terminal_3 = Terminal_2$1.Terminal;

    var fit_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function proposeGeometry(term) {
        if (!term.element.parentElement) {
            return null;
        }
        var parentElementStyle = window.getComputedStyle(term.element.parentElement);
        var parentElementHeight = parseInt(parentElementStyle.getPropertyValue('height'));
        var parentElementWidth = Math.max(0, parseInt(parentElementStyle.getPropertyValue('width')));
        var elementStyle = window.getComputedStyle(term.element);
        var elementPadding = {
            top: parseInt(elementStyle.getPropertyValue('padding-top')),
            bottom: parseInt(elementStyle.getPropertyValue('padding-bottom')),
            right: parseInt(elementStyle.getPropertyValue('padding-right')),
            left: parseInt(elementStyle.getPropertyValue('padding-left'))
        };
        var elementPaddingVer = elementPadding.top + elementPadding.bottom;
        var elementPaddingHor = elementPadding.right + elementPadding.left;
        var availableHeight = parentElementHeight - elementPaddingVer;
        var availableWidth = parentElementWidth - elementPaddingHor - term._core.viewport.scrollBarWidth;
        var geometry = {
            cols: Math.floor(availableWidth / term._core.renderer.dimensions.actualCellWidth),
            rows: Math.floor(availableHeight / term._core.renderer.dimensions.actualCellHeight)
        };
        return geometry;
    }
    exports.proposeGeometry = proposeGeometry;
    function fit(term) {
        var geometry = proposeGeometry(term);
        if (geometry) {
            if (term.rows !== geometry.rows || term.cols !== geometry.cols) {
                term._core.renderer.clear();
                term.resize(geometry.cols, geometry.rows);
            }
        }
    }
    exports.fit = fit;
    function apply(terminalConstructor) {
        terminalConstructor.prototype.proposeGeometry = function () {
            return proposeGeometry(this);
        };
        terminalConstructor.prototype.fit = function () {
            fit(this);
        };
    }
    exports.apply = apply;

    });

    unwrapExports(fit_1);
    var fit_2 = fit_1.proposeGeometry;
    var fit_3 = fit_1.fit;
    var fit_4 = fit_1.apply;

    var webLinks = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var protocolClause = '(https?:\\/\\/)';
    var domainCharacterSet = '[\\da-z\\.-]+';
    var negatedDomainCharacterSet = '[^\\da-z\\.-]+';
    var domainBodyClause = '(' + domainCharacterSet + ')';
    var tldClause = '([a-z\\.]{2,6})';
    var ipClause = '((\\d{1,3}\\.){3}\\d{1,3})';
    var localHostClause = '(localhost)';
    var portClause = '(:\\d{1,5})';
    var hostClause = '((' + domainBodyClause + '\\.' + tldClause + ')|' + ipClause + '|' + localHostClause + ')' + portClause + '?';
    var pathCharacterSet = '(\\/[\\/\\w\\.\\-%~:]*)*([^:"\'\\s])';
    var pathClause = '(' + pathCharacterSet + ')?';
    var queryStringHashFragmentCharacterSet = '[0-9\\w\\[\\]\\(\\)\\/\\?\\!#@$%&\'*+,:;~\\=\\.\\-]*';
    var queryStringClause = '(\\?' + queryStringHashFragmentCharacterSet + ')?';
    var hashFragmentClause = '(#' + queryStringHashFragmentCharacterSet + ')?';
    var negatedPathCharacterSet = '[^\\/\\w\\.\\-%]+';
    var bodyClause = hostClause + pathClause + queryStringClause + hashFragmentClause;
    var start = '(?:^|' + negatedDomainCharacterSet + ')(';
    var end = ')($|' + negatedPathCharacterSet + ')';
    var strictUrlRegex = new RegExp(start + protocolClause + bodyClause + end);
    function handleLink(event, uri) {
        window.open(uri, '_blank');
    }
    function webLinksInit(term, handler, options) {
        if (handler === void 0) { handler = handleLink; }
        if (options === void 0) { options = {}; }
        options.matchIndex = 1;
        term.registerLinkMatcher(strictUrlRegex, handler, options);
    }
    exports.webLinksInit = webLinksInit;
    function apply(terminalConstructor) {
        terminalConstructor.prototype.webLinksInit = function (handler, options) {
            webLinksInit(this, handler, options);
        };
    }
    exports.apply = apply;

    });

    unwrapExports(webLinks);
    var webLinks_1 = webLinks.webLinksInit;
    var webLinks_2 = webLinks.apply;

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var XtermTerminal = /** @class */ (function () {
        function XtermTerminal(div) {
            this.div = div;
            if (!this.div) {
                throw new Error("element cannot be null");
            }
            this.xterm = new Terminal_3({
                cursorBlink: true
            });
        }
        XtermTerminal.prototype.initialise = function () {
            this.xterm.open(this.div);
            webLinks_1(this.xterm);
            fit_3(this.xterm);
        };
        XtermTerminal.prototype.clear = function () {
            this.xterm.clear();
            return Promise.resolve();
        };
        XtermTerminal.prototype.setContent = function (content) {
            return this.write(content);
        };
        XtermTerminal.prototype.write = function (content) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.clear()];
                        case 1:
                            _a.sent();
                            this.append(content);
                            return [2 /*return*/];
                    }
                });
            });
        };
        XtermTerminal.prototype.append = function (content) {
            if (isString(content)) {
                this.xterm.writeln(content);
            }
            else {
                for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
                    var line = content_1[_i];
                    this.xterm.writeln(line);
                }
            }
            return Promise.resolve();
        };
        XtermTerminal.prototype.id = function () {
            return this.div.id;
        };
        return XtermTerminal;
    }());

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    function getTrydotnetSessionId(element, defualtSessionId) {
        if (defualtSessionId === void 0) { defualtSessionId = "default"; }
        var sessionId = element.dataset.trydotnetSessionId;
        if (!sessionId) {
            sessionId = defualtSessionId;
        }
        return sessionId;
    }
    function getTrydotnetEditorId(element) {
        var editorId = element.dataset.trydotnetEditorId;
        return editorId;
    }
    function getVisibility(element) {
        var visibility = element.dataset.trydotnetVisibility;
        if (isNullOrUndefinedOrWhitespace(visibility)) {
            visibility = exports.tryDotNetVisibilityModifiers[exports.tryDotNetVisibilityModifiers.visible];
        }
        return visibility;
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    function getCodeContainer(codeSource) {
        var codeContainer = codeSource.parentElement;
        return codeContainer;
    }
    function getCode(codeSource) {
        var code = codeSource.innerText;
        code = trimNewLines(code);
        return code;
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    function getOrCreateDocument(sessionId, filename, region, includes) {
        if (!includes[sessionId]) {
            includes[sessionId] = {
                files: [],
                documents: []
            };
        }
        var sessionIncludes = includes[sessionId];
        var document = sessionIncludes.documents.find(function (document) { return document.fileName === filename && document.region === region; });
        if (!document) {
            document = {
                fileName: filename,
                region: region,
                content: ""
            };
            sessionIncludes.documents.push(document);
        }
        return document;
    }
    function getOrCreateFile(sessionId, filename, includes) {
        if (!includes[sessionId]) {
            includes[sessionId] = {
                files: [],
                documents: []
            };
        }
        var sessionIncludes = includes[sessionId];
        var file = sessionIncludes.files.find(function (file) { return file.name === filename; });
        if (!file) {
            file = {
                name: filename,
                content: ""
            };
            sessionIncludes.files.push(file);
        }
        return file;
    }
    function getDocumentsToInclude(includes, sessionId) {
        var merged = [];
        if (includes !== null) {
            if (includes.global && includes.global.documents.length > 0) {
                merged.push.apply(merged, includes.global.documents);
            }
            var sessionRelated = includes[sessionId];
            if (sessionRelated && sessionRelated.documents.length > 0) {
                merged.push.apply(merged, sessionRelated.documents);
            }
        }
        return merged;
    }
    function mergeFiles(source, includes, sessionId) {
        var merged = [];
        if (source !== null && source.length > 0) {
            merged.push.apply(merged, source);
        }
        if (includes !== null) {
            if (includes.global && includes.global.files.length > 0) {
                merged.push.apply(merged, includes.global.files);
            }
            var sessionRelated = includes[sessionId];
            if (sessionRelated && sessionRelated.files.length > 0) {
                merged.push.apply(merged, sessionRelated.files);
            }
        }
        return merged;
    }
    function getOrder(element) {
        var order = element.dataset.trydotnetOrder;
        if (order === undefined || order === null) {
            return 0;
        }
        return Number(order);
    }
    function extractIncludes(doc) {
        var _this = this;
        consolidateInliningOrder(doc);
        var includes = {
            global: null
        };
        var sessions = {};
        var codeSources = doc.querySelectorAll("pre>code[data-trydotnet-mode=" + exports.tryDotNetModes[exports.tryDotNetModes.include] + "]");
        var domeElementstoRemove = [];
        codeSources.forEach(function (codeSource) { return __awaiter(_this, void 0, void 0, function () {
            var sessionId, visibility;
            return __generator(this, function (_a) {
                sessionId = getTrydotnetSessionId(codeSource, "global");
                if (!sessions[sessionId]) {
                    sessions[sessionId] = { codeSources: [] };
                }
                visibility = getVisibility(codeSource);
                if (visibility === exports.tryDotNetVisibilityModifiers[exports.tryDotNetVisibilityModifiers.hidden]) {
                    domeElementstoRemove.push(codeSource.parentNode);
                }
                sessions[sessionId].codeSources.push(codeSource);
                return [2 /*return*/];
            });
        }); });
        for (var sessionId in sessions) {
            var session = sessions[sessionId];
            for (var _i = 0, _a = session.codeSources.sort(elementComparer); _i < _a.length; _i++) {
                var codeSource = _a[_i];
                var code = getCode(codeSource);
                var filename = codeSource.dataset.trydotnetFileName;
                if (!filename) {
                    filename = "include_file_" + sessionId + ".cs";
                }
                var region = codeSource.dataset.trydotnetRegion;
                if (!isNullOrUndefinedOrWhitespace(region)) {
                    var injectionPoint = codeSource.dataset.trydotnetInjectionPoint;
                    if (isNullOrUndefinedOrWhitespace(injectionPoint)) {
                        injectionPoint = "before";
                    }
                    var document_1 = getOrCreateDocument(sessionId, filename, region + "[" + injectionPoint + "]", includes);
                    document_1.content = "" + document_1.content + code + "\n";
                }
                else {
                    var file = getOrCreateFile(sessionId, filename, includes);
                    file.content = "" + file.content + code + "\n";
                }
            }
        }
        domeElementstoRemove.forEach(function (element) {
            element.parentNode.removeChild(element);
        });
        return includes;
    }
    function consolidateInliningOrder(doc) {
        var codeSources = doc.querySelectorAll("pre>code[data-trydotnet-mode]");
        var codeSourcesBySession = {};
        codeSources.forEach(function (codeSource) {
            var sessionId = getTrydotnetSessionId(codeSource);
            if (!codeSourcesBySession[sessionId]) {
                codeSourcesBySession[sessionId] = [];
            }
            codeSourcesBySession[sessionId].push(codeSource);
        });
        var _loop_1 = function (sessionId) {
            var codeSources_1 = codeSourcesBySession[sessionId].sort(elementComparer);
            var editableRegionsFound = {};
            codeSources_1.forEach(function (codeSource) {
                var region = codeSource.dataset.trydotnetRegion;
                if (!isNullOrUndefinedOrWhitespace(region)) {
                    var mode = codeSource.dataset.trydotnetMode;
                    var id = computeId(codeSource);
                    if (mode === exports.tryDotNetModes[exports.tryDotNetModes.editor]) {
                        editableRegionsFound[id] = true;
                    }
                    else if (mode === exports.tryDotNetModes[exports.tryDotNetModes.include]) {
                        var injectionPoint = codeSource.dataset.trydotnetInjectionPoint;
                        if (isNullOrUndefinedOrWhitespace(injectionPoint)) {
                            injectionPoint = (!!editableRegionsFound[id] === true)
                                ? exports.tryDotNetRegionInjectionPoints[exports.tryDotNetRegionInjectionPoints.after]
                                : exports.tryDotNetRegionInjectionPoints[exports.tryDotNetRegionInjectionPoints.before];
                            codeSource.dataset.trydotnetInjectionPoint = injectionPoint;
                        }
                    }
                }
            });
        };
        for (var sessionId in codeSourcesBySession) {
            _loop_1(sessionId);
        }
    }
    function tryGetFileName(element) {
        var fileName = element.dataset.trydotnetFileName;
        if (isNullOrUndefinedOrWhitespace(fileName)) {
            fileName = "temp";
        }
        return fileName;
    }
    function computeId(element) {
        var fileName = tryGetFileName(element);
        var region = element.dataset.trydotnetRegion;
        return fileName + "@" + region;
    }
    function elementComparer(elementA, elementB) {
        return getOrder(elementA) - getOrder(elementB);
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    var PreOutputPanel = /** @class */ (function () {
        function PreOutputPanel(_div) {
            this._div = _div;
            if (!this._div) {
                throw new Error("element cannot be null");
            }
            this._id = this._div.id;
            var ownerDocument = this._div.ownerDocument;
            var preElement = ownerDocument.createElement("pre");
            this._codeElement = preElement.appendChild(ownerDocument.createElement("code"));
            this._div.appendChild(preElement);
            this._shouldSizeToContent = this._div.classList.contains("size-to-content") || this._div.parentElement.classList.contains("size-to-content");
            this.encode = function (text) {
                return htmlEncode(text, ownerDocument);
            };
        }
        PreOutputPanel.prototype.initialise = function () {
        };
        PreOutputPanel.prototype.write = function (content) {
            var _this = this;
            if (isString(content)) {
                this._codeElement.innerHTML = "" + this.encode(content);
            }
            else if (content.length > 0) {
                this._codeElement.innerHTML = content.map(function (line) { return "" + _this.encode(line); }).join("\n");
            }
            this.setHeight(content);
            return Promise.resolve();
        };
        PreOutputPanel.prototype.setHeight = function (content) {
            var _this = this;
            if (this._shouldSizeToContent && isNullOrUndefinedOrWhitespace(this._div.parentElement.style.height)) {
                var height = void 0;
                if (isString(content)) {
                    var lineCount = content.split('\n').length;
                    height = Math.max(5, lineCount);
                }
                else {
                    height = Math.max(5, content.length);
                }
                this._div.parentElement.style.height = height + "em";
                this._div.parentElement.style.overflow = "hidden";
                setTimeout(function () {
                    _this._div.parentElement.style.overflow = "auto";
                }, 600);
            }
        };
        PreOutputPanel.prototype.clear = function () {
            this._codeElement.innerHTML = "";
            return Promise.resolve();
        };
        PreOutputPanel.prototype.setContent = function (content) {
            return this.write(content);
        };
        PreOutputPanel.prototype.append = function (content) {
            var _this = this;
            if (isString(content)) {
                this._codeElement.innerHTML += this.encode(content);
            }
            else {
                this._codeElement.innerHTML += content.map(function (line) { return _this.encode(line); }).join("\n");
            }
            this.setHeight(content);
            return Promise.resolve();
        };
        PreOutputPanel.prototype.id = function () {
            return this._id;
        };
        return PreOutputPanel;
    }());

    // Copyright (c) .NET Foundation and contributors. All rights reserved.
    function cloneSize(source, destination) {
        var width = source.getAttribute("width");
        if (width) {
            destination.setAttribute("width", width);
        }
        var height = source.getAttribute("height");
        if (height) {
            destination.setAttribute("height", height);
        }
        var style = source.getAttribute("style");
        if (style) {
            destination.setAttribute("style", style);
        }
    }
    function clearRunClasses(element) {
        if (element) {
            element.classList.remove("run-execution");
            element.classList.remove("run-failure");
            element.classList.remove("run-success");
            element.classList.remove("busy");
        }
    }
    var defaultRunResultHandler = function (runResult, container, _sessionId) {
        if (container) {
            clearRunClasses(container);
            container.classList.remove("collapsed");
            container.classList.add(runResult.succeeded ? "run-success" : "run-failure");
        }
    };
    var defaultServiceErrorHandler = function (error, container, serviceErrorPanel, _sessionId) {
        if (container) {
            clearRunClasses(container);
            container.classList.add("run-failure");
        }
        if (serviceErrorPanel) {
            serviceErrorPanel.setContent(error.message);
        }
    };
    function autoEnable(_a, documentToScan, mainWindow) {
        var apiBaseAddress = _a.apiBaseAddress, _b = _a.useWasmRunner, useWasmRunner = _b === void 0 ? true : _b, _c = _a.debug, debug = _c === void 0 ? false : _c, _d = _a.runResultHandler, runResultHandler = _d === void 0 ? defaultRunResultHandler : _d, _e = _a.serviceErrorHandler, serviceErrorHandler = _e === void 0 ? defaultServiceErrorHandler : _e;
        return internalAutoEnable({
            apiBaseAddress: apiBaseAddress,
            useWasmRunner: useWasmRunner,
            debug: debug,
            runResultHandler: runResultHandler,
            serviceErrorHandler: serviceErrorHandler
        }, documentToScan, mainWindow);
    }
    function tryParseEnum(outputType) {
        if (isNullOrUndefinedOrWhitespace(outputType)) {
            return exports.tryDotNetOutputModes.standard;
        }
        for (var n in exports.tryDotNetOutputModes) {
            var name_1 = exports.tryDotNetOutputModes[n];
            console.log(name_1);
            if (name_1 === outputType) {
                return n;
            }
        }
    }
    function createOutputPanel(outputDiv, outputType) {
        var type = tryParseEnum(outputType);
        var outputPanel;
        switch (type) {
            case exports.tryDotNetOutputModes.terminal:
                outputPanel = new XtermTerminal(outputDiv);
                break;
            default:
                outputPanel = new PreOutputPanel(outputDiv);
                break;
        }
        return outputPanel;
    }
    function createRunOutputElements(outputPanelContainer, doc) {
        if (outputPanelContainer === null || outputPanelContainer === undefined) {
            return {
                outputPanel: null
            };
        }
        var outputDiv = outputPanelContainer.appendChild(doc.createElement("div"));
        outputDiv.classList.add("trydotnet-output");
        var outputType = outputPanelContainer.dataset.trydotnetOutputType;
        var outputPanel = createOutputPanel(outputDiv, outputType);
        return {
            outputPanel: outputPanel
        };
    }
    function internalAutoEnable(configuration, documentToScan, mainWindow) {
        var _this = this;
        var doc = documentToScan ? documentToScan : document;
        var wnd = mainWindow ? mainWindow : window;
        var apiBaseAddress = configuration.apiBaseAddress;
        var sessions = {};
        var codeSources = doc.querySelectorAll("pre>code[data-trydotnet-mode=" + exports.tryDotNetModes[exports.tryDotNetModes.editor] + "]");
        var runButtons = doc.querySelectorAll("button[data-trydotnet-mode=" + exports.tryDotNetModes[exports.tryDotNetModes.run] + "]");
        var outputDivs = doc.querySelectorAll("div[data-trydotnet-mode=" + exports.tryDotNetModes[exports.tryDotNetModes.runResult] + "]");
        var errorDivs = doc.querySelectorAll("div[data-trydotnet-mode=" + exports.tryDotNetModes[exports.tryDotNetModes.errorReport] + "]");
        codeSources.forEach(function (codeSource) { return __awaiter(_this, void 0, void 0, function () {
            var sessionId;
            return __generator(this, function (_a) {
                sessionId = getTrydotnetSessionId(codeSource);
                if (!sessions[sessionId]) {
                    sessions[sessionId] = { codeSources: [] };
                }
                sessions[sessionId].codeSources.push(codeSource);
                return [2 /*return*/];
            });
        }); });
        runButtons.forEach(function (run) { return __awaiter(_this, void 0, void 0, function () {
            var sessionId;
            return __generator(this, function (_a) {
                sessionId = getTrydotnetSessionId(run);
                if (sessions[sessionId]) {
                    sessions[sessionId].runButton = run;
                }
                return [2 /*return*/];
            });
        }); });
        outputDivs.forEach(function (output) { return __awaiter(_this, void 0, void 0, function () {
            var sessionId;
            return __generator(this, function (_a) {
                sessionId = getTrydotnetSessionId(output);
                if (sessions[sessionId]) {
                    sessions[sessionId].outputPanel = output;
                }
                return [2 /*return*/];
            });
        }); });
        errorDivs.forEach(function (error) { return __awaiter(_this, void 0, void 0, function () {
            var sessionId;
            return __generator(this, function (_a) {
                sessionId = getTrydotnetSessionId(error);
                if (sessions[sessionId]) {
                    sessions[sessionId].errorPanel = error;
                }
                return [2 /*return*/];
            });
        }); });
        var editorIds = new Set();
        var filedNameSeed = 0;
        var awaitableSessions = [];
        var includes = extractIncludes(doc);
        var _loop_1 = function (sessionId) {
            var session = sessions[sessionId];
            var iframes = [];
            var files = [];
            var packageName = null;
            var packageVersion = null;
            var language = "csharp";
            var documentsToOpen = {};
            var editorCount = -1;
            for (var _i = 0, _a = session.codeSources; _i < _a.length; _i++) {
                var codeSource = _a[_i];
                editorCount++;
                var codeContainer = getCodeContainer(codeSource);
                var code = getCode(codeSource);
                var pacakgeAttribute = codeSource.dataset.trydotnetPackage;
                if (!isNullOrUndefinedOrWhitespace(pacakgeAttribute)) {
                    packageName = pacakgeAttribute;
                }
                var packageVersionAttribute = codeSource.dataset.dataTrydotnetPackageVersion;
                if (!isNullOrUndefinedOrWhitespace(packageVersionAttribute)) {
                    packageVersion = packageVersionAttribute;
                }
                var languageAttribute = codeSource.dataset.trydotnetLanguage;
                if (!isNullOrUndefinedOrWhitespace(languageAttribute)) {
                    language = languageAttribute;
                }
                var editorId = getTrydotnetEditorId(codeSource);
                if (!packageName) {
                    throw new Error("must provide package");
                }
                var filename = codeSource.dataset.trydotnetFileName;
                if (!filename) {
                    filename = "code_file_" + filedNameSeed + ".cs";
                    filedNameSeed++;
                }
                var iframe = doc.createElement("iframe");
                if (isNullOrUndefinedOrWhitespace(editorId)) {
                    editorId = editorCount.toString();
                }
                editorId = sessionId + "::" + editorId;
                if (editorIds.has(editorId)) {
                    throw new Error("editor id " + editorId + " already defined");
                }
                editorIds.add(editorId);
                // progapate attributes to iframe
                iframe.dataset.trydotnetEditorId = editorId;
                iframe.dataset.trydotnetSessionId = sessionId;
                var region = codeSource.dataset.trydotnetRegion;
                if (!isNullOrUndefinedOrWhitespace(region)) {
                    documentsToOpen[editorId] = {
                        fileName: filename,
                        region: region,
                        content: code
                    };
                }
                else {
                    files.push({ name: filename, content: code });
                    documentsToOpen[editorId] = filename;
                }
                cloneSize(codeContainer, iframe);
                codeContainer.parentNode.replaceChild(iframe, codeContainer);
                iframes.push(iframe);
            }
            var prj = {
                package: packageName,
                files: mergeFiles(files, includes, sessionId)
            };
            if (!isNullOrUndefinedOrWhitespace(packageVersion)) {
                prj.packageVersion = packageVersion;
            }
            if (!isNullOrUndefinedOrWhitespace(language)) {
                prj.language = language;
            }
            var documentsToInclude = getDocumentsToInclude(includes, sessionId);
            var config = {
                debug: configuration.debug,
                useWasmRunner: configuration.useWasmRunner,
                hostOrigin: doc.location.origin,
                trydotnetOrigin: apiBaseAddress ? apiBaseAddress.href : null,
                editorConfiguration: {
                    options: {
                        minimap: {
                            enabled: false
                        }
                    }
                }
            };
            var awaitable = createSessionWithProjectAndOpenDocuments(config, iframes, wnd, prj, documentsToOpen, documentsToInclude).then(function (tdnSession) {
                var outputPanelContainer = session.outputPanel;
                var errorPanelContainer = session.errorPanel;
                var errorPanel;
                var runResultHandler = configuration.runResultHandler, serviceErrorHandler = configuration.serviceErrorHandler;
                var outputPanel = createRunOutputElements(outputPanelContainer, doc).outputPanel;
                if (errorPanelContainer === null ||
                    errorPanelContainer === undefined) {
                    // fall back on output modules
                    errorPanelContainer = outputPanelContainer;
                    errorPanel = outputPanel;
                }
                else {
                    // todo: impelement createErrorReportElements
                    throw new Error("Not implemented");
                }
                var createdSession = {
                    sessionId: sessionId,
                    session: tdnSession,
                    editorIframes: iframes
                };
                if (outputPanel) {
                    outputPanel.initialise();
                    createdSession.outputPanels = [outputPanel];
                    tdnSession.subscribeToOutputEvents(function (event) {
                        if (event.stdout) {
                            outputPanel.append(event.stdout);
                        }
                        if (event.exception) {
                            outputPanel.append("Unhandled Exception: " + event.exception);
                        }
                    });
                    tdnSession.subscribeToServiceErrorEvents(function (error) {
                        errorPanel.append(error.message);
                    });
                }
                var runButton = session.runButton;
                if (runButton) {
                    tdnSession.onCanRunChanged(function (canRun) {
                        runButton.disabled = !canRun;
                    });
                    createdSession.runButtons = [runButton];
                    runButton.onclick = function () {
                        clearRunClasses(runButton);
                        runButton.classList.add("busy");
                        if (outputPanelContainer) {
                            clearRunClasses(outputPanelContainer);
                            outputPanelContainer.classList.add("run-execution");
                        }
                        if (outputPanel) {
                            outputPanel.clear();
                        }
                        var runOptions = {};
                        var args = runButton.dataset.trydotnetRunArgs;
                        if (!isNullOrUndefinedOrWhitespace(args)) {
                            runOptions.runArgs = args;
                        }
                        return tdnSession
                            .run(runOptions)
                            .then(function (runResult) {
                            clearRunClasses(runButton);
                            if (runResultHandler) {
                                runResultHandler(runResult, outputPanelContainer, sessionId);
                            }
                        })
                            .catch(function (error) {
                            runButton.disabled = false;
                            clearRunClasses(runButton);
                            if (serviceErrorHandler) {
                                serviceErrorHandler(error, errorPanelContainer, errorPanel, sessionId);
                            }
                        });
                    };
                }
                return createdSession;
            });
            awaitableSessions.push(awaitable);
        };
        for (var sessionId in sessions) {
            _loop_1(sessionId);
        }
        return Promise.all(awaitableSessions);
    }

    // Copyright (c) .NET Foundation and contributors. All rights reserved.

    exports.createSession = createSession;
    exports.createSessionWithPackage = createSessionWithPackage;
    exports.createSessionWithProject = createSessionWithProject;
    exports.createSessionWithProjectAndOpenDocument = createSessionWithProjectAndOpenDocument;
    exports.createSessionWithProjectAndOpenDocuments = createSessionWithProjectAndOpenDocuments;
    exports.createInstrumentationFrameNavigator = createInstrumentationFrameNavigator;
    exports.configureEmbeddableEditorIFrame = configureEmbeddableEditorIFrame;
    exports.configureEmbeddableEditorIFrameWithPackage = configureEmbeddableEditorIFrameWithPackage;
    exports.createProject = createProject;
    exports.createProjectFromGist = createProjectFromGist;
    exports.createScaffoldingProject = createScaffoldingProject;
    exports.autoEnable = autoEnable;
    exports.tryParseEnum = tryParseEnum;
    exports.createOutputPanel = createOutputPanel;
    exports.createRunOutputElements = createRunOutputElements;
    exports.PreOutputPanel = PreOutputPanel;

    Object.defineProperty(exports, '__esModule', { value: true });

}));