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
export type IoMdFemaleProps = typeof __propDef.props;
export type IoMdFemaleEvents = typeof __propDef.events;
export type IoMdFemaleSlots = typeof __propDef.slots;
export default class IoMdFemale extends SvelteComponentTyped<IoMdFemaleProps, IoMdFemaleEvents, IoMdFemaleSlots> {
}
export {};
