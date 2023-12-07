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
export type GiStoneSpearProps = typeof __propDef.props;
export type GiStoneSpearEvents = typeof __propDef.events;
export type GiStoneSpearSlots = typeof __propDef.slots;
export default class GiStoneSpear extends SvelteComponentTyped<GiStoneSpearProps, GiStoneSpearEvents, GiStoneSpearSlots> {
}
export {};
