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
export type GiDatabaseProps = typeof __propDef.props;
export type GiDatabaseEvents = typeof __propDef.events;
export type GiDatabaseSlots = typeof __propDef.slots;
export default class GiDatabase extends SvelteComponentTyped<GiDatabaseProps, GiDatabaseEvents, GiDatabaseSlots> {
}
export {};
