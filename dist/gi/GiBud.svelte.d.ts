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
export type GiBudProps = typeof __propDef.props;
export type GiBudEvents = typeof __propDef.events;
export type GiBudSlots = typeof __propDef.slots;
export default class GiBud extends SvelteComponentTyped<GiBudProps, GiBudEvents, GiBudSlots> {
}
export {};
