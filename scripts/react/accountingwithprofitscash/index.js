(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b ||= {})
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // ../gatsby-theme-dmglvnfinancelabs/src/utilities/currentDay.js
  var currentDay = new Intl.DateTimeFormat("en", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date()).replace(/[^a-zA-Z0-9]/g, "_");

  // ../gatsby-theme-dmglvnfinancelabs/src/utilities/loadBrowserState.js
  function loadBrowserState(name = "econolabs") {
    try {
      const serializedState = localStorage.getItem(name);
      if (serializedState === null) {
        return void 0;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return void 0;
    }
  }

  // ../gatsby-theme-dmglvnfinancelabs/src/utilities/saveBrowserState.js
  var saveBrowserState = (name = "econolabs", state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(name, serializedState);
    } catch (err) {
      console.log(err);
    }
  };

  // ../gatsby-theme-dmglvnfinancelabs/src/utilities/processRecords.js
  function processRecords({
    indicator = "Sales",
    balanceIndicators: balanceIndicators2 = [],
    records = [],
    periods = ["default"],
    period = "default"
  }) {
    let DValues = 0;
    let KValues = 0;
    let assets = balanceIndicators2.filter((item) => item.type === "asset").map((item) => item.title);
    Array.isArray(records) && records.forEach((item) => {
      let currentOperationPeriodIndex = periods.findIndex(
        (per) => per === item.period
      );
      let periodIndex = periods.findIndex((el) => el === period) + 1;
      if (item.d === indicator && periodIndex > currentOperationPeriodIndex) {
        DValues = DValues + parseFloat(item.sum);
      }
      if (item.k === indicator && periodIndex > currentOperationPeriodIndex) {
        KValues = KValues + parseFloat(item.sum);
      }
    });
    if (assets.includes(indicator)) {
      return DValues - KValues;
    } else {
      return KValues - DValues;
    }
  }

  // ../gatsby-theme-dmglvnfinancelabs/src/utilities/processBalanceIndicatorForStackedBarsChart.js
  function processBalanceIndicatorForStackedBarsChart(indicator, caseRecords, periods, balanceIndicators2) {
    let resultArray = [];
    function isAsset(indicator2) {
      let itemIndex = balanceIndicators2.findIndex((item) => indicator2 === item.title);
      if (balanceIndicators2[itemIndex].type === "asset") {
        return true;
      }
      return false;
    }
    periods.map((period) => {
      if (isAsset(indicator)) {
        resultArray.push(processRecords({ indicator, balanceIndicators: balanceIndicators2, records: caseRecords, periods, period }));
        resultArray.push(0);
      } else {
        resultArray.push(0);
        resultArray.push(processRecords({ indicator, balanceIndicators: balanceIndicators2, records: caseRecords, periods, period }));
      }
    });
    return resultArray;
  }

  // ../gatsby-theme-dmglvnfinancelabs/src/utilities/checkTypePeriod.js
  function checkTypePeriod(records = [], indicator = "cash", period) {
    let sum = 0;
    records.forEach((item) => {
      if (!!item?.type && item.type.includes(indicator) && item.period === period) {
        sum = sum + parseFloat(item.sum);
      }
      return null;
    });
    return sum;
  }

  // src/mediatemplates/Chart.js
  var instanceReact = window.React;
  var Chart = class extends instanceReact.Component {
    constructor(props) {
      super(props);
      if (React.createRef) {
        this.chartRef = React.createRef();
      } else {
        this.setRef = (el) => this.chartRef = el;
      }
      this.chart = null;
    }
    render() {
      const _a2 = this.props, { type, height, width, series, options } = _a2, props = __objRest(_a2, ["type", "height", "width", "series", "options"]);
      return React.createElement("div", __spreadValues({
        ref: React.createRef ? this.chartRef : this.setRef
      }, props));
    }
    componentDidMount() {
      const current = React.createRef ? this.chartRef.current : this.chartRef;
      this.chart = new window.ApexCharts(current, this.getConfig());
      this.chart.render();
    }
    getConfig() {
      const { type = "line", height = "auto", width = "100%", series, options } = this.props;
      const newOptions = {
        chart: {
          type,
          height,
          width
        },
        series
      };
      return this.extend(options, newOptions);
    }
    isObject(item) {
      return item && typeof item === "object" && !Array.isArray(item) && item != null;
    }
    extend(target, source) {
      if (typeof Object.assign !== "function") {
        (function() {
          Object.assign = function(target2) {
            if (target2 === void 0 || target2 === null) {
              throw new TypeError("Cannot convert undefined or null to object");
            }
            let output2 = Object(target2);
            for (let index = 1; index < arguments.length; index++) {
              let source2 = arguments[index];
              if (source2 !== void 0 && source2 !== null) {
                for (let nextKey in source2) {
                  if (source2.hasOwnProperty(nextKey)) {
                    output2[nextKey] = source2[nextKey];
                  }
                }
              }
            }
            return output2;
          };
        })();
      }
      let output = Object.assign({}, target);
      if (this.isObject(target) && this.isObject(source)) {
        Object.keys(source).forEach((key) => {
          if (this.isObject(source[key])) {
            if (!(key in target)) {
              Object.assign(output, {
                [key]: source[key]
              });
            } else {
              output[key] = this.extend(target[key], source[key]);
            }
          } else {
            Object.assign(output, {
              [key]: source[key]
            });
          }
        });
      }
      return output;
    }
    componentDidUpdate(prevProps) {
      if (!this.chart)
        return null;
      const { options, series, height, width } = this.props;
      const prevOptions = JSON.stringify(prevProps.options);
      const prevSeries = JSON.stringify(prevProps.series);
      const currentOptions = JSON.stringify(options);
      const currentSeries = JSON.stringify(series);
      if (prevOptions !== currentOptions || prevSeries !== currentSeries || height !== prevProps.height || width !== prevProps.width) {
        if (prevSeries === currentSeries) {
          this.chart.updateOptions(this.getConfig());
        } else if (prevOptions === currentOptions && height === prevProps.height && width === prevProps.width) {
          this.chart.updateSeries(series);
        } else {
          this.chart.updateOptions(this.getConfig());
        }
      }
    }
    componentWillUnmount() {
      if (this.chart && typeof this.chart.destroy === "function")
        this.chart.destroy();
    }
  };
  var Chart_default = Chart;

  // src/store/caseInitialState.js
  var caseInitialState = {
    initialScreen: true,
    loading: false,
    error: null,
    user: null,
    email: null,
    avatarUrl: null,
    selectedType: null,
    typesArray: [],
    selectedPost: null,
    postsArray: [],
    selectedCase: null,
    slidesArray: [],
    selectedSlide: {},
    caseArray: [],
    selectedFilter: null,
    casesArray: [],
    dictionariesArray: [],
    dictionaryArray: [],
    selectedDictionary: null,
    selectedNote: {},
    caseLayout: [],
    casePeriods: ["2022", "2023", "2024", "2025"],
    caseColors: ["#dc3545", "#d63384", "#6f42c1", "#6610f2", "#0d6efd", "#adb5bd", "#dc3545", "#d63384", "#ffc107", "#198754", "#20c997", "#adb5bd"],
    actionType: ""
  };
  var caseInitialState_default = caseInitialState;

  // src/store/caseReducer.js
  var caseReducer = window.immer.produce((draft, action) => {
    switch (action.type) {
      case "SET_STORE_OBJECT":
        draft[action.payload.key] = action.payload.value;
        break;
      case "SEED_ARRAY":
        draft[action.payload.arrayName] = action.payload.arrayItems;
        break;
      case "PUSH_SOME_ITEMS_TO_ARRAY":
        console.log(draft[action.payload.arrayName]);
        console.log(action.payload.newArrayItems);
        draft[action.payload.arrayName] = [...draft[action.payload.arrayName], ...action.payload.newArrayItems];
        break;
      case "EMPTY_ARRAY":
        draft[action.payload.arrayName] = [];
        break;
      case "PUSH_ITEM_TO_ARRAY":
        draft[action.payload.arrayName].push(action.payload.item);
        break;
      case "UPDATE_ITEM_IN_ARRAY_BY_ID":
        const index = draft[action.payload.arrayName].findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          draft[action.payload.arrayName][index] = action.payload;
        }
        ;
        break;
      default:
        break;
    }
  });
  var caseReducer_default = caseReducer;

  // src/store/caseVanillajsStore.js
  var instanceRedux = window.Redux;
  var instanceAxios = window.axios;
  function reduxMiddleware(store2) {
    return function(next) {
      return function(action) {
        if (typeof action === "function") {
          return action(store2.dispatch, store2.getState);
        } else {
          return next(action);
        }
      };
    };
  }
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || instanceRedux.compose;
  var store = instanceRedux.createStore(
    caseReducer_default,
    caseInitialState_default,
    composeEnhancers(
      instanceRedux.applyMiddleware(reduxMiddleware)
    )
  );
  function setStoreObject(key, value) {
    store.dispatch({ type: "SET_STORE_OBJECT", payload: { key, value } });
  }
  function seedStoreArray(destination, items) {
    store.dispatch({
      type: "SEED_ARRAY",
      payload: {
        arrayName: destination,
        arrayItems: items
      }
    });
  }
  function asyncSeedStoreArray(destination, items, delay = 275) {
    return __async(this, null, function* () {
      const d = yield new Promise((resolve) => {
        setTimeout(() => {
          seedStoreArray(destination, items);
          resolve(delay);
        }, delay);
      });
      return `Seeded ${destination} with ${items.length} items and waited ${d} milliseconds`;
    });
  }
  function asyncTimeout(delay) {
    return __async(this, null, function* () {
      const d = yield new Promise((resolve) => {
        setTimeout(() => resolve(delay), delay);
      });
      return `Waited ${d} seconds`;
    });
  }
  function asyncSetStoreObjectAxios(url2 = "https://fincalculations.firebaseio.com/fundamentals.json", destination = "selectedDictionary") {
    return __async(this, null, function* () {
      try {
        console.log(url2, destination);
        const res = yield instanceAxios.get(url2);
        console.log(res.data);
        store.dispatch({ type: "SET_STORE_OBJECT", payload: { key: destination, value: res.data } });
        return `Fetched ${url2}, and set ${destination} store with ${Object.keys(res.data).length} items`;
      } catch (err) {
        throw new Error("Unable to get a node " + url2);
      }
    });
  }
  function asyncSeedStoreArrayAxios(url2 = "https://fincalculations.firebaseio.com/usersCraft/nick_golovenkin_yandex_ru/posts.json", destination = "someStoreArrayOrObject", filterByType = null) {
    return __async(this, null, function* () {
      try {
        const res = yield instanceAxios.get(url2);
        if (!!filterByType) {
          let filteredByTypeArray = Object.keys(res.data).map((objKey) => res.data[objKey]).filter((item) => item.type.includes(filterByType));
          store.dispatch({
            type: "SEED_ARRAY",
            payload: {
              arrayName: destination,
              arrayItems: filteredByTypeArray
            }
          });
          return `Fetched ${url2}, and seeded ${destination} with ${filteredByTypeArray.length} items out of ${Object.keys(res.data).length} fetched items`;
        } else {
          store.dispatch({
            type: "SEED_ARRAY",
            payload: {
              arrayName: destination,
              arrayItems: Object.keys(res.data).map((objKey) => res.data[objKey])
            }
          });
        }
        return `Fetched ${url2}, and seeded ${destination} with ${Object.keys(res.data).length} items`;
      } catch (err) {
        throw new Error("Unable to get a node " + url2);
      }
    });
  }
  function asyncPushSomeItemsToStoreArrayAxios(url2 = "https://fincalculations.firebaseio.com/usersCraft/nick_golovenkin_yandex_ru/posts.json", destination = "someStoreArrayOrObject", filterByType = null) {
    return __async(this, null, function* () {
      try {
        const res = yield instanceAxios.get(url2);
        if (!!filterByType) {
          let filteredByTypeArray = Object.keys(res.data).map((objKey) => res.data[objKey]).filter((item) => item.type.includes(filterByType));
          store.dispatch({
            type: "PUSH_SOME_ITEMS_TO_ARRAY",
            payload: {
              arrayName: destination,
              newArrayItems: filteredByTypeArray
            }
          });
          return `Fetched ${url2}, and pushed to ${destination} ${filteredByTypeArray.length} items out of ${Object.keys(res.data).length} fetched items`;
        } else {
          store.dispatch({
            type: "PUSH_SOME_ITEMS_TO_ARRAY",
            payload: {
              arrayName: destination,
              newArrayItems: Object.keys(res.data).map((objKey) => res.data[objKey])
            }
          });
        }
        return `Fetched ${url2}, and pushed to ${destination} ${Object.keys(res.data).length} items`;
      } catch (err) {
        throw new Error("Unable to get a node " + url2);
      }
    });
  }
  function asyncPushToStoreArrayUrlAxios() {
    return __async(this, arguments, function* (url2 = "https://fincalculations.firebaseio.com/usersTemplates/calculations/-Ma3vVgKeXsSP07-pwDW.json", arrayName = "slidesArray", mergeWithObject = {}) {
      try {
        const res = yield instanceAxios.get(url2);
        store.dispatch({ type: "PUSH_ITEM_TO_ARRAY", payload: { arrayName, item: __spreadValues(__spreadValues({}, res.data), mergeWithObject) } });
        return `Fetched ${url2} and pushed object of ${Object.keys(res.data).length} values to ${arrayName}`;
      } catch (err) {
        throw new Error("Unable to get a url");
      }
    });
  }
  function updateFirebaseNode() {
    return __async(this, arguments, function* (url2 = "opendictionaries", updateNodeObject2 = {}, dbRef2) {
      console.log("updateFirebaseNode");
      var updates = {};
      updates["/" + url2] = updateNodeObject2;
      console.log(updates);
      try {
        const res = yield dbRef2.update(updates);
        return url2 + " updated";
      } catch (err) {
        throw new Error("Error: " + err);
      }
    });
  }
  function asyncEmptyStoreArray(destination, delay = 275) {
    return __async(this, null, function* () {
      console.log(destination);
      const d = yield new Promise((resolve) => {
        store.dispatch({
          type: "EMPTY_ARRAY",
          payload: { arrayName: destination }
        });
        setTimeout(() => resolve(delay), delay);
      });
      return `Emptied ${destination} and waited ${d} seconds`;
    });
  }
  function asyncSeedStoreArrayFromMultilevelObjectAxios(url2 = "https://fincalculations.firebaseio.com/fundamentals/byProjectDataPublicationUrl.json", destination = "selectedDictionary") {
    return __async(this, null, function* () {
      try {
        const res = yield instanceAxios.get(url2);
        let reportIndicators = [];
        Object.keys(res.data).forEach((level1objKey) => {
          let level1itemKeys = Object.keys(res.data[level1objKey]);
          if (level1itemKeys[0].startsWith("-")) {
            level1itemKeys.forEach((key) => {
              reportIndicators.push(res.data[level1objKey][key]);
            });
          } else {
            level1itemKeys.forEach((level2ObjKey) => {
              let level2itemKeys = Object.keys(res.data[level1objKey][level2ObjKey]);
              if (level2itemKeys[0].startsWith("-")) {
                level2itemKeys.forEach((level3objKey) => {
                  let level3Item = res.data[level1objKey][level2ObjKey][level3objKey];
                  if (typeof level3Item === "object" && !Array.isArray(level3Item) && level3Item !== null) {
                    reportIndicators.push(level3Item);
                  } else {
                    console.log(level3Item);
                  }
                });
              } else {
                level2itemKeys.forEach((level3ObjKey) => {
                  let level3itemKeys = Object.keys(res.data[level1objKey][level2ObjKey][level3ObjKey]);
                  if (level3itemKeys[0].startsWith("-")) {
                    level3itemKeys.forEach((level4objKey) => {
                      let level4Item = res.data[level1objKey][level2ObjKey][level3ObjKey][level4objKey];
                      if (typeof level4Item === "object" && !Array.isArray(level4Item) && level4Item !== null) {
                        reportIndicators.push(level4Item);
                      } else {
                        console.log(level4Item);
                      }
                    });
                  } else {
                    console.log("Dig deeper!");
                    console.log(res.data[level1objKey][level2ObjKey][level3ObjKey]);
                  }
                });
              }
            });
          }
        });
        store.dispatch({
          type: "SEED_ARRAY",
          payload: {
            arrayName: destination,
            arrayItems: reportIndicators
          }
        });
        return `Fetched ${url2} and seeded ${reportIndicators.length} items to ${destination}`;
      } catch (err) {
        throw new Error("Unable to get a url" + err);
      }
    });
  }
  function asyncSetUserEmailAvatarInStoreFromLocalstorage(name = "econolabs", delay = 275) {
    return __async(this, null, function* () {
      try {
        const d = yield new Promise((resolve) => {
          const serializedState = localStorage.getItem(name);
          if (serializedState === null) {
            return `${name} not found in Localstorage`;
          }
          let foundInStorage = JSON.parse(serializedState);
          if (!!(foundInStorage == null ? void 0 : foundInStorage.application)) {
            let application2 = foundInStorage == null ? void 0 : foundInStorage.application;
            if (!!(application2 == null ? void 0 : application2.user)) {
              store.dispatch({ type: "SET_STORE_OBJECT", payload: { key: "user", value: application2.user } });
            }
            if (!!(application2 == null ? void 0 : application2.email)) {
              store.dispatch({ type: "SET_STORE_OBJECT", payload: { key: "email", value: application2.email } });
            }
            if (!!(application2 == null ? void 0 : application2.avatarUrl)) {
              store.dispatch({ type: "SET_STORE_OBJECT", payload: { key: "avatarUrl", value: application2.avatarUrl } });
            }
          }
          setTimeout(() => resolve(delay), delay);
        });
        return `Found ${name} in Localstorage`;
      } catch (err) {
        return "Mistake " + err;
      }
    });
  }
  function runTask(spec) {
    if (spec.task === "seedStoreArray") {
      return asyncSeedStoreArray(spec.destination, spec.items);
    }
    if (spec.task === "seedCurrentWorkStore") {
      return asyncSeedCurrentWorkStore();
    }
    if (spec.task === "setUserEmailAvatarInStoreFromLocalstorage") {
      return asyncSetUserEmailAvatarInStoreFromLocalstorage(spec.destination);
    }
    if (spec.task === "updateFirebase") {
      return updateFirebaseNode(spec.url, spec.updateNodeObject, spec.dbRef);
    }
    if (spec.task === "setStoreObjectAxios") {
      return asyncSetStoreObjectAxios(spec.url, spec.destination);
    }
    if (spec.task === "pushSomeItemsToStoreArrayAxios") {
      return asyncPushSomeItemsToStoreArrayAxios(spec.url, spec.destination, spec == null ? void 0 : spec.filterByType);
    }
    if (spec.task === "seedStoreArrayAxios") {
      return asyncSeedStoreArrayAxios(spec.url, spec.destination, spec == null ? void 0 : spec.filterByType);
    }
    if (spec.task === "seedStoreArrayFromMultilevelObjectAxios") {
      return asyncSeedStoreArrayFromMultilevelObjectAxios(spec.url, spec.destination);
    }
    if (spec.task === "pushToStoreArrayUrlAxios") {
      return asyncPushToStoreArrayUrlAxios(spec.url, spec.destination, spec.mergeWithObject);
    }
    if (spec.task === "emptyStoreArray") {
      return asyncEmptyStoreArray(spec.destination, 275);
    }
    return asyncTimeout(275);
  }
  function sequentialSolution(initialAsyncSeedStoreTasksToDo) {
    return (dispatch) => __async(this, null, function* () {
      dispatch({ type: "SET_STORE_OBJECT", payload: { key: "loading", value: true } });
      const starterPromise = Promise.resolve(null);
      yield initialAsyncSeedStoreTasksToDo.reduce(
        (p, spec) => p.then(() => runTask(spec).then(
          (res) => {
            console.log(res);
          }
        )),
        starterPromise
      );
      dispatch({ type: "SET_STORE_OBJECT", payload: { key: "initialScreen", value: false } });
      dispatch({ type: "SET_STORE_OBJECT", payload: { key: "loading", value: false } });
    });
  }
  function updateAccountingWithProfitsCashProject(dbRef2, selectedCase, userEmail2) {
    return __async(this, null, function* () {
      seedStoreArray("caseArray", selectedCase.content);
      let newPostKey = yield dbRef2.child("usersCraft/" + userEmail2 + "/posts/" + selectedCase.id + "/content").push().key;
      let currentDay2 = new Intl.DateTimeFormat("en", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      }).format(new Date()).replace(/[^a-zA-Z0-9]/g, "_");
      yield Promise.all([
        updateFirebaseNode(
          url = "openmedia/" + selectedCase.id,
          updateNodeObject = selectedCase,
          dbRef2
        ),
        updateFirebaseNode(
          url = "/usersTemplates/projects/" + userEmail2 + "/" + selectedCase.id,
          updateNodeObject = selectedCase,
          dbRef2
        ),
        updateFirebaseNode(
          url = "/usersCraft/" + userEmail2 + "/posts/" + selectedCase.id,
          updateNodeObject = selectedCase,
          dbRef2
        ),
        updateFirebaseNode(
          url = "/currentDay/" + currentDay2 + "/posts/" + selectedCase.id,
          updateNodeObject = selectedCase,
          dbRef2
        )
      ]).then((values) => {
        console.log("Updated paths " + values);
      });
    });
  }
  function asyncSeedCurrentWorkStore(url2 = "https://fincalculations.firebaseio.com/", destination = "selectedDictionary") {
    return __async(this, null, function* () {
      console.log("loadCurrentWork");
      try {
        let currentDay2 = new Intl.DateTimeFormat("en", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(new Date(2021, 5, 16)).replace(/[^a-zA-Z0-9]/g, "_");
        const res = yield instanceAxios.get(`https://fincalculations.firebaseio.com/currentDay/${"Wed__Jun_16__2021"}/posts.json`);
        let posts = Object.keys(res.data).map((objKey) => res.data[objKey]);
        console.log(posts);
      } catch (err) {
        throw new Error("Unable to get a node " + url2);
      }
    });
  }

  // src/react/accountingwithprofitscash/index.js
  var instanceReact2 = window.React;
  var instanceReactRedux = window.ReactRedux;
  var useForm = window.ReactHookForm.useForm;
  var Row = ReactBootstrap.Row;
  var Col = ReactBootstrap.Col;
  var Form = ReactBootstrap.Form;
  var Button = ReactBootstrap.Button;
  var Container = ReactBootstrap.Container;
  var Navbar = ReactBootstrap.Navbar;
  var Dropdown = ReactBootstrap.Dropdown;
  var DropdownButton = ReactBootstrap.DropdownButton;
  var firebaseConfig = {
    apiKey: "AIzaSyDUamZR2aXuP2rFG1AFpb1Ni8aZA5uhSj4",
    authDomain: "fincalculations.firebaseapp.com",
    databaseURL: "https://fincalculations.firebaseio.com",
    projectId: "fincalculations",
    storageBucket: "fincalculations.appspot.com",
    messagingSenderId: "892270777573",
    appId: "1:892270777573:web:bdc13e9b47334b4319700c"
  };
  firebase.initializeApp(firebaseConfig);
  var dbRef = firebase.database().ref();
  var _a;
  var application = (_a = loadBrowserState("econolabs")) == null ? void 0 : _a.application;
  var userEmail = !!(application == null ? void 0 : application.email) ? application.email.replace(/[^a-zA-Z0-9]/g, "_") : "test_gmail_com";
  if (!!application) {
    setStoreObject("email", application.email);
    setStoreObject("user", application.user);
    const initialAsyncSeedStoreTasksToDo = [
      {
        task: "seedStoreArray",
        destination: "caseLayout",
        items: [
          { id: "showselectcase", status: true, label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442" },
          { id: "showbalance", status: true, label: "\u0411\u0430\u043B\u0430\u043D\u0441" },
          { id: "showbalancestackedbars", status: false, label: "\u0414\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430" },
          { id: "showfinancialresults", status: false, label: "\u0424\u0438\u043D\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B" },
          { id: "showcashflow", status: false, label: "Cash Flow" },
          { id: "showaccountingmachine", status: true, label: "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C" },
          { id: "showcreatecase", status: true, label: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442" },
          { id: "showrecordslist", status: true, label: "\u0421\u043F\u0438\u0441\u043E\u043A \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439" },
          { id: "showlogin", status: false, label: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C" }
        ]
      },
      { task: "wait", duration: 275 },
      {
        task: "seedStoreArrayAxios",
        url: "https://fincalculations.firebaseio.com/usersCraft/" + userEmail + "/posts.json",
        destination: "casesArray",
        filterByType: "accountingwithprofitscash"
      },
      { task: "wait", duration: 275 },
      {
        task: "seedStoreArrayAxios",
        url: "https://fincalculations.firebaseio.com/opendictionaries/balanceIndicators.json",
        destination: "dictionaryArray"
      },
      { task: "wait", duration: 275 }
    ];
    store.dispatch(sequentialSolution(initialAsyncSeedStoreTasksToDo));
  } else {
    setStoreObject("loading", true);
    seedStoreArray("caseLayout", [{ id: "showlogin", status: true, label: "Login" }]);
  }
  function Login() {
    const { register, handleSubmit } = useForm();
    const showloginStatus = instanceReactRedux.useSelector((state) => {
      var _a2;
      return (_a2 = state.caseLayout.find((item) => item.id === "showlogin")) == null ? void 0 : _a2.status;
    });
    const email = instanceReactRedux.useSelector((state) => state.email);
    const user = instanceReactRedux.useSelector((state) => state.user);
    const onSubmit = (application2) => {
      saveBrowserState("econolabs", { application: application2 });
      setTimeout(window.location.reload(), 1e3);
    };
    if (showloginStatus) {
      return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Form, {
        onSubmit: handleSubmit(onSubmit),
        className: "p-3"
      }, /* @__PURE__ */ React.createElement(Form.Group, {
        className: "mb-3",
        controlId: "formEmail"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "Email"), /* @__PURE__ */ React.createElement(Form.Control, __spreadProps(__spreadValues({
        type: "email",
        placeholder: !!email && email.length > 6 ? email : "email"
      }, register("email")), {
        required: true
      })), /* @__PURE__ */ React.createElement(Form.Text, {
        className: "text-muted"
      }, "\u041F\u0430\u0440\u043E\u043B\u044C \u041D\u0415 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F")), /* @__PURE__ */ React.createElement(Form.Group, {
        className: "mb-3",
        controlId: "formUser"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u0424\u0418\u041E \u0413\u0440\u0443\u043F\u043F\u0430"), /* @__PURE__ */ React.createElement(Form.Control, __spreadProps(__spreadValues({
        type: "text",
        placeholder: !!user && user.length > 6 ? user : "\u0424\u0418\u041E \u0413\u0440\u0443\u043F\u043F\u0430"
      }, register("user")), {
        required: true
      }))), /* @__PURE__ */ React.createElement(Button, {
        variant: "outline-secondary",
        size: "sm",
        type: "submit"
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")));
    }
    return null;
  }
  function BlogNavBar() {
    return /* @__PURE__ */ React.createElement(Navbar, null, /* @__PURE__ */ React.createElement(Navbar.Brand, {
      href: "#home",
      style: { marginLeft: "1rem" }
    }, "Financelabs"), /* @__PURE__ */ React.createElement(Navbar.Toggle, null), /* @__PURE__ */ React.createElement(Navbar.Collapse, {
      className: "justify-content-end"
    }, /* @__PURE__ */ React.createElement(Navbar.Text, null, /* @__PURE__ */ React.createElement("a", {
      href: "/"
    }, /* @__PURE__ */ React.createElement("img", {
      src: "https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1",
      alt: "",
      style: {
        marginRight: "1rem",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        filter: "grayscale(100%)",
        objectFit: "cover"
      }
    })))));
  }
  function AccountingNavBar() {
    const caseLayout = instanceReactRedux.useSelector((state) => state.caseLayout);
    if (caseLayout.length > 0) {
      let doToggle = function(id, status) {
        let updatedCaseLayout = caseLayout.map((obj) => {
          if (obj.id === id) {
            return { id: obj.id, label: obj.label, status };
          }
          return obj;
        });
        seedStoreArray("caseLayout", updatedCaseLayout);
      };
      return /* @__PURE__ */ React.createElement("div", {
        className: "container p-2"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "row g-3 align-items-center"
      }, caseLayout.map((item) => /* @__PURE__ */ React.createElement("div", {
        className: "col-auto",
        key: item.id
      }, /* @__PURE__ */ React.createElement("div", {
        className: "form-check"
      }, /* @__PURE__ */ React.createElement("input", {
        className: "form-check-input",
        type: "checkbox",
        checked: item.status,
        id: item.id,
        onChange: () => doToggle(item.id, !item.status)
      }), /* @__PURE__ */ React.createElement("label", {
        className: "form-check-label",
        htmlFor: item.id
      }, item.label))))));
    }
    return null;
  }
  function SelectCase() {
    const showselectcaseStatus = instanceReactRedux.useSelector((state) => {
      var _a2;
      return (_a2 = state.caseLayout.find((item) => item.id === "showselectcase")) == null ? void 0 : _a2.status;
    });
    const casesArray = instanceReactRedux.useSelector((state) => state.casesArray);
    if (showselectcaseStatus) {
      let doSelect = function(item) {
        setStoreObject("selectedCase", item);
        seedStoreArray("caseArray", !!(item == null ? void 0 : item.content) ? item.content : []);
      };
      return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Container, null, casesArray.map(
        (item) => /* @__PURE__ */ React.createElement(Row, {
          key: item.id,
          className: "p-1"
        }, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("small", null, item.title)), /* @__PURE__ */ React.createElement(Col, null, item.date), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Button, {
          variant: "outline-secondary",
          size: "sm",
          onClick: () => doSelect(item)
        }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")))
      )));
    } else {
      return null;
    }
  }
  function CreateCase() {
    const { register, handleSubmit } = useForm();
    const showcreatecaseStatus = instanceReactRedux.useSelector((state) => {
      var _a2;
      return (_a2 = state.caseLayout.find((item) => item.id === "showcreatecase")) == null ? void 0 : _a2.status;
    });
    const user = instanceReactRedux.useSelector((state) => state.user);
    const email = instanceReactRedux.useSelector((state) => state.email);
    const avatarUrl = instanceReactRedux.useSelector((state) => state.avatarUrl);
    if (showcreatecaseStatus) {
      let onSubmit = function(data) {
        console.log(data);
        let idPost = firebase.database().ref(userEmail).child("posts").push().key;
        let selectedCase = {
          id: idPost,
          title: data.title,
          theme: "\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0431\u044E\u0434\u0436\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
          answer: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u043D\u0430\u044F \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C",
          comment: data.comment,
          type: "accountingwithprofitscash",
          content: [],
          quizString: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u043D\u0430\u044F \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C",
          deleted: false,
          email,
          user,
          avatarUrl: !!avatarUrl ? avatarUrl : null,
          date: new Intl.DateTimeFormat("ru", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
          }).format(new Date())
        };
        updateAccountingWithProfitsCashProject(dbRef, selectedCase, userEmail).then(() => window.location.reload());
      };
      return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Form, {
        onSubmit: handleSubmit(onSubmit),
        className: "p-3"
      }, /* @__PURE__ */ React.createElement(Form.Group, {
        className: "mb-3",
        controlId: "formTitle"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"), /* @__PURE__ */ React.createElement(Form.Control, __spreadProps(__spreadValues({
        type: "text",
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
      }, register("title")), {
        required: true
      })), /* @__PURE__ */ React.createElement(Form.Text, {
        className: "text-muted"
      }, "\u0416\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u044C \u0441\u0443\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u0430 (\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E) \u0438 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0430\u0442\u0443 \u0438\u043B\u0438 \u043C\u0435\u0441\u044F\u0446 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430")), /* @__PURE__ */ React.createElement(Form.Group, {
        className: "mb-3",
        controlId: "formComment"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /* @__PURE__ */ React.createElement(Form.Control, __spreadValues({
        type: "text",
        placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"
      }, register("comment"))), /* @__PURE__ */ React.createElement(Form.Text, {
        className: "text-muted"
      }, "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 (\u0431\u0430\u0437\u043E\u0432\u044B\u0439, \u043E\u043F\u0442\u0438\u043C\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439, \u043F\u0435\u0441\u0441\u0438\u043C\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439, \u0440\u0430\u0437\u043D\u043E\u0441\u0442\u043D\u044B\u0439)")), /* @__PURE__ */ React.createElement(Button, {
        variant: "outline-secondary",
        size: "sm",
        type: "submit"
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))));
    } else {
      return null;
    }
  }
  function ShowBalanceStackedBars() {
    const loading = instanceReactRedux.useSelector((state) => state.loading);
    const showbalancestackedbars = instanceReactRedux.useSelector((state) => {
      var _a2;
      return (_a2 = state.caseLayout.find((item) => item.id === "showbalancestackedbars")) == null ? void 0 : _a2.status;
    });
    const caseRecords = instanceReactRedux.useSelector((state) => state.caseArray);
    const periods = instanceReactRedux.useSelector((state) => state.casePeriods);
    const colors = instanceReactRedux.useSelector((state) => state.caseColors);
    const balanceIndicators2 = instanceReactRedux.useSelector((state) => state.dictionaryArray);
    if (showbalancestackedbars && !loading) {
      let series = [];
      balanceIndicators2.forEach((element) => {
        if (element.title.length > 2) {
          series.push({
            name: element.title,
            data: processBalanceIndicatorForStackedBarsChart(element.title, caseRecords, periods, balanceIndicators2)
          });
        }
      });
      let categories = [];
      periods.forEach((period) => {
        categories.push("A\u043A\u0442 " + period);
        categories.push("\u041F\u0430\u0441 " + period);
      });
      let options = {
        chart: { type: "bar", stacked: true, zoom: { enabled: true } },
        plotOptions: { bar: { borderRadius: 8, horizontal: false } },
        legend: { position: "bottom" },
        fill: { opacity: 1 },
        colors,
        xaxis: { categories }
      };
      return /* @__PURE__ */ React.createElement("div", {
        className: "container mb-5 animated fadeIn"
      }, /* @__PURE__ */ React.createElement(Chart_default, {
        options,
        series,
        type: "bar"
      }));
    }
    return null;
  }
  function RecordsFilter() {
    const loading = instanceReactRedux.useSelector((state) => state.loading);
    const showrecordslistStatus = instanceReactRedux.useSelector((state) => {
      var _a2;
      return (_a2 = state.caseLayout.find((item) => item.id === "showrecordslist")) == null ? void 0 : _a2.status;
    });
    if (!!showrecordslistStatus && !loading) {
      let setFilter = function(filter) {
        console.log(filter);
        setStoreObject("selectedFilter", filter);
      };
      return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(DropdownButton, {
        id: "dropdown-item-button",
        title: "\u0424\u0438\u043B\u044C\u0442\u0440 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439",
        className: "m-3"
      }, /* @__PURE__ */ React.createElement(Dropdown.ItemText, null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0438\u043B\u044C\u0442\u0440"), /* @__PURE__ */ React.createElement(Dropdown.Item, {
        as: "button",
        onClick: () => setFilter("allrecords")
      }, "\u0412\u0441\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"), /* @__PURE__ */ React.createElement(Dropdown.Item, {
        as: "button",
        onClick: () => setFilter("profits")
      }, "\u0414\u043E\u0445\u043E\u0434\u044B, \u0440\u0430\u0441\u0445\u043E\u0434\u044B, \u043F\u0440\u0438\u0431\u044B\u043B\u044C"), /* @__PURE__ */ React.createElement(Dropdown.Item, {
        as: "button",
        onClick: () => setFilter("cashflows")
      }, "\u0414\u0435\u043D\u044C\u0433\u0438"), /* @__PURE__ */ React.createElement(Dropdown.Item, {
        as: "button",
        onClick: () => setFilter("costs")
      }, "\u0417\u0430\u0442\u0440\u0430\u0442\u044B"), /* @__PURE__ */ React.createElement(Dropdown.Item, {
        as: "button",
        onClick: () => setFilter("accountsreceivable")
      }, "\u0414\u0435\u0431\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C"), /* @__PURE__ */ React.createElement(Dropdown.Item, {
        as: "button",
        onClick: () => setFilter("accountspayable")
      }, "\u041A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C")));
    }
    return null;
  }
  function RecordsList() {
    const loading = instanceReactRedux.useSelector((state) => state.loading);
    const showrecordslistStatus = instanceReactRedux.useSelector((state) => {
      var _a2;
      return (_a2 = state.caseLayout.find((item) => item.id === "showrecordslist")) == null ? void 0 : _a2.status;
    });
    const selectedFilter = instanceReactRedux.useSelector((state) => state.selectedFilter);
    const caseRecords = instanceReactRedux.useSelector((state) => state.caseArray);
    if (!!showrecordslistStatus && !loading) {
      let filteredCaseRecords = [];
      switch (selectedFilter) {
        case null:
          filteredCaseRecords = caseRecords;
          break;
        case "allrecords":
          filteredCaseRecords = caseRecords;
          break;
        case "profits":
          filteredCaseRecords = caseRecords.filter((item) => item.d === "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C" || item.k === "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C");
          break;
        case "cashflows":
          filteredCaseRecords = caseRecords.filter((item) => item.d === "\u0414\u0435\u043D\u044C\u0433\u0438" || item.k === "\u0414\u0435\u043D\u044C\u0433\u0438");
          break;
        case "costs":
          filteredCaseRecords = caseRecords.filter((item) => item.d === "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E" || item.k === "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E");
          break;
        case "accountsreceivable":
          filteredCaseRecords = caseRecords.filter((item) => item.d === "\u0414\u0435\u0431\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C" || item.k === "\u0414\u0435\u0431\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C");
          break;
        case "accountspayable":
          filteredCaseRecords = caseRecords.filter((item) => item.d === "\u041A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C" || item.k === "\u041A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C");
          break;
        default:
          filteredCaseRecords = caseRecords;
      }
      return /* @__PURE__ */ React.createElement("div", {
        className: "container mb-5 animated fadeIn"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "table adaptive mt-3 mb-3"
      }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "\u041F\u0435\u0440\u0438\u043E\u0434"), /* @__PURE__ */ React.createElement("th", null, "\u0414"), /* @__PURE__ */ React.createElement("th", null, "\u041A"), /* @__PURE__ */ React.createElement("th", null, "\u0421\u0443\u043C\u043C\u0430"), /* @__PURE__ */ React.createElement("th", null, "\u0422\u0438\u043F"))), /* @__PURE__ */ React.createElement("tbody", null, filteredCaseRecords.map(
        (row, index) => /* @__PURE__ */ React.createElement("tr", {
          key: index
        }, /* @__PURE__ */ React.createElement("td", {
          "data-label": "\u041F\u0435\u0440\u0438\u043E\u0434"
        }, row.period), /* @__PURE__ */ React.createElement("td", {
          "data-label": "\u0414"
        }, row.d), /* @__PURE__ */ React.createElement("td", {
          "data-label": "\u041A"
        }, row.k), /* @__PURE__ */ React.createElement("td", {
          "data-label": "\u0421\u0443\u043C\u043C\u0430"
        }, row.sum), !!(row == null ? void 0 : row.type) ? /* @__PURE__ */ React.createElement("td", {
          "data-label": "\u0422\u0438\u043F"
        }, row.type) : null)
      )))));
    }
    return null;
  }
  function ShowFinancialResults() {
    const showfinancialresults = instanceReactRedux.useSelector((state) => {
      var _a2;
      return (_a2 = state.caseLayout.find((item) => item.id === "showfinancialresults")) == null ? void 0 : _a2.status;
    });
    const loading = instanceReactRedux.useSelector((state) => state.loading);
    const caseRecords = instanceReactRedux.useSelector((state) => state.caseArray);
    const periods = instanceReactRedux.useSelector((state) => state.casePeriods);
    if (showfinancialresults && !loading) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "container mb-5 animated fadeIn"
      }, /* @__PURE__ */ React.createElement(Row, {
        className: "bg-secondary text-white"
      }, ["\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B", ...periods].map((item, index) => /* @__PURE__ */ React.createElement(Col, {
        key: index,
        xs: index > 0 ? 2 : 4
      }, item))), [
        "\u0412\u044B\u0440\u0443\u0447\u043A\u0430",
        "\u0421\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438, \u0440\u0430\u0431\u043E\u0442, \u0443\u0441\u043B\u0443\u0433",
        "\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B",
        "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B",
        "\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u043A \u0443\u043F\u043B\u0430\u0442\u0435",
        "\u041F\u0440\u043E\u0447\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B",
        "\u041D\u0430\u043B\u043E\u0433 \u043D\u0430 \u043F\u0440\u0438\u0431\u044B\u043B\u044C",
        "\u0414\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B \u043A \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044E"
      ].map(
        (row, indexRow) => /* @__PURE__ */ React.createElement(Row, {
          key: indexRow
        }, [row, ...periods].map(
          (item, index) => /* @__PURE__ */ React.createElement(Col, {
            key: index,
            xs: index > 0 ? 2 : 4
          }, index === 0 ? row : checkTypePeriod(caseRecords, row, periods[index - 1]))
        ))
      ));
    }
    return null;
  }
  function ShowCashFlow() {
    const showcashflow = instanceReactRedux.useSelector((state) => {
      var _a2;
      return (_a2 = state.caseLayout.find((item) => item.id === "showcashflow")) == null ? void 0 : _a2.status;
    });
    const loading = instanceReactRedux.useSelector((state) => state.loading);
    const caseRecords = instanceReactRedux.useSelector((state) => state.caseArray);
    const periods = instanceReactRedux.useSelector((state) => state.casePeriods);
    if (showcashflow && !loading) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "container mb-5 animated fadeIn"
      }, /* @__PURE__ */ React.createElement(Row, {
        className: "bg-secondary text-white"
      }, ["\u041A\u044D\u0448-\u0444\u043B\u043E", ...periods].map((item, index) => /* @__PURE__ */ React.createElement(Col, {
        key: index,
        xs: index > 0 ? 2 : 4
      }, item))), ["\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438", "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438", "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438", "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043F\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438", "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438", "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043F\u043E \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438"].map(
        (row, indexRow) => /* @__PURE__ */ React.createElement(Row, {
          key: indexRow
        }, [row, ...periods].map(
          (item, index) => /* @__PURE__ */ React.createElement(Col, {
            key: index,
            xs: index > 0 ? 2 : 4
          }, index === 0 ? row : checkTypePeriod(caseRecords, row, periods[index - 1]))
        ))
      ));
      return null;
    }
  }
  function ShowBalance() {
    const showbalanceStatus = instanceReactRedux.useSelector((state) => {
      var _a2;
      return (_a2 = state.caseLayout.find((item) => item.id === "showbalance")) == null ? void 0 : _a2.status;
    });
    const loading = instanceReactRedux.useSelector((state) => state.loading);
    const caseRecords = instanceReactRedux.useSelector((state) => state.caseArray);
    const periods = instanceReactRedux.useSelector((state) => state.casePeriods);
    const balanceIndicators2 = instanceReactRedux.useSelector((state) => state.dictionaryArray);
    if (showbalanceStatus && !loading) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "container mb-5 animated fadeIn"
      }, /* @__PURE__ */ React.createElement(Row, {
        className: "bg-secondary text-white"
      }, ["\u0410\u043A\u0442\u0438\u0432\u044B", ...periods].map((item, index) => /* @__PURE__ */ React.createElement(Col, {
        key: item,
        xs: index > 0 ? 2 : 4
      }, item))), balanceIndicators2.filter((item) => item.type === "asset" && item.title.length > 2).map((element, rowIndex) => {
        return /* @__PURE__ */ React.createElement(Row, {
          key: rowIndex
        }, [element.title, ...periods].map((item, colIndex) => {
          return /* @__PURE__ */ React.createElement(Col, {
            key: item,
            xs: colIndex > 0 ? 2 : 4
          }, colIndex === 0 ? element.title : processRecords({
            indicator: element.title,
            balanceIndicators: balanceIndicators2,
            records: caseRecords,
            periods,
            period: periods[colIndex - 1]
          }));
        }));
      }), /* @__PURE__ */ React.createElement(Row, {
        className: "bg-secondary text-white"
      }, ["\u041F\u0430\u0441\u0441\u0438\u0432\u044B", ...periods].map((item, index) => /* @__PURE__ */ React.createElement(Col, {
        key: item,
        xs: index > 0 ? 2 : 4
      }, item))), balanceIndicators2.filter((item) => item.type !== "asset" && item.title.length > 2).map((element, rowIndex) => {
        return /* @__PURE__ */ React.createElement(Row, {
          key: rowIndex
        }, [element.title, ...periods].map((item, colIndex) => {
          return /* @__PURE__ */ React.createElement(Col, {
            key: item,
            xs: colIndex > 0 ? 2 : 4
          }, colIndex === 0 ? element.title : processRecords({
            indicator: element.title,
            balanceIndicators: balanceIndicators2,
            records: caseRecords,
            periods,
            period: periods[colIndex - 1]
          }));
        }));
      }));
    }
    return null;
  }
  function AccountingMachine() {
    const showaccountingmachine = instanceReactRedux.useSelector((state) => {
      var _a2;
      return (_a2 = state.caseLayout.find((item) => item.id === "showaccountingmachine")) == null ? void 0 : _a2.status;
    });
    const selectedCase = instanceReactRedux.useSelector((state) => state.selectedCase);
    const loading = instanceReactRedux.useSelector((state) => state.loading);
    const periods = instanceReactRedux.useSelector((state) => state.casePeriods);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    if (showaccountingmachine && !loading) {
      const onSubmit = (bookentry) => {
        updateAccountingWithProfitsCashProject(dbRef, __spreadProps(__spreadValues({}, selectedCase), {
          content: !!(selectedCase == null ? void 0 : selectedCase.content) && Array.isArray(selectedCase.content) && selectedCase.content.length > 0 ? [...selectedCase.content, bookentry] : [bookentry]
        }), userEmail).then(() => reset({ period: "...", d: "...", k: "...", sum: 0 }));
      };
      const capitalIncrease = watch("k") === "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C" ? true : false;
      const capitalDecrease = watch("d") === "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C" ? true : false;
      const cashIncrease = watch("d") === "\u0414\u0435\u043D\u044C\u0433\u0438" ? true : false;
      const cashDecrease = watch("k") === "\u0414\u0435\u043D\u044C\u0433\u0438" ? true : false;
      const costsCalculation = watch("d") === "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E" ? true : false;
      return /* @__PURE__ */ React.createElement("div", {
        className: "container"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "p-3 mb-2 mt-2 bg-secondary text-white"
      }, "\u041D\u043E\u0432\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F"), /* @__PURE__ */ React.createElement(Form, {
        onSubmit: handleSubmit(onSubmit)
      }, /* @__PURE__ */ React.createElement(Row, {
        className: "mb-3"
      }, /* @__PURE__ */ React.createElement(Form.Group, {
        as: Col,
        controlId: "formStatePeriod"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u041F\u0435\u0440\u0438\u043E\u0434"), /* @__PURE__ */ React.createElement(Form.Control, __spreadProps(__spreadValues({
        as: "select"
      }, register("period")), {
        required: true
      }), ["...", ...periods].map((item) => /* @__PURE__ */ React.createElement("option", {
        key: item
      }, item)))), errors.period && /* @__PURE__ */ React.createElement("p", {
        className: "text-danger"
      }, errors.period.message)), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Form.Group, {
        as: Col,
        controlId: "formStateD"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u0410\u043A\u0442\u0438\u0432+ \u0438\u043B\u0438 \u041F\u0430\u0441\u0441\u0438\u0432- (\u0414\u0442)"), /* @__PURE__ */ React.createElement(Form.Control, __spreadValues({
        as: "select"
      }, register("d", { required: true })), /* @__PURE__ */ React.createElement("option", null, "..."), /* @__PURE__ */ React.createElement("option", null, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"), /* @__PURE__ */ React.createElement("option", null, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"), /* @__PURE__ */ React.createElement("option", null, "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E"), /* @__PURE__ */ React.createElement("option", null, "\u0413\u043E\u0442\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"), /* @__PURE__ */ React.createElement("option", null, "\u0414\u0435\u0431\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C"), /* @__PURE__ */ React.createElement("option", null, "\u0414\u0435\u043D\u044C\u0433\u0438"), /* @__PURE__ */ React.createElement("option", null, "\u0423\u0441\u0442\u0430\u0432\u043D\u044B\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B"), /* @__PURE__ */ React.createElement("option", null, "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C"), /* @__PURE__ */ React.createElement("option", null, "\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442"), /* @__PURE__ */ React.createElement("option", null, "\u041A\u0440\u0430\u0442\u043A\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442"), /* @__PURE__ */ React.createElement("option", null, "\u041A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C")), errors.d && /* @__PURE__ */ React.createElement("p", {
        className: "text-danger"
      }, errors.d.message)), /* @__PURE__ */ React.createElement(Form.Group, {
        as: Col,
        controlId: "formStateK"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u0410\u043A\u0442\u0438\u0432- \u0438\u043B\u0438 \u041F\u0430\u0441\u0441\u0438\u0432+ (\u041A\u0442)"), /* @__PURE__ */ React.createElement(Form.Control, __spreadValues({
        as: "select"
      }, register("k", { required: true })), /* @__PURE__ */ React.createElement("option", null, "..."), /* @__PURE__ */ React.createElement("option", null, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"), /* @__PURE__ */ React.createElement("option", null, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"), /* @__PURE__ */ React.createElement("option", null, "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E"), /* @__PURE__ */ React.createElement("option", null, "\u0413\u043E\u0442\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"), /* @__PURE__ */ React.createElement("option", null, "\u0414\u0435\u0431\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C"), /* @__PURE__ */ React.createElement("option", null, "\u0414\u0435\u043D\u044C\u0433\u0438"), /* @__PURE__ */ React.createElement("option", null, "\u0423\u0441\u0442\u0430\u0432\u043D\u044B\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B"), /* @__PURE__ */ React.createElement("option", null, "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C"), /* @__PURE__ */ React.createElement("option", null, "\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442"), /* @__PURE__ */ React.createElement("option", null, "\u041A\u0440\u0430\u0442\u043A\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442"), /* @__PURE__ */ React.createElement("option", null, "\u041A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C")), errors.k && /* @__PURE__ */ React.createElement("p", {
        className: "text-danger"
      }, errors.k.message)), /* @__PURE__ */ React.createElement(Form.Group, {
        as: Col,
        controlId: "formStateSum"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u0421\u0443\u043C\u043C\u0430"), /* @__PURE__ */ React.createElement(Form.Control, __spreadValues({
        as: "input"
      }, register("sum", { required: true }))), errors.sum && /* @__PURE__ */ React.createElement("p", {
        className: "text-danger"
      }, errors.sum.message))), capitalIncrease ? /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Form.Group, {
        as: Col,
        controlId: "formCapitalIncrease"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0430 (\u043F\u0440\u0438\u0431\u044B\u043B\u044C, \u0434\u043E\u0445\u043E\u0434)"), /* @__PURE__ */ React.createElement(Form.Control, __spreadValues({
        as: "select",
        name: "type"
      }, register("type", { required: true })), /* @__PURE__ */ React.createElement("option", null, "..."), /* @__PURE__ */ React.createElement("option", null, "\u0412\u044B\u0440\u0443\u0447\u043A\u0430"), /* @__PURE__ */ React.createElement("option", null, "\u041F\u0440\u043E\u0447\u0438\u0435 \u0434\u043E\u0445\u043E\u0434\u044B"), /* @__PURE__ */ React.createElement("option", null, "\u0414\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B \u043A \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044E"), /* @__PURE__ */ React.createElement("option", null, "\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u043A \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044E")))) : null, capitalDecrease ? /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Form.Group, {
        as: Col,
        controlId: "formCapitalDecrease"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435 \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0430 (\u0443\u0431\u044B\u0442\u043E\u043A, \u0440\u0430\u0441\u0445\u043E\u0434\u044B)"), /* @__PURE__ */ React.createElement(Form.Control, __spreadValues({
        as: "select"
      }, register("type", { required: true })), /* @__PURE__ */ React.createElement("option", null, "..."), /* @__PURE__ */ React.createElement("option", null, "\u0421\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438, \u0440\u0430\u0431\u043E\u0442, \u0443\u0441\u043B\u0443\u0433"), /* @__PURE__ */ React.createElement("option", null, "\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B"), /* @__PURE__ */ React.createElement("option", null, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B"), /* @__PURE__ */ React.createElement("option", null, "\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u043A \u0443\u043F\u043B\u0430\u0442\u0435"), /* @__PURE__ */ React.createElement("option", null, "\u041F\u0440\u043E\u0447\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B"), /* @__PURE__ */ React.createElement("option", null, "\u041D\u0430\u043B\u043E\u0433 \u043D\u0430 \u043F\u0440\u0438\u0431\u044B\u043B\u044C"), /* @__PURE__ */ React.createElement("option", null, "\u0414\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B \u043A \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044E")))) : null, cashIncrease ? /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Form.Group, {
        as: Col,
        controlId: "formCashIncrease"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432"), /* @__PURE__ */ React.createElement(Form.Control, __spreadValues({
        as: "select",
        name: "type"
      }, register("type", { required: true })), /* @__PURE__ */ React.createElement("option", null, "..."), /* @__PURE__ */ React.createElement("option", null, "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /* @__PURE__ */ React.createElement("option", null, "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /* @__PURE__ */ React.createElement("option", null, "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438")))) : null, cashDecrease ? /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Form.Group, {
        as: Col,
        controlId: "formCashDecrease"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 (\u0432\u044B\u0431\u044B\u0442\u0438\u0435) \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432"), /* @__PURE__ */ React.createElement(Form.Control, __spreadValues({
        as: "select"
      }, register("type", { required: true })), /* @__PURE__ */ React.createElement("option", null, "..."), /* @__PURE__ */ React.createElement("option", null, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /* @__PURE__ */ React.createElement("option", null, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043F\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /* @__PURE__ */ React.createElement("option", null, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043F\u043E \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438")))) : null, costsCalculation ? /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Form.Group, {
        as: Col,
        controlId: "formCostsCalculation"
      }, /* @__PURE__ */ React.createElement(Form.Label, null, "\u0421\u0442\u0430\u0442\u044C\u044F \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0446\u0438\u0438"), /* @__PURE__ */ React.createElement(Form.Control, __spreadValues({
        as: "select"
      }, register("type", { required: true })), /* @__PURE__ */ React.createElement("option", null, "..."), /* @__PURE__ */ React.createElement("option", null, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B (\u041F\u0440\u044F\u043C\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B)"), /* @__PURE__ */ React.createElement("option", null, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0442\u0440\u0443\u0434\u0430 \u0438 \u0441\u043E\u0446\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 (\u041F\u0440\u044F\u043C\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B)"), /* @__PURE__ */ React.createElement("option", null, "\u0410\u043C\u043E\u0440\u0442\u0438\u0437\u0430\u0446\u0438\u044F (\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B)"), /* @__PURE__ */ React.createElement("option", null, "\u0423\u0441\u043B\u0443\u0433\u0438 \u0438 \u0440\u0430\u0431\u043E\u0442\u044B (\u041F\u0440\u044F\u043C\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B)"), /* @__PURE__ */ React.createElement("option", null, "\u0423\u0441\u043B\u0443\u0433\u0438 \u0438 \u0440\u0430\u0431\u043E\u0442\u044B (\u041A\u043E\u0441\u0432\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B)"), /* @__PURE__ */ React.createElement("option", null, "\u0420\u0435\u043A\u043B\u0430\u043C\u0430 (\u041A\u043E\u0441\u0432\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B)"), /* @__PURE__ */ React.createElement("option", null, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B (\u041A\u043E\u0441\u0432\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B)"), /* @__PURE__ */ React.createElement("option", null, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0442\u0440\u0443\u0434\u0430 \u0438 \u0441\u043E\u0446\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 (\u041A\u043E\u0441\u0432\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B)"), /* @__PURE__ */ React.createElement("option", null, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B (\u0434\u0440\u0443\u0433\u0438\u0435 \u041A\u043E\u0441\u0432\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B)"), /* @__PURE__ */ React.createElement("option", null, "\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B (\u0434\u0440\u0443\u0433\u0438\u0435 \u041A\u043E\u0441\u0432\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B)")))) : null, !(costsCalculation || cashIncrease || capitalDecrease || capitalIncrease || capitalDecrease) ? /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Form.Group, {
        as: Col
      }, /* @__PURE__ */ React.createElement(Form.Label, null, /* @__PURE__ */ React.createElement("small", null, "\u0411\u0435\u0437 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438")), /* @__PURE__ */ React.createElement(Form.Control, {
        type: "text",
        plaintext: true,
        readOnly: true,
        defaultValue: "-"
      }))) : null, /* @__PURE__ */ React.createElement(Button, {
        className: "m-1",
        variant: "outline-secondary",
        type: "submit"
      }, "\u041F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E")));
    }
    return null;
  }
  var container = document.getElementById("root");
  var root = ReactDOM.createRoot(container);
  root.render(/* @__PURE__ */ React.createElement(instanceReactRedux.Provider, {
    store
  }, /* @__PURE__ */ React.createElement(BlogNavBar, null), /* @__PURE__ */ React.createElement(Login, null), /* @__PURE__ */ React.createElement(SelectCase, null), /* @__PURE__ */ React.createElement(AccountingNavBar, null), /* @__PURE__ */ React.createElement(ShowBalance, null), /* @__PURE__ */ React.createElement(ShowBalanceStackedBars, null), /* @__PURE__ */ React.createElement(ShowFinancialResults, null), /* @__PURE__ */ React.createElement(ShowCashFlow, null), /* @__PURE__ */ React.createElement(AccountingMachine, null), /* @__PURE__ */ React.createElement(RecordsFilter, null), /* @__PURE__ */ React.createElement(RecordsList, null), /* @__PURE__ */ React.createElement(CreateCase, null)));
})();
//# sourceMappingURL=index.js.map
