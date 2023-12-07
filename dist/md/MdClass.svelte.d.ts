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
export type MdClassProps = typeof __propDef.props;
export type MdClassEvents = typeof __propDef.events;
export type MdClassSlots = typeof __propDef.slots;
export default class MdClass extends SvelteComponentTyped<MdClassProps, MdClassEvents, MdClassSlots> {
}
export {};
