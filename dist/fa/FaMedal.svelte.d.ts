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
export type FaMedalProps = typeof __propDef.props;
export type FaMedalEvents = typeof __propDef.events;
export type FaMedalSlots = typeof __propDef.slots;
export default class FaMedal extends SvelteComponentTyped<FaMedalProps, FaMedalEvents, FaMedalSlots> {
}
export {};
