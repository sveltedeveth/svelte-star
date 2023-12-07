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
export type WiNightSleetProps = typeof __propDef.props;
export type WiNightSleetEvents = typeof __propDef.events;
export type WiNightSleetSlots = typeof __propDef.slots;
export default class WiNightSleet extends SvelteComponentTyped<WiNightSleetProps, WiNightSleetEvents, WiNightSleetSlots> {
}
export {};
