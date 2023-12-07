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
export type MdViewArrayProps = typeof __propDef.props;
export type MdViewArrayEvents = typeof __propDef.events;
export type MdViewArraySlots = typeof __propDef.slots;
export default class MdViewArray extends SvelteComponentTyped<MdViewArrayProps, MdViewArrayEvents, MdViewArraySlots> {
}
export {};
