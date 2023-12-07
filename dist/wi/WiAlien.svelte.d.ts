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
export type WiAlienProps = typeof __propDef.props;
export type WiAlienEvents = typeof __propDef.events;
export type WiAlienSlots = typeof __propDef.slots;
export default class WiAlien extends SvelteComponentTyped<WiAlienProps, WiAlienEvents, WiAlienSlots> {
}
export {};
