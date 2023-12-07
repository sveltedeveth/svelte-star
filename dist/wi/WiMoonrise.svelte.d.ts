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
export type WiMoonriseProps = typeof __propDef.props;
export type WiMoonriseEvents = typeof __propDef.events;
export type WiMoonriseSlots = typeof __propDef.slots;
export default class WiMoonrise extends SvelteComponentTyped<WiMoonriseProps, WiMoonriseEvents, WiMoonriseSlots> {
}
export {};
