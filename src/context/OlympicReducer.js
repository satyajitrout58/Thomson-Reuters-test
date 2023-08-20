export const initialState = {
  error: null,
  medalList: [],
  sortedMedal: [],
  sortBy: "GOLD"
};

function shortByAlphabate(data) {
  data.sort((a, b) => a.code.localeCompare(b.code));
  const sortedWithTotal = data.map((val, key) => {
    return {
      ...val,
      total: val.gold + val.silver + val.bronze,
      position: 17 * key !== 0 ? -17 * key : 0
    };
  });
  return sortedWithTotal;
}
function sortByRule(data, rule1, rule2) {
  data.sort((a, b) => {
    let compare = b[rule1] - a[rule1];
    if (compare === 0) {
      compare = b[rule2] - a[rule2];
    }
    return compare;
  });
  return data.slice(0, 10);
}

function sortByMedal(sortType, data) {
  switch (sortType) {
    case "SILVER": {
      return sortByRule(data, "silver", "gold");
    }
    case "BRONZE": {
      return sortByRule(data, "bronze", "gold");
    }
    case "TOTAL": {
      return sortByRule(data, "total", "gold");
    }
    default: {
      //default case is gold
      return sortByRule(data, "gold", "silver");
    }
  }
}

export const OlympicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MEDAL_SUCCESS": {
      console.log(action);
      const data = shortByAlphabate(action.payload);
      const sortedMedal = sortByMedal("GOLD", data);
      return {
        ...state,
        medalList: data,
        sortedMedal,
        error: null
      };
    }
    case "SORT_MEDAL": {
      const sortedMedal = sortByMedal(action.payload, state.medalList);
      return {
        ...state,
        sortedMedal,
        sortBy: action.payload
      };
    }
    case "FETCH_MEDAL_FAIL":
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};
