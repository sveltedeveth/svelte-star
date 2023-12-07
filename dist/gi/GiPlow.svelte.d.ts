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
export type GiPlowProps = typeof __propDef.props;
export type GiPlowEvents = typeof __propDef.events;
export type GiPlowSlots = typeof __propDef.slots;
export default class GiPlow extends SvelteComponentTyped<GiPlowProps, GiPlowEvents, GiPlowSlots> {
}
export {};
