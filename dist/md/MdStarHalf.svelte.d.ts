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
export type MdStarHalfProps = typeof __propDef.props;
export type MdStarHalfEvents = typeof __propDef.events;
export type MdStarHalfSlots = typeof __propDef.slots;
export default class MdStarHalf extends SvelteComponentTyped<MdStarHalfProps, MdStarHalfEvents, MdStarHalfSlots> {
}
export {};
