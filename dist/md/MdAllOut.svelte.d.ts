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
export type MdAllOutProps = typeof __propDef.props;
export type MdAllOutEvents = typeof __propDef.events;
export type MdAllOutSlots = typeof __propDef.slots;
export default class MdAllOut extends SvelteComponentTyped<MdAllOutProps, MdAllOutEvents, MdAllOutSlots> {
}
export {};
