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
export type IoMdVideocamProps = typeof __propDef.props;
export type IoMdVideocamEvents = typeof __propDef.events;
export type IoMdVideocamSlots = typeof __propDef.slots;
export default class IoMdVideocam extends SvelteComponentTyped<IoMdVideocamProps, IoMdVideocamEvents, IoMdVideocamSlots> {
}
export {};
