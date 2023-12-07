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
export type GiStoneAxeProps = typeof __propDef.props;
export type GiStoneAxeEvents = typeof __propDef.events;
export type GiStoneAxeSlots = typeof __propDef.slots;
export default class GiStoneAxe extends SvelteComponentTyped<GiStoneAxeProps, GiStoneAxeEvents, GiStoneAxeSlots> {
}
export {};
