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
export type MdGestureProps = typeof __propDef.props;
export type MdGestureEvents = typeof __propDef.events;
export type MdGestureSlots = typeof __propDef.slots;
export default class MdGesture extends SvelteComponentTyped<MdGestureProps, MdGestureEvents, MdGestureSlots> {
}
export {};
