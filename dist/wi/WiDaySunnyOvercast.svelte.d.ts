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
export type WiDaySunnyOvercastProps = typeof __propDef.props;
export type WiDaySunnyOvercastEvents = typeof __propDef.events;
export type WiDaySunnyOvercastSlots = typeof __propDef.slots;
export default class WiDaySunnyOvercast extends SvelteComponentTyped<WiDaySunnyOvercastProps, WiDaySunnyOvercastEvents, WiDaySunnyOvercastSlots> {
}
export {};
