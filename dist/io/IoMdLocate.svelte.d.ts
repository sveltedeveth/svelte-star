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
export type IoMdLocateProps = typeof __propDef.props;
export type IoMdLocateEvents = typeof __propDef.events;
export type IoMdLocateSlots = typeof __propDef.slots;
export default class IoMdLocate extends SvelteComponentTyped<IoMdLocateProps, IoMdLocateEvents, IoMdLocateSlots> {
}
export {};
