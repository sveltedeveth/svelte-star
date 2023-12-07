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
export type MdBlurCircularProps = typeof __propDef.props;
export type MdBlurCircularEvents = typeof __propDef.events;
export type MdBlurCircularSlots = typeof __propDef.slots;
export default class MdBlurCircular extends SvelteComponentTyped<MdBlurCircularProps, MdBlurCircularEvents, MdBlurCircularSlots> {
}
export {};
