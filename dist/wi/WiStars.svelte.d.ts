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
export type WiStarsProps = typeof __propDef.props;
export type WiStarsEvents = typeof __propDef.events;
export type WiStarsSlots = typeof __propDef.slots;
export default class WiStars extends SvelteComponentTyped<WiStarsProps, WiStarsEvents, WiStarsSlots> {
}
export {};
