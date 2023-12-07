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
export type WiSleetProps = typeof __propDef.props;
export type WiSleetEvents = typeof __propDef.events;
export type WiSleetSlots = typeof __propDef.slots;
export default class WiSleet extends SvelteComponentTyped<WiSleetProps, WiSleetEvents, WiSleetSlots> {
}
export {};
