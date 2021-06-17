(ns metabase.query-processor.interface
  "Dynamic variables, constants, and other things used across the query builder namespaces.")
;; TODO - Not 100% sure we really need this namespace since it's almost completely empty these days. Seems like the
;; things here could be moved elsewhere

;; TODO - I think this could go in the `limit` namespace
(def absolute-max-results
  "Maximum number of rows the QP should ever return.

  This is coming directly from the max rows allowed by Excel for now ...
  https://support.office.com/en-nz/article/Excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3

  This is actually one less than the number of rows allowed by Excel, since we have a header row. See #13585 for more
  details."
  1048575)

(def ^:dynamic ^Boolean ^{:deprecated "0.40.0"} *disable-qp-logging*
  "Should we disable logging for the QP? (e.g., during sync we probably want to turn it off to keep logs less
  cluttered).

  DEPRECATED -- this is not used consistently and it's more trouble than it's worth. Just dial down the log level a
  bit anywhere we're currently using this."
  false)
