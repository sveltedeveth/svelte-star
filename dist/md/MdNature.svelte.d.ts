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
export type MdNatureProps = typeof __propDef.props;
export type MdNatureEvents = typeof __propDef.events;
export type MdNatureSlots = typeof __propDef.slots;
export default class MdNature extends SvelteComponentTyped<MdNatureProps, MdNatureEvents, MdNatureSlots> {
}
export {};
