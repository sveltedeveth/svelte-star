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
export type MdMailOutlineProps = typeof __propDef.props;
export type MdMailOutlineEvents = typeof __propDef.events;
export type MdMailOutlineSlots = typeof __propDef.slots;
export default class MdMailOutline extends SvelteComponentTyped<MdMailOutlineProps, MdMailOutlineEvents, MdMailOutlineSlots> {
}
export {};
