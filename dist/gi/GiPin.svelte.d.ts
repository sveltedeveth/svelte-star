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
export type GiPinProps = typeof __propDef.props;
export type GiPinEvents = typeof __propDef.events;
export type GiPinSlots = typeof __propDef.slots;
export default class GiPin extends SvelteComponentTyped<GiPinProps, GiPinEvents, GiPinSlots> {
}
export {};
