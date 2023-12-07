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
export type FaHorseHeadProps = typeof __propDef.props;
export type FaHorseHeadEvents = typeof __propDef.events;
export type FaHorseHeadSlots = typeof __propDef.slots;
export default class FaHorseHead extends SvelteComponentTyped<FaHorseHeadProps, FaHorseHeadEvents, FaHorseHeadSlots> {
}
export {};
