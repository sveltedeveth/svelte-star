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
export type GiStaryuProps = typeof __propDef.props;
export type GiStaryuEvents = typeof __propDef.events;
export type GiStaryuSlots = typeof __propDef.slots;
export default class GiStaryu extends SvelteComponentTyped<GiStaryuProps, GiStaryuEvents, GiStaryuSlots> {
}
export {};
