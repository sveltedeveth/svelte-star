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
export type GiUltrasoundProps = typeof __propDef.props;
export type GiUltrasoundEvents = typeof __propDef.events;
export type GiUltrasoundSlots = typeof __propDef.slots;
export default class GiUltrasound extends SvelteComponentTyped<GiUltrasoundProps, GiUltrasoundEvents, GiUltrasoundSlots> {
}
export {};
