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
export type GiBolasProps = typeof __propDef.props;
export type GiBolasEvents = typeof __propDef.events;
export type GiBolasSlots = typeof __propDef.slots;
export default class GiBolas extends SvelteComponentTyped<GiBolasProps, GiBolasEvents, GiBolasSlots> {
}
export {};
