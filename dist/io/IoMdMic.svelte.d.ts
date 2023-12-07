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
export type IoMdMicProps = typeof __propDef.props;
export type IoMdMicEvents = typeof __propDef.events;
export type IoMdMicSlots = typeof __propDef.slots;
export default class IoMdMic extends SvelteComponentTyped<IoMdMicProps, IoMdMicEvents, IoMdMicSlots> {
}
export {};
