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
export type WiSunsetProps = typeof __propDef.props;
export type WiSunsetEvents = typeof __propDef.events;
export type WiSunsetSlots = typeof __propDef.slots;
export default class WiSunset extends SvelteComponentTyped<WiSunsetProps, WiSunsetEvents, WiSunsetSlots> {
}
export {};
