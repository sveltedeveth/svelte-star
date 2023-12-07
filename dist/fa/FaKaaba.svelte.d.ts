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
export type FaKaabaProps = typeof __propDef.props;
export type FaKaabaEvents = typeof __propDef.events;
export type FaKaabaSlots = typeof __propDef.slots;
export default class FaKaaba extends SvelteComponentTyped<FaKaabaProps, FaKaabaEvents, FaKaabaSlots> {
}
export {};
