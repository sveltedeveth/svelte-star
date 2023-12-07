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
export type GiBlindfoldProps = typeof __propDef.props;
export type GiBlindfoldEvents = typeof __propDef.events;
export type GiBlindfoldSlots = typeof __propDef.slots;
export default class GiBlindfold extends SvelteComponentTyped<GiBlindfoldProps, GiBlindfoldEvents, GiBlindfoldSlots> {
}
export {};
