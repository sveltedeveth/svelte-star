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
export type TiStarOutlineProps = typeof __propDef.props;
export type TiStarOutlineEvents = typeof __propDef.events;
export type TiStarOutlineSlots = typeof __propDef.slots;
export default class TiStarOutline extends SvelteComponentTyped<TiStarOutlineProps, TiStarOutlineEvents, TiStarOutlineSlots> {
}
export {};
