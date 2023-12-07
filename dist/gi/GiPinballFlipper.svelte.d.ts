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
export type GiPinballFlipperProps = typeof __propDef.props;
export type GiPinballFlipperEvents = typeof __propDef.events;
export type GiPinballFlipperSlots = typeof __propDef.slots;
export default class GiPinballFlipper extends SvelteComponentTyped<GiPinballFlipperProps, GiPinballFlipperEvents, GiPinballFlipperSlots> {
}
export {};
