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
export type GiPlastronProps = typeof __propDef.props;
export type GiPlastronEvents = typeof __propDef.events;
export type GiPlastronSlots = typeof __propDef.slots;
export default class GiPlastron extends SvelteComponentTyped<GiPlastronProps, GiPlastronEvents, GiPlastronSlots> {
}
export {};
