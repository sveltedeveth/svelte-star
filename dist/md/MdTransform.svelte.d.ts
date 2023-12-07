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
export type MdTransformProps = typeof __propDef.props;
export type MdTransformEvents = typeof __propDef.events;
export type MdTransformSlots = typeof __propDef.slots;
export default class MdTransform extends SvelteComponentTyped<MdTransformProps, MdTransformEvents, MdTransformSlots> {
}
export {};
