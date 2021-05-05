var aapi_model = {
  baseURL: 'https://analytics.api.brightcove.com/v1',
  dimensionsArray: ['account', 'browser_type', 'city', 'country', 'date', 'date_hour', 'destination_domain', 'destination_path', 'device_os', 'device_manufacturer', 'device_type', 'live_stream', 'player', 'referrer_domain', 'region', 'search_terms', 'social_platform', 'source_type', 'video'],
  endpointGroups: {
    report: {
      name: 'report',
      endpoints: [{
        name: 'Report',
        path: '/data',
        methods: ['GET'],
        pathparams: [],
        urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to']
      }, {
        name: 'Available Date Range',
        path: '/data/status',
        methods: ['GET'],
        pathparams: [],
        urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'reconciled', 'from', 'to']
      }]
    },
    engagement: {
      name: 'engagement',
      endpoints: [{
        name: 'Account engagement',
        path: '/accounts/{account}',
        methods: ['GET'],
        pathparams: ['account'],
        urlparams: ['from', 'to']
      }, {
        name: 'Player engagement',
        path: '/accounts/{account_id}/players/{player}',
        methods: ['GET'],
        pathparams: ['account', 'player'],
        urlparams: ['from', 'to']
      }, {
        name: 'Video engagement',
        path: '/accounts/{account_id}/videos/{video_id}',
        methods: ['GET'],
        pathparams: ['account', 'video'],
        urlparams: ['from', 'to']
      }]
    },
    video_data: {
      name: 'Video Data (alltime video views)',
      endpoints: [{
        path: '/alltime/accounts/{account}/videos/{video}',
        methods: ['GET'],
        pathparams: ['account', 'video'],
        urlparams: []
      }]
    }
  },
  pathparams: {
    account: {
      name: 'account',
      required: true,
      description: 'The account id you want to report on',
      values: 'An account id',
      default: 'none'
    },
    player: {
      name: 'player',
      required: true,
      description: 'The player id you want to report on',
      values: 'An player id',
      default: 'none'
    },
    video: {
      name: 'video',
      required: true,
      description: 'The video id you want to report on',
      values: 'An video id',
      default: 'none'
    }
  },
  urlparams: {
    account: {
      name: 'account',
      required: true,
      description: 'The accounts you want to report on',
      values: 'one or more account ids as a comma-delimited list',
      default: 'none'
    },
    dimensions: {
      name: 'dimensions',
      required: true,
      description: 'The dimension(s) to report on',
      values: 'one or more dimensions as a comma-delimited list (some combinations are not valid)',
      default: 'none'
    },
    where: {
      name: 'where',
      required: false,
      description: 'Used to specify filters for reports',
      values: '{dimension}=={value} - one or more as a semi-colon-delimited list',
      default: 'none'
    },
    limit: {
      name: 'limit',
      required: false,
      description: 'Number of items to return',
      values: 'positive integer',
      default: 10
    },
    offset: {
      name: 'offset',
      required: false,
      description: 'Number of items to skip',
      values: 'positive integer',
      default: 0
    },
    sort: {
      name: 'sort',
      required: false,
      description: 'Field to sort items on',
      values: 'a valid field for the request',
      default: 'video_view'
    },
    fields: {
      name: 'fields',
      required: false,
      description: 'Fields to return',
      values: 'varies according to the dimension you are reporting on',
      default: 'video_view'
    },
    format: {
      name: 'format',
      required: false,
      description: 'Format to return results in',
      values: 'json | csv | xlxs',
      default: 'json'
    },
    reconciled: {
      name: 'reconciled',
      required: false,
      description: 'If included, will limit results to either historical or realtime data',
      values: 'true | false',
      default: 'true'
    },
    from: {
      name: 'from',
      required: false,
      description: 'The beginning of the date range for the request',
      values: 'An ISO 8601 date (YYYY-MM-DD), epoch time in milliseconds, the string alltime, or relative date (-1m); only dates within the past 32 days are allowed for engagement endpoints or if reconciled=false.',
      default: '30 days prior to now'
    },
    to: {
      name: 'to',
      required: false,
      description: 'The end of the date range for the request',
      values: 'An ISO 8601 date (YYYY-MM-DD), epoch time in milliseconds, the string now, or relative data (+7d); only dates within the past 32 days are allowed for engagement endpoints or if reconciled=false.',
      default: 'now'
    },
    bucket_limit: {
      name: 'bucket_limit',
      required: 'false',
      description: 'Used for Get Live Analytics time-series requests to specify the maximum number of points to be returned for a time-series.',
      default: 'none'
    },
    bucket_duration: {
      name: 'bucket_duration',
      required: 'false',
      description: 'Used for Get Live Analytics time-series requests to specify the intervals duration in the form of an integer plus m (minutes), h (hours), or d (days).',
      default: 'none'
    },
    metrics: {
      name: 'metrics',
      required: 'true',
      description: 'Used for Get Live Analytics time-series and Get Live Events requests to specify the metrics to return. Possible values are: "video_impression", "video_view", "video_seconds_viewed", "alive_ss_ad_start", "fingerprint_count", "ccu" (comma-delimited list).',
      default: 'none'
    }
  },
  dimensions: {
    account: {
      name: 'account',
      data_group: 'Account',
      description: 'In this topic, you will learn about the Analytics API account dimension. The account dimension is used to retrieve overall analytics data for the account.',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['account', 'account.name', 'active_media', 'ad_mode_begin', 'ad_mode_complete', 'bytes_delivered', 'daily_unique_viewers', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['The account dimension is not used as a filter.'],
      incompatible_dimensions: [],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=account'
      }, {
        filter: 'Not applicable'
      }]
    },
    browser_type: {
      name: 'browser_type',
      data_group: 'Browser Type',
      description: 'In this topic, you will learn about the Analytics API browser_type dimension. The browser_type dimension returns information about the browser that was used in viewing the player. Browsers are not broken down by device_type, but you can combine with with the device_type dimension, or use device_type as a filter.',
      from: '2016-08-30',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'browser_type', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['chrome', 'edge', 'firefox', 'ie', 'opera', 'safari', 'other'],
      incompatible_dimensions: ['city', 'destination_domain', 'destination_path', 'referrer_domain', 'search_terms', 'source_type'],
      samples: [{
          dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=browser_type'
        },
        {
          filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=player&where=browser_type==safari'
        }
      ]
    },
    city: {
      name: 'city',
      data_group: 'City',
      description: 'In this topic, you will learn about the Analytics API city dimension. The city dimension returns analytics data by city.',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'city', 'dma', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['A comma-delimited list of city names - e.g. Seattle,Boston,San%20Francisco'],
      incompatible_dimensions: [],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=city'
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=country&where=city==London,Boston,San%20Francisco&fields=city'
      }]
    },
    country: {
      name: 'country',
      data_group: 'Country',
      description: 'In this topic, you will learn about the Analytics API country dimension. The country dimension returns analytics data by country.',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'country', 'country_name', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['comma-delimited list of ISO-3611-1 country codes - e.g.: KO,US'],
      incompatible_dimensions: [],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=country'
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=city&where=country==US,GB,JA,KO&fields=country_name'
      }]
    },
    date: {
      name: 'date',
      data_group: 'Date',
      description: 'In this topic, you will learn about the Analytics API date dimension. The date dimension returns analytics for a single day. The user can specify the from and to parameters in yyyy-mm-dd format. This enables a user to query the analytics system to generate a report by days within the from and to date range. Any date range specified by the user will be interpreted to the current timezone for the account. The date ranges for the request are inclusive, exclusive i.e. if the user makes a request from=2013-09-24&to=2013-09-27, the response will include results from 2013-09-24 00:00:00 to 2013-09-27 00:00:00.',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['The date dimension is not used as a filter.'],
      incompatible_dimensions: ['city', 'country', 'destination_domain', 'destination_path', 'device_os', 'device_type', 'player', 'referrer_domain', 'region', 'search_terms', 'source_type'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=date'
      }, {
        filter: 'Not applicable'
      }]
    },
    date_hour: {
      name: 'date_hour',
      description: 'In this topic, you will learn about the Analytics API date_hour dimension. The date_hour dimension provides analytics data in hourly segments. The user can specify the from and to parameters in yyyy-MM-dd or epoch time in milliseconds format. To report over a span of hours, you will need to use the milliseconds format, with to and from values falling within the start and end hours that you want to query on. Any date range specified by the user will be interpreted to the current timezone for the account. date_hour reports are only valid for ranges within the past 32 days. If the from value is more than 32 days ago, an error will be returned.',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'limit', 'offset', 'sort', 'fields', 'format', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['The date_hour dimension is not used as a filter.'],
      incompatible_dimensions: ['account', 'city', 'country', 'destination_domain', 'destination_path', 'device_os', 'device_type', 'player', 'referrer_domain', 'region', 'search_terms', 'source_type', 'video'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=date_hour&from=-6h'
      }, {
        filter: 'Not applicable'
      }]
    },
    destination_domain: {
      name: 'destination_domain',
      data_group: 'Destination Domain',
      description: 'In this topic, you will learn about the Analytics API destination_domain dimension. The destination_domain dimension provides the domain where video views occurred.',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'destination_domain', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['The destination_domain dimension is not used as a filter.'],
      incompatible_dimensions: ['city', 'country', 'device_os', 'device_type', 'referrer_domain', 'region', 'search_terms', 'source_type'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=destination_domain'
      }, {
        filter: 'Not applicable'
      }]
    },
    destination_path: {
      name: 'destination_path',
      data_group: 'Destination Path',
      description: 'In this topic, you will learn about the Analytics API destination_path dimension. The destination_path dimension provides the path where video views occurred. It is generally used together with the destination_domain dimension',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'destination_path', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['The destination_path dimension is not used as a filter.'],
      incompatible_dimensions: ['city', 'country', 'device_os', 'device_type', 'player', 'referrer_domain', 'region', 'search_terms', 'source_type', 'video'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=destination_path'
      }, {
        filter: 'Not applicable'
      }]
    },
    device_os: {
      name: 'device_os',
      data_group: 'Device OS',
      description: 'In this topic, you will learn about the Analytics API device_os dimension. The device_os dimension provides information about the operating system of the device that videos were viewed on.',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'device_os', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['android', 'bada', 'ios', 'rim', 'symbian', 'web_os', 'windows', 'os_x', 'mac', 'linux', 'other'],
      incompatible_dimensions: ['city', 'destination_domain', 'destination_path', 'referrer_domain', 'search_terms', 'source_type'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=device_os',
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=video&where=device_os==os_x,mac,ios'
      }]
    },
    device_manufacturer: {
      name: 'device_manufacturer',
      data_group: 'Device Manufacturer',
      description: 'In this topic, you will learn about the Analytics API device_manufacturer dimension. The device_manufacturer dimension provides information about the manufacturer of the device that videos were viewed on.',
      from: '2016-08-30',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'device_manufacturer', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'video_seconds_viewed'],
      filter_values: ['amazon', 'apple', 'asus', 'blackberry', 'fujitsu', 'google', 'htc', 'huawei', 'kyocera', 'lenovo', 'lg', 'micromax', 'microsoft', 'nintendo', 'panasonic', 'roku', 'samsung', 'sharp', 'sony', 'vizio', 'zte', 'other'],
      incompatible_dimensions: ['city', 'destination_domain', 'destination_path', 'referrer_domain', 'search_terms', 'source_type'],
      samples: [{
          dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=device_manufacturer'
        },
        {
          filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=device_type&where=device_manufacturer==apple'
        }
      ]
    },
    device_type: {
      name: 'device_type',
      data_group: 'Device Type',
      description: 'In this topic, you will learn about the Analytics API device_type dimension. The device_type dimension provides information about the type of the device that videos were viewed on.',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'device_type', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['mobile', 'tablet', 'tv', 'desktop', 'other'],
      incompatible_dimensions: ['city', 'destination_domain', 'destination_path', 'referrer_domain', 'search_terms', 'source_type'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=device_type'
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=video&where=device_type==mobile,tablet'
      }]
    },
    live_stream: {
      name: 'live_stream',
      description: 'In this topic, you will learn about the Analytics API live_stream dimension. The live_stream dimension provides analytics data on live streams.',
      from: '2017-02-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['bytes_delivered', 'origin_bytes_delivered', 'live_stream'],
      filter_values: [],
      incompatible_dimensions: ['account', 'browser_type', 'city', 'country', 'destination_domain', 'destination_path', 'device_os', 'device_manufacturer', 'device_type', 'player', 'referrer_domain', 'region', 'search_terms', 'social_platform', 'source_type', 'video'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=live_stream'
      }, {
        filter: 'Not applicable'
      }]
    },
    player: {
      name: 'player',
      data_group: 'Player',
      description: 'In this topic, you will learn about the Analytics API player dimension. The player dimension provides analytics for video players.',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'bytes_delivered', 'engagement_score', 'play_request', 'play_rate', 'player', 'player_load', 'player_name', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['player ids as a comma-delimited list'],
      incompatible_dimensions: ['city', 'destination_path', 'region', 'search_terms'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=player',
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=player&where=player==1925363807001'
      }]
    },
    referrer_domain: {
      name: 'referrer_domain',
      data_group: 'Referrer Domain',
      description: 'In this topic, you will learn about the Analytics API referrer_domain dimension. The referrer_domain dimension is the top private domain of the referrer URL on a page where events are collected for analytics.',
      from: '2012-10-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'referrer_domain', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      incompatible_dimensions: ['city', 'country', 'device_os', 'device_type', 'region'],
      filter_values: ['A comma-delimited list of domains; e.g. brightcove.com,docs.brightcove.com'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=referrer_domain'
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=video&where=referrer_domain==brightcove.com,docs.brightcove.com'
      }]
    },
    region: {
      name: 'region',
      data_group: 'Region',
      description: 'In this topic, you will learn about the Analytics API region dimension. The region domain provides information about where videos were viewed. It returns ISO-3611-2 region codes (example: US-WA). How regions are defined varies by country.',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'region', 'region_name', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['comma-delimited list of the ISO-3611-2 region code - e.g. US-WA'],
      incompatible_dimensions: ['destination_path', 'player', 'referrer_domain', 'search_terms'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=region'
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=country&where=region==US-MA'
      }]
    },
    search_terms: {
      name: 'search_terms',
      data_group: 'Search Terms',
      description: 'In this topic, you will learn about the Analytics API search_terms dimension. The search_terms dimension is the keywords used if the traffic source that resulted in events being collected for activity metrics was a search engine, and the keywords are detectable.',
      from: '2012-10-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'search_terms', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['URI-encoded, comma-delimited list of search terms - e.g. players,videos'],
      incompatible_dimensions: ['destination_domain', 'destination_path', 'device_os', 'device_type', 'video'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=search_terms'
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=account&where=search_terms==video+src+change'
      }]
    },
    social_platform: {
      name: 'social_platform',
      description: 'In this topic, you will learn about the Analytics API social_platform dimension. The social_platform dimension provides analytics for social platforms such as Twitter, Facebook, and YouTube, if you distributed your videos to those platforms using the Video Cloud Radius module.',
      from: '2016-11-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['social_lifetime_seconds_viewed', 'social_lifetime_views', 'social_platform', 'social_seconds_viewed', 'social_views'],
      filter_values: ['facebook', 'twitter', 'youtube'],
      incompatible_dimensions: ['account', 'browser_type', 'city', 'country', 'destination_domain', 'destination_path', 'device_os', 'device_manufacturer', 'device_type', 'player', 'referrer_domain', 'region', 'search_terms', 'source_type'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=social_platform'
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=account&where=social_platform==twitter'
      }]
    },
    source_type: {
      name: 'source_type',
      data_group: 'Source Type',
      description: 'In this topic, you will learn about the Analytics API source_type dimension. The source_type is the type of traffic source that resulted in events being collected for analytics.',
      from: '2012-10-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'source_type', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view'],
      filter_values: ['direct', 'referral', 'organic_search', 'paid_search', 'secure_search'],
      incompatible_dimensions: ['destination_domain', 'destination_path', 'device_os', 'device_type'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=source_type'
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=video&where=source_type==direct'
      }]
    },
    video: {
      name: 'video',
      data_group: 'Video',
      description: 'In this topic, you will learn about the Analytics API videos dimension. The video dimension provides analytics by video. NOTE: if you wish to include an "video." fields (such as video.name) in the response, your client credentials must include the CMS: Video read permission. Also note that while you cannot return "video.custom_fields", you can return "video.custom_fields.{field_name}".',
      from: '2011-01-01',
      urlparams: ['account', 'dimensions', 'where', 'limit', 'offset', 'sort', 'fields', 'format', 'reconciled', 'from', 'to'],
      fields: ['ad_mode_begin', 'ad_mode_complete', 'bytes_delivered', 'engagement_score', 'play_request', 'play_rate', 'video', 'video_duration', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_name', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}', 'video_download_request', 'video_download_complete', 'video_download_cancellation', 'video_download_error'],
      filter_values: ['video ids as a comma-delimited list or video.q=={video field}:{value}'],
      incompatible_dimensions: ['city', 'destination_path', 'region', 'search_terms'],
      samples: [{
        dimension: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=video'
      }, {
        filter: 'https://analytics.api.brightcove.com/v1/data?accounts=1752604059001&dimensions=video&where=video==4093643993001,1754276206001'
      }]
    }
  },
  combinations: {
    account__video: {
      dimensions: ['account', 'video'],
      from: '2011-01-01',
      fields: ['account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__video__date: {
      dimensions: ['account', 'video', 'date'],
      from: '2011-01-01',
      fields: ['account.name', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__video__date_hour: {
      dimensions: ['account', 'video', 'date_hour'],
      from: '2011-01-01',
      fields: ['account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__player: {
      dimensions: ['account', 'player'],
      from: '2011-01-01',
      fields: ['account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'player', 'player_name']
    },
    account__player__date: {
      dimensions: ['account', 'player', 'date'],
      from: '2011-01-01',
      fields: ['account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'date','play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'player', 'player_name']
    },
    account__player__date_hour: {
      dimensions: ['account', 'player', 'date_hour'],
      from: '2011-01-01',
      fields: ['account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'date_hour','play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'player', 'player_name']
    },
    account__player__video: {
      dimensions: ['account', 'video', 'player'],
      from: '2011-01-01',
      fields: ['account', 'ad_mode_begin', 'ad_mode_complete', 'play_request', 'play_rate', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'player', 'player_name', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__player__video__date: {
      dimensions: ['account', 'video', 'player', 'date'],
      from: '2011-01-01',
      fields: ['account', 'ad_mode_begin', 'ad_mode_complete', 'date', 'play_request', 'play_rate', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'player', 'player_name', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}', 'player', 'player_name']
    },
    account__player__video__date_hour: {
      dimensions: ['account', 'video', 'player', 'date_hour'],
      from: '2011-01-01',
      fields: ['account', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'play_request', 'play_rate', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'player', 'player_name', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}', 'player', 'player_name']
    },
    player__video: {
      dimensions: ['video', 'player'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video', 'video_duration', 'video_impression', 'video_name', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'player', 'player_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__country: {
      dimensions: ['account', 'country'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name']
    },
    account__country__date: {
      dimensions: ['account', 'country', 'date'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name']
    },
    account__country__date_hour: {
      dimensions: ['account', 'country', 'date_hour'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name']
    },
    account__region: {
      dimensions: ['account', 'region'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'region', 'region_name']
    },
    account__region__date: {
      dimensions: ['account', 'region', 'date'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'region', 'region_name']
    },
    account__region__date_hour: {
      dimensions: ['account', 'region', 'date_hour'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'region', 'region_name']
    },
    account__city: {
      dimensions: ['account', 'city'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'city', 'dma']
    },
    account__city__date: {
      dimensions: ['account', 'city', 'date'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'city', 'dma']
    },
    account__city__date_hour: {
      dimensions: ['account', 'city', 'date_hour'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'city', 'dma']
    },
    account__country__region: {
      dimensions: ['account', 'country', 'region'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'region', 'region_name']
    },
    country__region: {
      dimensions: ['account', 'country', 'region'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'region', 'region_name']
    },
    account__city__country: {
      dimensions: ['account', 'country', 'city'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'region', 'region_name']
    },
    account__city__region: {
      dimensions: ['account', 'region', 'city'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'city', 'dma', 'region', 'region_name']
    },
    city__country: {
      dimensions: ['city', 'country'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'city', 'dma', 'country', 'country_name']
    },
    city__region: {
      dimensions: ['region', 'city'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'city', 'dma', 'region', 'region_name']
    },
    account__city__country__region: {
      dimensions: ['account', 'country', 'region', 'city'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'city', 'dma', 'country', 'country_name', 'region', 'region_name']
    },
    account__country__video: {
      dimensions: ['account', 'video', 'country'],
      from: '2011-01-01',
      fields: ['account', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    country__video: {
      dimensions: ['video', 'country'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video', 'video_duration', 'video_impression', 'video_name', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__country__player: {
      dimensions: ['account', 'player', 'country'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'player', 'player_name']
    },
    country__player: {
      dimensions: ['player', 'country'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player', 'player_load', 'player_name', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name']
    },
    account__device_os: {
      dimensions: ['account', 'device_os'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os']
    },
    account__device_os__date: {
      dimensions: ['account', 'device_os', 'date'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os']
    },
    account__device_os__date_hour: {
      dimensions: ['account', 'device_os', 'date_hour'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os']
    },
    account__device_type: {
      dimensions: ['account', 'device_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type']
    },
    account__device_type__date: {
      dimensions: ['account', 'device_type', 'date'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type']
    },
    account__device_type__date_hour: {
      dimensions: ['account', 'device_type', 'date_hour'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type']
    },
    account__device_manufacturer: {
      dimensions: ['account', 'device_manufacturer'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_manufacturer']
    },
    account__device_manufacturer__date: {
      dimensions: ['account', 'device_manufacturer', 'date'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_manufacturer']
    },
    account__device_manufacturer__date_hour: {
      dimensions: ['account', 'device_manufacturer', 'date_hour'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_manufacturer']
    },
    account__device_manufacturer__browser_type: {
      dimensions: ['account', 'device_manufacturer', 'browser_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_manufacturer', 'browser_type']
    },
    account__device_os__device_manufacturer__browser_type: {
      dimensions: ['account', 'device_os', 'device_manufacturer', 'browser_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'device_manufacturer', 'browser_type']
    },
    account__device_type__device_manufacturer__browser_type: {
      dimensions: ['account', 'device_type', 'device_manufacturer', 'browser_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type', 'device_manufacturer', 'browser_type']
    },
    account__device_os__device_type__device_manufacturer__browser_type: {
      dimensions: ['account', 'device_os', 'device_type', 'device_manufacturer', 'browser_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'device_type', 'device_manufacturer', 'browser_type']
    },
    account__browser_type: {
      dimensions: ['account', 'browser_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'browser_type']
    },
    account__browser_type__date: {
      dimensions: ['account', 'browser_type', 'date'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'browser_type']
    },
    account__browser_type__date_hour: {
      dimensions: ['account', 'browser_type', 'date_hour'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'browser_type']
    },
    account__device_os__device_type: {
      dimensions: ['account', 'device_os', 'device_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'device_type']
    },
    device_os__device_type: {
      dimensions: ['account', 'device_os', 'device_type'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'device_type']
    },
    account__device_os__video: {
      dimensions: ['account', 'video', 'device_os'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__device_type__video: {
      dimensions: ['account', 'video', 'device_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    device_os__video: {
      dimensions: ['video', 'device_os'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video', 'video_duration', 'video_impression', 'video_name', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'video.reference_id', 'video.name', 'device_os', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    device_type__video: {
      dimensions: ['video', 'device_type'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video', 'video_duration', 'video_impression', 'video_name', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'video.reference_id', 'video.name', 'device_type', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__device_os__device_type__video: {
      dimensions: ['account', 'video', 'device_os', 'device_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'device_type', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__device_os__player: {
      dimensions: ['account', 'player', 'device_os'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'player', 'player_name']
    },
    device_os__player: {
      dimensions: ['player', 'device_os'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player', 'player_load', 'player_name', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os']
    },
    account__device_type__player: {
      dimensions: ['account', 'player', 'device_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type', 'player', 'player_name']
    },
    device_type__player: {
      dimensions: ['player', 'device_type'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player', 'player_load', 'player_name', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type']
    },
    account__device_os__device_type__player: {
      dimensions: ['account', 'player', 'device_os', 'device_type'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'device_type', 'player', 'player_name']
    },
    account__referrer_domain: {
      dimensions: ['account', 'referrer_domain'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'referrer_domain']
    },
    account__referrer_domain__date: {
      dimensions: ['account', 'referrer_domain', 'date'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'referrer_domain']
    },
    account__referrer_domain__date_hour: {
      dimensions: ['account', 'referrer_domain', 'date_hour'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'referrer_domain']
    },
    referrer_domain__source_type: {
      dimensions: ['referrer_domain', 'source_type'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'referrer_domain', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'source_type']
    },
    account__referrer_domain__source_type: {
      dimensions: ['account', 'referrer_domain', 'source_type'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'referrer_domain', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'source_type']
    },
    referrer_domain__search_terms: {
      dimensions: ['referrer_domain', 'search_terms'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'referrer_domain', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'search_terms']
    },
    account__referrer_domain__search_terms: {
      dimensions: ['account', 'referrer_domain', 'search_terms'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'referrer_domain', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'search_terms']
    },
    referrer_domain__search_terms__source_type: {
      dimensions: ['referrer_domain', 'source_type', 'search_terms'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'referrer_domain', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'search_terms', 'source_type']
    },
    search_terms__source_type: {
      dimensions: ['source_type', 'search_terms'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'search_terms', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'source_type']
    },
    search_terms__source_type__date: {
      dimensions: ['source_type', 'search_terms', 'date'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'search_terms', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'source_type']
    },
    search_terms__source_type__date_hour: {
      dimensions: ['source_type', 'search_terms', 'date_hour'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'search_terms', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'source_type']
    },
    account__source_type: {
      dimensions: ['account', 'source_type'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'source_type']
    },
    account__search_terms: {
      dimensions: ['account', 'search_terms'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'search_terms']
    },
    account__search_terms__date: {
      dimensions: ['account', 'search_terms', 'date'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'search_terms']
    },
    account__search_terms__date_hour: {
      dimensions: ['account', 'search_terms', 'date_hour'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'search_terms']
    },
    account__search_terms__source_type: {
      dimensions: ['account', 'source_type', 'search_terms'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'search_terms', 'source_type']
    },
    account__referrer_domain__search_terms__source_type: {
      dimensions: ['account', 'referrer_domain', 'source_type', 'search_terms'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'referrer_domain', 'search_terms', 'source_type']
    },
    referrer_domain__video: {
      dimensions: ['video', 'referrer_domain'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video', 'video_duration', 'video_impression', 'video_name', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'video.name', 'referrer_domain', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    social_platform__video: {
      dimensions: ['video', 'social_platform'],
      from: '2016-11-01',
      fields: ['engagement_score', 'play_rate', 'video', 'video_duration', 'video_name', 'video.name', 'social_lifetime_seconds_viewed', 'social_lifetime_views', 'social_platform', 'social_seconds_viewed', 'social_views']
    },
    source_type__video: {
      dimensions: ['video', 'source_type'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video', 'video_duration', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'video.name', 'source_type', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    referrer_domain__source_type__video: {
      dimensions: ['video', 'referrer_domain', 'source_type'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'referrer_domain', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'source_type', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__referrer_domain__source_type__video: {
      dimensions: ['account', 'video', 'referrer_domain', 'source_type'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'referrer_domain', 'source_type', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    player__referrer_domain: {
      dimensions: ['player', 'referrer_domain'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player', 'player_load', 'player_name', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'referrer_domain']
    },
    player__source_type: {
      dimensions: ['player', 'source_type'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player', 'player_load', 'player_name', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'source_type']
    },
    player__referrer_domain__source_type: {
      dimensions: ['player', 'referrer_domain', 'source_type'],
      from: '2012-10-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player', 'player_load', 'player_name', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'referrer_domain', 'source_type']
    },
    account__player__referrer_domain__source_type: {
      dimensions: ['account', 'player', 'referrer_domain', 'source_type'],
      from: '2012-10-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'player', 'player_name', 'referrer_domain', 'source_type']
    },
    account__country__device_os: {
      dimensions: ['account', 'device_os', 'country'],
      from: '2015-10-19',
      fields: ['account', 'account.name', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'device_os']
    },
    account__device_os__region: {
      dimensions: ['account', 'device_os', 'region'],
      from: '2015-10-19',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'region', 'region_name']
    },
    account__country__device_os__region: {
      dimensions: ['account', 'device_os', 'country', 'region'],
      from: '2015-10-19',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'device_os', 'region', 'region_name']
    },
    account__country__device_type: {
      dimensions: ['account', 'device_type', 'country'],
      from: '2015-10-19',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'device_type']
    },
    account__device_type__region: {
      dimensions: ['account', 'device_type', 'region'],
      from: '2015-10-19',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type', 'region', 'region_name']
    },
    account__country__device_type__region: {
      dimensions: ['account', 'device_type', 'country', 'region'],
      from: '2015-10-19',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'device_type', 'region', 'region_name']
    },
    account__country__device_os__device_type: {
      dimensions: ['account', 'device_os', 'device_type', 'country'],
      from: '2015-10-19',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'device_os', 'device_type']
    },
    account__device_os__device_type__region: {
      dimensions: ['account', 'device_os', 'device_type', 'region'],
      from: '2015-10-19',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'device_type', 'region', 'region_name']
    },
    account__country__device_os__device_type__region: {
      dimensions: ['account', 'device_os', 'device_type', 'country', 'region'],
      from: '2015-10-19',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'country', 'country_name', 'device_os', 'device_type', 'region', 'region_name']
    },
    country__device_os: {
      dimensions: ['device_os', 'country'],
      from: '2015-10-19',
      fields: ['country', 'country_name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os']
    },
    account__date: {
      dimensions: ['account', 'date'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    account__date_hour: {
      dimensions: ['account', 'date_hour'],
      from: '2011-01-01',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    browser_type__date: {
      dimensions: ['browser_type', 'date'],
      from: '2011-01-01',
      fields: ['browser_type', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    browser_type__date_hour: {
      dimensions: ['browser_type', 'date_hour'],
      from: '2011-01-01',
      fields: ['browser_type', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    city__date: {
      dimensions: ['city', 'date'],
      from: '2011-01-01',
      fields: ['city', 'dma', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    city__date_hour: {
      dimensions: ['city', 'date_hour'],
      from: '2011-01-01',
      fields: ['city', 'dma', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    country__date: {
      dimensions: ['country', 'date'],
      from: '2011-01-01',
      fields: ['country', 'country_name', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    country__date_hour: {
      dimensions: ['country', 'date_hour'],
      from: '2011-01-01',
      fields: ['country', 'country_name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    region__date: {
      dimensions: ['region', 'date'],
      from: '2011-01-01',
      fields: ['region', 'region_name', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    region__date_hour: {
      dimensions: ['region', 'date_hour'],
      from: '2011-01-01',
      fields: ['region', 'region_name', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    search_terms__date: {
      dimensions: ['search_terms', 'date'],
      from: '2012-10-01',
      fields: ['search_terms', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load','video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    search_terms__date_hour: {
      dimensions: ['search_terms', 'date_hour'],
      from: '2012-10-01',
      fields: ['search_terms', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    source_type__date: {
      dimensions: ['source_type', 'date'],
      from: '2012-10-01',
      fields: ['source_type', 'ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    source_type__date_hour: {
      dimensions: ['source_type', 'date_hour'],
      from: '2012-10-01',
      fields: ['source_type', 'ad_mode_begin', 'ad_mode_complete', 'date_hour', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    social_platform__date: {
      dimensions: ['social_platform', 'date'],
      from: '2016-11-01',
      fields: ['date', 'social_lifetime_seconds_viewed', 'social_lifetime_views', 'social_platform', 'social_seconds_viewed', 'social_views']
    },
    social_platform__date_hour: {
      dimensions: ['social_platform', 'date_hour'],
      from: '2016-11-01',
      fields: ['date_hour', 'social_lifetime_seconds_viewed', 'social_lifetime_views', 'social_platform', 'social_seconds_viewed', 'social_views']
    },
    destination_domain__date: {
      dimensions: ['destination_domain', 'date'],
      from: '2011-01-01',
      fields: ['destination_domain', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    destination_path__date: {
      dimensions: ['destination_path', 'date'],
      from: '2011-01-01',
      fields: ['destination_path', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    device_os__date: {
      dimensions: ['device_os', 'date'],
      from: '2011-01-01',
      fields: ['device_os', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    device_manufacturer__date: {
      dimensions: ['device_manufacturer', 'date'],
      from: '2011-01-01',
      fields: ['device_manufacturer', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    device_type__date: {
      dimensions: ['device_type', 'date'],
      from: '2011-01-01',
      fields: ['device_type', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    player__date: {
      dimensions: ['player', 'date'],
      from: '2011-01-01',
      fields: ['player', 'player_name', 'ad_mode_begin', 'ad_mode_complete', 'active_media', 'bytes_delivered', 'daily_unique_viewers', 'date', 'drm_bytes_packaged', 'engagement_score', 'licenses_served', 'live_seconds_streamed', 'play_request', 'play_rate', 'player_load', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    referrer_domain__date: {
      dimensions: ['referrer_domain', 'date'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete',  'date', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'referrer_domain', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view']
    },
    video__date: {
      dimensions: ['video', 'date'],
      from: '2011-01-01',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'date', 'engagement_score', 'video', 'video_duration', 'video_engagement_1', 'video_engagement_100', 'video_engagement_25', 'video_engagement_50', 'video_engagement_75', 'video_impression', 'video_name', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    live_stream__date: {
      dimensions: ['date', 'live_stream'],
      from: '2015-10-19',
      fields: ['date', 'bytes_delivered', 'origin_bytes_delivered', 'live_stream']
    },
    device_os__region: {
      dimensions: ['device_os', 'region'],
      from: '2015-10-19',
      fields: ['account.name', 'device_os', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'region', 'region_name']
    },
    country__device_os__region: {
      dimensions: ['device_os', 'country', 'region'],
      from: '2015-10-19',
      fields: ['country', 'country_name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'region', 'region_name']
    },
    country__device_type: {
      dimensions: ['device_type', 'country'],
      from: '2015-10-19',
      fields: ['account.name', 'country', 'country_name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type']
    },
    device_type__region: {
      dimensions: ['device_type', 'region'],
      from: '2015-10-19',
      fields: ['device_type', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'region', 'region_name']
    },
    country__device_type__region: {
      dimensions: ['device_type', 'country', 'region'],
      from: '2015-10-19',
      fields: ['country', 'country_name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type', 'region', 'region_name']
    },
    country__device_os__device_type: {
      dimensions: ['device_os', 'device_type', 'country'],
      from: '2015-10-19',
      fields: ['country', 'country_name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'device_type']
    },
    device_os__device_type__region: {
      dimensions: ['device_os', 'device_type', 'region'],
      from: '2015-10-19',
      fields: ['device_os', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_type', 'region', 'region_name']
    },
    country__device_os__device_type__region: {
      dimensions: ['device_os', 'device_type', 'country', 'region'],
      from: '2015-10-19',
      fields: ['country', 'country_name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'device_os', 'device_type', 'region', 'region_name']
    },
    account__destination_path: {
      dimensions: ['account', 'destination_path'],
      from: '2014-03-03',
      fields: ['account', 'account.name', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'destination_path']
    },
    account__destination_domain: {
      dimensions: ['account', 'destination_domain'],
      from: '2014-03-03',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'destination_domain']
    },
    account__destination_domain__destination_path: {
      dimensions: ['account', 'destination_domain', 'destination_path'],
      from: '2014-03-03',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'destination_domain', 'destination_path']
    },
    destination_domain__destination_path: {
      dimensions: ['destination_domain', 'destination_path'],
      from: '2014-03-03',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'destination_domain', 'destination_path']
    },
    destination_domain__player: {
      dimensions: ['player', 'destination_domain'],
      from: '2014-03-03',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player', 'player_load', 'player_name', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'destination_domain']
    },
    account__destination_domain__player: {
      dimensions: ['account', 'player', 'destination_domain'],
      from: '2014-03-03',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'player_load', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'destination_domain', 'player', 'player_name']
    },
    destination_domain__video: {
      dimensions: ['video', 'destination_domain'],
      from: '2014-03-03',
      fields: ['ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video', 'video_duration', 'video_impression', 'video_name', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'destination_domain', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    },
    account__destination_domain__video: {
      dimensions: ['account', 'video', 'destination_domain'],
      from: '2014-03-03',
      fields: ['account', 'account.name', 'ad_mode_begin', 'ad_mode_complete', 'engagement_score', 'play_request', 'play_rate', 'video_impression', 'video_percent_viewed', 'video_seconds_viewed', 'video_view', 'destination_domain', 'video', 'video_duration', 'video_name', 'video.reference_id', 'video.name', 'video.description', 'video.complete', 'video.created_at', 'video.duration', 'video.economics', 'video.long_description', 'video.state', 'video.tags', 'video.updated_at', 'video.custom_fields.{field_name}']
    }
  }
};
