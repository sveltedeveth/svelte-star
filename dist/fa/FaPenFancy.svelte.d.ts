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
export type FaPenFancyProps = typeof __propDef.props;
export type FaPenFancyEvents = typeof __propDef.events;
export type FaPenFancySlots = typeof __propDef.slots;
export default class FaPenFancy extends SvelteComponentTyped<FaPenFancyProps, FaPenFancyEvents, FaPenFancySlots> {
}
export {};
