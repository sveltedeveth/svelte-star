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
export type MdTocProps = typeof __propDef.props;
export type MdTocEvents = typeof __propDef.events;
export type MdTocSlots = typeof __propDef.slots;
export default class MdToc extends SvelteComponentTyped<MdTocProps, MdTocEvents, MdTocSlots> {
}
export {};
