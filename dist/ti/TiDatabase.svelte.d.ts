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
export type TiDatabaseProps = typeof __propDef.props;
export type TiDatabaseEvents = typeof __propDef.events;
export type TiDatabaseSlots = typeof __propDef.slots;
export default class TiDatabase extends SvelteComponentTyped<TiDatabaseProps, TiDatabaseEvents, TiDatabaseSlots> {
}
export {};
