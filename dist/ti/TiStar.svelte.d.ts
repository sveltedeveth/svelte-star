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
export type TiStarProps = typeof __propDef.props;
export type TiStarEvents = typeof __propDef.events;
export type TiStarSlots = typeof __propDef.slots;
export default class TiStar extends SvelteComponentTyped<TiStarProps, TiStarEvents, TiStarSlots> {
}
export {};
