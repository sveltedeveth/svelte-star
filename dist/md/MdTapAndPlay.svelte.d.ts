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
export type MdTapAndPlayProps = typeof __propDef.props;
export type MdTapAndPlayEvents = typeof __propDef.events;
export type MdTapAndPlaySlots = typeof __propDef.slots;
export default class MdTapAndPlay extends SvelteComponentTyped<MdTapAndPlayProps, MdTapAndPlayEvents, MdTapAndPlaySlots> {
}
export {};
