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
export type MdTimelapseProps = typeof __propDef.props;
export type MdTimelapseEvents = typeof __propDef.events;
export type MdTimelapseSlots = typeof __propDef.slots;
export default class MdTimelapse extends SvelteComponentTyped<MdTimelapseProps, MdTimelapseEvents, MdTimelapseSlots> {
}
export {};
