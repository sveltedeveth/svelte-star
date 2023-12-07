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
export type WiMeteorProps = typeof __propDef.props;
export type WiMeteorEvents = typeof __propDef.events;
export type WiMeteorSlots = typeof __propDef.slots;
export default class WiMeteor extends SvelteComponentTyped<WiMeteorProps, WiMeteorEvents, WiMeteorSlots> {
}
export {};
