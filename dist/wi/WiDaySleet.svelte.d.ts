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
export type WiDaySleetProps = typeof __propDef.props;
export type WiDaySleetEvents = typeof __propDef.events;
export type WiDaySleetSlots = typeof __propDef.slots;
export default class WiDaySleet extends SvelteComponentTyped<WiDaySleetProps, WiDaySleetEvents, WiDaySleetSlots> {
}
export {};
