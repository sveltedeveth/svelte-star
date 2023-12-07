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
export type FaStampProps = typeof __propDef.props;
export type FaStampEvents = typeof __propDef.events;
export type FaStampSlots = typeof __propDef.slots;
export default class FaStamp extends SvelteComponentTyped<FaStampProps, FaStampEvents, FaStampSlots> {
}
export {};
