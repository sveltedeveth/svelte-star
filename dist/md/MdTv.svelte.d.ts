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
export type MdTvProps = typeof __propDef.props;
export type MdTvEvents = typeof __propDef.events;
export type MdTvSlots = typeof __propDef.slots;
export default class MdTv extends SvelteComponentTyped<MdTvProps, MdTvEvents, MdTvSlots> {
}
export {};
