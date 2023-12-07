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
export type GiStoneBlockProps = typeof __propDef.props;
export type GiStoneBlockEvents = typeof __propDef.events;
export type GiStoneBlockSlots = typeof __propDef.slots;
export default class GiStoneBlock extends SvelteComponentTyped<GiStoneBlockProps, GiStoneBlockEvents, GiStoneBlockSlots> {
}
export {};
