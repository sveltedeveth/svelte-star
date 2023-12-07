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
export type GiFingernailProps = typeof __propDef.props;
export type GiFingernailEvents = typeof __propDef.events;
export type GiFingernailSlots = typeof __propDef.slots;
export default class GiFingernail extends SvelteComponentTyped<GiFingernailProps, GiFingernailEvents, GiFingernailSlots> {
}
export {};
