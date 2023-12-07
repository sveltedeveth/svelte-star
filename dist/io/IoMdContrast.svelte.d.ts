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
export type IoMdContrastProps = typeof __propDef.props;
export type IoMdContrastEvents = typeof __propDef.events;
export type IoMdContrastSlots = typeof __propDef.slots;
export default class IoMdContrast extends SvelteComponentTyped<IoMdContrastProps, IoMdContrastEvents, IoMdContrastSlots> {
}
export {};
