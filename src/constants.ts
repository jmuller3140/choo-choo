export enum REGIONS {
  NORTHEAST,
  SOUTHEAST,
  NORTHCENTRAL,
  SOUTHCENTRAL,
  PLAINS,
  NORTHWEST,
  SOUTHWEST,
}

export const CITIES= {
  'NEW_YORK': REGIONS.NORTHEAST,
  'ALBANY': REGIONS.NORTHEAST,
  'BOSTON': REGIONS.NORTHEAST,
  'BUFFALO': REGIONS.NORTHEAST,
  'PORTLAND': REGIONS.NORTHEAST,
  'WASHINGTON': REGIONS.NORTHEAST,
  'PITTSBURGH': REGIONS.NORTHEAST,
  'PHILADELPHIA': REGIONS.NORTHEAST,
  'BALTIMORE': REGIONS.NORTHEAST,
  'CHARLOTTE': REGIONS.SOUTHEAST,
  'CHATTANOOGA': REGIONS.SOUTHEAST,
  'ATLANTA': REGIONS.SOUTHEAST,
  'RICHMOND': REGIONS.SOUTHEAST,
  'KNOXVILLE': REGIONS.SOUTHEAST,
  'MOBILE': REGIONS.SOUTHEAST,
  'NORFOLK': REGIONS.SOUTHEAST,
  'CHARLESTON': REGIONS.SOUTHEAST,
  'MIAMI': REGIONS.SOUTHEAST,
  'JACKSONVILLE': REGIONS.SOUTHEAST,
  'TAMPA': REGIONS.SOUTHEAST,
  'CLEVELAND': REGIONS.NORTHCENTRAL,
  'DETROIT': REGIONS.NORTHCENTRAL,
  'INDIANAPOLIS': REGIONS.NORTHCENTRAL,
  'MILWAUKEE': REGIONS.NORTHCENTRAL,
  'CINCINNATI': REGIONS.NORTHCENTRAL,
  'CHICAGO': REGIONS.NORTHCENTRAL,
  'COLUMBUS': REGIONS.NORTHCENTRAL,
  'ST_LOUIS': REGIONS.NORTHCENTRAL,
  'MEMPHIS': REGIONS.SOUTHCENTRAL,
  'LITTLE_ROCK': REGIONS.SOUTHCENTRAL,
  'NEW_ORLEANS': REGIONS.SOUTHCENTRAL,
  'BIRMINGHAM': REGIONS.SOUTHCENTRAL,
  'LOUISVILLE': REGIONS.SOUTHCENTRAL,
  'NASHVILLE': REGIONS.SOUTHCENTRAL,
  'SHREVEPORT': REGIONS.SOUTHCENTRAL,
  'DALLAS': REGIONS.SOUTHCENTRAL,
  'SAN_ANTONIO': REGIONS.SOUTHCENTRAL,
  'HOUSTON': REGIONS.SOUTHCENTRAL,
  'FORT_WORTH': REGIONS.SOUTHCENTRAL,
  'KANSAS_CITY': REGIONS.PLAINS,
  'DENVER': REGIONS.PLAINS,
  'PUEBLO': REGIONS.PLAINS,
  'OKLAHOMA_CITY': REGIONS.PLAINS,
  'ST_PAUL': REGIONS.PLAINS,
  'MINNEAPOLIS': REGIONS.PLAINS,
  'DES_MOINES': REGIONS.PLAINS,
  'OMAHA': REGIONS.PLAINS,
  'FARGO': REGIONS.PLAINS,
  'SPOKANE': REGIONS.NORTHWEST,
  'SEATTLE': REGIONS.NORTHWEST,
  'RAPID_CITY': REGIONS.NORTHWEST,
  'CASPER': REGIONS.NORTHWEST,
  'BILLINGS': REGIONS.NORTHWEST,
  'SALT_LAKE_CITY': REGIONS.NORTHWEST,
  'PORTLAND_OR': REGIONS.NORTHWEST,
  'POCATELLO': REGIONS.NORTHWEST,
  'BUTTE': REGIONS.NORTHWEST,
  'SAN_DIEGO': REGIONS.SOUTHWEST,
  'RENO': REGIONS.SOUTHWEST,
  'SACRAMENTO': REGIONS.SOUTHWEST,
  'LAS_VEGAS': REGIONS.SOUTHWEST,
  'PHOENIX': REGIONS.SOUTHWEST,
  'EL_PASO': REGIONS.SOUTHWEST,
  'TUCUMCARI': REGIONS.SOUTHWEST,
  'LOS_ANGELES': REGIONS.SOUTHWEST,
  'OAKLAND': REGIONS.SOUTHWEST,
  'SAN_FRANCISCO': REGIONS.SOUTHWEST,
}

export const CLASSIC_REGION = {
  0: {
    2: REGIONS.PLAINS,
    3: REGIONS.SOUTHEAST,
    4: REGIONS.SOUTHEAST,
    5: REGIONS.SOUTHEAST,
    6: REGIONS.NORTHCENTRAL,
    7: REGIONS.NORTHCENTRAL,
    8: REGIONS.NORTHEAST,
    9: REGIONS.NORTHEAST,
    10: REGIONS.NORTHEAST,
    11: REGIONS.NORTHEAST,
    12: REGIONS.NORTHEAST,
  },
  1: {
    2: REGIONS.SOUTHWEST,
    3: REGIONS.SOUTHCENTRAL,
    4: REGIONS.SOUTHCENTRAL,
    5: REGIONS.SOUTHCENTRAL,
    6: REGIONS.SOUTHWEST,
    7: REGIONS.SOUTHWEST,
    8: REGIONS.PLAINS,
    9: REGIONS.NORTHWEST,
    10: REGIONS.NORTHWEST,
    11: REGIONS.PLAINS,
    12: REGIONS.NORTHWEST,
  }
}

export const CLASSIC_NORTHEAST = {
  0: {
    2: 'NEW_YORK',
    3: 'NEW_YORK',
    4: 'NEW_YORK',
    5: 'ALBANY',
    6: 'BOSTON',
    7: 'BUFFALO',
    8: 'BOSTON',
    9: 'PORTLAND',
    10: 'NEW_YORK',
    11: 'NEW_YORK',
    12: 'NEW_YORK',
  },
  1: {
    2: 'NEW_YORK',
    3: 'WASHINGTON',
    4: 'PITTSBURGH',
    5: 'PITTSBURGH',
    6: 'PHILADELPHIA',
    7: 'WASHINGTON',
    8: 'PHILADELPHIA',
    9: 'BALTIMORE',
    10: 'BALTIMORE',
    11: 'BALTIMORE',
    12: 'NEW_YORK',
  }
}

export const CLASSIC_SOUTHEAST = {
  0: {
    2: 'CHARLOTTE',
    3: 'CHARLOTTE',
    4: 'CHATTANOOGA',
    5: 'ATLANTA',
    6: 'ATLANTA',
    7: 'ATLANTA',
    8: 'RICHMOND',
    9: 'KNOXVILLE',
    10: 'MOBILE',
    11: 'KNOXVILLE',
    12: 'MOBILE',
  },
  1: {
    2: 'NORFOLK',
    3: 'NORFOLK',
    4: 'NORFOLK',
    5: 'CHARLESTON',
    6: 'MIAMI',
    7: 'JACKSONVILLE',
    8: 'MIAMI',
    9: 'TAMPA',
    10: 'TAMPA',
    11: 'MOBILE',
    12: 'NORFOLK',
  }
}

export const CLASSIC_NORTHCENTRAL = {
  0: {
    2: 'CLEVELAND',
    3: 'CLEVELAND',
    4: 'CLEVELAND',
    5: 'CLEVELAND',
    6: 'DETROIT',
    7: 'DETROIT',
    8: 'INDIANAPOLIS',
    9: 'MILWAUKEE',
    10: 'MILWAUKEE',
    11: 'CHICAGO',
    12: 'MILWAUKEE',
  },
  1: {
    2: 'CINCINNATI',
    3: 'CHICAGO',
    4: 'CINCINNATI',
    5: 'CINCINNATI',
    6: 'COLUMBUS',
    7: 'CHICAGO',
    8: 'CHICAGO',
    9: 'ST_LOUIS',
    10: 'ST_LOUIS',
    11: 'ST_LOUIS',
    12: 'CHICAGO',
  }
}

export const CLASSIC_SOUTHCENTRAL = {
  0: {
    2: 'MEMPHIS',
    3: 'MEMPHIS',
    4: 'MEMPHIS',
    5: 'LITTLE_ROCK',
    6: 'NEW_ORLEANS',
    7: 'BIRMINGHAM',
    8: 'LOUISVILLE',
    9: 'NASHVILLE',
    10: 'NASHVILLE',
    11: 'LOUISVILLE',
    12: 'MEMPHIS',
  },
  1: {
    2: 'SHREVEPORT',
    3: 'SHREVEPORT',
    4: 'DALLAS',
    5: 'NEW_ORLEANS',
    6: 'DALLAS',
    7: 'SAN_ANTONIO',
    8: 'HOUSTON',
    9: 'HOUSTON',
    10: 'FORT_WORTH',
    11: 'FORT_WORTH',
    12: 'FORT_WORTH',
  }
}

export const CLASSIC_PLAINS = {
  0: {
    2: 'KANSAS_CITY',
    3: 'KANSAS_CITY',
    4: 'DENVER',
    5: 'DENVER',
    6: 'DENVER',
    7: 'KANSAS_CITY',
    8: 'KANSAS_CITY',
    9: 'KANSAS_CITY',
    10: 'PUEBLO',
    11: 'PUEBLO',
    12: 'OKLAHOMA_CITY',
  },
  1: {
    2: 'OKLAHOMA_CITY',
    3: 'ST_PAUL',
    4: 'MINNEAPOLIS',
    5: 'ST_PAUL',
    6: 'MINNEAPOLIS',
    7: 'OKLAHOMA_CITY',
    8: 'DES_MOINES',
    9: 'OMAHA',
    10: 'OMAHA',
    11: 'FARGO',
    12: 'FARGO',
  }
}

export const CLASSIC_NORTHWEST = {
  0: {
    2: 'SPOKANE',
    3: 'SPOKANE',
    4: 'SEATTLE',
    5: 'SEATTLE',
    6: 'SEATTLE',
    7: 'SEATTLE',
    8: 'RAPID_CITY',
    9: 'CASPER',
    10: 'BILLINGS',
    11: 'BILLINGS',
    12: 'SPOKANE',
  },
  1: {
    2: 'SPOKANE',
    3: 'SALT_LAKE_CITY',
    4: 'SALT_LAKE_CITY',
    5: 'SALT_LAKE_CITY',
    6: 'PORTLAND_OR',
    7: 'PORTLAND_OR',
    8: 'PORTLAND_OR',
    9: 'POCATELLO',
    10: 'BUTTE',
    11: 'BUTTE',
    12: 'PORTLAND_OR',
  }
}

export const CLASSIC_SOUTHWEST = {
  0: {
    2: 'SAN_DIEGO',
    3: 'SAN_DIEGO',
    4: 'RENO',
    5: 'SAN_DIEGO',
    6: 'SACRAMENTO',
    7: 'LAS_VEGAS',
    8: 'PHOENIX',
    9: 'EL_PASO',
    10: 'TUCUMCARI',
    11: 'PHOENIX',
    12: 'PHOENIX',
  },
  1: {
    2: 'LOS_ANGELES',
    3: 'OAKLAND',
    4: 'OAKLAND',
    5: 'OAKLAND',
    6: 'LOS_ANGELES',
    7: 'LOS_ANGELES',
    8: 'LOS_ANGELES',
    9: 'SAN_FRANCISCO',
    10: 'SAN_FRANCISCO',
    11: 'SAN_FRANCISCO',
    12: 'SAN_FRANCISCO',
  }
}