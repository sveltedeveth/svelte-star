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
export type WiDaySprinkleProps = typeof __propDef.props;
export type WiDaySprinkleEvents = typeof __propDef.events;
export type WiDaySprinkleSlots = typeof __propDef.slots;
export default class WiDaySprinkle extends SvelteComponentTyped<WiDaySprinkleProps, WiDaySprinkleEvents, WiDaySprinkleSlots> {
}
export {};
