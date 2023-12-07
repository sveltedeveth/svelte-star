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
export type GiHorseHeadProps = typeof __propDef.props;
export type GiHorseHeadEvents = typeof __propDef.events;
export type GiHorseHeadSlots = typeof __propDef.slots;
export default class GiHorseHead extends SvelteComponentTyped<GiHorseHeadProps, GiHorseHeadEvents, GiHorseHeadSlots> {
}
export {};
