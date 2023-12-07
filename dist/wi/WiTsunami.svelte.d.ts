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
export type WiTsunamiProps = typeof __propDef.props;
export type WiTsunamiEvents = typeof __propDef.events;
export type WiTsunamiSlots = typeof __propDef.slots;
export default class WiTsunami extends SvelteComponentTyped<WiTsunamiProps, WiTsunamiEvents, WiTsunamiSlots> {
}
export {};
