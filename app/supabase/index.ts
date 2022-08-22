/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/bookings": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.bookings.id"];
          created_at?: parameters["rowFilter.bookings.created_at"];
          name?: parameters["rowFilter.bookings.name"];
          email?: parameters["rowFilter.bookings.email"];
          contact_number?: parameters["rowFilter.bookings.contact_number"];
          address?: parameters["rowFilter.bookings.address"];
          pick_up_date?: parameters["rowFilter.bookings.pick_up_date"];
          time_slot?: parameters["rowFilter.bookings.time_slot"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["bookings"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** bookings */
          bookings?: definitions["bookings"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.bookings.id"];
          created_at?: parameters["rowFilter.bookings.created_at"];
          name?: parameters["rowFilter.bookings.name"];
          email?: parameters["rowFilter.bookings.email"];
          contact_number?: parameters["rowFilter.bookings.contact_number"];
          address?: parameters["rowFilter.bookings.address"];
          pick_up_date?: parameters["rowFilter.bookings.pick_up_date"];
          time_slot?: parameters["rowFilter.bookings.time_slot"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.bookings.id"];
          created_at?: parameters["rowFilter.bookings.created_at"];
          name?: parameters["rowFilter.bookings.name"];
          email?: parameters["rowFilter.bookings.email"];
          contact_number?: parameters["rowFilter.bookings.contact_number"];
          address?: parameters["rowFilter.bookings.address"];
          pick_up_date?: parameters["rowFilter.bookings.pick_up_date"];
          time_slot?: parameters["rowFilter.bookings.time_slot"];
        };
        body: {
          /** bookings */
          bookings?: definitions["bookings"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/contacts": {
    get: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.contacts.created_at"];
          name?: parameters["rowFilter.contacts.name"];
          contactNumber?: parameters["rowFilter.contacts.contactNumber"];
          message?: parameters["rowFilter.contacts.message"];
          id?: parameters["rowFilter.contacts.id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["contacts"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** contacts */
          contacts?: definitions["contacts"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.contacts.created_at"];
          name?: parameters["rowFilter.contacts.name"];
          contactNumber?: parameters["rowFilter.contacts.contactNumber"];
          message?: parameters["rowFilter.contacts.message"];
          id?: parameters["rowFilter.contacts.id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.contacts.created_at"];
          name?: parameters["rowFilter.contacts.name"];
          contactNumber?: parameters["rowFilter.contacts.contactNumber"];
          message?: parameters["rowFilter.contacts.message"];
          id?: parameters["rowFilter.contacts.id"];
        };
        body: {
          /** contacts */
          contacts?: definitions["contacts"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  bookings: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: character varying */
    name: string;
    /** Format: character varying */
    email: string;
    /** Format: character varying */
    contact_number: string;
    /** Format: text */
    address: string;
    /** Format: date */
    pick_up_date: string;
    /**
     * Format: public.time_slots
     * @enum {string}
     */
    time_slot: "10am - 12pm" | "12pm - 2pm" | "2pm - 4pm" | "4pm - 6pm";
  };
  contacts: {
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: character varying */
    name: string;
    /** Format: character varying */
    contactNumber: string;
    /** Format: text */
    message: string;
    /**
     * Format: uuid
     * @default extensions.uuid_generate_v4()
     */
    id?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description bookings */
  "body.bookings": definitions["bookings"];
  /** Format: uuid */
  "rowFilter.bookings.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.bookings.created_at": string;
  /** Format: character varying */
  "rowFilter.bookings.name": string;
  /** Format: character varying */
  "rowFilter.bookings.email": string;
  /** Format: character varying */
  "rowFilter.bookings.contact_number": string;
  /** Format: text */
  "rowFilter.bookings.address": string;
  /** Format: date */
  "rowFilter.bookings.pick_up_date": string;
  /** Format: public.time_slots */
  "rowFilter.bookings.time_slot": string;
  /** @description contacts */
  "body.contacts": definitions["contacts"];
  /** Format: timestamp with time zone */
  "rowFilter.contacts.created_at": string;
  /** Format: character varying */
  "rowFilter.contacts.name": string;
  /** Format: character varying */
  "rowFilter.contacts.contactNumber": string;
  /** Format: text */
  "rowFilter.contacts.message": string;
  /** Format: uuid */
  "rowFilter.contacts.id": string;
}

export interface operations {}

export interface external {}