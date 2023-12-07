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
export type WiNightSprinkleProps = typeof __propDef.props;
export type WiNightSprinkleEvents = typeof __propDef.events;
export type WiNightSprinkleSlots = typeof __propDef.slots;
export default class WiNightSprinkle extends SvelteComponentTyped<WiNightSprinkleProps, WiNightSprinkleEvents, WiNightSprinkleSlots> {
}
export {};
