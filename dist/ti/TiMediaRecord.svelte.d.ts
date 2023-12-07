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
export type TiMediaRecordProps = typeof __propDef.props;
export type TiMediaRecordEvents = typeof __propDef.events;
export type TiMediaRecordSlots = typeof __propDef.slots;
export default class TiMediaRecord extends SvelteComponentTyped<TiMediaRecordProps, TiMediaRecordEvents, TiMediaRecordSlots> {
}
export {};
