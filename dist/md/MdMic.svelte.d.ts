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
export type MdMicProps = typeof __propDef.props;
export type MdMicEvents = typeof __propDef.events;
export type MdMicSlots = typeof __propDef.slots;
export default class MdMic extends SvelteComponentTyped<MdMicProps, MdMicEvents, MdMicSlots> {
}
export {};
