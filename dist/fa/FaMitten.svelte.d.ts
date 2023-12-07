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
export type FaMittenProps = typeof __propDef.props;
export type FaMittenEvents = typeof __propDef.events;
export type FaMittenSlots = typeof __propDef.slots;
export default class FaMitten extends SvelteComponentTyped<FaMittenProps, FaMittenEvents, FaMittenSlots> {
}
export {};
