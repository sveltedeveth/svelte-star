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
export type IoMdTvProps = typeof __propDef.props;
export type IoMdTvEvents = typeof __propDef.events;
export type IoMdTvSlots = typeof __propDef.slots;
export default class IoMdTv extends SvelteComponentTyped<IoMdTvProps, IoMdTvEvents, IoMdTvSlots> {
}
export {};
