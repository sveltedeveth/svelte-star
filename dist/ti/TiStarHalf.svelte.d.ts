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
export type TiStarHalfProps = typeof __propDef.props;
export type TiStarHalfEvents = typeof __propDef.events;
export type TiStarHalfSlots = typeof __propDef.slots;
export default class TiStarHalf extends SvelteComponentTyped<TiStarHalfProps, TiStarHalfEvents, TiStarHalfSlots> {
}
export {};
