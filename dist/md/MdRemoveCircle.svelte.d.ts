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
export type MdRemoveCircleProps = typeof __propDef.props;
export type MdRemoveCircleEvents = typeof __propDef.events;
export type MdRemoveCircleSlots = typeof __propDef.slots;
export default class MdRemoveCircle extends SvelteComponentTyped<MdRemoveCircleProps, MdRemoveCircleEvents, MdRemoveCircleSlots> {
}
export {};
