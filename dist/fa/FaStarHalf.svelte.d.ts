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
export type FaStarHalfProps = typeof __propDef.props;
export type FaStarHalfEvents = typeof __propDef.events;
export type FaStarHalfSlots = typeof __propDef.slots;
export default class FaStarHalf extends SvelteComponentTyped<FaStarHalfProps, FaStarHalfEvents, FaStarHalfSlots> {
}
export {};
