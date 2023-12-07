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
export type MdFiberSmartRecordProps = typeof __propDef.props;
export type MdFiberSmartRecordEvents = typeof __propDef.events;
export type MdFiberSmartRecordSlots = typeof __propDef.slots;
export default class MdFiberSmartRecord extends SvelteComponentTyped<MdFiberSmartRecordProps, MdFiberSmartRecordEvents, MdFiberSmartRecordSlots> {
}
export {};
