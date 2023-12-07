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
export type MdTitleProps = typeof __propDef.props;
export type MdTitleEvents = typeof __propDef.events;
export type MdTitleSlots = typeof __propDef.slots;
export default class MdTitle extends SvelteComponentTyped<MdTitleProps, MdTitleEvents, MdTitleSlots> {
}
export {};
