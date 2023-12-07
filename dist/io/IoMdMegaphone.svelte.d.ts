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
export type IoMdMegaphoneProps = typeof __propDef.props;
export type IoMdMegaphoneEvents = typeof __propDef.events;
export type IoMdMegaphoneSlots = typeof __propDef.slots;
export default class IoMdMegaphone extends SvelteComponentTyped<IoMdMegaphoneProps, IoMdMegaphoneEvents, IoMdMegaphoneSlots> {
}
export {};
