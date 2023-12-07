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
export type FaTrophyProps = typeof __propDef.props;
export type FaTrophyEvents = typeof __propDef.events;
export type FaTrophySlots = typeof __propDef.slots;
export default class FaTrophy extends SvelteComponentTyped<FaTrophyProps, FaTrophyEvents, FaTrophySlots> {
}
export {};
