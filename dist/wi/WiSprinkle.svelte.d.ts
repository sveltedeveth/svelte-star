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
export type WiSprinkleProps = typeof __propDef.props;
export type WiSprinkleEvents = typeof __propDef.events;
export type WiSprinkleSlots = typeof __propDef.slots;
export default class WiSprinkle extends SvelteComponentTyped<WiSprinkleProps, WiSprinkleEvents, WiSprinkleSlots> {
}
export {};
