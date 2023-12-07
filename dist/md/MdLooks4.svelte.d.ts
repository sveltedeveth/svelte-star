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
export type MdLooks4Props = typeof __propDef.props;
export type MdLooks4Events = typeof __propDef.events;
export type MdLooks4Slots = typeof __propDef.slots;
export default class MdLooks4 extends SvelteComponentTyped<MdLooks4Props, MdLooks4Events, MdLooks4Slots> {
}
export {};
