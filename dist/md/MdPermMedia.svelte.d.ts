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
export type MdPermMediaProps = typeof __propDef.props;
export type MdPermMediaEvents = typeof __propDef.events;
export type MdPermMediaSlots = typeof __propDef.slots;
export default class MdPermMedia extends SvelteComponentTyped<MdPermMediaProps, MdPermMediaEvents, MdPermMediaSlots> {
}
export {};
