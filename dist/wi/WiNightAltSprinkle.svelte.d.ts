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
export type WiNightAltSprinkleProps = typeof __propDef.props;
export type WiNightAltSprinkleEvents = typeof __propDef.events;
export type WiNightAltSprinkleSlots = typeof __propDef.slots;
export default class WiNightAltSprinkle extends SvelteComponentTyped<WiNightAltSprinkleProps, WiNightAltSprinkleEvents, WiNightAltSprinkleSlots> {
}
export {};
