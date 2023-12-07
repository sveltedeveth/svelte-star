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
export type IoMdFlaskProps = typeof __propDef.props;
export type IoMdFlaskEvents = typeof __propDef.events;
export type IoMdFlaskSlots = typeof __propDef.slots;
export default class IoMdFlask extends SvelteComponentTyped<IoMdFlaskProps, IoMdFlaskEvents, IoMdFlaskSlots> {
}
export {};
