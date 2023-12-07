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
export type MdFiberManualRecordProps = typeof __propDef.props;
export type MdFiberManualRecordEvents = typeof __propDef.events;
export type MdFiberManualRecordSlots = typeof __propDef.slots;
export default class MdFiberManualRecord extends SvelteComponentTyped<MdFiberManualRecordProps, MdFiberManualRecordEvents, MdFiberManualRecordSlots> {
}
export {};
