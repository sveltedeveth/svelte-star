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
export type MdWorkProps = typeof __propDef.props;
export type MdWorkEvents = typeof __propDef.events;
export type MdWorkSlots = typeof __propDef.slots;
export default class MdWork extends SvelteComponentTyped<MdWorkProps, MdWorkEvents, MdWorkSlots> {
}
export {};
