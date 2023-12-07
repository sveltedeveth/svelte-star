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
export type GiFrostfireProps = typeof __propDef.props;
export type GiFrostfireEvents = typeof __propDef.events;
export type GiFrostfireSlots = typeof __propDef.slots;
export default class GiFrostfire extends SvelteComponentTyped<GiFrostfireProps, GiFrostfireEvents, GiFrostfireSlots> {
}
export {};
