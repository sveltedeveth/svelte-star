import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoIosAppstoreProps = typeof __propDef.props;
export type IoIosAppstoreEvents = typeof __propDef.events;
export type IoIosAppstoreSlots = typeof __propDef.slots;
export default class IoIosAppstore extends SvelteComponentTyped<IoIosAppstoreProps, IoIosAppstoreEvents, IoIosAppstoreSlots> {
}
export {};
