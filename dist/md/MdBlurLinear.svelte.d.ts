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
export type MdBlurLinearProps = typeof __propDef.props;
export type MdBlurLinearEvents = typeof __propDef.events;
export type MdBlurLinearSlots = typeof __propDef.slots;
export default class MdBlurLinear extends SvelteComponentTyped<MdBlurLinearProps, MdBlurLinearEvents, MdBlurLinearSlots> {
}
export {};
