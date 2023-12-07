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
export type GiTransformProps = typeof __propDef.props;
export type GiTransformEvents = typeof __propDef.events;
export type GiTransformSlots = typeof __propDef.slots;
export default class GiTransform extends SvelteComponentTyped<GiTransformProps, GiTransformEvents, GiTransformSlots> {
}
export {};
